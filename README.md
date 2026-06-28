# Engineering Blog

My personal engineering and technology blog where I write deep-dives on system architecture, software development, data pipelines, and hardware engineering.

## 🚀 Tech Stack

This blog is built for maximum performance and a premium aesthetic:
- **[Astro](https://astro.build)**: For lightning-fast, zero-JS-by-default static site generation.
- **Vanilla CSS**: For a completely custom, lightweight dark-mode design system.
- **GitHub Pages**: For fast, global CDN deployment.

## 🛠️ Local Setup

If you want to run this project locally to preview the code:

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Start the Astro development server:
```bash
npm run dev
```
The site will be available at `http://localhost:4321`.

## 📝 Managing Content

All posts are written in Markdown and stored in the `src/content/blog/` directory.
Astro uses a strict Zod schema for frontmatter validation to ensure all metadata (like publish dates, hero images, and categories) is perfectly typed and formatted.

## ☁️ Deployment

This blog is configured to build and deploy automatically to **GitHub Pages** whenever new content is pushed to the `main` branch.
