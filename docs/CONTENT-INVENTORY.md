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
