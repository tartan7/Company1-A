# Pilot KPI Baseline Template (v1)

*Prepared Date: YYYY-MM-DD*
*Owner: CMO / Account Lead*
*Client: [Client Name]*
*Pilot: [Pilot Name / ID]*
*Baseline Window: [Example: Last 90 days or first 2 pilot weeks]*

## 1. Purpose
Use this template to define pilot KPI baselines before execution starts, so performance can be tracked against explicit targets and escalated consistently when variance exceeds tolerance.

---

## 2. Baseline Setup Checklist

Complete before pilot launch.

- KPI list is aligned to pilot objective and success criteria.
- Each KPI has one authoritative source of truth.
- Baseline window and measurement cadence are defined.
- A single owner is accountable per KPI.
- Validation method is documented and tested.
- Variance thresholds and escalation paths are agreed.

---

## 3. KPI Baseline Register

| KPI ID | KPI Name | Metric Definition | Unit | Baseline Value / Range | Target Value / Range | Source of Truth | Measurement Cadence | KPI Owner | Validation Method | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| KPI-001 | Qualified Lead Volume | Count of leads meeting agreed qualification rubric in a measurement interval. | Leads / week | 45-55 | 65+ | CRM report `Qualified_Leads` | Weekly (Mon 09:00 UTC) | Sales Ops Lead | Reconcile CRM totals vs dashboard totals; mismatch tolerance <=2%. | Seed example row. |
| KPI-002 | Lead-to-MQL Conversion Rate | `MQL count / total leads` for the same interval. | % | 12%-15% | >=18% | Analytics dashboard `Funnel_v2` | Weekly (Mon 09:00 UTC) | Growth Lead | Manual spot-check of 20 sampled leads per week. | Seed example row. |
| KPI-003 | First-Response SLA Attainment | % of inbound leads receiving first response within SLA window. | % | 70%-78% | >=90% | Helpdesk report `SLA_First_Response` | Daily (08:00 UTC) + Weekly rollup | Support Ops Lead | Compare helpdesk timestamps to workflow log exports. | Seed example row. |

---

## 4. Field Guidance

### Metric Definition

- Define the metric in one sentence with an explicit formula where applicable.
- Clarify included/excluded records (for example, internal tests, duplicates, or spam).

### Source of Truth

- Name the exact system, report, query, or dashboard tile.
- Include report name/version so the same source is reproducible across reviews.

### Measurement Cadence

- Specify frequency and reporting cut-off time in UTC.
- Ensure cadence matches decision rhythm (daily for operational control, weekly for executive review, etc.).

### Owner

- Assign one accountable owner role per KPI for data quality and explanation of changes.
- Backup contributors can be listed in Notes, but accountability remains singular.

### Validation Method

- Define how correctness is checked (reconciliation, spot sample, audit query, dual-system comparison).
- State tolerance limits and expected validator.

---

## 5. Variance Thresholds and Escalation Guidance

Use absolute and relative change from baseline, then apply the highest triggered severity.

| Severity | Variance Trigger (from baseline) | Typical Business Impact | Required Response Window | Escalation Path |
| :--- | :--- | :--- | :--- | :--- |
| Sev-1 Critical | >=40% adverse variance in one interval or complete data outage | Immediate pilot-goal risk | 30 minutes | KPI Owner -> CMO -> CTO/CEO + client sponsor update |
| Sev-2 High | 20%-39% adverse variance over 1-2 intervals | Significant delivery/performance risk | 2 hours | KPI Owner -> CMO |
| Sev-3 Medium | 10%-19% adverse variance over 2+ intervals | Early warning, manageable with corrective action | 1 business day | KPI Owner + workstream lead |
| Sev-4 Low | <10% variance and stable trend | Normal fluctuation, monitor only | Next scheduled review | KPI Owner |

Escalate immediately even below numeric thresholds when one of the following applies:

- Safety, compliance, or contractual obligations are at risk.
- Data integrity is uncertain (missing or duplicated records).
- Multiple KPIs degrade simultaneously from a shared root cause.

---

## 6. Baseline Sign-Off

| Role | Name | Decision (Approve / Revise) | Date | Comments |
| :--- | :--- | :--- | :--- | :--- |
| Account Lead | [Name] | Approve / Revise | YYYY-MM-DD |  |
| Delivery Lead | [Name] | Approve / Revise | YYYY-MM-DD |  |
| Data/Analytics Owner | [Name] | Approve / Revise | YYYY-MM-DD |  |
| Client Sponsor (if applicable) | [Name] | Approve / Revise | YYYY-MM-DD |  |

---

## 7. Weekly Baseline Maintenance

Run at least once per week:

1. Confirm source-of-truth artifacts still match production logic.
2. Re-validate one high-impact KPI and one operational KPI.
3. Check repeated variance patterns and log decisions in the pilot decision log.
4. Propose baseline updates only when structural changes occur (scope, instrumentation, or process shifts).
5. Record any approved baseline changes with effective date and rationale.

---

_UniteCube - Northern Hokkaido Business Automation_
