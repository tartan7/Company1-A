# Pilot Milestone-Gate Template (v1)

*Gate Review Date: YYYY-MM-DD*
*Pilot: [Client Name / Pilot ID]*
*Owner: CMO / Pilot Lead / Delivery Lead*
*Gate Scope: [Milestone Name or Phase Boundary]*

## 1. Purpose
Use this template to run milestone-gate reviews at critical pilot checkpoints.
A milestone should be marked complete only when scope, quality, KPI readiness, and governance evidence meet agreed acceptance criteria.

---

## 2. Gate Snapshot

| Field | Value |
| :--- | :--- |
| Milestone Gate ID | MG-YYYYMMDD-01 |
| Milestone Name | [Example: Launch Readiness] |
| Planned Milestone Date | YYYY-MM-DD |
| Actual Gate Review Date | YYYY-MM-DD |
| Milestone Result | Pass / Pass with Conditions / Fail |
| Gate Confidence | High / Medium / Low |
| Gate Owner | [Name / Role] |
| Executive Sponsor | [Name / Role] |
| Next Gate Date | YYYY-MM-DD |

**Milestone Summary (3-5 sentences):**
[Concise status of milestone completion, major findings, and transition recommendation.]

---

## 3. Entry Prerequisites

Confirm all prerequisites before scoring this gate:

1. Milestone acceptance criteria are documented and approved.
2. Scope baseline, change log, and decision log are current through the review date.
3. Open Sev-1/Sev-2 incidents and critical risks are revalidated within 48 hours.
4. KPI evidence and measurement definitions are aligned to approved success criteria.
5. Required approvers are available for same-week decisioning.

If any prerequisite is missing, set milestone result to `Fail` until resolved or formally excepted in Section 8.

---

## 4. Milestone Acceptance Checklist

Use `Status` values: `Pass`, `Open`, `N/A`.
Use `Criticality` values: `Critical`, `High`, `Medium`.

| Domain | Acceptance Check | Owner | Criticality | Status | Evidence / Link | Risk if Open |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Scope Completion | All milestone deliverables map to approved scope and are complete. | [Name] | Critical |  | [Scope tracker] | Milestone marked complete without full delivery |
| Quality | Required test/validation evidence meets acceptance thresholds. | [Name] | Critical |  | [QA report] | Defects carried into next phase |
| KPI Readiness | KPI sources, formulas, and refresh cadence are validated. | [Name] | High |  | [KPI spec] | Performance decisions made on invalid data |
| Dependency Closure | Dependencies tied to this milestone are closed or formally accepted. | [Name] | High |  | [Dependency map] | Hidden blockers after gate approval |
| Risk Posture | Critical/high risks have active mitigations and owners. | [Name] | High |  | [Risk register] | Uncontrolled execution risk |
| Operational Readiness | SOPs/runbooks and owner coverage are in place for milestone outcomes. | [Name] | Medium |  | [Runbook links] | Unstable execution after transition |
| Stakeholder Alignment | Internal and client stakeholders confirm milestone acceptance. | [Name] | Critical |  | [Approval notes] | Misalignment and acceptance disputes |
| Governance Hygiene | Decision/action/change logs are current and cross-linked. | [Name] | Medium |  | [Governance links] | Poor auditability and weak follow-through |
| Commercial Alignment | Milestone acceptance criteria tied to contract/SOW are satisfied. | [Name] | Medium |  | [SOW mapping] | Billing or acceptance conflict |

---

## 5. Scoring and Decision Rules

### 5.1 Scoring Logic
- `Pass` = full points
- `N/A` = excluded from denominator with rationale
- `Open` = zero points
- Any `Critical` item left `Open` forces result to `Fail` unless a sponsor-approved exception is logged in Section 8.

### 5.2 Scorecard

| Metric | Value |
| :--- | :--- |
| Total Applicable Checks | [#] |
| Passed Checks | [#] |
| Open Checks | [#] |
| Open Critical Checks | [#] |
| Milestone-Gate Score | [Passed / Applicable x 100]% |

### 5.3 Decision Thresholds

| Result | Criteria |
| :--- | :--- |
| Pass | Score >= 90% and zero open `Critical` checks |
| Pass with Conditions | Score 80-89%, zero open `Critical` checks, and dated closure plan approved |
| Fail | Score < 80% or any open `Critical` check without approved exception |

**Milestone-Gate Decision:** Pass / Pass with Conditions / Fail

**Decision Rationale (2-4 sentences):**
[Why this decision was made and what must happen next.]

---

## 6. Open Items and Closure Plan

List all `Open` checks from Section 4.

| Item ID | Related Acceptance Check | Owner | Criticality | Corrective Action | Due Date | Escalation Path | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MG-OPEN-001 | [Summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Role/Name] | Open |
| MG-OPEN-002 | [Summary] | [Name] | Critical / High / Medium | [Action] | YYYY-MM-DD | [Role/Name] | Open |

---

## 7. Milestone Outcome and Next Actions

| Next Action | Owner | Due Date | Dependency | Status |
| :--- | :--- | :--- | :--- | :--- |
| [Example: Close conditional item MG-OPEN-001] | [Name] | YYYY-MM-DD | [Dependency] | Planned |
| [Example: Publish milestone acceptance note] | [Name] | YYYY-MM-DD | [Dependency] | Planned |
| [Example: Confirm next phase kickoff date] | [Name] | YYYY-MM-DD | [Dependency] | Planned |

**Next Phase/Workstream Recommendation:** Proceed / Proceed with Conditions / Hold

---

## 8. Exceptions and Approvals

Use this section for approved exceptions or conditional milestone acceptance.

| Role | Name | Decision (Approve / Approve with Conditions / Reject) | Date | Exception or Condition Notes |
| :--- | :--- | :--- | :--- | :--- |
| Gate Owner | [Name] |  | YYYY-MM-DD |  |
| Delivery Lead | [Name] |  | YYYY-MM-DD |  |
| QA/Quality Owner | [Name] |  | YYYY-MM-DD |  |
| Executive Sponsor | [Name] |  | YYYY-MM-DD |  |
| Client Sponsor (Optional) | [Name] |  | YYYY-MM-DD |  |

---

## 9. Leadership Readout Snippet (Copy/Paste)

`Milestone gate [Milestone Name] for [Pilot Name] was reviewed on [YYYY-MM-DD]. Decision: [Pass/Pass with Conditions/Fail], score [X]%, with [Y] open items ([Z] critical). Highest-priority closure action is [action] owned by [owner], due [date]. Next gate/checkpoint: [date].`

---

_UniteCube - Northern Hokkaido Business Automation_
