# FR Reviewer Handoff Note Template (v1)

- Date: YYYY-MM-DD (UTC)
- Version: 1.0
- Issue: UNI-### (review issue) / UNI-### (implementation issue)
- Owners: Engineering (handoff owner), Product + Support (review participants)
- Related docs:
  - `docs/FR-IMPLEMENTATION-HANDOFF-BRIEF-TEMPLATE.md`
  - `docs/FR-REVIEW-COMMENT-QUALITY-CHECKLIST.md`
  - `docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md`
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`

## Purpose

Use this note to hand off an FR implementation package to reviewers with enough context to make a fast, evidence-based decision.
The handoff is complete only when scope, evidence, risk posture, and explicit reviewer actions are all present.

## When to Use

1. Implementation is ready for formal review.
2. Acceptance criteria test evidence is attached.
3. Rollback and monitoring references are current.
4. Reviewer owners and due times are known.

## Handoff Header

| Field | Value |
| --- | --- |
| FR ID / Name | FR-XX - [Feature request title] |
| Handoff Date (UTC) | YYYY-MM-DD HH:MM |
| Handoff Owner | [Name / Role] |
| Review Window (UTC) | [Start] to [End] |
| Linked Implementation Issue | [UNI-###](/UNI/issues/UNI-###) |
| Linked Review Issue (if separate) | [UNI-###](/UNI/issues/UNI-###) |
| Requested Review Decision | Approve \| Request Changes \| Hold |

## 1. Scope Under Review

### In Scope for This Review
- [Delivered change 1]
- [Delivered change 2]

### Explicitly Out of Scope
- [Deferred item or follow-up issue]
- [Known non-goal]

## 2. Acceptance Criteria Coverage

| Criterion ID | Requirement Summary | Evidence Link | Result (Pass/Fail) | Notes |
| --- | --- | --- | --- | --- |
| AC-1 | [Expected behavior] | [Link] | Pass | [Short note] |
| AC-2 | [Edge case / validation] | [Link] | Pass | [Short note] |

Gate rule: every in-scope acceptance criterion must have a linked evidence artifact.

## 3. Change Summary and Operational Impact

| Area | What Changed | User/Operator Impact | Risk Level |
| --- | --- | --- | --- |
| UI/API/Data/Runbook | [Summary] | [Impact] | Low/Medium/High |
| Monitoring/Alerts | [Summary] | [Impact] | Low/Medium/High |

## 4. Evidence Package Checklist

| Required Artifact | Link | Owner | Timestamp (UTC) |
| --- | --- | --- | --- |
| Test evidence index | [Link] | Engineering | YYYY-MM-DD HH:MM |
| Smoke/regression result | [Link] | Engineering/Support | YYYY-MM-DD HH:MM |
| Monitoring threshold mapping | [Link] | Engineering/Support | YYYY-MM-DD HH:MM |
| Rollback validation note | [Link] | Engineering | YYYY-MM-DD HH:MM |
| Support readiness note | [Link] | Support | YYYY-MM-DD HH:MM |

If any required artifact is missing, do not request approval; request changes internally first.

## 5. Risk and Rollback Status

| Check | Status (Pass/Fail) | Detail |
| --- | --- | --- |
| Known high/critical defects resolved or accepted | [Pass/Fail] | [Link or summary] |
| Rollback trigger thresholds confirmed | [Pass/Fail] | [Link to threshold policy] |
| Rollback path tested on current release artifact | [Pass/Fail] | [Evidence link] |
| Open risks have owner + due date | [Pass/Fail] | [Risk IDs] |

## 6. Reviewer Action Requests

| Reviewer Role | Requested Check | Decision Needed | Due (UTC) |
| --- | --- | --- | --- |
| Product | Scope and value alignment | Approve / Request Changes / Hold | YYYY-MM-DD HH:MM |
| Support | Triage/runbook readiness | Approve / Request Changes / Hold | YYYY-MM-DD HH:MM |
| Engineering Reviewer | Technical correctness and safety | Approve / Request Changes / Hold | YYYY-MM-DD HH:MM |

## 7. Decision Logging Block

```md
### FR Reviewer Handoff Decision
- FR ID:
- Review Date (UTC):
- Decision: Approve | Request Changes | Hold
- Severity (if changes requested): critical | high | medium | low
- Scope Reference:
- Evidence:
- Impact:
- Required Action:
- Owner:
- Due (UTC):
```

## 8. Copy/Paste Issue Comment

```md
FR reviewer handoff for [FR-XX] is ready as of [YYYY-MM-DD HH:MM UTC]. Scope under review: [summary]. Required evidence package is attached (tests, monitoring, rollback, support readiness). Requested reviewers: Product [name], Support [name], Engineering [name]. Review decision due by [YYYY-MM-DD HH:MM UTC]. Next action: [owner + action].
```

## 9. Worked Example (Completed Handoff Note)

Use this as a reference for what "ready for reviewer pickup" looks like.

```md
### FR Reviewer Handoff
- FR ID / Name: FR-02 - Monthly Report Recipient Management
- Handoff Date (UTC): 2026-04-27 09:30
- Handoff Owner: Sato (Engineering)
- Review Window (UTC): 2026-04-27 09:30 to 2026-04-28 09:30
- Linked Implementation Issue: UNI-134
- Requested Review Decision: Approve

In scope:
- Recipient add/remove flow validation and persistence
- Recipient cap enforcement and duplicate prevention

Out of scope:
- Scheduled delivery-time customization (tracked in UNI-171)

Acceptance criteria summary:
- AC-1 recipient CRUD behavior: Pass (evidence: docs/FR-02_implementation_smoke-test-results_2026-04-27_engineering_v1.md)
- AC-2 duplicate/cap validation: Pass (evidence: docs/FR-02_implementation_validation-evidence_2026-04-27_engineering_v1.md)

Evidence package:
- Test evidence index: attached
- Smoke/regression results: attached
- Monitoring threshold mapping: docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md
- Rollback validation: docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md
- Support readiness note: docs/FR-01-FR-02-ROLLOUT-NOTE-AND-SUPPORT-PLAYBOOK.md

Risk/rollback status:
- Open high/critical defects: none
- Rollback trigger thresholds: confirmed
- Rollback path test: pass (2026-04-27 08:55 UTC)

Reviewer requests:
- Product (Tanaka): confirm scope/value alignment by 2026-04-28 09:30 UTC
- Support (Kobayashi): confirm triage wording/runbook fit by 2026-04-28 09:30 UTC
- Engineering reviewer (Nakamura): confirm technical safety by 2026-04-28 09:30 UTC
```

_UniteCube - FR Review Operations_
