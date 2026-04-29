# FR Feature Ownership Matrix (Product / Support / Engineering)

- Date: 2026-04-26 (UTC)
- Issue: UNI-143
- Scope: FR-01 (LINE auto-reply template editing), FR-02 (monthly report recipient management)
- Related docs:
  - `docs/FR-REQUEST-INTAKE-ACCEPTANCE-CHECKLIST.md`
  - `docs/FR-01-FR-02-ROLLOUT-NOTE-AND-SUPPORT-PLAYBOOK.md`
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`
  - `docs/SMOKE-TEST-PLAN-FR-01-FR-02.md`

## Team Ownership Legend

- `A` (Accountable): final decision owner and outcome accountability
- `R` (Responsible): executes the work
- `C` (Consulted): must be consulted before finalization
- `I` (Informed): receives updates

## Lifecycle Ownership Matrix

| Workstream / Decision | Product | Support | Engineering | Deliverable / Output |
| --- | --- | --- | --- | --- |
| Feature scope and acceptance criteria (FR-01/FR-02) | A/R | C | C | Approved requirements and acceptance checklist |
| Release messaging and admin guidance | A/R | R | C | Rollout note + admin-facing instructions |
| Smoke-test execution and sign-off evidence | A | R | R | Test results attached to issue thread |
| Production incident intake and first response | C | A/R | I | Incident record with UTC timestamp, tenant, symptom |
| Threshold monitoring against FR alert policy | C | A/R | C | Daily/weekly threshold review log |
| Root-cause analysis for failures beyond UI validation | C | C | A/R | RCA notes and remediation plan |
| Rollback execution for FR-01/FR-02 misconfiguration or failures | C | R | A/R | Rollback completion status and verification |
| Backlog prioritization for follow-up fixes/improvements | A/R | C | C | Prioritized issue list and sprint assignment |
| Post-release adoption and support burden review | A/R | R | C | Weekly adoption/readiness summary |

## Feature-Level Decision Ownership

| Feature Area | Product Owner | Support Owner | Engineering Owner | Escalation Trigger |
| --- | --- | --- | --- | --- |
| FR-01: LINE auto-reply template editing | Defines allowed placeholder policy, copy governance, and release criteria | Handles admin usage errors and confirms reproduction steps | Owns validation/persistence defects and integration behavior | Critical FR01 threshold, or warning unresolved in target window |
| FR-02: Monthly recipient management | Defines recipient policy (cap, role constraints, rollout readiness) | Handles recipient configuration issues and first-line troubleshooting | Owns API/state consistency defects and dispatch-side failures | Critical FR02 threshold, repeated dispatch failures, or delivery impact |

## Handoff Rules (Operational)

1. Support to Product:
- Escalate when repeated admin confusion indicates requirement/copy changes are needed, even without a platform defect.

2. Support to Engineering:
- Escalate immediately on critical threshold breaches, integration/auth errors, or incidents with message/report delivery impact.

3. Product to Engineering:
- Raise implementation issues when policy decisions require behavior changes (new placeholders, cap change, role access updates).

4. Engineering to Product and Support:
- Publish mitigation status, workaround constraints, and ETA after triage so customer-facing guidance stays aligned.

## Ownership SLA Targets

| Activity | Primary Owner | Target |
| --- | --- | --- |
| First response on FR incident | Support | Within 30 minutes (15 minutes for critical) |
| Severity/impact confirmation | Product + Support | Within 2 hours |
| Engineering triage start (critical) | Engineering | Immediate page / within 15 minutes |
| Containment or rollback decision | Engineering (with Product consulted) | Within 60 minutes for critical |
| Stakeholder status update | Product | At least every 60 minutes during active critical incident |

## Next Review Cadence

- Weekly: Product + Support review support volume, failure patterns, and admin friction.
- Bi-weekly: Product + Engineering review roadmap changes tied to FR-01/FR-02 learnings.
- Trigger-based: Immediate ownership review when two or more FR incidents occur in a 7-day window.
