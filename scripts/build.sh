#!/bin/bash

set -e  
echo "Building monorepo in specific order..."
workspaces=(
  "libs/utils"
  "libs/ui"
  "libs/storybook"
  "apps/api"
  "apps/web"
)
for ws in "${workspaces[@]}"; do
  echo "🔧 Building $ws..."
  (cd "$ws" && npm run build)
done
echo "✅ Build completed."
