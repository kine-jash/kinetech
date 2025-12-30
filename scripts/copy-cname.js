import { copyFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

const cnamePath = join(process.cwd(), 'CNAME');
const docsPath = join(process.cwd(), 'docs', 'CNAME');
const nojekyllPath = join(process.cwd(), 'docs', '.nojekyll');

// Copy CNAME file if it exists
if (existsSync(cnamePath)) {
  copyFileSync(cnamePath, docsPath);
  console.log('✅ CNAME file copied to docs/');
} else {
  console.log('⚠️  No CNAME file found, skipping');
}

// Always create .nojekyll file to prevent Jekyll processing
writeFileSync(nojekyllPath, '# This file prevents GitHub Pages from using Jekyll\n# Astro generates static HTML, so Jekyll processing is not needed\n');
console.log('✅ .nojekyll file created in docs/');
