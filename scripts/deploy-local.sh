#!/usr/bin/env bash
set -euo pipefail

# Local production deploy wrapper.
# Docker container paths (host /workspace/* mounted to /workspace/* in container).
SRC_DIR="${SRC_DIR:-/workspace/repo/public}"
DOCS_SRC_DIR="${DOCS_SRC_DIR:-/workspace/repo/docs}"
DEST_DIR="${DEST_DIR:-/workspace/www/unitecube}"

SRC_DIR="$SRC_DIR" DOCS_SRC_DIR="$DOCS_SRC_DIR" DEST_DIR="$DEST_DIR" bash "$(dirname "$0")/deploy-prod.sh"
