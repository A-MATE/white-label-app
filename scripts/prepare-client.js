#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const yargs = require('yargs');

const argv = yargs
  .option('client', {
    alias: 'c',
    description: 'Client name',
    type: 'string',
    demandOption: true,
  })
  .option('env', {
    alias: 'e',
    description: 'Environment (dev, staging, prod)',
    type: 'string',
    demandOption: true,
  })
  .help()
  .alias('help', 'h').argv;

const client = argv.client;
const env = argv.env;

try {
  const configPath = path.resolve(
    __dirname,
    `../clients/${client}/config/config.json`,
  );
  const generatedJsPath = path.resolve(__dirname, '../src/config/generated.js');

  if (!fs.existsSync(configPath)) {
    throw new Error(`Missing config.json for client ${client}`);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const jsOutput = `// AUTO-GENERATED FILE\nexport default ${JSON.stringify(
    config,
    null,
    2,
  )};\n`;
  fs.writeFileSync(generatedJsPath, jsOutput);
  console.log(`✅ Config generated for ${client}`);

  const envPath = path.resolve(
    __dirname,
    `../clients/${client}/environments/.env.${env}`,
  );
  const envOutput = path.resolve(__dirname, '../.env.generated');

  if (!fs.existsSync(envPath)) {
    throw new Error(`Missing .env.${env} for ${client}`);
  }
  fs.copyFileSync(envPath, envOutput);
  console.log(`✅ .env.generated written for ${client} - ${env}`);

  const srcAssets = path.resolve(
    __dirname,
    `../clients/${client}/assets/images`,
  );
  const destAssets = path.resolve(__dirname, '../src/assets/images');
  if (!fs.existsSync(srcAssets)) {
    throw new Error(`Missing assets/images for ${client}`);
  }
  fse.emptyDirSync(destAssets);
  fse.copySync(srcAssets, destAssets);
  console.log(`✅ Assets copied for ${client}`);
} catch (error) {
  console.error(`❌ ${error.message}`);
  process.exit(1);
}
