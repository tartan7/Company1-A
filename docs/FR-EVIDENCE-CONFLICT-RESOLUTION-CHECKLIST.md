# FR Evidence Conflict Resolution Checklist (v1)

- Date: 2026-04-27 (UTC)
- Issue: UNI-180
- Scope: Resolve conflicting FR evidence before stage-gate decisions (triage, implementation, review, closure)
- Owners: Product (decision owner), Engineering and Support (evidence owners)
- Related docs:
  - `docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md`
  - `docs/FR-ACCEPTANCE-TEST-EVIDENCE-INDEX-FORMAT.md`
  - `docs/FR-OUTCOME-CONFIDENCE-SCORING-RUBRIC.md`
  - `docs/FR-REVIEW-COMMENT-QUALITY-CHECKLIST.md`

## Purpose

Define a repeatable path for resolving evidence conflicts when FR artifacts disagree (for example, metric trend is positive while support burden worsens, or test pass evidence conflicts with production signals).

Use this checklist before approving a gate decision when any high-impact contradiction is present.

## Conflict Triggers (Use Checklist If Any Are True)

1. Two or more trusted sources for the same FR conclusion disagree.
2. Artifact timestamps are materially different and suggest stale vs fresh conclusions.
3. Acceptance test evidence says `Pass` while production telemetry or support incidents indicate failure behavior.
4. Outcome confidence score is `Medium` or `Low` due to contradictory signals.
5. Reviewers disagree on release/closure action because evidence quality differs.

## Conflict Severity and Holding Rule

| Severity | Definition | Gate Rule |
| --- | --- | --- |
| `critical` | Release safety or customer-impact contradiction with no safe interpretation. | Hold gate immediately. No approve/close action allowed until conflict record is resolved or rollback/containment is declared. |
| `high` | Material contradiction affecting KPI validity, incident risk, or support load. | Hold gate. Resolution owner and due time (UTC) required in same issue thread. |
| `medium` | Contradiction exists but bounded impact and clear validation path. | Gate may stay in progress only with explicit temporary guardrails and dated follow-up. |
| `low` | Minor discrepancy that does not affect decision outcome. | Document rationale and proceed with caution note. |

Default rule: when in doubt, classify one level higher.

## Evidence Reliability Ordering

When evidence conflicts, rank each artifact before deciding:

1. Direct production telemetry with known instrumentation integrity.
2. Time-bounded incident/support data tied to the FR path.
3. Acceptance-test evidence with clear environment and scenario mapping.
4. Qualitative stakeholder/reviewer observations without reproducible artifact.

Tie-break rules:

- Prefer fresher evidence when methods are comparable.
- Prefer reproducible evidence over one-off observations.
- Prefer source-of-truth systems over copied summaries.
- If reliability remains tied, escalate to conflict experiment and hold gate.

## Resolution Checklist (Must Complete in Order)

1. Declare the conflict in-thread.
- Add a comment using the `FR Evidence Conflict Record` template below.
- Name FR ID, impacted gate, severity, and provisional hold status.

2. Validate artifact integrity.
- Confirm each artifact has owner, timestamp (UTC), scope reference, and canonical link.
- Reject malformed or stale artifacts per evidence attachment standards.

3. Normalize comparison scope.
- Ensure compared artifacts use the same metric definition, population, and time window.
- If not aligned, create normalized slice and treat prior mismatch as non-comparable.

4. Reproduce or re-run highest-risk signal.
- Re-run critical acceptance scenario and/or extract fresh production/support sample.
- Record exact method, run time (UTC), and verifier.

5. Score confidence with contradiction noted.
- Apply outcome confidence rubric and list which dimensions dropped due to conflict.
- If confidence band is `Low`, `Close` is disallowed.

6. Decide action with explicit rationale.
- Choose one: `Proceed`, `Proceed with Guardrails`, `Hold`, `Rollback/Contain`.
- State owner, due date/time (UTC), and verification checkpoint.

7. Link follow-up execution artifacts.
- Add/update linked issues for remediation, instrumentation fixes, or data-gap closure.
- Keep the FR issue gate in `in_progress` or `blocked` according to progress feasibility.

Completion rule: if any step is skipped, the conflict is unresolved and the gate cannot be approved.

## FR Evidence Conflict Record (Template)

```md
### FR Evidence Conflict Record
- FR ID:
- Issue:
- Gate Stage: triage | implementation | review | closure
- Severity: critical | high | medium | low
- Conflict Summary:
- Conflicting Artifacts:
  - Artifact A (owner, UTC timestamp, link):
  - Artifact B (owner, UTC timestamp, link):
- Reliability Assessment:
  - Preferred source and why:
  - Rejected/weaker source and why:
- Scope Normalization Notes (metric/population/window):
- Reproduction / Re-check Method:
- Outcome Confidence Band after conflict review: High | Medium | Low
- Decision: Proceed | Proceed with Guardrails | Hold | Rollback/Contain
- Owner:
- Due (UTC):
- Verification Checkpoint (UTC):
- Follow-up Issue Link(s):
- Next Action:
```

## Decision Constraints

1. `Close` or release approval is not allowed when severity is `critical` or confidence is `Low`.
2. `Proceed with Guardrails` requires explicit monitoring threshold links and owner acknowledgment.
3. Any unresolved contradiction older than 24 hours past due time must be escalated to Product owner and Engineering lead in the same thread.
4. If contradiction indicates likely user harm, trigger containment/rollback path immediately.

## Lightweight Worked Example

```md
### FR Evidence Conflict Record
- FR ID: FR-02
- Issue: UNI-180
- Gate Stage: review
- Severity: high
- Conflict Summary: Acceptance test pass conflicts with increased production timeout incidents.
- Conflicting Artifacts:
  - Artifact A (owner, UTC timestamp, link): Engineering smoke pass, 2026-04-27 09:20 UTC, <test link>
  - Artifact B (owner, UTC timestamp, link): Ops timeout alert spike, 2026-04-27 10:05 UTC, <alert link>
- Reliability Assessment:
  - Preferred source and why: Production alert stream; direct user-path signal with fresh timestamp.
  - Rejected/weaker source and why: Smoke test lacked production latency profile.
- Scope Normalization Notes (metric/population/window): Aligned both to same endpoint and 2-hour post-deploy window.
- Reproduction / Re-check Method: Replay timeout-prone workload in staging + fresh prod query sample.
- Outcome Confidence Band after conflict review: Medium
- Decision: Hold
- Owner: Engineering On-Call
- Due (UTC): 2026-04-27 14:00
- Verification Checkpoint (UTC): 2026-04-27 14:30
- Follow-up Issue Link(s): <UNI-XXX>
- Next Action: Patch timeout retry config and rerun validation before gate decision.
```

_UniteCube - FR Evidence Governance_
