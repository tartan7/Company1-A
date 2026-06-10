# Pilot Communication Cadence Template (v1)

*Date: 2026-04-24 / Version: 1.0*
*Owner: CMO*

## 1. Purpose
Use this template to define a clear communication rhythm for pilot delivery so decisions, risks, and performance updates are shared on time with the right stakeholders.
Set this cadence during kickoff and keep it active through pilot closeout.

---

## 2. Pilot Communication Setup

| Field | Value |
| :--- | :--- |
| Client Name | [Client Name] |
| Pilot Name | [Pilot Name] |
| Pilot Start Date | YYYY-MM-DD |
| Pilot End Date (Planned) | YYYY-MM-DD |
| UniteCube Account Lead | [Name] |
| Client Executive Sponsor | [Name] |
| Client Project Owner | [Name] |
| Primary Team Channel | [Slack / Teams / Email Alias] |
| Escalation Channel | [Channel + contact method] |
| Time Zone | [Time Zone] |

---

## 3. Stakeholder Directory

| Role | Name | Organization | Responsibility in Pilot | Preferred Channel | Response SLA |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Executive Sponsor | [Name] | Client | Strategic alignment and escalation decisions | Email / Call | 1 business day |
| Project Owner | [Name] | Client | Day-to-day prioritization and approvals | Chat / Email | 4 business hours |
| Ops Lead | [Name] | Client | Workflow adoption and frontline coordination | Chat | 4 business hours |
| Account Lead | [Name] | UniteCube | Delivery oversight and weekly reporting | Chat / Email | Same business day |
| Delivery Lead | [Name] | UniteCube | Build execution, blockers, and incident response | Chat | 2 business hours |

---

## 4. Communication Cadence Calendar

| Cadence Event | Frequency | Day / Time | Duration | Audience | Owner | Objective | Required Inputs | Outputs |
| :--- | :--- | :--- | :---: | :--- | :--- | :--- | :--- | :--- |
| Daily Standup | Daily (Mon-Fri) | [HH:MM] | 15 min | Delivery team + client project owner | Delivery Lead | Surface progress, blockers, and priorities for next 24h. | Yesterday status, open blockers, today's plan | Daily action list with owners |
| Weekly Status Review | Weekly | [Day, HH:MM] | 30 min | Project owner, ops lead, account lead | Account Lead | Review KPI trend, risks, and timeline confidence. | KPI dashboard, risk register, onboarding timeline | Weekly status summary and decisions |
| Executive Check-In | Biweekly | [Day, HH:MM] | 30 min | Executive sponsor + leadership | Account Lead | Confirm business outcomes, major risks, and support needed. | Weekly summaries, decision log | Sponsor decisions and escalations |
| Incident Triage | As needed (<24h trigger) | Trigger based | 30 min | Impacted workstream owners | Delivery Lead | Resolve active incidents or SLA threats quickly. | Incident details, impact, mitigation options | Incident action plan and ETA |
| Retrospective | Day 30 and pilot close | [Date, HH:MM] | 60 min | Core stakeholders | Account Lead | Evaluate outcomes and lock next-phase actions. | KPI results, feedback, open risks | 30-60 day action plan |

---

## 5. Channel and Response Rules

| Message Type | Channel | Expected Initial Response | Owner | Escalation Trigger | Escalate To |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Routine question | Team chat channel | 4 business hours | Project owner or delivery lead | No response in SLA window | Account lead |
| Decision request | Email + chat tag | 1 business day | Client project owner | Decision not made by due date | Executive sponsor |
| KPI performance concern | Weekly status thread | Same business day | Account lead | Two consecutive periods below target | Executive check-in |
| Pilot blocker | Team chat + incident thread | 2 business hours | Delivery lead | Blocker unresolved for 24h | Sponsor + UniteCube leadership |
| Incident / outage | Incident bridge | 30 minutes | Delivery lead | Severity High or customer-facing downtime | Executive sponsor + engineering lead |

---

## 6. Escalation Matrix

| Severity | Definition | First Response Owner | Escalation Time Threshold | Escalation Path |
| :--- | :--- | :--- | :--- | :--- |
| Low | Minor issue, no KPI or timeline impact. | Delivery Lead | 48h unresolved | Account Lead |
| Medium | Risk to weekly deliverables or adoption target. | Account Lead | 24h unresolved | Client Project Owner + Exec Sponsor |
| High | Immediate impact to go-live, business operations, or agreed SLA. | Delivery Lead + Account Lead | 2h unresolved | Executive Sponsor + UniteCube leadership |

---

## 7. Weekly Status Update Template (Copy/Paste)

`Pilot Week [#] Status: [Green/Yellow/Red]. This week we completed [milestones]. KPI snapshot: [KPI 1], [KPI 2], [KPI 3]. Key blocker: [blocker] owned by [owner], ETA [date/time]. Risks changed: [new/increased/reduced]. Decisions needed by [date]: [decision #1], [decision #2].`

---

## 8. Daily Standup Update Template (Copy/Paste)

`Yesterday: [completed items]. Today: [planned items]. Blockers: [blocker + owner + ETA]. Support needed from client: [request].`

---

## 9. Incident Alert Template (Copy/Paste)

`Incident Alert - [Severity]: [short description]. Impact: [users/workflow affected]. Start time: [YYYY-MM-DD HH:MM TZ]. Current status: [investigating/mitigating/resolved]. Owner: [name]. Next update by: [time].`

---

## 10. Decision Log

| Decision ID | Date | Decision Needed | Options Considered | Final Decision | Decision Owner | Effective Date | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| D-001 | YYYY-MM-DD | [Decision topic] | [Option A/B/C] | [Chosen option] | [Name] | YYYY-MM-DD |  |
| D-002 | YYYY-MM-DD | [Decision topic] | [Option A/B/C] | [Chosen option] | [Name] | YYYY-MM-DD |  |

---

## 11. Cadence Health Check (Weekly)

1. Confirm each scheduled meeting happened or was explicitly rescheduled.
2. Confirm all open blockers have owners and ETA in writing.
3. Confirm pending decisions have due dates and escalation owners.
4. Confirm KPI updates were shared before the weekly review.
5. Confirm sponsor visibility is current (no stale executive update beyond 10 business days).

---

_UniteCube — Northern Hokkaido Business Automation_
