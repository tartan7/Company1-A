# Interaction Specification

## Button States
- Default: Background color as defined (primary: #2563EB)
- Hover: Darken by 10% (primary-dark: #1D4ED8)
- Active: Darken by 20%
- Disabled: Opacity 50%, no pointer events
- Focus: 2px solid #2563EB outline with 2px offset

## Form Elements
- Focus: Same as button focus
- Error state: Border color #DC2626, error message below
- Success state: Border color #16A34A, success message below

## Navigation
- Sidebar: Collapse to 64px icon rail at 1023px
- Mobile: Off-canvas menu with hamburger toggle
- Active nav item: Background #2563EB with white text

## Toast Notifications
- Enter: slide-in + fade (200ms, cubic-bezier(0.4, 0, 0.2, 1))
- Exit: fade out (200ms)
- Auto-dismiss: 4000ms for success, 6000ms for error

## Modal
- Overlay: rgba(0,0,0,0.5) with fade-in (200ms)
- Modal: scale(0.95) + translate + fade-in (200ms)
