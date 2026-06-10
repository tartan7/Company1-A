# Component State Documentation

## Buttons

### Variants
- **Primary:** Blue background (#2563EB), white text
- **Secondary:** White background, gray border (#D1D5DB), gray text (#374151)
- **Success:** Green background (#16A34A), white text
- **Warning:** White background, warning border (#D97706), warning text
- **Danger:** Red background (#DC2626), white text
- **Ghost:** Transparent background, primary text (#2563EB)

### States
- **Default:** Base variant styling
- **Hover:** Darker background (primary: #1D4ED8), no underline
- **Focus:** 2px outline (#2563EB), 2px offset
- **Active:** Pressed appearance
- **Disabled:** 50% opacity, not-allowed cursor

### Sizes
- **Small:** 6px/12px padding, 14px font, 32px min-height
- **Medium:** 10px/20px padding, 16px font, 44px min-height
- **Large:** 14px/28px padding, 18px font, 44px min-height

## Badges

### Variants
- **Success:** Green text (#16A34A), light green bg (#F0FDF4)
- **Error:** Red text (#DC2626), light red bg (#FEF2F2)
- **Warning:** Orange text (#D97706), light orange bg (#FFFBEB)
- **Paused:** Gray text (#6B7280), light gray bg (#F9FAFB)
- **Running:** Blue text (#2563EB), light blue bg (#DBEAFE)

### Styling
- Border radius: full (9999px)
- Padding: 2px 8px
- Font size: 12px
- Font weight: 500

## Form Elements

### Input Fields

**Default State:**
- Border: 1px solid #D1D5DB
- Background: white
- Padding: 12px 16px
- Border radius: 8px
- Min height: 44px

**Focus State:**
- Border: 1px solid #2563EB
- Box shadow: 0 0 0 3px #DBEAFE
- Outline: none

**Error State:**
- Border: 1px solid #DC2626
- Focus box shadow: 0 0 0 3px #FEF2F2

**Disabled State:**
- Opacity: 0.5
- Cursor: not-allowed

### Select Dropdowns

Same states as input fields, plus:
- Right padding: 40px (for arrow)
- Arrow icon: 5px triangle, gray (#6B7280)

### Textareas

Same as input fields, plus:
- Min height: 120px
- Resize: vertical only
- Line height: 1.8

## Navigation Items

### Sidebar Nav Item

**Default:**
- Background: transparent
- Text: rgba(255,255,255,0.7)
- Padding: 12px 24px

**Hover:**
- Background: rgba(255,255,255,0.08)
- Text: white
- No underline

**Active:**
- Background: #2563EB
- Text: white

**Focus:**
- 2px outline (#2563EB), 2px offset

## Tables

### Data Table Row

**Default:**
- Background: white
- Border bottom: 1px solid #F3F4F6

**Hover:**
- Background: #F9FAFB
- Box shadow: 0 1px 2px rgba(0,0,0,0.05)

### Header Cells
- Background: #F9FAFB
- Text: #6B7280
- Font size: 12px
- Font weight: 500
- Text transform: uppercase
- Letter spacing: 0.05em

## Cards

### Base Card

**Default:**
- Background: white
- Border radius: 12px
- Box shadow: 0 4px 6px rgba(0,0,0,0.07)
- Padding: 24px

### Stat Card

Same as base card, plus:
- Icon area: 40x40px, 8px border radius
- Icon variants:
  - Blue: bg #DBEAFE, color #2563EB
  - Green: bg #F0FDF4, color #16A34A
  - Red: bg #FEF2F2, color #DC2626
  - Gray: bg #F3F4F6, color #374151

## Modals

### Overlay

**Entrance Animation:**
- Opacity: 0 → 1
- Duration: 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### Modal Card

**Entrance Animation:**
- Scale: 0.95 → 1
- Translate Y: 8px → 0
- Opacity: 0 → 1
- Duration: 300ms

**Styling:**
- Background: white
- Border radius: 16px
- Box shadow: 0 20px 25px rgba(0,0,0,0.10)
- Padding: 32px
- Max width: 480px

## Toast Notifications

### Appearance
- Border left: 4px solid (variant color)
- Background: white
- Border radius: 12px
- Box shadow: 0 10px 15px rgba(0,0,0,0.10)
- Padding: 16px

### Entrance Animation
- Transform: translateX(100%) → translateX(0)
- Opacity: 0 → 1
- Duration: 300ms

### Variants
- **Success:** Left border #16A34A
- **Error:** Left border #DC2626
- **Warning:** Left border #D97706

## Accessibility

All interactive elements:
- Min touch target: 44x44px
- Focus visible indicator: 2px outline, 2px offset
- Keyboard navigation support
- ARIA labels where needed
- Reduced motion support: animations disabled when `prefers-reduced-motion: reduce`
