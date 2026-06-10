# FR Handoff Completion Criteria (v1)

- Date: 2026-04-27 (UTC)
- Issue: [UNI-184](/UNI/issues/UNI-184)
- Scope: Minimum completion criteria for FR handoffs at stage boundaries
- Owners: Product (accountable), Engineering + Support (responsible by handoff type)
- Related docs:
  - `docs/FR-IMPLEMENTATION-HANDOFF-BRIEF-TEMPLATE.md`
  - `docs/FR-REVIEWER-HANDOFF-NOTE-TEMPLATE.md`
  - `docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md`
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`
  - `docs/FR-EVIDENCE-FRESHNESS-POLICY.md`

## Purpose

Define when an FR handoff is formally complete, so ownership transfer is explicit, review latency is reduced, and incomplete packages are rejected consistently.

## Handoff Types Covered

| Handoff Type | From -> To | Decision Question |
| --- | --- | --- |
| H1: Implementation Intake | Product/Ops -> Engineering | Is the request clear and build-ready? |
| H2: Reviewer Intake | Engineering -> Product + Support + Engineering Reviewer | Is the implementation package complete and decision-ready? |

## Universal Completion Conditions (Required for Every Handoff)

A handoff is complete only when all conditions are true:

1. Scope boundary is explicit (`in scope` and `out of scope`).
2. Acceptance criteria are testable and referenceable (`AC-#`).
3. Required evidence links are attached in canonical form.
4. Ownership transfer is explicit (next owner, action, due time in UTC).
5. Open risks or gaps have owner + due date (or explicit `none`).
6. Comment and docs use FR/issue references (`FR-XX`, `UNI-###`).

Failure of any condition means handoff status is `Incomplete` and must not pass the gate.

## H1 Completion Criteria: Product/Ops -> Engineering

All must pass before setting handoff to `Ready for Engineering`.

| # | Criterion | Pass Standard | Evidence Source |
| --- | --- | --- | --- |
| H1-1 | Problem and impact clarity | Problem statement + user impact identify who is affected and expected improvement. | Handoff brief sections 1-2 |
| H1-2 | Scope control | In-scope/out-of-scope list is explicit and non-overlapping. | Handoff brief section 3 |
| H1-3 | AC quality | Every AC is objectively testable with a named validation method and owner. | Handoff brief section 4 |
| H1-4 | Build prerequisites attached | Discovery signal, baseline metric, success metric, rollback/runbook links are present. | Handoff brief section 5 |
| H1-5 | Risk/dependency visibility | Key dependencies and risk hotspots are listed with owners. | Handoff brief section 6 |
| H1-6 | Open question handling | Open questions are resolved or assigned with UTC due date. | Handoff brief section 8 |
| H1-7 | Required signoff present | Product/Ops + Engineering owner decision recorded. | Handoff brief section 9 |

H1 completion rule: 7 of 7 criteria must be `Pass`.

## H2 Completion Criteria: Engineering -> Reviewers

All must pass before requesting review approval.

| # | Criterion | Pass Standard | Evidence Source |
| --- | --- | --- | --- |
| H2-1 | Review scope packet | Review scope and explicit out-of-scope set are stated. | Reviewer handoff section 1 |
| H2-2 | AC coverage proof | Every in-scope AC has linked evidence and pass/fail result. | Reviewer handoff section 2 |
| H2-3 | Operational impact summary | UI/API/data/monitoring impact and risk level are documented. | Reviewer handoff section 3 |
| H2-4 | Required evidence package | Test index, smoke/regression, monitoring mapping, rollback validation, support readiness all linked with timestamps. | Reviewer handoff section 4 |
| H2-5 | Rollback/risk viability | High/critical defects, rollback trigger confirmation, and open-risk ownership are recorded. | Reviewer handoff section 5 |
| H2-6 | Reviewer asks are actionable | Product/Support/Engineering reviewer decisions requested with UTC deadlines. | Reviewer handoff section 6 |
| H2-7 | Decision block ready | Decision record template is embedded for reviewer response consistency. | Reviewer handoff section 7 |

H2 completion rule: 7 of 7 criteria must be `Pass`.

## Evidence Freshness and Rejection Rules

Apply these rejection rules at handoff time:

1. Reject handoff if required artifacts are missing or non-canonical (no direct link).
2. Reject handoff if required freshness class is stale per `docs/FR-EVIDENCE-FRESHNESS-POLICY.md`.
3. Reject handoff if due times are missing or not UTC.
4. Reject handoff if ownership transfer is ambiguous (`TBD`, `team`, or multi-owner with no single driver).

When rejected, post an `FR Evidence Gap Notice` and keep or return issue status to `in_progress` unless all forward progress is blocked.

## Completion Scoring Aid (Optional)

Use this to quantify handoff quality without replacing must-pass gates.

| Score | Interpretation | Action |
| --- | --- | --- |
| 7/7 | Complete | Advance handoff gate |
| 5-6/7 | Near-complete with material gaps | Fix gaps before transfer |
| <=4/7 | Incomplete | Do not transfer ownership |

## Copy/Paste Handoff Completion Check

```md
### FR Handoff Completion Check
- FR ID:
- Issue:
- Handoff Type: H1 Product/Ops -> Engineering | H2 Engineering -> Reviewers
- Criteria Result: [H#-1 Pass/Fail], [H#-2 Pass/Fail], [H#-3 Pass/Fail], [H#-4 Pass/Fail], [H#-5 Pass/Fail], [H#-6 Pass/Fail], [H#-7 Pass/Fail]
- Evidence Freshness Check: Pass | Fail
- Completion Decision: Complete | Incomplete
- Next Owner:
- Next Action:
- Due (UTC):
```

## Worked Example: Complete H2 Reviewer Handoff

```md
### FR Handoff Completion Check
- FR ID: FR-02
- Issue: UNI-134
- Handoff Type: H2 Engineering -> Reviewers
- Criteria Result: [H2-1 Pass], [H2-2 Pass], [H2-3 Pass], [H2-4 Pass], [H2-5 Pass], [H2-6 Pass], [H2-7 Pass]
- Evidence Freshness Check: Pass
- Completion Decision: Complete
- Next Owner: Product reviewer (Tanaka)
- Next Action: Post review decision record (`Approve | Request Changes | Hold`) after validating linked AC evidence and risk notes.
- Due (UTC): 2026-04-28 09:30
```

## Operating Notes

- Do not treat branch merge or environment deploy as handoff completion by itself.
- Handoff completion is a gate artifact quality decision, not a release outcome decision.
- Reassess this criteria quarterly based on review-cycle delay and rework rates.

_UniteCube - FR Delivery Governance_
