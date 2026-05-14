# Design Handoff Notes

## Overview
This design system and implementation supports the UniteCube client dashboard.
The design was created to be responsive from mobile (320px) to desktop (1920px).

## Design to Implementation Mapping
- Design tokens in `designs/tokens/design-tokens.json` → CSS custom properties in `public/css/style.css`
- Component designs in `designs/comps/` → HTML in `public/*.html`
- Style guide in `designs/style-guide/` → Visual implementation in CSS

## Key Breakpoints
- Desktop: > 1023px (sidebar 240px)
- Tablet: 768px - 1023px (sidebar 64px icon rail)
- Mobile: < 768px (off-canvas sidebar)
- Small mobile: < 480px (single column layouts)

## Assets
All SVG assets are in `designs/assets/` directory.
Logo: `designs/assets/logos/logo-primary.svg`
Icon: `designs/icon.svg`

## Notes for Developers
- Use CSS custom properties for all design tokens
- Maintain 44px minimum touch target on mobile
- Test with `prefers-reduced-motion: reduce`
- Use semantic HTML with appropriate ARIA attributes
