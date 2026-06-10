# FR Post-Launch Anomaly Review Template (v1)

- Date: YYYY-MM-DD (UTC)
- Issue: [UNI-XXX](/UNI/issues/UNI-XXX)
- Scope: Post-launch anomaly review for `FR-XX`
- Owner: Product (Accountable), Engineering (Technical Evidence), Support/Ops (Impact Evidence)
- Related docs:
  - `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`
  - `docs/FR-EVIDENCE-FRESHNESS-POLICY.md`
  - `docs/FR-INCIDENT-COMMUNICATION-TEMPLATE-PACK.md`
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`
  - `docs/FR-ROLLBACK-DECISION-THRESHOLDS.md`
  - `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md`

## 1. Purpose

Use this template after a launch anomaly is contained to produce a consistent, evidence-backed review.
The review output must explain impact, confirm root cause confidence, validate rollback decision quality, and assign preventive actions with owners and due dates.

## 2. Trigger and Timing

- Trigger:
  - Any `Sev-1` or `Sev-2` anomaly after FR launch.
  - Repeated `Sev-3` anomaly (same failure mode appears 2+ times in 14 days).
  - Any anomaly that triggered rollback, freeze, or customer escalation.
- Timing target:
  - Draft review within 1 business day of incident closure.
  - Final review signed off within 3 business days.

## 3. Review Header

| Field | Value |
| --- | --- |
| Review ID | `FRX-AR-YYYYMMDD-##` |
| FR ID / Name | `FR-XX / [Feature Name]` |
| Incident ID(s) | `FRX-INC-...` |
| Review Owner | [Name / Role] |
| Incident Window (UTC) | [start] -> [end] |
| Severity | Sev-1 / Sev-2 / Sev-3 |
| Status | Draft / In Review / Final |
| Final Sign-off Date (UTC) | YYYY-MM-DD |

## 4. Anomaly Summary (Executive)

- What happened (2-4 sentences):
  - [Observed failure, where it appeared, and who was affected]
- Business impact:
  - [Users/tenants affected, key KPI impact, SLA or commitment impact]
- Containment summary:
  - [Workaround, hotfix, rollback, or traffic controls used]
- Current risk posture:
  - [Stable / Monitoring / Elevated risk]

## 5. Detection and Response Performance

| Metric | Target | Actual | Status | Notes |
| --- | --- | --- | --- | --- |
| Time to detect (TTD) | [X min] | [Y min] | Met / Missed |  |
| Time to acknowledge | [X min] | [Y min] | Met / Missed |  |
| Time to triage start | [X min/hr] | [Y min/hr] | Met / Missed |  |
| Time to containment (TTC) | [X min/hr] | [Y min/hr] | Met / Missed |  |
| Time to customer/internal first update | [X min/hr] | [Y min/hr] | Met / Missed |  |
| Time to full recovery (TTR) | [X hr/day] | [Y hr/day] | Met / Missed |  |

## 6. Evidence Checklist

Attach links or references for every item:

- [ ] Alert/dashboard evidence for first detection timestamp.
- [ ] Incident timeline log with UTC timestamps.
- [ ] Reproduction evidence (logs, traces, request IDs, screenshots).
- [ ] Impact quantification evidence (users, transactions, KPI variance).
- [ ] Communications record (internal + customer-facing updates).
- [ ] Rollback/workaround decision evidence and validation checks.
- [ ] Recovery verification evidence (health checks and stability window).

## 7. Timeline (UTC)

| Timestamp | Event | Owner | Evidence Link |
| --- | --- | --- | --- |
| YYYY-MM-DD HH:MM | Anomaly detected | [Role] | [Link] |
| YYYY-MM-DD HH:MM | Incident opened + severity assigned | [Role] | [Link] |
| YYYY-MM-DD HH:MM | Triage started | [Role] | [Link] |
| YYYY-MM-DD HH:MM | Containment decision made | [Role] | [Link] |
| YYYY-MM-DD HH:MM | Stakeholder update sent | [Role] | [Link] |
| YYYY-MM-DD HH:MM | Recovery verified | [Role] | [Link] |
| YYYY-MM-DD HH:MM | Incident closed | [Role] | [Link] |

## 8. Root Cause Analysis

### 8.1 Confirmed Root Cause Statement

- Primary cause:
  - [Specific technical/process cause, not a symptom]
- Contributing factors:
  - [Process, tooling, alerting, handoff, dependency, or external contributors]
- Confidence level:
  - High / Medium / Low
- Why this confidence level:
  - [Brief evidence-backed rationale]

### 8.2 Five-Whys (Minimum)

| Why Level | Question | Answer | Evidence |
| --- | --- | --- | --- |
| Why #1 | Why did the anomaly occur? |  |  |
| Why #2 | Why was that condition present? |  |  |
| Why #3 | Why was that not prevented pre-launch? |  |  |
| Why #4 | Why was it not detected earlier? |  |  |
| Why #5 | Why does process/tooling allow recurrence risk? |  |  |

## 9. Rollback and Decision-Quality Review

| Decision Point | What Was Decided | Decision Time (UTC) | Was Threshold Criteria Used? (Y/N) | Evidence Link | Quality Rating (Good / Partial / Weak) |
| --- | --- | --- | --- | --- | --- |
| Severity assignment |  |  |  |  |  |
| Containment path (fix/workaround/rollback) |  |  |  |  |  |
| Rollback execution (if used) |  |  |  |  |  |
| Recovery confirmation |  |  |  |  |  |
| Incident closure |  |  |  |  |  |

Decision-quality checks:

- [ ] Rollback/containment decision mapped to documented threshold policy.
- [ ] Decision owner and timestamp were explicit in incident thread.
- [ ] Customer/stakeholder update matched actual technical state.
- [ ] Closure required a defined stability observation window.

## 10. What Worked / What Failed

| Category | Notes |
| --- | --- |
| What worked well | [Detection, triage, comms, mitigation strengths] |
| Gaps / failures | [Process or technical failures observed] |
| Near misses | [What almost failed but was caught in time] |
| Tooling or monitoring gaps | [Alert quality, missing dashboard, weak signal] |

## 11. Preventive Action Plan

| Action ID | Action | Type (Corrective/Preventive) | Owner | Due Date (UTC) | Success Metric | Linked Issue |
| --- | --- | --- | --- | --- | --- | --- |
| AR-001 |  |  |  | YYYY-MM-DD |  | [UNI-XXX](/UNI/issues/UNI-XXX) |
| AR-002 |  |  |  | YYYY-MM-DD |  |  |
| AR-003 |  |  |  | YYYY-MM-DD |  |  |

Minimum action mix:

- At least one technical prevention action.
- At least one process or communication improvement action.
- At least one monitoring/alert quality action.

## 12. Portfolio Follow-Through

- [ ] FR monthly impact summary updated with anomaly and outcomes.
- [ ] Risk register updated (if recurrence risk remains).
- [ ] Relevant runbook/checklist updated.
- [ ] Reviewer calibration or team enablement action scheduled (if decision variance observed).

## 13. Sign-off

| Role | Name | Decision | Date (UTC) |
| --- | --- | --- | --- |
| Product Owner |  | Approve / Rework | YYYY-MM-DD |
| Engineering Lead |  | Approve / Rework | YYYY-MM-DD |
| Support/Ops Lead |  | Approve / Rework | YYYY-MM-DD |

Final closure rule:
- Mark review final only when all high-priority preventive actions have owners/due dates and all sign-off decisions are `Approve`.

## 14. Copy/Paste Review Record

```md
### FR Post-Launch Anomaly Review Record
- Review ID:
- FR ID / Name:
- Incident ID(s):
- Severity:
- Incident Window (UTC):
- Root Cause (confirmed):
- Root Cause Confidence:
- Time to Detect / Contain / Recover:
- Rollback Used (Y/N):
- Primary Business Impact:
- Top 3 Preventive Actions:
  1.
  2.
  3.
- Portfolio Docs Updated:
- Final Sign-off Date (UTC):
```

## 15. Sample Anomaly Entry (Example)

Use this as a reference for expected review detail and evidence quality.

| Field | Example |
| --- | --- |
| Review ID | `FR2-AR-20260503-01` |
| FR ID / Name | `FR-02 / Monthly Report Recipient Management` |
| Incident ID(s) | `FR2-INC-20260503-01` |
| Severity | `Sev-2` |
| Incident Window (UTC) | `2026-05-03 09:12 -> 2026-05-03 13:40` |
| Root Cause | Retry worker deployed with stale queue schema mapping, causing message parse failures on recipient batches >100 |
| Root Cause Confidence | `High` (confirmed by log signatures and rollback recovery) |
| Containment | Rolled back worker image to prior stable build at `2026-05-03 10:18 UTC` |
| Business Impact | 14 delayed monthly report deliveries across 3 tenant accounts |
| Preventive Action #1 | Add schema compatibility check in CI for queue worker deployments (`Owner: Eng`, `Due: 2026-05-08`) |
| Preventive Action #2 | Add batch-size stress test to FR-02 release readiness checklist (`Owner: QA`, `Due: 2026-05-09`) |
| Preventive Action #3 | Add Sev-2 customer message template shortcut to support runbook (`Owner: Support`, `Due: 2026-05-06`) |

---

_UniteCube - FR Post-Launch Governance_
