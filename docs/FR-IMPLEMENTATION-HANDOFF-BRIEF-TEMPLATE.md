# FR Implementation Handoff Brief Template (v1)

- Brief Date (UTC): YYYY-MM-DD
- FR ID / Name: FR-XX - [Feature request title]
- Linked Issue: [UNI-###](/UNI/issues/UNI-###)
- Prepared By (Product/Ops): [Name / Role]
- Engineering Owner: [Name / Role]
- Target Release Window: YYYY-MM-DD to YYYY-MM-DD
- Handoff Status: Draft / Ready for Engineering / Needs Revision

## 1. Problem Statement

Describe the operational problem in 3-5 lines.

Prompt:
- What is failing today?
- What business workflow is affected?
- Why does this need to be solved now?

## 2. User Impact

Summarize who is impacted and how.

| User/Role | Current Pain | Expected Improvement | Priority (High/Medium/Low) |
| --- | --- | --- | --- |
| [Example: Admin] | [Manual rework, delay, error] | [Fewer steps, lower failure rate] | High |

## 3. Scope and Constraints

### In Scope
- [Behavior/capability included in this FR]
- [UI, API, or data flow updates included]

### Out of Scope
- [Explicitly excluded behavior]
- [Deferred follow-up work]

### Constraints and Guardrails
- [Compliance/security/legal constraints]
- [Performance or throughput constraints]
- [Localization/accessibility/data constraints]

## 4. Acceptance Criteria

Use testable statements only.

| ID | Acceptance Criterion | Validation Method | Owner |
| --- | --- | --- | --- |
| AC-1 | [Given/When/Then style expected behavior] | [Manual test / automated test / metric check] | [Role] |
| AC-2 | [Failure handling, edge case, or validation rule] | [Manual test / automated test / metric check] | [Role] |

## 5. Evidence and References (Required)

Add links before requesting engineering pickup.

| Required Link | URL / Doc | Notes |
| --- | --- | --- |
| Discovery evidence (ticket logs, interview notes, examples) | [Link] | [Source/date] |
| Baseline metric snapshot | [Link] | [Current state before implementation] |
| Success metric definition | [Link] | [How impact is measured after release] |
| Rollback notes/runbook | [Link] | [Containment and rollback path] |
| Related docs/specs | [Link] | [Design, architecture, support playbook] |

## 6. Implementation Notes for Engineering

Capture only material context needed for build and rollout.

- Proposed solution shape: [Short summary]
- Key dependencies: [Systems, teams, integrations]
- Data considerations: [Migration/backfill/retention if any]
- Risk hotspots: [Where failures are most likely]
- Suggested rollout approach: [Phased/canary/full rollout]

## 7. Ready-for-Dev Definition (Gate)

Mark all checks before setting handoff status to `Ready for Engineering`.

- [ ] Problem statement and user impact are complete and specific.
- [ ] In-scope/out-of-scope boundaries are explicit.
- [ ] Acceptance criteria are testable and unambiguous.
- [ ] Evidence, baseline metrics, success metrics, and rollback link are attached.
- [ ] Dependencies and risks are documented with owners.
- [ ] Open questions are resolved or explicitly assigned.

## 8. Open Questions and Decisions

| ID | Question or Decision Needed | Owner | Due Date (UTC) | Status |
| --- | --- | --- | --- | --- |
| Q-1 | [Question] | [Name/Role] | YYYY-MM-DD | Open |

## 9. Approval and Signoff

| Role | Name | Decision (Approved / Approved with Conditions / Not Approved) | Date (UTC) | Notes |
| --- | --- | --- | --- | --- |
| Product/Ops Owner | [Name] |  | YYYY-MM-DD |  |
| Engineering Owner | [Name] |  | YYYY-MM-DD |  |
| Final Approver | [Name] |  | YYYY-MM-DD |  |

Final Handoff Decision: Approved / Approved with Conditions / Not Approved

## 10. Copy/Paste Handoff Comment

`FR handoff [FR-XX] is [Ready for Engineering / Needs Revision] as of [YYYY-MM-DD UTC]. Evidence, metrics, and rollback links are attached. Engineering owner: [name]. Next action: [specific next step + owner + date].`

_UniteCube - Feature Request Delivery Operations_
