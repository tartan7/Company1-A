# FR Priority Calibration Worksheet Template (v1)

- Template Date (UTC): YYYY-MM-DD
- Linked Issue: [UNI-161](/UNI/issues/UNI-161)
- Prepared By: [Name / Role]
- Review Cadence: Weekly FR prioritization review
- Scope: Feature request intake and backlog re-prioritization

## 1. Purpose

Use this worksheet to calibrate feature-request priority consistently across Product, Engineering, and Support. The worksheet converts qualitative input into a comparable weighted score, then maps each FR to a priority recommendation.

## 2. Priority Calibration Rules

1. Score every active FR in the same review session using the same evidence window.
2. Use current evidence only (last 30 days unless noted otherwise).
3. If evidence is missing for a criterion, score conservatively and log an action to close the evidence gap.
4. Do not set `critical` unless hard-stop conditions are met (Section 6).
5. Re-score any FR after major scope, dependency, or incident changes.

## 3. Criteria and Weights

Score each criterion from `1` (lowest) to `5` (highest), then multiply by weight.

| Criterion | Weight | Scoring Prompt |
| --- | ---: | --- |
| Customer Impact | 30% | How much user/account pain is reduced if this FR ships? |
| Strategic Alignment | 20% | How directly does this FR support current quarter goals? |
| Time Urgency | 15% | How quickly does value/risk change if delayed by one cycle? |
| Revenue/Retention Influence | 15% | How likely is measurable pipeline, conversion, or retention lift? |
| Delivery Confidence | 10% | How likely can this be delivered cleanly within expected scope? |
| Operational Risk Reduction | 10% | How strongly does this reduce support/incident/compliance burden? |

Weighted score formula:

`Priority Score (1.0-5.0) = Sum(criterion_score x weight)`

## 4. Scoring Anchors (1-5)

| Score | Anchor Definition |
| --- | --- |
| 1 | Minimal evidence of value, weak urgency, or unclear problem ownership. |
| 2 | Limited value signal; mostly local optimization or low-frequency request. |
| 3 | Moderate value with clear user need and manageable uncertainty. |
| 4 | Strong cross-team value and urgency with credible outcome evidence. |
| 5 | High-confidence, high-impact request with material downside if delayed. |

## 5. Priority Band Mapping

| Priority Score | Recommended Priority | Default Action |
| --- | --- | --- |
| `>= 4.2` | `high` | Schedule in current cycle if capacity allows. |
| `3.4 - 4.1` | `medium` | Keep in next-ready queue with owner + target window. |
| `2.6 - 3.3` | `low` | Keep in backlog with explicit trigger to re-evaluate. |
| `< 2.6` | `low` | Defer and capture evidence needed for reconsideration. |

Note: `critical` is reserved for hard-stop conditions in Section 6.

## 6. Hard-Stop Conditions for `critical`

Set priority to `critical` only if at least one condition is true:

- Production incident risk is active or recurring without acceptable workaround.
- Compliance or contractual exposure exists with near-term deadline.
- Revenue-impacting blocker affects committed customer delivery.
- Security or data-integrity risk requires immediate mitigation.

When `critical` is used, include owner, mitigation plan, and 24-48h decision checkpoint.

## 7. Calibration Worksheet

| FR ID | FR Title | Owner | Customer Impact (30%) | Strategic Alignment (20%) | Time Urgency (15%) | Revenue/Retention (15%) | Delivery Confidence (10%) | Ops Risk Reduction (10%) | Priority Score | Recommended Priority | Confidence (H/M/L) | Decision Notes | Next Review Date (UTC) |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | --- | --- |
| FR-XX | [Feature request title] | [Name] |  |  |  |  |  |  |  | high / medium / low / critical | H / M / L | [Rationale + assumptions] | YYYY-MM-DD |

## 8. Sample Scoring Scenario (Worked Example)

Example FR: `FR-04 - Admin bulk-import validation alerts`

| Criterion | Weight | Score (1-5) | Weighted Value |
| --- | ---: | ---: | ---: |
| Customer Impact | 30% | 4 | 1.20 |
| Strategic Alignment | 20% | 4 | 0.80 |
| Time Urgency | 15% | 3 | 0.45 |
| Revenue/Retention Influence | 15% | 3 | 0.45 |
| Delivery Confidence | 10% | 5 | 0.50 |
| Operational Risk Reduction | 10% | 4 | 0.40 |
| Total | 100% |  | **3.80 / 5.0** |

Recommended priority from score band: `medium` (`3.4 - 4.1`).
Decision note example: strong operational and customer value, but urgency/revenue signals are moderate this cycle.

## 9. Tie-Breaker Rules

If two FRs land in the same priority band and both cannot be scheduled:

1. Prefer the FR with higher Customer Impact score.
2. If still tied, prefer higher Time Urgency score.
3. If still tied, prefer higher Delivery Confidence score.
4. If still tied, Product owner makes final call and logs rationale.

## 10. Confidence and Evidence Log

| FR ID | Confidence | Missing Evidence | Owner | Due Date (UTC) | Update Method |
| --- | --- | --- | --- | --- | --- |
| FR-XX | High / Medium / Low | [What is unknown] | [Name] | YYYY-MM-DD | Issue comment / dashboard link |

## 11. Review Checklist

- [ ] All active FRs were scored in one session.
- [ ] Score rationale is documented for every FR.
- [ ] Any `critical` priority includes hard-stop justification.
- [ ] Missing evidence has owner + due date.
- [ ] Next review date is set for every non-done FR.

## 12. Copy/Paste Comment Snippet

Use this in the issue thread after each calibration pass:

```md
### FR Priority Calibration Update
- Review Date (UTC):
- Total FRs Scored:
- High: 
- Medium: 
- Low: 
- Critical:
- Biggest Priority Shift:
- Reason for Shift:
- Next Action (owner + date):
```

_UniteCube - Feature Request Prioritization Governance_
