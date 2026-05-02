const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'src', 'slides'),
  path.join(__dirname, 'src', 'components')
];

const replacements = [
  { from: /\bmb-24\b/g, to: 'mb-10' },
  { from: /\bmd:mb-24\b/g, to: 'md:mb-10' },
  { from: /\bmb-20\b/g, to: 'mb-8' },
  { from: /\bmd:mb-20\b/g, to: 'md:mb-8' },
  { from: /\bmb-16\b/g, to: 'mb-6' },
  { from: /\bmd:mb-16\b/g, to: 'md:mb-6' },
  { from: /\bmb-12\b/g, to: 'mb-6' },
  { from: /\bmd:mb-12\b/g, to: 'md:mb-6' },
  { from: /\bgap-12\b/g, to: 'gap-6' },
  { from: /\bmd:gap-12\b/g, to: 'md:gap-6' },
  { from: /\bgap-10\b/g, to: 'gap-6' },
  { from: /\bmd:gap-10\b/g, to: 'md:gap-6' },
  { from: /\bgap-8\b/g, to: 'gap-4' },
  { from: /\bmd:gap-8\b/g, to: 'md:gap-4' },
  { from: /\bp-24\b/g, to: 'p-8' },
  { from: /\bmd:p-24\b/g, to: 'md:p-8' },
  { from: /\bp-12\b/g, to: 'p-6' },
  { from: /\bmd:p-12\b/g, to: 'md:p-6' },
  { from: /\bp-10\b/g, to: 'p-5' },
  { from: /\bmd:p-10\b/g, to: 'md:p-5' },
  { from: /\bpt-24\b/g, to: 'pt-12' },
  { from: /\bmd:pt-24\b/g, to: 'md:pt-12' },
];

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = content;
    
    replacements.forEach(({ from, to }) => {
      modified = modified.replace(from, to);
    });

    if (content !== modified) {
      fs.writeFileSync(filePath, modified, 'utf8');
      console.log(`Updated ${file}`);
    }
  });
});
