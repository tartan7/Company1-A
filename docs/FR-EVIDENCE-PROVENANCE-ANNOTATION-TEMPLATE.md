# FR Evidence Provenance Annotation Template (v1)

- Date: YYYY-MM-DD (UTC)
- Version: 1.0
- Issue: UNI-###
- Scope: Standard annotation block for documenting provenance of FR evidence artifacts used at triage, implementation, review, and closure gates
- Owners: Engineering (evidence producer), Product (decision owner), Support (customer-impact evidence owner)
- Related docs:
  - `docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md`
  - `docs/FR-EVIDENCE-FRESHNESS-POLICY.md`
  - `docs/FR-EVIDENCE-CONFLICT-RESOLUTION-CHECKLIST.md`
  - `docs/FR-REVIEW-EVIDENCE-SUMMARY-CARD-TEMPLATE.md`

## Purpose

Use this template to attach a consistent provenance annotation to each evidence artifact so reviewers can verify where data came from, how it was processed, and whether it remains trustworthy for gate decisions.

## When to Use

1. When attaching new FR evidence artifacts in issue comments or `docs/` files.
2. When evidence is transformed (query, export, aggregation, manual extraction, redaction).
3. When evidence is reused across stages and needs chain-of-custody continuity.
4. During contradiction checks and post-incident audits.

## Required Provenance Fields

| Field | Description | Example |
| --- | --- | --- |
| `FR ID` | Feature request identifier. | `FR-02` |
| `Issue` | Linked issue identifier. | `UNI-185` |
| `Stage` | Gate stage where artifact is being used. | `implementation` |
| `Artifact Label` | Human-readable evidence name used in comments. | `AC-2 timeout regression test run` |
| `Artifact Link` | Canonical link to evidence file/log/dashboard/query. | `docs/FR-02_implementation_smoke-test-results_2026-04-27_engineering_v1.md` |
| `Source System` | Original system-of-record that produced the raw signal. | `Grafana dashboard`, `support ticket queue`, `test runner CI` |
| `Source Record Identifier` | Query ID, run ID, ticket ID, or log reference from source. | `run-7742`, `query-id=fr02-timeout-v3` |
| `Observed At (UTC)` | Time the underlying event/state occurred. | `2026-04-27 09:42` |
| `Collected At (UTC)` | Time the evidence was extracted/captured. | `2026-04-27 10:05` |
| `Attached At (UTC)` | Time provenance annotation was attached in issue/doc. | `2026-04-27 10:20` |
| `Evidence Window (UTC)` | Start and end range for aggregate evidence; use `N/A` for point-in-time artifacts. | `2026-04-26 00:00 to 2026-04-27 00:00` |
| `Collection Method` | Capture method used to produce artifact. | `automated export`, `manual screenshot`, `SQL query` |
| `Transformation Steps` | Ordered list of data manipulations from source to artifact. | `raw log export -> dedupe by request_id -> aggregate by hour` |
| `Chain of Custody Owner` | Person/team currently accountable for artifact integrity. | `Engineering On-Call` |
| `Verification Method` | How integrity and correctness were checked. | `cross-check with source query`, `peer review`, `checksum` |
| `Integrity Signal` | Integrity reference if available (`checksum`, signature, immutable URL); otherwise explain why not available. | `sha256:...`, `N/A (source dashboard immutable link)` |
| `Freshness Class` | Freshness category from policy. | `F0`, `F1`, `F2`, `F3` |
| `Freshness Status` | Freshness result at decision time. | `Fresh` \| `Stale` |
| `Sensitivity` | Data handling level for artifact. | `internal`, `confidential`, `redacted` |
| `Contradiction Reference` | Link to conflict record if contradictory evidence exists. | `UNI-180 conflict note` or `None` |
| `Decision Usage` | What decision this artifact supports. | `supports Hold at review gate` |
| `Next Refresh Due (UTC)` | Time by which this artifact must be refreshed for continued validity. | `2026-04-28 10:05` |

## Provenance Annotation Block Template

```md
### FR Evidence Provenance Annotation
- FR ID:
- Issue:
- Stage: triage | implementation | review | closure
- Artifact Label:
- Artifact Link:
- Source System:
- Source Record Identifier:
- Observed At (UTC):
- Collected At (UTC):
- Attached At (UTC):
- Evidence Window (UTC):
- Collection Method:
- Transformation Steps:
- Chain of Custody Owner:
- Verification Method:
- Integrity Signal:
- Freshness Class: F0 | F1 | F2 | F3
- Freshness Status: Fresh | Stale
- Sensitivity:
- Contradiction Reference: None | [link]
- Decision Usage:
- Next Refresh Due (UTC):
- Next Action (owner + UTC):
```

## Provenance Register Table (Optional Rollup)

Use when one comment or document references multiple artifacts.

| Artifact Label | Source System | Source Record Identifier | Collected At (UTC) | Freshness Class | Freshness Status | Custody Owner | Decision Usage |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [artifact] | [system] | [id] | YYYY-MM-DD HH:MM | F0/F1/F2/F3 | Fresh/Stale | [owner] | [usage] |

## Gate Compatibility Rules

1. Do not approve gate decisions when required provenance fields are missing for decision-critical artifacts.
2. If `Transformation Steps` includes manual edits, require peer verification before using the artifact for `Go`/`Close` decisions.
3. If `Freshness Status = Stale`, set gate outcome to `Hold` until refreshed or exception-approved per freshness policy.
4. If `Contradiction Reference` is present, link the conflict checklist record before final decision routing.

## Reviewer Quick Check

Before accepting an artifact, confirm:

1. Source system and source record identifier are both present and checkable.
2. UTC timestamps are complete and internally consistent (`Observed <= Collected <= Attached`).
3. Transformation steps are explicit enough for another reviewer to reproduce.
4. Custody owner and next refresh due are set.
5. Decision usage is explicit and matches the stage gate context.

## Sample (Filled)

```md
### FR Evidence Provenance Annotation
- FR ID: FR-02
- Issue: UNI-185
- Stage: review
- Artifact Label: FR-02 timeout alert trend (watch window)
- Artifact Link: https://ops.example/alerts/fr02-timeout-trend
- Source System: Grafana alert dashboard
- Source Record Identifier: panel_id=221; query_id=fr02_timeout_watch_v2
- Observed At (UTC): 2026-04-27 09:42
- Collected At (UTC): 2026-04-27 10:05
- Attached At (UTC): 2026-04-27 10:20
- Evidence Window (UTC): 2026-04-27 06:00 to 2026-04-27 10:00
- Collection Method: Automated dashboard export
- Transformation Steps: source query -> export CSV -> summarize by 15-minute bucket
- Chain of Custody Owner: Engineering On-Call
- Verification Method: Cross-checked export totals against dashboard panel values
- Integrity Signal: N/A (immutable dashboard URL with query parameters)
- Freshness Class: F0
- Freshness Status: Fresh
- Sensitivity: internal
- Contradiction Reference: None
- Decision Usage: Supports conditional go if error-rate remains below threshold for remaining watch window.
- Next Refresh Due (UTC): 2026-04-27 14:05
- Next Action (owner + UTC): Engineering On-Call refresh trend snapshot by 2026-04-27 14:05 UTC.
```

_UniteCube - FR Delivery Governance_
