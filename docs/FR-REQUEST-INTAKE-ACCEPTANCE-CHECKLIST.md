# Feature Request Intake Acceptance Checklist

- Date: 2026-04-26 (UTC)
- Issue: UNI-145
- Scope: Intake quality gate for all new feature requests, including FR-01 and FR-02 follow-on requests
- Owners: Product (accountable), Support and Engineering (consulted)

## Purpose

Use this checklist before a feature request is scheduled for implementation.  
An intake is accepted only when every `Required` item is completed and evidenced.

## Required Evidence Package

- Link to originating customer signal (ticket, call note, or account feedback).
- Problem statement written as user impact, not proposed solution.
- Named request owner (Product) and implementation consults (Support, Engineering).
- Initial priority (`critical`, `high`, `medium`, `low`) with one-line rationale.
- Timestamp in UTC and the intake source channel.

## Acceptance Checklist (Required)

| # | Check | Acceptance Standard | Evidence |
| --- | --- | --- | --- |
| 1 | Problem clarity | Request states current pain, affected user role, and expected outcome. | 2-4 sentence problem statement |
| 2 | Customer signal quality | At least one traceable customer signal is attached and attributable to a tenant/account. | URL or ticket ID |
| 3 | Frequency and reach | Request includes current count of affected users/accounts (known or estimated). | Count + date window |
| 4 | Scope boundary | V1 in-scope and out-of-scope are explicitly listed. | Scope bullets |
| 5 | Operational risk | Risks to support load, delivery reliability, and compliance are called out. | Risk bullets |
| 6 | Dependency check | Known technical or process dependencies are listed (or explicitly none). | Dependency list |
| 7 | Success signal | At least one measurable success metric is defined for post-release review. | Metric + baseline/target |
| 8 | Acceptance criteria quality | Criteria are testable, observable, and written in pass/fail form. | Acceptance criteria list |
| 9 | Ownership and routing | Product, Support, and Engineering ownership mapping is confirmed. | Link to ownership matrix |
| 10 | Rollout and fallback intent | Intake records expected rollout scope and a fallback posture if quality degrades. | Rollout note + fallback note |

## Optional but Recommended

- Screenshot, workflow capture, or sample payload illustrating the problem.
- Estimated no-change impact if deferred one release cycle.
- Related prior issue links to prevent duplicate discovery work.

## Rejection Conditions (Do Not Schedule Yet)

- Missing customer signal or unverifiable source.
- Ambiguous problem statement ("improve", "better UX") without concrete impact.
- No measurable success signal.
- Scope is broad enough to span multiple independent deliverables.
- No owner assigned for requirement decisions.

## Acceptance Decision Template

Use this block in issue descriptions or comments:

```md
### FR Intake Acceptance Decision
- Decision: Accepted | Rework Required
- Request ID: FR-XX
- Product Owner:
- Evidence Links:
- Success Metric(s):
- Scope (V1 In / Out):
- Risks & Dependencies:
- Next Action:
```

## Integration Notes

- Attach this checklist to every new feature-request issue before it enters active planning.
- Use `docs/FR-COMPLETION-CLOSURE-RUBRIC.md` for release go/no-go and post-release closure decisions.
- For FR-01 and FR-02 follow-ons, align ownership with `docs/FR-FEATURE-OWNERSHIP-MATRIX.md`.
- Re-review this checklist monthly using `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md` outcomes.
