# FR Release Readiness Signoff Checklist

- Date: 2026-04-26 (UTC)
- Issue: UNI-159
- Owners: Product (accountable), Engineering and Support (co-signers)
- Related docs:
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`
  - `docs/FR-ACCEPTANCE-TEST-EVIDENCE-INDEX-FORMAT.md`
  - `docs/SMOKE-TEST-PLAN-FR-01-FR-02.md`
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`
  - `docs/FR-INCIDENT-COMMUNICATION-TEMPLATE-PACK.md`

## Purpose

Use this checklist as the final signoff gate before releasing a feature request.
Release is authorized only when all required checks are `Pass` and all required signers have approved.

## Required Signers

| Role | Required | Responsibility |
| --- | --- | --- |
| Product Owner | Yes | Confirms delivered scope, user value, and release decision |
| Engineering Owner | Yes | Confirms build quality, operational safety, and rollback readiness |
| Support Owner | Yes | Confirms support readiness, escalation path, and user communication coverage |

Optional signers (as needed): Security, Compliance, Customer Success.

## Entry Criteria (Must Be True Before Signoff Starts)

- FR intake accepted with clear scope and acceptance criteria.
- Implementation handoff evidence is attached.
- Smoke and regression tests executed on release candidate build.
- Monitoring dashboards and alert thresholds configured for FR behavior.
- Rollback runbook link is present and verified against current artifact.

If any entry criterion is missing, stop signoff and return the FR to `in_progress`.

## Release Readiness Checklist (Required)

| # | Check | Pass Standard | Evidence Link | Owner |
| --- | --- | --- | --- | --- |
| 1 | Scope fidelity | Delivered behavior matches approved in-scope list with no unresolved ambiguity. | Issue/PR/demo link | Product |
| 2 | Acceptance criteria verification | Every acceptance criterion is tested and marked pass/fail with timestamp. | Test report | Engineering |
| 2a | Acceptance evidence index completeness | Evidence index uses standard columns and includes pass/fail/blocked aggregation plus missing-evidence count. | Evidence index doc link | Engineering |
| 3 | Smoke/regression result | Smoke + core regression suite pass on release candidate. | CI run or test log | Engineering |
| 4 | Monitoring coverage | Alerts exist for primary failure modes and match threshold doc. | Dashboard + threshold link | Engineering |
| 5 | Rollback readiness | Rollback steps have been dry-run or validated against current build. | Runbook + validation note | Engineering |
| 6 | Support playbook readiness | Support has known issues, triage path, and first-response script. | Support runbook | Support |
| 7 | Communication readiness | Internal and customer-facing release notes/messages are prepared. | Comms draft link | Product + Support |
| 8 | Incident escalation path | Named on-call owner and escalation route are confirmed. | Escalation roster | Engineering + Support |
| 9 | Risk disposition | Open risks are accepted with owner and deadline, or resolved. | Risk register entry | Product |
| 10 | Go/No-Go alignment | Product, Engineering, and Support explicitly record `Go`, `Conditional Go`, or `No-Go`. | Decision record | All required signers |

## Conditional Go Guardrails (Required When Decision Is Conditional)

Document all items below before release:

- Reduced rollout cohort and targeting rule.
- Explicit watch window in UTC (start/end).
- Named rollback trigger(s) with threshold values.
- Named owner authorized to execute rollback.

## Signoff Record Template

Copy this into the FR issue comment thread for each release decision:

```md
### FR Release Readiness Signoff
- FR ID:
- Decision Date (UTC):
- Release Type: Standard | Conditional | Hold
- Checklist Result: Pass | Fail
- Failed Checks (if any):
- Guardrails (if Conditional):
- Rollback Trigger(s):
- Evidence Pack Links:
- Acceptance Test Evidence Index Link:

Signers
- Product Owner: Approved | Not Approved (name, UTC timestamp)
- Engineering Owner: Approved | Not Approved (name, UTC timestamp)
- Support Owner: Approved | Not Approved (name, UTC timestamp)

Next Action (owner + UTC date):
```

## Exit Rules

- `Go`: Move release issue to execution/release step and start monitoring watch window.
- `Conditional Go`: Release only with documented guardrails; assign one owner for watch-window tracking.
- `No-Go`: Keep issue open, create remediation action items, and re-run signoff after fixes.

## Governance Notes

- Do not treat merge completion as release readiness signoff.
- Missing any required signer automatically results in `No-Go`.
- Keep all timestamps in UTC to avoid cross-team ambiguity.
- Reuse this checklist for all FR releases and maintain links in the issue thread.
