#!/bin/bash

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: yarn startClient <CLIENT_NAME> <ENVIRONMENT>"
  exit 1
fi

CLIENT_NAME=$1
ENVIRONMENT=$2

export CLIENT_NAME=$CLIENT_NAME
export ENVIRONMENT=$ENVIRONMENT

# Paths for source and target assets folders
CLIENT_ASSETS_PATH="./clients/$CLIENT_NAME/assets/images"
TARGET_ASSETS_PATH="./src/assets/images"

# Function to copy client-specific assets
copy_assets() {
  echo "Copying assets for client: $CLIENT_NAME"

  # Check if the source folder exists
  if [ ! -d "$CLIENT_ASSETS_PATH" ]; then
    echo "Assets folder for client $CLIENT_NAME does not exist."
    exit 1
  fi

  # Remove existing files in the target folder
  rm -rf "$TARGET_ASSETS_PATH/*"

  # Copy client assets to the target folder
  cp -R "$CLIENT_ASSETS_PATH/." "$TARGET_ASSETS_PATH/"

  echo "Assets copy completed."
}

# Call the function to copy the assets
copy_assets

# Start the React Native application
npx react-native start --reset-cache