# FR Hypothesis Revision Log Template (v1)

- Date: YYYY-MM-DD
- Version: 1.0
- FR ID / Name: FR-XX - [Feature request title]
- Linked Issue: [UNI-###](/UNI/issues/UNI-###)
- Owner: Product Governance Lead
- Contributors: Product, Engineering, Data, Support, Stakeholder Sponsor
- Review Cadence: Weekly FR Review + Pre-Release Go/No-Go

## Purpose

Use this template to log and govern revisions to FR hypotheses after intake or delivery has started.
A disciplined revision log keeps hypothesis changes explicit, evidence-backed, and auditable so teams do not silently shift success criteria mid-flight.

## Revision Logging Rules

1. Log every material hypothesis change as a new append-only row.
2. Do not edit prior rationale after sign-off; supersede with a new row.
3. Every revision must include trigger, evidence source, owner, and effective date.
4. If a revision changes scope, KPI target, timeline, or risk posture, update linked FR artifacts within 1 business day.
5. If confidence is `Low` and impact is `High`, escalate in the same working day.

## What Counts as a Hypothesis Revision

Capture changes to assumptions or predictions in these categories:

- Problem hypothesis: severity, frequency, or business criticality of the target pain.
- User behavior hypothesis: expected adoption, usage pattern, completion, or retention behavior.
- Outcome hypothesis: expected KPI direction, magnitude, or time-to-impact.
- Delivery hypothesis: expected implementation feasibility, timeline, dependency reliability.
- Operational hypothesis: expected support load, incident pattern, or mitigation effectiveness.

## FR Context Snapshot

| Field | Value |
| :--- | :--- |
| FR ID | [FR-XX] |
| FR Name | [Feature name] |
| Release Window (UTC) | YYYY-MM-DD to YYYY-MM-DD |
| Product Owner | [Name / Role] |
| Engineering Owner | [Name / Role] |
| Data Owner | [Name / Role] |
| Support Owner | [Name / Role] |
| Primary KPI(s) | [KPI + target] |
| Risk Tier | Low / Medium / High |

## Hypothesis Revision Log

| Revision ID | Logged Date (UTC) | Hypothesis ID | Hypothesis Area | Baseline Hypothesis | Revised Hypothesis | Revision Type (Clarify / Narrow / Expand / Replace / Retire) | Trigger | Evidence Summary | Confidence After Revision (Low / Medium / High) | Impact if Wrong (Low / Medium / High) | Decision Owner | Effective Date (UTC) | Status (Proposed / Approved / Rejected / Superseded) | Supersedes Revision ID | Required Follow-Ups | Linked Artifacts | Last Updated (UTC) | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| FHR-2026-04-001 | 2026-04-18 | FH-001 | Outcome | Activation rate will reach 65% by week 2 post-launch. | Activation rate target adjusted to 55% by week 2; 65% moved to week 6 checkpoint. | Replace | Early pilot telemetry and support friction show onboarding delay. | 2-week telemetry sample (n=410), support-tag review, walkthrough test notes. | Medium | High | Product Lead | 2026-04-22 | Superseded | N/A | Update KPI baseline doc, release-readiness checklist, and monthly impact summary thresholds. | Assumptions register, KPI dashboard, decision log | 2026-04-22 | Superseded by FHR-2026-05-002. |
| FHR-2026-05-002 | 2026-05-01 | FH-001 | Outcome | Activation rate target adjusted to 55% by week 2; 65% moved to week 6 checkpoint. | Activation rate will reach 58% by week 2 and 68% by week 6 after onboarding patch rollout. | Replace | Controlled onboarding patch reduced setup friction in pilot shadow cohort. | A/B cohort analysis, funnel step timing export, support follow-up trends. | Medium | Medium | Product Lead | 2026-05-03 | Approved | FHR-2026-04-001 | Update monthly impact target bands and release note assumptions section. | KPI dashboard, decision log, implementation handoff brief | 2026-05-03 | Worked supersede-chain example. |
| FHR-YYYY-MM-### | YYYY-MM-DD | FH-### | [Area] | [Prior statement] | [Revised statement] | [Type] | [What caused revision] | [Evidence link or short summary] | [L/M/H] | [L/M/H] | [Name/Role] | YYYY-MM-DD | Proposed | [Prior ID or N/A] | [Action + owner + due date] | [Doc links] | YYYY-MM-DD |  |

## Status Definitions

- Proposed: Submitted and awaiting governance decision.
- Approved: Accepted as current working hypothesis.
- Rejected: Not accepted; prior hypothesis remains active.
- Superseded: Previously approved row replaced by a newer approved revision.

## Supersede Rules

When a new approved revision replaces a prior approved revision:

1. Add new row with `Supersedes Revision ID` set to prior row.
2. Update prior row status from `Approved` to `Superseded`.
3. Preserve original rationale and evidence in the superseded row.
4. Reference linked issue/decision where replacement was confirmed.

## Revision Quality Checklist

Before moving a row to `Approved`:

1. Baseline and revised hypothesis are both specific and testable.
2. Trigger and evidence are explicit, dated, and linked.
3. Confidence and impact-if-wrong are calibrated realistically.
4. Follow-up actions include owner, due date, and success check.
5. All linked FR artifacts are listed for synchronization.

## Governance Review Prompts

Use these prompts during weekly review:

1. Which revisions were triggered by real evidence vs opinion?
2. Did revised hypotheses narrow uncertainty or move it elsewhere?
3. Are any approved revisions still missing artifact updates?
4. Which `High impact if wrong` hypotheses need earlier validation?
5. Which proposed revisions require escalation before release gates?

## Hypothesis-to-Artifact Sync Matrix

| If Revision Changes... | Must Update | Accountable Owner |
| :--- | :--- | :--- |
| KPI expectation or threshold | FR monthly impact summary + KPI dashboard thresholds | Data Owner |
| Scope or acceptance interpretation | FR implementation handoff brief + acceptance evidence index | Product Owner |
| Delivery feasibility/timeline assumption | FR release readiness checklist + dependency mapping | Engineering Owner |
| Risk profile | FR risk register + rollback/triage thresholds | Risk Owner |
| Stakeholder promise or externally-visible expectation | Change-impact one-pager + communication artifacts | Sponsor / Product Ops |

## Copy/Paste Update Snippets

### Weekly Issue Comment

`FR hypothesis revision log update for [FR-XX]: [x] proposed, [y] approved, [z] superseded revisions active this week. Highest-risk approved revision: [Revision ID + summary], owner [name], follow-up due [YYYY-MM-DD UTC]. Next action: [specific action + owner + due date].`

### Escalation Message

`Escalation for FR hypothesis revision [FHR-###] on [FR-XX]. Confidence remains [Low/Medium] while impact-if-wrong is [High], and release decisions depend on this assumption by [date UTC]. Decision/support needed from [owner/team] by [date/time UTC].`

_UniteCube - Feature Request Governance_
