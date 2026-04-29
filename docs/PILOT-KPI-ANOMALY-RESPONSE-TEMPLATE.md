# Pilot KPI Anomaly Response Template (v1)

*Incident ID: KPI-YYYYMMDD-XX*
*Detected At (UTC): YYYY-MM-DD HH:MM*
*Prepared Date: YYYY-MM-DD*
*Incident Owner: [Name / Role]*
*Client: [Client Name]*

## 1. Purpose
Use this template when pilot KPI performance deviates materially from expected ranges. The goal is to classify anomaly severity quickly, assign owners, communicate consistently, and close incidents with clear learnings.

---

## 2. Anomaly Snapshot

| Field | Value |
| :--- | :--- |
| KPI Name | [Example: Lead-to-MQL Conversion Rate] |
| Baseline / Expected Range | [Value or range] |
| Current Observed Value | [Value] |
| Variance (%) | [Formula/result] |
| Detection Source | Dashboard / Alert / Manual Review |
| First Detection Time | YYYY-MM-DD HH:MM |
| Detection Owner | [Name] |
| Current Status | Open / Mitigating / Monitoring / Closed |

---

## 3. Anomaly Classification

Select one primary anomaly type and any secondary tags.

- **Performance Drop:** KPI below threshold (conversion, volume, revenue, SLA, etc.)
- **Performance Spike:** Sudden KPI increase that may indicate quality or attribution issues
- **Data Integrity:** Tracking gaps, delayed sync, schema mismatch, duplicate data
- **Operational Failure:** Automation/workflow outage, queue backlog, processing delays
- **External Factor:** Seasonality shock, platform outage, client-side operational change

**Primary Classification:** [Select one]

**Secondary Tags (optional):** [Data / Process / People / Technology / External]

---

## 4. Severity Level and Response SLA

| Severity | Definition | Example Trigger | First Internal Response SLA | Client Notification SLA | Escalation Path |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Sev-1 Critical | Immediate high business impact or service interruption | KPI drop >40% within 24h or workflow outage >1h | 15 minutes | 30 minutes | Incident Owner -> CMO -> CTO/CEO |
| Sev-2 High | Significant impact with active degradation | KPI drop 20-40% over 24-72h | 1 hour | 2 hours | Incident Owner -> CMO |
| Sev-3 Medium | Noticeable drift with controlled impact | KPI drop 10-20% trend for 3+ days | 4 hours | Next business update (<=24h) | Incident Owner |
| Sev-4 Low | Minor variance, no immediate business risk | KPI drift <10%, low urgency | 1 business day | Optional in regular report | Incident Owner |

**Assigned Severity:** [Sev-1 / Sev-2 / Sev-3 / Sev-4]

**Reason for Severity Selection (2-3 sentences):**
[Explain impact + urgency + confidence level]

---

## 5. Owner Assignment and RACI

| Workstream | Responsible (R) | Accountable (A) | Consulted (C) | Informed (I) |
| :--- | :--- | :--- | :--- | :--- |
| Incident Command | [Name] | [Name] | [Role] | [Roles] |
| Data Validation | [Name] | [Name] | [Role] | [Roles] |
| Channel/Workflow Remediation | [Name] | [Name] | [Role] | [Roles] |
| Client Communication | [Name] | [Name] | [Role] | [Roles] |
| Post-Incident Review | [Name] | [Name] | [Role] | [Roles] |

---

## 6. Immediate Actions (First Response)

Complete within the severity SLA window.

| Step | Action | Owner | Due By | Status | Evidence / Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Acknowledge alert and open incident record | [Name] | YYYY-MM-DD HH:MM | Not Started / In Progress / Done | [Link] |
| 2 | Verify data quality (tracking, ETL, attribution, duplicates) | [Name] | YYYY-MM-DD HH:MM | Not Started / In Progress / Done | [Link] |
| 3 | Isolate likely root cause domain (data/process/channel/external) | [Name] | YYYY-MM-DD HH:MM | Not Started / In Progress / Done | [Link] |
| 4 | Apply immediate containment (pause budget, rollback workflow, traffic reroute) | [Name] | YYYY-MM-DD HH:MM | Not Started / In Progress / Done | [Link] |
| 5 | Publish initial stakeholder update | [Name] | YYYY-MM-DD HH:MM | Not Started / In Progress / Done | [Link] |

---

## 7. Communication Protocol

### Internal Stakeholder Matrix

| Audience | Channel | Trigger | Message Owner | Cadence |
| :--- | :--- | :--- | :--- | :--- |
| Delivery Team | Slack / Standup | Incident opened | Incident Owner | At open + every SLA checkpoint |
| Leadership (CMO/Exec) | Slack / Email | Sev-1/Sev-2 or major client risk | Incident Owner / CMO | At open, mitigation, closure |
| Technical Team | Slack / Ticket | Suspected technical root cause | Tech Lead | As needed until stable |

### Client Communication Rules

- **When to notify:** Immediately for Sev-1/Sev-2; within next business update for Sev-3; periodic summary for Sev-4.
- **What to include:** Impact, current status, mitigation underway, expected next update time, owner contact.
- **What to avoid:** Unverified root-cause claims or speculative recovery dates.

### Client Update Template (Copy/Paste)

`We detected an anomaly in [KPI Name] at [time]. Current impact is [impact summary]. We have initiated mitigation actions including [action]. Next update will be shared by [time]. Incident owner: [name/contact].`

---

## 8. Investigation and Root Cause Log

| Timestamp (UTC) | Observation / Hypothesis | Evidence | Decision | Owner |
| :--- | :--- | :--- | :--- | :--- |
| YYYY-MM-DD HH:MM | [Observation] | [Data source] | [Action taken] | [Name] |
|  |  |  |  |  |
|  |  |  |  |  |

---

## 9. Closure Criteria

All criteria must be met before marking incident closed.

- KPI returns to defined acceptable range for [X] consecutive measurement intervals.
- Data pipeline/tracking integrity validated and documented.
- Containment and corrective actions deployed and verified.
- Client/internal stakeholders receive closure summary.
- Follow-up actions and owners recorded with due dates.

**Closure Decision:** Open / Monitoring / Closed

**Closure Approved By:** [Name / Role]

**Closure Time (UTC):** YYYY-MM-DD HH:MM

---

## 10. Post-Incident Review

Complete within 3 business days of closure.

| Section | Notes |
| :--- | :--- |
| Incident Summary | [What happened + impact] |
| Confirmed Root Cause | [Primary and contributing factors] |
| Time to Detect | [Duration] |
| Time to Mitigate | [Duration] |
| Time to Recover | [Duration] |
| What Worked Well | [Response strengths] |
| What Failed / Gaps | [Process or tooling gaps] |
| Preventive Actions | [Action + owner + due date] |
| Monitoring Improvements | [Alert/threshold/dashboard changes] |

### Post-Incident Action Tracker

| Priority | Action | Owner | Due Date | Success Metric | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| High | [Action #1] | [Name] | YYYY-MM-DD | [Metric] | Planned |
| Medium | [Action #2] | [Name] | YYYY-MM-DD | [Metric] | Planned |
| Low | [Action #3] | [Name] | YYYY-MM-DD | [Metric] | Planned |

---

_UniteCube - Northern Hokkaido Business Automation_
