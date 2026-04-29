# FR Metric Drift Response Checklist

- Date: 2026-04-27 (UTC)
- Issue: UNI-178
- Scope: Operational response checklist for FR metric drift detection, triage, containment, and closure
- Owners: Product (decision owner), Support (first response), Engineering (signal integrity + technical containment)
- Related docs:
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`
  - `docs/FR-ROLLBACK-DECISION-THRESHOLDS.md`
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`
  - `docs/FR-EVIDENCE-FRESHNESS-POLICY.md`
  - `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`
  - `docs/FR-INCIDENT-COMMUNICATION-TEMPLATE-PACK.md`

## Purpose

Use this checklist when FR outcome or reliability metrics drift outside expected range.
The objective is to classify severity quickly, protect users with containment, and close the incident with evidence-backed follow-through.

## Metric Drift Definition (Trigger to Start Checklist)

Treat metric drift response as required when at least one condition is true:

1. Any FR warning/critical threshold in `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md` is met.
2. A KPI is outside its approved operating range for the period defined in the FR decision log or monthly summary.
3. A recurring trend indicates sustained deterioration, even if a hard critical threshold is not yet reached.
4. Evidence freshness fails for a decision-critical metric (`F0`/`F1`) and decision-making is at risk.

## Severity Mapping (Operational)

Use this baseline mapping unless the FR-specific threshold doc overrides it.

| Severity | Drift Pattern | First Response Target | Containment Decision Target |
| --- | --- | --- | --- |
| Sev-1 | Immediate major impact (for example, threshold breach with active user impact or unknown blast radius) | 15 minutes | 60 minutes |
| Sev-2 | Material degradation with bounded scope and workaround possible | 30 minutes | 1 business day |
| Sev-3 | Moderate drift trend with controlled impact | 4 business hours | 3 business days |
| Sev-4 | Minor variance without immediate business risk | 1 business day | Backlog or next review cycle |

## Response Checklist (Required)

Mark each item `Done` before closure.

| # | Check | Pass Standard | Owner | Evidence |
| --- | --- | --- | --- | --- |
| 1 | Drift acknowledged and incident record opened | Incident log includes metric name, threshold/range violated, detection time in UTC, and reporter source | Support | Incident comment link |
| 2 | Severity assigned | Severity is explicitly recorded with rationale tied to business impact and blast radius | Product + Support | Severity note |
| 3 | Evidence freshness validated | Decision-critical data meets freshness class (`F0/F1/F2`) or issue is set to `Hold` with freshness alert | Engineering + Product | Freshness check block |
| 4 | Data integrity check completed | Metric source quality verified (no known counting gap, schema mismatch, duplicate inflation, or missing ingest window) | Engineering | Validation notes/logs |
| 5 | Blast radius estimated | Affected tenants/workflows/users and confidence level are documented | Product | Scope estimate |
| 6 | Containment decision made | `rollback`, `patch`, or `workaround` decision recorded using threshold policy | Product + Engineering | Decision log entry |
| 7 | Containment executed and verified | Corrective action applied and post-action behavior validated against expected safe state | Engineering + Support | Before/after evidence |
| 8 | Internal + external communication sent | Required stakeholders updated with UTC timestamps, status, impact, ETA, and next update time | Product + Support | Communication links |
| 9 | Monitoring watch window set | Named owner tracks metric recovery for a defined UTC watch window with explicit rollback re-trigger | Product + Engineering | Watch-window plan |
| 10 | Closure criteria met | Metric returns to acceptable range for required intervals and follow-up actions are assigned with due dates | Product (approver) | Closure summary |

## Mandatory Decision Rules

1. If blast radius is unknown and decision SLA is at risk, default to rollback/containment path.
2. If evidence freshness for required `F0` or `F1` data fails, set decision to `Hold` until refreshed or exception is approved.
3. If containment action does not stabilize metric trend in the first watch window, escalate severity and reopen decision flow.
4. Do not close the incident without named preventive follow-up action(s), owner, and due date.

## Required Comment Block (Copy/Paste)

```md
### FR Metric Drift Response Check
- FR ID:
- Issue:
- Metric Name:
- Drift Trigger:
- Detected At (UTC):
- Current Severity: Sev-1 | Sev-2 | Sev-3 | Sev-4
- Evidence Freshness: Pass | Hold | Exception
- Blast Radius:
- Containment Decision: Rollback | Patch | Workaround
- Containment Owner:
- Watch Window (UTC start/end):
- Current Status: Open | Mitigating | Monitoring | Closed
- Closure Criteria Result: Pass | Fail
- Follow-up Actions (owner + due UTC):
- Next Action (owner + UTC date):
```

## Exit Criteria

Incident can move to `done` only when all criteria are true:

1. Checklist rows 1-10 are complete with linked evidence.
2. Metric trend has returned to acceptable range for the required observation window.
3. Product, Engineering, and Support agree closure in the issue thread.
4. Any prevention/improvement actions are tracked in follow-up issue(s).

## Operating Notes

- Keep all operational timestamps in UTC.
- Prefer FR-specific threshold docs when available; this checklist defines the default response discipline.
- Re-review this checklist monthly during FR retrospective cadence.

_UniteCube - FR Delivery Governance_
