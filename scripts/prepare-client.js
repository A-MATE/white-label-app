#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const yargs = require('yargs');
const util = require('util');

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
  // 🔁 Chargement du config.json
  const inputConfigPath = path.resolve(
    __dirname,
    `../clients/${client}/config/config.json`,
  );
  const outputConfigPath = path.resolve(__dirname, '../src/config/config.ts');

  if (!fs.existsSync(inputConfigPath)) {
    throw new Error(`Missing config.json for client ${client}`);
  }

  const configObject = JSON.parse(fs.readFileSync(inputConfigPath, 'utf8'));

  // ✅ Formatage pour TypeScript
  const formattedObject = util.inspect(configObject, {
    depth: null,
    compact: false,
    maxArrayLength: null,
    breakLength: 80,
    sorted: false,
  });

  const tsOutput = `// AUTO-GENERATED FILE
import { AppConfig } from 'src/shared/types/app-config.type';

const config: AppConfig = ${formattedObject};

export default config;
`;

  fs.writeFileSync(outputConfigPath, tsOutput);
  console.log(`✅ TypeScript config generated for ${client}`);

  // 🔁 Copie du fichier .env
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

  // 🔁 Copie des assets
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

  // ✨ Mise à jour du fichier entitlements
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
