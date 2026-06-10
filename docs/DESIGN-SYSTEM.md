# UniteCube Design System

_Last updated: April 26, 2026_  
_Version: 1.1_

## 1. Purpose

This document defines the implementation-ready visual language for UniteCube and is the primary reference for:
- color and semantic state usage
- typography and content hierarchy
- spacing, layout rhythm, and responsive behavior
- component patterns and interaction states
- accessibility guardrails and change governance

The source of truth for production tokens is [`public/css/style.css`](../public/css/style.css).

## 2. Design Principles

- Clarity first: optimize readability and scanability over decorative styling.
- Operational trust: interface should feel stable, predictable, and calm.
- Consistency over novelty: prefer existing tokens and patterns before adding new variants.
- Accessibility by default: keyboard, contrast, and mobile touch requirements are non-negotiable.
- Practical UX language: copy should tell users what happened and what to do next.

## 3. Token Foundation

### 3.1 Color System

#### Brand tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--color-brand-primary` | `#2563EB` | Primary CTA and active state |
| `--color-brand-primary-dark` | `#1D4ED8` | Primary hover/pressed |
| `--color-brand-primary-light` | `#DBEAFE` | Soft selected/focus backgrounds |
| `--color-brand-secondary` | `#0F172A` | Structural surfaces and brand text |

#### Semantic tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--color-success` | `#16A34A` | Success labels and positive status |
| `--color-success-bg` | `#F0FDF4` | Success background surfaces |
| `--color-warning` | `#D97706` | Caution states |
| `--color-warning-bg` | `#FFFBEB` | Warning background surfaces |
| `--color-error` | `#DC2626` | Error and destructive emphasis |
| `--color-error-bg` | `#FEF2F2` | Error background surfaces |
| `--color-paused` | `#6B7280` | Paused/inactive state |
| `--color-paused-bg` | `#F9FAFB` | Paused background surfaces |

#### Neutral tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--color-neutral-900` | `#111827` | Primary text |
| `--color-neutral-700` | `#374151` | Secondary text |
| `--color-neutral-500` | `#6B7280` | Meta/placeholder text |
| `--color-neutral-300` | `#D1D5DB` | Borders and separators |
| `--color-neutral-100` | `#F3F4F6` | Subtle separators |
| `--color-neutral-50` | `#F9FAFB` | Page background |
| `--color-white` | `#FFFFFF` | Elevated surfaces |

#### Color usage rules

- Do not represent critical state with color alone. Pair badges with text and/or icon.
- Keep primary blue reserved for action and current location, not decorative fills.
- Use semantic colors only for semantic meaning (success/warning/error/paused), not general accents.

### 3.2 Typography

| Token | Value |
| --- | --- |
| `--font-family-base` | `"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif` |
| `--font-family-mono` | `"Noto Sans Mono", "SFMono-Regular", "Consolas", monospace` |
| `--font-size-xs` | `12px` |
| `--font-size-sm` | `14px` |
| `--font-size-base` | `16px` |
| `--font-size-lg` | `18px` |
| `--font-size-xl` | `20px` |
| `--font-size-2xl` | `24px` |
| `--font-weight-normal` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-bold` | `700` |
| `--line-height-tight` | `1.25` |
| `--line-height-base` | `1.6` |
| `--line-height-loose` | `1.8` |

Type hierarchy baseline:
- page title: `font-size-xl` + `font-weight-bold` (`.page-title`)
- section title: `font-size-lg` + `font-weight-bold` (`.section-title`)
- body and control text: `font-size-base`/`font-size-sm`
- operational metadata and timestamps: monospace + `font-size-xs`

### 3.3 Spacing, Radius, Elevation, Motion

Spacing scale (4px base):
- `--spacing-1` `4px`, `--spacing-2` `8px`, `--spacing-3` `12px`, `--spacing-4` `16px`, `--spacing-5` `20px`, `--spacing-6` `24px`, `--spacing-8` `32px`, `--spacing-10` `40px`, `--spacing-12` `48px`, `--spacing-16` `64px`

Shape and depth:
- Radius: `--radius-sm` `4px`, `--radius-md` `8px`, `--radius-lg` `12px`, `--radius-xl` `16px`, `--radius-full` `9999px`
- Elevation: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

Motion:
- Durations: `--duration-fast` `100ms`, `--duration-base` `200ms`, `--duration-slow` `300ms`
- Easing: `--easing-base` `cubic-bezier(0.4, 0, 0.2, 1)`
- Motion should clarify state changes (hover/focus/toast/modal), not decorate static content.

### 3.4 Layout and Breakpoints

Global layout tokens:
- `--sidebar-width` `240px` (desktop), reduced to `64px` on tablet, restored to `240px` off-canvas on mobile
- `--content-max-width` `1200px`

Responsive breakpoints in implementation:
- `max-width: 1023px`: compact sidebar mode, 4-column stats -> 2 columns
- `max-width: 767px`: off-canvas sidebar + hamburger, tighter page spacing
- `max-width: 479px`: single-column stats, stacked modal actions

## 4. Component Pattern Library

This section maps design expectations to implemented class patterns.

### 4.1 Navigation

- Sidebar shell: `.sidebar`, `.sidebar-logo`, `.sidebar-nav`, `.nav-item`
- Active nav state: `.nav-item.active` with brand primary fill
- Mobile controls: `.hamburger-btn`, `.sidebar-overlay`, `.sidebar.open`

### 4.2 Buttons

Base and size classes:
- `.btn`, `.btn-sm`, `.btn-md`, `.btn-lg`

Semantic variants:
- `.btn-primary`, `.btn-secondary`, `.btn-success`, `.btn-warning`, `.btn-danger`, `.btn-ghost`

Behavior requirements:
- default minimum touch target is `44px` (`.btn`)
- hover/focus states must preserve readable contrast
- destructive actions use `.btn-danger` and should be paired with confirmation when irreversible

### 4.3 Status and Feedback

- Badges: `.badge` + semantic variant (`.badge-success`, `.badge-warning`, `.badge-error`, `.badge-paused`, `.badge-running`)
- Toasts: `.toast` + variant (`.toast-success`, `.toast-warning`, `.toast-error`)
- Inline confirmation: `.inline-success`
- Empty states: `.empty-state`, `.empty-state-title`, `.empty-state-text`

### 4.4 Surfaces and Data

- Card pattern: `.card`, `.card-header`, `.card-body`
- KPI cards: `.stat-card*`
- Data table pattern: `.data-table` with semantic status cell content
- Pagination control: `.pagination`, `.pagination-btn`

### 4.5 Forms and Inputs

- Form system: `.form-group`, `.form-label`, `.form-input`, `.form-select`, `.form-textarea`
- Error state: `.form-error` and `.error` modifier on control
- File upload: `.file-input-label`
- Recipients and tags: `.recipient-list*`

### 4.6 Dialog and Utility Patterns

- Modal: `.modal-overlay`, `.modal`, `.modal-actions`
- Utility visibility: `.visually-hidden`, `.hidden`

## 5. Accessibility and Interaction Standards

- WCAG 2.1 AA contrast target for all text and interactive controls.
- Use `:focus-visible` consistently; do not remove keyboard focus indicators.
- Minimum touch size: `44px` for tap targets in core actions and navigation.
- Maintain plain-language labels and error text that describe the correction action.
- Support reduced cognitive load: clear hierarchy, limited competing highlights, predictable state change behavior.

## 6. Content and Voice Guidance

- Tone: practical, direct, calm.
- Use action-first labels (`Save settings`, `Pause workflow`, `Retry`).
- Error messages should include fix guidance (`Enter a valid email address`).
- Empty states should include next action, not only status description.

See [`docs/BRAND-IDENTITY.md`](./BRAND-IDENTITY.md) for brand voice and logo governance.

## 7. Implementation Rules

- Build new UI using token variables from `:root` before introducing raw values.
- Keep selector naming aligned to current system patterns (`btn-*`, `badge-*`, `form-*`, `card-*`).
- If new visual primitives are needed, update token definitions in `public/css/style.css` first, then update this document and [`docs/DESIGN-SPEC.md`](./DESIGN-SPEC.md).
- Treat hard-coded color values as debt unless they are intentionally one-off and documented.

Current known tokenization debt in `style.css`:
- `#15803D` (`.btn-success:hover`)
- `#B91C1C` (`.btn-danger:hover`)
- `#BBF7D0` (`.inline-success` border)

## 8. Governance and Change Control

Source hierarchy:
- System baseline: [`docs/DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md)
- Brand guidelines: [`docs/BRAND-IDENTITY.md`](./BRAND-IDENTITY.md)
- UI implementation spec: [`docs/DESIGN-SPEC.md`](./DESIGN-SPEC.md)
- Production tokens and selectors: [`public/css/style.css`](../public/css/style.css)

Change workflow for material visual updates:
1. Update tokens/selectors in `public/css/style.css`.
2. Update this design system doc with rationale and version/changelog entry.
3. Update brand/spec docs where impacted in the same PR.
4. Validate key templates at desktop, tablet, and mobile breakpoints.

## 9. Changelog

- `2026-04-26`: Updated to `v1.1`; added responsive system rules, implementation selector map, and documented tokenization debt.
- `2026-04-25`: Created `v1.0` baseline design system document.
