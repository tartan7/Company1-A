# Pilot Mitigation Tracker Template (v1)

*Date: YYYY-MM-DD / Version: 1.0*
*Owner: CMO / Delivery Lead*
*Pilot: [Client Name / Pilot ID]*

## 1. Purpose
Use this template to track risk and incident mitigations from commitment through validation and closure.
The mitigation tracker provides a single execution view across the risk register, action tracker, and remediation plan.

---

## 2. Usage Rules

1. Each mitigation must reference a source item (`Risk ID`, `Incident ID`, or `Decision ID`).
2. Every mitigation row must have one accountable owner and one target validation date.
3. Define objective success metrics before execution starts.
4. If a mitigation slips or fails validation, update `Recovery Action` and assign an escalation owner in the same update.
5. Mark mitigations as closed only when evidence is linked and the residual risk is explicitly accepted.

---

## 3. Mitigation Tracker

| Mitigation ID | Date Logged | Source Item | Workstream | Risk Severity (High/Med/Low) | Mitigation Objective | Planned Mitigation Action | Owner | Start Date | Target Validation Date | Current Status | Validation Metric | Validation Result (Pass/Fail/Pending) | Residual Risk (High/Med/Low) | Recovery Action (if fail/slip) | Escalation Owner | Evidence / Link | Last Updated |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| M-001 | YYYY-MM-DD | R-001 | Data Integration | High | Prevent schema drift from breaking daily imports. | Add schema-version check and block invalid payloads. | Engineering Lead | YYYY-MM-DD | YYYY-MM-DD | In Progress | 0 import failures for 5 consecutive days | Pending | Medium | If 2+ failures occur, shift to manual import fallback and open incident bridge. | Delivery Lead | [Link] | YYYY-MM-DD |
| M-002 | YYYY-MM-DD | KPI-YYYYMMDD-01 | Workflow Reliability | High | Restore failed automation completion rate to target. | Reconfigure retry logic and alerting thresholds. | Automation Lead | YYYY-MM-DD | YYYY-MM-DD | Planned | Job success rate >= 98% over 7 days | Pending | Medium | Trigger remediation plan workstream for workflow stability. | CMO | [Link] | YYYY-MM-DD |
| M-003 | YYYY-MM-DD | R-007 | Adoption | Medium | Reduce SOP deviations during pilot operations. | Deliver role-based retraining and publish quick-reference guide. | Enablement Lead | YYYY-MM-DD | YYYY-MM-DD | Monitoring | SOP compliance >= 90% in weekly audit | Pass | Low | Increase coaching cadence to twice weekly until sustained compliance. | Account Lead | [Link] | YYYY-MM-DD |

---

## 4. Status Definitions

- **Planned:** Mitigation is defined and approved; execution not started.
- **In Progress:** Mitigation work is active and owner is executing.
- **Monitoring:** Mitigation is implemented; performance is under observation.
- **At Risk:** Mitigation is unlikely to validate by target date without intervention.
- **Blocked:** Mitigation cannot progress due to unresolved dependency.
- **Closed:** Validation passed and residual risk accepted.
- **Cancelled:** Mitigation intentionally stopped with rationale documented.

---

## 5. Validation Gate Checklist

Before moving a mitigation to `Closed`, confirm all checks:

1. Validation metric and threshold are met for the required observation period.
2. Objective evidence is linked in `Evidence / Link`.
3. Residual risk is scored and accepted by the mitigation owner.
4. Any follow-up controls are logged in either the risk register or action tracker.
5. Stakeholders are informed of outcome and remaining watch items.

---

## 6. Weekly Review Cadence

Use this view during weekly governance reviews:

1. All `High` severity mitigations have updates in the last 5 business days.
2. Any `At Risk` or `Blocked` mitigation has named escalation owner and next-step date.
3. Failed validations include a concrete recovery action and revised validation date.
4. Residual `High` risk items are linked to active remediation or escalation decisions.
5. Closed mitigations include quantified impact and evidence links.

---

## 7. Escalation Summary View

| Trigger | Condition | Required Action | Owner |
| :--- | :--- | :--- | :--- |
| Validation Miss | Validation result is `Fail` or target date is missed | Open recovery action within 1 business day and notify sponsor. | Mitigation Owner |
| Repeated Miss | Same mitigation misses validation twice | Escalate in governance checkpoint and request leadership decision. | Escalation Owner |
| Residual High Risk | Mitigation closes with residual risk still `High` | Keep item in monitoring with explicit contingency owner. | CMO / Delivery Lead |

---

## 8. Copy/Paste Summary Snippets

### Weekly Pilot Update Snippet

`Mitigation tracker: [x] total mitigations ([h] high, [m] medium, [l] low). [y] are At Risk/Blocked. This week validated: [n] pass, [f] fail, [p] pending. Top escalation: [Mitigation ID + blocker] owned by [name], next decision needed by [date].`

### Leadership Escalation Snippet

`Escalation request: Mitigation [Mitigation ID] tied to [Source Item] failed validation and leaves residual risk at [level]. Current impact: [timeline/KPI/client risk]. Decision needed: [resource/scope/timeline] by [date].`

---

_UniteCube - Northern Hokkaido Business Automation_
