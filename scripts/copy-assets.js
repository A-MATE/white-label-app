const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const client = process.argv[2];

if (!client) {
  console.error('❌ Usage: node copy-assets.js <client>');
  process.exit(1);
}

const src = path.resolve(__dirname, `../clients/${client}/assets/images`);
const dest = path.resolve(__dirname, '../src/assets/images');

if (!fs.existsSync(src)) {
  console.error(`❌ Source folder does not exist: ${src}`);
  process.exit(1);
}

// Clean destination
fse.emptyDirSync(dest);

// Copy
fse.copySync(src, dest);

console.log(`✅ Copied assets from ${src} to ${dest}`);
