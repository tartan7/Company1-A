# FR-01 / FR-02 Rollout Note and Support Playbook

- Date: 2026-04-26 (UTC)
- Issue: UNI-138
- Audience: Client admins, support desk, on-call engineering
- Related operational thresholds: `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`
- Related implementation issues: [UNI-133](/UNI/issues/UNI-133), [UNI-134](/UNI/issues/UNI-134), [UNI-135](/UNI/issues/UNI-135), [UNI-136](/UNI/issues/UNI-136), [UNI-137](/UNI/issues/UNI-137), [UNI-20](/UNI/issues/UNI-20)

## What changed

This release adds two admin-facing improvements in `ワークフロー設定` (`/workflows.html`):

1. FR-02: Configurable monthly report recipients
- Admins can add/remove monthly report destination emails.
- Validation now prevents invalid format, duplicate addresses, and over-cap registration.
- Recipient cap is set to 5 addresses in V1.

2. FR-01: Editable LINE auto-reply wording
- Admins can edit one active LINE auto-reply template.
- Supported placeholders are limited to `{{customer_name}}`, `{{reservation_date}}`, and `{{inquiry_summary}}`.
- Template validation enforces non-empty input and a 500-character maximum.

Rollout intent:
- Reduce routine support tickets for simple wording changes and report routing updates.
- Keep operational risk low with strict input validation and clear error messages.

## How to use

### FR-02: Add/remove monthly report recipients

1. Open `ワークフロー設定` and locate `月次レポート作成・送信`.
2. In `送信先メールアドレス`, enter one email address and click `追加`.
3. Confirm the address appears in the list and the count updates (`n / 5 件`).
4. To remove, click the delete icon next to the target address.
5. Verify next monthly report cycle includes the updated recipient list.

Admin guardrails:
- Email is normalized to lowercase before save.
- Duplicate addresses are rejected.
- Max list size is 5.

### FR-01: Edit LINE auto-reply wording

1. Open `ワークフロー設定` and locate `LINE 問い合わせ自動返信`.
2. Click `文言を編集`.
3. Update the template text (max 500 chars).
4. Keep placeholders to supported values only.
5. Check preview output, then click `保存`.
6. Confirm toast: `LINE自動返信文を更新しました`.

Admin guardrails:
- Empty templates cannot be saved.
- Unknown placeholders are blocked at validation time.
- New wording applies to replies generated after save.

## Troubleshooting

### Symptom-based checks

| Symptom | Likely cause | Immediate action | Escalation trigger |
| --- | --- | --- | --- |
| `メールアドレスの形式が正しくありません。` | Typo or unsupported email format | Correct and re-submit | If valid corporate emails repeatedly fail across browsers |
| `このメールアドレスはすでに登録されています。` | Duplicate entry (case-insensitive) | Keep single canonical address | If duplicate check blocks distinct addresses |
| `送信先は最大5件まで登録できます。` | V1 cap reached | Remove unused address, then add required one | If business requires >5 recipients urgently |
| `未対応のプレースホルダーがあります` | Placeholder outside allowed set | Replace with supported placeholders | If required business variable is missing from allowed set |
| Save appears successful but expected behavior not observed | Wrong workflow edited, stale browser tab, or local browser state mismatch | Hard refresh and re-check current value in editor | If mismatch reproduces on clean browser/profile |
| Monthly report routing fails after recipient change | Downstream integration or transport issue | Confirm recipient list UI state, then run standard report send check | If send failures persist for 2+ runs or error class indicates integration/auth failure |
| LINE reply update does not appear in outbound flow | Template was not saved successfully or downstream execution issue | Re-open editor and verify current saved template/preview | If outbound replies keep old text after verified save |

### Escalation path (template updates or recipient routing failure)

1. L1 Support triage (target: within 30 minutes)
- Capture tenant/account name, timestamp (UTC), workflow affected, and screenshot of error/toast.
- Confirm whether issue is UI validation-only or execution/routing failure.

2. L2 Product/Ops check (target: within 2 hours)
- For FR-01: verify current saved template and placeholder usage.
- For FR-02: verify recipient list state and cap/duplicate edge cases.

3. L3 Engineering escalation (immediate for Sev-1, same business day for Sev-2)
- Route to engineering with references to [UNI-134](/UNI/issues/UNI-134), [UNI-135](/UNI/issues/UNI-135), and [UNI-20](/UNI/issues/UNI-20).
- Include reproduction steps, expected vs actual behavior, browser/version, and any integration error payload.

Severity guide:
- Sev-1: outbound messaging/report delivery blocked for production use.
- Sev-2: feature partially degraded with workaround.
- Sev-3: validation/UI confusion without delivery impact.

## Support FAQ (admin setup mistakes)

1. Q: Why can’t I add `Sales Team <sales@example.com>` as a recipient?
A: V1 accepts raw email addresses only. Enter `sales@example.com` without display-name formatting.

2. Q: Why is `OPS@company.jp` rejected as duplicate when `ops@company.jp` already exists?
A: Duplicate detection is case-insensitive and normalized to lowercase.

3. Q: Why can’t I register a sixth monthly report recipient?
A: FR-02 V1 has a hard cap of 5 recipients. Remove one address or escalate for cap change.

4. Q: Why does `{{shop_name}}` fail in LINE template editing?
A: Only `{{customer_name}}`, `{{reservation_date}}`, and `{{inquiry_summary}}` are supported in V1.

5. Q: Why can’t I save a long LINE template?
A: The template is limited to 500 characters to reduce overflow and downstream formatting risk.

6. Q: I saved new LINE wording, but an older message was still sent. Is save broken?
A: Saved text applies to new outbound replies after save; already queued/sent replies are unaffected.

7. Q: We still see spreadsheet linkage/routing errors after updating recipients. What should we do?
A: Treat as integration incident (not admin input error). Escalate with logs/screenshots and link to [UNI-20](/UNI/issues/UNI-20) context.

## Operational notes for support leads

- Re-check this playbook after smoke-test completion in [UNI-136](/UNI/issues/UNI-136).
- Update FAQ ordering using observed ticket frequency from adoption metrics in [UNI-137](/UNI/issues/UNI-137).
- If FR-01 release remains under review, share FR-02 steps first and hold FR-01 admin comms until release approval.
