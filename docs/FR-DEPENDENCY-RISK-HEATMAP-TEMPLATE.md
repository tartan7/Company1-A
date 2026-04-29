# FR Dependency Risk Heatmap Template (v1)

- Template Date (UTC): YYYY-MM-DD
- FR ID / Name: FR-XX - [Feature request title]
- Linked Issue: [UNI-###](/UNI/issues/UNI-###)
- Prepared By: [Name / Role]
- Release Owner: [Name / Role]
- Review Cadence: Daily / Twice weekly / Weekly
- Last Updated (UTC): YYYY-MM-DD

## 1. Purpose

Use this template to visualize FR dependency risk concentration and identify which dependencies need escalation first.

## 2. Scoring Rules

- Likelihood (L): 1 (Rare) to 5 (Almost Certain)
- Impact (I): 1 (Negligible) to 5 (Severe)
- Score: `L x I` (range 1-25)
- Risk band:
1. 1-7 = Low (Green)
2. 8-14 = Medium (Yellow)
3. 15-25 = High (Red)

## 3. Dependency Risk Input Table

| Dep ID | Dependency Description | Owner | Needed By (UTC) | L (1-5) | I (1-5) | Score | Risk Band | Current Status | Escalation Trigger |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-001 | [Description] | [Owner] | YYYY-MM-DD |  |  |  | Low / Medium / High | Open / Monitoring / At Risk / Escalated / Closed | [Trigger] |
| D-002 | [Description] | [Owner] | YYYY-MM-DD |  |  |  | Low / Medium / High | Open / Monitoring / At Risk / Escalated / Closed | [Trigger] |
| D-003 | [Description] | [Owner] | YYYY-MM-DD |  |  |  | Low / Medium / High | Open / Monitoring / At Risk / Escalated / Closed | [Trigger] |

## 4. Heatmap Matrix (Likelihood x Impact)

Add each `Dep ID` into the matching cell. If multiple IDs share a cell, separate with commas.

| Likelihood \\ Impact | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 5 (Almost Certain) | 5 (L) [ ] | 10 (M) [ ] | 15 (H) [ ] | 20 (H) [ ] | 25 (H) [ ] |
| 4 (Likely) | 4 (L) [ ] | 8 (M) [ ] | 12 (M) [ ] | 16 (H) [ ] | 20 (H) [ ] |
| 3 (Possible) | 3 (L) [ ] | 6 (L) [ ] | 9 (M) [ ] | 12 (M) [ ] | 15 (H) [ ] |
| 2 (Unlikely) | 2 (L) [ ] | 4 (L) [ ] | 6 (L) [ ] | 8 (M) [ ] | 10 (M) [ ] |
| 1 (Rare) | 1 (L) [ ] | 2 (L) [ ] | 3 (L) [ ] | 4 (L) [ ] | 5 (L) [ ] |

## 5. High-Risk Focus List

List dependencies with score `>=15`.

| Rank | Dep ID | Score | Why this is risky now | Mitigation Action | Action Owner | Due (UTC) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | [D-###] | [##] | [Reason] | [Specific mitigation] | [Name] | YYYY-MM-DD |
| 2 | [D-###] | [##] | [Reason] | [Specific mitigation] | [Name] | YYYY-MM-DD |
| 3 | [D-###] | [##] | [Reason] | [Specific mitigation] | [Name] | YYYY-MM-DD |

## 6. Escalation Thresholds

- Escalate immediately when any dependency reaches score `>=20`.
- Escalate within 24 hours when score `15-19` and due date is within 3 calendar days.
- Force go/no-go discussion when two or more dependencies in the same critical milestone are High risk.

## 7. Weekly Delta Log

| Date (UTC) | Change Summary | Added Risks | Reduced Risks | New Escalations | Owner |
| --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD | [Summary] | [D-###] | [D-###] | [D-###] | [Name] |

## 8. Copy/Paste Comment Snippet

`FR dependency risk heatmap update for [FR-XX]: High [n], Medium [n], Low [n]. New highest-risk dependency: [D-###] (score [##], owner [name], due [date]). Next action: [action + owner + due date].`

_UniteCube - Feature Request Release Operations_
