const fs = require('fs');
const path = require('path');

const client = process.argv[2];
const env = process.argv[3];

if (!client || !env) {
  console.error('❌ Usage: node generate-env.js <client> <env>');
  process.exit(1);
}

const inputPath = path.resolve(
  __dirname,
  `../clients/${client}/environments/.env.${env}`,
);
const outputPath = path.resolve(__dirname, '../.env');

if (!fs.existsSync(inputPath)) {
  console.error(`❌ Missing file: ${inputPath}`);
  process.exit(1);
}

fs.copyFileSync(inputPath, outputPath);
console.log(`✅ Environment written to ${outputPath}`);
