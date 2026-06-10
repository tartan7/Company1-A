# Pilot Communication-Plan Template (v1)

*Date: 2026-04-26 / Version: 1.0*  
*Owner: CMO*

## 1. Purpose
Use this template to define the full pilot communication plan before launch, including who needs what information, when they receive it, how escalations happen, and how message quality is governed.
This is the source document for cadence setup, stakeholder updates, and escalation messaging.

---

## 2. Pilot and Plan Metadata

| Field | Value |
| :--- | :--- |
| Client Name | [Client Name] |
| Pilot Name / ID | [Pilot Name / ID] |
| Pilot Phase | Discovery / Build / Launch / Stabilization / Closeout |
| Plan Owner | [Name / Role] |
| Effective Start Date | YYYY-MM-DD |
| Planned End Date | YYYY-MM-DD |
| Primary Time Zone | [Time Zone] |
| Primary Language | [Language] |
| Last Updated | YYYY-MM-DD |
| Approval Status | Draft / Approved / Retired |

---

## 3. Communication Objectives

| Objective ID | Objective | Why It Matters | Primary Audience | Success Signal |
| :--- | :--- | :--- | :--- | :--- |
| CO-001 | Keep stakeholders aligned on pilot outcomes and progress. | Prevents mismatched expectations and late surprises. | Client sponsor + project owner | Weekly updates acknowledged and no unresolved expectation gaps. |
| CO-002 | Surface decisions and blockers early. | Protects delivery timelines and KPI integrity. | Decision owners + workstream leads | Decision SLA met and blocker aging trend is stable/down. |
| CO-003 | Preserve trust through consistent, evidence-based messaging. | Reduces escalation noise and ambiguity. | Client leadership + UniteCube leadership | Status confidence remains high and escalations include clear asks. |

---

## 4. Stakeholder Map

| Stakeholder | Role | Org | Information Needed | Decision Authority | Preferred Channel | Response SLA |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [Name] | Executive Sponsor | Client | Outcome trajectory, major risk, support requests | Strategic | Email + executive check-in | 1 business day |
| [Name] | Project Owner | Client | Weekly status, pending decisions, delivery variance | Operational | Chat + email | 4 business hours |
| [Name] | Ops Lead | Client | Workflow readiness, blockers, training impact | Operational | Chat | 4 business hours |
| [Name] | Account Lead | UniteCube | Commercial health, client confidence, escalation context | Shared | Chat + email | Same business day |
| [Name] | Delivery Lead | UniteCube | Daily execution, dependency status, incident triage | Execution | Chat | 2 business hours |

---

## 5. Message Matrix

| Message Type | Trigger | Audience | Channel | Owner | Required Content | Delivery SLA |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Daily execution update | End of delivery day | Core delivery team | Team channel | Delivery Lead | Progress, blockers, next 24h priorities | By local 18:00 |
| Weekly stakeholder update | Weekly checkpoint | Client and UniteCube stakeholders | Email + meeting notes | Account Lead | Status color, KPI snapshot, risks, decisions needed | Before weekly review |
| Decision request | Decision dependency logged | Named decision owner(s) | Email + channel tag | Account Lead | Decision statement, options, recommendation, due date, delay impact | Within 4 business hours of identification |
| Risk escalation alert | Escalation threshold crossed | Sponsor + leadership | Escalation channel + email | Account Lead + Delivery Lead | Severity, business impact, owner, mitigation, support ask, next update time | Within 60 minutes |
| Incident update | Active incident | Impacted stakeholders | Incident thread/bridge | Delivery Lead | Impact scope, start time, current state, ETA, next update time | First update within 30 minutes |
| Phase closeout summary | Pilot phase end | Sponsors + core team | Email + review deck | Account Lead | Goals met/missed, key learnings, open carryover actions | Within 3 business days |

---

## 6. Cadence and Governance Calendar

| Event | Frequency | Day / Time | Owner | Participants | Input Artifacts | Output Artifact |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Daily standup | Daily (Mon-Fri) | [HH:MM] | Delivery Lead | Delivery team + project owner | Action tracker, open blockers | Daily summary + owner actions |
| Weekly status review | Weekly | [Day HH:MM] | Account Lead | Stakeholders | KPI review, risk register, milestone plan | Stakeholder update note |
| Executive checkpoint | Biweekly | [Day HH:MM] | Account Lead | Executive sponsor + leadership | Weekly summaries, escalations, decisions | Executive actions + decision log entries |
| Risk review | Weekly | [Day HH:MM] | Delivery Lead | Risk owners | Risk register, mitigation tracker | Updated risk priorities + owners |
| Phase retrospective | Each phase close | [Date HH:MM] | CMO / Pilot Lead | Core team + sponsor | KPI outcomes, lessons log | Lessons + next-phase adjustments |

---

## 7. Escalation and Decision Protocol

| Severity | Definition | Initial Owner | Escalation Threshold | Escalation Path | Mandatory Contents |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Low | Minor issue with no immediate KPI/timeline risk | Delivery Lead | 48h unresolved | Delivery Lead -> Account Lead | Issue, owner, ETA |
| Medium | Risk to weekly outcomes or milestone confidence | Account Lead | 24h unresolved | Account Lead -> Project Owner -> Sponsor | Impact, mitigation, decision need |
| High | Immediate threat to pilot objective, SLA, or trust | Delivery Lead + Account Lead | 2h unresolved or customer-visible outage | Sponsor + UniteCube leadership | Severity, impact, options, recommendation, explicit ask, next update time |

Decision rule:
1. Each decision request must include owner, due date, recommendation, and impact if delayed.
2. Overdue decisions are escalated on the next business day (or immediately for high severity).
3. All material decisions are logged in the pilot decision log.

---

## 8. Plan Quality Standards

1. Every recurring message type has a named owner and SLA.
2. Every stakeholder with decision authority appears in the map and matrix.
3. Escalation path is explicit for medium and high severity risks.
4. Plan references the active cadence, stakeholder update, and escalation message templates.
5. Weekly governance review includes a communication effectiveness check.

---

## 9. Communication Effectiveness Scorecard (Weekly)

| Metric | Target | Actual | Status | Owner | Correction Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| On-time weekly update delivery | 100% | [%] | Green / Yellow / Red | Account Lead | [Action] |
| Decision SLA compliance | >=90% | [%] | Green / Yellow / Red | Project Owner | [Action] |
| Escalations with clear asks and owners | 100% | [%] | Green / Yellow / Red | Delivery Lead | [Action] |
| Stakeholder acknowledgment rate | >=90% | [%] | Green / Yellow / Red | Account Lead | [Action] |
| Open blockers without owner | 0 | [#] | Green / Yellow / Red | Delivery Lead | [Action] |

---

## 10. Copy/Paste Snippets

Weekly plan-health snippet:
`Communication plan health for [Pilot Name]: [Green/Yellow/Red]. This week: on-time updates [x/x], decision SLA [x%], overdue escalations [#]. Highest-priority communication fix: [action + owner + date].`

Decision request snippet:
`Decision needed: [topic]. Recommendation: [option]. Owner: [name]. Due: [date/time]. If delayed: [impact]. Context: [link].`

Escalation snippet:
`Escalation [Severity]: [issue]. Impact: [scope]. Owner: [name]. Current mitigation: [action]. Support needed: [explicit ask]. Next update by: [date/time].`

---

## 11. Related Templates

- `docs/PILOT-COMMUNICATION-CADENCE-TEMPLATE.md`
- `docs/PILOT-STAKEHOLDER-UPDATE-TEMPLATE.md`
- `docs/PILOT-RISK-ESCALATION-MESSAGE-TEMPLATE.md`
- `docs/PILOT-DECISION-LOG-TEMPLATE.md`

---

_UniteCube — Northern Hokkaido Business Automation_
