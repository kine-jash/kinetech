import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const cnamePath = join(process.cwd(), 'CNAME');
const distPath = join(process.cwd(), 'dist', 'CNAME');

if (existsSync(cnamePath)) {
  copyFileSync(cnamePath, distPath);
  console.log('✅ CNAME file copied to dist/');
} else {
  console.log('⚠️  No CNAME file found, skipping');
}
