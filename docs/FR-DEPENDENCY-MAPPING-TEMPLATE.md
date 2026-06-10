# FR Dependency Mapping Template for Release Planning (v1)

- Template Date (UTC): YYYY-MM-DD
- FR ID / Name: FR-XX - [Feature request title]
- Linked Issue: [UNI-###](/UNI/issues/UNI-###)
- Prepared By: [Name / Role]
- Release Owner: [Name / Role]
- Target Release Window: YYYY-MM-DD to YYYY-MM-DD
- Last Dependency Review: YYYY-MM-DD

## 1. Purpose

Use this template to map the dependencies required for an FR release and make blockers visible before they impact timeline, quality, or rollout safety.

## 2. Usage Rules

1. Every dependency must have one accountable owner and one committed needed-by date.
2. Any dependency that can block production release must include an escalation trigger and mitigation plan.
3. Update status, mitigation, and next check date together in the same edit.
4. If a dependency changes release scope or dates, mirror the change in release notes and issue comments.
5. Close dependencies only when success criteria are met with linked evidence.

## 3. FR and Release Snapshot

| Field | Value |
| --- | --- |
| FR ID | [FR-XX] |
| FR Name | [Feature name] |
| Release Window | YYYY-MM-DD to YYYY-MM-DD |
| Rollout Strategy | Big bang / phased / canary |
| Product Owner | [Name / Role] |
| Engineering Owner | [Name / Role] |
| Support Owner | [Name / Role] |
| Risk Tier | Low / Medium / High |

## 4. Dependency Category Legend

| Category | Definition |
| --- | --- |
| Upstream | Must complete before this FR release can proceed. |
| Downstream | Depends on this FR release after launch. |
| Internal | Owned by UniteCube teams. |
| External | Owned by client, vendor, or third party. |
| Technical | Platform, API, infra, data, or integration dependency. |
| Operational | Process, comms, staffing, training, or support dependency. |

## 5. Dependency Register

| Dep ID | Dependency Description | Category | Owner | Needed By (UTC) | Blocking Milestone | Success Criteria | Evidence Link | Impact if Missed | Mitigation Plan | Escalation Trigger | Escalation Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-001 | Production API credential rotation completed and validated. | Upstream / External / Technical | [Client IT Owner] | YYYY-MM-DD | Release candidate deploy | Auth + smoke tests pass in prod-like env. | [Link] | Deployment blocked. | Temporary feature flag disable + manual fallback. | No confirmation by Day -2. | [Release Owner] | Open |
| D-002 | Final copy/legal wording approved for user-facing messages. | Upstream / Internal / Operational | [Product Owner] | YYYY-MM-DD | Release comms signoff | Approval recorded in issue/thread. | [Link] | Release note + UI copy blocked. | Use pre-approved fallback copy. | Approval not complete by Day -1. | [Product Lead] | Open |
| D-003 | Support runbook + escalation contacts confirmed. | Upstream / Internal / Operational | [Support Owner] | YYYY-MM-DD | Go/no-go review | Support checklist signed off. | [Link] | Slower incident response post-release. | On-call bridge pre-scheduled. | Runbook incomplete at go/no-go. | [Support Lead] | Monitoring |

## 6. Interface and Handoff Matrix

| From Team | To Team | Artifact / Interface | SLA / Timing | Owner | Backup Owner | Health |
| --- | --- | --- | --- | --- | --- | --- |
| Product | Engineering | Final acceptance criteria and out-of-scope list | Before code freeze | [Name] | [Name] | Green / Yellow / Red |
| Engineering | Support | Release notes, known limitations, rollback conditions | 24h before rollout | [Name] | [Name] | Green / Yellow / Red |
| Engineering | Product | Validation evidence and release-readiness summary | Go/no-go meeting | [Name] | [Name] | Green / Yellow / Red |
| Support | Product + Engineering | Incident trends and customer-impact report | Daily during first week | [Name] | [Name] | Green / Yellow / Red |

## 7. Critical Path Sequence

| Sequence | Milestone | Blocking Dependency IDs | Owner | Target Date (UTC) | Confidence (High/Medium/Low) | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Code freeze and RC readiness | D-001, D-002 | [Name] | YYYY-MM-DD |  |  |
| 2 | Go/no-go approval | D-001, D-002, D-003 | [Name] | YYYY-MM-DD |  |  |
| 3 | Production rollout complete | D-001, D-003 | [Name] | YYYY-MM-DD |  |  |
| 4 | Post-release stabilization check | D-003 | [Name] | YYYY-MM-DD |  |  |

## 8. Dependency Risk Scoring

For visual risk concentration and escalation prioritization, pair this section with [FR Dependency Risk Heatmap Template](./FR-DEPENDENCY-RISK-HEATMAP-TEMPLATE.md).

- Likelihood (L): 1 (Rare) to 5 (Almost Certain)
- Impact (I): 1 (Negligible) to 5 (Severe)
- Risk Score: L x I (1-25)
- Priority bands:
1. 15-25: High
2. 8-14: Medium
3. 1-7: Low

| Dep ID | L (1-5) | I (1-5) | Score | Priority | Next Check Date (UTC) | Escalation Trigger | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D-001 |  |  |  | Low / Medium / High | YYYY-MM-DD | [Trigger] | Open |
| D-002 |  |  |  | Low / Medium / High | YYYY-MM-DD | [Trigger] | Open |
| D-003 |  |  |  | Low / Medium / High | YYYY-MM-DD | [Trigger] | Monitoring |

## 9. Status Definitions

- Open: Identified and not yet satisfied.
- Monitoring: On track with active checks in place.
- At Risk: Progress exists but date/quality risk is material.
- Escalated: Needs leadership intervention now.
- Closed: Success criteria met and evidence attached.

## 10. Release Planning Review Checklist

- [ ] All dependencies have owners and needed-by dates.
- [ ] Critical-path dependencies have confidence ratings.
- [ ] High-risk dependencies have mitigation and escalation paths.
- [ ] Evidence links are attached for completed dependencies.
- [ ] Dependency updates are reflected in issue comments and release notes.

## 11. Copy/Paste Comment Snippets

### Issue Thread Update

`FR dependency map update for [FR-XX]: [x] open, [y] at risk, [z] escalated, [n] closed. Highest risk: [Dep ID] owned by [name], needed by [date]. Next action: [specific action + owner + due date].`

### Escalation Request

`Escalation required for [Dep ID] on [FR-XX]. Current blocker: [summary]. Release impact: [timeline/quality/support impact]. Decision or support needed from [owner/team] by [date/time UTC].`

_UniteCube - Feature Request Release Operations_
