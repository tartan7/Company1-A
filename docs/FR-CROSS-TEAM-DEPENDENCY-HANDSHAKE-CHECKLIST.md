# FR Cross-Team Dependency Handshake Checklist

- Date: 2026-04-27 (UTC)
- Issue: UNI-181
- Scope: Required handshake checklist for FR dependencies that cross Product, Support, Engineering, and external owners
- Owners: Dependency Requestor (accountable), Dependency Owner (responsible), Product/Support/Engineering leads (consulted)
- Related docs:
  - `docs/FR-FEATURE-OWNERSHIP-MATRIX.md`
  - `docs/FR-REQUEST-INTAKE-ACCEPTANCE-CHECKLIST.md`
  - `docs/PILOT-DEPENDENCY-MAP-TEMPLATE.md`
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`

## Purpose

Use this checklist before any FR work starts or changes scope due to a cross-team dependency.
A dependency is considered "handshaked" only when each required row is complete with owner, date, and evidence.

## When This Checklist Is Mandatory

Run this checklist when at least one condition is true:

1. Delivery depends on a team outside the issue's directly assigned function.
2. Work depends on external owner action (client, vendor, board, partner).
3. A dependency can slip release timing, acceptance, or rollout quality.
4. A blocker has no confirmed owner/date in the current issue thread.

## Dependency Handshake Checklist (Required)

| # | Check | Pass Standard | Owner | Evidence |
| --- | --- | --- | --- | --- |
| 1 | Dependency definition is explicit | Dependency statement includes deliverable, format, and acceptance condition in one concise block. | Dependency Requestor | Dependency statement in issue comment |
| 2 | Single accountable owner confirmed | One named dependency owner is explicitly acknowledged by comment or assignment. | Dependency Owner | Owner acknowledgment comment |
| 3 | Needed-by date committed in UTC | Date/time is concrete (`YYYY-MM-DD HH:MM UTC`) and tied to the consuming milestone. | Requestor + Owner | Committed date in dependency map or issue |
| 4 | Consumer impact is documented | Impact of missing date is recorded (scope cut, launch delay, risk escalation). | Requestor | Impact note with severity |
| 5 | Acceptance criteria agreed | Consumer and owner agree pass/fail criteria before handoff starts. | Requestor + Consumer Lead | Criteria block attached |
| 6 | Communication channel and cadence fixed | Primary channel, backup channel, and update cadence are named. | Product Lead | Communication plan entry |
| 7 | Escalation path pre-agreed | Escalation owner, trigger threshold, and SLA for response are explicit. | Product + Team Leads | Escalation matrix line item |
| 8 | Interim fallback defined | If dependency misses date, fallback path is pre-decided (workaround, scope split, resequence, or block). | Product + Engineering | Fallback decision note |
| 9 | Evidence artifact attached | Required artifact link(s) are attached and match agreed format. | Dependency Owner | URL/file IDs in issue |
| 10 | Handshake closure confirmed | Requestor confirms dependency complete and clears block in issue status/relations. | Dependency Requestor | Closure comment + issue update |

## Handshake Packet (Minimum Fields)

Attach these fields in the issue or linked document:

- Dependency ID and summary
- Requestor team and owner
- Dependency owner and backup contact
- Needed-by UTC date/time
- Acceptance criteria (pass/fail)
- Evidence artifact links
- Escalation owner and response SLA
- Fallback decision if due date misses

## Blocked-State Rules

1. If owner or needed-by date is missing, set issue to `blocked`.
2. If committed date is missed without accepted fallback, escalate within same business day.
3. If dependency is external, repeat unblock request with explicit owner/action at agreed cadence.
4. Remove `blockedByIssueIds` only after closure comment confirms evidence completeness.

## Copy/Paste Comment Block

```md
### FR Dependency Handshake Check
- FR ID:
- Dependency ID:
- Dependency Summary:
- Requestor Owner:
- Dependency Owner:
- Needed By (UTC):
- Acceptance Criteria:
- Evidence Links:
- Escalation Owner + Trigger:
- Fallback if Date Misses:
- Current Status: Open | Handshaked | At Risk | Blocked | Closed
- Next Action (owner + UTC date):
```

## Exit Criteria

Handshake can be considered complete only when all criteria are true:

1. Required checklist rows 1-10 are complete.
2. Owner/date/acceptance fields are present and unambiguous.
3. Evidence artifacts are attached and validated by requestor.
4. Issue dependency state (`blockedByIssueIds` and status) reflects real state.

## Operating Notes

- Keep all timestamps in UTC.
- For FR-01/FR-02 work, align ownership with `docs/FR-FEATURE-OWNERSHIP-MATRIX.md`.
- Revalidate open dependencies weekly during FR status review and monthly retrospective.

_UniteCube - FR Delivery Governance_
