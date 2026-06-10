# システムアーキテクチャ — UniteCube

_更新日: 2026-04-26 (UTC)_

## 1. 目的とスコープ

本ドキュメントは `docs/TECH-STACK.md` の決定を前提に、UniteCubeの初期システム構成を定義する。

- コンポーネント構造
- 主要データフロー
- API境界（責務分離）
- デプロイメントモデル

対象は「初期運用（1〜2名体制、少数クライアント）」であり、過度な分散化は行わない。

## 2. アーキテクチャ原則

1. 単純性優先: 初期は単一VPS中心で運用し、障害点を明確化する。
2. 役割分離: `顧客接点(Web/LINE)`、`業務自動化(n8n)`、`AI処理(Dify)`、`データ処理(Python)` を責務で分離する。
3. API境界の明示: 外部SaaS連携は n8n を境界に集約し、WordPress/フロントから直接外部連携しない。
4. 将来拡張可能性: クライアント増加時にUI/API層を段階的に独立させられる構造にする。

## 3. 論理コンポーネント構成

```text
[Client Browser]
   |
   | HTTPS
   v
[WordPress (Site + Client Portal)]
   |  Webhook / REST
   v
[n8n Orchestrator] <--> [Python Worker Scripts]
   |        |
   |        +--> [Dify AI Workflow]
   |
   +--> [LINE Messaging API]
   +--> [Gmail / Google Workspace]
   +--> [Google Sheets]

[Static Dashboard Assets (this repo/public)]
  - 現状: 画面仕様・検証UI
  - 将来: WordPress配下または独立SPAとして本番統合
```

### 3.1 コンポーネント責務

| コンポーネント | 主責務 | 保持データ |
| --- | --- | --- |
| WordPress | サイト公開、問い合わせ受付、顧客ポータル導線 | 投稿/ページ、顧客向け表示設定 |
| n8n | ワークフロー実行、外部連携制御、再試行/分岐 | 実行履歴、資格情報参照 |
| Dify | 生成AI応答、プロンプト管理 | プロンプト設定、LLM呼び出し結果 |
| Python Scripts | 変換/集計/帳票生成などの補助処理 | 一時処理データ、生成ファイル |
| Google Sheets | 業務データ保管/共有 | 顧客データ、集計データ |
| Gmail/LINE | 顧客通知チャネル | メール・メッセージ配送状態 |
| Static Dashboard (`public/`) | 実行履歴/設定/サポートUIの仕様実装 | 現状は `localStorage` のみ |

## 4. データフロー

## 4.1 FR-01 LINE問い合わせ自動返信

1. 顧客がLINEで問い合わせ。
2. LINE Webhookをn8nが受信。
3. n8nが必要情報を正規化しDify APIへ送信。
4. Difyが応答文を生成しn8nへ返却。
5. n8nがLINE Reply APIで顧客へ返信。
6. 実行ステータスをn8n実行履歴に記録。

失敗時は `error/auth_error/integration_error` を実行ログへ残し、運用閾値は `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md` を適用する。

## 4.2 FR-02 月次レポート自動生成

1. スケジュール起動（毎月1日）でn8n開始。
2. n8nがGoogle Sheetsから対象データ取得。
3. 必要に応じPythonで整形・ファイル生成（Excel/PDF）。
4. n8nがGmailで配信。
5. 配信成否を実行履歴へ記録。

誤設定時の手順は `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md` を使用。

## 4.3 Webフォーム問い合わせ処理

1. 顧客がWordPressフォーム（Contact Form 7）を送信。
2. Webhookでn8nへ通知。
3. n8nでカテゴリ分類・通知送信（Gmail/LINE）。
4. 必要に応じDifyで一次応答文作成。

## 5. API境界（責務分離）

## 5.1 境界ルール

1. WordPress/フロントエンドは原則として外部SaaS APIを直接叩かない。
2. 外部連携の認証情報はn8n/Difyのサーバ側に閉じ込める。
3. フロントエンドが利用する運用APIは将来的に「BFF/API層」を経由する。

## 5.2 APIオーナーシップ

| API領域 | 提供者 | 利用者 | 備考 |
| --- | --- | --- | --- |
| Workflow Execution API | n8n | WordPress/BFF | 実行履歴取得、停止/再開、再実行 |
| AI Response API | Dify | n8n | 直接公開せず、n8n経由で利用 |
| Data Access API | Google Sheets API | n8n/Python | サービスアカウントまたはOAuth |
| Messaging API | LINE/Gmail API | n8n | 通知・返信送信 |
| Support Ticket API (将来) | WordPress or BFF | Dashboard UI | 現在の `public/` はローカル保存のみ |

## 5.3 現在のUI実装上の注意

`public/js/*.js` はUI検証目的で、以下を `localStorage` に保持している。

- ワークフロー状態: `unitecube_workflows_v1`
- 月次送信先: `unitecube_monthly_report_recipients_v1`
- LINE返信テンプレート: `unitecube_line_reply_template_v1`
- サポートチケット: `unitecube_tickets_v1`
- 採用メトリクス: `unitecube_adoption_metrics_v1`

本番ではこれらをサーバ側永続化（WordPress DBまたは専用API）へ置き換える。

## 6. デプロイメントモデル

## 6.1 現行（ローカル本番モデル）

- 配信方式: ローカルフォルダデプロイ
- 同期元: `public/` と `docs/*.html`
- 同期先: `/home/tartan/workspace/www/unitecube`
- スクリプト: `scripts/deploy-local.sh` -> `scripts/deploy-prod.sh`
- 公開先: `http://localhost:8080`
- TLS/DNS: 現フェーズでは未適用（公開昇格時に適用）

## 6.2 公開昇格時（ターゲット）

```text
Internet
  |
  v
[Nginx + TLS (443)]
  |-- /  -> WordPress or static assets
  |-- /webhook/* -> n8n endpoint (IP allowlist / signature validation)
  |-- /admin/* -> VPN or IP restricted

[Single VPS / Docker Compose]
  - n8n
  - Dify
  - Python worker container/job
  - Backup agent (rclone)
```

Nginxベース設定は `infra/nginx/unitecube-local.conf` を起点に公開向けへ拡張する。

## 7. セキュリティ設計

1. 管理UI（n8n/Dify/WordPress管理画面）はVPNまたはIP制限で保護。
2. APIキーは `.env` / Secret Store で管理し、リポジトリに保存しない。
3. Webhookは署名検証または共有シークレットで認証。
4. HTTPS強制、HSTS、有効なTLS証明書運用。
5. バックアップ（設定・データ）を日次取得し、復元手順を運用文書化。

## 8. 可観測性・運用

- 運用監視: FR-01/FR-02 閾値で一次監視（現行は既存計測の範囲で実施）
- ログ: n8n実行履歴を一次ソースにする
- テスト: UIロジックは `tests/core.test.js` を継続拡張
- スモーク: `scripts/smoke-test.sh` をデプロイ後に実行

## 9. スケール時の段階的移行

## Phase 1（現行）

- 単一VPS・単一n8n
- UIはWordPress + 静的アセット中心

## Phase 2（クライアント10社前後）

- Dashboardを軽量SPA化（Vue/Alpine）
- 認証付きBFF/API層を追加
- localStorage依存を除去

## Phase 3（高負荷化）

- n8n実行系の水平分離（queue mode等）
- ワークフロー実行DB/ログの分離
- 監視・アラートをマネージド基盤へ拡張

## 10. 非目標（初期段階でやらないこと）

- マイクロサービス分割
- 複数リージョン冗長化
- 全機能のリアルタイム双方向同期

初期は「運用できる最小構成」を優先し、障害復旧可能性と変更容易性を確保する。
