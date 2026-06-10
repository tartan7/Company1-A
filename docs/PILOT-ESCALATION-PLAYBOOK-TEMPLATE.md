# Pilot Escalation-Playbook Template (v1)

*Date: YYYY-MM-DD / Version: 1.0*
*Owner: CMO / Pilot Owner*
*Pilot: [Client Name / Pilot ID]*
*Playbook Coverage Window: [Phase / Date Range]*

## 1. Purpose
Use this playbook when pilot risks, incidents, or delivery blockers require timed escalation across delivery, leadership, and client stakeholders.
This template standardizes escalation triggers, decision paths, communication SLAs, and closure rules so escalation is fast, explicit, and auditable.

---

## 2. Escalation Snapshot

| Field | Value |
| :--- | :--- |
| Escalation Status | Ready / Active / Monitoring / Closed |
| Last Updated (UTC) | YYYY-MM-DD HH:MM |
| Escalation Owner | [Name / Role] |
| Command Lead (if active) | [Name / Role] |
| Current Highest Severity | Low / Medium / High / Critical |
| Linked Risk/Incident IDs | [R-XXX / KPI-YYYYMMDD-XX / DEC-XXX] |
| Next Checkpoint | YYYY-MM-DD HH:MM |

**Current Escalation Narrative (3-5 sentences):**  
[Summarize what is escalated, who is affected, current mitigation posture, and immediate decision need.]

---

## 3. Trigger Conditions and Activation Rules

Activate escalation when any condition is true:

1. `High` or `Critical` risk threatens KPI, timeline, scope, SLA, or client commitment.
2. Blocker exceeds SLA without an approved recovery path.
3. More than one medium-severity issue is active with compounding impact.
4. Budget, policy, or cross-team decision is required within a defined decision window.
5. Client trust or contractual outcome is at risk based on current evidence.

**Activation Timestamp (UTC):** YYYY-MM-DD HH:MM  
**Activated By:** [Name / Role]  
**Activation Channel:** Slack / Email / Meeting / Ticket

---

## 4. Severity Model and Decision Windows

| Severity | Pilot Impact Definition | First Response SLA | Decision Window | Escalation Path |
| :--- | :--- | :--- | :--- | :--- |
| Critical | Immediate threat to pilot continuity, launch, or client commitment | <= 15 minutes | <= 1 hour | Incident/Escalation Owner -> CMO -> Executive Sponsor + Client Sponsor |
| High | Significant degradation with near-term business impact | <= 1 hour | <= 4 hours | Escalation Owner -> CMO -> Delivery Leadership |
| Medium | Controlled impact, still requires managed intervention | <= 4 hours | <= 1 business day | Workstream Lead -> Escalation Owner |
| Low | Localized risk with limited immediate impact | <= 1 business day | <= 2 business days | Workstream Lead |

**Assigned Severity:** [Critical / High / Medium / Low]  
**Severity Rationale (2-3 sentences):** [Why this level is selected using measurable impact.]

---

## 5. Escalation Matrix (Who Decides What)

| Decision Type | Primary Decision Owner | Backup Decision Owner | Consulted | Informed | Required By |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Scope adjustment | [Name / Role] | [Name / Role] | Delivery Lead, Client Owner | Exec + Workstreams | YYYY-MM-DD HH:MM |
| Timeline re-baseline | [Name / Role] | [Name / Role] | PMO, Ops Lead | Client Sponsor | YYYY-MM-DD HH:MM |
| Budget/resource exception | [Name / Role] | [Name / Role] | Finance, Delivery Lead | Executive Team | YYYY-MM-DD HH:MM |
| Client communication stance | [Name / Role] | [Name / Role] | CMO, Account Lead | Internal Team | YYYY-MM-DD HH:MM |
| Risk acceptance / deferment | [Name / Role] | [Name / Role] | Risk Owner, CMO | Sponsor | YYYY-MM-DD HH:MM |

---

## 6. Escalation Workflow

### Step 1 - Detect and Qualify (0-30 min)

1. Capture signal source and timestamp.
2. Validate impact with available evidence.
3. Assign provisional severity and owner.
4. Open escalation record and log linked IDs.

### Step 2 - Contain and Stabilize

1. Execute immediate containment action(s).
2. Confirm action owners and due times.
3. Publish first internal update within SLA.
4. Notify client when severity threshold requires it.

### Step 3 - Decide and Execute

1. Route to decision owner defined in matrix.
2. Present options, tradeoffs, and recommendation.
3. Log decision, timestamp, and approver.
4. Execute approved action plan with checkpoints.

### Step 4 - Recover and Close

1. Confirm impact is back within agreed tolerance.
2. Validate no unowned high-severity actions remain.
3. Send closure summary to all required audiences.
4. Capture lessons and preventive actions.

---

## 7. Communications Playbook

### Required Message Fields

- Escalation ID and linked risk/incident ID
- Severity and business impact statement
- Current mitigation and owner
- Decision/support needed
- Decision deadline and next update time
- Fallback/contingency if delayed

### Audience Matrix

| Audience | Channel | Trigger | Cadence While Active | Message Owner |
| :--- | :--- | :--- | :--- | :--- |
| Delivery Team | Team chat + standup | Any active escalation | At open + every checkpoint | Escalation Owner |
| Leadership | Escalation brief | High/Critical or strategic impact | At open, decision points, daily | CMO |
| Client Stakeholders | Email / call | Client KPI/timeline/SLA impact | At open + agreed cadence | Account Lead |

### Copy/Paste Internal Escalation Message

`Escalation [ESC-ID] opened for [Pilot]. Severity: [level]. Impact: [timeline/KPI/client commitment]. Mitigation in progress: [action/owner]. Decision needed from [owner] by [date/time]. Next update: [date/time].`

### Copy/Paste Client Escalation Message

`We are escalating [issue ID/title] due to [impact]. Active mitigation is [actions]. To protect agreed outcomes, we need [decision/input] by [date/time]. Next update will be provided by [date/time].`

---

## 8. Escalation Action Tracker

| Action ID | Category (Containment/Decision/Recovery) | Action | Owner | Priority | Due Date (UTC) | Status | Evidence / Link |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| EA-001 | Containment | [Action] | [Name] | High | YYYY-MM-DD HH:MM | Open | [Link] |
| EA-002 | Decision | [Action] | [Name] | High | YYYY-MM-DD HH:MM | Open | [Link] |
| EA-003 | Recovery | [Action] | [Name] | Medium | YYYY-MM-DD HH:MM | Open | [Link] |

---

## 9. Decision and Evidence Log

| Timestamp (UTC) | Decision / Update | Owner | Approved By | Evidence Link |
| :--- | :--- | :--- | :--- | :--- |
| YYYY-MM-DD HH:MM | [Decision summary] | [Name] | [Name] | [Link] |
|  |  |  |  |  |
|  |  |  |  |  |

---

## 10. Closure Criteria and Handoff

Close escalation only when all conditions are true:

1. Recovery target achieved for at least 2 consecutive checkpoints.
2. Critical and high-priority actions are closed or formally accepted with owner/date.
3. Required decisions are logged with approvers and rationale.
4. Internal and client closure communications are sent.
5. Preventive follow-up actions are assigned with due dates.

**Closure Decision:** Monitoring / Closed  
**Approved By:** [Name / Role]  
**Closure Timestamp (UTC):** YYYY-MM-DD HH:MM

---

## 11. Post-Escalation Improvements

| Improvement Item | Owner | Due Date | Success Metric | Status |
| :--- | :--- | :--- | :--- | :--- |
| Update trigger threshold based on observed false positives/negatives | [Name] | YYYY-MM-DD | Improved alert precision | Planned |
| Improve escalation routing and backup ownership coverage | [Name] | YYYY-MM-DD | No unowned escalations | Planned |
| Add preventive control to pilot operating model | [Name] | YYYY-MM-DD | Control active in checklist | Planned |

---

_UniteCube - Northern Hokkaido Business Automation_
