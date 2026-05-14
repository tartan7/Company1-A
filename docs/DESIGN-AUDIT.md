# DESIGN-AUDIT.md — Visual Design & UX Audit

**Audit Date:** 2026-04-30
**Auditor:** UI Designer
**Scope:** Marketing site + Client dashboard

---

## Pages Reviewed

| Page | File | Type |
|------|------|------|
| Homepage | `public/home.html` | Marketing |
| Solutions | `public/solutions.html` | Marketing |
| Industries | `public/industries.html` | Marketing |
| Insights | `public/insights.html` | Marketing |
| Support | `public/support.html` | Marketing |
| Dashboard | `public/dashboard.html` | App |
| Workflows | `public/workflows.html` | App |
| 404 | `public/404.html` | Utility |

---

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand-primary` | `#2563EB` | CTAs, links, active states |
| `--color-brand-primary-dark` | `#1D4ED8` | Hover on primary |
| `--color-brand-primary-light` | `#DBEAFE` | Light backgrounds, badges |
| `--color-brand-secondary` | `#0F172A` | Sidebar, dark elements |
| `--color-success` | `#16A34A` | Success badges |
| `--color-error` | `#DC2626` | Error badges, negative values |
| `--color-warning` | `#D97706` | Warning badges |
| `--color-neutral-900` | `#111827` | Body text |
| `--color-neutral-700` | `#374151` | Secondary text |
| `--color-neutral-500` | `#6B7280` | Muted text, labels |
| `--color-neutral-300` | `#D1D5DB` | Borders |
| `--color-neutral-100` | `#F3F4F6` | Subtle backgrounds |
| `--color-neutral-50` | `#F9FAFB` | Page background |
| `--color-white` | `#FFFFFF` | Cards, overlays |

### Typography

| Token | Value |
|-------|-------|
| Font (base) | "Noto Sans JP", sans-serif |
| Font (mono) | "Noto Sans Mono", monospace |
| Size scale | 12 / 14 / 16 / 18 / 20 / 24px |
| Weight | 400 / 500 / 700 |

### Spacing

4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64px scale.

### Shadows

sm (1px) / md (4px) / lg (10px) / xl (20px) — all using `rgba(0,0,0, 0.05–0.10)`.

---

## Layout Patterns

### Marketing Site (`site-*.css`)

- **Shell:** `site-shell` with radial-gradient atmosphere background
- **Container:** `site-container` max-width 1200px, centered
- **Header:** Sticky, `backdrop-filter: blur(10px)`, 76px height
- **Hero grid:** 1.1fr / 0.9fr two-column split
- **Feature grid:** 3-column card grid
- **CTA band:** Full-width dark gradient band
- **Content layout:** Main (3fr) + sticky sidebar (1fr)

### Dashboard App (`style.css`)

- **App layout:** Flex sidebar + main content
- **Sidebar:** 240px fixed dark sidebar (`--color-brand-secondary`), collapsible on tablet
- **Header bar:** Sticky top bar with title + actions
- **Stats grid:** 4-column responsive grid → 2col → 1col
- **Card pattern:** White bg, `radius-lg`, `shadow-md`
- **Table:** Full-width, striped headers, hover row highlight

### Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| md | 768–1023px | Sidebar icon-only, grids → 1col |
| sm | ≤767px | Sidebar drawer (hamburger), grids → 1col |
| xs | ≤479px | Single column throughout |

---

## Component Patterns

- **Buttons:** 44px min-height (touch target), 3 size variants (sm/md/lg), 7 variants (primary/secondary/success/warning/danger/ghost), `border-radius-md`
- **Badges:** Pill-shaped status indicators with semantic color
- **Stat cards:** Icon + label + large value + sub-label pattern
- **Cards:** White fill, shadow, header/body split, overflow hidden
- **Forms:** 44px min-height inputs, focus ring with brand color glow
- **Pagination:** Numbered buttons, active state filled brand blue
- **Toasts:** Fixed bottom-right, slide-in animation, icon + title + text + close
- **Modal:** Fixed overlay, centered card, scale-in animation
- **Tables:** Monospace datetime/duration columns, hover states

---

## Content Quality

- **Japanese copy** is clear, professional, and on-brand for SME automation
- Headlines are benefit-driven ("定型業務を削減し、现场的時間を毎月30時間取り戻す")
- No obvious placeholder or dummy content outside of sample data
- `<title>` and `<meta description>` set on all pages
- OG tags present on index and dashboard

---

## UX Observations

### Strengths
- Clear visual hierarchy: marketing → CTA → feature → CTA flow
- Sidebar navigation consistent across app pages
- Stat cards provide immediate status overview
- Filter + pagination on log table
- `aria-live="polite"` on last-updated timestamp
- `aria-current="page"` on active nav items

### Friction Points
- **index.html** immediately redirects to dashboard.html — no landing page
- No visible loading states (skeleton spinners) for async data
- No error/empty states in log table — sample data only
- No inline editing confirmation feedback on workflow settings
- No breadcrumb on nested pages

---

## Accessibility

- `lang="ja"` set on all pages
- `aria-label` on all icon-only buttons and navigation regions
- `aria-current="page"` on active nav links
- `aria-hidden="true"` on all inline SVG icons
- `scope="col"` on table headers
- Visually-hidden screen-reader headings for stats sections and filter labels
- `focus-visible` custom outline (`2px solid brand-primary`, offset 2px)
- `prefers-reduced-motion` media query present — disables all animations
- 44px min-height on all interactive elements (buttons, inputs, nav items)
- `prefers-contrast` not handled
- No skip-link to main content

---

## Recommendations

1. **Visual hierarchy:** Consider a hero illustration or screenshot on the homepage — the right column (hero-card) feels data-heavy without visual anchor
2. **Loading states:** Add skeleton UI for stat cards and log table on initial load
3. **Empty states:** Design empty-state views for when no log entries exist
4. **Focus management:** On modal open, trap focus inside modal; return on close
5. **Skip link:** Add a "Skip to main content" link for keyboard users
6. **Color contrast:** Validate `--color-neutral-500` (#6B7280 on #F9FAFB) — likely passes at 4.5:1 but worth testing