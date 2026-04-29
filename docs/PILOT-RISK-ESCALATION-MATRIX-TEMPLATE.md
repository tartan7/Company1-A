# Pilot Risk-Escalation Matrix Template (v1)

*Date: YYYY-MM-DD / Version: 1.0*
*Owner: CMO / Pilot Owner*
*Pilot: [Client Name / Pilot ID]*
*Coverage Window: [Phase / Date Range]*

## 1. Purpose
Use this template to define exactly when pilot risks move from local ownership to leadership escalation, who is accountable at each level, and how fast decisions are required.

This matrix is designed to remove ambiguity during time-sensitive pilot issues and to keep escalation decisions auditable.

---

## 2. How To Use This Template

1. Link each risk row to a `Risk ID` from the pilot risk register.
2. Set the escalation level using evidence (KPI, timeline, SLA, compliance, client impact).
3. Assign one primary escalation owner and one backup owner per row.
4. Confirm response and decision SLAs are realistic for the current pilot phase.
5. Update this matrix whenever thresholds, ownership, or client commitments change.

---

## 3. Escalation Levels

| Level | Severity Intent | Typical Trigger Type |
| :--- | :--- | :--- |
| L1 | Team-managed risk; no leadership decision needed yet | Local delivery variance, reversible within team |
| L2 | Managed risk requiring cross-workstream coordination | Shared dependency delay, multi-team mitigation |
| L3 | Leadership escalation required | Material KPI/timeline/client-confidence impact |
| L4 | Executive/client-critical escalation | Threat to pilot continuity, contractual outcome, or compliance |

---

## 4. Pilot Risk-Escalation Matrix

| Matrix ID | Linked Risk ID | Risk Scenario | Trigger Threshold (Escalate When...) | Escalation Level (L1-L4) | Business Impact Summary | Primary Escalation Owner | Backup Owner | First Response SLA | Decision SLA | Required Participants | Communication Channel | Required Artifacts To Update | Current Status | Last Updated (UTC) |
| :--- | :--- | :--- | :--- | :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| EM-001 | R-001 | CRM schema changes break ingestion | >= 2 failed imports in one business day OR attribution delay > 24h | L3 | KPI reporting and automation continuity at risk | Engineering Lead | Delivery Lead | <= 30 min | <= 4h | Eng Lead, Delivery Lead, CMO | Team chat + escalation brief | Risk register, mitigation tracker, decision log | Active | YYYY-MM-DD HH:MM |
| EM-002 | R-002 | User adoption falls below operating threshold | SOP compliance < 85% for 2 consecutive weeks | L2 | Data quality and adoption outcomes decline | Ops Lead | CMO | <= 4h | <= 1 business day | Ops, Enablement, Account Lead | Weekly review + leadership note | Risk register, action tracker | Monitoring | YYYY-MM-DD HH:MM |
| EM-003 | R-003 | Queue latency drives SLA miss exposure | Queue wait > 15 min for 3 days OR projected SLA miss > agreed threshold | L3 | SLA reliability and client trust risk | Automation Lead | Engineering Lead | <= 1h | <= 4h | Automation, Engineering, CMO | Team chat + incident room | Risk register, mitigation tracker, escalation log | Active | YYYY-MM-DD HH:MM |
| EM-004 | R-XXX | [Add scenario] | [Define measurable threshold] | L1-L4 | [Business impact] | [Name / Role] | [Name / Role] | [SLA] | [SLA] | [Participants] | [Channel] | [Artifacts] | Open | YYYY-MM-DD HH:MM |

---

## 5. Severity-to-Decision Guide

| Evidence Signal | Suggested Escalation Level | Decision Owner |
| :--- | :--- | :--- |
| No client-visible impact and recovery within team capacity | L1 | Workstream Lead |
| Cross-team recovery needed but no immediate contract risk | L2 | Delivery Lead |
| Material KPI/timeline/client-confidence impact likely without intervention | L3 | CMO / Pilot Owner |
| Immediate continuity/compliance/contract exposure | L4 | Executive Sponsor + Client Sponsor |

---

## 6. Escalation Activation Checklist

1. Confirm the trigger threshold is met and evidence is logged.
2. Confirm escalation level and assign primary/backup owners.
3. Open or update the escalation thread with decision deadline.
4. Notify required participants using the matrix channel.
5. Update linked artifacts listed in the matrix row.
6. Log decision outcome and next checkpoint timestamp.

---

## 7. Decision and Outcome Log

| Timestamp (UTC) | Matrix ID | Decision / Outcome | Decision Owner | Next Action | Next Update |
| :--- | :--- | :--- | :--- | :--- | :--- |
| YYYY-MM-DD HH:MM | EM-001 | [Decision summary] | [Name / Role] | [Action + owner] | YYYY-MM-DD HH:MM |
|  |  |  |  |  |  |

---

## 8. Weekly Governance Review Prompts

1. Are any matrix rows missing measurable thresholds?
2. Are response/decision SLAs being met at each escalation level?
3. Do any active risks require escalation level changes this week?
4. Are backup owners available for all L3/L4 rows?
5. Were all required artifacts updated after each escalation decision?

---

_UniteCube - Northern Hokkaido Business Automation_
