# FR Evidence Attachment Standards (v1)

- Date: 2026-04-26 (UTC)
- Issue: UNI-160
- Scope: Minimum standards for evidence links and attachments on feature-request issues across triage, implementation, review, and closure
- Owners: Product (accountable), Engineering and Support (responsible by stage)
- Related docs:
  - `docs/FR-REQUEST-INTAKE-ACCEPTANCE-CHECKLIST.md`
  - `docs/FR-IMPLEMENTATION-HANDOFF-BRIEF-TEMPLATE.md`
  - `docs/FR-REVIEW-COMMENT-QUALITY-CHECKLIST.md`
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`
  - `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md`
  - `docs/FR-EVIDENCE-CONFLICT-RESOLUTION-CHECKLIST.md`

## Purpose

Define a consistent, auditable evidence package for FR issues so decisions are verifiable at each stage and traceable from issue comments to supporting artifacts.

## Attachment Locations and Link Format

Evidence is valid only when it is attached as one of the following:

1. Issue description or issue comment with direct links.
2. Repo documentation link under `docs/` (policy, runbook, checklist, summary, template outputs).
3. Dashboard/log/export link that includes timestamp and FR reference.

Required link format in comments:

- Use explicit labels, for example: `AC-2 test run`, `rollback validation log`, `support triage summary`.
- Include UTC timestamp for time-sensitive evidence.
- Include FR reference (`FR-XX`) and issue reference (`UNI-###`) in the comment body.

## Accepted Artifact Types

| Artifact Type | Accepted Forms | Must Include |
| --- | --- | --- |
| Test evidence | Test run output, smoke-test checklist result, pass/fail table | executor, UTC timestamp, scope/criteria covered |
| Operational evidence | Alert threshold snapshot, run logs, incident timeline excerpt | signal source, severity/status, UTC timestamp |
| Product/support evidence | Triage summary, support ticket links, decision rationale note | owner, impact summary, source links |
| Metrics evidence | Baseline snapshot, post-release KPI summary, trend table | metric definition, period window, values |
| Release safety evidence | rollback verification note, containment steps, runbook cross-link | trigger conditions, owner, verification time |
| Governance evidence | signoff comments, decision record blocks, closure record | decision intent/outcome, owner, next action |

## Evidence Naming Standard

Use this naming format for new FR evidence files added to `docs/`:

`FR-XX_<stage>_<artifact>_<YYYY-MM-DD>_<owner-or-team>_vN.md`

Examples:

- `FR-02_triage_customer-signals_2026-04-26_product_v1.md`
- `FR-02_implementation_smoke-test-results_2026-04-29_engineering_v1.md`
- `FR-02_review_release-decision-record_2026-05-01_product_v1.md`
- `FR-02_closure_post-release-summary_2026-05-31_support_v1.md`

Stage token must be one of: `triage`, `implementation`, `review`, `closure`.

## Stage-by-Stage Minimum Evidence Checklist

All rows are required. If any required evidence is missing, the FR cannot pass that stage gate.

| Stage | Minimum Required Evidence | Primary Owner | Gate Rule |
| --- | --- | --- | --- |
| Triage | 1) customer signal link, 2) problem statement, 3) measurable success signal, 4) initial risk/dependency note | Product | Do not move to implementation planning until all four are linked in issue thread or intake doc. |
| Implementation | 1) handoff brief with acceptance criteria, 2) implementation/test evidence against criteria, 3) rollback reference, 4) dependency/risk updates | Engineering | Do not request review until all four are present and dated. |
| Review | 1) structured review comment using evidence field, 2) monitoring/alert mapping evidence, 3) signoff outcomes (approve/changes requested/hold), 4) explicit next action owner/date | Product + Support + Engineering | Do not approve release decision without all four items in thread. |
| Closure | 1) stability-window evidence, 2) support burden evidence, 3) outcome metrics summary, 4) follow-up issue links (if any), 5) final closure decision comment | Product + Support | Do not close FR until all five are attached and traceable. |

## Missing-Evidence Escalation Rule

When required evidence is missing at any stage boundary:

1. Post an `Evidence Gap Notice` comment immediately (same business day).
2. Assign explicit owner and due date/time (UTC) for each missing artifact.
3. Hold the stage decision:
   - keep/revert issue to `in_progress` when work can continue but gate cannot pass yet;
   - move to `blocked` only when no further progress is possible without the missing evidence.
4. If unresolved for more than 24 hours after due time (or before release window cutoff), escalate to Product owner and Engineering lead in the same issue thread.

### Evidence Gap Notice Template

```md
### FR Evidence Gap Notice
- FR ID:
- Issue:
- Stage: triage | implementation | review | closure
- Missing Evidence:
  - [artifact + expected link type]
- Impact if Missing:
- Owner to Attach:
- Due (UTC):
- Escalation Trigger:
- Next Action:
```

## Comment Compatibility Rules

To stay compatible with existing FR issue comments and docs artifacts:

- Reuse existing decision/handoff/comment blocks from related FR governance docs.
- Add evidence links inside existing templates instead of replacing template structure.
- Keep one canonical link per evidence artifact; if duplicated in multiple comments, reference the canonical link label.
- Use consistent terminology across comments: `Decision Intent`, `Evidence`, `Impact`, `Action`, `Owner`, `Due (UTC)`.

## Evidence Checkpoint Prompt (Copy/Paste)

Use this at stage transitions:

```md
### FR Evidence Checkpoint
- FR ID:
- Stage:
- Required Evidence Attached: Yes | No
- Missing Items:
- Gate Decision: Pass | Hold
- Owner:
- Next Action (owner + date UTC):
```

_UniteCube - FR Delivery Governance_
