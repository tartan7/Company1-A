# CONTENT AUDIT

Date: 2026-04-26 (UTC)
Issue: UNI-45
Auditor: Engineer agent
Scope: `public/index.html`, `public/dashboard.html`, `public/workflows.html`, `public/support.html`, and supporting UI copy in `public/js/*.js`

## Crawl Inventory

| URL | Purpose | Recommendation |
|---|---|---|
| `/` (`index.html`) | Redirect entrypoint to dashboard | Merge |
| `/dashboard.html` | Execution history and KPI summary | Keep (Rewrite content) |
| `/workflows.html` | Workflow settings and automation controls | Keep (Rewrite content) |
| `/support.html` | Support request intake and ticket history | Keep (Rewrite content) |

## Page Audit: `/` (`index.html`)

### Content Type

- Redirect utility page only.
- One fallback link text: `UniteCube ダッシュボードへ移動`.
- No body marketing/education content, no CTA hierarchy.

### Key Messages

- Immediate routing to dashboard is the only message.

### Content Quality

- Functionally clear.
- Not brand-building; does not explain product value or audience.

### Media Assets

- No images, videos, or downloadable assets.
- No reusable media.

### SEO Content

- `title`: `UniteCube` (generic).
- Has canonical to `/dashboard.html`.
- Uses meta refresh + JS redirect.
- No meta description.
- No social metadata (Open Graph/Twitter).
- No heading structure.

### Gaps

- Missing value proposition for first-time visitors.
- Missing legal/trust links (privacy, terms, contact).

### Recommendation

- **Merge** into `/dashboard.html` behavior for authenticated users.
- If public acquisition is required later, replace with a dedicated landing page instead of redirect-only content.

## Page Audit: `/dashboard.html`

### Content Type

- Page title/H1 (`実行履歴`).
- KPI summary cards (total runs, success rate, failures, status).
- Operational data table (`実行ログ`) with filters and pagination.
- Utility UI copy (refresh, status labels, empty-state/toast text in JS).
- No testimonials, FAQs, or legal text.

### Key Messages

- "Your automations are running and measurable."
- "Operational status can be monitored quickly from one page."

### Content Quality

- Clear for existing operators; labels are concise and task-oriented.
- Feels like demo/sample data (`株式会社サンプル商事`, fixed logs and timestamps), which weakens trust for production narrative.
- Tone is functional but not strongly differentiated to UniteCube brand voice.

### Media Assets

- Inline SVG icons only (status, nav, controls).
- No raster images/video/downloads.
- Reusable: icon set and badge/status vocabulary can be retained.

### SEO Content

- `title`: `実行履歴 — UniteCube クライアントダッシュボード`.
- `h1`: `実行履歴`.
- No meta description.
- No canonical on this page.
- No Open Graph/Twitter tags.
- No `<img>` elements, therefore no image alt coverage to optimize.

### Gaps

- No explanatory onboarding copy (what "good" success rate means, what actions to take on failures).
- No links to documentation/runbooks from error states.
- No trust/compliance language despite operations-critical view.

### Recommendation

- **Keep (Rewrite)**.
- Keep page function and IA; rewrite surrounding copy to reduce demo feel, improve guidance, and add action-oriented microcopy for alerts/failures.

## Page Audit: `/workflows.html`

### Content Type

- H1 (`ワークフロー設定`) and status badges.
- Body descriptions for each workflow (LINE, monthly report, web form, spreadsheet sync).
- Configuration UI copy (template editor, placeholders, recipient management, modal confirmations).
- Permission/validation/error copy in JS (admin-required messages, placeholder validation).

### Key Messages

- "UniteCube automations are configurable by business admins."
- "Key workflows can be paused/resumed and tuned without engineering intervention."

### Content Quality

- Operationally clear; copy explains workflow behavior and constraints.
- Text density is high and sometimes implementation-centric (`Webhook`, endpoint-style notions), which may overwhelm non-technical users.
- Some messages are strong and reusable (validation, admin permission guidance).

### Media Assets

- Inline SVG iconography only.
- No screenshots, explainer media, or downloadable setup guides.
- Reusable: workflow description blocks, placeholder hint patterns, modal warning language.

### SEO Content

- `title`: `ワークフロー設定 — UniteCube クライアントダッシュボード`.
- `h1`: `ワークフロー設定`.
- No meta description/canonical/social tags.
- No structured data.
- No `<img>` assets; alt optimization not applicable.

### Gaps

- Missing "why this matters" business outcomes per workflow.
- Missing contextual help links (setup docs, troubleshooting path).
- Missing confidence copy for paused/error states (impact, expected recovery time).

### Recommendation

- **Keep (Rewrite)**.
- Keep page and controls; rewrite descriptions into business-outcome language and add concise guidance blocks per workflow state.

## Page Audit: `/support.html`

### Content Type

- H1 (`サポートリクエスト`).
- New ticket form (subject/category/details/attachment).
- SLA-style hint (`通常1〜2営業日以内`).
- Submitted ticket list with status chips.
- Empty-state and toast/system feedback copy.

### Key Messages

- "Support is available through structured requests."
- "Requests are trackable and categorized."

### Content Quality

- Good form clarity with placeholders and field-level validation messages.
- Response-time promise is present but limited trust context (support scope, severity policy, escalation channel) is missing.
- Ticket list appears as sample/mock entries, which may reduce authenticity.

### Media Assets

- No embedded media except inline SVG.
- Supports user-uploaded attachments (`image/*,.pdf`) but no guidance examples or sample templates.
- Reusable: form labels, validation/error messaging patterns.

### SEO Content

- `title`: `サポートリクエスト — UniteCube クライアントダッシュボード`.
- `h1`: `サポートリクエスト`.
- No meta description/canonical/social tags.
- No image alt content to optimize (SVG-only UI).

### Gaps

- Missing support policy details: severity definitions, response targets by category, emergency path.
- Missing legal/privacy notice for submitted support data and file uploads.
- Missing CTA for self-serve help before ticket creation.

### Recommendation

- **Keep (Rewrite)**.
- Keep information architecture; rewrite to include support policy clarity, privacy handling text, and escalation expectations.

## Cross-Site Gap Summary

### Content Types Missing Across Site

- Hero/value proposition copy for external audiences.
- Social proof/testimonials/case-study content.
- FAQ and self-serve knowledge links.
- Legal pages and references (privacy policy, terms, data handling, security contact).

### SEO Gaps Across Site

- No meta descriptions on product pages.
- No page-level canonical tags except redirect page.
- No Open Graph/Twitter metadata.
- No `robots.txt` or `sitemap.xml` in `public/`.

### Media and Reusability Summary

- Current reusable assets are mostly structural: icon system, badges, form/validation microcopy patterns.
- No brand imagery/video library currently present for redesign reuse.

## Prioritized Rewrite Guidance for Redesign Input

1. Reframe each page with outcome-first language (business impact, not just system status).
2. Remove demo/synthetic tone by replacing sample company/log references with tenant-real or clearly labeled sample states.
3. Add trust layer content: support policy, data/privacy notices, reliability and escalation messaging.
4. Add SEO metadata baseline for each page (meta description, canonical, OG/Twitter).
5. Introduce self-serve guidance links (runbook/help center) from dashboard errors and support form.

## Final Recommendation Matrix

| Page | Final Action | Rationale |
|---|---|---|
| `/` (`index.html`) | Merge | Redirect-only utility page; no standalone content value. |
| `/dashboard.html` | Keep (Rewrite) | Core product surface is valid; supporting copy needs trust and guidance improvements. |
| `/workflows.html` | Keep (Rewrite) | Strong configuration structure; copy needs business-context simplification. |
| `/support.html` | Keep (Rewrite) | Good support intake structure; needs policy/legal/escalation content depth. |
