#!/usr/bin/env bash
set -e
export PATH="$HOME/.local/share/fnm:$PATH"
eval "$($HOME/.local/share/fnm/fnm env)"
cd /home/karthik/Desktop/vibecode/governance-dashboard
exec ./node_modules/.bin/next dev -p 3000 -H 0.0.0.0
