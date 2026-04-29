# FR Sunset Decision Checklist

- Date: 2026-04-27 (UTC)
- Issue: UNI-173
- Scope: Decision gate for sunsetting (deprecating and/or retiring) an existing feature request outcome
- Owners: Product (accountable), Engineering and Support (required co-signers)
- Related docs:
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`
  - `docs/FR-RELEASE-READINESS-SIGNOFF-CHECKLIST.md`
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`
  - `docs/FR-INCIDENT-COMMUNICATION-TEMPLATE-PACK.md`
  - `docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md`

## Purpose

Use this checklist before deciding to sunset any FR-delivered capability.
A sunset decision is approved only when required checks pass and required signers explicitly record the decision.

## Sunset Definitions

| Term | Definition |
| --- | --- |
| Deprecation | Feature remains available but is formally marked for removal and no longer receives net-new enhancements. |
| Retirement | Feature is disabled/removed from production use for standard workflows. |
| Sunset decision | Formal governance decision that chooses a deprecation or retirement path and confirms controls. |

## Required Signers

| Role | Required | Responsibility |
| --- | --- | --- |
| Product Owner | Yes | Confirms customer impact, business rationale, and final decision posture |
| Engineering Owner | Yes | Confirms technical deactivation path, data handling, and rollback feasibility |
| Support Owner | Yes | Confirms communication readiness, escalation path, and support runbook updates |

Optional signers (as needed): Security, Compliance, Customer Success, Revenue Operations.

## Entry Criteria (Must Be True Before Scoring)

- Sunset candidate is explicitly identified (FR ID, capability name, and current usage context).
- Business rationale for sunset is documented (adoption trend, strategic shift, cost/risk profile, or replacement path).
- Current-state usage baseline is attached (active users/accounts, last 30/60/90 day trend).
- Dependency map is available (integrations, dashboards, support workflows, and customer commitments).
- Named owner exists for migration/transition execution.

If any entry criterion is missing, stop the sunset decision and keep the capability in current state.

## Sunset Decision Checklist (Required)

| # | Check | Pass Standard | Evidence Link | Owner |
| --- | --- | --- | --- | --- |
| 1 | Scope and rationale clarity | Sunset scope is explicit: what is affected, what is not, and why now. | Decision brief | Product |
| 2 | Usage impact quantified | Affected users/accounts and critical workflows are measured and time-bounded in UTC. | Usage report | Product + Engineering |
| 3 | Replacement/migration path | Supported alternative exists or `No Replacement` is explicitly approved with rationale. | Migration plan | Product |
| 4 | Dependency risk coverage | Internal/external dependencies are listed with risk rating and mitigation owner. | Dependency map | Engineering |
| 5 | Data retention and export plan | Data lifecycle decision (retain/archive/delete/export) is documented with retention window. | Data handling note | Engineering + Compliance |
| 6 | Support readiness | Support scripts, macros, FAQs, and escalation routes are updated for sunset scenarios. | Support playbook update | Support |
| 7 | Customer communication package | Audience-specific notices, timeline, and action instructions are prepared and reviewed. | Communication draft | Product + Support |
| 8 | Rollback/containment path | Time-bound rollback or temporary re-enable path is defined when feasible. | Rollback note/runbook | Engineering |
| 9 | Success/failure monitoring | Post-sunset monitoring signals and threshold triggers are defined. | Monitoring plan | Engineering + Support |
| 10 | Decision signoff | Required signers record `Approve`, `Conditional Approve`, or `Hold`. | Comment record | All required signers |

## Hard-Stop Blockers (Override Any Recommendation)

If any item below is unresolved, decision is automatically `Hold`:

- Legal/compliance requirement for data retention or notice is unclear/unmet.
- No owner is assigned for migration support during the transition window.
- Critical customer workflow has no validated alternative path.
- Support and incident handling updates are missing.
- Required signer is missing.

## Decision Outcomes

| Outcome | Meaning | Required Follow-Up |
| --- | --- | --- |
| Approve | Sunset can proceed as planned. | Execute communications and transition plan with dated milestones. |
| Conditional Approve | Sunset may proceed only with stated guardrails. | Track guardrails in issue comments with owner and UTC due date. |
| Hold | Sunset cannot proceed yet. | Create remediation tasks and re-run checklist after completion. |

## Required Issue Comment Template

Copy this into the FR issue thread for every sunset decision:

```md
### FR Sunset Decision Record
- FR ID:
- Decision Date (UTC):
- Decision: Approve | Conditional Approve | Hold
- Sunset Type: Deprecation | Retirement
- Checklist Result: Pass | Fail
- Failed Checks (if any):
- Hard-Stop Blockers: None | [list]
- Affected Users/Accounts:
- Replacement Path:
- Data Handling Plan:
- Communication Window (UTC):
- Rollback/Containment Path:
- Evidence Links:

Signers
- Product Owner: Approved | Not Approved (name, UTC timestamp)
- Engineering Owner: Approved | Not Approved (name, UTC timestamp)
- Support Owner: Approved | Not Approved (name, UTC timestamp)

Next Action (owner + UTC date):
```

## Worked Decision Example

Use this as a reference for expected detail level in an actual sunset review.

```md
### FR Sunset Decision Record
- FR ID: FR-02 Legacy Manual Approval Step
- Decision Date (UTC): 2026-05-15T14:30:00Z
- Decision: Conditional Approve
- Sunset Type: Retirement
- Checklist Result: Pass
- Failed Checks (if any): None
- Hard-Stop Blockers: None
- Affected Users/Accounts: 11 accounts, 26 weekly operators
- Replacement Path: New auto-routing flow in FR-09 with admin override
- Data Handling Plan: Archive approval history for 180 days; export CSV available on request
- Communication Window (UTC): 2026-05-16T09:00:00Z to 2026-05-23T23:59:00Z
- Rollback/Containment Path: Re-enable legacy step within 30 minutes if P1 incident occurs
- Evidence Links:
  - Usage report: `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md` output
  - Support update: `docs/FR-01-FR-02-ROLLOUT-NOTE-AND-SUPPORT-PLAYBOOK.md`
  - Rollback note: `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`

Signers
- Product Owner: Approved (A. Lee, 2026-05-15T14:35:00Z)
- Engineering Owner: Approved (R. Singh, 2026-05-15T14:38:00Z)
- Support Owner: Approved (M. Chen, 2026-05-15T14:41:00Z)

Next Action (owner + UTC date): Publish account communications and open FR-09 migration tracker (Product, 2026-05-16T09:00:00Z)
```

## Exit Rules

- `Approve`: Start sunset execution and publish milestone checkpoints in issue comments.
- `Conditional Approve`: Start only after all guardrails are explicitly documented with owners and due dates.
- `Hold`: Keep issue open, assign remediation actions, and schedule next review checkpoint.

## Operating Notes

- Do not use sunset as a substitute for unresolved reliability or support defects; route those through incident/remediation workflow first.
- Keep all decision timestamps and transition deadlines in UTC.
- Reuse this checklist for all FR sunset/deprecation decisions to maintain governance consistency.
