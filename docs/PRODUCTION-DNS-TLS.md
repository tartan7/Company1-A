# Production DNS and TLS Runbook (Local Host)

_Updated: 2026-04-26 (deferred for local-only env, monitoring linked)_

## Scope

Configure DNS and HTTPS for UniteCube when deployment and web serving are on the same host.

## Current Environment Decision

For the current environment (`http://localhost:8080` on same-host Docker Nginx), DNS records and public `443` exposure are not configured.
Because of that, `scripts/setup-local-tls.sh` is intentionally not executed in this phase.
Run the steps below only when the service is promoted to a publicly routable hostname.

## Host Paths

- Web root: `/home/tartan/workspace/www/unitecube`
- Nginx template in repo: `infra/nginx/unitecube-local.conf`
- TLS setup script in repo: `scripts/setup-local-tls.sh`

## 1. DNS Configuration

Create records at your DNS provider:

- `A` `unitecube.jp` -> `<PRODUCTION_HOST_IP>`
- `A` `www.unitecube.jp` -> `<PRODUCTION_HOST_IP>`
- Optional `AAAA` records if IPv6 is in use

Validate DNS before cert issuance:

```bash
dig +short A unitecube.jp
dig +short A www.unitecube.jp
```

## 2. Nginx + TLS Setup

Install dependencies (Ubuntu/Debian):

```bash
sudo apt-get update
sudo apt-get install -y nginx certbot python3-certbot-nginx
```

Run setup from repo root:

```bash
EMAIL=ops@unitecube.jp bash scripts/setup-local-tls.sh
```

What the script does:

- installs Nginx config from `infra/nginx/unitecube-local.conf`
- validates and reloads Nginx
- provisions Let's Encrypt certs for `unitecube.jp` and `www.unitecube.jp`
- sets renewal reload hook
- enables `certbot.timer`
- executes `certbot renew --dry-run`

## 3. Verification

```bash
sudo nginx -t
systemctl status certbot.timer --no-pager
curl -I https://unitecube.jp
curl -I https://www.unitecube.jp
bash scripts/smoke-test.sh "https://unitecube.jp"
bash scripts/monitor-production.sh "https://unitecube.jp"
```

Expected:

- valid certificate for both hostnames
- HTTP requests redirect to HTTPS
- smoke test passes
- monitor script passes and includes TLS expiry output

## Monitoring and Alerting

After TLS enablement, configure production alert routing and schedule checks via [PRODUCTION-MONITORING.md](PRODUCTION-MONITORING.md).
