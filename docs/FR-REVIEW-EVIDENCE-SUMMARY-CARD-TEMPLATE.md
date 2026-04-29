# FR Review Evidence Summary Card Template (v1)

- Date: YYYY-MM-DD (UTC)
- Version: 1.0
- Issue: UNI-###
- Scope: Compact card format for FR review evidence used at gate decisions
- Owners: Product (decision owner), Engineering + Support (evidence contributors)
- Related docs:
  - `docs/FR-REVIEW-COMMENT-QUALITY-CHECKLIST.md`
  - `docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md`
  - `docs/FR-EVIDENCE-CONFLICT-RESOLUTION-CHECKLIST.md`
  - `docs/FR-OUTCOME-CONFIDENCE-SCORING-RUBRIC.md`

## Purpose

Use this template to summarize one evidence artifact in review-ready form so decision-makers can evaluate freshness, confidence, contradiction risk, and required follow-up quickly.

## When to Use

1. During FR review when attaching or citing evidence in a decision comment.
2. During conflict checks when two artifacts disagree and each needs a comparable card.
3. During release or closure gates when reviewers need a compact evidence rollup.

## Card Fields (Required)

| Field | Description | Example |
| --- | --- | --- |
| `FR ID` | Feature request identifier. | `FR-02` |
| `Issue` | Linked issue identifier. | `UNI-183` |
| `Review Stage` | Current gate stage. | `review` |
| `Evidence Source` | System/artifact source name and link. | `Ops alert stream - <link>` |
| `Evidence Type` | Category of evidence. | `production telemetry`, `acceptance test`, `support incident`, `stakeholder feedback` |
| `Captured At (UTC)` | Timestamp the evidence was produced. | `2026-04-27 10:05` |
| `Freshness Window` | Accepted staleness window for this evidence type. | `<= 24h` |
| `Freshness Status` | Whether artifact is still fresh. | `Fresh` \| `Stale` |
| `Confidence Band` | Confidence level after quality check. | `High` \| `Medium` \| `Low` |
| `Decision Impact` | How this evidence affects the gate decision. | `supports approve`, `supports hold`, `requires rollback check` |
| `Contradiction Flag` | Whether this artifact conflicts with another trusted source. | `Yes` \| `No` |
| `Contradiction Reference` | Link to conflicting artifact or conflict record (required when flag is `Yes`). | `FR Evidence Conflict Record link` |
| `Evidence Owner` | Owner accountable for artifact quality/updates. | `Engineering On-Call` |
| `Follow-up Required` | Whether further action is needed before decision finalization. | `Yes` \| `No` |
| `Follow-up Owner` | Owner of the next action (required when follow-up is `Yes`). | `Support Lead` |
| `Follow-up Due (UTC)` | Due timestamp for follow-up (required when follow-up is `Yes`). | `2026-04-27 14:00` |
| `Next Action` | Concrete next step. | `Re-run timeout scenario and update card.` |

## Summary Card Template

```md
### FR Review Evidence Summary Card
- FR ID:
- Issue:
- Review Stage: triage | implementation | review | closure
- Evidence Source:
- Evidence Type:
- Captured At (UTC):
- Freshness Window:
- Freshness Status: Fresh | Stale
- Confidence Band: High | Medium | Low
- Decision Impact:
- Contradiction Flag: Yes | No
- Contradiction Reference:
- Evidence Owner:
- Follow-up Required: Yes | No
- Follow-up Owner:
- Follow-up Due (UTC):
- Next Action:
```

## Sample Card (Filled)

```md
### FR Review Evidence Summary Card
- FR ID: FR-02
- Issue: UNI-183
- Review Stage: review
- Evidence Source: Production timeout alert query - <https://ops.example/alerts/fr02-timeout>
- Evidence Type: production telemetry
- Captured At (UTC): 2026-04-27 10:05
- Freshness Window: <= 24h
- Freshness Status: Fresh
- Confidence Band: High
- Decision Impact: Supports hold until timeout spike is resolved.
- Contradiction Flag: Yes
- Contradiction Reference: FR Evidence Conflict Record in UNI-180 comment thread
- Evidence Owner: Engineering On-Call
- Follow-up Required: Yes
- Follow-up Owner: Engineering On-Call
- Follow-up Due (UTC): 2026-04-27 14:00
- Next Action: Re-run timeout-prone scenario after retry patch and update decision comment.
```

## Compatibility with Conflict Workflow

This card is compatible with `docs/FR-EVIDENCE-CONFLICT-RESOLUTION-CHECKLIST.md` when used as follows:

1. If `Contradiction Flag = Yes`, add or link an `FR Evidence Conflict Record` before gate approval.
2. Do not set decision outcome to approve/close when `Confidence Band = Low` for decision-critical evidence.
3. If `Freshness Status = Stale`, either refresh artifact or mark `Follow-up Required = Yes` and hold gate as needed.
4. Keep `Evidence Source`, `Captured At (UTC)`, and owner fields aligned with attachment standards for auditability.

## Review Rollup Table (Optional)

Use this when summarizing multiple cards in one review comment.

| FR ID | Evidence Source | Captured At (UTC) | Freshness | Confidence | Contradiction | Decision Impact | Follow-up |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FR-XX | [Link] | YYYY-MM-DD HH:MM | Fresh/Stale | High/Medium/Low | Yes/No | [Impact summary] | Yes/No |

_UniteCube - FR Review Evidence Operations_
