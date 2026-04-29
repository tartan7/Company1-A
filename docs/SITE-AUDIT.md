# SITE-AUDIT

Date: 2026-04-26 (UTC)
Issue: UNI-43
Auditor: Engineer agent

## Scope and Method

- Target production domains: `https://unitecube.jp` and `https://www.unitecube.jp`.
- Live production probes from this environment failed due to DNS resolution errors (`Could not resolve host`).
- Operator-reported local production endpoint `http://localhost:8080` was also probed from this runtime and returned connection refused (likely runtime/network namespace mismatch).
- Technical baseline was built from:
  - Source inspection in `public/`
  - Nginx config in `infra/nginx/unitecube-local.conf`
  - Local HTTP crawl using `python3 -m http.server --directory public`
  - Deployment status note in UNI-43 issue comments (2026-04-26)

## URL Inventory (Status Codes)

### A. Local crawl inventory (`public/`)

| URL | Status | Content-Type | Notes |
|---|---:|---|---|
| `/` | 200 | `text/html` | `index.html` redirect page |
| `/dashboard.html` | 200 | `text/html` | Main dashboard surface |
| `/workflows.html` | 200 | `text/html` | Workflow settings page |
| `/support.html` | 200 | `text/html` | Support request page |
| `/css/style.css` | 200 | `text/css` | Global stylesheet |
| `/js/core.js` | 200 | `text/javascript` | Shared UI logic |
| `/js/dashboard.js` | 200 | `text/javascript` | Dashboard logic |
| `/js/workflows.js` | 200 | `text/javascript` | Workflow page logic |
| `/js/support.js` | 200 | `text/javascript` | Support page logic |
| `/robots.txt` | 404 | `text/html;charset=utf-8` | Missing |
| `/sitemap.xml` | 404 | `text/html;charset=utf-8` | Missing |
| `/favicon.ico` | 404 | `text/html;charset=utf-8` | Missing |
| `/not-found` | 404 | `text/html;charset=utf-8` | Expected missing route |

### B. Production endpoint probes (from this runtime)

| URL | Result | Evidence |
|---|---|---|
| `https://unitecube.jp` | DNS unresolved | `curl: (6) Could not resolve host: unitecube.jp` |
| `https://www.unitecube.jp` | DNS unresolved | `curl: (6) Could not resolve host: www.unitecube.jp` |
| `https://unitecube.jp/robots.txt` | DNS unresolved | `curl: (6) Could not resolve host: unitecube.jp` |
| `https://unitecube.jp/sitemap.xml` | DNS unresolved | `curl: (6) Could not resolve host: unitecube.jp` |

### C. Local production endpoint probe (`localhost:8080`)

| URL | Result | Evidence |
|---|---|---|
| `http://localhost:8080/` | Connection refused | `curl: (7) Failed to connect to localhost port 8080` |

## Navigation Structure

### Primary navigation links

Shared sidebar links on all three product pages:

- `dashboard.html` (実行履歴)
- `workflows.html` (ワークフロー設定)
- `support.html` (サポートリクエスト)

### Route graph (source-derived)

- `/` -> immediate redirect/meta-refresh to `/dashboard.html` (`public/index.html`)
- `/dashboard.html` links to `/dashboard.html`, `/workflows.html`, `/support.html`
- `/workflows.html` links to `/dashboard.html`, `/workflows.html`, `/support.html`
- `/support.html` links to `/dashboard.html`, `/workflows.html`, `/support.html`

No deeper first-party pages are linked from these entry pages.

## Sitemap and Robots

- `public/robots.txt` not present.
- `public/sitemap.xml` not present.
- `/robots.txt` and `/sitemap.xml` returned `404` in local crawl.

## Tech Stack and Hosting Baseline

- Frontend: static HTML/CSS/vanilla JavaScript.
- Framework/CMS: none detected.
- Build/deploy model: static folder deployment with Nginx (`root /home/tartan/workspace/www/unitecube`).
- TLS termination: Nginx + Let's Encrypt certificate paths configured.
- HTTP->HTTPS redirect: configured for both `unitecube.jp` and `www.unitecube.jp`.
- CDN: none detected in current infra docs/config.

## SEO Baseline

### Present

Across `dashboard.html`, `workflows.html`, `support.html`:

- `<html lang="ja">`
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Unique `<title>`
- Visible `<h1>`

`index.html` includes a canonical link to `/dashboard.html`.

### Missing

Across primary pages (`dashboard.html`, `workflows.html`, `support.html`):

- `<meta name="description">`
- `<meta name="robots">`
- `<link rel="canonical">`
- Open Graph tags (`og:*`)
- Twitter card tags (`twitter:*`)
- Structured data (`application/ld+json`)

## Analytics and Tracking Scripts

No explicit analytics/tracking integration detected in `public/*.html` and `public/js/*.js`:

- Google Analytics (`gtag.js`, `ga`) not found
- Google Tag Manager (`gtm.js`, `GTM-`) not found
- Meta Pixel, LinkedIn Insight, Hotjar, Clarity, Mixpanel, Segment not found

## Risks and Priority Fixes

1. High: Production domain DNS is unresolved from this environment; direct public endpoint validation remains incomplete.
2. Medium: `localhost:8080` was validated by operator but not reachable from this runtime, so independent network-level verification here is incomplete.
3. High: Missing `robots.txt` and `sitemap.xml` prevents standard crawler guidance and index discovery.
4. Medium: Missing page-level SEO metadata (`description`, canonical on primary pages, OG/Twitter) reduces search and social preview quality.
5. Medium: No analytics/tracking instrumentation limits baseline traffic and conversion observability.
6. Low: Missing `favicon.ico` produces avoidable 404 requests.

## Suggested Next Actions

1. Validate DNS delegation and authoritative records for `unitecube.jp` and `www.unitecube.jp`, then rerun live probes.
2. Run one validation sweep from the same host/network namespace as Nginx (`localhost:8080`) and archive headers/status outputs.
3. Add `public/robots.txt` and `public/sitemap.xml` with canonical HTTPS URLs.
4. Add SEO metadata blocks to `dashboard.html`, `workflows.html`, and `support.html`.
5. Decide analytics policy (none vs privacy-first vs GA4/GTM) and implement consistently.
6. Add `public/favicon.ico` to remove default favicon 404s.
