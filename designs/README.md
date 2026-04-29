# Design Asset Dropzone

Updated: 2026-04-27 (UTC)

This directory is the single source of truth for design asset handoff in this repository.

## Required structure

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

## Current status

- No committed design asset files (`.png`, `.jpg`, `.jpeg`, `.svg`, `.pdf`) were found in this repository at audit time.
- Existing visual implementation is currently embedded in HTML/CSS under `public/` and documented in `docs/DESIGN-SPEC.md`.

## Where to place files

- Source design links or exports: `designs/source/`
- Desktop page comps: `designs/comps/desktop/`
- Mobile page comps: `designs/comps/mobile/`
- Logos: `designs/assets/logos/`
- Icons: `designs/assets/icons/`
- Images/illustrations: `designs/assets/images/`
- Style guide artifacts: `designs/style-guide/`
- Design tokens (`.json` or `.md`): `designs/tokens/`
- Interaction specs: `designs/interaction-spec/`
- Handoff notes/changelog: `designs/handoff-notes/`
