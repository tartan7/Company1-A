# FR Evidence Reconciliation Note Template (v1)

- Date: 2026-04-29 (UTC)
- Issue: UNI-188
- Owner: Product Governance Lead
- Scope: Document conflicting evidence reconciliation before final FR stage-gate decisions
- Related docs:
  - `docs/FR-EVIDENCE-CONFLICT-RESOLUTION-CHECKLIST.md`
  - `docs/FR-OUTCOME-CONFIDENCE-SCORING-RUBRIC.md`
  - `docs/FR-EVIDENCE-CONTRADICTION-ESCALATION-FLOW.md`

## Purpose

Provide a structured note format for reconciling conflicting evidence before final FR governance decisions. This template captures the reconciliation process, confidence assessment, and final recommendation when evidence sources disagree.

Use this template when evidence conflict resolution checklist has been triggered and a final recommendation must be documented for governance review.

## Template

```md
### FR Evidence Reconciliation Note

- FR ID:
- Issue:
- Gate Stage: triage | implementation | review | closure
- Date (UTC):
- Reconciliation Owner:

## 1. Evidence Sources Compared

| Source | Type | Owner | Timestamp (UTC) | Key Finding | Reliability |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## 2. Discrepancy Summary

**Primary conflict statement:**

**Impact on FR decision:**

## 3. Reconciliation Method

**Resolution approach taken:**
- [ ] Scope normalization applied
- [ ] Artifact integrity validated
- [ ] Reproduction/re-check executed
- [ ] Reliability ranking applied
- [ ] Confidence scoring recomputed

**Technical method and outcome:**

## 4. Confidence Statement

Apply the outcome confidence scoring rubric and record results:

| Dimension | Raw Score (0-4) | Weighted Score | Notes |
|---|---:|---:|---|
| Data quality |  |  |  |
| Sample representativeness |  |  |  |
| Outcome stability |  |  |  |
| External factor isolation |  |  |  |
| **Total** | - |  |  |

**Confidence Band:** High | Medium | Low

**Drivers affecting confidence:**

## 5. Final Recommendation

| Element | Value |
|---|---|
| Recommended action | Proceed / Proceed with Guardrails / Hold / Rollback / Contain |
| Owner signoff |  |
| Due date (UTC) |  |
| Guardrails required |  |
| Verification checkpoint |  |

**Recommendation rationale:**

## 6. Escalation Status

- Escalation required: Yes / No
- Escalated to:
- Escalation date (UTC):

---

**Sign-off:**
- Name:
- Role:
- Date (UTC):
```

## Reference Documents

### Confidence Rubric

Apply `docs/FR-OUTCOME-CONFIDENCE-SCORING-RUBRIC.md` when scoring confidence. Key thresholds:

| Confidence Band | Allowed actions |
|---|---|
| High | Close, Keep Monitoring |
| Medium | Keep Monitoring, Adjust (with owner sign-off) |
| Low | Adjust, Reopen, Rollback only |

### Escalation Flow

Apply escalation rules per `docs/FR-EVIDENCE-CONTRADICTION-ESCALATION-FLOW.md`:

- `Critical` severity: Immediate escalation to Product + Engineering leads
- Confidence `Low`: Escalation required before governance decision
- Unresolved conflict beyond 24 hours: Escalate in-thread

## Sample Reconciliation Note

```md
### FR Evidence Reconciliation Note

- FR ID: FR-02
- Issue: UNI-180
- Gate Stage: review
- Date (UTC): 2026-04-27
- Reconciliation Owner: Product Governance Lead

## 1. Evidence Sources Compared

| Source | Type | Owner | Timestamp (UTC) | Key Finding | Reliability |
|---|---|---|---|---|---|
| Metrics Dashboard | Quantitative | Data Team | 2026-04-27 09:00 | +23% throughput improvement | High |
| Support Ticket Triage | Qualitative | Support Lead | 2026-04-27 10:30 | +15% ticket volume for same workflow | Medium |
| Smoke Test Pass | Acceptance | Engineering | 2026-04-27 08:45 | All scenarios pass | High |

## 2. Discrepancy Summary

**Primary conflict statement:** Metrics show throughput improvement while support ticket volume for the same workflow has increased.

**Impact on FR decision:** Potential false-positive KPI signal. Need to determine if throughput gain is real or masking a new failure mode causing ticket volume increase.

## 3. Reconciliation Method

**Resolution approach taken:**
- [x] Scope normalization applied
- [x] Artifact integrity validated
- [x] Reproduction/re-check executed
- [x] Reliability ranking applied
- [x] Confidence scoring recomputed

**Technical method and outcome:**
- Normalized both metrics to same 7-day window and workflow boundary
- Validated all artifacts have proper timestamps and owner links
- Re-ran staging load test: passes at expected throughput
- Cross-referenced ticket sample: 8/12 tickets related to new user onboarding confusion, not functional failure
- Ranked metrics (telemetry > support > test) per reliability ordering

**Finding:** Throughput improvement is real. Ticket increase is driven by onboarding UX friction, not FR regression. Separate issue to be opened.

## 4. Confidence Statement

| Dimension | Raw Score (0-4) | Weighted Score | Notes |
|---|---:|---:|---|
| Data quality | 3.0 | 0.90 | Both sources properly instrumented |
| Sample representativeness | 3.0 | 0.75 | Full production population |
| Outcome stability | 3.0 | 0.75 | Sustained over 7 days |
| External factor isolation | 2.0 | 0.40 | Onboarding campaign overlap |
| **Total** | - | 2.80 |  |

**Confidence Band:** Medium

**Drivers affecting confidence:**
- Positive: Strong telemetry, reproducible test results, clear root cause identified
- Negative: Campaign confound possible, sample size borderline for support segment

## 5. Final Recommendation

| Element | Value |
|---|---|
| Recommended action | Proceed |
| Owner signoff | Product Governance Lead |
| Due date (UTC) | 2026-04-28 |
| Guardrails required | Monitor ticket trend for next 7 days; reopen if ticket rate resumes |
| Verification checkpoint | 2026-05-04 governance review |

**Recommendation rationale:** Throughput improvement is validated and real. Ticket volume increase is attributable to onboarding UX friction, not functional regression. Medium confidence driven by potential campaign confound; recommend monitoring guardrail.

## 6. Escalation Status

- Escalation required: No
- Escalated to: N/A
- Escalation date (UTC): N/A

---

**Sign-off:**
- Product Governance Lead
- 2026-04-27
```

## Next Steps

1. Apply this template when evidence conflict resolution is triggered
2. Reference confidence rubric for scoring dimensions
3. Escalate per escalation flow when severity is critical or confidence is low

_UniteCube - FR Evidence Governance_