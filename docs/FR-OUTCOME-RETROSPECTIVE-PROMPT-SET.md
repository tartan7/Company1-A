# FR Outcome Retrospective Prompt Set (v1.1)

- Date: 2026-04-26 (UTC)
- Issue: [UNI-163](/UNI/issues/UNI-163)
- Prior baseline: `v1` first-run in `docs/FR-MONTHLY-RETROSPECTIVE-2026-04-FIRST-RUN.md`
- Owners: Product (facilitator), Engineering (implementation context), Support (field signal)
- Related docs:
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`
  - `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md`
  - `docs/FR-DECISION-LOG-TEMPLATE.md`
  - `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`

## Purpose

Use this prompt set to run a structured retrospective after an FR reaches a measurable post-release window.
Objective: evaluate actual business/user outcomes versus expected outcomes, identify causal drivers with explicit confidence, and route concrete follow-up actions.

## Select Session Mode First

Choose one mode before session setup:

1. `Single FR Deep-Dive`: one FR with deeper root-cause probing.
2. `Portfolio FR Review`: 2-5 FRs reviewed in one meeting with per-FR decision and threshold rows.

Record the selected mode in the output block.

## When To Run

Run this retrospective when all conditions are true:

1. FR(s) have a documented release decision record (or explicit gap noted as follow-up).
2. Minimum stability window has completed (default: 7 calendar days).
3. Initial usage/support signals are available.
4. Facilitator has links to source evidence (dashboard/export, ticket queue, decision log).

## Session Setup (5-10 min)

Use these prompts before discussion starts:

1. What exact FR decision(s) are we evaluating (scope and date)?
2. What was the expected user/business outcome at release time?
3. What is in-scope for this retro, and what is explicitly out-of-scope?
4. Which evidence sources are authoritative for this review?
5. What decision must be made by the end (`Close`, `Keep Monitoring`, `Adjust`, `Reopen`, `Rollback`)?

## Evidence Pack

### Standard Evidence Pack (Default)

Do not start retro discussion until this block is complete:

```md
- Metrics dashboard/export link:
- Incident timeline / postmortem link (or "none"):
- Support volume report link (tickets, escalations, tags):
- Release decision log entry link:
- Current FR status/health board link:
```

Standard minimum:

1. At least one quantitative metric source.
2. At least one user/support signal source.
3. Decision-log evidence from release time.

### First-Cycle Minimum Viable Evidence (MVE) Fallback

Use only for first or second monthly cycle when standard evidence does not yet exist.
If fallback is used, mark `Evidence Mode: MVE` in the output and create follow-up issues for missing sources.

MVE minimum:

1. At least one telemetry source (event dictionary, weekly extract, or dashboard seed).
2. At least one support signal source (triage report, tagged queue, escalation summary).
3. At least one governance source (decision log template/entry, release note, or runbook row).

## Prompt Set A: Outcome Reality Check

For each FR in scope:

1. Which expected outcomes happened exactly as predicted?
2. Which expected outcomes did not occur, and by how much?
3. Which unexpected positive outcomes appeared?
4. Which unexpected negative outcomes appeared?
5. What is the strongest evidence this FR created net value?
6. What is the strongest evidence this FR introduced net cost/risk?
7. Outcome confidence for this FR: `High`, `Medium`, or `Low`?

## Prompt Set B: Causality and Drivers

For each FR in scope:

1. What are the top 3 factors that most explain observed outcome?
2. For each factor, what evidence supports likely causation versus correlation?
3. Which delivery decisions amplified positive impact?
4. Which delivery decisions reduced impact or increased operational burden?
5. Where did assumptions fail, and what assumption quality check was missing?
6. Which dependencies (people/process/tech/data/external) had the largest effect?
7. Causality confidence for this FR: `High`, `Medium`, or `Low`?

## Prompt Set C: User and Support Signal

For each FR in scope:

1. What changed in user behavior after release (adoption, drop-off, workflow completion)?
2. Which user segments improved, stayed flat, or regressed?
3. What support tickets/escalations were directly attributable to FR behavior?
4. Which failure signatures repeated and why were they not prevented?
5. What user-facing friction remains unresolved today?
6. What signal indicates continued investment is no longer justified?

## Prompt Set D: Operational and Risk Outcome

For each FR in scope:

1. Did actual operational load match readiness assumptions?
2. Which alert thresholds fired, and were they calibrated correctly?
3. Was rollback/deactivation capability sufficient in practice?
4. What near-miss incidents occurred, and what made them near-miss instead of incident?
5. Which risk mitigations worked as designed?
6. Which risk mitigations were missing or ineffective?

## Prompt Set E: Decision and Follow-Through

For each FR in scope:

1. Based on evidence, what is the right FR state now: `Close`, `Keep Monitoring`, `Adjust`, `Reopen`, or `Rollback`?
2. What thresholds apply for next review window?
3. Which improvements must become new issues, with owners and due dates?
4. What should be added to intake/handoff/checklist standards to avoid repeat patterns?
5. What one sentence should be added to the decision log for this FR?

## Red-Team Prompts (Bias Control)

Run before final decision:

1. If we had not built this FR, what evidence says outcomes would be worse today?
2. Are we interpreting short-window noise as durable trend?
3. Are we defending prior decisions instead of re-evaluating them?
4. What evidence would force reversal within one week?
5. What is the cheapest experiment that could invalidate today’s conclusion?

## Facilitator Notes

1. Keep conversation evidence-first: ask for links/metrics before accepting conclusions.
2. Park unresolved debates and return only if time remains.
3. Force owner language: every follow-up needs `one owner`, `due date`, and `success check`.
4. If discussion drifts into implementation detail, redirect to outcome and decision impact.
5. End each section with one-sentence recap before moving on.
6. If confidence is `Low`, require explicit data-gap follow-up issue(s).

## Recommended Timeboxes

### Standard (90 min, default)

1. 0-10 min: Session setup + evidence-pack verification.
2. 10-25 min: Prompt Set A.
3. 25-40 min: Prompt Set B.
4. 40-55 min: Prompt Set C.
5. 55-70 min: Prompt Set D.
6. 70-82 min: Prompt Set E.
7. 82-88 min: Red-team prompts.
8. 88-90 min: Confirm output format, owners, due dates, next review.

### Lite (45 min, first/second cycle option)

Use when evidence maturity is low but decision routing is still required.
Preserve section order and reduce depth.

1. 0-5 min: Session setup + choose `Standard` or `MVE` evidence mode.
2. 5-14 min: Prompt Set A (top outcomes only).
3. 14-23 min: Prompt Set B (top 2 drivers only).
4. 23-31 min: Prompt Set C and D combined (critical signals/risks only).
5. 31-40 min: Prompt Set E (decision + threshold matrix + follow-ups).
6. 40-45 min: Red-team + next review date confirmation.

## Required Output Format

Copy and complete this section at session end:

```md
### FR Outcome Retrospective Record
- Retrospective Date (UTC):
- Session Mode: Single FR Deep-Dive | Portfolio FR Review
- Evidence Mode: Standard | MVE
- Review Window:
- Participants:

### FR Decisions
| FR ID | Outcome Confidence (H/M/L) | Causality Confidence (H/M/L) | Decision |
|---|---|---|---|
| FR-XX | Medium | Low | Keep Monitoring |

### Threshold Matrix (required)
| FR ID | Metric | Green | Amber | Red | Owner |
|---|---|---|---|---|---|
| FR-XX | Validation failure rate | <10% | 10-15% | >15% | Engineering |

### Summary and Follow-Through
- Expected Outcome Summary:
- Observed Outcome Summary:
- Positive Drivers (top 3):
- Negative Drivers (top 3):
- Follow-Up Issues (owner + due date):
- Decision Log Update Line(s):
- Next Review Date (if any):
```

## Facilitation Guardrails

1. Separate facts from interpretations in notes.
2. Do not finalize without evidence links (or explicit MVE gap notation).
3. Convert every unresolved gap into an owner-backed follow-up issue.
4. If any FR decision is `Keep Monitoring`, set explicit next review date.
5. If any FR decision is `Reopen` or `Rollback`, include unblock owner and immediate containment action.
6. In portfolio mode, do not collapse multiple FR decisions into one shared verdict line.

_UniteCube - FR Governance and Continuous Outcome Learning_
