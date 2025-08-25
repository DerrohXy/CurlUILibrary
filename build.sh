#!/bin/bash

# Compile TypeScript
tsc

# Copy styles
cp src/styles.css dist

# Copy package.json files
icons=(
  ai bi bs cg ci di fa fa6 fc fi gi go gr hi hi2 im io5
  lia lu md pi ri rx si sl tb tfi ti vsc wi
)

for icon in "${icons[@]}"; do
  cp "src/icons/$icon/package.json" "dist/icons/$icon"
done
