# Pilot Post-Mortem Template (v2)

*Post-Mortem Date: YYYY-MM-DD*  
*Incident / Pilot Event Date: YYYY-MM-DD*  
*Owner: CMO / Account Lead*  
*Client: [Client Name]*  
*Review Deadline: Within 5 business days of stabilization*

## 1. Purpose
Use this template after any significant pilot disruption, severe KPI miss, or customer-impacting failure. Capture objective facts, root causes, and accountable follow-through so the same class of failure does not repeat.

## 2. Event Classification

| Field | Value |
| :--- | :--- |
| Event Name | [Short title] |
| Event Type | Delivery Failure / Quality Escape / Data Failure / Platform Outage / External Dependency |
| Detection Date/Time (UTC) | YYYY-MM-DD HH:MM |
| Resolution Date/Time (UTC) | YYYY-MM-DD HH:MM |
| Total Duration | [e.g., 4h 20m] |
| Severity | Sev-1 / Sev-2 / Sev-3 |
| Incident Commander | [Name] |
| Scribe | [Name] |
| Post-Mortem Status | Draft / Under Review / Approved |

## 3. Executive Summary

- What happened: [2-3 sentence factual summary]
- Why it mattered: [Customer/business consequence]
- What caused it: [Most likely trigger + systemic contributor]
- What changed now: [Key mitigation or corrective move]

## 4. Scope and Impact

### Customer Impact

- Affected clients/accounts: [List]
- Observable customer impact: [What users/stakeholders experienced]
- Impact window: [Start -> end]
- Customer commitments missed: [SLA/KPI/launch/date]

### Business Impact

- Revenue/forecast impact: [Estimate and confidence]
- Delivery impact: [Hours lost, milestones delayed]
- Reputation/commercial risk: Low / Medium / High
- Regulatory/legal exposure (if any): [None or details]

## 5. Timeline of Facts (UTC)

Use confirmed facts only. Separate assumptions into Section 6.

| Time | Event | Source |
| :--- | :--- | :--- |
| YYYY-MM-DD HH:MM | [Detection signal observed] | [Log, dashboard, message link] |
| YYYY-MM-DD HH:MM | [Initial triage started] | [Evidence] |
| YYYY-MM-DD HH:MM | [Mitigation attempted] | [Evidence] |
| YYYY-MM-DD HH:MM | [Service stabilized] | [Evidence] |
| YYYY-MM-DD HH:MM | [Final resolution confirmed] | [Evidence] |

## 6. Root Cause Analysis

### 6.1 Cause Tree

| Cause Type | Category (People / Process / Data / Tech / External) | Cause Statement | Supporting Evidence | Confidence |
| :--- | :--- | :--- | :--- | :--- |
| Trigger | Tech | [Immediate initiating condition] | [Logs, records] | High / Medium / Low |
| Contributing | Process | [Condition that increased impact] | [Evidence] | High / Medium / Low |
| Systemic | Data | [Underlying recurring weakness] | [Evidence] | High / Medium / Low |

### 6.2 Five Whys (for primary systemic cause)

1. Why did [failure] happen? [Answer]
2. Why did that condition exist? [Answer]
3. Why was it not detected earlier? [Answer]
4. Why did safeguards fail? [Answer]
5. Why does this remain possible in current operating model? [Answer]

## 7. Response Effectiveness Review

### What Worked

1. [Effective response action]
2. [Effective response action]
3. [Effective response action]

### What Failed

1. [Response gap and consequence]
2. [Response gap and consequence]
3. [Response gap and consequence]

### Detection and Escalation Quality

- Time to detect: [Duration]
- Time to engage incident owner: [Duration]
- Time to customer communication: [Duration]
- Escalation path followed: Yes / No (if no, why)

## 8. Corrective and Preventive Action Plan (CAPA)

| Priority | Action | Type (Corrective / Preventive) | Owner | Due Date | Validation Method | Success Metric | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| High | [Action #1] | Corrective / Preventive | [Name] | YYYY-MM-DD | [Test/audit/rehearsal] | [Metric] | Planned |
| Medium | [Action #2] | Corrective / Preventive | [Name] | YYYY-MM-DD | [Method] | [Metric] | Planned |
| Low | [Action #3] | Corrective / Preventive | [Name] | YYYY-MM-DD | [Method] | [Metric] | Planned |

## 9. Communication Record

| Date/Time (UTC) | Audience | Channel | Message Summary | Sent By |
| :--- | :--- | :--- | :--- | :--- |
| YYYY-MM-DD HH:MM | [Client stakeholders] | Email / Call / Slack | [Summary] | [Name] |

## 10. Governance and Follow-Up

- Post-mortem approver: [Name]
- CAPA weekly review forum: [Meeting name]
- CAPA verification date: YYYY-MM-DD
- Next checkpoint owner: [Name]
- Linked artifacts: [Risk Register], [Decision Log], [Action Tracker], [Scope Change]

## 11. Leadership Readout (Copy/Paste Snippet)

`On YYYY-MM-DD, [event name] impacted [scope/client] for [duration]. The confirmed trigger was [trigger], amplified by [systemic contributor]. We restored stability by [action], and the CAPA plan now has named owners, due dates, and validation criteria. Client communication was completed on [date], and execution review is scheduled for [date].`

_UniteCube - Northern Hokkaido Business Automation_
