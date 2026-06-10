# Pilot Dependency Map Template (v1)

*Date: YYYY-MM-DD / Version: 1.0*  
*Owner: CMO / Delivery Lead*  
*Pilot: [Client Name / Pilot ID]*

## 1. Purpose
Use this template to make cross-team and system dependencies explicit before they create timeline slip or delivery risk.
Maintain one shared dependency map per pilot and review it at least weekly.

---

## 2. Usage Rules

1. Every dependency must have one accountable `Owner` and one committed `Needed By` date.
2. Dependencies on the critical path must include `Confidence` and explicit `Escalation Trigger`.
3. If a date slips, update `Mitigation Plan`, `Status`, and `Escalation Owner` in the same edit.
4. Mirror material dependency changes in the risk register and weekly stakeholder update.
5. Close dependencies only when the success criteria are objectively met and evidence is available.

---

## 3. Pilot Snapshot

| Field | Value |
| :--- | :--- |
| Pilot Name | [Pilot Name] |
| Client Project Owner | [Name / Role] |
| UniteCube Owner | [Name / Role] |
| Pilot Phase | Discovery / Build / Launch / Stabilization |
| Planned Start | YYYY-MM-DD |
| Planned Go-Live | YYYY-MM-DD |
| Last Dependency Review | YYYY-MM-DD |

---

## 4. Dependency Legend

| Category | Definition |
| :--- | :--- |
| Upstream | Must be completed before a work item can start. |
| Downstream | Work that consumes this deliverable after completion. |
| External | Owned outside UniteCube (client, vendor, regulator, etc.). |
| Internal | Owned by UniteCube teams. |

---

## 5. Dependency Register

| Dep ID | Workstream | Dependency Description | Type | Owner | Needed By | Predecessor Deliverable | Success Criteria | Impact If Missed | Mitigation Plan | Escalation Trigger | Escalation Owner | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| D-001 | Data Integration | API credentials provisioned for staging. | Upstream / External | Client IT Lead | YYYY-MM-DD | Security intake complete | Auth test passes in staging. | Build blocked for connector setup. | Temporary CSV import while credentials pending. | No credential owner response in 24h. | Account Lead | Open |
| D-002 | Process Design | Lead-routing decision logic approved. | Upstream / Internal | Client Ops Owner | YYYY-MM-DD | Workflow mapping sign-off | Rule set signed by decision owner. | UAT scenarios cannot be finalized. | Time-boxed approval workshop with sponsor. | Decision not finalized by due date. | Delivery Lead | Open |
| D-003 | Enablement | UAT participant availability confirmed. | Upstream / External | Client Project Owner | YYYY-MM-DD | Training schedule draft | Named participants assigned for all shifts. | Go-live readiness may slip. | Pre-book backup UAT users. | UAT roster not final by Day -3. | Client Sponsor | Monitoring |

---

## 6. Interface and Handoff Matrix

| From Team | To Team | Artifact / Interface | Format | SLA / Timing | Owner | Backup Owner | Current Health |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Client IT | UniteCube Engineering | API credentials + endpoint documentation | Secure doc + vault | 48h before build start | [Name] | [Name] | Green / Yellow / Red |
| UniteCube Delivery | Client Ops | Workflow playbook draft | Shared doc | 24h before UAT prep | [Name] | [Name] | Green / Yellow / Red |
| UniteCube Analytics | Client Sponsor | KPI baseline report | Dashboard + PDF summary | Weekly status review | [Name] | [Name] | Green / Yellow / Red |

---

## 7. Critical Path Check

| Sequence | Milestone | Blocking Dependency IDs | Owner | Target Date | Confidence (High/Medium/Low) | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Data access complete | D-001 | [Name] | YYYY-MM-DD |  |  |
| 2 | Workflow design freeze | D-002 | [Name] | YYYY-MM-DD |  |  |
| 3 | UAT complete | D-002, D-003 | [Name] | YYYY-MM-DD |  |  |
| 4 | Go-live approval | D-001, D-002, D-003 | [Name] | YYYY-MM-DD |  |  |

---

## 8. Dependency Risk Scoring

- **Likelihood (L):** 1 (`Rare`) to 5 (`Almost Certain`)
- **Impact (I):** 1 (`Negligible`) to 5 (`Severe`)
- **Risk Score:** `L x I` (1-25)
- **Priority Bands:**
1. `15-25`: High
2. `8-14`: Medium
3. `1-7`: Low

| Dep ID | L (1-5) | I (1-5) | Risk Score | Priority | Escalation Trigger | Escalation Owner |
| :--- | :---: | :---: | :---: | :--- | :--- | :--- |
| D-001 |  |  |  | Low / Medium / High | [Example: no response for 24h] | [Name] |
| D-002 |  |  |  | Low / Medium / High | [Example: decision not made by due date] | [Name] |
| D-003 |  |  |  | Low / Medium / High | [Example: UAT roster not final by Day -3] | [Name] |

---

## 9. Status Definitions

- **Open:** Dependency is known and not yet resolved.
- **Monitoring:** Dependency has controls in place and is being tracked.
- **At Risk:** Dependency is moving but likely to miss date without intervention.
- **Escalated:** Leadership intervention is required.
- **Closed:** Success criteria achieved and evidence recorded.

---

## 10. Weekly Dependency Review Checklist

1. Confirm every open dependency has a named owner and date.
2. Verify critical-path dependencies have explicit confidence ratings.
3. Re-score dependencies where new evidence changed likelihood or impact.
4. Escalate high-risk dependencies with trigger and owner in writing.
5. Reflect dependency movement in risk register and weekly status update.

---

## 11. Copy/Paste Summary Snippets

### Weekly Pilot Update Snippet

`Dependency map update: [x] open, [y] at risk, [z] closed. Highest-risk dependency is [Dep ID] owned by [name], needed by [date]. Critical-path confidence is [High/Medium/Low].`

### Leadership Escalation Snippet

`Escalation request: Dependency [Dep ID] is [At Risk/Escalated] and threatens [timeline/KPI/client commitment]. Current blocker: [summary]. Owner: [name]. Decision/support needed by [date].`

---

_UniteCube - Northern Hokkaido Business Automation_
