# FR Assumptions Register Template (v1)

- Date: YYYY-MM-DD
- Version: 1.0
- FR ID / Name: FR-XX - [Feature request title]
- Linked Issue: [UNI-###](/UNI/issues/UNI-###)
- Owner: Product Governance Lead
- Contributors: Product, Engineering, Data, Support, Client Stakeholders
- Review Cadence: Weekly Delivery Review + Pre-Release Go/No-Go

## Purpose

Use this template to capture, validate, and retire assumptions that influence FR scope, delivery confidence, release safety, and expected outcomes.
A maintained assumptions register reduces avoidable surprises by forcing explicit validation owners, evidence, and response plans.

## Usage Rules

1. Log assumptions as soon as they affect scope, timeline, quality, rollout, KPI attainment, or support load.
2. Every assumption must have one accountable validation owner and one target validation date.
3. Update confidence, status, and downstream action in the same edit.
4. Any `Invalidated` high-impact assumption must route to risk/decision/action logs within 1 business day.
5. Keep historical assumption rows append-only; do not delete prior entries.

## What Counts as an FR Assumption

Capture assumptions across these categories:

- Business: expected value, stakeholder behavior, commercial constraints
- User: adoption, workflow fit, training sufficiency, behavior change
- Technical: performance, reliability, integration behavior, dependency stability
- Data: completeness, quality, latency, schema consistency
- Operational: support readiness, process adherence, escalation capacity
- Compliance/Security: policy coverage, control effectiveness, auditability

## FR Context Snapshot

| Field | Value |
| :--- | :--- |
| FR ID | [FR-XX] |
| FR Name | [Feature name] |
| Release Window (UTC) | YYYY-MM-DD to YYYY-MM-DD |
| Product Owner | [Name / Role] |
| Engineering Owner | [Name / Role] |
| Support Owner | [Name / Role] |
| Primary KPI(s) | [KPI name + target] |
| Risk Tier | Low / Medium / High |

## Assumptions Register

| Assumption ID | Date Logged (UTC) | Workstream | Assumption Statement | Category | Why It Matters | Evidence Available Today | Confidence (Low / Medium / High) | Validation Method | Validation Owner | Target Validation Date (UTC) | Status (Open / Validated / Invalidated / Retired) | Impact if Wrong (Low / Medium / High) | Response if Invalidated | Linked Artifacts | Last Updated (UTC) | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| FA-001 | YYYY-MM-DD | Adoption | At least 70% of targeted users will complete first-use setup within 7 days of launch. | User | Drives early activation KPI and support capacity assumptions. | Pilot interviews; no production baseline for this cohort. | Medium | Track activation funnel cohort + support-tag analysis for first 2 weeks. | Product Ops Lead | YYYY-MM-DD | Open | High | If invalidated, revise onboarding flow and update KPI forecast + support staffing. | KPI dashboard, onboarding spec, support runbook | YYYY-MM-DD | Seed row |
| FA-002 | YYYY-MM-DD | Integrations | Upstream data source will continue delivering complete records hourly during rollout month. | Data / Technical | Impacts SLA compliance and downstream automation reliability. | 60-day historical uptime report; one prior outage incident. | Medium | Add completeness checks + hourly alerting + incident drill. | Engineering Lead | YYYY-MM-DD | Open | High | If invalidated, activate queue fallback and staged processing with customer comms. | Dependency map, monitoring dashboard, incident playbook | YYYY-MM-DD |  |

## Status Definitions

- Open: Logged and awaiting sufficient validation evidence.
- Validated: Evidence supports assumption for current FR context.
- Invalidated: Evidence shows assumption is false or unreliable.
- Retired: No longer material due to scope, architecture, or release-plan change.

When status changes to `Invalidated`, create or update:

1. FR risk register entry (or score update)
2. FR decision log entry (if scope/timeline/tradeoff decision is required)
3. Action tracker item with owner and due date

## Confidence Calibration

Use this guide when setting confidence:

- High: Evidence is recent, repeated, and representative of release conditions.
- Medium: Partial evidence exists, but key release conditions are not yet proven.
- Low: Evidence is weak, outdated, anecdotal, or missing under release conditions.

## Validation Quality Checklist

Before moving an assumption to `Validated` or `Invalidated`:

1. Validation method is explicit, repeatable, and tied to a measurable outcome.
2. Evidence source is linked and dated.
3. Validation owner and target date are complete.
4. Impact and downstream response are documented.
5. Related FR artifacts (risk, decision, action, release notes) are synchronized.

## Weekly Review Agenda (30 Minutes)

1. Add new assumptions from incidents, blockers, review comments, and stakeholder feedback.
2. Reassess confidence for all `Open` assumptions using fresh evidence.
3. Prioritize validation of assumptions with `High` impact if wrong.
4. Convert invalidated assumptions into concrete mitigation actions.
5. Confirm top 3 assumptions to monitor before next milestone.

## Assumption-to-Action Routing Matrix

| Trigger | Required Follow-Up | Owner |
| :--- | :--- | :--- |
| Confidence drops to Low | Increase related risk score or add new risk entry. | Risk Owner |
| Assumption invalidated | Create mitigation action and escalation note if impact is High. | Workstream Owner |
| Assumption validated with scope impact | Log decision and update acceptance criteria/release plan. | Product Owner |
| Assumption retired | Add closure note and archive reference. | FR Owner |

## Copy/Paste Update Snippets

### Weekly Issue Comment

`FR assumptions register update for [FR-XX]: [x] active assumptions ([h] high-impact if wrong). This week: [n] validated, [m] invalidated, [r] retired. Highest-risk open assumption: [ID + summary], owner [name], validation due [date UTC]. Next action: [specific action + owner + due date].`

### Escalation Request

`Escalation requested for assumption [FA-###] on [FR-XX]. Current evidence invalidates or weakens the assumption and creates [timeline/KPI/quality/support] risk. Decision/support needed from [owner/team] by [date/time UTC].`

_UniteCube - Feature Request Release Operations_
