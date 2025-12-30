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
  // Build to 'docs' folder for GitHub Pages branch deployment
  outDir: 'docs',
});
