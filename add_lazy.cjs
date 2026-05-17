const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf8');

let newContent = content.replace(/<img([\s\S]*?)>/g, (match, p1) => {
  if (p1.includes('loading=')) return match;
  if (p1.includes('Logo.png')) return match; 
  if (p1.includes('hero')) return match;
  return `<img loading="lazy"${p1}>`;
});

fs.writeFileSync('src/App.tsx', newContent, 'utf8');
console.log("Added lazy loading to multi-line images.", newContent.split('loading="lazy"').length - 1);
