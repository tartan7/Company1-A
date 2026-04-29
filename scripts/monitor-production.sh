#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:?usage: monitor-production.sh <base-url>}"
TLS_MIN_VALID_DAYS="${TLS_MIN_VALID_DAYS:-21}"
ALERT_WEBHOOK_URL="${ALERT_WEBHOOK_URL:-}"

failure_count=0
messages=()

add_failure() {
  local message="$1"
  failure_count=$((failure_count + 1))
  messages+=("$message")
  echo "FAIL: $message" >&2
}

check_http_contains() {
  local url="$1"
  local expected="$2"
  local body

  if ! body="$(curl -fsSL --max-time 20 "$url")"; then
    add_failure "request failed: $url"
    return
  fi

  if ! grep -q "$expected" <<<"$body"; then
    add_failure "missing expected content '$expected' in $url"
    return
  fi

  echo "PASS: $url"
}

check_tls_expiry() {
  local host="$1"
  local cert_end raw_epoch now_epoch remaining_days

  if ! cert_end="$(openssl s_client -servername "$host" -connect "$host:443" < /dev/null 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | sed 's/^notAfter=//')"; then
    add_failure "unable to read TLS certificate for $host"
    return
  fi

  if [[ -z "$cert_end" ]]; then
    add_failure "empty TLS certificate expiry for $host"
    return
  fi

  if ! raw_epoch="$(date -d "$cert_end" +%s 2>/dev/null)"; then
    add_failure "unable to parse TLS expiry for $host: $cert_end"
    return
  fi

  now_epoch="$(date +%s)"
  remaining_days="$(( (raw_epoch - now_epoch) / 86400 ))"

  if (( remaining_days < TLS_MIN_VALID_DAYS )); then
    add_failure "TLS certificate for $host expires in ${remaining_days} days (< ${TLS_MIN_VALID_DAYS})"
    return
  fi

  echo "PASS: TLS certificate for $host expires in ${remaining_days} days"
}

notify_alerts() {
  if [[ -z "$ALERT_WEBHOOK_URL" || "$failure_count" -eq 0 ]]; then
    return
  fi

  local joined
  joined="$(printf '%s\\n' "${messages[@]}")"

  curl -fsSL -X POST "$ALERT_WEBHOOK_URL" \
    -H 'Content-Type: application/json' \
    --data "{\"text\":\"[UniteCube monitor] ${failure_count} check(s) failed for ${BASE_URL}:\\n${joined}\"}" \
    >/dev/null || true
}

check_http_contains "${BASE_URL%/}/dashboard.html" "実行履歴"
check_http_contains "${BASE_URL%/}/workflows.html" "ワークフロー設定"
check_http_contains "${BASE_URL%/}/support.html" "サポートリクエスト"

if [[ "$BASE_URL" == https://* ]]; then
  host="$(sed -E 's#^https://([^/:]+).*$#\1#' <<<"$BASE_URL")"
  check_tls_expiry "$host"
fi

notify_alerts

if (( failure_count > 0 )); then
  exit 1
fi

echo "Production monitor checks passed for $BASE_URL"
