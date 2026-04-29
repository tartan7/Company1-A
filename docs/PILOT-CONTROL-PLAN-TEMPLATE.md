# Pilot Control Plan Template (v1)

*Date: YYYY-MM-DD / Version: 1.0*
*Owner: CMO / Delivery Lead*
*Pilot: [Client Name / Pilot ID]*
*Control Window: [Week X or Date Range]*

## 1. Purpose
Use this template to define the operating controls that keep pilot execution stable, auditable, and within agreed scope, timeline, and KPI boundaries.
The control plan aligns control ownership, monitoring cadence, breach thresholds, and escalation actions across pilot workstreams.

---

## 2. Control Plan Snapshot

| Field | Value |
| :--- | :--- |
| Overall Control Health | Controlled / Watch / Uncontrolled |
| Plan Approved By | [Name / Role] |
| Approval Date | YYYY-MM-DD |
| Last Reviewed | YYYY-MM-DD |
| Next Review | YYYY-MM-DD |
| Primary Control Owner | [Name / Role] |
| Escalation Owner | [Name / Role] |

**Current Control Narrative (3-5 sentences):**
[Summarize current control posture, key weak points, and immediate focus.]

---

## 3. Control Design Principles

1. Every critical pilot objective must have at least one preventive or detective control.
2. Each control must have one accountable owner and one measurable trigger/threshold.
3. Control checks must run on a fixed cadence and be evidence-backed.
4. Breach handling must include immediate containment, owner assignment, and a due date.
5. Controls remain open until validation proves the risk is reduced to an accepted level.

---

## 4. Control Register

| Control ID | Domain | Objective | Control Type (Preventive/Detective/Corrective) | Method | Trigger / Threshold | Check Cadence | Control Owner | Evidence Source | Breach Severity (Low/Med/High) | Current Status | Last Check | Next Check |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C-001 | Scope | Prevent unapproved feature expansion. | Preventive | Enforce scope-change request gate before backlog acceptance. | Any new scope item without approved request ID. | Weekly | Account Lead | Scope tracker + decision log | High | Active | YYYY-MM-DD | YYYY-MM-DD |
| C-002 | KPI Reliability | Detect KPI degradation before SLA breach. | Detective | Daily dashboard variance check against baseline. | Any KPI outside agreed tolerance for 2 consecutive checks. | Daily | Analytics Lead | KPI dashboard + anomaly log | High | Active | YYYY-MM-DD | YYYY-MM-DD |
| C-003 | Delivery Timeline | Keep milestone slippage within approved buffer. | Detective | Compare planned vs actual milestone completion. | Any milestone slips by more than 3 business days. | Twice weekly | Delivery Lead | Action tracker + milestone plan | Medium | Active | YYYY-MM-DD | YYYY-MM-DD |

---

## 5. Control Breach Response Matrix

| Breach Level | Definition | Required Response Time | Required Actions | Escalation Path | Closure Criteria |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Low | Isolated miss with limited business impact. | Within 2 business days | Log issue, assign owner, apply local fix. | Control Owner -> Delivery Lead | One successful follow-up check plus evidence logged. |
| Medium | Repeated miss or cross-workstream impact risk. | Within 1 business day | Open mitigation item, define containment + validation metric. | Delivery Lead -> CMO | Validation metric passes for agreed observation period. |
| High | Immediate risk to pilot objectives, SLA, or client trust. | Within 4 hours | Trigger escalation message, open remediation track, assign executive decision owner. | CMO -> Executive Sponsor | Executive decision applied and risk returned to accepted level. |

---

## 6. Weekly Control Review Agenda

Use this sequence during governance checkpoints:

1. Confirm all controls were checked on schedule since last review.
2. Review new breaches, near-misses, and repeated exceptions.
3. Validate that each open breach has owner, due date, and evidence link.
4. Re-score breach severity where impact or likelihood changed.
5. Approve control adjustments (thresholds, cadence, ownership) with decision IDs.

---

## 7. Control Exceptions Log

Track approved deviations from normal controls.

| Exception ID | Control ID | Exception Description | Business Rationale | Approved By | Start Date | End Date | Compensating Control | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| EX-001 | C-001 | Temporary intake of urgent request before formal scope review. | Needed to prevent client operations stoppage. | Executive Sponsor | YYYY-MM-DD | YYYY-MM-DD | Daily sponsor review until formal approval logged. | Open |

---

## 8. Control Effectiveness Scorecard

Rate each area monthly or at pilot phase-gates.

| Control Area | Coverage (1-5) | Timeliness (1-5) | Effectiveness (1-5) | Evidence Quality (1-5) | Overall Score | Improvement Action |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| Scope Control |  |  |  |  |  | [Action] |
| KPI Control |  |  |  |  |  | [Action] |
| Timeline Control |  |  |  |  |  | [Action] |
| Stakeholder Communication Control |  |  |  |  |  | [Action] |

Scoring guide:
1. `1-2`: Weak (high control risk; immediate redesign required)
2. `3`: Adequate (works but inconsistent)
3. `4-5`: Strong (reliable and evidence-backed)

---

## 9. Copy/Paste Summaries

### Weekly Stakeholder Update Snippet

`Control plan status this week: [Controlled/Watch/Uncontrolled]. New breaches: [count], closed breaches: [count], open high-severity breaches: [count]. Highest-priority control action: [Control ID + owner + due date].`

### Executive Escalation Snippet

`Control breach escalation: [Control ID] breached threshold [trigger] on [date]. Current risk: [scope/timeline/KPI/client impact]. Immediate containment is [action], and executive decision is required on [decision needed] by [date/time].`

---

## 10. Exit Criteria for Control Plan Phase

Control-plan setup for a pilot phase is complete only when:

1. All critical pilot objectives map to named controls in the register.
2. Every control has threshold, cadence, owner, and evidence source.
3. Breach response matrix is agreed with sponsor and delivery leadership.
4. Exceptions process and escalation path are documented and test-run once.
5. First weekly control review is completed with actions recorded.

---

_UniteCube - Northern Hokkaido Business Automation_
