# Design Asset Intake Checklist and Handoff Package Spec

_Created: April 25, 2026 / Version: v1.0_

## 1. Purpose and Scope

This document defines:

- the minimum intake information required before design work starts
- the standard handoff package required before engineering implementation starts

Scope includes UI screens, interaction states, assets, and design tokens for UniteCube dashboard work.

## 2. Roles

- Requester (PM/Owner): submits intake with business context and acceptance criteria.
- Designer (UI/UX): validates intake completeness, creates artifacts, and prepares handoff package.
- Engineering Lead: validates handoff quality and confirms implementation readiness.
- QA/Reviewer: checks visual and behavioral parity before release.

## 3. Intake Checklist (Required Before Design Starts)

Use this as a gate. If a line item is missing, set intake status to `incomplete`.

| Category | Required Inputs | Owner |
|---|---|---|
| Business Context | Objective, expected business outcome, KPI impacted | Requester |
| User Context | Target user persona, usage scenario, constraints (device/network/language) | Requester |
| Scope | In-scope features, out-of-scope items, dependencies | Requester |
| Content | Final or draft copy, localization needs, legal/disclaimer text | Requester |
| Functional Rules | State logic, error behavior, edge cases, validation rules | Requester + Eng |
| Existing References | Current screens, prior tickets, examples, competitor references | Requester |
| Technical Constraints | Breakpoints, browser/device support, asset format limits | Eng Lead |
| Accessibility | Required WCAG target, keyboard/focus requirements, contrast expectations | Requester + QA |
| Timeline | Delivery date, review milestones, approval owner | Requester |
| Handoff Expectations | Required deliverables (tokens, assets, redlines, prototypes) | Designer + Eng |

### Intake Sign-Off Fields

- Intake owner:
- Design owner:
- Engineering approver:
- Intake date:
- Target handoff date:
- Risk notes:

## 4. Handoff Package Spec (Required Before Engineering Starts)

All package items below are mandatory unless explicitly waived in writing by the engineering lead.

## 4.1 Package Contents

| Artifact | Required Content | Format |
|---|---|---|
| Source Design File | Final screens, components, variants, annotations | Figma URL |
| Screen Inventory | List of all production-intended screens and states | Markdown table |
| Exported UI Assets | Icons, images, illustrations, logos | `svg`, `png` |
| Design Tokens | Color, spacing, typography, radius, elevation, motion | Markdown or JSON |
| Interaction Spec | Hover/focus/active/disabled/loading/error behavior | Markdown |
| Responsive Spec | Desktop/tablet/mobile behavior and breakpoint rules | Markdown |
| Copy Deck | Final strings and localization keys (if applicable) | CSV or Markdown |
| Change Log | Delta from previous approved design version | Markdown |

## 4.2 Asset Naming Convention

Use lowercase kebab-case and meaningful suffixes.

- Icons: `icon-{name}-{size}.svg` (example: `icon-alert-20.svg`)
- Illustrations: `illus-{feature}-{variant}.png`
- Logos: `logo-{brand}-{theme}.svg`
- Screen exports: `screen-{flow}-{step}-{state}.png`

## 4.3 Export Requirements

- Icons: SVG preferred, pixel-aligned, no rasterized text.
- Images/illustrations: PNG at 1x and 2x where needed.
- Backgrounds/textures: include source + optimized export.
- No hidden layer dependencies for exported assets.
- Remove unused variants before handoff.

## 4.4 State Coverage Requirements

Each interactive screen must include:

- default state
- hover/focus/pressed states for interactive controls
- loading/skeleton state where applicable
- empty state
- success state
- validation error state
- system/unknown error state

## 4.5 Responsive Coverage Requirements

Provide at least:

- Desktop: `>= 1024px`
- Tablet: `768px - 1023px`
- Mobile: `<= 767px`

For each breakpoint, call out:

- layout shifts
- navigation pattern changes
- truncation/wrapping behavior
- touch target adjustments

## 4.6 Accessibility Requirements

- Contrast targets meet WCAG 2.1 AA.
- Focus order and visible focus treatment are documented.
- Non-text UI status is not color-only.
- Minimum touch target size and spacing are defined for mobile.

## 5. Handoff Readiness Checklist

Mark each line item `yes/no` during final handoff review.

- Intake checklist completed and signed off.
- All required screens and interaction states are present.
- Asset exports are complete and match naming convention.
- Tokens and component usage are documented.
- Responsive behavior is explicitly defined.
- Accessibility requirements are documented.
- Implementation risks and assumptions are listed.
- Change log and version number are included.
- Engineering lead acknowledged package as implementation-ready.

## 6. Definition of Done (Design Handoff)

Design handoff is complete only when:

- Handoff package includes every required artifact in this spec.
- Engineering lead confirms there are no blocking ambiguities.
- Open questions are tracked with owners and due dates.

## 7. Suggested Delivery Folder Structure

```text
design-handoff/
  01-source-links/
  02-screen-inventory/
  03-assets/
    icons/
    images/
    logos/
  04-tokens/
  05-interaction-spec/
  06-responsive-spec/
  07-copy/
  08-changelog/
```

## 8. Working Notes Template

```markdown
## Design Intake Record
- Ticket:
- Requester:
- Designer:
- Eng Lead:
- Objective:
- Constraints:
- Due Date:

## Handoff Summary
- Version:
- Figma URL:
- Asset Package Path:
- Known Risks:
- Open Questions:
- Next Action Owner:
```
