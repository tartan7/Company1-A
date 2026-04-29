# UniteCube Website Visual & UX Audit

- Audit date: 2026-04-26
- Auditor: UI Designer agent (`f53751f7-e546-407c-aa09-ed05a82502cf`)
- Scope: `public/dashboard.html`, `public/workflows.html`, `public/support.html`, `public/css/style.css`, `public/js/*.js`

## Executive Summary

The UI has a strong baseline for a first release: consistent component language, coherent spacing, responsive breakpoints, and generally clear Japanese copy. The largest risks are interaction accessibility and trust cues:

1. Some interactive controls are not keyboard-accessible or are semantically mismatched.
2. Several controls are placeholders (`href="#"`) and can feel broken in production.
3. Motion/toast/modal behavior lacks reduced-motion and robust assistive-technology support.

Overall UX maturity: **B- (usable, but not yet accessibility-safe for production standards)**.

## What Works Well

- Design token system is established and consistent across pages (`public/css/style.css:10`).
- Layout adapts predictably at tablet/mobile breakpoints (`public/css/style.css:1271`, `public/css/style.css:1318`).
- Core form fields include labels and inline validation messaging (`public/support.html:97`, `public/js/support.js:175`).
- Status and workflow cards provide clear scannability for operations usage (`public/dashboard.html:102`, `public/workflows.html:87`).

## Findings (Prioritized)

### P0 — Must fix before broad rollout

1. Keyboard access gap on clickable ticket rows.
- Evidence: rows use `role="button" tabindex="0"` (`public/support.html:231`) but there is no keyboard handler for Enter/Space in JS (`public/js/support.js`).
- Impact: keyboard-only users cannot reliably activate these items.

2. Placeholder links masquerading as real actions.
- Evidence: logout and detail/pagination links use `href="#"` (`public/dashboard.html:57`, `public/dashboard.html:213`, `public/dashboard.html:279`, `public/support.html:53`).
- Impact: creates dead-end behavior and trust erosion; may scroll page to top unexpectedly.

3. Modal accessibility is incomplete.
- Evidence: modal has `aria-labelledby` but no `aria-describedby` (`public/workflows.html:218`), and focus trap exists but no explicit inert/background isolation (`public/js/workflows.js:251`).
- Impact: screen-reader context and focus behavior can be inconsistent for assistive tech users.

### P1 — High-value UX/accessibility improvements

4. No reduced-motion fallback for animated UI elements.
- Evidence: toast/modal animations are always on (`public/css/style.css:1158`, `public/css/style.css:1201`), no `prefers-reduced-motion` block.
- Impact: can degrade comfort/accessibility for motion-sensitive users.

5. Mobile navigation opens without focus management.
- Evidence: sidebar opens/closes visually (`public/js/dashboard.js:24`, `public/js/support.js:37`, `public/js/workflows.js:108`) but focus does not move into nav or return with a structured trap.
- Impact: harder keyboard/screen-reader navigation on small screens.

6. Inline `onclick` handlers mixed with JS wiring.
- Evidence: workflow action buttons rely on `onclick="openModal(this)"` (`public/workflows.html:107`, `public/workflows.html:138`, `public/workflows.html:168`, `public/workflows.html:200`).
- Impact: weaker maintainability/testability and harder progressive enhancement.

7. Data credibility risk from static, stale timestamps/content.
- Evidence: fixed values like `最終更新: 2分前` and historical records are hardcoded (`public/dashboard.html:85`, table rows in `public/dashboard.html:193`).
- Impact: users can misinterpret demo data as live operational truth.

### P2 — Polish and consistency

8. Support ticket “button rows” have no visible active/pressed state.
- Evidence: hover style exists (`public/css/style.css:1049`) but no dedicated keyboard active style for `.ticket-item`.
- Impact: weaker interaction feedback.

9. Color-only status signaling can be strengthened.
- Evidence: badges use color + text, which is good, but dense views still rely heavily on hue differences (`public/css/style.css:381`).
- Impact: moderate readability risk for color-vision deficiencies in busy tables.

10. Pagination semantics start as links then become JS-generated buttons.
- Evidence: initial HTML uses anchors (`public/dashboard.html:279`), runtime replaces with buttons (`public/js/dashboard.js:138`).
- Impact: inconsistent semantics and potential no-JS behavior mismatch.

## Recommended Remediation Plan

### Sprint 1 (P0)

- Replace fake anchors with real routes/actions, or true `<button>` where navigation is not intended.
- Add keyboard activation handlers for all `role="button"` elements, or switch to native `<button>` elements.
- Upgrade modal a11y contract: add `aria-describedby`, enforce focus return, and set background inert/hidden semantics while open.

### Sprint 2 (P1)

- Add `@media (prefers-reduced-motion: reduce)` to disable/soften toast/modal/sidebar transitions.
- Implement mobile sidebar focus management (initial focus target, trap, escape close, return focus).
- Move inline `onclick` to event listeners in `workflows.js`.

### Sprint 3 (P2)

- Improve interaction feedback states for ticket rows (focus-visible + active states).
- Revisit badge contrast and add secondary non-color cues in dense tabular contexts.
- Normalize pagination semantics for both JS and no-JS behavior.

## Suggested Acceptance Criteria for Audit Closure

- All interactive controls are keyboard-operable with native semantics.
- No production-visible action uses `href="#"` as a placeholder.
- Modal/sidebar pass screen-reader and keyboard smoke tests.
- Reduced-motion behavior is implemented for all non-essential animations.
- Audit findings are linked to implementation tickets and tracked to done.

## Screenshot-backed Visual Validation

### 2026-04-26 dashboard evidence

- Source: Paperclip comment attachment `83decbf9-8684-4065-8f98-c826fa7eb124`
- Page captured: dashboard / execution history view (desktop)
- Visual confirmations from screenshot:
  - Information architecture is clear: persistent sidebar, KPI summary band, then execution log table.
  - Card spacing and grouping are consistent with the intended token system.
  - Table layout is readable at desktop width, with stable column alignment for date/workflow/status/duration.
  - Status badges remain relatively low-contrast in practice, matching earlier token-level accessibility concerns.

### Remaining visual evidence needed for full closure

- Workflows page desktop screenshot (including modal open state)
- Support page desktop screenshot (including validation/error/success states)
- Mobile screenshots for all 3 pages with sidebar open/closed behavior
