# Pilot Governance Checklist Template (v1)

*Governance Review Date: YYYY-MM-DD*
*Pilot: [Client Name / Pilot ID]*
*Owner: CMO / Account Lead / Delivery Lead*
*Review Type: Weekly / Biweekly / Ad Hoc*

## 1. Purpose
Use this checklist to validate governance discipline during pilot execution.
This checklist is the operating control layer for weekly governance review and should be completed before the checkpoint meeting closes.

---

## 2. Governance Snapshot

| Field | Value |
| :--- | :--- |
| Overall Governance Status | On Track / Watch / At Risk |
| Governance Confidence | High / Medium / Low |
| Last Checklist Date | YYYY-MM-DD |
| Next Checklist Date | YYYY-MM-DD |
| Accountable Governance Owner | [Name / Role] |
| Executive Sponsor | [Name / Role] |
| Open Escalations | [#] |
| Open Critical Risks | [#] |

**Snapshot Summary (3-5 sentences):**
[Concise summary of governance health, new concerns, and immediate priorities.]

---

## 3. Checklist Entry Prerequisites

Complete before scoring this checklist:

1. Decision log is updated through the current review date.
2. Risk register has fresh scores from the past 7 days.
3. Action tracker is current with owner and due date for open items.
4. Scope-change requests are filed for all non-trivial scope movement.
5. Dependency map includes owner, date, and escalation path per active dependency.

If any prerequisite is missing, mark overall governance status as `At Risk` and record the gap in Section 7.

---

## 4. Governance Checklist

Use `Status` values: `Done`, `Open`, `N/A`.
Use `Criticality` values: `Critical`, `High`, `Medium`.

| Domain | Checklist Item | Owner | Criticality | Status | Evidence / Link | Risk if Open |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Decision Discipline | Material decisions are logged with rationale and approval owner. | [Name] | Critical |  | [Decision log] | Low auditability and repeated debate |
| Decision Discipline | Deferred decisions have explicit trigger dates for revisit. | [Name] | High |  | [Decision backlog] | Silent drift in unresolved decisions |
| Risk Control | Sev-1/Sev-2 risks have current mitigation plans and owners. | [Name] | Critical |  | [Risk register] | Unmanaged critical exposure |
| Risk Control | Escalation thresholds are evaluated against latest pilot signals. | [Name] | High |  | [Escalation matrix] | Delayed leadership intervention |
| Scope Governance | New work requests are mapped to approved scope or change request. | [Name] | Critical |  | [Scope log] | Hidden scope creep |
| Scope Governance | Out-of-scope asks are triaged with approve/reject decision owner. | [Name] | High |  | [Triage log] | Delivery focus erosion |
| Delivery Accountability | Open actions have single owner and dated commitment. | [Name] | Critical |  | [Action tracker] | Cross-team execution gaps |
| Delivery Accountability | Missed due dates are escalated in the same governance cycle. | [Name] | High |  | [Action notes] | Chronic slippage without correction |
| Dependency Governance | External dependencies have named external owners and due dates. | [Name] | High |  | [Dependency map] | Blockers discovered too late |
| Dependency Governance | Blocked dependencies have explicit escalation path and trigger date. | [Name] | High |  | [Escalation path] | Long-running unresolved blockers |
| KPI Oversight | KPI anomalies are reviewed with assigned response owner and SLA. | [Name] | Critical |  | [KPI anomaly log] | Business-impact signals ignored |
| KPI Oversight | KPI baselines and formulas remain aligned to agreed success criteria. | [Name] | Medium |  | [KPI spec] | Invalid performance interpretation |
| Stakeholder Alignment | Weekly update sent to required stakeholder list on cadence. | [Name] | Medium |  | [Update artifact] | Misaligned expectations |
| Stakeholder Alignment | Sponsor concerns are logged with response owner and due date. | [Name] | High |  | [Stakeholder log] | Escalation surprises |
| Compliance & Controls | Required pilot controls and approvals are current and traceable. | [Name] | Critical |  | [Control evidence] | Governance non-compliance |

---

## 5. Scoring and Governance Decision

### 5.1 Scoring Rules
- `Done` = full points
- `N/A` = excluded from denominator with rationale
- `Open` = zero points
- Any `Critical` item left `Open` sets overall governance status to `At Risk` unless an approved exception is captured in Section 8.

### 5.2 Scorecard

| Metric | Value |
| :--- | :--- |
| Total Applicable Items | [#] |
| Done Items | [#] |
| Open Items | [#] |
| Open Critical Items | [#] |
| Governance Score | [Done / Applicable x 100]% |

### 5.3 Status Thresholds

| Status | Criteria |
| :--- | :--- |
| On Track | Score >= 90% and zero open `Critical` items |
| Watch | Score 80-89% and zero open `Critical` items |
| At Risk | Score < 80% or any open `Critical` item without approved exception |

**Governance Result:** On Track / Watch / At Risk

**Result Rationale (2-4 sentences):**
[Why this governance result was selected and what must change before next review.]

---

## 6. Open Governance Findings

List every `Open` item from Section 4.

| Finding ID | Related Checklist Item | Owner | Criticality | Corrective Action | Due Date | Escalation Path | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GOV-001 | [Item summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Role/Name] | Open |
| GOV-002 | [Item summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Role/Name] | Open |

---

## 7. Governance Debt and Process Gaps

Track recurring governance weaknesses even when immediate delivery appears stable.

| Debt ID | Gap Description | Impact | Owner | Remediation Plan | Due Date | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GD-001 | [Example: Dependency updates not refreshed weekly] | [Impact] | [Name] | [Plan] | YYYY-MM-DD | Open |

---

## 8. Exceptions and Approvals

Use this section for approved exceptions to checklist requirements.

| Role | Name | Decision (Approve / Approve with Conditions / Reject) | Date | Exception Notes |
| :--- | :--- | :--- | :--- | :--- |
| Governance Owner | [Name] |  | YYYY-MM-DD |  |
| Delivery Lead | [Name] |  | YYYY-MM-DD |  |
| Executive Sponsor | [Name] |  | YYYY-MM-DD |  |
| Client Sponsor (Optional) | [Name] |  | YYYY-MM-DD |  |

---

## 9. Leadership Readout Snippet (Copy/Paste)

`Governance checklist for [Pilot Name] completed on [YYYY-MM-DD]. Status: [On Track/Watch/At Risk], score [X]%, with [Y] open findings ([Z] critical). Immediate actions before next review: [action + owner + date]. Leadership support required: [items or none].`

---

### Related Templates
- `docs/PILOT-GOVERNANCE-CHECKPOINT-TEMPLATE.md`
- `docs/PILOT-DECISION-LOG-TEMPLATE.md`
- `docs/PILOT-RISK-REGISTER-TEMPLATE.md`
- `docs/PILOT-ACTION-TRACKER-TEMPLATE.md`
- `docs/PILOT-DEPENDENCY-MAP-TEMPLATE.md`

---

_UniteCube - Northern Hokkaido Business Automation_
