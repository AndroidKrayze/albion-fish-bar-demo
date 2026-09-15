#!/usr/bin/env bash
# Deploy Albion Fish Bar demo to GitHub Pages (AndroidKrayze/albion-fish-bar-demo)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REPO_URL="${REPO_URL:-https://github.com/AndroidKrayze/albion-fish-bar-demo.git}"

npm run build
cp -f public/.nojekyll out/.nojekyll

# Push full source to main
git remote remove github 2>/dev/null || true
git remote add github "$REPO_URL"
git push github HEAD:main

# Force-push out/ to orphan gh-pages
TMP="$(mktemp -d)"
cleanup() { rm -rf "$TMP"; }
trap cleanup EXIT

cp -a out/. "$TMP/"
cd "$TMP"
git init
git checkout -b gh-pages
git add -A
git -c user.email="cursoragent@cursor.com" -c user.name="Cursor Agent" commit -m "Deploy static export to GitHub Pages"
git remote add origin "$REPO_URL"
git push -f origin gh-pages

echo "Deployed. Enable Pages: Settings → Pages → Deploy from branch gh-pages / root"
echo "Live: https://androidkrayze.github.io/albion-fish-bar-demo/"
