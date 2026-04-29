#!/usr/bin/env bash
set -euo pipefail

# Local production deploy wrapper.
# Defaults align with current production host layout.
SRC_DIR="${SRC_DIR:-/home/tartan/workspace/repo/public}"
DOCS_SRC_DIR="${DOCS_SRC_DIR:-/home/tartan/workspace/repo/docs}"
DEST_DIR="${DEST_DIR:-/home/tartan/workspace/www/unitecube}"

SRC_DIR="$SRC_DIR" DOCS_SRC_DIR="$DOCS_SRC_DIR" DEST_DIR="$DEST_DIR" bash "$(dirname "$0")/deploy-prod.sh"
