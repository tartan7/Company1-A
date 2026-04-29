# Pre-Launch Checklist and Go-Live

Date: 2026-04-26 (UTC)
Issue: UNI-54

## Checklist Status

| Item | Status | Evidence |
|---|---|---|
| Redirects configured and tested | Done (repo) | `infra/nginx/redirect-map.conf`, `public/index.html`, `scripts/smoke-test.sh` |
| DNS records updated | N/A (local-only launch scope) | Current launch target is same-host local URL (`http://localhost:8080`) |
| TLS/SSL active | N/A (local-only launch scope) | `setup-local-tls.sh` intentionally deferred until public hostname/443 exposure |
| Analytics/tracking re-installed | Done (repo) | `public/js/analytics.js` loaded by `index.html`, `dashboard.html`, `workflows.html`, `support.html`, `404.html` |
| `robots.txt` and `sitemap.xml` updated | Done (repo) | `public/robots.txt`, `public/sitemap.xml` |
| Social meta tags (OG/Twitter) | Done (repo) | `public/index.html`, `public/dashboard.html`, `public/workflows.html`, `public/support.html`, `public/404.html` |
| 404 page designed and implemented | Done (repo + Nginx config) | `public/404.html`, `infra/nginx/unitecube-local.conf` (`error_page 404 /404.html;`) |
| Monitoring and alerting configured | Done (repo) | `scripts/monitor-production.sh`, `.github/workflows/monitor-production.yml`, `docs/PRODUCTION-MONITORING.md` |
| Deploy to production + smoke test | Done (local launch scope) | `deploy-prod.sh` + smoke/monitor passed on deployed artifact run |

## Validation Run (This Heartbeat)

Executed locally in this workspace:

- `npm test` (pass)
- `bash scripts/smoke-test.sh "http://localhost:18080"` using deployed artifact server (pass)
- `bash scripts/monitor-production.sh "http://localhost:18080"` (pass)
- `SRC_DIR="$PWD/public" DOCS_SRC_DIR="$PWD/docs" DEST_DIR="/tmp/unitecube-go-live" bash scripts/deploy-prod.sh` (pass)
- `curl` verification on deployed artifact server:
  - `/` -> HTTP `200`
  - `/not-found` -> HTTP `404`

## If/When Public Hostname Is Enabled Later

1. Configure DNS A records for `unitecube.jp` and `www.unitecube.jp`.
2. Run `EMAIL=ops@unitecube.jp bash scripts/setup-local-tls.sh`.
3. Switch smoke/monitor base URL to `https://unitecube.jp`.
