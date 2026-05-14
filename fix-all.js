const fs = require('fs');
const path = require('path');

function fixDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      fixDir(full);
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      let content = fs.readFileSync(full, 'utf8');
      if (content.includes('@cloudflare/next-on-pages') || content.includes('getRequestContext')) {
        content = content.replace(/import\s*\{\s*getRequestContext\s*\}\s*from\s*'@cloudflare\/next-on-pages'\s*;?\n?/g, '');
        content = content.replace(/import\s*\{\s*getRequestContext\s*\}\s*from\s*"@cloudflare\/next-on-pages"\s*;?\n?/g, '');
        content = content.replace(/getRequestContext\(\)\.env\./g, 'env.');
        if (!content.includes('import { env }') && content.includes('env.DB')) {
          content = "import { env } from \"cloudflare:workers\";\n" + content;
        }
        fs.writeFileSync(full, content, 'utf8');
        console.log('FIXED: ' + full);
      }
    }
  }
}

fixDir('D:/Projects/apexliving/src/app');
console.log('Done!');
