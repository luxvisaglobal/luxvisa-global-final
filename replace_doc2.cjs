const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(/Documentation/g, 'Document Legalization');
c = c.replace(/documentation/g, 'document legalization');

fs.writeFileSync('src/App.tsx', c);
console.log('Replaced all occurrences.');
