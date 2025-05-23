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
  const generatedJsPath = path.resolve(__dirname, '../src/config/config.js');

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
  const envOutput = path.resolve(__dirname, '../.env');

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

  // ✨ Mise à jour ou création du fichier entitlements avec syntaxe dynamique
  const entitlementsPath = path.resolve(
    __dirname,
    '../ios/WhiteLabelApp/WhiteLabelApp.entitlements',
  );
  const expectedContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>com.apple.application-identifier</key>
  <string>\$(AppIdentifierPrefix)\$(PRODUCT_BUNDLE_IDENTIFIER)</string>
</dict>
</plist>
`;

  let currentContent = '';
  if (fs.existsSync(entitlementsPath)) {
    currentContent = fs.readFileSync(entitlementsPath, 'utf8');
  }

  if (currentContent !== expectedContent) {
    fs.writeFileSync(entitlementsPath, expectedContent, 'utf8');
    console.log(`✅ Entitlements file written/updated for ${client}`);
  } else {
    console.log('ℹ️ Entitlements already up-to-date – skipped.');
  }
} catch (error) {
  console.error(`❌ ${error.message}`);
  process.exit(1);
}
