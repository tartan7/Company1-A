# FR Rollback Decision Thresholds (FR-01 / FR-02)

- Date: 2026-04-26 (UTC)
- Issue: UNI-154
- Audience: L1 Support, L2 Product/Ops, L3 Engineering On-call
- Related docs:
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`
  - `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`
  - `docs/FR-01-FR-02-ROLLOUT-NOTE-AND-SUPPORT-PLAYBOOK.md`

## Purpose

Define clear thresholds for deciding whether FR incidents should be rolled back immediately or patched in place, with explicit ownership, approval path, and response SLA.

## Decision Threshold Matrix (Rollback vs Patch)

| Severity | Blast radius | User impact | Default decision | Decision SLA |
| --- | --- | --- | --- | --- |
| Sev-1 | Multi-tenant, or unknown radius | Incorrect outbound content/routing is live now, compliance/legal risk, or delivery blocked for scheduled window | Rollback immediately | 15 minutes from detection |
| Sev-2 | Single tenant or bounded cohort | Wrong content/routing with active customer-visible impact but workaround exists | Rollback unless patch can be validated and shipped within 60 minutes | 30 minutes from detection |
| Sev-3 | Single tenant, pre-send, bounded and reversible | No customer-visible send yet, low-risk defect in editable config | Patch in place with monitoring | 1 business hour from detection |

## Trigger Conditions Requiring Rollback (Must Roll Back)

1. Any Sev-1 condition is met.
2. Blast radius cannot be confirmed within the decision SLA.
3. Patch hypothesis cannot be validated with evidence inside the Sev-2 decision window.
4. Persistent mismatch is observed after patch attempt (UI state differs from effective outbound behavior).
5. Incident repeats after patch within one scheduled run window.

## Trigger Conditions Allowing Patch-In-Place

All conditions below must be true:

1. Classified as Sev-3, or Sev-2 with bounded blast radius.
2. Last known good state is preserved and recoverable.
3. Patch can be verified through smoke checks without waiting for next monthly cycle.
4. Product/Ops and Engineering on-call agree risk is lower than rollback risk.
5. Monitoring owner is assigned until two clean validation checks complete.

## Decision Owner and Approval Path

| Severity | Decision owner | Required approvers | Escalation path |
| --- | --- | --- | --- |
| Sev-1 | Engineering on-call (L3) | Product/Ops lead + Incident commander | Immediate escalation to CTO if decision SLA is at risk |
| Sev-2 | Product/Ops lead (L2) | Engineering on-call (L3) | Escalate to CTO if owner/approver disagree for >15 minutes |
| Sev-3 | Product/Ops lead (L2) | L1 Support acknowledgment | Escalate to Engineering on-call if any validation check fails |

## Required Evidence Before Decision

Capture this evidence before selecting rollback or patch:

1. Incident metadata: UTC timestamp, tenant/account, workflow (FR-01 or FR-02), reporter.
2. Before-state evidence: screenshot and text capture of current template/recipient list.
3. Target safe state source: approved rollout note, prior accepted config, or signed support request.
4. Blast radius estimate: affected tenants/users/messages/reports and confidence level.
5. Reproduction/validation result: one controlled check showing current failure mode.

If items 2-4 are incomplete and SLA is at risk, default to rollback.

## Operational Continuity Links

- Use triage workflow and severity handling from `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`.
- Use customer/internal comms format from `docs/FR-01-FR-02-ROLLOUT-NOTE-AND-SUPPORT-PLAYBOOK.md`.
- Execute rollback steps from `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`.
- Use alert thresholds from `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md` to trigger the decision flow.

## Decision Log Entry (Required)

For every incident, add a thread entry with:

1. Severity and blast radius classification.
2. Decision (`rollback` or `patch`) and rationale.
3. Owner and approver names.
4. Decision timestamp and SLA compliance result.
5. Next validation checkpoint time.
