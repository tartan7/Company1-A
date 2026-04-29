# Production Deployment Runbook (Local Host)

Updated: 2026-04-26 (local deploy + baseline monitoring integrated)

## Deployment Model

Production is local-folder based on the same machine that runs Paperclip and
Nginx.

- Source (site assets): `/home/tartan/workspace/repo/public`
- Source (review docs HTML): `/home/tartan/workspace/repo/docs` (`*.html` only)
- Destination: `/home/tartan/workspace/www/unitecube`
- Command: `/home/tartan/workspace/scripts/deploy-local.sh`
- Public URL (local): `http://localhost:8080`

Equivalent repo command:

```bash
bash scripts/deploy-local.sh
```

## Deploy Steps

1. Sync latest repo changes to local machine workspace.
2. Run local deploy command:

```bash
bash scripts/deploy-local.sh
```

1. Verify deployed files exist under `/home/tartan/workspace/www/unitecube`.
2. Verify review artifact is reachable:

```bash
curl -fsSL http://localhost:8080/docs/BRAND-IDENTITY-REVIEW.html | head
```

1. Run smoke test against local URL:

```bash
bash scripts/smoke-test.sh "http://localhost:8080"
```

1. Run baseline monitoring checks:

```bash
bash scripts/monitor-production.sh "http://localhost:8080"
```

## CI Workflow Alignment

`.github/workflows/deploy-production.yml` now assumes a self-hosted runner on
the same machine and does not require SSH deployment secrets. Baseline scheduled
monitoring is configured in `.github/workflows/monitor-production.yml`.

## DNS/TLS

Current environment is local-only and not externally exposed on `443`, so
DNS/TLS is intentionally deferred. Use
[PRODUCTION-DNS-TLS.md](PRODUCTION-DNS-TLS.md) only when enabling public domain
routing. Monitoring and alert routing details are in
[PRODUCTION-MONITORING.md](PRODUCTION-MONITORING.md).
