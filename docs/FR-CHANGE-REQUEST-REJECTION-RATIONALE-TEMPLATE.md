# FR Change-Request Rejection Rationale Template (v1)

- Decision Date (UTC): YYYY-MM-DD
- FR ID / Name: FR-XX - [Feature request title]
- Linked Issue: [UNI-###](/UNI/issues/UNI-###)
- Requestor / Sponsor: [Name / Role]
- Decision Owner: [Name / Role]
- Review Participants: [Product, Engineering, Support, Ops]
- Decision Type: Rejected / Returned for Rework
- Decision Status: Draft / Final

## 1. Purpose

Use this template when a feature-request change request is not approved for implementation.
Document the rejection rationale with explicit evidence, risk framing, and next-step expectations so decisions are auditable and repeatable.

## 2. Decision Summary

- **Decision:** Rejected / Returned for Rework
- **Primary rationale (1 sentence):** [Why this request is not approved now]
- **Effective date (UTC):** YYYY-MM-DD
- **Supersedes prior decision:** [Decision ID or N/A]
- **Appeal/Re-review window:** [Date or condition for re-review]

## 3. Rejection Reason Codes

Select at least one reason code and include evidence links.

| Code | Reason | Acceptance Standard for This Reason | Evidence Link(s) |
| --- | --- | --- | --- |
| RR-01 | Problem signal insufficient | Customer impact cannot be verified from traceable signal(s). | [Ticket/call/analysis link] |
| RR-02 | Scope too broad for single FR | Request combines multiple independent deliverables. | [Scope note or decomposition analysis] |
| RR-03 | Success metric undefined | No measurable KPI or target exists for validation. | [Metric worksheet link] |
| RR-04 | Risk exceeds current tolerance | Operational/compliance/security risk is above approved threshold. | [Risk register/runbook link] |
| RR-05 | Dependency not ready | Required technical/process dependency is missing or at risk. | [Dependency tracker link] |
| RR-06 | Cost-value imbalance | Delivery or support cost outweighs expected impact for current horizon. | [Estimate and impact model link] |
| RR-07 | Conflicts with roadmap commitment | Higher-priority committed work would be materially disrupted. | [Roadmap or capacity plan link] |
| RR-08 | Duplicate/overlapping request | Requested outcome is already covered by another approved or delivered item. | [Related issue/decision link] |

## 4. Evidence-Based Rationale

| Decision Dimension | Findings | Evidence |
| --- | --- | --- |
| User/Customer Impact | [What is known and unknown] | [Link] |
| Business Impact | [Revenue/cost/retention implication] | [Link] |
| Delivery Feasibility | [Complexity, dependencies, timeline constraints] | [Link] |
| Operational and Support Risk | [Failure modes, support burden, rollback posture] | [Link] |
| Compliance/Security/Data Considerations | [Policy or control constraints] | [Link] |

## 5. Alternatives Considered

| Option | Summary | Why Not Chosen |
| --- | --- | --- |
| A | Approve full request now | [Reason rejected] |
| B | Approve constrained/partial scope | [Reason rejected] |
| C | Defer with explicit entry criteria | [Reason rejected or selected if returned for rework] |

## 6. Re-Submission Conditions

Define concrete criteria required before re-review.

| Condition ID | Requirement to Re-Submit | Owner | Due (UTC) | Validation Method |
| --- | --- | --- | --- | --- |
| RS-01 | [Example: attach >=3 attributable customer signals] | [Role] | YYYY-MM-DD | [Link/check method] |
| RS-02 | [Example: provide KPI baseline + target] | [Role] | YYYY-MM-DD | [Metric evidence] |
| RS-03 | [Example: split into independent FRs with V1 boundaries] | [Role] | YYYY-MM-DD | [Scope review link] |

## 7. Communication Record

- Requestor notified on (UTC): YYYY-MM-DD
- Communication channel: Issue comment / stakeholder update / sync
- Message summary: [2-3 sentences, factual and decision-focused]
- Escalation path shared: [Yes/No]

## 8. Approvals and Sign-Off

| Role | Name | Decision | Timestamp (UTC) |
| --- | --- | --- | --- |
| Product Decision Owner |  | Rejected / Returned for Rework |  |
| Engineering Representative |  | Concur / Non-concur |  |
| Support/Ops Representative |  | Concur / Non-concur |  |

## 9. Copy/Paste Issue Comment

```md
### FR Change-Request Rejection Rationale
- Decision: Rejected | Returned for Rework
- FR ID: FR-XX
- Decision Owner: [Name/Role]
- Primary Rationale: [one sentence]
- Reason Code(s): [RR-0X, RR-0Y]
- Key Evidence: [link 1], [link 2]
- Re-Submission Conditions: [RS-01 summary], [RS-02 summary]
- Earliest Re-Review Date (UTC): YYYY-MM-DD
- Next Action: [owner + action + due date]
```

## 10. Worked Example (Reference)

- Decision Date (UTC): 2026-04-27
- FR ID / Name: FR-14 - Auto-approve low-value change requests
- Linked Issue: [UNI-170](/UNI/issues/UNI-170)
- Requestor / Sponsor: Operations Manager
- Decision Owner: Product Governance Lead
- Decision Type: Rejected

Example summary:
- Primary rationale: Current controls cannot verify low-risk classification accuracy at required confidence, creating elevated compliance and support risk.
- Reason code(s): RR-04, RR-05
- Re-submission conditions: complete risk-threshold test set, add audit-log dependency, and produce KPI baseline for false-approval rate.

_UniteCube - Feature Request Governance_
