# Pilot Quality-Gate Checklist Template (v1)

*Gate Review Date: YYYY-MM-DD*
*Pilot: [Client Name / Pilot ID]*
*Owner: CMO / Delivery Lead / QA Lead*
*Gate Type: Phase Entry / Mid-Pilot / Phase Exit*

## 1. Purpose
Use this checklist to enforce quality gates across the pilot lifecycle before moving between major phases.
A phase transition should occur only when required quality criteria are satisfied or formally accepted as time-bound exceptions.

---

## 2. Gate Snapshot

| Field | Value |
| :--- | :--- |
| Gate Name | [e.g., Build Complete Gate] |
| Gate Stage | Entry / Midpoint / Exit |
| Overall Gate Result | Pass / Pass with Conditions / Fail |
| Quality Confidence | High / Medium / Low |
| Accountable Gate Owner | [Name / Role] |
| Executive Sponsor | [Name / Role] |
| Planned Phase Transition Date | YYYY-MM-DD |
| Actual Review Date | YYYY-MM-DD |

**Gate Summary (3-5 sentences):**
[Concise summary of quality posture, major findings, and transition recommendation.]

---

## 3. Gate Entry Prerequisites

Complete these prerequisites before checklist scoring:

1. Scope baseline and success criteria are current and approved.
2. Latest test evidence is attached and traceable to requirements.
3. Open critical risks and incidents are revalidated within 48 hours.
4. Decision log and action tracker are updated through this review date.
5. Required approvers are available for same-week sign-off.

If any prerequisite is missing, set gate result to `Fail` until resolved.

---

## 4. Quality-Gate Checklist

Use `Status` values: `Pass`, `Open`, `N/A`.
Use `Criticality` values: `Critical`, `High`, `Medium`.

| Domain | Checklist Item | Owner | Criticality | Status | Evidence / Link | Risk if Open |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Scope Integrity | Implemented deliverables map to approved scope baseline. | [Name] | Critical |  | [Scope link] | Unapproved work or missing obligations |
| Scope Integrity | All scope deviations have approved change requests. | [Name] | High |  | [Change log] | Hidden scope creep |
| Functional Quality | Critical user journeys pass end-to-end tests. | [Name] | Critical |  | [Test report] | Workflow failure in production |
| Functional Quality | Defect backlog has zero open Sev-1/Sev-2 defects. | [Name] | Critical |  | [Defect board] | High-impact client incidents |
| Data Quality | KPI source data passes completeness and accuracy checks. | [Name] | Critical |  | [Validation report] | Invalid business decisions |
| Data Quality | Baseline and current KPI definitions match approved formulas. | [Name] | High |  | [KPI spec] | Misleading performance interpretation |
| Performance | Response time and throughput meet pilot thresholds. | [Name] | High |  | [Perf test] | SLA breaches |
| Reliability | Monitoring alerts and on-call routing are tested. | [Name] | High |  | [Alert proof] | Late incident detection |
| Operations | Runbooks/SOPs exist for top operational scenarios. | [Name] | High |  | [Runbook link] | Slow or inconsistent recovery |
| Security & Access | Required access controls and credential hygiene checks pass. | [Name] | Critical |  | [Access audit] | Security exposure |
| Compliance | Regulatory/contractual obligations are validated for this phase. | [Name] | High |  | [Compliance notes] | Legal/commercial risk |
| Stakeholder Readiness | Client sponsor and delivery owners sign off on readiness. | [Name] | Critical |  | [Approval notes] | Misaligned phase transition |
| Governance | Decision, risk, and action trackers are current and linked. | [Name] | Medium |  | [Tracker links] | Weak auditability |
| Commercial Quality | Milestone acceptance criteria are explicitly met. | [Name] | Medium |  | [SOW mapping] | Acceptance/payment disputes |

---

## 5. Scoring and Decision Rules

### 5.1 Scoring Rules
- `Pass` = full points
- `N/A` = excluded from denominator with rationale
- `Open` = zero points
- Any `Critical` checklist item left `Open` forces gate result to `Fail` unless sponsor exception is recorded in Section 7.

### 5.2 Scorecard

| Metric | Value |
| :--- | :--- |
| Total Applicable Items | [#] |
| Passed Items | [#] |
| Open Items | [#] |
| Open Critical Items | [#] |
| Quality-Gate Score | [Passed / Applicable x 100]% |

### 5.3 Decision Thresholds

| Decision | Criteria |
| :--- | :--- |
| Pass | Score >= 90% and zero open `Critical` items |
| Pass with Conditions | Score 80-89%, zero open `Critical` items, and approved closure plan |
| Fail | Score < 80% or any open `Critical` item without approved exception |

**Gate Decision:** Pass / Pass with Conditions / Fail

**Decision Rationale (2-4 sentences):**
[Why this decision was selected, including major conditions or blockers.]

---

## 6. Open Findings and Closure Plan

List every `Open` item from Section 4.

| Finding ID | Related Checklist Item | Owner | Criticality | Corrective Action | Due Date | Escalation Path | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| QG-001 | [Item summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Role/Name] | Open |
| QG-002 | [Item summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Role/Name] | Open |

---

## 7. Exceptions and Approvals

Use this section for approved exceptions or conditional passes.

| Role | Name | Decision (Approve / Approve with Conditions / Reject) | Date | Exception or Condition Notes |
| :--- | :--- | :--- | :--- | :--- |
| Gate Owner | [Name] |  | YYYY-MM-DD |  |
| QA/Quality Owner | [Name] |  | YYYY-MM-DD |  |
| Delivery Lead | [Name] |  | YYYY-MM-DD |  |
| Executive Sponsor | [Name] |  | YYYY-MM-DD |  |
| Client Sponsor (Optional) | [Name] |  | YYYY-MM-DD |  |

---

## 8. Leadership Readout Snippet (Copy/Paste)

`Quality gate review for [Pilot Name] completed on [YYYY-MM-DD]. Decision: [Pass/Pass with Conditions/Fail], score [X]%, with [Y] open findings ([Z] critical). Required closure actions before next phase: [action + owner + due date]. Next gate review: [date/time].`

---

_UniteCube - Northern Hokkaido Business Automation_
