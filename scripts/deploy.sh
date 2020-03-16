#!/usr/bin/env sh
set -e

npm install
npm run build
cd dist

git init
git config --local user.email "actions@github.com"
git config --local user.name "GitHub Actions"

git add -A
git commit -m 'Deploy 🚀'
