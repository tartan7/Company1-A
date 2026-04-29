# Pilot Assumption Log Template (v1)

*Date: YYYY-MM-DD / Version: 1.0*
*Owner: CMO / Account Lead*
*Pilot: [Client Name / Pilot ID]*

## 1. Purpose
Use this template to document, test, and retire pilot assumptions that could materially affect outcomes.
Review assumptions weekly and update status as new evidence is collected.

---

## 2. What Counts as an Assumption

An assumption is a statement accepted as true without full validation yet.
Log assumptions when they influence:

- Scope, delivery approach, or timeline
- KPI feasibility or measurement integrity
- Client behavior, adoption, or resource availability
- Technical dependencies, integrations, or data quality
- Commercial outcomes or go/no-go decisions

---

## 3. Assumption Log

| Assumption ID | Date Logged | Workstream | Assumption Statement | Category (Business / User / Technical / Data / Commercial) | Why It Matters | Evidence Available Today | Confidence (Low / Medium / High) | Validation Method | Validation Owner | Target Validation Date | Status (Open / Validated / Invalidated / Retired) | Impact if Wrong (Low / Medium / High) | Linked Artifacts | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AS-001 | YYYY-MM-DD | Adoption | Frontline users can complete the new intake workflow in under 4 minutes after week 1 onboarding. | User | Drives expected throughput KPI and staffing model. | Early interview feedback; no production timing yet. | Medium | Time-on-task measurement in week 1 pilot usage. | Enablement Lead | YYYY-MM-DD | Open | High | Success criteria, training plan | Seed example row. |
| AS-002 | YYYY-MM-DD | Data Integration | Source CRM export schema will remain stable through pilot phase 1. | Technical | Affects ETL reliability and reporting continuity. | Last 30 days stable; no contractual schema guarantee. | Low | Daily schema diff check + vendor confirmation. | Engineering Lead | YYYY-MM-DD | Open | High | Dependency map, risk register |  |

---

## 4. Status Definitions

- **Open:** Assumption logged but not yet validated.
- **Validated:** Evidence confirms assumption is currently true in pilot context.
- **Invalidated:** Evidence shows assumption is false or no longer reliable.
- **Retired:** Assumption is no longer material due to scope change or completed pilot phase.

When an assumption is marked `Invalidated`, log the response action in the action tracker within 1 business day.

---

## 5. Validation Quality Checklist

Before moving an assumption to `Validated` or `Invalidated`, confirm:

1. Validation method is explicit and reproducible.
2. Evidence source is linked (dashboard, report, test note, or call summary).
3. Owner and validation date are complete.
4. Downstream impact is recorded when confidence or status changes.
5. Related logs (risk, decision, action) are updated where applicable.

---

## 6. Weekly Review Cadence

During weekly governance review:

1. Add newly surfaced assumptions from delivery, stakeholder feedback, and incidents.
2. Reassess confidence for all `Open` assumptions.
3. Prioritize validation for assumptions with `High` impact if wrong.
4. Convert invalidated assumptions into tracked mitigation actions.
5. Summarize top 3 assumptions to monitor in the weekly stakeholder update.

---

## 7. Assumption-to-Action Routing

| Trigger | Required Follow-Up | Owner |
| :--- | :--- | :--- |
| Assumption confidence drops to Low | Create risk entry or raise risk score. | Risk owner |
| Assumption invalidated | Create action item with due date and escalation owner. | Workstream owner |
| Assumption validated with major scope impact | Log decision and update success criteria if needed. | Account Lead |
| Assumption retired | Add closure note with rationale and archive reference. | Pilot owner |

---

## 8. Leadership Summary Snippet (Copy/Paste)

`Assumption log update: [x] active assumptions ([h] high-impact if wrong). This week, [n] assumptions were validated and [m] were invalidated. Highest-priority open assumption is [Assumption ID + summary], owned by [owner], with validation due [date].`

---

_UniteCube - Northern Hokkaido Business Automation_
