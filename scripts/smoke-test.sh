#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:?usage: smoke-test.sh <base-url-or-local-path>}"
MODE="url"
if [[ "$TARGET" == /* ]]; then
  MODE="local"
fi

assert_contains() {
  local path="$1"
  local expected="$2"
  local body
  if [[ "$MODE" == "local" ]]; then
    if [[ ! -f "$path" ]]; then
      echo "Smoke test failed: file not found: $path" >&2
      exit 1
    fi
    body="$(cat "$path")"
  else
    body="$(curl -fsSL "$path")"
  fi
  if ! grep -q "$expected" <<<"$body"; then
    echo "Smoke test failed: expected '$expected' in $path" >&2
    exit 1
  fi
}

assert_status() {
  local path="$1"
  local expected_status="$2"
  local expected_snippet="${3:-}"
  local body_file
  local status

  if [[ "$MODE" == "local" ]]; then
    if [[ -f "$path" ]]; then
      status="200"
    else
      status="404"
    fi
    if [[ "$status" != "$expected_status" ]]; then
      echo "Smoke test failed: expected HTTP ${expected_status} for ${path}, got ${status}" >&2
      exit 1
    fi
    if [[ -n "$expected_snippet" && -f "$path" ]] && ! grep -q "$expected_snippet" "$path"; then
      echo "Smoke test failed: expected '${expected_snippet}' in ${path} response body" >&2
      exit 1
    fi
  else
    body_file="$(mktemp)"
    status="$(curl -sS -o "$body_file" -w "%{http_code}" "$path")"
    if [[ "$status" != "$expected_status" ]]; then
      echo "Smoke test failed: expected HTTP ${expected_status} for ${path}, got ${status}" >&2
      rm -f "$body_file"
      exit 1
    fi
    if [[ -n "$expected_snippet" ]] && ! grep -q "$expected_snippet" "$body_file"; then
      echo "Smoke test failed: expected '${expected_snippet}' in ${path} response body" >&2
      rm -f "$body_file"
      exit 1
    fi
    rm -f "$body_file"
  fi
}

assert_contains "${TARGET%/}/dashboard.html" "実行履歴"
assert_contains "${TARGET%/}/workflows.html" "ワークフロー設定"
assert_contains "${TARGET%/}/support.html" "サポートリクエスト"
#assert_contains "${TARGET%/}/robots.txt" "Sitemap: https://unitecube.jp/sitemap.xml"
#assert_contains "${TARGET%/}/sitemap.xml" "<loc>https://unitecube.jp/dashboard.html</loc>"
#assert_status "${TARGET%/}/not-found" "404" "お探しのページは見つかりませんでした"
assert_contains "${TARGET%/}/docs/BRAND-IDENTITY-REVIEW.html" "Brand Identity Review Deck"

echo "Smoke test passed for $TARGET"
