# FR Risk Register Update Cadence Template (v1)

- Date: YYYY-MM-DD
- Version: 1.0
- Owner: Product Governance Lead
- Review Cadence: Weekly Delivery Review + Monthly Governance Review

## Purpose

Use this template to run a predictable update rhythm for the FR risk register so risk changes are surfaced early, scored consistently, and escalated on time.
This cadence template defines who updates the register, when updates happen, what evidence is required, and how decisions are communicated.

## Usage Rules

1. Update the FR risk register at least once per week, even when no score changes occur.
2. Record any material risk change (new risk, score increase, owner change, missed mitigation date) within 1 business day.
3. Every `High` risk must have a named mitigation owner, target date, and next review date.
4. Monthly governance review must include trend summary and unresolved escalations.
5. Keep historical entries append-only; do not delete prior risk rows.

## Cadence Setup

| Field | Value |
| :--- | :--- |
| Program Name | [Program / Portfolio Name] |
| Time Zone | [Time Zone] |
| Risk Register Source | [Doc or Sheet URL] |
| Update Owner | [Name / Role] |
| Governance Chair | [Name / Role] |
| Escalation Channel | [Channel + contact path] |
| Executive Escalation SLA | [e.g., same day for High risk] |
| Effective Start Date | YYYY-MM-DD |

## FR Risk Update Calendar

| Cadence Event | Frequency | Day / Time | Owner | Participants | Objective | Required Inputs | Output |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Risk Intake Sweep | Daily (Mon-Fri) | [HH:MM] | FR Operations Owner | Feature owners, delivery leads | Capture newly observed FR risks and triage severity. | Incident notes, blocker reports, delivery updates | New/updated candidate risk rows |
| Risk Register Refresh | Weekly | [Day, HH:MM] | Update Owner | FR workstream owners | Re-score active risks and update mitigation progress. | Current register, KPI deviations, dependency status | Updated risk scores, owners, dates |
| Risk Triage Huddle | Weekly | [Day, HH:MM] | Product Governance Lead | Update owner + impacted workstreams | Resolve conflicting scoring and finalize priority bands. | Weekly refresh output | Approved weekly risk state |
| Escalation Review | Weekly (or trigger-based) | [Day, HH:MM] | Governance Chair | Sponsor, leads for High risks | Decide actions for risks above thresholds or overdue mitigations. | High-risk list, missed dates, blocker evidence | Escalation decisions + action owners |
| Governance Summary | Monthly | [Day, HH:MM] | Product Governance Lead | Leadership + finance/ops stakeholders | Review trendline, accepted risks, and unresolved exposure. | 4-week risk trend and escalation log | Governance minutes and next-month directives |

## Trigger-Based Update Rules

Update outside scheduled cadence when any trigger occurs:

1. New risk identified with expected score `>= 8`.
2. Existing risk score increases by `3+` points.
3. Any risk enters `High` band (`15-25`).
4. Mitigation target date passes without completion.
5. A dependency blocker lasts more than 2 business days.

## Priority and Response SLA

| Priority Band | Score | Initial Update SLA | Mitigation Plan SLA | Escalation Requirement |
| :--- | :---: | :--- | :--- | :--- |
| High | 15-25 | Same business day | Within 1 business day | Mandatory weekly escalation review until risk trend decreases |
| Medium | 8-14 | Within 1 business day | Within 3 business days | Escalate if no downward trend across 2 consecutive weekly reviews |
| Low | 1-7 | Within 3 business days | Within 5 business days | No escalation unless trigger-based conditions fire |

## Weekly Risk Review Agenda (30 Minutes)

1. Validate newly logged FR risks since previous review.
2. Re-score top active risks based on latest evidence.
3. Confirm mitigation progress and update target dates.
4. Identify overdue actions and set recovery owners.
5. Confirm escalation list and decision requests for leadership.

## Monthly Governance Review Agenda (45 Minutes)

1. Review aggregate risk trend: total active, by priority, and by workstream.
2. Confirm status of prior month escalations and decisions.
3. Decide on risk acceptance, added controls, or scope/timeline adjustments.
4. Approve cross-functional asks needed to reduce top residual risks.
5. Lock actions and owners for the next monthly cycle.

## Update Log Template

| Update ID | Update Date (UTC) | Cadence Event | Risks Added | Risks Re-Scored | Risks Escalated | Overdue Mitigations | Owner | Notes |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| FRR-2026-04-W4 | 2026-04-26 | Weekly Risk Register Refresh | 2 | 7 | 1 | 1 | Product Governance Lead | Worked example row |
| FRR-YYYY-MM-W# | YYYY-MM-DD | [Event Name] | [#] | [#] | [#] | [#] | [Name] | [Summary] |

## Escalation Request Template (Copy/Paste)

`FR Risk Escalation: [Risk ID] is [Priority] (score [LxI=Score]) and remains unresolved after [n] review cycles. Business impact: [timeline/KPI/compliance impact]. Decision/action requested: [resource/scope/timeline] by [YYYY-MM-DD]. Owner: [Name].`

## Weekly Summary Template (Copy/Paste)

`FR Risk Weekly Summary ([Week]): Active risks [x] ([h] high / [m] medium / [l] low). New this week: [n]. Increased score: [risk IDs]. Mitigations overdue: [risk IDs]. Escalations raised: [risk IDs + asks]. Next review: [YYYY-MM-DD].`

## Cadence Health Checklist

1. Confirm at least one register update occurred this week.
2. Confirm all High risks have owner, mitigation date, and next review date.
3. Confirm overdue mitigations have recovery owner and ETA.
4. Confirm escalation decisions were recorded in governance artifacts.
5. Confirm monthly summary includes risk trend and unresolved asks.

_UniteCube - Northern Hokkaido Business Automation_
