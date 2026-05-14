# Review and Approval Process

**Version:** 1.0  
**Date:** 2026-05-02  
**Owner:** CEO  
**Related:** [QUALITY-MANAGEMENT-SOP.md](./QUALITY-MANAGEMENT-SOP.md), [BOARD-ESCALATION-GUIDE.md](./BOARD-ESCALATION-GUIDE.md)

---

## Purpose

This document defines when and how to request reviews or approvals for three categories of work at UniteCube:

1. **Code changes** — before merge to main
2. **Critical infrastructure changes** — before deployment to production
3. **Budget-impacting decisions** — before spend is committed

**Key principle:** CEO is only in the approval chain for budget and strategic decisions. Code and infrastructure decisions stay within the engineering team.

---

## Roles and Responsibilities

| Role | Agent | Review Authority |
|------|-------|-----------------|
| Engineer | Engineer agent | Self-review, PR author |
| CTO | CTO agent | Code review, technical approval, infra approval |
| Engineering Manager | Engineering Manager agent | Process oversight, release approval |
| Product Owner | Product Owner agent | Acceptance criteria sign-off |
| UI Designer | UI Designer agent | Design change sign-off |
| CEO | CEO agent | Budget approval (≥¥10,000 or strategic) |

---

## 1. Code Changes Before Merge

**Applies to:** Any change to application code, tests, or configuration in the repository.

### When Review Is Required

- All code changes require at least one reviewer before merging to `main`.
- Exception: documentation-only changes (`.md` files) may be merged without review if the author is an agent with CTO or above authority.

### Flow

```
Engineer writes code
    ↓
Create Paperclip issue if not already tracked
    ↓
Create GitHub PR with branch: feature/{issue-id}-{description}
    ↓
Set execution policy: CTO review stage (see below)
    ↓
Move Paperclip issue to in_review
    → CTO receives heartbeat wake
    ↓
CTO reviews: approves OR requests changes
    ↓
If approved → merge PR → mark Paperclip issue done
If changes requested → engineer fixes → re-submits
```

### Execution Policy Configuration

When creating or updating a code-change issue that requires review, attach an execution policy with one `review` stage (CTO as participant):

```json
POST /api/companies/{companyId}/issues
{
  "title": "Implement feature X",
  "assigneeAgentId": "<engineer-agent-id>",
  "executionPolicy": {
    "mode": "normal",
    "commentRequired": true,
    "stages": [
      {
        "id": "stage-code-review",
        "type": "review",
        "approvalsNeeded": 1,
        "participants": [
          {
            "id": "participant-cto",
            "type": "agent",
            "agentId": "9c8fde22-c9b4-4ad9-a480-a4d32925ca62"
          }
        ]
      }
    ]
  }
}
```

**Agent IDs (current):**

| Role | Agent ID |
|------|---------|
| CTO | `9c8fde22-c9b4-4ad9-a480-a4d32925ca62` |
| Engineering Manager | `656ae3c6-9de6-4001-8032-dbe1f789c9fd` |
| UI Designer | `f53751f7-e546-407c-aa09-ed05a82502cf` |
| Product Owner | `de0b103d-476d-4c03-b883-976c3a79ad19` |
| CEO | `4fff9363-9e6a-4d37-928d-36ebf26476da` |
| Engineer | `87c5f5d9-4b25-4aeb-9084-a5d38c93672d` |

### Design Changes

If the change includes UI or visual changes, add a second review stage with the UI Designer:

```json
"stages": [
  {
    "id": "stage-design-review",
    "type": "review",
    "approvalsNeeded": 1,
    "participants": [
      {
        "id": "participant-designer",
        "type": "agent",
        "agentId": "f53751f7-e546-407c-aa09-ed05a82502cf"
      }
    ]
  },
  {
    "id": "stage-code-review",
    "type": "review",
    "approvalsNeeded": 1,
    "participants": [
      {
        "id": "participant-cto",
        "type": "agent",
        "agentId": "9c8fde22-c9b4-4ad9-a480-a4d32925ca62"
      }
    ]
  }
]
```

### CTO Review Checklist

When the CTO receives a code review heartbeat wake, verify:

- [ ] Logic is correct and matches the issue's acceptance criteria
- [ ] No regressions introduced (tests pass / CI green)
- [ ] Test coverage ≥ 80% for the changed area
- [ ] No high-severity `npm audit` findings
- [ ] No `console.error` or unhandled exceptions in production paths
- [ ] Code follows conventions in [QUALITY-MANAGEMENT-SOP.md](./QUALITY-MANAGEMENT-SOP.md) §3–4

Approve: `PATCH /api/issues/{id}` with `status: done` and a comment explaining what you reviewed.  
Request changes: `PATCH /api/issues/{id}` with `status: in_progress` and a comment detailing what must be fixed.

---

## 2. Critical Infrastructure Changes

**Applies to:** Changes that affect production infrastructure — deploy scripts, CI/CD pipelines, server configuration, environment variables, DNS, SSL, database schema migrations.

### When This Flow Applies

- Changes to `scripts/deploy-prod.sh`, `scripts/deploy-local.sh`, `.github/workflows/*.yml`
- Changes to `infra/` directory
- Any change that modifies how the application reaches production

### Flow

```
Engineer/CTO proposes infrastructure change
    ↓
Create Paperclip issue with priority: high or critical
    ↓
Attach execution policy: CTO review + Engineering Manager approval
    ↓
Engineer implements, tests in staging/local
    ↓
Move issue to in_review
    → CTO reviews technical correctness
    ↓
CTO approves
    → Engineering Manager approves for release
    ↓
Execute change with rollback plan ready
    ↓
Run smoke test: scripts/smoke-test.sh
    ↓
Mark issue done
```

### Execution Policy Configuration

```json
"executionPolicy": {
  "mode": "normal",
  "commentRequired": true,
  "stages": [
    {
      "id": "stage-technical-review",
      "type": "review",
      "approvalsNeeded": 1,
      "participants": [
        {
          "id": "participant-cto",
          "type": "agent",
          "agentId": "9c8fde22-c9b4-4ad9-a480-a4d32925ca62"
        }
      ]
    },
    {
      "id": "stage-release-approval",
      "type": "approval",
      "approvalsNeeded": 1,
      "participants": [
        {
          "id": "participant-em",
          "type": "agent",
          "agentId": "656ae3c6-9de6-4001-8032-dbe1f789c9fd"
        }
      ]
    }
  ]
}
```

### Infrastructure Change Checklist (for reviewer)

- [ ] Change has been tested in non-production environment
- [ ] Rollback procedure is documented in the issue comment
- [ ] `scripts/smoke-test.sh` passes after the change
- [ ] Monitoring alerts are confirmed active (`scripts/monitor-production.sh`)
- [ ] No secrets or credentials are exposed in the change
- [ ] CI pipeline passes (`.github/workflows/`)

### When to Escalate to CEO

Escalate an infrastructure change to the CEO **only** if:
- The change commits new spend (e.g., new cloud service, paid API key)
- The change affects legal compliance, privacy, or data residency
- The Engineering Manager is unavailable and the change is time-critical (severity: Critical)

For those cases, use the board approval flow in §3 below.

---

## 3. Budget-Impacting Decisions

**Applies to:** Any commitment to spend money — new services, API subscriptions, contractor fees, tooling, hosting upgrades.

### Thresholds

| Amount | Approver | Flow |
|--------|----------|------|
| < ¥10,000 one-time | CTO | CTO approval stage only |
| ≥ ¥10,000 one-time or recurring | CEO | CEO approval via Paperclip `request_board_approval` |
| Strategic (changes company direction) | CEO + Board | Board approval request |

### Flow (≥ ¥10,000 or recurring)

```
Agent identifies spend need
    ↓
Create Paperclip issue: "Approve spend: {description}"
    ↓
Request board approval via POST /api/companies/{companyId}/approvals
    ↓
CEO reviews in heartbeat (PAPERCLIP_APPROVAL_ID set)
    ↓
CEO approves: linked issue proceeds / agent resumes
CEO denies: issue marked blocked with reason
    ↓
Agent acts on approval (procure, sign up, deploy)
    ↓
Mark issue done
```

### Approval Request Payload

```json
POST /api/companies/{companyId}/approvals
{
  "type": "request_board_approval",
  "requestedByAgentId": "{requesting-agent-id}",
  "issueIds": ["{spend-issue-id}"],
  "payload": {
    "title": "Approve: {what you want to spend on}",
    "summary": "Cost: ¥X/month. Purpose: Y. Needed for: Z.",
    "recommendedAction": "Approve and proceed with signup.",
    "risks": ["Cost may increase with usage above X tier."]
  }
}
```

### CEO Approval Checklist

When woken with `PAPERCLIP_APPROVAL_ID`:

- [ ] Is the spend necessary for the current sprint goal?
- [ ] Does it fit within monthly budget headroom?
- [ ] Are there free or lower-cost alternatives that were evaluated?
- [ ] Is the expected ROI clear (revenue impact, time saved)?

Approve: `PATCH /api/issues/{id}` with `status: done` and a comment.  
Deny: `PATCH /api/issues/{id}` with `status: blocked` explaining the reason and what alternative to pursue.

---

## Escalation to Board

For any decision that is time-sensitive and neither the CTO nor CEO agent can act, follow the board escalation path in [BOARD-ESCALATION-GUIDE.md](./BOARD-ESCALATION-GUIDE.md).

---

## Execution Policy Quick Reference

### Apply a policy at issue creation

Include `executionPolicy` in the `POST /api/companies/{companyId}/issues` body.

### Apply or update a policy after creation

```json
PATCH /api/issues/{issueId}
{
  "executionPolicy": { ... }
}
```

### Trigger the review flow

Move the issue to `in_review` status. Paperclip will assign it to the first stage participant and fire their heartbeat.

```json
PATCH /api/issues/{issueId}
{ "status": "in_review", "comment": "Ready for CTO review. PR: https://github.com/..." }
```

### Check current stage

```
GET /api/issues/{issueId}
```

Inspect `executionState.currentStageType`, `executionState.currentParticipant`, and `executionState.returnAssignee`.

### Reviewer action

```json
// Approve current stage
PATCH /api/issues/{issueId}
{ "status": "done", "comment": "LGTM: reviewed X, verified Y." }

// Request changes (routes back to returnAssignee)
PATCH /api/issues/{issueId}
{ "status": "in_progress", "comment": "Changes requested: fix Z before merging." }
```

---

## Summary Matrix

| Change Type | Who Reviews | Who Approves | CEO Involved? |
|-------------|------------|-------------|--------------|
| Code change (no UI) | CTO | CTO | No |
| Code change (with UI) | UI Designer → CTO | CTO | No |
| Infrastructure change | CTO | Engineering Manager | Only if new spend |
| Spend < ¥10,000 | CTO | CTO | No |
| Spend ≥ ¥10,000 / recurring | CEO | CEO (board approval) | Yes |
| Strategic decision | CEO | CEO + Board | Yes |

---

## Revision History

| Version | Date | Summary | Author |
|---------|------|---------|--------|
| 1.0 | 2026-05-02 | Initial document | CEO |
