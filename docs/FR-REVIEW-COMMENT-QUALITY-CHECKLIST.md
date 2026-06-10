# FR Review Comment Quality Checklist

- Date: 2026-04-26 (UTC)
- Issue: UNI-152
- Scope: Quality standard for review comments on feature-request issues (design, implementation, release readiness, closure)
- Owners: Product, Support, Engineering (shared responsibility; reviewer accountable for comment quality)
- Related docs:
  - `docs/FR-REQUEST-INTAKE-ACCEPTANCE-CHECKLIST.md`
  - `docs/FR-IMPLEMENTATION-HANDOFF-BRIEF-TEMPLATE.md`
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`
  - `docs/FR-FEATURE-OWNERSHIP-MATRIX.md`

## Purpose

Define what a "good review comment" looks like so FR decisions are fast, evidence-based, and actionable.

Use this checklist whenever you leave a review comment that requests changes, approves work, flags risk, or blocks release/closure.

## Required Comment Structure

Every substantive FR review comment should include all fields below:

1. `Decision Intent`: approve, request changes, hold, or question.
2. `Scope Reference`: exact FR item/criterion/section being discussed.
3. `Evidence`: concrete observation (test result, metric, log, screenshot, repro, or doc link).
4. `Impact`: user/ops/release risk if unchanged.
5. `Action`: explicit next step with owner and due date/time (UTC when time-sensitive).

## Quality Checklist (Must-Pass)

| # | Check | Pass Standard |
| --- | --- | --- |
| 1 | Specificity | Names exact artifact and section (for example: acceptance criterion #4, rollout guardrail, closure criterion #2). |
| 2 | Verifiability | Includes checkable evidence, not opinion-only statements. |
| 3 | Actionability | States exactly what must change or what is approved. |
| 4 | Ownership | Assigns a clear owner (`Product`, `Support`, `Engineering`, or named person). |
| 5 | Deadline clarity | Includes due date/time when follow-up is required. |
| 6 | Severity signal | Labels urgency/impact (`critical`, `high`, `medium`, `low`) or clearly states "no blocker". |
| 7 | Non-ambiguity | Avoids vague phrasing ("looks off", "maybe improve", "needs work"). |
| 8 | Scope discipline | Focuses on the current FR scope; out-of-scope items are separated as follow-up issues. |
| 9 | Professional tone | Direct, factual, respectful; no blame or sarcasm. |
| 10 | Traceability | Leaves enough context that a new reviewer can understand decision history without side-channel chat. |

Comment quality rule: if any must-pass item fails, revise before posting.

## Comment Severity Guide

| Severity | Use When | Expected Follow-Up |
| --- | --- | --- |
| `critical` | Release safety/compliance/customer impact is at immediate risk. | Immediate owner acknowledgment, mitigation or rollback path in same work window. |
| `high` | Likely to cause significant user, support, or operational pain if released unchanged. | Owner response and plan within current cycle/day. |
| `medium` | Important quality gap, but safe to resolve before next decision gate. | Owner plan and due date in the issue thread. |
| `low` | Improvement suggestion that does not block the current decision. | Route to backlog/follow-up issue if not addressed now. |

## Strong vs Weak Examples

### Weak (Do Not Use)

> "This still feels risky. Please improve monitoring."

Why weak: no scope reference, no evidence, no owner, no explicit action.

### Strong (Use This Pattern)

> `Decision Intent`: Request changes (`high`)  
> `Scope Reference`: FR completion gate #4 (monitoring and alert mapping)  
> `Evidence`: FR-02 dispatch failure alert is missing in `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`; no threshold or pager action is documented.  
> `Impact`: We cannot detect failure early; support may learn from customer impact first.  
> `Action`: Engineering to add FR-02 dispatch alert threshold + runbook pointer by 2026-04-27 16:00 UTC; Support to confirm triage wording in same thread.

## Review Comment Template

Use this block for FR review comments:

```md
### FR Review Comment
- Decision Intent: Approve | Request changes | Hold | Question
- Severity: critical | high | medium | low | no blocker
- Scope Reference:
- Evidence:
- Impact:
- Required Action:
- Owner:
- Due (UTC):
- Follow-up Link(s):
```

## Escalation and Routing Rules

1. If severity is `critical`, include rollback/containment expectation in the same comment.
2. If action spans multiple teams, split into owner-specific bullets in one comment.
3. If item is out of FR scope but important, create/link a follow-up issue instead of blocking silently.
4. If no action is needed, state explicit approval and remaining watch conditions.

## Operating Notes

- Use this checklist alongside `docs/FR-COMPLETION-CLOSURE-RUBRIC.md` at release and closure gates.
- During intake and handoff reviews, align scope references to criteria defined in the intake checklist and handoff brief.
- Revisit this checklist monthly after FR retrospectives and refine examples based on recurring comment quality gaps.

_UniteCube - FR Review Governance_
