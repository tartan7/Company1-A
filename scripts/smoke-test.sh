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

assert_status() {
  local url="$1"
  local expected_status="$2"
  local expected_snippet="${3:-}"
  local body_file
  local status

  body_file="$(mktemp)"
  status="$(curl -sS -o "$body_file" -w "%{http_code}" "$url")"

  if [[ "$status" != "$expected_status" ]]; then
    echo "Smoke test failed: expected HTTP ${expected_status} for ${url}, got ${status}" >&2
    rm -f "$body_file"
    exit 1
  fi

  if [[ -n "$expected_snippet" ]] && ! grep -q "$expected_snippet" "$body_file"; then
    echo "Smoke test failed: expected '${expected_snippet}' in ${url} response body" >&2
    rm -f "$body_file"
    exit 1
  fi

  rm -f "$body_file"
}

assert_contains "${BASE_URL%/}/" "dashboard.html"
assert_contains "${BASE_URL%/}/dashboard.html" "実行履歴"
assert_contains "${BASE_URL%/}/workflows.html" "ワークフロー設定"
assert_contains "${BASE_URL%/}/support.html" "サポートリクエスト"
assert_contains "${BASE_URL%/}/robots.txt" "Sitemap: https://unitecube.jp/sitemap.xml"
assert_contains "${BASE_URL%/}/sitemap.xml" "<loc>https://unitecube.jp/dashboard.html</loc>"
#assert_status "${BASE_URL%/}/not-found" "404" "お探しのページは見つかりませんでした"
assert_contains "${BASE_URL%/}/docs/BRAND-IDENTITY-REVIEW.html" "Brand Identity Review Deck"

echo "Smoke test passed for $BASE_URL"
