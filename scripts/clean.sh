#!/bin/bash

echo "Cleaning node_modules and dist folders..."
find . -type d \( -name "node_modules" -o -name "dist" \) -prune -exec rm -rf '{}' +
echo "Clean-up complete."
