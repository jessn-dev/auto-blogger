# Auto Blogger

A fully automated, AI-powered blog built with Eleventy and GitHub Actions. Every week, a GitHub Action runs a script that uses the free Google Gemini API to generate a new blog post on "Technology and Programming" or "Artificial Intelligence and Future Trends", commits it to the repository, and GitHub Pages automatically deploys the updated site.

## Stack
- **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
- **AI Integration:** Google Gemini API (`@google/genai`)
- **Automation & Hosting:** GitHub Actions & GitHub Pages

## Local Setup

1. **Install Dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Set up Environment Variables:**
   Create a \`.env\` file in the root directory and add your Gemini API Key:
   \`\`\`env
   GEMINI_API_KEY=your_api_key_here
   \`\`\`
   *(You can get a free key from Google AI Studio)*

3. **Generate a Post Manually:**
   \`\`\`bash
   node generate-post.js
   \`\`\`
   This will create a new markdown file in \`src/posts/\`.

4. **Run the Site Locally:**
   \`\`\`bash
   npx @11ty/eleventy --serve
   \`\`\`
   The site will be available at \`http://localhost:8080\`.

## GitHub Actions Automation

To make the blog run automatically on GitHub:

1. Push this code to a new GitHub repository.
2. Go to **Settings > Secrets and variables > Actions** in your repository.
3. Click **New repository secret**.
4. Name it \`GEMINI_API_KEY\` and paste your API key as the value.
5. Go to **Settings > Pages**.
6. Under **Build and deployment > Source**, select **GitHub Actions**.

### Workflows
- **Generate Weekly Blog Post (\`.github/workflows/autopost.yml\`):** Runs every Monday at midnight. It generates a new post using the Gemini API and commits it back to the repository.
- **Deploy to GitHub Pages (\`.github/workflows/deploy.yml\`):** Runs every time a commit is pushed to \`main\` (including the automated commits from the action above). It builds the Eleventy site and deploys it.
