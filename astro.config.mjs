import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://kine-jash.github.io',
  base: '/',
  build: {
    inlineStylesheets: 'always',
  },
  // Build to 'docs' folder for GitHub Pages branch deployment
  outDir: 'docs',
});
