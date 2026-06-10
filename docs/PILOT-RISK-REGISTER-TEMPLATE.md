# Pilot Risk Register Template (v1)

*Date: YYYY-MM-DD / Version: 1.0*
*Owner: CMO / Delivery Lead*
*Pilot: [Client Name / Pilot ID]*

## 1. Purpose
Use this template to identify, score, and track pilot delivery risks before they become delivery blockers.
The risk register is the source of truth for prioritization, mitigation ownership, and escalation timing.

---

## 2. Usage Rules

1. Every risk must have one accountable `Owner` and one committed `Next Review Date`.
2. Every `High` priority risk must include both `Mitigation Plan` and `Contingency Plan`.
3. Update risk scores when new evidence appears, not only during weekly cadence.
4. Close risks only when rationale and residual exposure are documented in `Notes`.
5. Mirror any risk-response action in the mitigation tracker and action tracker.

---

## 3. Scoring Model

- **Likelihood (L):** Probability from 1 (`Rare`) to 5 (`Almost Certain`)
- **Impact (I):** Delivery/business impact from 1 (`Negligible`) to 5 (`Severe`)
- **Risk Score:** `L x I` (range: 1-25)
- **Priority Bands:**
1. `15-25`: High (mitigate immediately and prepare escalation)
2. `8-14`: Medium (mitigate and monitor weekly)
3. `1-7`: Low (monitor and reassess on change)

### Likelihood Scale

| Score | Label | Practical Interpretation |
| :--- | :--- | :--- |
| 1 | Rare | Unlikely during pilot window; no current indicators. |
| 2 | Unlikely | Possible but not expected; weak or isolated signal. |
| 3 | Possible | Could occur with current trajectory or dependencies. |
| 4 | Likely | Clear indicators suggest occurrence without intervention. |
| 5 | Almost Certain | Already recurring or expected imminently. |

### Impact Scale

| Score | Label | Practical Interpretation |
| :--- | :--- | :--- |
| 1 | Negligible | Minimal effort to recover; no KPI or timeline effect. |
| 2 | Minor | Small delivery disruption; manageable within team bandwidth. |
| 3 | Moderate | Noticeable KPI, scope, or schedule impact needing coordination. |
| 4 | Major | Significant delivery risk affecting timeline, KPI, or client trust. |
| 5 | Severe | Threatens pilot viability, contract outcome, or safety/compliance. |

---

## 4. Pilot Risk Register

| Risk ID | Date Logged | Workstream | Risk Statement | Cause / Trigger | Leading Indicator | L (1-5) | I (1-5) | Score | Priority | Mitigation Plan | Contingency Plan | Owner | Target Mitigation Date | Next Review Date | Status | Escalation Trigger | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| R-001 | YYYY-MM-DD | Data Integration | Source CRM export format changes and breaks ingestion. | Upstream vendor deploys schema update without notice. | Import validation warnings increase above baseline. | 4 | 4 | 16 | High | Add schema validation and daily import anomaly checks. | Switch to manual CSV fallback within 24h and freeze noncritical automation updates. | Engineering Lead | YYYY-MM-DD | YYYY-MM-DD | Open | 2 consecutive failed imports in one business day. | Initial seed row. |
| R-002 | YYYY-MM-DD | Adoption | Frontline users bypass the new workflow, reducing data quality. | Insufficient onboarding and unclear SOP accountability. | SOP audit compliance drops below 90%. | 3 | 4 | 12 | Medium | Run role-based retraining and weekly office hours. | Keep legacy process available for 2-week transition and assign floor support. | Ops Lead | YYYY-MM-DD | YYYY-MM-DD | Monitoring | Weekly compliance remains below 85% for 2 weeks. |  |
| R-003 | YYYY-MM-DD | Reliability | Automation run queue delays cause SLA misses during peak usage. | Retry storms and under-provisioned workers under load. | Queue wait time exceeds 15 minutes for 3 days. | 3 | 5 | 15 | High | Implement capped retries, queue alerts, and throughput tuning. | Route critical jobs to manual execution bridge until queue normalizes. | Automation Lead | YYYY-MM-DD | YYYY-MM-DD | Open | SLA miss risk exceeds agreed pilot threshold. |  |

---

## 5. Status Definitions

- **Open:** Risk identified and active; controls incomplete.
- **Monitoring:** Controls deployed; active observation ongoing.
- **Escalated:** Leadership intervention required due to score, blocker, or timeline.
- **Accepted:** Residual risk accepted by sponsor with rationale recorded.
- **Closed:** Risk no longer material for pilot scope.

---

## 6. Escalation Rules

Escalate risk items in governance channels when any condition is true:

1. Risk score enters or remains in `High` band for 2 consecutive reviews.
2. `Target Mitigation Date` is missed and no approved recovery plan exists.
3. A dependency outside pilot-team control blocks mitigation for more than 3 business days.
4. Two or more risks in the same workstream become `High` simultaneously.
5. A single risk threatens contractual timeline, KPI commitments, or compliance.

---

## 7. Weekly Review Checklist

1. Add newly observed risks from delivery, support, and stakeholder feedback.
2. Re-score active risks using current evidence and updated indicators.
3. Confirm each `High` risk has a mitigation owner and target date within 7 days.
4. Verify stale risks have refreshed `Next Review Date` and explicit progress notes.
5. Share top 3 risks, trend (up/down/stable), and escalation asks in weekly status update.

---

## 8. Summary Snippets

### Weekly Pilot Update Snippet

`Risk register: [x] active risks ([h] high, [m] medium, [l] low). New this week: [n]. Trending up: [risk IDs]. Escalated: [risk IDs + asks]. Next review date: [date].`

### Leadership Escalation Snippet

`Escalation request: Risk [Risk ID] in [Workstream] remains [Priority] with score [LxI=Score]. Current impact: [timeline/KPI/client risk]. Decision required: [resource/scope/timeline] by [date].`

---

_UniteCube - Northern Hokkaido Business Automation_
