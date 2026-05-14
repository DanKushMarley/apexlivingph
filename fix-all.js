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
      let changed = false;
      
      // Remove old imports
      content = content.replace(/import\s*\{\s*getRequestContext\s*\}\s*from\s*'@cloudflare\/next-on-pages'\s*;?\n?/g, '');
      content = content.replace(/import\s*\{\s*getRequestContext\s*\}\s*from\s*"@cloudflare\/next-on-pages"\s*;?\n?/g, '');
      content = content.replace(/import\s*\{\s*env\s*\}\s*from\s*"cloudflare:workers"\s*;?\n?/g, '');
      content = content.replace(/import\s*\{\s*env\s*\}\s*from\s*'cloudflare:workers'\s*;?\n?/g, '');
      
      // Replace getRequestContext().env. with process.env.
      content = content.replace(/getRequestContext\(\)\.env\./g, 'process.env.');
      
      // Replace env.DB with process.env.DB
      content = content.replace(/env\.DB/g, 'process.env.DB');
      
      if (content.includes('process.env.DB')) {
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(full, content, 'utf8');
        console.log('FIXED: ' + full);
      }
    }
  }
}

fixDir('D:/Projects/apexliving/src/app');
console.log('Done!');
