# FR-01 / FR-02 Operational Alert Thresholds

- Date: 2026-04-26 (UTC)
- Issue: UNI-141
- Scope: FR-01 template update failures, FR-02 monthly report dispatch failures
- Constraint: Uses existing instrumentation and dashboard data only (no new infrastructure)
- Related docs:
  - `docs/INITIAL-FEEDBACK-ADOPTION-METRICS.md`
  - `docs/FR-01-FR-02-ROLLOUT-NOTE-AND-SUPPORT-PLAYBOOK.md`
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`

## Data Sources and Metric Mapping

| Alert Class | Primary Metric / Signal | Where it already exists |
| --- | --- | --- |
| FR01-TEMPLATE-UPDATE-FAILURE | `fr01_template_save_validation_failed` and derived failure rate | localStorage key `unitecube_adoption_metrics_v1` (event counters), console metric sink |
| FR02-REPORT-DISPATCH-FAILURE | Monthly report run logs with `status=error` for `月次レポート作成・送信` | `dashboard.html` execution log table + summary cards |

## Threshold Table (Warning / Critical)

| Alert Class | Severity | Trigger Threshold | Notify | First Response SLO | Mitigation Completion Target |
| --- | --- | --- | --- | --- | --- |
| FR01-TEMPLATE-UPDATE-FAILURE | Warning | `fr01_template_save_validation_failed >= 3` within 30 minutes **or** FR-01 validation failure rate `>= 30%` in the last 24h (min 10 attempts) | L1 Support + Product/Ops channel | 30 minutes | 4 business hours |
| FR01-TEMPLATE-UPDATE-FAILURE | Critical | `fr01_template_save_validation_failed >= 8` within 30 minutes **or** no successful `fr01_template_updated` observed for 24h while failures continue | L1 + L2 immediately; page L3 Engineering on-call | 15 minutes | 60 minutes |
| FR02-REPORT-DISPATCH-FAILURE | Warning | 1 failed monthly report dispatch (`status=error`) in last 24h | L1 Support + Product/Ops channel | 30 minutes | 4 business hours |
| FR02-REPORT-DISPATCH-FAILURE | Critical | 2 consecutive failed monthly report dispatches **or** 3 failed dispatches in 24h | L1 + L2 immediately; page L3 Engineering on-call | 15 minutes | 60 minutes |

Notes:

- FR-01 thresholds are based on already-emitted adoption counters; no backend collector is required.
- FR-02 thresholds rely on existing dashboard execution logs (manual or scripted daily check is sufficient).

## Ownership and Escalation Routing

| Alert Class | Primary Owner | Secondary Owner | L3 Escalation Owner | Escalate When |
| --- | --- | --- | --- | --- |
| FR01-TEMPLATE-UPDATE-FAILURE | L1 Support | Product/Ops | Engineering on-call | Critical threshold hit, or warning not mitigated inside target window |
| FR02-REPORT-DISPATCH-FAILURE | L1 Support | Product/Ops | Engineering on-call | Critical threshold hit, or warning repeats for 2 daily cycles |

## Runbook Snippet: FR01-TEMPLATE-UPDATE-FAILURE

1. Confirm metric evidence from `unitecube_adoption_metrics_v1` counters (`fr01_template_save_validation_failed`, `fr01_template_updated`).
2. Validate if failures are admin input errors (unsupported placeholders/length) or save-persist issues.
3. If warning: guide admin using supported placeholders and 500-char cap; re-test save.
4. If critical or persistence mismatch: execute FR-01 rollback steps from `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md` (Recovery Sequence A) and escalate L3.
5. Post incident update with UTC timestamps, owner, observed impact, and current status.

## Runbook Snippet: FR02-REPORT-DISPATCH-FAILURE

1. Confirm failed rows in `dashboard.html` logs for `月次レポート作成・送信` (`status=error`).
2. Validate current recipient configuration in `ワークフロー設定` and compare to approved source.
3. If warning: correct recipient list issues and run controlled dispatch verification.
4. If critical or repeated failures: execute FR-02 rollback steps from `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md` (Recovery Sequence B) and escalate L3.
5. Post incident update with failed run timestamps, affected tenant/workflow scope, and containment status.

## Daily/Weekly Operational Cadence (No New Infra)

1. Daily (L1): review dashboard execution logs for FR-02 dispatch status and apply thresholds.
2. Weekly (L2): review FR-01 counters/failure rate from localStorage capture procedure in `docs/INITIAL-FEEDBACK-ADOPTION-METRICS.md`.
3. If thresholds fire: log an issue comment immediately with severity, owner, and ETA using the communication templates in `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`.

## Adoption Constraint Compliance

This threshold model is intentionally compatible with current instrumentation outputs and support workflows. It does not require:

- new event collectors,
- new alerting vendors,
- backend schema changes.
