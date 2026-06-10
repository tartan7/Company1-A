# Pilot Remediation Plan Template (v1)

*Date: YYYY-MM-DD / Version: 1.0*
*Owner: CMO / Delivery Lead*
*Pilot: [Client Name / Pilot ID]*
*Related Incident(s): [KPI-YYYYMMDD-XX / Risk ID / Decision ID]*

## 1. Purpose
Use this template when a pilot is off-track and requires coordinated corrective action across people, process, and technology.
A remediation plan should convert known gaps into owned actions with dates, risks, and measurable recovery criteria.

---

## 2. When To Trigger This Plan

Trigger this plan when one or more conditions apply:

1. KPI trend misses target for 2 or more consecutive reporting periods.
2. Critical deliverable slips and threatens pilot scope, timeline, or client confidence.
3. Repeated incidents indicate structural process/tooling gaps.
4. Governance checkpoint flags pilot status as `At Risk` or `Red`.

**Trigger Date:** YYYY-MM-DD  
**Trigger Owner:** [Name / Role]  
**Current Pilot Health:** Green / Amber / Red

---

## 3. Problem Definition and Scope

| Field | Details |
| :--- | :--- |
| Problem Statement | [1-2 sentence description of what is failing and business impact] |
| Affected KPI(s) / Deliverables | [List metrics, workflows, milestones] |
| Impact Window | [Start date/time and current status] |
| In Scope | [What this remediation covers] |
| Out of Scope | [What is explicitly excluded] |
| Constraint(s) | [Budget, team capacity, tool limits, timeline constraints] |

---

## 4. Root Cause Summary (Working View)

| Category | Observed Cause | Evidence | Confidence (Low/Med/High) | Owner |
| :--- | :--- | :--- | :--- | :--- |
| People | [Example: unclear owner handoff] | [Link] | [Low/Med/High] | [Name] |
| Process | [Example: no SLA on approval loop] | [Link] | [Low/Med/High] | [Name] |
| Data / Tech | [Example: mapping mismatch / failed automation] | [Link] | [Low/Med/High] | [Name] |
| External | [Example: client-side dependency delay] | [Link] | [Low/Med/High] | [Name] |

---

## 5. Remediation Objectives

Define 3-5 measurable objectives that indicate recovery:

1. [Objective #1 with metric and target date]
2. [Objective #2 with metric and target date]
3. [Objective #3 with metric and target date]

Example format: `Restore lead-to-MQL conversion to >= 12% by YYYY-MM-DD.`

---

## 6. Workstream Plan

| Workstream | Corrective Action | Owner | Start Date | Due Date | Status | Success Metric | Evidence / Link |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Data Integrity | [Fix validation rules + backfill] | [Name] | YYYY-MM-DD | YYYY-MM-DD | Planned | Error rate <1% | [Link] |
| Workflow Reliability | [Reconfigure automation + fallback SOP] | [Name] | YYYY-MM-DD | YYYY-MM-DD | Planned | SLA >= 95% | [Link] |
| Enablement | [Retrain users + publish job aids] | [Name] | YYYY-MM-DD | YYYY-MM-DD | Planned | Adoption >= 90% | [Link] |
| Governance | [Increase checkpoint cadence to twice weekly] | [Name] | YYYY-MM-DD | YYYY-MM-DD | Planned | No unowned blockers | [Link] |

---

## 7. Timeline and Milestones (7/14/30-Day View)

| Horizon | Milestone | Owner | Target Date | Exit Signal |
| :--- | :--- | :--- | :--- | :--- |
| Day 0-2 | Confirm scope, owners, and containment actions | [Name] | YYYY-MM-DD | Plan approved by sponsor |
| Day 3-7 | Execute high-impact fixes and clear critical blockers | [Name] | YYYY-MM-DD | No Sev-1/2 open items |
| Day 8-14 | Stabilize KPI trend and validate process compliance | [Name] | YYYY-MM-DD | KPIs trend toward threshold |
| Day 15-30 | Close remaining medium/low gaps and hand over controls | [Name] | YYYY-MM-DD | Recovery criteria sustained |

---

## 8. Dependencies, Risks, and Escalations

| Item ID | Type (Dependency/Risk) | Description | Owner | Required By | Escalation Owner | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| D-001 | Dependency | [Client data access approval] | [Name] | YYYY-MM-DD | [Name] | Open |
| R-001 | Risk | [Temporary workaround may reduce velocity] | [Name] | YYYY-MM-DD | [Name] | Monitoring |

Escalation rule: any high-severity blocked item without movement for 24 hours must be escalated to the pilot sponsor.

---

## 9. Communication and Governance Cadence

| Audience | Channel | Update Cadence | Message Owner | Required Content |
| :--- | :--- | :--- | :--- | :--- |
| Internal Delivery Team | Standup / Slack | Daily | Delivery Lead | Progress, blockers, owner actions |
| Leadership (CMO/Exec) | Weekly review + escalation alerts | 2x weekly or on trigger | CMO | Health status, risk posture, support requested |
| Client Stakeholders | Email / checkpoint call | Weekly or incident-triggered | Account Owner | Impact, actions, ETA, asks |

### Weekly Checkpoint Log

Use this table for the required weekly remediation checkpoint.

| Week Of | Checkpoint Date | Health (Green/Amber/Red) | KPI Trend | Key Wins | Open Blockers | Escalation Needed (Y/N) | Escalation Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| YYYY-MM-DD | YYYY-MM-DD | [Green/Amber/Red] | [Improving/Flat/Declining] | [Short summary] | [Top blockers] | [Y/N] | [Name] |

### Escalation Triggers

Escalate immediately when any trigger is met:

1. Weekly checkpoint status remains `Red` for 2 consecutive weeks.
2. Any Sev-1 incident remains unresolved beyond 24 hours.
3. A critical dependency misses required date and threatens committed milestones.
4. KPI trend declines for 2 consecutive reporting cycles after remediation launch.

---

## 10. Validation and Exit Criteria

Mark remediation complete only when all criteria are met:

1. Target KPI(s) meet threshold for at least 2 consecutive measurement cycles.
2. Critical actions are closed with evidence links.
3. No unresolved high-priority risks remain without approved contingency.
4. Stakeholders (internal + client) receive closure summary.
5. Ongoing monitoring owner and cadence are assigned.

**Decision:** Continue Remediation / Stabilized / Closed  
**Approved By:** [Name / Role]  
**Approval Date:** YYYY-MM-DD

---

## 11. Post-Remediation Follow-Through

| Follow-Up Action | Owner | Due Date | Success Metric | Status |
| :--- | :--- | :--- | :--- | :--- |
| Add preventive control to standard playbook | [Name] | YYYY-MM-DD | Control documented and adopted | Planned |
| Update onboarding/training artifacts | [Name] | YYYY-MM-DD | New version published | Planned |
| Review recurring risk signals in governance | [Name] | YYYY-MM-DD | Monthly trend report active | Planned |

---

## 12. Copy/Paste Summary Snippets

### Leadership Update Snippet

`Remediation plan activated for [pilot] due to [trigger]. Current health: [Amber/Red]. Primary causes: [top 1-2 causes]. High-priority actions are owned by [owners] with next checkpoint on [date].`

### Client Update Snippet

`We have initiated a structured remediation plan to address [issue]. Immediate corrective actions are in progress, and we will provide the next status update by [date/time] with KPI movement and confirmed next steps.`

---

_UniteCube - Northern Hokkaido Business Automation_
