import { copyFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

const cnamePath = join(process.cwd(), 'CNAME');
const distPath = join(process.cwd(), 'dist', 'CNAME');
const nojekyllPath = join(process.cwd(), 'dist', '.nojekyll');

// Copy CNAME file if it exists
if (existsSync(cnamePath)) {
  copyFileSync(cnamePath, distPath);
  console.log('✅ CNAME file copied to dist/');
} else {
  console.log('⚠️  No CNAME file found, skipping');
}

// Always create .nojekyll file to prevent Jekyll processing
writeFileSync(nojekyllPath, '# This file prevents GitHub Pages from using Jekyll\n# Astro generates static HTML, so Jekyll processing is not needed\n');
console.log('✅ .nojekyll file created in dist/');
