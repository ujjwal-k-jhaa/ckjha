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
      
      // Match lines with large text classes that have font-bold
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
         if (lines[i].match(/text-([3-9]xl|\[[0-9]+px\]|\[[0-9.]+rem\]|\[[0-9]+vw\])/) && lines[i].includes('font-bold')) {
             lines[i] = lines[i].replace('font-bold', 'font-medium');
         }
         if (lines[i].match(/text-([3-9]xl|\[[0-9]+px\]|\[[0-9.]+rem\]|\[[0-9]+vw\])/) && lines[i].includes('font-black')) {
             lines[i] = lines[i].replace('font-black', 'font-semibold');
         }
      }
      
      fs.writeFileSync(fullPath, lines.join('\n'));
    }
  }
}

processDir('./src/components');
processDir('./src/pages');
console.log('Done!');
