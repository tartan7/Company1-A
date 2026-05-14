#!/usr/bin/env bash
set -euo pipefail

MONITOR_DIR="${MONITOR_DIR:-/home/tartan/workspace/www/unitecube}"
ALERT_EMAIL="${ALERT_EMAIL:-admin@unitecube.jp}"
FILES=(
  "dashboard.html"
  "workflows.html"
  "support.html"
  "robots.txt"
  "sitemap.xml"
  "docs/BRAND-IDENTITY-REVIEW.html"
)

echo "Monitoring $MONITOR_DIR..."

FAILED=0
for file in "${FILES[@]}"; do
  path="${MONITOR_DIR%/}/$file"
  if [ ! -f "$path" ]; then
    echo "ALERT: $path not found" >&2
    FAILED=1
  else
    echo "OK: $path exists"
  fi
done

if [ $FAILED -eq 1 ]; then
  echo "Sending alert..."
  if command -v mail >/dev/null 2>&1; then
    echo "Production checks failed for $MONITOR_DIR" | mail -s "UniteCube Production Alert" "$ALERT_EMAIL"
  fi
  exit 1
fi

echo "All checks passed."
