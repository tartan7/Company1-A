# Pilot Continuity-Plan Template (v1)

*Date: YYYY-MM-DD / Version: 1.0*
*Owner: CMO / Delivery Lead*
*Pilot: [Client Name / Pilot ID]*
*Continuity Window: [Date Range or Phase]*

## 1. Purpose
Use this template to keep pilot delivery operational during disruptions that could impact timeline, KPIs, staffing, systems, or stakeholder confidence.
The continuity plan defines triggers, fallback modes, recovery targets, and ownership so the pilot can continue with controlled impact.

---

## 2. Continuity Snapshot

| Field | Value |
| :--- | :--- |
| Overall Continuity Status | Ready / Watch / Activated / Recovering |
| Plan Approval Date | YYYY-MM-DD |
| Plan Approved By | [Name / Role] |
| Last Test Date | YYYY-MM-DD |
| Next Test Date | YYYY-MM-DD |
| Continuity Lead | [Name / Role] |
| Client Counterpart | [Name / Role] |
| Escalation Owner | [Name / Role] |

**Current Continuity Narrative (3-5 sentences):**
[Summarize top disruption risks, readiness posture, and immediate resilience priorities.]

---

## 3. Scope, Assumptions, and Recovery Targets

| Item | Details |
| :--- | :--- |
| In Scope | [Workflows, systems, teams, and commitments covered] |
| Out of Scope | [Explicit exclusions] |
| Operating Assumptions | [Critical assumptions required for continuity] |
| Minimum Viable Service Level | [Definition of "pilot still running"] |
| Recovery Time Objective (RTO) | [Target max downtime, e.g., <= 8 hours] |
| Recovery Point Objective (RPO) | [Max acceptable data loss window] |
| KPI Degradation Tolerance | [Permitted temporary KPI drop threshold] |

---

## 4. Disruption Scenario Register

| Scenario ID | Scenario | Trigger Signal | Impacted Area | Severity (Low/Med/High) | Initial Owner | Detection Method | Current Readiness |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| S-001 | Key owner unavailable | No response > SLA and no delegate active | Governance / Decisions | High | Delivery Lead | Daily owner check | Partial |
| S-002 | Core integration failure | Data sync or automation fails for > 2 cycles | KPI Reporting / Operations | High | Engineering Lead | Monitoring alerts | Ready |
| S-003 | Client dependency delay | Approval/data access missed by committed date | Timeline / Scope | Medium | Account Lead | Dependency tracker review | Partial |
| S-004 | Tool/platform outage | Critical tool unavailable > 60 minutes | Execution workflows | High | Ops Lead | Incident monitoring | Ready |

---

## 5. Continuity Strategies by Scenario

| Scenario ID | Continuity Strategy | Temporary Service Mode | Owner | Start Trigger | Max Duration | Exit Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| S-001 | Activate backup decision-maker roster and re-route approvals. | Delegated governance | CMO | Owner unresponsive past SLA | 5 business days | Primary owner returns or replacement approved |
| S-002 | Switch to manual data intake and validation control checks. | Manual fallback operations | Engineering Lead | 2 failed sync cycles | Until fix verified | Automated flow stable for 2 consecutive cycles |
| S-003 | Re-sequence milestones and execute dependency workaround scope. | Contained-scope delivery | Account Lead | Dependency due-date miss | 10 business days | Dependency restored and timeline re-baselined |
| S-004 | Use approved backup tool/process and log manual evidence. | Alternate platform mode | Ops Lead | Platform outage threshold exceeded | Until service restored | Primary platform stable and reconciled |

---

## 6. Activation and Escalation Protocol

### Activation Thresholds

Activate this continuity plan when any of the following occur:

1. A high-severity disruption threatens delivery or KPI commitments.
2. Recovery cannot be completed within standard incident runbook time.
3. More than one medium-severity disruption is active simultaneously.
4. Executive/client decision is required to preserve pilot commitments.

### Activation Steps

1. Declare status as `Activated` and timestamp the continuity event.
2. Assign incident owner and continuity scribe.
3. Confirm scenario ID, continuity strategy, and service mode.
4. Notify internal and client stakeholders using defined channels.
5. Open action tracker items with owners and due dates.
6. Run checkpoint cadence until recovery exit criteria are met.

### Escalation Matrix

| Severity | Decision Window | Escalation Path | Required Outcome |
| :--- | :--- | :--- | :--- |
| Low | Within 1 business day | Workstream Lead -> Delivery Lead | Containment action assigned and tracked |
| Medium | Within 4 hours | Delivery Lead -> CMO | Recovery strategy approved with owner/date |
| High | Within 1 hour | CMO -> Executive Sponsor / Client Sponsor | Decision logged and continuity mode confirmed |

---

## 7. Roles and Coverage Roster

| Role | Primary Owner | Backup Owner | Coverage Window | Handoff Rule |
| :--- | :--- | :--- | :--- | :--- |
| Continuity Lead | [Name] | [Name] | [Hours/Timezone] | Backup assumes after missed SLA + escalation ping |
| Delivery Coordination | [Name] | [Name] | [Hours/Timezone] | Shift handoff logged in action tracker |
| Technical Response | [Name] | [Name] | [Hours/Timezone] | Incident ownership transferred with status snapshot |
| Client Communications | [Name] | [Name] | [Hours/Timezone] | Backup sends updates if primary unavailable > 2 hours |

---

## 8. Continuity Action Tracker (Live)

| Action ID | Scenario ID | Action | Owner | Priority | Start Date | Due Date | Status | Evidence / Link | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| CA-001 | S-002 | Enable manual validation checklist for all inbound records. | Engineering Lead | High | YYYY-MM-DD | YYYY-MM-DD | Open | [Link] |  |
| CA-002 | S-001 | Confirm delegated approver and notify all workstream leads. | CMO | High | YYYY-MM-DD | YYYY-MM-DD | Open | [Link] |  |

---

## 9. Communication Plan During Activation

| Audience | Channel | Cadence | Owner | Required Content |
| :--- | :--- | :--- | :--- | :--- |
| Internal delivery team | Team chat + standup | At activation, then daily | Continuity Lead | Status, active scenario, owner actions, blockers |
| Executive leadership | Escalation brief | At activation + checkpoint cadence | CMO | Impact, decisions needed, recovery ETA |
| Client stakeholders | Email / call | At activation + agreed cadence | Account Lead | Service mode, expected impact, mitigation, next update time |

---

## 10. Validation, Testing, and Recovery Exit

### Readiness Test Schedule

| Test Type | Frequency | Owner | Evidence |
| :--- | :--- | :--- | :--- |
| Scenario tabletop exercise | Monthly or phase gate | Continuity Lead | Meeting notes + action log |
| Technical failover drill | Quarterly or before go-live risk window | Engineering Lead | Drill results + defects |
| Communications drill | Monthly | Account Lead | Message log + response timing |

### Recovery Exit Criteria

Continuity mode can close only when all conditions are true:

1. Primary service mode restored or accepted alternative is approved.
2. Critical actions are complete with evidence links.
3. KPI performance returns within agreed tolerance for 2 cycles.
4. No unowned high-severity risks remain open.
5. Stakeholders receive closure summary and next monitoring plan.

**Continuity Decision:** Remain Activated / Recovering / Closed  
**Approved By:** [Name / Role]  
**Decision Date:** YYYY-MM-DD

---

## 11. Post-Event Improvements

| Improvement Item | Owner | Due Date | Success Metric | Status |
| :--- | :--- | :--- | :--- | :--- |
| Update scenario definitions based on event evidence | [Name] | YYYY-MM-DD | Revised register published | Planned |
| Add preventive control to reduce recurrence likelihood | [Name] | YYYY-MM-DD | Control approved and active | Planned |
| Update training / runbook artifacts | [Name] | YYYY-MM-DD | New version adopted by team | Planned |

---

## 12. Copy/Paste Summary Snippets

### Activation Message Snippet

`Continuity plan activated for [Pilot Name] due to [Scenario ID / trigger]. Current service mode is [mode], primary impact is [scope/timeline/KPI], and recovery owner is [name]. Next checkpoint is [date/time].`

### Recovery Progress Snippet

`Continuity recovery update: [X/Y] critical actions complete, [count] high-priority items remain, and KPI impact is [current state]. Estimated return to normal mode: [date/time], pending [dependency/decision].`

### Closure Message Snippet

`Continuity event [ID] closed on [date]. Primary trigger was [cause], service continuity was maintained at [service level], and preventive improvements are assigned with due dates in the post-event tracker.`

---

_UniteCube - Northern Hokkaido Business Automation_
