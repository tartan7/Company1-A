#!/usr/bin/env bash
set -euo pipefail

echo "Deploying local production..."

# Docker container paths (host /workspace/* mounted to /workspace/* in container)
SRC_DIR="${SRC_DIR:-/workspace/repo/public}"
DOCS_SRC_DIR="${DOCS_SRC_DIR:-/workspace/repo/docs}"
DEST_DIR="${DEST_DIR:-/workspace/www/unitecube}"

if [[ ! -d "$SRC_DIR" ]]; then
  echo "Source directory not found: $SRC_DIR" >&2
  exit 1
fi

mkdir -p "$DEST_DIR"

echo "SRC=${SRC_DIR%/}/"
echo "DOCS_SRC=${DOCS_SRC_DIR%/}/"
echo "DEST=${DEST_DIR%/}/"
if command -v rsync >/dev/null 2>&1; then
  rsync -av --delete "${SRC_DIR%/}/" "${DEST_DIR%/}/"
else
  echo "rsync not found; using cp fallback."
  find "${DEST_DIR%/}" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
  cp -a "${SRC_DIR%/}/." "${DEST_DIR%/}/"
fi

DOCS_DEST_DIR="${DEST_DIR%/}/docs"
if [[ -d "$DOCS_SRC_DIR" ]]; then
  mkdir -p "$DOCS_DEST_DIR"
  echo "Syncing docs HTML files to ${DOCS_DEST_DIR%/}/"
  if command -v rsync >/dev/null 2>&1; then
    rsync -av --delete --prune-empty-dirs \
      --include='*/' \
      --include='*.html' \
      --exclude='*' \
      "${DOCS_SRC_DIR%/}/" "${DOCS_DEST_DIR%/}/"
  else
    find "${DOCS_DEST_DIR%/}" -mindepth 1 -exec rm -rf {} +
    while IFS= read -r -d '' src_file; do
      rel_path="${src_file#${DOCS_SRC_DIR%/}/}"
      dest_path="${DOCS_DEST_DIR%/}/${rel_path}"
      mkdir -p "$(dirname "$dest_path")"
      cp -a "$src_file" "$dest_path"
    done < <(find "${DOCS_SRC_DIR%/}" -type f -name '*.html' -print0)
  fi
else
  echo "Docs source directory not found: ${DOCS_SRC_DIR%/} (skipping docs sync)"
fi

echo "Deploy completed."
