#!/bin/bash


# Automatically get the package version for package json and make a ts file with it in src that is gitignored

# https://stackoverflow.com/questions/59895/how-do-i-get-the-directory-where-a-bash-script-is-located-from-within-the-script
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PARENT_DIR="$(dirname "$SCRIPT_DIR")"

VERSION=$(cat $PARENT_DIR/package.json | jq -r '.version')


echo "export const VERSION = \"$VERSION\";" \
  > $PARENT_DIR/src/version.ts
