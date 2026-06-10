<<<<<<< HEAD
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
=======
# CONTENT INVENTORY

Date: 2026-04-27 (UTC)
Issue: UNI-51
Owner: Engineer agent

## Source Availability

- The expected migration source (`old site` host and historical `docs/CONTENT-INVENTORY.md`) is not currently available in this workspace.
- DNS lookups from this runtime for `unitecube.jp` and `www.unitecube.jp` failed on 2026-04-26 (`curl: Could not resolve host`).
- This inventory is therefore built from the currently implemented pages in `public/` as the migration baseline and gap tracker.

## Page-Level Content Inventory

| Page | Current Path | Legacy Source URL | Primary H1 | Meta Description | Canonical | OG/Twitter | Images + Alt Coverage | Rewrite Needed | Migration Status |
|---|---|---|---|---|---|---|---|---|---|
| Entry/redirect | `/` (`index.html`) | Unknown (source unavailable) | N/A (redirect page) | Added | Added (`/dashboard.html`) | Added | No raster images | No | Migrated baseline captured |
| Dashboard | `/dashboard.html` | Unknown (source unavailable) | `実行履歴` | Added | Added | Added | Inline SVG icons are decorative (`aria-hidden`) | No | Migrated baseline captured |
| Workflows | `/workflows.html` | Unknown (source unavailable) | `ワークフロー設定` | Added | Added | Added | Inline SVG icons are decorative (`aria-hidden`) | No | Migrated with production copy rewrite complete ([UNI-148](/UNI/issues/UNI-148)) |
| Support | `/support.html` | Unknown (source unavailable) | `サポートリクエスト` | Added | Added | Added | Inline SVG icons are decorative (`aria-hidden`) | No | Migrated with production seeded-copy rewrite complete ([UNI-149](/UNI/issues/UNI-149)) |

## SEO-Critical Elements Cross-Check

| Item | Dashboard | Workflows | Support | Entry (`/`) |
|---|---|---|---|---|
| Unique `<title>` | Yes | Yes | Yes | Yes |
| `<h1>` present | Yes | Yes | Yes | N/A (redirect) |
| `<meta name="description">` | Yes | Yes | Yes | Yes |
| `<link rel="canonical">` | Yes | Yes | Yes | Yes |
| Open Graph tags (`og:*`) | Yes | Yes | Yes | Yes |
| Twitter tags | Yes | Yes | Yes | Yes |
| `lang="ja"` | Yes | Yes | Yes | Yes |

## Image Migration and Optimization Notes

- No external legacy image assets were found in `public/`.
- Current UI uses inline SVG icons; there are no downloadable/raster legacy assets to optimize in this repository state.
- Asset path reserved for future logo/image imports: `public/images/logo/` (referenced in design docs).

## Rewrite Follow-Ups

- `REWRITE-01` completed via [UNI-148](/UNI/issues/UNI-148):
  - `public/workflows.html` production-oriented workflow and microcopy updates applied.
  - `public/js/workflows.js` aligned template/placeholder and settings copy updates applied.
- `REWRITE-02` completed via [UNI-149](/UNI/issues/UNI-149):
  - `public/support.html` seeded ticket subjects, accessibility labels, and `data-ticket-subject` values updated to production-style examples.

## Verification Method

1. Enumerated all public HTML entry points in `public/`.
2. Confirmed headings and navigation content preserved across pages.
3. Added and verified SEO metadata blocks (description/canonical/OG/Twitter).
4. Checked for image tags and alt/accessible icon treatment.
5. Logged rewrite candidates and follow-up issue requirement.

## Outstanding Gap

- To complete strict old-to-new parity verification, we still need one of:
  - a resolvable old-site host, or
  - an archived export/snapshot of old-site pages/assets.
>>>>>>> it02
