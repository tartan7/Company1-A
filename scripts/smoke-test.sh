#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:?usage: smoke-test.sh <base-url>}"

assert_contains() {
  local url="$1"
  local expected="$2"
  local body
  body="$(curl -fsSL "$url")"
  if ! grep -q "$expected" <<<"$body"; then
    echo "Smoke test failed: expected '$expected' in $url" >&2
    exit 1
  fi
}

assert_contains "${BASE_URL%/}/dashboard.html" "実行履歴"
assert_contains "${BASE_URL%/}/workflows.html" "ワークフロー設定"
assert_contains "${BASE_URL%/}/support.html" "サポートリクエスト"

echo "Smoke test passed for $BASE_URL"
