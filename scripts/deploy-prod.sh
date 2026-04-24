#!/usr/bin/env bash
set -euo pipefail

echo "Deploy start..."

scp -P "$PROD_PORT" -r public/* "$PROD_USER@$PROD_HOST:$PROD_WEB_ROOT/"

echo "Deploy done."
