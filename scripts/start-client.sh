#!/bin/bash

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: yarn startClient <CLIENT_NAME> <ENVIRONMENT>"
  exit 1
fi

CLIENT_NAME=$1
ENVIRONMENT=$2

export CLIENT_NAME=$CLIENT_NAME
export ENVIRONMENT=$ENVIRONMENT

npx react-native start