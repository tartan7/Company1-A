# UniteCube Relaunch Frontend Placeholder Scaffold

**Owner:** Frontend Engineering Team  
**Last Updated:** 2026-04-29 19:03:57 UTC  
**Update Process:** This document should be updated when new design assets are received or when placeholder requirements change. Updates should be reviewed by the Design Lead before implementation.

## Overview

This document provides a concrete placeholder scaffold plan for the UniteCube relaunch frontend pages. It enables engineering to begin structural work while awaiting final design assets. Each placeholder block is mapped to expected future design asset types and specifies exact replacement points for developers.

## Target Pages and Placeholder Blocks

### 1. Home Page (`public/home.html`)

| Section | Placeholder Block | Expected Asset Type | Replacement Point |
|---------|------------------|---------------------|-------------------|
| Hero Section | Background illustration | Custom illustration showing automation benefits | Replace the background area of `.hero` section |
| Hero Section | Automation visualization | Icon set or small illustrations | Replace the feature icons in the `.hero-metrics .metric-card` sections |
| Feature Grid | Feature icons | Custom icons representing each feature | Replace SVG icons in `.feature-card h3` headings |
| CTA Section | Background pattern | Subtle geometric pattern | Replace background of the `.band` section |

### 2. Solutions Page (`public/solutions.html`)

| Section | Placeholder Block | Expected Asset Type | Replacement Point |
|---------|------------------|---------------------|-------------------|
| Page Hero | Background illustration | Conceptual illustration of business growth | Replace background of `.page-hero` section |
| Feature Grid | Plan illustrations | Illustrations representing Starter/Growth/Scale plans | Replace the article content areas in `.feature-card` elements |
| Implementation Timeline | Timeline graphics | Visual timeline representation | Replace the text content in the first `.feature-card` of `.columns` section |
| Support Section | Support team photo | Photo of support team | Replace the second `.feature-card` in `.columns` section |

### 3. Industries Page (`public/industries.html`)

| Section | Placeholder Block | Expected Asset Type | Replacement Point |
|---------|------------------|---------------------|-------------------|
| Page Hero | Background illustration | Industrial setting illustration | Replace background of `.page-hero` section |
| Feature Grid | Industry icons | Custom icons for each industry (lodging, retail, service) | Replace the article headings (h3) in each `.feature-card` |
| Template Section | Template preview images | Mockups of LINE replies, reports, etc. | Replace the text content in the `.band` section |

### 4. Insights Page (`public/insights.html`)

| Section | Placeholder Block | Expected Asset Type | Replacement Point |
|---------|------------------|---------------------|-------------------|
| Page Hero | Background illustration | Knowledge/workflow illustration | Replace background of `.page-hero` section |
| Content Section | Knowledge icons | Icons representing each knowledge section | Replace the h2 section headers |
| Sidebar | CTA illustration | Illustration encouraging consultation | Replace the background of `.cta-card` |

### 5. Dashboard Page (`public/dashboard.html`)

| Section | Placeholder Block | Expected Asset Type | Replacement Point |
|---------|------------------|---------------------|-------------------|
| Stats Grid | Stat card icons | Custom icons for each metric (total, success rate, error count, status) | Replace SVG icons in `.stat-card-icon-*` elements |
| Table Section | Status indicators | Enhanced status badges with icons | Replace the span elements in the status column |
| Empty State | Empty state illustration | Illustration showing no data | Replace the SVG in `.empty-state` when implemented |
| Modal | Modal illustration | Illustration for confirmation context | Replace the modal body content when needed |

### 6. Workflows Page (`public/workflows.html`)

| Section | Placeholder Block | Expected Asset Type | Replacement Point |
|---------|------------------|---------------------|-------------------|
| Workflow Cards | Workflow icons | Custom icons representing each workflow type | Replace the SVG circles/polygons in workflow card headers |
| Settings Sections | Settings illustrations | Icons for LINE reply, recipient settings, etc. | Replace section headers in settings areas |
| Empty State | Empty state illustration | Illustration showing no workflows | Replace the SVG in `.empty-state` when implemented |
| Modal | Modal illustration | Illustration for workflow actions | Replace modal body content when needed |

### 7. Support Page (`public/support.html`)

| Section | Placeholder Block | Expected Asset Type | Replacement Point |
|---------|------------------|---------------------|-------------------|
| Form Section | Form icons | Icons for form fields (subject, category, details, attachment) | Replace or augment form labels |
| File Upload | Upload illustration | Illustration showing drag & drop interaction | Replace the SVG in `.file-input-label` |
| Ticket List | Status indicators | Enhanced status badges with icons | Replace badge elements in ticket items |
| Empty State | Empty state illustration | Illustration showing no tickets | Replace the SVG in `.empty-state` when implemented |

## Implementation Guidelines

### Placeholder Styling
All placeholders should use the following consistent styling until replaced:
- Background: `--color-neutral-100` or `--color-neutral-50`
- Border: `1px dashed --color-neutral-300`
- Border-radius: `--radius-md`
- Minimum height: 120px (adjust based on context)
- Display flex with centered content
- Text color: `--color-neutral-500`
- Font size: `--font-size-sm`

### Replacement Process
1. When design assets are received, locate the exact replacement points specified in the tables above
2. Replace the placeholder element/content with the actual asset
3. Maintain the same CSS classes and structure where possible
4. Update any necessary CSS to accommodate the new assets
5. Remove placeholder styling once replaced

### Asset Types Reference
- **Hero illustrations**: Full-width background images (1920x1080px recommended)
- **Feature/icons**: SVG or PNG icons (64x64px to 128x128px)
- **Illustrations**: Standalone artwork (800x600px to 1200x800px)
- **Screenshots**: Product interface captures (various sizes)
- **Logos**: SVG preferred, PNG fallback
- **Photos**: Team/settings photography (optimized for web)

## Next Steps for Engineering
1. Implement placeholder elements using the guidelines above for each section
2. Ensure placeholders are visible and clearly marked as temporary
3. Maintain consistent spacing and layout structure
4. Test responsive behavior across breakpoints
5. Replace placeholders as assets are received following the mapping above

## Review Checklist
- [ ] All target pages analyzed for placeholder opportunities
- [ ] Each placeholder mapped to specific asset type
- [ ] Exact replacement points identified
- [ ] Consistent placeholder styling defined
- [ ] Replacement process documented
- [ ] Stakeholder review completed