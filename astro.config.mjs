import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  output: 'static',
  site: 'https://kinetech.in',
  base: '/',
  build: {
    inlineStylesheets: 'auto',
  },
  // For GitHub Pages: Use 'docs' folder OR use GitHub Actions (commented out)
  // Option 1: Build to 'docs' folder (uncomment the line below)
  // outDir: 'docs',
  
  // Option 2: Use default 'dist' folder with GitHub Actions (recommended)
  // Keep default 'dist' folder and use the GitHub Actions workflow
});
