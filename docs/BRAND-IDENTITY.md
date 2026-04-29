# UniteCube Brand Identity and Visual Guidelines

_Last updated: April 26, 2026_ _Version: 1.1_

## 1. Brand Foundation

### Brand promise

UniteCube helps small and medium businesses run operations with confidence
through clear, dependable workflow automation.

### Brand attributes

- Trustworthy
- Clear
- Practical
- Friendly
- Reliable

### Positioning statement

UniteCube is an operations automation platform for SMB teams that need
enterprise-grade reliability without enterprise complexity.

## 2. Logo System

### Primary logo

- Preferred mark: `UniteCube` wordmark + rounded-square cube symbol.
- Primary application: navigation/header, docs cover, website hero, presentation
  title slides.

### Approved logo variants

- Full color on light background:
  - Symbol: `color-brand-primary` (`#2563EB`)
  - Wordmark: `color-brand-secondary` (`#0F172A`)
- Reverse on dark background:
  - Symbol and wordmark: `#FFFFFF`
- Monochrome (single-color):
  - Use only when production constraints require one color.

### Logo variant usage matrix

| Context | Recommended variant | Notes |
| --- | --- | --- |
| App nav/sidebar | Full color on light bg | Default for product UI |
| Hero on dark bg | Reverse on dark bg | Keep contrast for lockup |
| Favicon/compact badge | Symbol-only variant | Follow minimum size |
| Single-ink print | Monochrome | No gradients/effects |

### Clear space and minimum size

- Clear space: leave padding equal to at least the symbol corner radius on all
  sides.
- Minimum digital size:
  - Full lockup: `120px` width
  - Symbol-only: `24px` width
- Never scale non-proportionally.

### Incorrect usage (do not)

- Do not change logo colors outside approved variants.
- Do not add shadows, outlines, or gradients to the mark.
- Do not rotate, skew, stretch, or condense.
- Do not place logo on low-contrast or visually noisy regions.
- Do not recreate the wordmark with substitute fonts.

### Asset location

- Current UI symbol implementation: inline SVG in navigation templates.
- When exported brand assets are produced, store in `public/images/logo/` as
  SVG.

## 3. Color Palette

The palette below is canonical and aligns with current implementation in
`public/css/style.css`.

### Core brand colors

| Token                       | Hex       | Role                         |
| --------------------------- | --------- | ---------------------------- |
| `color-brand-primary`       | `#2563EB` | Primary actions, key accents |
| `color-brand-primary-dark`  | `#1D4ED8` | Hover/focus/active state     |
| `color-brand-primary-light` | `#DBEAFE` | Subtle highlight backgrounds |
| `color-brand-secondary`     | `#0F172A` | Heading and structural text  |

### Semantic colors

| Token              | Hex       | Use                    |
| ------------------ | --------- | ---------------------- |
| `color-success`    | `#16A34A` | Success states         |
| `color-success-bg` | `#F0FDF4` | Success surfaces       |
| `color-warning`    | `#D97706` | Warnings               |
| `color-warning-bg` | `#FFFBEB` | Warning surfaces       |
| `color-error`      | `#DC2626` | Errors                 |
| `color-error-bg`   | `#FEF2F2` | Error surfaces         |
| `color-paused`     | `#6B7280` | Paused/inactive status |
| `color-paused-bg`  | `#F9FAFB` | Paused surfaces        |

### Neutral colors

| Token               | Hex       | Use                         |
| ------------------- | --------- | --------------------------- |
| `color-neutral-900` | `#111827` | Body text                   |
| `color-neutral-700` | `#374151` | Secondary text              |
| `color-neutral-500` | `#6B7280` | Metadata and placeholders   |
| `color-neutral-300` | `#D1D5DB` | Borders/dividers            |
| `color-neutral-100` | `#F3F4F6` | Subtle separators           |
| `color-neutral-50`  | `#F9FAFB` | Page background             |
| `color-white`       | `#FFFFFF` | Cards and elevated surfaces |

### Color usage ratio

- 70% neutrals for layout and readability.
- 20% brand secondary/structured UI surfaces.
- 10% brand primary and semantic accents.

### Accessibility guidance

- Maintain WCAG 2.1 AA contrast for text and controls.
- Never convey status with color alone; always pair with label/icon.

## 4. Typography

### Primary typeface stack

- `"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif`

### Monospace stack

- `"Noto Sans Mono", "SFMono-Regular", "Consolas", monospace`

### Type scale

| Token            | Size   | Typical use       |
| ---------------- | ------ | ----------------- |
| `font-size-2xl`  | `24px` | Page title        |
| `font-size-xl`   | `20px` | Section heading   |
| `font-size-lg`   | `18px` | Card title        |
| `font-size-base` | `16px` | Body text         |
| `font-size-sm`   | `14px` | Labels/table text |
| `font-size-xs`   | `12px` | Metadata/captions |

### Weight and line height

- Weights: `400` (normal), `500` (medium), `700` (bold)
- Recommended line height:
  - Japanese-heavy text: `1.6` to `1.8`
  - Short headings and labels: `1.25` to `1.4`

### Typographic rules

- Prefer concise headings and direct body copy.
- Avoid dense paragraphs; break content into short blocks.
- Use monospace only for timestamps, IDs, logs, and technical values.

## 5. Iconography

### Style principles

- Use simple, geometric line icons.
- Default style: rounded line caps/corners to match brand softness.
- Keep icon visual weight consistent within a screen.

### Sizing and spacing

- Standard sizes: `16px`, `20px`, `24px`.
- Keep icon-to-label spacing at `8px` (`spacing-2`).
- Do not mix filled and outlined styles in one control group.

### Color and state

- Default icon color follows surrounding text color.
- Interactive icon links/buttons use `color-brand-primary`, hover
  `color-brand-primary-dark`.
- Status icons must use semantic colors matching badges.

### Recommended icon families

- Lucide, Heroicons (outline), or equivalent consistent stroke icon set.

## 6. Tone of Voice

### Voice characteristics

- Clear and practical
- Calm and solution-oriented
- Respectful and direct
- Non-technical when user-facing

### Writing guidelines

- Prioritize what happened, impact, and next action.
- Use short sentences and plain language.
- Avoid jargon unless needed; when needed, explain in one phrase.
- Prefer active voice and concrete verbs.

### Microcopy rules

- Buttons: action-first (`Save settings`, `Pause workflow`, `Send request`).
- Validation errors: explain the fix (`Enter a valid email address`).
- Empty states: state condition + next action
  (`No workflow runs yet. Start your first workflow to see activity here.`).
- Support/alerts: include urgency and owner where applicable.

### Japanese localization guidance

- Use polite but concise tone (`です・ます` style).
- Keep labels short enough for mobile UI.
- Prefer familiar business language over literal technical translations.

## 7. UI Composition Rules

### Layout

- Use whitespace and card grouping before adding visual decoration.
- Apply `shadow-md` for cards, avoid heavy shadows for core app surfaces.
- Maintain consistent section rhythm with spacing tokens.

### Controls

- Primary CTA: filled brand primary.
- Secondary CTA: neutral or outline style.
- Destructive actions: semantic error color, with confirmation when
  irreversible.

### Motion

- Use restrained transitions:
  - hover/focus: `100ms` to `200ms`
  - modal/surface transitions: `300ms`
- Easing standard: `cubic-bezier(0.4, 0, 0.2, 1)`

## 8. Governance and Maintenance

### Source of truth

- Visual token implementation: `public/css/style.css`
- UI specification details: `docs/DESIGN-SPEC.md`
- Brand-level guidance (this document): `docs/BRAND-IDENTITY.md`
- Visual review artifact: `docs/BRAND-IDENTITY-REVIEW.html`

### Change control

- Any change to colors, typography, or voice must update all three sources in
  the same PR when applicable.
- Major brand shifts require stakeholder sign-off before rollout.

### Versioning

- Current baseline: `v1.1`.
- Add dated changelog entries for any non-trivial brand update.

## 9. Changelog

- `2026-04-26`: Added `docs/BRAND-IDENTITY-REVIEW.html` as a visual review
  companion artifact.
- `2026-04-26`: Updated to `v1.1`; added logo variant usage matrix and
  governance-ready version marker.
- `2026-04-24`: Created initial `v1.0` brand identity baseline.
