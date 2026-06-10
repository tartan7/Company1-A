# FR-01 / FR-02 Rollback Runbook (Admin Template and Recipient Misconfiguration)

- Date: 2026-04-26 (UTC)
- Issue: UNI-140
- Audience: L1 Support, L2 Product/Ops, L3 Engineering On-call
- Related docs: `docs/FR-01-FR-02-ROLLOUT-NOTE-AND-SUPPORT-PLAYBOOK.md`, `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`, `docs/SMOKE-TEST-PLAN-FR-01-FR-02.md`, `docs/FR-ROLLBACK-DECISION-THRESHOLDS.md`
- Related implementation issues: [UNI-134](/UNI/issues/UNI-134), [UNI-135](/UNI/issues/UNI-135), [UNI-136](/UNI/issues/UNI-136), [UNI-138](/UNI/issues/UNI-138)

## Purpose

Provide a fast, auditable rollback procedure when either of these production mistakes occurs:

1. FR-01: LINE auto-reply template content was saved incorrectly.
2. FR-02: Monthly report recipients were changed incorrectly.

This runbook is for operator misconfiguration and bad admin edits. If there is a platform outage, API failure, or integration transport failure, follow incident escalation and treat this runbook as containment only.

## Severity and Response Windows

| Severity | Trigger | First response | Target rollback completion |
| --- | --- | --- | --- |
| Sev-1 | Customer-facing outbound messaging/report delivery is incorrect or blocked with business impact now | 15 minutes | 60 minutes |
| Sev-2 | Wrong content/routing with available workaround and limited blast radius | 30 minutes | 4 business hours |
| Sev-3 | Low-impact configuration mistake discovered before send window | 1 business hour | Same business day |

## Ownership Matrix

| Phase | Owner | Backup | Responsibility |
| --- | --- | --- | --- |
| Detection and triage | L1 Support | Product/Ops | Confirm symptom, capture evidence, classify severity |
| Rollback execution | Product/Ops | Engineering on-call | Apply rollback steps in admin UI and document exact change |
| Technical validation | Engineering on-call | Product/Ops | Verify persistence and behavior after rollback |
| Stakeholder communication | Product/Ops lead | Support lead | Send status updates using templates below |

## Pre-checks (Do Before Any Rollback)

1. Record incident timestamp in UTC, tenant/account, reporter, and affected workflow (FR-01 or FR-02).
2. Capture current state screenshot from `ワークフロー設定` before making changes.
3. Confirm expected safe state (last known good text or approved recipient list) from release notes, prior ticket, or approved admin record.
4. Confirm whether impact is active now or limited to future sends.
5. Open an issue comment/log entry with: scope, owner, severity, planned rollback ETA.

Do not execute rollback without identifying the target safe state.

## Recovery Sequence A: FR-01 Template Text Regression

Use when LINE auto-reply content is wrong, placeholder usage is invalid, or tone/content violates approved copy.

1. Open `ワークフロー設定` -> `LINE 問い合わせ自動返信`.
2. Click `文言を編集` and capture current bad state text for audit trail.
3. Replace with last known good template text.
4. Validate placeholders are only:
- `{{customer_name}}`
- `{{reservation_date}}`
- `{{inquiry_summary}}`
5. Confirm template length <= 500 characters.
6. Use preview to verify output structure is correct.
7. Click `保存` and confirm success toast appears.
8. Hard refresh and reopen editor to confirm persisted value matches expected safe state.
9. Execute one controlled verification message path (staging/canary tenant if available, otherwise low-risk production test).
10. Log completion timestamp and attach before/after evidence in issue comment.

Escalate to engineering immediately if save succeeds but persisted value reverts, or if valid placeholders are rejected unexpectedly.

## Recovery Sequence B: FR-02 Recipient Routing Misconfiguration

Use when monthly report recipient list is wrong (missing, extra, wrong address, or duplicate/cap side effects).

1. Open `ワークフロー設定` -> `月次レポート作成・送信`.
2. Capture current recipient list (screenshot + text list) before edits.
3. Compare against approved recipient source of truth (customer-approved list, rollout record, or latest signed support request).
4. Remove incorrect recipients first.
5. Add missing approved recipients one by one.
6. Validate each address format and dedupe behavior; normalize to lowercase canonical form.
7. Confirm total recipients remain within current cap (5 in V1).
8. Refresh page and verify list persistence and ordering.
9. Run/report-send verification check (or dry-run equivalent) and confirm routing to corrected list.
10. Log final recipient list and evidence in issue comment.

Escalate to engineering immediately if UI state is correct but delivery still routes to old/wrong recipients.

## Post-check Validation Checklist (Required)

Complete all checks after either rollback path:

- Configuration page shows corrected state after refresh/re-login.
- No validation error remains for the corrected inputs.
- Controlled verification confirms expected behavior (reply text or recipient routing).
- Impact window is documented: what may have been sent before rollback and what is corrected after rollback.
- Incident comment includes owner, timestamps, evidence links, and current status.

If any check fails, set incident status to escalated and route to L3 Engineering.

## Communication Templates

### Internal incident update (Support -> Product/Ops + Engineering)

Subject: `[FR-01/FR-02 Rollback] <tenant> <severity> <status>`

```
Incident ID: <issue/ticket id>
Detected at (UTC): <time>
Workflow: <FR-01 template / FR-02 recipients>
Severity: <Sev-1/Sev-2/Sev-3>
Observed impact: <what is wrong>
Planned rollback target state: <last known good>
Owner: <name>
ETA to rollback completion: <time>
Escalation needed: <yes/no + why>
```

### External customer update (Product/Ops -> Customer admin)

Subject: `Configuration correction in progress for <workflow>`

```
We identified an incorrect configuration in <workflow> at <time UTC> and started correction.

What happened:
- <short factual description>

What we are doing now:
- Reverting to the last approved configuration.
- Validating behavior after rollback.

Expected completion:
- <time UTC>

We will send a follow-up confirmation with completion details and any impact summary.
```

### Rollback complete confirmation

Subject: `[Resolved] <workflow> configuration corrected`

```
Rollback completed at <time UTC>.

Final state:
- <template version summary OR final recipient list summary>

Validation:
- <what was tested>
- <result>

Residual risk / follow-up:
- <none or clear action item>
```

## Escalation Triggers

Escalate to L3 Engineering on-call immediately when any of the following occurs:

- Corrected config does not persist after save/refresh.
- UI reflects corrected state but outbound behavior still uses stale configuration.
- Multiple tenants are affected or blast radius is unclear.
- Misconfiguration cannot be corrected within target response window for severity.

## Audit Trail Requirements

Every rollback event must retain:

1. Before/after configuration evidence (screenshot/text).
2. UTC timestamps for detection, rollback start, rollback complete.
3. Owner and reviewer names.
4. Validation result and scope of potential pre-rollback impact.
5. Link to issue/ticket thread containing communications.

## Next Hardening Actions (Non-blocking)

1. Add explicit "restore last known good" UX affordance for FR-01/FR-02.
2. Add change history with actor/timestamp for admin config edits.
3. Add alerting for high-risk recipient list changes (for example, all recipients removed).
