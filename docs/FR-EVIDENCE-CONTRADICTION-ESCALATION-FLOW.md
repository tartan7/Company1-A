# FR Evidence Contradiction Escalation Flow (v1)

- Date: 2026-04-27 (UTC)
- Issue: UNI-182
- Scope: Escalation path when FR evidence contains unresolved contradictions that can affect gate or release decisions
- Owners: Product (decision authority), Engineering (technical signal owner), Support (customer-impact signal owner)
- Related docs:
  - `docs/FR-EVIDENCE-CONFLICT-RESOLUTION-CHECKLIST.md`
  - `docs/FR-EVIDENCE-FRESHNESS-POLICY.md`
  - `docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md`
  - `docs/FR-RELEASE-READINESS-SIGNOFF-CHECKLIST.md`
  - `docs/FR-ROLLBACK-DECISION-THRESHOLDS.md`

## Purpose

Define who must be engaged, in what order, and within what deadline when FR evidence is contradictory and cannot be resolved through normal checklist execution.

This flow is mandatory before `Go`, `Conditional Go`, or `Close` decisions when contradiction severity is `high` or `critical`.

## Escalation Entry Conditions

Start this flow when any condition below is true:

1. Contradiction remains unresolved after the conflict resolution checklist step sequence.
2. Contradiction blocks release safety, rollback readiness, or customer-impact interpretation.
3. Contradiction age exceeds due time set in issue thread.
4. Contradiction confidence band is `Low`.
5. Contradiction recurs two or more times for the same FR within 7 days.

## Escalation Levels and Time Limits

Time starts at `contradiction_detected_at_utc`.

| Level | Trigger | Required Participants | Response SLA | Decision Authority |
| --- | --- | --- | --- | --- |
| L1 - Owner Reconciliation | New contradiction logged | Artifact owner(s) + current FR assignee | 2 hours (`critical`), 4 hours (`high`), 1 business day (`medium`) | FR assignee may continue checklist only if contradiction resolves |
| L2 - Cross-Functional Escalation | L1 missed SLA or unresolved high-impact conflict | Product owner + Engineering lead + Support lead | 1 hour from L2 trigger | Product owner decides `Hold`, `Proceed with Guardrails`, or `Rollback/Contain` |
| L3 - Leadership Escalation | L2 unresolved, decision deadlock, or user-harm risk | Product owner + Engineering manager + on-call owner (+ executive sponsor for launch-critical decisions) | 30 minutes (`critical`) or 2 hours (`high`) | Product + Engineering leadership final call |

Default rule: escalate upward immediately when a lower-level SLA is missed.

## Decision Guardrails by Severity

| Severity | Allowed Actions | Disallowed Actions |
| --- | --- | --- |
| `critical` | `Hold`, `Rollback/Contain` | `Go`, `Conditional Go`, `Close` |
| `high` | `Hold`, `Proceed with Guardrails`, `Rollback/Contain` | `Close` while contradiction unresolved |
| `medium` | `Proceed with Guardrails`, `Hold` | `Close` without dated follow-up checkpoint |
| `low` | `Proceed` with rationale | Silent approval without contradiction note |

## Escalation Procedure

1. Log contradiction and severity.
- Post `FR Contradiction Escalation Record` in the issue thread with UTC timestamps and artifact links.

2. Start L1 reconciliation.
- Assign one owner per conflicting artifact.
- Require method-level re-check (same metric definition, same population window).

3. Promote to L2 if unresolved at SLA boundary.
- Tag triad (`Product`, `Engineering`, `Support`) in-thread.
- Freeze gate decision as `Hold` until L2 decision is posted.

4. Promote to L3 if L2 misses SLA or deadlocks.
- Include explicit risk statement (customer harm, release risk, or data integrity risk).
- If launch window is active, include rollback/contain recommendation.

5. Record final decision and checkpoint.
- Post outcome, owner, due time (UTC), and verification checkpoint (UTC).
- Link follow-up issues for instrumentation fixes, data backfill, or remediation.

6. Exit escalation only after verification.
- Confirm contradiction is either resolved or explicitly accepted under dated guardrails.
- Update issue state accordingly (`in_progress`, `blocked`, or `done`).

## Required Comment Blocks

### 1) FR Contradiction Escalation Record

```md
### FR Contradiction Escalation Record
- FR ID:
- Issue:
- Detected At (UTC):
- Gate Stage: triage | implementation | review | closure
- Severity: critical | high | medium | low
- Contradiction Summary:
- Conflicting Artifacts:
  - Artifact A (owner, observed_at_utc, link):
  - Artifact B (owner, observed_at_utc, link):
- L1 Triggered At (UTC):
- L1 SLA Deadline (UTC):
- Current Escalation Level: L1 | L2 | L3
- Decision State: Investigating | Hold | Proceed with Guardrails | Rollback/Contain
- Owner:
- Next Action:
```

### 2) FR Escalation Handoff (L1 -> L2 or L2 -> L3)

```md
### FR Escalation Handoff
- FR ID:
- Issue:
- From Level: L1 | L2
- To Level: L2 | L3
- Handoff Time (UTC):
- Why Escalating:
- Actions Attempted:
- Open Risks:
- Requested Decision Window:
- Required Participants:
- Next Action Owner:
```

### 3) FR Escalation Decision Record

```md
### FR Escalation Decision Record
- FR ID:
- Issue:
- Escalation Level at Decision: L2 | L3
- Decision Time (UTC):
- Decision: Hold | Proceed with Guardrails | Rollback/Contain
- Rationale:
- Guardrails / Mitigations:
- Owner:
- Verification Checkpoint (UTC):
- Follow-up Issue Link(s):
- Gate Impact:
- Next Action:
```

## Routing and Status Rules

1. Keep issue `in_progress` when execution can continue under `Hold` with actionable mitigation work.
2. Move issue to `blocked` only when no productive work remains without external decision/data.
3. `blocked` comment must include unblock owner and exact unblock action.
4. Contradictions tied to user-harm indicators must route to `Rollback/Contain` path immediately.
5. Do not move to `done` while contradiction is unresolved at `high` or `critical`.

## Unblock Owner Matrix

| Contradiction Type | Primary Unblock Owner | Required Action |
| --- | --- | --- |
| Test pass vs production failure | Engineering lead / on-call | Reproduce in production-like load and patch or contain |
| Metrics trend mismatch | Data/Engineering owner | Validate instrumentation and backfill corrected slice |
| Support impact contradicts product KPI | Support lead + Product owner | Reconcile customer-impact sample and decision threshold |
| Freshness mismatch across artifacts | Artifact owner(s) | Refresh evidence to required class and republish links |

## Completion Criteria

Escalation flow is complete only when all items pass:

1. Escalation record, handoff (if any), and decision record are present in-thread.
2. Final action has owner + due time + verification checkpoint in UTC.
3. Contradiction is resolved or explicitly accepted with guardrails and expiry timestamp.
4. Required follow-up issues are linked and assigned.
5. Gate outcome reflects the escalation decision.

## Worked Example (Compact)

```md
### FR Escalation Decision Record
- FR ID: FR-02
- Issue: UNI-182
- Escalation Level at Decision: L2
- Decision Time (UTC): 2026-04-27 15:20
- Decision: Hold
- Rationale: Acceptance pass conflicted with production timeout surge; reproduction confirmed incident risk.
- Guardrails / Mitigations: Freeze release, apply timeout retry patch, monitor 95p latency and incident queue.
- Owner: Engineering On-Call
- Verification Checkpoint (UTC): 2026-04-27 17:00
- Follow-up Issue Link(s): <UNI-XXX>
- Gate Impact: Review gate remains on hold.
- Next Action: Patch + rerun evidence pack, then reconvene triad.
```

_UniteCube - FR Delivery Governance_
