# FR Evidence Freshness Policy (v1)

- Date: 2026-04-27 (UTC)
- Issue: [UNI-176](/UNI/issues/UNI-176)
- Scope: Recency and validity rules for FR evidence used in triage, implementation, review, and closure decisions
- Owners: Product (policy owner), Engineering (signal integrity), Support (customer-impact evidence)
- Related docs:
  - `docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md`
  - `docs/FR-RELEASE-READINESS-SIGNOFF-CHECKLIST.md`
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`
  - `docs/FR-POST-LAUNCH-VALIDATION-SAMPLE-SIZE-GUIDELINE.md`
  - `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`

## 1. Purpose

Define a single freshness standard so FR decisions are made from current evidence, not stale snapshots.
If evidence is older than the allowed window, gate decisions must be held until refreshed or approved through an exception path.

## 2. Evidence Timestamp Requirements

Every evidence artifact must include all of the following UTC fields:

- `observed_at_utc`: when the measured event/state occurred
- `collected_at_utc`: when data was extracted or captured
- `attached_at_utc`: when evidence was linked in the issue/doc
- `evidence_window_start_utc` and `evidence_window_end_utc` for aggregate metrics

If any required timestamp is missing, treat the artifact as stale-unverified and do not use it for gate approval.

## 3. Freshness Classes

| Freshness Class | Maximum Evidence Age | Typical FR Evidence |
| --- | --- | --- |
| F0 - Live Critical | <= 4 hours | Sev-1/Sev-2 incident state, rollback trigger validation, launch watch-window alerts |
| F1 - Operational Current | <= 24 hours | Error-rate trends, queue/backlog state, support triage snapshots |
| F2 - Delivery Current | <= 7 days | Acceptance evidence index, dependency/risk updates, implementation verification |
| F3 - Context Baseline | <= 30 days | Historical baseline comparisons and prior-period reference metrics |

Evidence age is calculated as: `decision_time_utc - observed_at_utc`.

## 4. Stage Gate Freshness Rules (Required)

All rows below are mandatory minimums for gate decisions.

| FR Stage | Required Freshness Class | Maximum Age at Decision Time | Gate Rule |
| --- | --- | --- | --- |
| Triage | F2 for customer/problem evidence, F3 for baseline context | 7 days (signals), 30 days (baseline) | Do not approve intake if customer-impact evidence exceeds F2. |
| Implementation | F1 for operational checks, F2 for test/acceptance evidence | 24 hours (ops), 7 days (test) | Do not request review with F1/F2 violations. |
| Review/Release Decision | F0 for critical safety signals, F1 for release health, F2 for acceptance pack | 4 hours (safety), 24 hours (health), 7 days (acceptance) | Do not issue `Go` or `Conditional Go` unless all three classes pass. |
| Closure/Post-Launch | F1 for stability/support burden, F2 for outcome metrics | 24 hours (stability/support), 7 days (outcome) | Do not close FR with stale stability or support evidence. |

## 5. Decision Validity Window

A gate decision expires if its supporting evidence crosses freshness limits before execution.

- `Go/Conditional Go` decisions expire after 24 hours unless reconfirmed with fresh F0/F1 data.
- `Close` decisions expire after 7 days unless closure evidence is revalidated.
- Expired decisions require a new issue comment block with refreshed evidence links.

## 6. Stale Evidence Handling

When any required artifact is stale:

1. Post `FR Evidence Freshness Alert` in the issue thread immediately.
2. Mark gate outcome as `Hold` until evidence is refreshed.
3. Assign one owner per stale artifact with due date/time in UTC.
4. Escalate if not refreshed within:
- 4 hours for F0 violations,
- 1 business day for F1 violations,
- 2 business days for F2/F3 violations.

Only use `blocked` status when no productive work can continue without the missing refresh.
Otherwise keep the issue `in_progress` with a hold decision.

## 7. Exception Path

Use exception only when refresh is impossible inside the decision window (for example, low-frequency batch process or external dependency outage).

Exception requirements:

1. Product + Engineering + Support explicit signoff in the issue thread.
2. Reason refresh is impossible now and expected recovery time.
3. Risk statement and mitigation plan.
4. Temporary expiry timestamp (UTC) after which decision auto-reverts to `Hold`.

Exception duration cap: 72 hours.
No silent rollover is allowed; a new exception comment is required after expiry.

## 8. Required Comment Blocks

### 8.1 FR Evidence Freshness Check

```md
### FR Evidence Freshness Check
- FR ID:
- Issue:
- Stage: triage | implementation | review | closure
- Decision Time (UTC):
- Required Classes: F0 | F1 | F2 | F3 (as applicable)
- Evidence Pack:
  - [artifact] observed_at_utc=... age=... class=... status=Fresh|Stale
- Freshness Result: Pass | Hold
- Exception Needed: Yes | No
- Next Action (owner + UTC date):
```

### 8.2 FR Evidence Freshness Alert

```md
### FR Evidence Freshness Alert
- FR ID:
- Issue:
- Stale Artifact(s):
- Required Class / Max Age:
- Observed Age at Check Time:
- Decision Impact: Hold
- Refresh Owner(s):
- Due (UTC):
- Escalation Trigger:
- Next Action:
```

## 9. Compliance Checklist

Before any FR gate decision, confirm all checks:

1. All required evidence links include UTC timestamps.
2. Evidence age is within stage-specific limits.
3. No expired decision is being reused without reconfirmation.
4. Any exception has explicit tri-role signoff and unexpired timestamp.
5. Decision comment includes the freshness check block.

## 10. Operating Notes

- Freshness is independent from evidence quality; both must pass.
- If dashboards lag, use raw logs/export with explicit timestamp and source.
- Reassess this policy monthly alongside FR retrospective outputs.

_UniteCube - FR Delivery Governance_
