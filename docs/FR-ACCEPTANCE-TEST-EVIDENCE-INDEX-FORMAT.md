# FR Acceptance Test Evidence Index Format (v1)

- Date: 2026-04-26 (UTC)
- Issue: UNI-165
- Scope: Standard table format for indexing acceptance-test evidence across FR issues
- Owners: Engineering (maintainer), Product and Support (review consumers)
- Related docs:
  - `docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md`
  - `docs/FR-RELEASE-READINESS-SIGNOFF-CHECKLIST.md`
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`

## Purpose

Define one lightweight, auditable index for acceptance-test evidence so release and closure decisions can verify pass/fail status quickly and identify missing artifacts before signoff.

## Required Table Columns

Use this exact column order in markdown tables:

| Issue ID | Scenario | Result | Artifact Link | Verifier | Date (UTC) |
| --- | --- | --- | --- | --- | --- |

Column rules:

- `Issue ID`: Paperclip issue identifier, for example `UNI-101`.
- `Scenario`: Test scenario or acceptance criterion reference, for example `AC-2 invalid-email validation`.
- `Result`: `Pass`, `Fail`, or `Blocked`.
- `Artifact Link`: Direct URL/path to evidence (CI run, test log, screenshot, or checklist entry). Use one canonical link.
- `Verifier`: Person/team who verified the result, for example `engineering@oncall` or `A. Sato`.
- `Date (UTC)`: Verification date in `YYYY-MM-DD` (append time if needed for high-risk releases).

## Pass/Fail Aggregation Section (Required)

Include this section directly below the table:

```md
## Aggregation
- Total Scenarios:
- Pass:
- Fail:
- Blocked:
- Missing Evidence:
- Overall Status: Pass | Fail | Hold
```

Aggregation rules:

1. `Total Scenarios` is the count of expected acceptance scenarios for current release scope.
2. `Missing Evidence = Total Scenarios - (Pass + Fail + Blocked)` when any expected scenario has no table row or no artifact link.
3. `Overall Status` must be:
   - `Pass` when `Fail = 0`, `Blocked = 0`, and `Missing Evidence = 0`
   - `Fail` when `Fail > 0`
   - `Hold` when `Blocked > 0` or `Missing Evidence > 0`

## Missing Evidence Warning Rule

If any scenario lacks artifact evidence, add this warning block and keep release decision at `Hold`:

```md
### Missing Evidence Warning
- Affected Scenario(s):
- Missing Artifact Type:
- Owner to Attach:
- Due (UTC):
- Impact on Signoff:
- Next Action:
```

Use the same owner and escalation behavior as `FR Evidence Attachment Standards` (Evidence Gap Notice path).

## Lightweight Example (3 Entries)

| Issue ID | Scenario | Result | Artifact Link | Verifier | Date (UTC) |
| --- | --- | --- | --- | --- | --- |
| UNI-101 | AC-1 user can submit intake form | Pass | `https://ci.example/runs/4129` | N. Kim (Engineering) | 2026-04-25 |
| UNI-101 | AC-2 invalid email shows inline error | Pass | `https://ci.example/runs/4130` | N. Kim (Engineering) | 2026-04-25 |
| UNI-101 | AC-3 support receives triage event | Blocked | `https://logs.example/query/triage-event-check` | M. Ito (Support) | 2026-04-25 |

## Aggregation
- Total Scenarios: 3
- Pass: 2
- Fail: 0
- Blocked: 1
- Missing Evidence: 0
- Overall Status: Hold

## Usage Notes

- Create one index section per FR release candidate.
- Link the index from signoff and closure records.
- Keep timestamps in UTC for all entries.

_UniteCube - FR Delivery Governance_
