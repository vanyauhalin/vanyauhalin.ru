#!/bin/sh

sh ./workspace/scripts/clean.sh & clean_id=$!

wait $clean_id

gulp build && node -r esm node_modules/.bin/eleventy
