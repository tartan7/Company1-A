# FR Post-Release Issue Triage SLA Template (v1)

- Date: YYYY-MM-DD (UTC)
- Issue: [UNI-XXX](/UNI/issues/UNI-XXX)
- Scope: Post-release incident triage SLA for FR-XX
- Owner: Product (Accountable), Support (First Response), Engineering (Technical Triage)
- Related docs:
  - `docs/FR-FEATURE-OWNERSHIP-MATRIX.md`
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`
  - `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md`

## 1. Purpose

Use this template to define and enforce triage SLAs for issues reported after an FR is released.
The goal is predictable first response, faster severity alignment, and clear containment ownership.

## 2. FR and Coverage Window

- FR ID / Name: `FR-XX / [Feature Name]`
- Release Date (UTC): `YYYY-MM-DD HH:MM`
- Hypercare Window: `[X days]` after release
- Active Support Window: `[Business hours + timezone]`
- On-call Escalation Path: `[Support lead] -> [Product owner] -> [Engineering on-call]`

## 3. Severity Definitions

| Severity | User Impact | Typical Trigger | Escalation Mode |
| --- | --- | --- | --- |
| Sev-1 (Critical) | Core workflow blocked or data/report delivery fails for production users | Repeated delivery failure, broken save path, tenant-wide failure | Immediate page + incident channel |
| Sev-2 (High) | Major degradation with workaround | Partial failure, recurring errors affecting active users | Same business hour escalation |
| Sev-3 (Medium) | Minor defect or confusion without workflow stop | Validation copy mismatch, UI friction, edge-case errors | Queue in triage board |
| Sev-4 (Low) | Cosmetic, documentation, or low-frequency annoyance | Copy polish, non-blocking UX cleanup | Backlog grooming |

## 4. SLA Targets

| SLA Metric | Sev-1 | Sev-2 | Sev-3 | Sev-4 |
| --- | --- | --- | --- | --- |
| Acknowledge customer/internal report | 15 minutes | 30 minutes | 4 business hours | 1 business day |
| Severity confirmed (Product + Support) | 30 minutes | 2 hours | 1 business day | 2 business days |
| Engineering triage start | 15 minutes | 4 business hours | 2 business days | Next sprint planning |
| Containment decision (fix / rollback / workaround) | 60 minutes | 1 business day | 3 business days | Backlog decision |
| Stakeholder status cadence while active | Every 60 minutes | Every 4 business hours | Daily | Weekly summary |

## 5. Triage Workflow (Operational)

1. Intake and evidence capture (Support)
- Capture UTC timestamp, tenant/account, affected FR, reproduction steps, and screenshot/log excerpt.

2. Severity alignment (Support + Product)
- Confirm business impact and user reach.
- Assign provisional severity and owner.

3. Technical triage (Engineering)
- Validate reproducibility.
- Determine fix, rollback, or workaround path.
- Estimate containment ETA.

4. Stakeholder communications (Product)
- Publish status updates using the SLA cadence.
- Confirm customer-facing workaround guidance if applicable.

5. Closure criteria
- Incident is resolved or stable workaround is verified.
- Root cause and follow-up action are logged.
- FR monthly impact summary is updated.

## 6. Roles and RACI

| Activity | Product | Support | Engineering |
| --- | --- | --- | --- |
| First report intake | C | A/R | I |
| Severity confirmation | A/R | R | C |
| Technical triage and containment | C | C | A/R |
| Rollback decision and execution | C | R | A/R |
| Stakeholder and customer updates | A/R | R | C |
| Post-incident learnings and follow-up prioritization | A/R | C | C |

## 7. Required Incident Record Fields

| Field | Required | Example |
| --- | --- | --- |
| Incident ID | Yes | `FR2-INC-2026-05-03-01` |
| FR Reference | Yes | `FR-02` |
| Initial Report Time (UTC) | Yes | `2026-05-03 09:12 UTC` |
| Reporter Channel | Yes | Support ticket / client call / internal alert |
| Tenant/Account | Yes | `Acme Foods` |
| Severity | Yes | `Sev-2` |
| Current Owner | Yes | `Support Lead` |
| SLA Clock Start | Yes | `2026-05-03 09:12 UTC` |
| Containment Decision | Yes | Workaround published |
| Resolution Time (UTC) | Yes | `2026-05-03 13:40 UTC` |
| Follow-up Issue Link(s) | Yes | [UNI-XXX](/UNI/issues/UNI-XXX) |

## 8. SLA Breach Handling

- Breach condition: Any SLA metric misses target for active severity tier.
- Immediate action:
  - Product posts breach note with cause and new ETA.
  - Engineering confirms containment path or rollback posture.
  - Support updates customer-facing message.
- Follow-up action:
  - Log breach in monthly FR impact summary.
  - Add one preventive action item with owner and due date.

## 9. Triage Log Template (Copy/Paste)

```md
### FR Post-Release Triage Log
- Incident ID:
- FR ID:
- Reported At (UTC):
- Severity:
- Reporter / Channel:
- Tenant / Scope:
- Summary:
- Reproduction Steps:
- First Response At (UTC):
- Severity Confirmed At (UTC):
- Engineering Triage Start (UTC):
- Containment Decision:
- Current Status:
- Next Update Time (UTC):
- Follow-up Issue(s): [UNI-XXX](/UNI/issues/UNI-XXX)
```

## 10. Review Cadence

- Daily during hypercare: confirm active incident counts and SLA adherence.
- Weekly post-hypercare: review triage patterns and recurring root causes.
- Monthly: roll up SLA adherence in `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md`.

---

_UniteCube — Northern Hokkaido Business Automation_
