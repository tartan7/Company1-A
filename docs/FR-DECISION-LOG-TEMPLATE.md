# FR Decision Log Template (v1)

- Date: YYYY-MM-DD
- Version: 1.0
- Owner: Product Governance Lead
- Review Cadence: Monthly Governance Review

## Purpose

Use this log to record monthly governance decisions for feature requests (FRs).
The log is append-only: never delete historical decisions. If a decision changes, add a new row and mark the older row as superseded.

## Decision Logging Rules

1. Log every monthly FR governance outcome: `Approved`, `Deferred`, `Reversed`, `Cancelled`.
2. Keep the history append-only. Do not rewrite prior rationale after sign-off.
3. When replacing a prior decision, add a new row and set:
- New row `Supersedes Decision ID` = prior `Decision ID`
- Old row `Status` = `Superseded`
4. Include links to the execution issue and post-release metric source.
5. Every active decision must include a follow-up date and named owner.

## FR Decision Log

| Decision ID | Decision Date (UTC) | FR ID | FR Title | Outcome (Approved / Deferred / Reversed / Cancelled) | Decision Owner | Option Set Considered | Rationale | Expected Impact | Follow-Up Date | Implementation Issue | Post-Release Metric Link | Status (Active / Superseded) | Supersedes Decision ID | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| FRD-2026-04-001 | 2026-04-26 | FR-03 | Lead Qualification Routing Rules | Approved | Product Lead | 1) rules-only v1, 2) hybrid rules+manual override, 3) full ML scoring | Option 2 balanced speed and operator control while reducing misroute risk before pilot scale. | +15% qualified lead routing accuracy; low timeline risk; medium support enablement need. | 2026-05-20 | UNI-154 | Monthly FR impact dashboard link | Active | N/A | Worked example entry. |
| FRD-YYYY-MM-### | YYYY-MM-DD | FR-XX | [Feature Request Name] | [Approved/Deferred/Reversed/Cancelled] | [Name/Role] | [Enumerated options] | [Why selected option was chosen] | [Expected KPI/risk/timeline effect] | YYYY-MM-DD | [Issue ID or URL] | [Metric doc/dashboard URL] | Active | [Prior Decision ID or N/A] |  |

## Field Guidance

- `Option Set Considered`: list at least two realistic options.
- `Expected Impact`: state expected effect on KPI, delivery timeline, and risk posture.
- `Implementation Issue`: link to the delivery issue that executes the decision.
- `Post-Release Metric Link`: link to the metric source used to validate outcome in monthly review.
- `Status`: use `Active` for the current authoritative row and `Superseded` for replaced rows.

## Supersede Notation Example

When `FRD-2026-05-002` replaces `FRD-2026-04-001`:

- Add new row `FRD-2026-05-002` with `Supersedes Decision ID = FRD-2026-04-001`.
- Update `FRD-2026-04-001` status from `Active` to `Superseded`.
- Add a short note in both rows referencing the reason for replacement.

## Monthly Review Checklist

1. Confirm all FR decisions from the month are logged.
2. Verify each active row has owner, follow-up date, and implementation issue link.
3. Validate superseded rows retain original rationale and decision date.
4. Review post-release metrics for prior active decisions and decide keep/supersede/reverse.

_UniteCube - Northern Hokkaido Business Automation_
