# FR Launch Freeze Exception Request Template (v1)

- Date: YYYY-MM-DD (UTC)
- Issue: [UNI-XXX](/UNI/issues/UNI-XXX)
- Scope: Exception request for launch freeze period changes related to FR-XX
- Owner: Product (request owner), Engineering (risk validator), Support (impact validator)
- Related docs:
  - `docs/FR-RELEASE-READINESS-SIGNOFF-CHECKLIST.md`
  - `docs/FR-ROLLBACK-DECISION-THRESHOLDS.md`
  - `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`
  - `docs/FR-INCIDENT-COMMUNICATION-TEMPLATE-PACK.md`
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`

## 1. Purpose

Use this template when requesting permission to release, modify, or hotfix an FR during an active launch freeze.
The objective is controlled exception handling with explicit risk acceptance, rollback posture, and accountable approvals.

## 2. Use Criteria

Use this request only when at least one condition is true:

1. A Sev-1 or Sev-2 incident requires a production change during freeze.
2. A compliance, contractual, or legal obligation has a hard deadline inside freeze.
3. A blocked customer-critical workflow cannot be safely contained without a release.
4. A safety or data-integrity defect has no acceptable workaround.

Do not use this request for scope expansion, non-critical UX polish, or backlog acceleration.

## 3. Freeze Context

- Freeze Window (UTC): `YYYY-MM-DD HH:MM` to `YYYY-MM-DD HH:MM`
- Freeze Owner: `[Name / Role]`
- Exception Request Timestamp (UTC): `YYYY-MM-DD HH:MM`
- Requested Change Window (UTC): `YYYY-MM-DD HH:MM` to `YYYY-MM-DD HH:MM`
- FR ID / Name: `FR-XX / [Feature Name]`
- Linked issues: `[UNI-XXX](/UNI/issues/UNI-XXX)`

## 4. Request Summary

- Requested Action Type: `Emergency fix | Controlled hotfix | Time-bound config change`
- Business Reason: `[What breaks or risks if exception is denied]`
- User/Customer Impact if Denied: `[Who is affected and how]`
- Blast Radius Estimate: `[Tenant count, workflow count, message/report volume]`
- Urgency Class: `Critical (<=4h) | High (same day) | Standard (next business day)`

## 5. Risk and Safety Assessment

| Risk Dimension | Current Risk If No Change | Risk If Exception Approved | Mitigation |
| --- | --- | --- | --- |
| Service continuity | [Low/Med/High] | [Low/Med/High] | [Action + owner] |
| Data integrity | [Low/Med/High] | [Low/Med/High] | [Action + owner] |
| Customer trust/comms | [Low/Med/High] | [Low/Med/High] | [Action + owner] |
| Compliance/legal | [Low/Med/High] | [Low/Med/High] | [Action + owner] |
| Support load | [Low/Med/High] | [Low/Med/High] | [Action + owner] |

## 6. Evidence Checklist (Required)

| # | Evidence Item | Required | Link / Artifact | Owner |
| --- | --- | --- | --- | --- |
| 1 | Incident or trigger record with UTC timestamps | Yes | [Link] | Support/Product |
| 2 | Reproduction or impact validation notes | Yes | [Link] | Engineering |
| 3 | Scope of affected users/tenants | Yes | [Link] | Product |
| 4 | Proposed change diff/config summary | Yes | [Link] | Engineering |
| 5 | Rollback path validated against current state | Yes | [Link] | Engineering |
| 6 | Monitoring watch plan with thresholds | Yes | [Link] | Engineering/Support |
| 7 | Customer/internal communication draft | Yes | [Link] | Product/Support |
| 8 | Alternative considered and rejected rationale | Yes | [Link] | Request owner |

If any required evidence is missing, the default decision is `Denied`.

## 7. Approval Matrix

| Role | Decision | Name | Timestamp (UTC) | Notes |
| --- | --- | --- | --- | --- |
| Product Owner | Approve / Deny | [Name] | [YYYY-MM-DD HH:MM] |  |
| Engineering Owner | Approve / Deny | [Name] | [YYYY-MM-DD HH:MM] |  |
| Support Owner | Approve / Deny | [Name] | [YYYY-MM-DD HH:MM] |  |
| Final Authority (CTO/Delegate) | Approve / Deny | [Name] | [YYYY-MM-DD HH:MM] | Required for freeze override |

Decision rule:

1. Any `Deny` from Product, Engineering, or final authority results in `Denied`.
2. Missing final authority decision results in `Pending` and no release action.
3. `Conditional Approve` must include explicit guardrails in Section 8.

## 8. Execution Guardrails (Required for Approved Requests)

- Deployment/change owner: `[Name]`
- Command window in UTC: `[start]` to `[end]`
- Max allowed blast radius during execution: `[explicit threshold]`
- Live monitoring owner: `[Name]`
- Rollback trigger(s): `[metric + threshold + evaluation window]`
- Rollback execution owner: `[Name]`
- Stakeholder update cadence: `[e.g., every 30 minutes until stable]`
- End-of-window validation criteria: `[what must be true to close]`

## 9. Decision Log Entry Template (Copy/Paste)

```md
### Launch Freeze Exception Decision
- FR ID:
- Linked Issue:
- Freeze Window (UTC):
- Requested Change Window (UTC):
- Decision: Approved | Conditional Approved | Denied
- Decision Timestamp (UTC):
- Decision Owner (Final Authority):
- Rationale:
- Risk Summary:
- Rollback Trigger(s):
- Monitoring Owner:
- Next Checkpoint (UTC):
- Next Action (owner + UTC date):
```

## 10. Request Form Template (Copy/Paste)

```md
### FR Launch Freeze Exception Request
- Request ID: `FREX-YYYYMMDD-##`
- Request Date (UTC):
- Request Owner:
- FR ID / Name:
- Linked Issue(s): [UNI-XXX](/UNI/issues/UNI-XXX)
- Freeze Window (UTC):
- Requested Change Window (UTC):
- Requested Action Type: Emergency fix | Controlled hotfix | Time-bound config change
- Business Reason:
- User/Customer Impact if Denied:
- Blast Radius Estimate:
- Urgency Class: Critical (<=4h) | High (same day) | Standard (next business day)

Risk and Mitigation
- Continuity risk:
- Data integrity risk:
- Customer/compliance risk:
- Support load risk:
- Key mitigations:

Evidence Links
- Incident/trigger:
- Validation notes:
- Proposed change summary:
- Rollback validation:
- Monitoring plan:
- Communication draft:
- Alternative rejected:

Approvals
- Product Owner:
- Engineering Owner:
- Support Owner:
- Final Authority (CTO/Delegate):

Execution Guardrails (if approved)
- Change owner:
- Monitoring owner:
- Rollback owner:
- Rollback triggers:
- Update cadence:
- Next action (owner + UTC date):
```

## 11. Post-Exception Closeout (Required)

Within 1 business day after execution window closes:

1. Record outcome (`successful`, `rolled back`, or `partially successful`) and why.
2. Attach observed metrics against guardrails.
3. Log any SLA breaches using `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`.
4. Create follow-up issue(s) for residual risk and assign owners.
5. Add summary line to the linked FR decision log and issue thread.

---

_UniteCube — Northern Hokkaido Business Automation_
