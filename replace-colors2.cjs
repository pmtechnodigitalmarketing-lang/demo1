const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = {
  '--color-aurora-green': '--color-terracotta',
  '--color-aurora-purple': '--color-sand',
  '--color-aurora-blue': '--color-deep-brown',
  '--color-brand-yellow': '--color-antique-gold',
  '--color-brand-green': '--color-deep-brown',
  '#fafafa': '#FFFFFF',
  '#6366f1': '#C85A3F' // just in case
};

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const [oldVar, newVar] of Object.entries(replacements)) {
        content = content.split(oldVar).join(newVar);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  });
}

processDirectory(directoryPath);
console.log("Color replacement complete for aurora variables.");
