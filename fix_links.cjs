const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(/<a\n\s+href="#contact"\n\s+className="inline-flex items-center gap-3 bg/g, '<a\n                  href="#contact"\n                  onClick={(e) => scrollToSection(e, "contact")}\n                  className="inline-flex items-center gap-3 bg');

// Also for the logo link
c = c.replace(/<a href="#" className="flex items-center gap-3">/g, '<a href="#" onClick={(e) => scrollToSection(e, "home")} className="flex items-center gap-3">');

fs.writeFileSync('src/App.tsx', c);
console.log('Fixed links for smooth scrolling');
