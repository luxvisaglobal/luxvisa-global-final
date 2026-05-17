const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(/Documentation Services/g, 'Document Legalization Services');
c = c.replace(/documentation services/g, 'document legalization services');
c = c.replace(/>Documentation</g, '>Document Legalization<');
c = c.replace(/accurate documentation,/g, 'accurate document legalization,');
c = c.replace(/From documentation to/g, 'From document legalization to');
c = c.replace(/documentation consultancy/g, 'document legalization consultancy');
c = c.replace(/complete documentation support/g, 'complete document legalization support');

fs.writeFileSync('src/App.tsx', c);
console.log('Replaced occurrences.');
