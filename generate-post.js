const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");
const path = require("path");

// Ensure API key is present
if (!process.env.GEMINI_API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable is not set.");
  process.exit(1);
}

// Initialize the Gemini client
// Note: @google/genai uses process.env.GEMINI_API_KEY by default if not passed directly
const ai = new GoogleGenAI({});

const PROMPT = `
You are an expert tech blogger. Write an engaging, insightful, and informative blog post about a current or emerging topic in "Technology and Programming" or "Artificial Intelligence and Future Trends". 

Requirements:
1. The post must be written in Markdown format.
2. It must include a YAML frontmatter block at the very top with the following fields:
   - title: (A catchy, click-worthy title)
   - description: (A brief 1-2 sentence summary of the post)
3. The content should be well-structured with H2/H3 headings, bullet points where appropriate, and a conclusion.
4. If relevant, include a small code snippet to illustrate a point.
5. Do not wrap the output in markdown code blocks (\`\`\`markdown), just output the raw markdown with frontmatter.
`;

async function generatePost() {
  try {
    console.log("Generating new blog post...");
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: PROMPT,
      config: {
        temperature: 0.7,
      }
    });

    let content = response.text;
    
    // Clean up if the model wrapped it in markdown code blocks
    if (content.startsWith("\`\`\`markdown")) {
        content = content.replace(/^\`\`\`markdown\n/, "").replace(/\n\`\`\`$/, "");
    }

    // Ensure the posts directory exists
    const postsDir = path.join(__dirname, "src", "posts");
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }

    // Create a filename based on the current date and time
    const date = new Date();
    const dateString = date.toISOString().split("T")[0];
    const timeString = date.getTime();
    const filename = `${dateString}-${timeString}.md`;
    const filepath = path.join(postsDir, filename);

    // Save the file
    fs.writeFileSync(filepath, content);
    console.log(`Successfully generated and saved new post: ${filename}`);
  } catch (error) {
    console.error("Failed to generate post:", error);
    process.exit(1);
  }
}

generatePost();
