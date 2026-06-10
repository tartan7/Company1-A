# Production Monitoring and Alerting Runbook

_Updated: 2026-04-26 (basic monitor automation)_

## Scope

Define baseline monitoring and alerting for UniteCube production so deployment issues are detected quickly.

## What Is Monitored

`scripts/monitor-production.sh` performs the baseline checks:

- content checks for:
  - `/dashboard.html`
  - `/workflows.html`
  - `/support.html`
- TLS certificate expiry check when target URL uses `https://`

Default TLS warning threshold: `21` days before expiry (`TLS_MIN_VALID_DAYS`).

## Local/Manual Execution

```bash
bash scripts/monitor-production.sh "http://localhost:8080"
```

Public HTTPS target example:

```bash
TLS_MIN_VALID_DAYS=30 \
ALERT_WEBHOOK_URL="https://hooks.slack.com/services/..." \
bash scripts/monitor-production.sh "https://unitecube.jp"
```

Behavior:

- exits `0` when all checks pass
- exits non-zero when any check fails
- posts alert payload to `ALERT_WEBHOOK_URL` when provided

## Scheduled Automation

GitHub Actions workflow: `.github/workflows/monitor-production.yml`

- schedule: every 30 minutes
- manual trigger: `workflow_dispatch`
- required variable: `PROD_BASE_URL`
- optional variable: `TLS_MIN_VALID_DAYS`
- optional secret: `PROD_ALERT_WEBHOOK_URL`

## Alert Routing (Baseline)

- Primary signal: GitHub Actions run failure in `Monitor Production` workflow.
- Secondary signal: webhook message payload from `PROD_ALERT_WEBHOOK_URL`.

## Ops Checklist

1. Set `PROD_BASE_URL` in `production` environment variables.
2. Set `PROD_ALERT_WEBHOOK_URL` in `production` environment secrets.
3. Trigger `Monitor Production` workflow manually once and confirm a green run.
4. If using HTTPS, verify the TLS-expiry check output appears in logs.
