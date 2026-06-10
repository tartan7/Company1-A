# Design Spec - UniteCube Client Dashboard

Updated: 2026-04-30 (UTC)

## Scope and Source of Truth

This spec documents the design system for UniteCube Client Dashboard.

### Design-to-Implementation Relationship

**正しい製作順序：**
1. デザイン仕様作成（`designs/` ディレクトリ）
2. 実装（HTML/CSS）の開発

**現状の状況：**
- 本来のデザインファイルが存在しなかったため、実装ファイル（`style.css`, `*.html`）からデザイントークンとコンポーネントを抽出
- 抽出した仕様に基づいて、不足していたデザインファイルを `designs/` に作成・補完

### Sources

1. **Design assets** (正しいソース・オブ・トゥルース):
   - `designs/tokens/design-tokens.json` — デザイントークン定義（JSON）
   - `designs/style-guide/style-guide.md` — スタイルガイド
   - `designs/comps/desktop/` — デスクトップ用モックアップ（SVG）
   - `designs/comps/mobile/` — モバイル用モックアップ（SVG）
   - `designs/assets/logos/logo-primary.svg` — ロゴSVG
   - `designs/icon.svg` — アイコンSVG
   - `designs/interaction-spec/interaction-spec.md` — インタラクション仕様
   - `designs/handoff-notes/handoff-notes.md` — デザイン引き継ぎノート

2. **Implementation files** (検証・参照用):
   - `public/css/style.css` — CSSカスタムプロパティとしてトークン実装
   - `public/dashboard.html` — ダッシュボード実装
   - `public/workflows.html` — ワークフロー実装
   - `public/support.html` — サポート実装

### 製作手順まとめ

1. **デザイン仕様策定**: カラー、タイポグラフィ、スペーシング、コンポーネント定義
2. **モックアップ作成**: デスクトップ・モバイル画面設計
3. **実装**: デザイントークンをCSS変数として定義、HTMLマークアップ
4. **検証**: 実装がデザイン仕様に準拠しているか確認

## 1. Design Tokens

### 1.1 Colors (hex)

All tokens are defined in `:root` in `public/css/style.css`.

#### Brand

- `--color-brand-primary`: `#2563EB`
- `--color-brand-primary-dark`: `#1D4ED8`
- `--color-brand-primary-light`: `#DBEAFE`
- `--color-brand-secondary`: `#0F172A`

#### Semantic

- `--color-success`: `#16A34A`
- `--color-success-dark`: `#15803D`
- `--color-success-border`: `#BBF7D0`
- `--color-success-bg`: `#F0FDF4`
- `--color-warning`: `#D97706`
- `--color-warning-bg`: `#FFFBEB`
- `--color-error`: `#DC2626`
- `--color-error-dark`: `#B91C1C`
- `--color-error-bg`: `#FEF2F2`
- `--color-paused`: `#6B7280`
- `--color-paused-bg`: `#F9FAFB`

#### Neutral

- `--color-neutral-900`: `#111827`
- `--color-neutral-700`: `#374151`
- `--color-neutral-500`: `#6B7280`
- `--color-neutral-300`: `#D1D5DB`
- `--color-neutral-100`: `#F3F4F6`
- `--color-neutral-50`: `#F9FAFB`
- `--color-white`: `#FFFFFF`

Note: No OKLCH tokens are used in current implementation.

### 1.2 Typography

- Base family:
  `"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif`
- Mono family: `"Noto Sans Mono", "SFMono-Regular", "Consolas", monospace`
- Font sizes:
  - `--font-size-xs`: `12px`
  - `--font-size-sm`: `14px`
  - `--font-size-base`: `16px`
  - `--font-size-lg`: `18px`
  - `--font-size-xl`: `20px`
  - `--font-size-2xl`: `24px`
- Weights: `400`, `500`, `700`
- Line heights:
  - `--line-height-tight`: `1.25`
  - `--line-height-base`: `1.6`
  - `--line-height-loose`: `1.8`

### 1.3 Spacing Scale

4px base scale tokens:

- `--spacing-1`: `4px`
- `--spacing-2`: `8px`
- `--spacing-3`: `12px`
- `--spacing-4`: `16px`
- `--spacing-5`: `20px`
- `--spacing-6`: `24px`
- `--spacing-8`: `32px`
- `--spacing-10`: `40px`
- `--spacing-12`: `48px`
- `--spacing-16`: `64px`

### 1.4 Border Radius

- `--radius-sm`: `4px`
- `--radius-md`: `8px`
- `--radius-lg`: `12px`
- `--radius-xl`: `16px`
- `--radius-full`: `9999px`

### 1.5 Shadows

- `--shadow-sm`: `0 1px 2px rgba(0,0,0,0.05)`
- `--shadow-md`: `0 4px 6px rgba(0,0,0,0.07)`
- `--shadow-lg`: `0 10px 15px rgba(0,0,0,0.10)`
- `--shadow-xl`: `0 20px 25px rgba(0,0,0,0.10)`

### 1.6 Motion

- Durations:
  - `--duration-fast`: `100ms`
  - `--duration-base`: `200ms`
  - `--duration-slow`: `300ms`
- Easing: `--easing-base`: `cubic-bezier(0.4, 0, 0.2, 1)`
- Keyframes:
  - `toast-in` (slide-in + fade)
  - `overlay-in` (fade)
  - `modal-in` (scale + translate + fade)
- Reduced motion support: `@media (prefers-reduced-motion: reduce)` disables
  transitions/animations.

## 2. Component Inventory

Recurring UI components across pages:

### 2.1 Shell and Navigation

- App shell: `.app-layout`, fixed sidebar + main content.
- Sidebar: `.sidebar`, `.sidebar-logo`, `.sidebar-nav`, `.nav-item`,
  `.sidebar-user`.
- Mobile sidebar overlay: `.sidebar-overlay`.
- Header bar: `.header-bar`, `.hamburger-btn`, `.page-title`, `.last-updated`.

### 2.2 Core UI Primitives

- Buttons:
  - Base: `.btn`
  - Sizes: `.btn-sm`, `.btn-md`, `.btn-lg`
  - Variants: `.btn-primary`, `.btn-secondary`, `.btn-success`, `.btn-warning`,
    `.btn-danger`, `.btn-ghost`
- Badges:
  - Base: `.badge`
  - Variants: `.badge-success`, `.badge-error`, `.badge-warning`,
    `.badge-paused`, `.badge-running`
- Card container:
  - `.card`, `.card-header`, `.card-body`

### 2.3 Dashboard Components (`dashboard.html`)

- KPI stats grid: `.stats-grid`, `.stat-card`, `.stat-card-icon-*`,
  `.stat-card-value`.
- Execution log table: `.table-wrapper`, `.data-table`, `.detail-link`.
- Pagination: `.pagination`, `.pagination-btn`.

### 2.4 Workflow Components (`workflows.html`)

- Workflow grid/cards: `.workflow-grid`, `.workflow-card`,
  `.workflow-card-meta`, `.workflow-card-footer`.
- LINE template editor block:
  - `.line-reply-settings`, `.line-reply-current`, `.line-reply-editor`,
    `.line-reply-preview`
- Monthly recipient settings:
  - `.recipient-settings`, `.recipient-settings-form`, `.recipient-list`,
    `.recipient-list-item`
- Confirmation modal:
  - `.modal-overlay`, `.modal`, `.modal-title`, `.modal-actions`

### 2.5 Support Components (`support.html`)

- Two-column support layout: `.two-col-layout`
- Form system:
  - `.form-group`, `.form-label`, `.form-input`, `.form-select`,
    `.form-textarea`, `.form-hint`, `.form-error`
- File upload UI:
  - `.file-input-wrapper`, `.file-input-label`
- Inline success message: `.inline-success`
- Ticket list and empty state:
  - `.ticket-list`, `.ticket-item`, `.empty-state`

### 2.6 Global Feedback

- Toast system: `.toast-container`, `.toast`, `.toast-success`, `.toast-error`,
  `.toast-warning`, `.toast-close`

## 3. Page Layouts and Responsive Behavior

### 3.1 Layout Grid System

- Primary shell:
  - Fixed sidebar width token: `--sidebar-width: 240px` (desktop)
  - Content max width token: `--content-max-width: 1200px`
  - Main content offset via `margin-left: var(--sidebar-width)`
- Page content container:
  - `.page-content` with fluid width up to max width
- Local grids:
  - Dashboard KPI: `grid-template-columns: repeat(4, 1fr)`
  - Workflow cards: `repeat(2, 1fr)`
  - Support page: `two-col-layout` uses `1fr 1fr`

### 3.2 Breakpoints

Defined in `style.css`:

- `@media (max-width: 1023px)`:
  - Sidebar collapsed to icon rail (`--sidebar-width: 64px`)
  - Stats grid `4 -> 2`
  - Workflow grid `2 -> 1`
  - Support 2-column `-> 1`
- `@media (max-width: 767px)`:
  - Sidebar becomes off-canvas with hamburger toggle
  - Main content margin removed
  - Page/header paddings reduced
  - Toast container spans mobile width
- `@media (max-width: 479px)`:
  - Stats grid `2 -> 1`
  - Modal actions stack vertically

### 3.3 Accessibility and Interaction Patterns

- Focus style via `:focus-visible`.
- Touch target intent present (`min-height: 44px`) on interactive controls.
- ARIA usage in HTML for navigation, status, live regions, dialog semantics, and
  labels.

## 4. Asset Catalog

### 4.1 Design Assets in `designs/` Directory

| File | Type | Size | Status | Description |
|------|------|------|--------|-------------|
| `designs/tokens/design-tokens.json` | JSON | ~1.5KB | ✅ Active | デザイントークン定義（色、タイポグラフィ、スペーシング等） |
| `designs/style-guide/style-guide.md` | Markdown | ~1KB | ✅ Active | スタイルガイド（カラーパレット、タイポグラフィ等） |
| `designs/style-guide/style-guide.pdf` | PDF | 601B | ✅ Active | スタイルガイドPDF版 |
| `designs/style-guide.pdf` (root) | PDF | 601B | ✅ Active | ルート用スタイルガイドPDF |
| `designs/comps/desktop/dashboard-desktop.svg` | SVG | ~1KB | ✅ Active | ダッシュボード・デスクトップモックアップ（1200×800） |
| `designs/comps/desktop/workflows-desktop.svg` | SVG | ~500B | ✅ Active | ワークフロー・デスクトップモックアップ |
| `designs/comps/mobile/dashboard-mobile.svg` | SVG | ~500B | ✅ Active | ダッシュボード・モバイルモックアップ（375×812） |
| `designs/interaction-spec/interaction-spec.md` | Markdown | ~1KB | ✅ Active | インタラクション仕様（ボタン状態、フォーム、ナビゲーション等） |
| `designs/handoff-notes/handoff-notes.md` | Markdown | ~1KB | ✅ Active | デザイン引き継ぎノート（デザイン・実装対応マップ） |
| `designs/assets/logos/logo-primary.svg` | SVG | 270B | ✅ Active | ロゴSVG（240×60、#2563EB背景、白文字） |
| `designs/icon.svg` | SVG | 457B | ✅ Active | アイコンSVG（64×64、キューブモチーフ） |
| `designs/logo.png` | PNG | 247B | ✅ Active | ロゴPNG（240×60、#2563EB背景） |
| `designs/mockups.zip` | ZIP | ~2KB | ✅ Active | モックアップSVGを含むZIPファイル |

### 4.2 Design-to-Implementation Mapping

| Design File | Implementation File | Mapping |
|-------------|---------------------|--------|
| `designs/tokens/design-tokens.json` | `public/css/style.css` (`:root`) | JSONトークン → CSSカスタムプロパティ |
| `designs/comps/desktop/dashboard-desktop.svg` | `public/dashboard.html` | レイアウト構造・コンポーネント配置 |
| `designs/comps/desktop/workflows-desktop.svg` | `public/workflows.html` | ワークフローカード・エディタ構造 |
| `designs/style-guide/style-guide.md` | `public/css/style.css` | タイポグラフィ・カラー・スペーシング実装 |
| `designs/interaction-spec/interaction-spec.md` | `public/css/style.css` | ホバー・フォーカス・アニメーション実装 |
| `designs/assets/logos/logo-primary.svg` | `public/dashboard.html` (sidebar) | ロゴ画像の使用 |

### 4.3 In-Product Visual Assets

- Icons are inline SVG blocks embedded directly in HTML templates.
- Standalone SVG assets: `logo-primary.svg`, `icon.svg`
- No external icon sprite or illustration files; icons are self-contained SVG elements.

## 5. Gaps and Next Required Inputs

### 5.1 Completed Items

以下のデザインファイルは作成済みです：

- ✅ `designs/tokens/design-tokens.json` — デザイントークン定義（JSON）
- ✅ `designs/style-guide/style-guide.md` — スタイルガイド
- ✅ `designs/style-guide/style-guide.pdf` — スタイルガイドPDF
- ✅ `designs/style-guide.pdf` (root) — ルート用PDF
- ✅ `designs/comps/desktop/dashboard-desktop.svg` — ダッシュボード・デスクトップモックアップ
- ✅ `designs/comps/desktop/workflows-desktop.svg` — ワークフロー・デスクトップモックアップ
- ✅ `designs/comps/mobile/dashboard-mobile.svg` — ダッシュボード・モバイルモックアップ
- ✅ `designs/interaction-spec/interaction-spec.md` — インタラクション仕様
- ✅ `designs/handoff-notes/handoff-notes.md` — デザイン引き継ぎノート
- ✅ `designs/icon.svg` — アイコンSVG（64×64）
- ✅ `designs/logo.png` — ロゴPNG（240×60）
- ✅ `designs/mockups.zip` — モックアップZIPファイル

### 5.2 Documentation Completed

- ✅ デザインと実装の関係性を文書化（製作手順の順序を正しく記載）
- ✅ デザイン・実装対応マップを作成
- ✅ アセットカタログを更新（作成済みファイルを反映）

### 5.3 Future Enhancements

- より詳細なモックアップ（全ページ・全状態）の追加
- 実際のUI Designerによるオリジナルデザインファイルへの置き換え
- デザイントークンのOKLCH形式での追加
- コンポーネントライブラリ（Storybook等）の構築
