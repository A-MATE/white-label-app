const fs = require('fs');
const path = require('path');

const client = process.argv[2];
if (!client) {
  console.error('❌ Please provide a client name');
  process.exit(1);
}

const inputPath = path.resolve(
  __dirname,
  `../clients/${client}/config/config.json`,
);
const outputPath = path.resolve(__dirname, '../src/config/generated.js');

if (!fs.existsSync(inputPath)) {
  console.error(`❌ Missing file: ${inputPath}`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const output = `// AUTO-GENERATED FILE\nexport default ${JSON.stringify(
  config,
  null,
  2,
)};`;

fs.writeFileSync(outputPath, output);
console.log(`✅ Client config written to ${outputPath}`);
