# FR Decision Appeal Process Template (v1)

- Date: YYYY-MM-DD (UTC)
- FR ID / Name: FR-XX - [Feature request title]
- Source Decision Record: [link to prior FR decision]
- Linked Issue: [UNI-###](/UNI/issues/UNI-###)
- Appeal Requestor: [Name / Role]
- Decision Owner (Original): [Name / Role]
- Appeal Chair: [Name / Role]
- Participants: Product / Engineering / Support / Ops
- Appeal Status: Draft / Submitted / Under Review / Decided

## 1. Purpose

Use this template when a previously recorded FR decision is contested and a formal, time-bounded re-evaluation is required.
The objective is to keep appeals evidence-based, auditable, and operationally safe while avoiding repetitive, low-signal re-litigation.

## 2. When an Appeal Is Allowed

An appeal is valid only if at least one trigger condition is met:

1. New material evidence exists that was unavailable at the original decision time.
2. A factual or procedural error is identified in the decision record.
3. Business, risk, or dependency context changed enough to invalidate core assumptions.
4. Guardrail breach occurred after decision execution (for example, incident or KPI drift beyond threshold).

If none apply, close the appeal as `Not Admissible` and route requestor to standard re-submission path.

## 3. Appeal Intake Header

| Field | Value |
| --- | --- |
| Appeal Submitted At (UTC) | YYYY-MM-DD HH:MM |
| Requested Decision Change | Uphold to Modify / Uphold to Reopen / Uphold to Rollback / Reverse Rejection |
| Reason Code(s) | AP-01, AP-02, AP-03, AP-04 |
| Target Response SLA | 1 business day intake, 3 business days decision |
| Current Operational Posture | Proceed / Hold / Contain |

## 4. Appeal Reason Codes

| Code | Appeal Basis | Required Evidence |
| --- | --- | --- |
| AP-01 | New customer-impact evidence | Attributable support/customer signals with timestamp and source |
| AP-02 | Metric or analysis correction | Corrected query, instrumentation note, or validated recalculation |
| AP-03 | Process defect in original decision | Missing required step/participant from original template |
| AP-04 | Context changed after decision | Dependency, risk, compliance, or business-priority change evidence |

## 5. Evidence Comparison Table

Compare original evidence against appeal evidence; do not overwrite prior record.

| Dimension | Original Decision Evidence | Appeal Evidence | Net Impact Assessment |
| --- | --- | --- | --- |
| Customer/User Impact | [Link + summary] | [Link + summary] | Higher / Same / Lower |
| Business Impact | [Link + summary] | [Link + summary] | Higher / Same / Lower |
| Delivery Feasibility | [Link + summary] | [Link + summary] | Better / Same / Worse |
| Operational/Support Risk | [Link + summary] | [Link + summary] | Better / Same / Worse |
| Compliance/Security | [Link + summary] | [Link + summary] | Better / Same / Worse |

## 6. Appeal Review Workflow

1. Intake check (within 1 business day):
- Confirm admissibility trigger and minimum evidence completeness.

2. Independent evidence validation:
- Assign artifact owners to verify appeal evidence freshness and method consistency.

3. Cross-functional review:
- Appeal chair convenes Product + Engineering + Support (+ Ops when needed).
- Review is limited to admitted grounds and evidence deltas.

4. Decision and guardrail selection:
- Choose one final outcome from Section 7.
- Define owner, due date (UTC), and verification checkpoint (UTC).

5. Logging and communication:
- Update decision log entry and post issue comment with result and next action.

## 7. Allowed Appeal Outcomes

| Outcome | Meaning | Required Follow-Up |
| --- | --- | --- |
| Uphold Original Decision | No decision change justified | Close appeal with rationale and next re-review condition |
| Modify Decision | Decision remains active but scope/timeline/guardrails change | Update FR decision log + implementation/review checklist |
| Reopen Decision | Prior decision no longer reliable; full re-evaluation required | Create or move issue to active review workflow |
| Rollback/Contain | Post-decision risk requires immediate containment | Execute rollback runbook and incident comms |

## 8. SLA and Escalation Rules

| Stage | SLA | Escalate If Missed | Escalation Owner |
| --- | --- | --- | --- |
| Intake Admissibility | 1 business day | Appeal not triaged in time | Appeal Chair |
| Evidence Validation | 2 business days | Conflicts unresolved at deadline | Product Decision Owner |
| Final Appeal Decision | 3 business days from admissibility | No final outcome recorded | Product + Engineering Leadership |

Rule: if appeal severity is `critical`, set operational posture to `Hold` or `Contain` until decision is recorded.

## 9. Decision Record Block

```md
### FR Decision Appeal Record
- FR ID:
- Appeal ID/Issue:
- Appeal Submitted At (UTC):
- Appeal Basis Code(s):
- Original Decision:
- Appeal Outcome: Uphold Original Decision | Modify Decision | Reopen Decision | Rollback/Contain
- Rationale:
- Evidence Delta Summary:
- Operational Posture: Proceed | Hold | Contain
- Owner:
- Due (UTC):
- Verification Checkpoint (UTC):
- Follow-up Issue Link(s):
- Next Action:
```

## 10. Copy/Paste Issue Comment

```md
### FR Decision Appeal Update
- FR ID: FR-XX
- Appeal Basis: AP-0X, AP-0Y
- Appeal Admissibility: Accepted | Not Admissible
- Outcome: Uphold Original Decision | Modify Decision | Reopen Decision | Rollback/Contain
- Key Evidence Delta: [1 sentence]
- Rationale: [1-2 sentences]
- Operational Posture: Proceed | Hold | Contain
- Next Action: [owner + action + due date UTC]
```

## 11. Worked Example (Reference)

- Date: 2026-04-27
- FR ID / Name: FR-02 - Monthly Report Recipient Management
- Source Decision Record: [UNI-174](/UNI/issues/UNI-174)
- Linked Issue: [UNI-186](/UNI/issues/UNI-186)
- Appeal Basis Code(s): AP-01, AP-02
- Appeal Outcome: Modify Decision

Example summary:
- New evidence showed a measurable support ticket spike and corrected segment-level metric drift not present in the original decision packet.
- Decision modified to require tighter alert thresholds, a 7-day monitoring checkpoint, and explicit support triage guardrails before closure.

_UniteCube - FR Governance_
