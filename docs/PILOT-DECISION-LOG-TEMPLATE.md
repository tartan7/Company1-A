# Pilot Decision Log Template (v2)

*Date: YYYY-MM-DD / Version: 2.0*
*Owner: CMO / Account Lead*
*Pilot: [Client Name / Pilot ID]*

## 1. Purpose
Use this template to record high-impact pilot decisions with enough context for future audits, onboarding, and escalation.
Update the log within 1 business day of each decision.

---

## 2. What to Log

Record decisions that materially affect:

- Pilot scope or success criteria
- Timeline, budget, or staffing
- Data/technical architecture or integrations
- Risk posture, governance, or compliance
- Client communication commitments

Do not log routine execution updates that do not change delivery direction.
If uncertain, log it and mark `Status = Pending Validation` until the governance checkpoint confirms final state.

---

## 3. Pilot Decision Log

| Decision ID | Decision Date | Workstream | Decision Type (Scope / KPI / Technical / Resource / Risk / Governance) | Trigger | Decision Summary | Options Considered | Rationale | Impact (Scope / Timeline / Budget / Risk) | Decision Owner | Approver | Participants | Effective Date | Review Date | Status (Pending Validation / Active / Superseded / Reversed) | Linked Artifacts | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| D-001 | YYYY-MM-DD | Lead Routing | KPI | Weekly steering review flagged KPI misalignment with commercial objective. | Shift pilot KPI from total leads to qualified leads. | Keep existing KPI / Add secondary KPI / Replace KPI | Qualified leads aligns with commercial objective and removes vanity metric risk. | Scope: Medium, Timeline: Low, Budget: Low, Risk: Medium | Account Lead | Client Sponsor | Sales Ops, Client Sponsor, Delivery Lead | YYYY-MM-DD | YYYY-MM-DD | Active | Retro doc, KPI dashboard | Seed example row. |
| D-002 | YYYY-MM-DD | Data Integration | Technical / Timeline | CRM API dependency remained unstable for 2 consecutive sprints. | Delay CRM writeback to Phase 2. | Build now / Delay / Remove | Writeback dependency risk could jeopardize launch date. | Scope: Medium, Timeline: Low, Budget: Medium, Risk: Reduced | Delivery Lead | CMO | Engineering, Client IT, Account Lead | YYYY-MM-DD | YYYY-MM-DD | Active | Risk register item R-00X |  |

---

## 4. Decision Quality Checklist

Before marking a decision as `Active`, confirm:

1. Decision is tied to a clear trigger, problem statement, or evidence.
2. At least two realistic options were considered.
3. Expected impacts (`scope/timeline/budget/risk`) are documented.
4. A single owner is accountable for execution.
5. Related artifacts (risk register, scope change, retrospective) are linked.
6. A named approver validates the decision when governance requires formal sign-off.

---

## 5. Status Definitions

- **Pending Validation:** Logged decision awaiting formal review or evidence check.
- **Active:** Current authoritative decision in force.
- **Superseded:** Replaced by a newer decision; keep for audit trail.
- **Reversed:** Decision rolled back due to new evidence or unacceptable impact.

When status changes, append a note with reason and reference the replacing decision ID.

---

## 6. Weekly Governance Review

1. Confirm all decisions made this week are logged with owner and impact.
2. Identify decisions lacking review dates and assign one.
3. Convert `Pending Validation` decisions to `Active` or `Reversed` with rationale.
4. Mark outdated decisions as `Superseded` and link replacements.
5. Verify high-risk decisions are reflected in the risk register.
6. Share top 3 active decisions in weekly pilot status communication.

---

## 7. Leadership Summary Snippet (Copy/Paste)

`This week, [X] material pilot decisions were recorded. The most impactful were [Decision ID(s)] affecting [scope/timeline/budget/risk]. Current open follow-through actions are owned by [Owner(s)] with next review on [Date].`

---

_UniteCube - Northern Hokkaido Business Automation_
