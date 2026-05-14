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
      
      // Remove all cloudflare imports
      content = content.replace(/import\s*\{[^}]*\}\s*from\s*["']cloudflare:workers["']\s*;?\n?/g, '');
      content = content.replace(/import\s*\{[^}]*\}\s*from\s*["']@cloudflare\/next-on-pages["']\s*;?\n?/g, '');
      
      // Remove getRequestContext usage
      content = content.replace(/getRequestContext\(\)\.env\./g, 'process.env.');
      
      // Remove process.env.DB usage - replace with a helper
      if (content.includes('process.env.DB') || content.includes('env.DB')) {
        // Remove any remaining env.DB references
        content = content.replace(/env\.DB/g, 'process.env.DB');
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
console.log('Done! Now run: git add . && git commit -m "Fix build" && git push');
