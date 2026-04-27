# クロスブラウザテスト・パフォーマンス最適化ガイド — UniteCube

作成日：2026年4月22日 / v1.0

---

## 概要

本ドキュメントは、UniteCubeのWordPressサイト（`unitecube.jp`）を対象としたクロスブラウザテスト手順とパフォーマンス最適化方針を定めます。

### Core Web Vitals 目標値

| 指標                                 | 目標値  | 説明                   |
| ------------------------------------ | ------- | ---------------------- |
| **LCP**（Largest Contentful Paint）  | < 2.5s  | 最大コンテンツ描画時間 |
| **CLS**（Cumulative Layout Shift）   | < 0.1   | 累積レイアウトシフト   |
| **INP**（Interaction to Next Paint） | < 200ms | 次の描画までの応答時間 |

---

## 1. クロスブラウザテスト

### 1.1 テスト対象ブラウザ・環境

| ブラウザ      | バージョン       | プラットフォーム          | 優先度 |
| ------------- | ---------------- | ------------------------- | ------ |
| Chrome        | 最新版 + 1世代前 | Windows / macOS / Android | 高     |
| Firefox       | 最新版           | Windows / macOS           | 高     |
| Safari        | 最新版           | macOS / iOS               | 高     |
| Edge          | 最新版           | Windows                   | 中     |
| Chrome Mobile | 最新版           | Android（360dp 相当）     | 高     |
| Safari Mobile | 最新版           | iOS（375dp 相当）         | 高     |

### 1.2 テストビューポート一覧

```text
モバイル（縦）  : 375 × 812  （iPhone 14 相当）
モバイル（横）  : 812 × 375
タブレット     : 768 × 1024  （iPad 相当）
デスクトップ    : 1280 × 800
ワイドスクリーン: 1920 × 1080
```

### 1.3 チェックリスト

#### レイアウト確認

- [ ] ヘッダー・フッターが全ビューポートで崩れていない
- [ ] ナビゲーションメニューがモバイルでハンバーガー表示になっている
- [ ] 問い合わせフォーム（Contact Form 7）が全ブラウザで送信できる
- [ ] フォントが正しく描画されている（フォールバックフォントで崩れていない）
- [ ] 画像が適切なサイズで表示されている

#### 機能確認

- [ ] Webhookトリガー（フォーム送信）が全ブラウザで動作する
- [ ] JavaScriptエラーがコンソールに出ていない（Chrome DevTools / Firefox
      DevTools で確認）
- [ ] CSS Gridおよびflexboxレイアウトが一貫している
- [ ] 画像の遅延読み込み（`loading="lazy"`）がサポートブラウザで動作する

#### アクセシビリティ

- [ ] タブキーでフォーカス移動ができる
- [ ] コントラスト比がWCAG 2.1 AA基準（4.5:1）を満たしている
- [ ] 画像に`alt`属性が設定されている

### 1.4 テストツール

| ツール | 用途 | URL |
| --- | --- | --- |
| BrowserStack/LambdaTest | 実機クロスブラウザテスト | ローカル実機で代替可 |
| Chrome DevTools | モバイル表示確認 | ブラウザ内蔵 |
| Firefox RDM | モバイル表示確認 | ブラウザ内蔵 |
| W3C Validator | HTMLバリデーション | <https://validator.w3.org> |
| PageSpeed Insights | Core Web Vitals計測 | <https://pagespeed.web.dev> |

---

## 2. 画像最適化

### 2.1 次世代フォーマットへの移行

WordPressにおいては、`<picture>` 要素と `srcset`
を組み合わせてWebP/AVIFを提供し、非対応ブラウザにはJPEG/PNGをフォールバックします。

```html
<picture>
  <!-- AVIF対応ブラウザ（Chrome 85+, Firefox 93+） -->
  <source
    type="image/avif"
    srcset="image-400.avif 400w, image-800.avif 800w, image-1200.avif 1200w"
    sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
  />
  <!-- WebP対応ブラウザ（Chrome 32+, Firefox 65+, Safari 14+） -->
  <source
    type="image/webp"
    srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
    sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
  />
  <!-- フォールバック（全ブラウザ対応） -->
  <img
    src="image-800.jpg"
    srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
    sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
    alt="説明テキスト"
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
  />
</picture>
```

### 2.2 WordPress プラグインによる自動変換

| プラグイン           | 機能                         | 推奨 |
| -------------------- | ---------------------------- | ---- |
| Imagify              | WebP自動変換、圧縮、CDN連携  | ◎    |
| ShortPixel           | AVIF・WebP変換、バルク最適化 | ◎    |
| EWWW Image Optimizer | 無料枠あり、WebP変換可能     | ○    |

**推奨設定（Imagify）：**

- 変換レベル：Aggressive（品質85%相当）
- WebP：有効（`<picture>`タグを自動生成）
- 遅延読み込み：有効

### 2.3 画像最適化チェックリスト

- [ ] ヒーロー画像（ファーストビュー）は`loading="eager"`、それ以外は`loading="lazy"`
- [ ] `width`と`height`属性を必ず指定しCLSを防止する
- [ ] アイコン類はSVGを使用（スケーラブルかつファイルサイズ小）
- [ ] ロゴ画像はSVGまたは2倍解像度のWebPを提供

---

## 3. 遅延読み込み（Lazy Loading）

### 3.1 ネイティブ遅延読み込み

```html
<!-- ファーストビュー外の画像 -->
<img src="below-fold.webp" alt="..." loading="lazy" decoding="async" />

<!-- ファーストビュー外のiframe（Google マップ等） -->
<iframe src="https://www.google.com/maps/embed?..." loading="lazy"></iframe>
```

### 3.2 WordPress での実装

WordPress
5.5以降、コアがネイティブ遅延読み込みをサポートしています。以下の設定を確認してください。

```php
// functions.php — 先頭画像のみeagerを強制（LCP改善）
function uc_set_hero_image_eager(
    $attr,
    $attachment,
    $size
) {
    // ヒーロー画像はクラス名で識別
    if (
        isset( $attr['class'] ) &&
        strpos( $attr['class'], 'hero-image' ) !== false
    ) {
        $attr['loading'] = 'eager';
        $attr['fetchpriority'] = 'high';
    }
    return $attr;
}
add_filter(
    'wp_get_attachment_image_attributes',
    'uc_set_hero_image_eager',
    10,
    3
);
```

### 3.3 スクロール検知による遅延コンテンツ読み込み

n8n実行ログウィジェット等、APIを呼ぶコンポーネントはIntersection Observer
APIで遅延初期化します。

```javascript
// ダッシュボードウィジェットの遅延初期化
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        initDashboardWidget(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "200px" },
);

document
  .querySelectorAll(".dashboard-widget")
  .forEach((el) => observer.observe(el));
```

---

## 4. フォント読み込み戦略

### 4.1 `font-display: swap` の適用

```css
/* style.css または カスタムCSS */
@font-face {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* フォント読み込み中はシステムフォントで表示 */
  src: url("fonts/noto-sans-jp-regular.woff2") format("woff2");
  unicode-range: U+3000-9FFF, U+F900-FAFF, U+FF00-FFEF; /* 日本語グリフのみ */
}

@font-face {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("fonts/noto-sans-jp-bold.woff2") format("woff2");
  unicode-range: U+3000-9FFF, U+F900-FAFF, U+FF00-FFEF;
}
```

### 4.2 フォントのpreload

LCP対象となるテキストで使用するフォントは`<head>`内でpreloadします。

```html
<!-- テーマの header.php に追加 -->
<link
  rel="preload"
  href="<?php echo get_template_directory_uri(); ?>/fonts/noto-sans-jp-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

### 4.3 Google Fonts の場合

```html
<!-- connection早期化 -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- displayパラメータでswap指定 -->
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

### 4.4 フォント最適化チェックリスト

- [ ] 使用するウェイト（太さ）を必要最低限に絞る（400と700のみ等）
- [ ] `font-display: swap`をすべての`@font-face`に設定
- [ ] LCPに関わるフォントを`rel="preload"`でpreload
- [ ] サブセット化（日本語グリフのみ）でファイルサイズを削減

---

## 5. バンドルサイズ・コード分割

### 5.1 WordPress CSSとJSの最適化

```php
// functions.php

// 不要なWordPressコアCSSの除去
function uc_dequeue_unnecessary_styles() {
    // ブロックエディタCSS（クラシックテーマでは不要）
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    // 絵文字スクリプト（不要な場合）
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
}
add_action( 'wp_enqueue_scripts', 'uc_dequeue_unnecessary_styles', 100 );

// JSの非同期読み込み
function uc_defer_non_critical_scripts( $tag, $handle, $src ) {
    $defer_scripts = [ 'uc-analytics', 'uc-chat-widget' ];
    if ( in_array( $handle, $defer_scripts ) ) {
        return str_replace( ' src', ' defer src', $tag );
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'uc_defer_non_critical_scripts', 10, 3 );
```

### 5.2 CSSの結合と最小化

| プラグイン      | 機能                                 | 推奨              |
| --------------- | ------------------------------------ | ----------------- |
| WP Rocket       | CSS/JS結合・最小化、Critical CSS生成 | ◎（有料）         |
| Autoptimize     | 無料、CSS/JS最適化                   | ○                 |
| LiteSpeed Cache | LiteSpeedサーバ専用、高機能          | ◎（KUSANAGI環境） |

**推奨設定：**

- CSS：結合 + 最小化 + Critical
  CSS（ファーストビュー分を`<head>`にインライン化）
- JS：非クリティカルは`defer`または`async`、結合は慎重に（依存関係の破壊を防ぐ）
- HTMLの最小化：有効

### 5.3 Critical CSS の生成

ファーストビューに必要なCSSのみを`<head>`にインライン化し、残りはnonrenderingで非同期読み込みします。

```html
<!-- header.php -->
<style>
  /* Critical CSS（ここにインライン） */
  body { margin: 0; font-family: 'Noto Sans JP', sans-serif; }
  .site-header { ... }
  .hero { ... }
</style>
<!-- 残りのCSSを非同期読み込み -->
<link
  rel="preload"
  href="style.css"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript><link rel="stylesheet" href="style.css" /></noscript>
```

### 5.4 サードパーティスクリプトの管理

| スクリプト | 最適化方針 |
| --- | --- |
| Google Analytics | `async` + 必要に応じて Partytown 移行 |
| Googleマップ | クリック/スクロール時に遅延読み込み |
| チャット | 一定時間後またはスクロール時に遅延読み込み |
| reCAPTCHA | フォーム表示ページのみで読み込む |

---

## 6. パフォーマンス計測手順

### 6.1 PageSpeed Insights でのフィールドデータ確認

1. <https://pagespeed.web.dev> にアクセス
2. `https://unitecube.jp` を入力して分析
3. 「モバイル」と「デスクトップ」の両方を確認
4. Core Web Vitals の各指標が目標値内かチェック

### 6.2 Chrome DevTools による詳細計測

```text
1. Chrome で unitecube.jp を開く
2. DevTools を開く（F12）
3. [Lighthouse] タブ → カテゴリ「Performance」のみ選択
4. [Analyze page load] を実行
5. LCP・CLS・INP の診断項目を確認
```

### 6.3 定期計測スケジュール

| タイミング       | 計測内容                                             |
| ---------------- | ---------------------------------------------------- |
| デプロイ前後     | PageSpeed Insightsでモバイル・デスクトップスコア記録 |
| 月次             | CrUX（Chrome UX Report）FieldDataとの乖離確認        |
| プラグイン追加時 | 追加前後でスコアを比較                               |

### 6.4 計測結果の記録フォーマット

```text
計測日: YYYY-MM-DD
ページ: https://unitecube.jp/
ブラウザ環境: モバイル / デスクトップ

| 指標 | 計測値 | 目標値 | 合否 |
|------|--------|--------|------|
| LCP  |        | < 2.5s |      |
| CLS  |        | < 0.1  |      |
| INP  |        | < 200ms|      |
| FCP  |        | < 1.8s |      |
| TTFB |        | < 800ms|      |

課題・対策:
```

---

## 7. サーバサイド最適化

### 7.1 KUSANAGI / Nginx 設定

```nginx
# /etc/nginx/conf.d/unitecube.conf に追記

# gzip圧縮
gzip on;
gzip_types text/css application/javascript image/svg+xml application/json;
gzip_min_length 1024;

# Brotli（KUSANAGIがサポートする場合）
brotli on;
brotli_types text/css application/javascript image/svg+xml;

# 静的ファイルのキャッシュ
location ~* \.(css|js|woff2|svg|webp|avif)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# HTML は短期キャッシュ
location ~* \.html$ {
    expires 1h;
    add_header Cache-Control "public, must-revalidate";
}
```

### 7.2 WordPress オブジェクトキャッシュ

Memcached または Redis をWordPressのオブジェクトキャッシュとして設定することでデータベースクエリを削減します。

```php
// wp-config.php
define( 'WP_CACHE', true );
// Redis Object Cache プラグイン使用時
define( 'WP_REDIS_HOST', '127.0.0.1' );
define( 'WP_REDIS_PORT', 6379 );
```

---

## 8. トラブルシューティング

### よくある問題と対処

| 問題 | 原因 | 対処 |
| --- | --- | --- |
| Safari で WebP 非表示 | Safari 14 未満は非対応 | `<picture>` で JPEG フォールバックを提供 |
| iOS Safari でフォント崩れ | `font-display` が CLS を増加 | `font-display: optional` を検討 |
| Firefox の CLS 増大 | 画像に width/height がない | 全 `<img>` に width/height を付与 |
| INP が高い | メインスレッドを長時間占有 | `setTimeout` / `requestIdleCallback` で分割 |
| LCP が遅い | ヒーロー画像を遅延読み込み | `loading=\"eager\"` と `fetchpriority=\"high\"` を設定 |

---

## 参考資料

- [Core Web Vitals — web.dev](https://web.dev/vitals/)
- [WordPress パフォーマンスハンドブック — WordPress.org](https://developer.wordpress.org/advanced-administration/performance/)
- [Serving WebP images — web.dev](https://web.dev/serve-images-webp/)
- [Optimize webfont loading — web.dev](https://web.dev/font-best-practices/)

---

UniteCube — 北海道稚内市 / v1.0 — 2026年4月
