# FR Reviewer Calibration Session Agenda Template (v1)

- Date: YYYY-MM-DD (UTC)
- Issue: UNI-175
- Facilitator: [Name / Role]
- Session Objective: Calibrate reviewer decisions across FR issues so review outcomes are consistent, evidence-based, and actionable.
- Related docs:
  - `docs/FR-REVIEW-COMMENT-QUALITY-CHECKLIST.md`
  - `docs/FR-PRIORITY-CALIBRATION-WORKSHEET-TEMPLATE.md`
  - `docs/FR-REVIEWER-HANDOFF-NOTE-TEMPLATE.md`

## 1. Session Inputs (Pre-Read Checklist)

Prepare these before the session starts:

- [ ] Last 2-5 FR review threads with mixed outcomes (approve / request changes / hold).
- [ ] Current reviewer roster and role expectations.
- [ ] One known "clean" review comment and one known "weak" comment sample.
- [ ] Current checklist/rubric links:
  - `docs/FR-REVIEW-COMMENT-QUALITY-CHECKLIST.md`
  - `docs/FR-COMPLETION-CLOSURE-RUBRIC.md`
- [ ] Open disagreement examples from the current cycle (if any).

## 2. Timeboxed Agenda (60 Minutes)

| Time (min) | Section | Owner | Expected Output |
| ---: | --- | --- | --- |
| 0-5 | Kickoff: objective, scope, decision rules | Facilitator | Shared goal and rules confirmed |
| 5-15 | Inputs review: standards + review quality checklist refresh | Facilitator + all reviewers | Alignment on quality bar and terminology |
| 15-30 | Decision sample #1 (independent scoring, then compare) | All reviewers | Initial variance map (where/why reviewers differ) |
| 30-42 | Decision sample #2 (repeat with second FR case) | All reviewers | Confirmed repeat variance pattern or convergence |
| 42-52 | Disagreement resolution block | Facilitator | Agreed tie-breakers and escalation rule |
| 52-58 | Follow-up action capture | Facilitator + owners | Action table filled with owners and dates |
| 58-60 | Wrap-up and next calibration date | Facilitator | Session summary + next checkpoint date |

## 3. Decision Sample Block (Use Per FR Case)

### Case Metadata

- FR ID / Name:
- Review stage: intake / handoff / closure / post-release
- Reviewer participants:
- Linked issue thread:

### Individual Review Pass (silent, 3-5 min)

Each reviewer records:

- Decision intent: Approve / Request changes / Hold / Question
- Severity: critical / high / medium / low / no blocker
- Scope reference:
- Evidence:
- Required action (owner + due date/time UTC):

### Group Comparison (5-7 min)

Capture differences:

| Reviewer | Decision | Severity | Core Rationale | Missing Evidence Flag (Y/N) |
| --- | --- | --- | --- | --- |
| [Name] |  |  |  |  |
| [Name] |  |  |  |  |
| [Name] |  |  |  |  |

## 4. Disagreement Resolution Block

When reviewer outcomes diverge, use this order:

1. Validate scope match: are reviewers assessing the same criterion/artifact?
2. Validate evidence quality: is each claim verifiable in the issue/docs?
3. Apply checklist rule: map arguments to `docs/FR-REVIEW-COMMENT-QUALITY-CHECKLIST.md` must-pass checks.
4. Apply tie-breaker:
   - Higher-impact risk interpretation wins only if evidence-backed.
   - If still tied, facilitator sets provisional decision and opens explicit follow-up to close evidence gap.
5. Record final decision and confidence level (`High/Medium/Low`).

## 5. Follow-Up Action Capture

Use this table during minutes 52-58:

| Action ID | Gap or Change Needed | Owner | Due (UTC) | Success Check | Linked Issue |
| --- | --- | --- | --- | --- | --- |
| CAL-001 | [Example: tighten evidence standard for severity high comments] | [Role/Name] | YYYY-MM-DD HH:MM | [How to verify] | [UNI-###](/UNI/issues/UNI-###) |
| CAL-002 |  |  |  |  |  |
| CAL-003 |  |  |  |  |  |

## 6. Session Output Record (Copy/Paste)

```md
### FR Reviewer Calibration Session Record
- Session Date (UTC):
- Facilitator:
- Participants:
- FR Cases Reviewed:
- Decision Variance Observed (Low/Medium/High):
- Main Disagreement Theme:
- Agreed Tie-Breaker Rule:
- Checklist Updates Needed:
- Follow-Up Actions Created:
- Next Calibration Date (UTC):
```

## 7. Sample Filled Agenda (Example)

```md
### Session Header
- Date: 2026-04-27 (UTC)
- Facilitator: Sato (Engineering)
- Objective: Reduce inconsistent review outcomes before FR closure decisions

### Cases
1) FR-02 Monthly Report Recipient Management (closure review)
2) FR-05 Intake Form Validation Rules (handoff review)

### Variance Notes
- Case 1: Two reviewers marked `approve`; one marked `request changes (medium)` due to missing rollback evidence link.
- Case 2: All reviewers marked `request changes`; severity split (`high` vs `medium`) traced to unclear support impact evidence.

### Disagreement Resolution
- Applied FR review comment quality checklist must-pass checks.
- Agreed rule: severity cannot be marked `high` without explicit impact statement plus owner/due date in same comment.

### Follow-Up Actions
| Action ID | Gap or Change Needed | Owner | Due (UTC) | Success Check | Linked Issue |
| --- | --- | --- | --- | --- | --- |
| CAL-001 | Add severity-to-evidence examples to reviewer onboarding note | Product | 2026-04-29 12:00 | Example block added in handoff template | UNI-176 |
| CAL-002 | Add rollback evidence link check to closure review prep | Engineering | 2026-04-28 18:00 | New checklist row present and used in next review | UNI-177 |
| CAL-003 | Confirm support impact phrasing standard for high-severity requests | Support | 2026-04-29 09:00 | Standard snippet added to team SOP | UNI-178 |

### Wrap-Up
- Decision variance: Medium (improving)
- Next calibration session: 2026-05-04 09:00 UTC
```

## 8. Operating Notes

- Keep session frequency weekly during active FR rollout periods; bi-weekly once variance stays low for 3 cycles.
- If more than 30% of reviewed cases end with unresolved disagreement, schedule an extra calibration session within 72 hours.
- Convert all unresolved disagreements into explicit issue actions before ending the meeting.

_UniteCube - FR Review Governance_
