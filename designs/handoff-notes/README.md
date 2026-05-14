# Design Asset Handoff - UniteCube Client Dashboard

**Handoff Date:** 2026-05-01  
**Version:** 1.0  
**Source:** Internal baseline extracted from implementation

## Overview

This handoff package contains design assets extracted from the current UniteCube client dashboard implementation. Since external agency assets were not delivered by the ETA (2026-04-28T15:00:00Z), this package provides an internal baseline to unblock implementation work.

## Asset Inventory

### 1. Logos (`assets/logos/`)
- `logo-primary.svg` — Primary brand logo (240x60px)
- `logo-monochrome.svg` — Monochrome variant for dark backgrounds
- `icon-mark.svg` — Square icon mark (32x32px) for favicons/app icons

### 2. Icons (`assets/icons/`)
- `icon-dashboard.svg` — Dashboard navigation icon
- `icon-workflows.svg` — Workflows navigation icon
- `icon-support.svg` — Support navigation icon
- All icons are 24x24px, stroke-based, 2px stroke width

### 3. Design Tokens (`tokens/`)
- `design-tokens.json` — Complete token set (colors, typography, spacing, etc.)
- Extracted from `public/css/style.css` CSS custom properties

### 4. Style Guide (`style-guide/`)
- `style-guide.pdf` — Core brand guidelines
- `component-states.md` — Button, badge, and form element state documentation

### 5. Page Compositions (`comps/`)
- Desktop and mobile wireframes for:
  - Dashboard (KPI cards + execution log)
  - Workflows (workflow cards + LINE reply editor)
  - Support (ticket form + history list)

## Design System Reference

All implementation follows the design tokens defined in `public/css/style.css`:

- **Brand primary:** #2563EB (blue)
- **Brand secondary:** #0F172A (dark navy)
- **Typography:** Noto Sans JP (400, 500, 700)
- **Spacing scale:** 4px base (4, 8, 12, 16, 20, 24, 32, 40, 48, 64)
- **Border radius:** 4px (sm), 8px (md), 12px (lg), 16px (xl)

## Usage Rights

All assets in this package are internal baseline assets derived from the implemented UI. External agency assets, when delivered, should replace these baseline files.

## Next Steps

1. Review baseline assets against brand requirements
2. Update with external agency deliverables when available
3. Map assets to blocked implementation tasks per the Design Asset Intake Checklist

## Contact

For questions or clarifications, reference issue [UNI-47](/UNI/issues/UNI-47).
