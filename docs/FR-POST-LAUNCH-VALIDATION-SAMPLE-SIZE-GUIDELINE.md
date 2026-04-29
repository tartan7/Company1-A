# FR Post-Launch Validation Sample Size Guideline (v1)

- Date: 2026-04-27 (UTC)
- Issue: [UNI-166](/UNI/issues/UNI-166)
- Scope: Minimum evidence size for FR post-launch validation decisions
- Owners: Product (decision owner), Engineering (metric quality), Support (incident evidence)
- Related docs:
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`
  - `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`
  - `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md`

## 1. Purpose

Define a consistent minimum sample size before making post-launch FR decisions (`Close`, `Keep Monitoring`, `Adjust`, `Rollback`).
This prevents premature decisions based on too little traffic or one-off outcomes.

## 2. Validation Unit

Use one measurable unit per FR behavior:

- FR-01 example: one template save attempt (`fr01_template_updated` or `fr01_template_save_validation_failed`)
- FR-02 example: one monthly dispatch run (`status=success/error` in execution logs)
- For future FRs: one completed user/admin workflow attempt tied to the FR success criteria

All sample-size checks in this guideline are counted in validation units.

## 3. Minimum Sample Size by Decision Tier

| Tier | Typical Decision | Minimum Validation Units (`n`) | Segment Requirement | Max Window |
| --- | --- | ---: | --- | --- |
| Tier A (Early Safety Check) | Continue rollout vs immediate rollback | `n >= 30` | At least 5 units from each active critical segment* | 7 calendar days |
| Tier B (Stability Decision) | Keep monitoring vs close hypercare | `n >= 100` | At least 20 units from each active critical segment* | 30 calendar days |
| Tier C (Closure Decision) | Final FR closure decision | `n >= 200` | At least 30 units from each active critical segment* | 45 calendar days |

\* Critical segment examples: admin role, tenant tier, workflow entry path, locale/channel.

## 4. Decision Preconditions (In Addition to Sample Size)

Sample size is necessary but not sufficient. A tier decision is valid only if all checks pass:

1. No open Sev-1 incident attributable to the FR.
2. Failure/incident rate stays inside the threshold policy from `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`.
3. Evidence includes at least 2 independent days of activity (avoid single-batch bias).
4. Product + Engineering both confirm metric integrity (no known counting gaps).

If any precondition fails, outcome is automatically `Keep Monitoring` or `Rollback` depending on severity.

## 5. Statistical Confidence Guardrail

For Tier B and Tier C decisions, calculate a 95% confidence interval for the core failure rate and compare its upper bound to the policy threshold.

Recommended quick method:

- Use Wilson interval (preferred) or normal approximation if tooling is limited.
- If the 95% upper bound is above the threshold, do not close; continue monitoring or adjust.

This guardrail avoids false confidence when observed failures are low but sample size is still borderline.

## 6. Low-Traffic Exception Path

If traffic cannot reach Tier B or Tier C `n` inside the max window:

1. Post a decision note with current `n`, observed failure rate, and missing sample count.
2. Set decision to `Keep Monitoring` (not `Close`).
3. Extend window by 14 days with explicit owner/date.
4. If still below sample floor after extension, close only with Product + Engineering + Support exception signoff and rationale.

## 7. Worked Examples

### Example A: FR-01 Stability Decision

- Window: 30 days
- Observed units: 128 template-save attempts
- Segment coverage: 24 from Segment A, 44 from Segment B, 60 from Segment C
- Failures: 7 (`5.47%`)

Result:

- Tier B sample requirement met (`128 >= 100`)
- Segment requirement met (all segments `>= 20`)
- Proceed to confidence guardrail + thresholds for final decision

### Example B: FR-02 Closure Decision

- Window: 45 days
- Observed units: 162 monthly dispatch runs
- Segment coverage: 102 standard tenants, 60 high-volume tenants
- Failures: 3 (`1.85%`)

Result:

- Tier C sample requirement not met (`162 < 200`)
- Decision cannot be `Close` yet; set `Keep Monitoring` and extend window

## 8. Required Issue Comment Block

Use this block in FR decision comments:

```md
### FR Post-Launch Sample Size Check
- FR ID:
- Decision Tier: Tier A | Tier B | Tier C
- Window Evaluated (UTC):
- Validation Unit Definition:
- Observed Sample Size (n):
- Segment Coverage:
- Failure Count / Rate:
- 95% CI Upper Bound (if Tier B/C):
- Threshold Comparison Result:
- Decision: Continue | Keep Monitoring | Adjust | Rollback | Close
- Next Action (owner + date):
```

## 9. Operating Notes

- Do not substitute qualitative sentiment for missing sample volume.
- If metrics are partially missing, treat sample size as invalid and log a data-quality follow-up issue.
- Re-check this guideline quarterly as FR traffic patterns evolve.

_UniteCube - FR Delivery Governance_
