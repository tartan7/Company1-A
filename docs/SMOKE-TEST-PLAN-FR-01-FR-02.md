# Smoke Test Plan: FR-01 / FR-02 Admin Workflows

- Issue: UNI-136
- Date: 2026-04-26 (UTC)
- Owner: Engineering QA
- Related definitions: `docs/INITIAL-FEEDBACK-TRIAGE.md`

## Goal

Validate that admins can safely operate:

- FR-01: LINE auto-reply template editing.
- FR-02: monthly report recipient management.

This smoke plan is a release gate for staging and production deploys that include either feature.

## Scope

In scope:

- Happy-path admin edits.
- Core validation and error handling.
- Permission guardrails for non-admin users.
- Basic persistence checks after page refresh.

Out of scope:

- Full regression of unrelated modules.
- Load/performance testing.
- Advanced localization variants.

## Environment and Access

- Target environments: staging first, then production canary.
- Browser set: latest Chrome + Safari.
- Test accounts:
- `admin_smoke@unitecube.local` (admin role)
- `viewer_smoke@unitecube.local` (non-admin role)
- Seed data:
- One existing LINE auto-reply template.
- Recipient list with 2 valid addresses.
- Max recipient cap configured to 10.

## Exit Criteria

- All `P0` smoke cases pass in staging.
- No `P0`/`P1` defects remain open for FR-01/FR-02.
- Product sign-off recorded in issue comment before production rollout.

## Smoke Case Matrix

| ID | Priority | Workflow | Scenario | Expected Result |
| --- | --- | --- | --- | --- |
| FR01-SM-01 | P0 | FR-01 | Admin opens template editor and loads current template | Existing template text is visible and editable |
| FR01-SM-02 | P0 | FR-01 | Admin updates wording with allowed placeholders and saves | Save succeeds; success feedback appears; persisted value matches saved text |
| FR01-SM-03 | P0 | FR-01 | Admin uses preview before save | Preview renders resolved placeholders without breaking layout |
| FR01-SM-04 | P1 | FR-01 | Admin submits invalid placeholder syntax | Validation blocks save and shows clear error |
| FR01-SM-05 | P0 | FR-01 | Non-admin attempts to access template edit surface | Access denied (hidden control or permission error) |
| FR02-SM-01 | P0 | FR-02 | Admin adds a valid new recipient email | Email is added once and appears in list |
| FR02-SM-02 | P0 | FR-02 | Admin attempts to add duplicate recipient | Duplicate is rejected with clear message |
| FR02-SM-03 | P0 | FR-02 | Admin adds malformed email | Validation blocks save with format guidance |
| FR02-SM-04 | P0 | FR-02 | Admin removes an existing recipient | Recipient is removed and change persists on refresh |
| FR02-SM-05 | P1 | FR-02 | Admin adds recipients beyond cap (10) | Cap enforcement blocks extra entries with explicit limit message |
| FR02-SM-06 | P0 | FR-02 | Non-admin attempts recipient management actions | Add/remove controls are blocked for non-admin role |
| FRX-SM-01 | P0 | Cross-feature | Refresh or re-login after FR-01/FR-02 edits | Latest saved config remains intact and visible |
| FRX-SM-02 | P1 | Cross-feature | Backend/API transient failure during save | User sees non-destructive error; previous saved values remain unchanged |

## Execution Order

1. FR01-SM-01 to FR01-SM-05
2. FR02-SM-01 to FR02-SM-06
3. FRX-SM-01 to FRX-SM-02
4. Production canary rerun of all P0 cases only

## Defect Routing

- P0 failure: block release and tag issue `UNI-136` with `release-blocker`.
- P1 failure: document impact, assign owner, and require triage decision before production.
- Defect report template:
- Case ID
- Environment + build SHA
- Repro steps
- Expected vs actual
- Screenshot/log excerpt

## Evidence Capture

For each executed case, store:

- Pass/fail result.
- Timestamp (UTC).
- Tester.
- Build SHA.
- Link to screenshot or console/network evidence.

Recommended log file path:

- `projects/UniteCube/docs/test-evidence/fr01-fr02-smoke-<YYYYMMDD>.md`

## Next Action After Plan Approval

Run this matrix in staging on the first implementation PR that introduces FR-02 or FR-01 surfaces, then post results on `UNI-136` and split defects into child issues if needed.
