# Pilot Onboarding Timeline Template (v1)

*Date: 2026-04-24 / Version: 1.0*
*Owner: CMO*

## 1. Purpose
Use this template to run pilot onboarding from contract signature through go-live with clear daily ownership, dependencies, and blocker checks.

---

## 2. Pilot Setup

| Field | Value |
| :--- | :--- |
| Client Name | [Client Name] |
| Pilot Name | [Pilot Name] |
| Contract Signed Date | YYYY-MM-DD |
| Day 1 (Kickoff Date) | YYYY-MM-DD |
| Target Go-Live Date | YYYY-MM-DD |
| UniteCube Project Lead | [Name] |
| Client Project Owner | [Name] |
| Status | Not Started / In Progress / At Risk / Completed |

---

## 3. Day-by-Day Timeline (First 14 Days)

| Day | Date | Milestone | UniteCube Responsibility | Client Responsibility | Dependency | Blocker Checkpoint | Exit Criteria | Status | Notes |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | YYYY-MM-DD | Kickoff | Lead kickoff, confirm scope, success metrics, and communication cadence. | Confirm sponsor, decision maker, and pilot participants. | Contract executed | Missing sponsor or owner assignment | Signed kickoff notes and agreed KPI list. | Not Started |  |
| 2 | YYYY-MM-DD | Access Request Pack | Share system access checklist and credential request matrix. | Provide system inventory and security requirements. | Day 1 complete | Access owner unknown | Checklist approved by both teams. | Not Started |  |
| 3 | YYYY-MM-DD | Access Provisioning | Validate account creation and permission scopes in staging. | Provision user accounts and API credentials. | Day 2 complete | Credentials not delivered | Required systems reachable by UniteCube team. | Not Started |  |
| 4 | YYYY-MM-DD | Current-State Mapping | Run discovery session and map current workflows. | Provide SOPs, edge cases, and exception handling rules. | Day 3 complete | Key SME unavailable | Current-state process map documented. | Not Started |  |
| 5 | YYYY-MM-DD | Future-State Design | Draft future workflow, handoffs, and SLA expectations. | Review and approve proposed process changes. | Day 4 complete | No design sign-off | Approved future-state design v1. | Not Started |  |
| 6 | YYYY-MM-DD | Data Schema Alignment | Define required fields, naming rules, and validation logic. | Confirm source-of-truth fields and data owners. | Day 5 complete | Field ownership unclear | Signed data mapping sheet. | Not Started |  |
| 7 | YYYY-MM-DD | Integration Setup | Configure connectors and baseline automations in staging. | Enable integration endpoints and allowlist if needed. | Days 3 and 6 complete | Endpoint/auth failures | Core integration smoke test passes. | Not Started |  |
| 8 | YYYY-MM-DD | Workflow Build | Implement automation branches, alerts, and assignment logic. | Confirm routing rules and escalation contacts. | Day 7 complete | Routing policy unresolved | Full workflow configured in staging. | Not Started |  |
| 9 | YYYY-MM-DD | Internal QA | Execute unit and integration tests; log defects and fixes. | Clarify expected outcomes for ambiguous scenarios. | Day 8 complete | Critical defects > threshold | QA checklist pass and defect log updated. | Not Started |  |
| 10 | YYYY-MM-DD | UAT Prep | Prepare UAT scripts and training materials by role. | Nominate UAT participants and schedule sessions. | Day 9 complete | UAT participants not assigned | UAT plan approved. | Not Started |  |
| 11 | YYYY-MM-DD | UAT Execution | Facilitate UAT session and capture issues. | Run test cases and submit approvals/rejections. | Day 10 complete | UAT fail on priority flows | UAT pass rate meets target. | Not Started |  |
| 12 | YYYY-MM-DD | Fix & Retest | Resolve UAT defects and re-run failed cases. | Revalidate corrected flows and sign off. | Day 11 complete | Sign-off delayed | All critical defects closed. | Not Started |  |
| 13 | YYYY-MM-DD | Go-Live Readiness | Complete cutover checklist and rollback plan. | Confirm launch window and frontline staffing. | Day 12 complete | No rollback owner | Launch readiness approved. | Not Started |  |
| 14 | YYYY-MM-DD | Go-Live | Execute deployment, monitor incidents, and run hypercare standup. | Confirm business acceptance and escalation path. | Day 13 complete | Incident unresolved > SLA | Pilot live with monitoring and owner handoff complete. | Not Started |  |

---

## 4. Responsibility Matrix (Client vs UniteCube)

| Workstream | UniteCube | Client |
| :--- | :--- | :--- |
| Scope and KPI Definition | Facilitate scope workshop and define KPI measurement method. | Approve final scope, KPI targets, and sponsor priorities. |
| Systems and Credentials | Provide access matrix and validate technical setup. | Provision credentials, permissions, and IT approvals. |
| Process and Automation Design | Create future-state blueprint and automation logic. | Validate policy constraints and operational requirements. |
| QA and UAT | Prepare tests, fix defects, and coordinate retests. | Execute UAT, confirm acceptance, and sign off. |
| Go-Live and Hypercare | Run deployment plan and incident triage. | Confirm business readiness and escalation contacts. |

---

## 5. Dependency and Blocker Register

| ID | Dependency / Blocker | Owner | Needed By | Impact If Missed | Mitigation | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| D-01 | Client API credentials delivered | Client IT | Day 3 | Build cannot start on time | Temporary CSV ingestion fallback | Open |
| D-02 | Process design sign-off | Client Project Owner | Day 5 | Automation logic may need rework | Time-box workshop with decision maker | Open |
| D-03 | UAT participant availability | Client Project Owner | Day 10 | Go-live shifts beyond Day 14 | Pre-book backup participants | Open |
| D-04 | Final go-live approval | Sponsor + Project Lead | Day 13 | Launch blocked | Escalate in steering call 24h prior | Open |

---

## 6. Weekly Update Snippet (Optional)

`Pilot onboarding is at Day [#] with status [Green/Yellow/Red]. The latest completed milestone is [milestone]. Current blocker is [blocker] owned by [owner], with mitigation [action] by [date].`

---

_UniteCube — Northern Hokkaido Business Automation_
