const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = {
  '--color-mystic-accent': '--color-terracotta',
  '--color-mystic-emerald': '--color-deep-brown',
  '--color-mystic-primary': '--color-cream',
  '--color-mystic-secondary': '--color-sand',
  '--color-forest-green': '--color-deep-brown',
  '--color-sage-green': '--color-terracotta',
  '--color-warm-white': '--color-cream',
  '--color-soft-cream': '--color-sand',
  '--color-charcoal': '--color-deep-brown'
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
console.log("Color replacement complete.");
