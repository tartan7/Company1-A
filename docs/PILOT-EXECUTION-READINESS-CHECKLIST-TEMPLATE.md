# Pilot Execution-Readiness Checklist Template (v1)

*Readiness Review Date: YYYY-MM-DD*
*Pilot: [Client Name / Pilot ID]*
*Owner: CMO / Account Lead / Delivery Lead*
*Target Execution Start Date: YYYY-MM-DD*

## 1. Purpose
Use this checklist before pilot execution starts to confirm scope clarity, delivery controls, stakeholder alignment, and operational safeguards are in place.
A pilot should enter execution only after all critical readiness items are marked `Done` or explicitly accepted with named owners and due dates.

---

## 2. Pilot Readiness Snapshot

| Field | Value |
| :--- | :--- |
| Pilot Phase Gate | Pre-Execution / Re-Baseline / Restart |
| Current Overall Readiness | Ready / Conditionally Ready / Not Ready |
| Readiness Score (%) | [0-100] |
| Accountable Readiness Owner | [Name / Role] |
| Executive Sponsor | [Name / Role] |
| Planned Execution Window | [YYYY-MM-DD to YYYY-MM-DD] |
| Latest Scope Baseline Date | YYYY-MM-DD |
| Last Readiness Review Date | YYYY-MM-DD |

**Readiness Summary (3-5 sentences):**
[Concise summary of current readiness posture, key gaps, and whether execution can begin on plan.]

---

## 3. Entry Criteria

Complete these prerequisites before detailed checklist scoring:

1. Pilot scope baseline is approved and shared.
2. Success criteria and KPI definitions are signed off.
3. Decision rights and escalation path are documented.
4. Named owners are assigned for delivery, technical, data, and client coordination.
5. First 2 weeks of execution cadence are scheduled.

If any prerequisite is missing, mark current status `Not Ready` and document the gap in Section 8.

---

## 4. Execution-Readiness Checklist

Use `Status` values: `Done`, `Open`, `N/A`.
Use `Criticality` values: `Critical`, `High`, `Medium`.

| Domain | Checklist Item | Owner | Criticality | Status | Evidence / Link | Gap or Risk if Open |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Scope & Outcomes | Scope baseline reflects all in-scope workflows/channels. | [Name] | Critical |  | [Doc link] | Scope drift and rework risk |
| Scope & Outcomes | Out-of-scope requests are logged with triage owner. | [Name] | High |  | [Backlog link] | Uncontrolled expansion |
| Scope & Outcomes | Success criteria thresholds and KPI formulas are approved. | [Name] | Critical |  | [KPI doc] | Disputed success definition |
| Governance | Weekly governance checkpoint cadence is scheduled. | [Name] | High |  | [Calendar link] | Late escalation of issues |
| Governance | Decision log and risk register are initialized for this pilot. | [Name] | Critical |  | [Docs links] | Missing audit trail |
| Stakeholders | Client sponsor, day-to-day owner, and approver are confirmed. | [Name] | Critical |  | [Stakeholder map] | Decision latency |
| Stakeholders | Communication channels and response SLAs are agreed. | [Name] | High |  | [Cadence doc] | Blockers linger unresolved |
| Delivery Plan | First two sprints/weeks have dated milestones and owners. | [Name] | Critical |  | [Plan link] | Unclear execution sequencing |
| Delivery Plan | Dependency map includes external owner + due date per item. | [Name] | High |  | [Dependency map] | Hidden blockers |
| Technical | Environments, credentials, and access approvals are validated. | [Name] | Critical |  | [Access checklist] | Execution start blocked |
| Technical | Integration smoke tests passed within last 5 business days. | [Name] | Critical |  | [Test report] | Production instability risk |
| Technical | Monitoring and alert routing are configured and tested. | [Name] | High |  | [Monitoring proof] | Late incident detection |
| Data | Data sources, field mappings, and ownership are confirmed. | [Name] | Critical |  | [Data mapping doc] | Reporting or automation failures |
| Data | Baseline KPI capture process is active before day 1. | [Name] | High |  | [Baseline report] | No pre/post comparison |
| Operations | SOPs/runbooks are published for primary workflows. | [Name] | High |  | [Runbook link] | Slow incident recovery |
| Operations | Support coverage and escalation tiers are staffed. | [Name] | High |  | [On-call plan] | Response SLA breaches |
| Commercial | Contract and milestone triggers are mapped to execution plan. | [Name] | Medium |  | [Commercial summary] | Misaligned delivery obligations |
| Commercial | Billing or change-order path is documented for scope movement. | [Name] | Medium |  | [Change policy] | Revenue leakage |

---

## 5. Readiness Scoring and Gate Decision

### 5.1 Score Rules
- `Done` = full points
- `N/A` = excluded from denominator with rationale
- `Open` = zero points
- Critical items must be `Done` unless explicitly accepted by executive sponsor in Section 7

### 5.2 Scorecard

| Metric | Value |
| :--- | :--- |
| Total Applicable Items | [#] |
| Done Items | [#] |
| Open Items | [#] |
| Critical Items Open | [#] |
| Readiness Score | [Done / Applicable x 100]% |

### 5.3 Gate Decision

| Decision | Criteria |
| :--- | :--- |
| Ready | Score >= 90% and zero open `Critical` items |
| Conditionally Ready | Score 75-89% with zero open `Critical` items and approved action plan |
| Not Ready | Score < 75% or any open `Critical` item without sponsor acceptance |

**Gate Result:** Ready / Conditionally Ready / Not Ready

**Rationale (2-4 sentences):**
[Why this gate result was selected.]

---

## 6. Open Gaps and Closure Plan

List every `Open` item from Section 4.

| Gap ID | Related Checklist Item | Owner | Criticality | Closure Action | Due Date | Escalation Path | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ER-001 | [Item summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Role/Name] | Open |
| ER-002 | [Item summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Role/Name] | Open |

---

## 7. Approvals and Exceptions

Use this section when approving execution with conditions or accepted exceptions.

| Role | Name | Decision (Approve / Approve with Conditions / Reject) | Date | Notes / Accepted Exceptions |
| :--- | :--- | :--- | :--- | :--- |
| Readiness Owner | [Name] |  | YYYY-MM-DD |  |
| Delivery Lead | [Name] |  | YYYY-MM-DD |  |
| Executive Sponsor | [Name] |  | YYYY-MM-DD |  |
| Client Sponsor (Optional) | [Name] |  | YYYY-MM-DD |  |

---

## 8. Executive Readout Snippet (Copy/Paste)

`Pilot [Pilot Name] execution-readiness review completed on [YYYY-MM-DD]. Gate result: [Ready/Conditionally Ready/Not Ready], score [X]%, with [Y] open items ([Z] critical). Top pre-execution actions: [action + owner + due date]. Next readiness check: [date/time].`

---

_UniteCube - Northern Hokkaido Business Automation_
