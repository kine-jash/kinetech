# Kinetech Solutions - Astro SSG Site

A modern, static site generator (SSG) website built with Astro, featuring AI-powered chat, interactive cost estimation, and responsive design.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

This generates a static site in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Products.astro
│   │   ├── CostEstimator.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── ChatWidget.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── utils/
│   │   └── scroll.ts
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

The chat widget uses Google's Gemini API. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

## ✨ Features

- **Static Site Generation (SSG)** - Pre-rendered HTML for optimal performance
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Components** - Cost estimator, contact form, chat widget
- **Smooth Scrolling** - Custom scroll service for navigation
- **AI Chat Widget** - Powered by Google Gemini
- **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Google Gemini AI](https://ai.google.dev) - AI chat integration

## 📝 Best Practices Implemented

1. **Component-based Architecture** - Reusable Astro components
2. **Client-side Hydration** - Only interactive components load JavaScript
3. **Performance** - Minimal JavaScript, optimized assets
4. **Accessibility** - Semantic HTML and ARIA labels
5. **SEO** - Proper meta tags and structured data
6. **Type Safety** - TypeScript throughout

## 🚀 Deployment

### GitHub Pages (Recommended)

This site is configured for GitHub Pages deployment. You have two options:

#### Option 1: GitHub Actions (Recommended - Automatic)

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow (`.github/workflows/deploy.yml`) will automatically deploy on every push to `main`

The build output goes to `dist/` folder and GitHub Actions handles the deployment.

#### Option 2: Manual Build to `docs` Folder

1. Update `astro.config.mjs` and uncomment `outDir: 'docs'`
2. Build the site:
   ```bash
   npm run build
   ```
3. Commit the `docs/` folder:
   ```bash
   git add docs/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```
4. Go to repository Settings → Pages
5. Under "Source", select "Deploy from a branch" → `main` → `/docs`

#### Custom Domain (kinetech.in)

The `CNAME` file is automatically copied to the build output. Make sure:
1. Your domain DNS points to GitHub Pages
2. The `CNAME` file contains `kinetech.in`
3. GitHub Pages settings have the custom domain configured

### Other Hosting Options

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your Git repository
- **Cloudflare Pages**: Connect repository

## 📄 License

All rights reserved - Kinetech Solutions
