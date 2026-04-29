# Pilot Operations-Readiness Template (v1)

*Readiness Review Date: YYYY-MM-DD*
*Pilot: [Client Name / Pilot ID]*
*Owner: CMO / Delivery Lead / Operations Lead*
*Planned Operations Start Date: YYYY-MM-DD*

## 1. Purpose
Use this template to confirm day-to-day operating capability is in place before the pilot enters sustained execution.
Operations readiness focuses on staffing, runbooks, support coverage, incident response, controls, and operational reporting.

---

## 2. Operations Readiness Snapshot

| Field | Value |
| :--- | :--- |
| Current Readiness Status | Ready / Conditionally Ready / Not Ready |
| Operations Readiness Score (%) | [0-100] |
| Operations Lead | [Name / Role] |
| Executive Sponsor | [Name / Role] |
| Pilot Start Date | YYYY-MM-DD |
| Planned Hypercare Window | [Date range] |
| Last Readiness Review | YYYY-MM-DD |
| Next Review Date | YYYY-MM-DD |

**Snapshot Summary (3-5 sentences):**
[Summarize operational posture, largest remaining risks, and decision needed to start operations.]

---

## 3. Entry Criteria (Must Be True Before Scoring)

1. Service model is defined (hours, channels, support tiers, ownership).
2. Primary and backup owners are confirmed for operational roles.
3. Core SOPs/runbooks are drafted and versioned.
4. Incident severity model and escalation path are approved.
5. KPI baseline process is active and tested.

If any entry criterion is missing, mark overall status `Not Ready` and capture gap actions in Section 7.

---

## 4. Operations Readiness Checklist

Use `Status`: `Done`, `Open`, `N/A`.
Use `Criticality`: `Critical`, `High`, `Medium`.

| Domain | Readiness Item | Owner | Criticality | Status | Evidence / Link | Risk if Open |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Operating Model | Support channels and response windows are documented and approved. | [Name] | Critical |  | [Ops model doc] | Unclear response accountability |
| Operating Model | Ticket triage rules and assignment logic are defined. | [Name] | High |  | [Triage SOP] | Delayed incident routing |
| Staffing & Coverage | Named primary/backup coverage exists for all key roles. | [Name] | Critical |  | [Coverage roster] | Single-point-of-failure risk |
| Staffing & Coverage | Hypercare coverage roster is staffed and communicated. | [Name] | High |  | [Hypercare plan] | Slow early-phase response |
| SOPs & Runbooks | Runbooks exist for top 5 highest-frequency workflows. | [Name] | Critical |  | [Runbook set] | Inconsistent operations |
| SOPs & Runbooks | Incident runbook includes detection, containment, recovery, and handoff. | [Name] | Critical |  | [Incident runbook] | Prolonged service disruption |
| Tooling & Access | Required systems/accounts are provisioned and tested for all operators. | [Name] | Critical |  | [Access checklist] | Team unable to execute work |
| Tooling & Access | Monitoring dashboards and alert routes are validated. | [Name] | High |  | [Monitoring evidence] | Late anomaly detection |
| Data & Reporting | Operational KPI definitions and formulas are locked. | [Name] | High |  | [KPI baseline template] | Reporting disputes |
| Data & Reporting | Daily/weekly operations reporting cadence is scheduled. | [Name] | Medium |  | [Cadence calendar] | Leadership visibility gaps |
| Incident Management | Severity matrix (Sev-1/2/3) and SLA targets are approved. | [Name] | Critical |  | [Escalation playbook] | Escalation confusion |
| Incident Management | Internal and client escalation contacts are validated. | [Name] | High |  | [Contact matrix] | Delayed critical decisions |
| Quality Controls | Quality gates and acceptance checks are assigned by owner. | [Name] | High |  | [Quality checklist] | Defects pass into live workflow |
| Change Control | Scope-change and change-log process is active for operations changes. | [Name] | Medium |  | [Change process] | Untracked operational drift |
| Business Continuity | Continuity fallback mode and trigger thresholds are confirmed. | [Name] | High |  | [Continuity plan] | Uncontrolled outage impact |
| Communications | Stakeholder update template/channel/cadence are agreed. | [Name] | Medium |  | [Stakeholder update plan] | Trust erosion from poor updates |

---

## 5. Scoring and Gate Decision

### 5.1 Scoring Rules
- `Done` = full points
- `N/A` = excluded with rationale
- `Open` = zero points
- Any `Critical` item left `Open` requires sponsor exception in Section 8

### 5.2 Scorecard

| Metric | Value |
| :--- | :--- |
| Applicable Items | [#] |
| Done Items | [#] |
| Open Items | [#] |
| Open Critical Items | [#] |
| Readiness Score | [Done / Applicable x 100]% |

### 5.3 Decision Criteria

| Decision | Criteria |
| :--- | :--- |
| Ready | Score >= 90% and 0 open `Critical` items |
| Conditionally Ready | Score 80-89% and 0 open `Critical` items with approved closure plan |
| Not Ready | Score < 80% or any open `Critical` item without sponsor exception |

**Gate Result:** Ready / Conditionally Ready / Not Ready

**Rationale (2-4 sentences):**
[Why the selected gate result is appropriate now.]

---

## 6. 14-Day Operational Stabilization Plan

Capture the first two weeks of controlled operations activities.

| Day/Window | Focus Area | Action | Owner | Expected Output | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Day 1-2 | Hypercare activation | Confirm on-call roster and open command channel. | [Name] | Active command structure | Planned |
| Day 3-5 | Runbook adherence | Audit first-cycle tickets against SOP compliance. | [Name] | SOP adherence report | Planned |
| Day 6-10 | KPI stability | Review KPI variance and anomaly response times. | [Name] | KPI stability summary | Planned |
| Day 11-14 | Handoff readiness | Validate transition from hypercare to steady-state model. | [Name] | Handoff recommendation | Planned |

---

## 7. Open Gaps and Closure Tracker

| Gap ID | Related Item | Owner | Criticality | Closure Action | Due Date | Escalation Owner | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| OR-001 | [Item summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Name/Role] | Open |
| OR-002 | [Item summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Name/Role] | Open |

---

## 8. Approvals and Exceptions

| Role | Name | Decision (Approve / Approve with Conditions / Reject) | Date | Notes / Exceptions |
| :--- | :--- | :--- | :--- | :--- |
| Operations Lead | [Name] |  | YYYY-MM-DD |  |
| Delivery Lead | [Name] |  | YYYY-MM-DD |  |
| Executive Sponsor | [Name] |  | YYYY-MM-DD |  |
| Client Sponsor (Optional) | [Name] |  | YYYY-MM-DD |  |

---

## 9. Executive Readout Snippet (Copy/Paste)

`Pilot [Pilot Name] operations-readiness review completed on [YYYY-MM-DD]. Decision: [Ready/Conditionally Ready/Not Ready], score [X]%, with [Y] open items ([Z] critical). Top stabilization priorities for first 14 days: [action + owner + date]. Next readiness check: [date/time].`

---

_UniteCube - Northern Hokkaido Business Automation_
