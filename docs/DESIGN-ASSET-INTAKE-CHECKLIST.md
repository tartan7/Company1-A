# Design Asset Intake Checklist

_Created: April 25, 2026 / Updated: April 27, 2026 / Version: v1.1_

Use this checklist to validate incoming design files before implementation starts.

## 1. Required File Inventory

Mark each item `received` or `missing`.

| Asset Type | Minimum Requirement | Status | Notes |
|---|---|---|---|
| Logos | Primary logo + monochrome/reverse variants |  |  |
| Icons | All product/UI icons used in approved screens |  |  |
| Page Comps | Desktop + mobile page compositions for in-scope flows |  |  |
| Style Guide | Color, type scale, spacing, radii, elevation, motion tokens |  |  |
| Font Assets | Licensed font files or approved web font references |  |  |
| Component Library | Buttons, form controls, nav, table, card, states |  |  |
| Interaction Notes | Hover/focus/active/loading/error behavior by component |  |  |

## 2. Accepted Formats and Naming Rules

### Accepted formats

- Vector UI assets: `svg` (preferred)
- Raster exports: `png` (1x/2x where needed)
- Design source: Figma link (or equivalent source file)
- Design tokens/spec notes: markdown (`.md`) or JSON (`.json`)

### Naming convention

- Use lowercase kebab-case.
- Include semantic type prefix where applicable:
  - `logo-{name}-{variant}.svg`
  - `icon-{name}-{size}.svg`
  - `screen-{flow}-{step}-{state}.png`
  - `token-{group}.json`

## 3. Required Folder Structure Under `designs/`

```text
designs/
  source/
  comps/
    desktop/
    mobile/
  assets/
    logos/
    icons/
    images/
  style-guide/
  tokens/
  interaction-spec/
  handoff-notes/
```

## 4. Usage Rights and Source of Truth Verification

Verify that all assets have proper usage rights and come from approved sources:

- [ ] All font files include valid license documentation
- [ ] Stock images/illustrations have documented usage rights
- [ ] Brand assets sourced from approved brand portal or design system
- [ ] Custom illustrations/photography have signed release forms
- [ ] Third-party assets comply with attribution requirements
- [ ] Source files match approved versions in design system repository
- [ ] No assets sourced from public internet without verification
- [ ] All assets traceable to single source of truth (Figma library, brand portal, etc.)

## 5. Version Tag and Change Verification

Confirm that assets are properly versioned and represent the latest approved changes:

- [ ] All assets labeled with version numbers or dates
- [ ] Version numbers match changelog or design system release notes
- [ ] Updated assets include clear indication of what changed
- [ ] Deprecated assets are clearly marked or removed
- [ ] Asset versions consistent across all formats (SVG, PNG, etc.)
- [ ] Source files show current version matching exported assets
- [ ] Version control tags present in design files where applicable
- [ ] No assets marked as "WIP", "draft", or "for review only"

## 7. Pass/Fail Handoff Criteria

Handoff is `PASS` only if all items below are true.

- No required inventory item is missing.
- All exports match accepted file formats and naming rules.
- Style guide tokens are complete enough for implementation.
- Page comps cover required states (default, hover/focus, loading, empty, error, success).
- Responsive behavior is defined for desktop/tablet/mobile.
- Interaction notes resolve known behavior ambiguities.
- Engineering has no unresolved blocking questions after review.

If any line fails, handoff is `FAIL` and must be remediated before development starts.

## 8. Mapping Assets to Blocked Implementation Tasks

Use this table to map missing or incomplete assets directly to blocked engineering tasks.

| Blocked Implementation Task | Required Asset/Spec | Current Gap | Owner to Unblock | Target Date | Status |
|---|---|---|---|---|---|
| `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | `blocked` |

Guidance:

- Create one row per blocked task.
- Update status to `ready` once the required design asset is delivered and verified.
- Keep this table synchronized with issue comments so blockers are visible to PM and engineering.

## 9. Intake Sign-Off

- Intake reviewer (Design):
- Engineering approver:
- Product approver:
- Intake completed on:
- Notes and known risks:
