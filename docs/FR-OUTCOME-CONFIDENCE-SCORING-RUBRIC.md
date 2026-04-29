# FR Outcome Confidence Scoring Rubric (v1)

- Date: 2026-04-27 (UTC)
- Issue: [UNI-171](/UNI/issues/UNI-171)
- Owner: Product Governance Lead
- Review cadence: Monthly FR governance review
- Related docs:
  - `docs/FR-OUTCOME-RETROSPECTIVE-PROMPT-SET.md`
  - `docs/FR-DECISION-LOG-TEMPLATE.md`
  - `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md`

## Purpose

Standardize confidence scoring for FR outcome conclusions before governance decisions are recorded.
This rubric is used after retrospective evidence collection and before the final decision line is added to the FR decision log.

## Scoring Dimensions

Score each dimension from `0-4`, then apply the weight.

| Dimension | Weight | What to score |
| --- | ---: | --- |
| Data quality | 30% | Reliability and integrity of source metrics/signals (instrumentation coverage, metric definition clarity, data freshness, anomaly handling). |
| Sample representativeness | 25% | Degree to which observed users/periods match the intended production population and normal operating context. |
| Outcome stability | 25% | Consistency of outcome direction over the review window (trend durability, volatility, sensitivity to one-off events). |
| External factor isolation | 20% | How well non-FR influences (seasonality, campaigns, infra incidents, policy changes) are identified and controlled for. |

## Dimension Score Anchors (`0-4`)

| Score | Anchor |
| --- | --- |
| `0` | Not usable: evidence missing or contradictory; cannot support conclusion. |
| `1` | Weak: major gaps or strong bias risk; conclusion mostly assumption-driven. |
| `2` | Moderate: usable but material uncertainty remains; conclusion is provisional. |
| `3` | Strong: minor gaps only; conclusion is directionally reliable for governance action. |
| `4` | Very strong: high integrity and broad coverage; conclusion is robust with low residual uncertainty. |

## Calculation

`Weighted Confidence Score (0-4) = sum(dimension_score * weight)`

Convert to percentage when needed:

`Confidence % = (Weighted Confidence Score / 4) * 100`

## Confidence Bands and Interpretation

| Band | Score Range (0-4) | Interpretation | Retrospective Label |
| --- | --- | --- | --- |
| High | `>= 3.2` | Evidence is strong enough to treat the outcome conclusion as decision-grade. | `High` |
| Medium | `2.4 - 3.19` | Evidence supports a directional conclusion, but decision should include guardrails and explicit re-check points. | `Medium` |
| Low | `< 2.4` | Evidence is insufficient for a firm outcome conclusion; decision must prioritize data-gap closure or risk containment. | `Low` |

## Action Guidance by Band

| Confidence Band | Allowed governance actions | Required safeguards |
| --- | --- | --- |
| High | `Close` or `Keep Monitoring` based on KPI threshold status. | Record rationale in decision log and set normal monthly follow-up. |
| Medium | `Keep Monitoring` or `Adjust`; `Close` only with explicit owner sign-off and stable KPI evidence across two windows. | Add threshold matrix, named owners, and dated follow-up actions for each uncertainty. |
| Low | `Adjust`, `Reopen`, or `Rollback` depending on risk and user impact. `Close` is not allowed. | Create data-gap issues with owners/dates, define immediate containment, and schedule near-term re-review. |

## Hard-Stop Confidence Overrides

If any condition is true, set final confidence band to `Low` regardless of numeric score:

1. Missing baseline or pre-release expectation for the primary KPI.
2. Review window shorter than 7 calendar days without approved exception.
3. Known critical incident materially overlaps the measurement window and is not isolated.
4. No attributable support signal source for a user-facing FR.

## Required Output Block (attach to retrospective notes)

```md
### FR Outcome Confidence Scorecard
- FR ID:
- Review Window (UTC):
- Evidence Links:
  - Metrics:
  - Support:
  - Decision Log:

| Dimension | Weight | Raw Score (0-4) | Weighted Score | Notes |
|---|---:|---:|---:|---|
| Data quality | 0.30 |  |  |  |
| Sample representativeness | 0.25 |  |  |  |
| Outcome stability | 0.25 |  |  |  |
| External factor isolation | 0.20 |  |  |  |
| Total | 1.00 | - |  |  |

- Confidence Band: High | Medium | Low
- Governance Action Proposed: Close | Keep Monitoring | Adjust | Reopen | Rollback
- Required Safeguards / Follow-Ups (owner + due date):
```

## Worked Example

```md
### FR Outcome Confidence Scorecard
- FR ID: FR-03
- Review Window (UTC): 2026-04-12 to 2026-04-26
- Evidence Links:
  - Metrics: Monthly FR impact dashboard extract
  - Support: FR triage queue summary
  - Decision Log: FRD-2026-04-001

| Dimension | Weight | Raw Score (0-4) | Weighted Score | Notes |
|---|---:|---:|---:|---|
| Data quality | 0.30 | 3.0 | 0.90 | Tracking coverage complete; minor tagging lag on two days. |
| Sample representativeness | 0.25 | 2.0 | 0.50 | Strong SMB sample, weaker enterprise segment representation. |
| Outcome stability | 0.25 | 3.0 | 0.75 | Positive direction sustained for 2 weeks with one short dip. |
| External factor isolation | 0.20 | 2.0 | 0.40 | Regional campaign overlap introduces moderate attribution ambiguity. |
| Total | 1.00 | - | 2.55 |  |

- Confidence Band: Medium
- Governance Action Proposed: Keep Monitoring
- Required Safeguards / Follow-Ups (owner + due date):
  - Marketing: isolate campaign-adjusted metric view by 2026-05-05
  - Product: run segment-specific check for enterprise accounts by 2026-05-08
```

## Decision Log Mapping

When updating `docs/FR-DECISION-LOG-TEMPLATE.md` entries, include in `Notes`:

- `Outcome confidence band (H/M/L)`
- `Weighted score (0-4)`
- `Primary uncertainty driver`
- `Next validation date`

This keeps decision rationale and confidence traceable across monthly governance cycles.

_UniteCube - FR governance confidence standard_
