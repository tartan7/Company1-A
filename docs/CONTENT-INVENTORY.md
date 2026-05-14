# Content Inventory — UniteCube Website Migration

> **Full migration plan:** [UNI-209](/UNI/issues/UNI-209#document-content-inventory)
> **Audit date:** 2026-05-02

## Page Inventory

| # | File | URL | Title (JP) | Page Type | Words (est.) | Decision |
|---|------|-----|------------|-----------|--------------|----------|
| 1 | `index.html` | `/` | UniteCube | Redirect stub | ~4 | **UPDATE** — fix redirect target |
| 2 | `home.html` | `/home.html` | UniteCube \| 北海道の中小企業向け業務自動化 | Marketing homepage | ~250 | **KEEP** |
| 3 | `solutions.html` | `/solutions.html` | 導入プラン \| UniteCube | Marketing / Product | ~200 | **KEEP** |
| 4 | `industries.html` | `/industries.html` | 業種別活用 \| UniteCube | Marketing / Use cases | ~150 | **KEEP** |
| 5 | `insights.html` | `/insights.html` | ナレッジ \| UniteCube | Content / Knowledge | ~300 | **UPDATE** — expand to article index |
| 6 | `dashboard.html` | `/dashboard.html` | 実行履歴 — UniteCube クライアントダッシュボード | App / Client dashboard | ~110 | **KEEP** |
| 7 | `workflows.html` | `/workflows.html` | ワークフロー設定 — UniteCube クライアントダッシュボード | App / Workflow settings | ~80 | **KEEP** — rewritten [UNI-148](/UNI/issues/UNI-148) |
| 8 | `support.html` | `/support.html` | サポートリクエスト — UniteCube クライアントダッシュボード | App / Support form | ~117 | **KEEP** — rewritten [UNI-149](/UNI/issues/UNI-149) |
| 9 | `404.html` | `/404.html` | 404 Not Found — UniteCube | Error page | ~12 | **KEEP** |

## Critical Issues

### 1. Root URL misdirects to client dashboard (HIGH)
`index.html` redirects `/` → `/dashboard.html` (client app) instead of `/home.html` (marketing homepage).
All public visitors are sent to the client dashboard. Fix: update `meta http-equiv="refresh"` and `window.location.replace()` in `index.html` to target `/home.html`.

### 2. Insights page is a single article, not a hub (MEDIUM)
`insights.html` contains one article. The nav label "ナレッジ" implies a multi-article index.
Expand to article listing or add more content sections.

## URL Redirect Map

| From | To | Reason |
|------|----|--------|
| `/` | `/home.html` | Fix misdirected root redirect |
| `/index.html` | `/home.html` | Explicit index URL should reach marketing home |

No legacy URLs being removed — all filenames preserved.

## Sitemap Fix Required

Current `sitemap.xml` only lists `/dashboard.html`. Correct entries:

| URL | In sitemap? |
|-----|-------------|
| `/home.html` | YES |
| `/solutions.html` | YES |
| `/industries.html` | YES |
| `/insights.html` | YES |
| `/dashboard.html` | NO (client app) |
| `/workflows.html` | NO (client app) |
| `/support.html` | NO (client app) |
| `/index.html` | NO (redirect stub) |
| `/404.html` | NO (error page) |

## Migration History

| Page | Migration Status | Rewrite Status | Issue |
|------|-----------------|----------------|-------|
| Home | Complete | N/A | — |
| Workflows | Complete | Done | [UNI-148](/UNI/issues/UNI-148) |
| Support | Complete | Done | [UNI-149](/UNI/issues/UNI-149) |
| Industries | Complete | N/A | — |
| Insights | Complete | Needs expansion | — |
| Solutions | Complete | N/A | — |
| Dashboard | Complete | N/A | — |
| 404 | Complete | N/A | — |

## Key Dates

- Workflows/Support rewrite tasks completed: 2026-04-27
- Original content inventory created: 2026-04-30
- Full audit with migration plan: 2026-05-02 ([UNI-209](/UNI/issues/UNI-209))
- All pages validated against legacy site (http://192.168.0.16:8080/): 2026-04-30
