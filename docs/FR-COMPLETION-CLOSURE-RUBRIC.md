# FR Completion and Closure Rubric for Release Decisions

- Date: 2026-04-26 (UTC)
- Issue: [UNI-150](/UNI/issues/UNI-150)
- Scope: Feature-request delivery decisions after implementation handoff and before/after release
- Owners: Product (accountable), Engineering and Support (responsible/consulted by gate)
- Related docs:
  - `docs/FR-REQUEST-INTAKE-ACCEPTANCE-CHECKLIST.md`
  - `docs/FR-IMPLEMENTATION-HANDOFF-BRIEF-TEMPLATE.md`
  - `docs/FR-FEATURE-OWNERSHIP-MATRIX.md`
  - `docs/FR-ACCEPTANCE-TEST-EVIDENCE-INDEX-FORMAT.md`
  - `docs/SMOKE-TEST-PLAN-FR-01-FR-02.md`
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`

## Purpose

Standardize how UniteCube decides whether a feature request is:

1. `Completed` (implementation and readiness evidence are sufficient to consider release), and
2. `Closed` (release outcome has enough post-release evidence to finalize and stop active delivery tracking).

This rubric is mandatory for FR-01, FR-02, and follow-on feature requests.

## Definitions

| Term | Definition | Typical Issue Status |
| --- | --- | --- |
| FR Completion | Build/test/readiness gates are met, release decision can be made. | `in_review` or `done` for implementation issue |
| FR Closure | Post-release evidence confirms stable outcome or explicit hold/cancel decision is finalized. | `done` (closure issue) or `cancelled` |
| Release Decision | Go/No-Go choice using this rubric. | Commented decision record in issue |

## Gate 1: Completion (Pre-Release) Must-Pass Checklist

All items below are required. Any failed item means completion is not achieved.

| # | Gate | Pass Standard | Evidence Owner |
| --- | --- | --- | --- |
| 1 | Acceptance criteria pass | All criteria from handoff brief are verified with test evidence index (standard format + aggregation). | Engineering |
| 2 | Regression and smoke tests | Smoke/regression suite passes with UTC timestamp and test executor name. | Engineering + Support |
| 3 | Rollback readiness | Rollback path validated against current release artifact and runbook link attached. | Engineering |
| 4 | Monitoring and alert mapping | Feature-specific alerts and thresholds are configured and verified. | Engineering + Support |
| 5 | Support readiness | Support has release note, known-failure signatures, and first-response steps. | Support |
| 6 | Product signoff | Product confirms scope delivered matches approved in-scope definition. | Product |
| 7 | Risk log status | Open risks are accepted with owner and mitigation deadline, or resolved. | Product + Engineering |

Completion rule: every gate above is `Pass`.

## Gate 2: Release Decision Score (At Completion)

After completion gates pass, score readiness to choose release posture.

Scoring model: each category is scored `0-5`, then multiplied by weight.

| Category | Weight | Scoring Prompt |
| --- | ---: | --- |
| Functional confidence | 30% | How confidently does observed behavior match acceptance criteria under normal and edge conditions? |
| Operational safety | 25% | How likely is feature operation to stay within alert thresholds without emergency intervention? |
| Support readiness | 15% | Can Support triage and contain expected failures without engineering escalation for standard cases? |
| User value confidence | 20% | Is expected user/admin value evidence strong enough to justify release now? |
| Reversibility | 10% | Can the team rollback or disable safely within target response time? |

Total score formula:

`Release Readiness Score = Sum(category_score * weight)`

Example: `4.2 / 5.0` overall.

### Decision Thresholds

| Score | Decision | Release Posture |
| --- | --- | --- |
| `>= 4.0` | Release Approved | Standard release with monitoring |
| `3.2 - 3.9` | Conditional Release | Release with explicit guardrails (reduced cohort, watch window, named rollback trigger) |
| `< 3.2` | Release Hold | Do not release; create remediation actions and re-run rubric |

## Hard-Stop Blockers (Override Any Score)

If any blocker exists, decision is automatically `Release Hold`:

- Unresolved critical/high-severity defect linked to the FR scope.
- Rollback path is untested or known broken.
- Monitoring/alerts are missing for key failure modes.
- Required owner signoff is missing (Product or Engineering).
- Security/compliance requirement is unmet.

## Gate 3: Closure (Post-Release) Criteria

An FR can be closed only when all closure criteria are met:

| # | Closure Criterion | Pass Standard | Minimum Window |
| --- | --- | --- | --- |
| 1 | Stability window | No unresolved critical incidents attributable to FR behavior. | 7 calendar days |
| 2 | Support burden acceptable | FR-related support questions stay at or below planned threshold. | 7 calendar days |
| 3 | Outcome evidence captured | Adoption and impact metrics documented in monthly summary template format. | First full reporting cycle |
| 4 | Follow-up actions routed | Remaining improvements are linked as backlog issues with owners. | At closure time |
| 5 | Final owner confirmation | Product and Support confirm no active operational objection to closure. | At closure time |

Closure rule: every criterion above is `Pass`.

## Required Decision Record Template

Use this block in the FR issue before release and at closure:

```md
### FR Release Decision Record
- FR ID:
- Decision Date (UTC):
- Completion Gates: Pass/Fail by gate #
- Release Readiness Score: X.X / 5.0
- Decision: Release Approved | Conditional Release | Release Hold
- Hard-Stop Blockers: None | [list]
- Conditions/Guardrails (if any):
- Acceptance Test Evidence Index Link:
- Owners Present: Product / Engineering / Support
- Next Action (owner + date):
```

For closure, add:

```md
### FR Closure Record
- Closure Date (UTC):
- Stability Window Result:
- Support Burden Result:
- Outcome Evidence Link:
- Follow-up Issues Linked:
- Final Decision: Closed | Keep Monitoring | Reopen
```

## Operating Notes

- Do not treat code-merge completion as FR closure.
- If release is conditional, define explicit rollback trigger thresholds in the decision record.
- If closure criteria fail, keep issue open or reopen with a clear unblock owner/action.
- Reuse this rubric for every new FR after intake acceptance.

_UniteCube - FR Delivery Governance_
