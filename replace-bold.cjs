const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We will match <h1 ... font-bold ... >, <h2 ... font-bold ... >, etc.
      // But it's easier to just match `font-bold` when it is near a large text class
      // Actually, since all these files use `font-bold`, let's just do a regex replace
      // for any h1-h6 tags containing `className="..."` with `font-bold`.
      
      // Let's replace font-bold with font-medium for h1, h2, h3, h4
      content = content.replace(/<(h[1-6])[^>]*className="[^"]*font-bold[^"]*"[^>]*>/g, (match) => {
          return match.replace('font-bold', 'font-medium');
      });
      
      // Also for the big bottom text which is font-black
      content = content.replace(/<(h[1-6])[^>]*className="[^"]*font-black[^"]*"[^>]*>/g, (match) => {
          return match.replace('font-black', 'font-semibold');
      });

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('./src/components');
processDir('./src/pages');
console.log('Done!');
