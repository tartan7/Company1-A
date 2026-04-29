# Pilot Action-Items Tracker Template (v2)

*Date: YYYY-MM-DD / Version: 2.0*
*Owner: CMO / Delivery Lead*
*Pilot: [Client Name / Pilot ID]*

## 1. Purpose
Use this template to track pilot action items from decision to closure with clear ownership, due dates, and evidence.
Maintain one shared tracker per pilot and update it at least twice weekly.

---

## 2. Usage Rules

1. Every action item must have one accountable owner and one due date.
2. Link each action item to source context (decision log, risk register, incident note, or meeting notes).
3. Do not close action items without objective evidence in the `Evidence / Link` column.
4. If a due date slips, update `Revised Due Date`, `Blocker`, and `Escalation Owner` in the same update.
5. Archive only after closure criteria are met and accepted by pilot owner.

---

## 3. Action-Items Tracker

| Action Item ID | Date Logged | Workstream | Priority (High/Medium/Low) | Action Description | Owner | Collaborators | Original Due Date | Revised Due Date | Next Update Date | Status | Blocker | Escalation Owner | Source Artifact | Success / Closure Criteria | Evidence / Link | Last Updated |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| A-001 | YYYY-MM-DD | Onboarding | High | Finalize access matrix and confirm all required system permissions. | Delivery Lead | Client IT | YYYY-MM-DD |  | YYYY-MM-DD | Open |  |  | Kickoff notes | All named users can access required systems with test sign-off. | [Link] | YYYY-MM-DD |
| A-002 | YYYY-MM-DD | Data Integration | High | Complete field-mapping review and freeze schema for pilot sprint 1. | Data Lead | Client Ops | YYYY-MM-DD |  | YYYY-MM-DD | In Progress | Awaiting client field owner confirmation | Account Lead | Dependency map D-00X | Mapping approved by both teams and reflected in build backlog. | [Link] | YYYY-MM-DD |
| A-003 | YYYY-MM-DD | Enablement | Medium | Publish frontline SOP quick-start guide and training FAQ. | Enablement Lead | Ops Manager | YYYY-MM-DD | YYYY-MM-DD | YYYY-MM-DD | Blocked | SME review not complete | Client Project Owner | Stakeholder update week 1 | Guide distributed and acknowledged by all pilot participants. | [Link] | YYYY-MM-DD |

---

## 4. Status Definitions

- **Open:** Action is defined and not yet started.
- **In Progress:** Work is underway and owner is actively executing.
- **Blocked:** Work cannot proceed; blocker and escalation owner are required.
- **At Risk:** Work is moving but likely to miss due date without intervention.
- **Done:** Closure criteria met and evidence linked.
- **Cancelled:** Action intentionally stopped with rationale recorded in notes.

---

## 5. Weekly Review Cadence

During weekly governance or stakeholder review, confirm:

1. All `High` priority actions have current updates in the last 5 business days.
2. Any overdue action has a revised due date and escalation owner.
3. `Blocked` and `At Risk` actions include concrete unblock action and ETA.
4. Closed actions include evidence and outcome impact.
5. New actions from decisions/incidents are logged within 1 business day.

---

## 6. Priority Guidance

- **High:** Direct impact on launch readiness, KPI integrity, or client commitments.
- **Medium:** Important enablement/configuration work with manageable workaround.
- **Low:** Optimization or documentation improvements with no immediate delivery risk.

---

## 7. Carryover and Escalation View

| Bucket | Rule | Owner Action |
| :--- | :--- | :--- |
| Overdue | Due date in past and status is not Done/Cancelled | Update revised due date and post escalation in next status update. |
| Repeated Slip | Revised due date moved more than once | Escalate to sponsor and attach mitigation plan. |
| Cross-Team Dependency | Blocker owned by external team | Record dependency ID and escalation owner; review in governance checkpoint. |

---

## 8. Copy/Paste Summary Snippets

### Weekly Pilot Update Snippet

`Action tracker update: [x] open actions ([h] high, [m] medium, [l] low). [y] actions are blocked/at risk. Top risk action: [Action Item ID + summary] owned by [owner], due [date], escalation owner [name].`

### Leadership Escalation Snippet

`Escalation: Action [Action Item ID] is [Blocked/At Risk] and threatens [launch date/KPI/client commitment]. Current blocker: [blocker]. Owner: [name]. Support needed: [decision/resource] by [date].`

---

_UniteCube - Northern Hokkaido Business Automation_
