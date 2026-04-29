# FR Incident Communication Template Pack (v1)

- Date: 2026-04-26 (UTC)
- Issue: [UNI-155](/UNI/issues/UNI-155)
- Scope: Reusable communication templates for FR incidents from detection through closure
- Owner: CMO (message quality), Product/Ops (incident owner), Engineering (technical facts)
- Related docs:
  - `docs/FR-POST-RELEASE-ISSUE-TRIAGE-SLA-TEMPLATE.md`
  - `docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md`
  - `docs/FR-01-FR-02-ROLLBACK-RUNBOOK.md`
  - `docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md`

## 1. Purpose

Use this pack when an FR incident is opened and teams need fast, consistent, audience-specific messages.

Objectives:
- reduce delay between incident detection and stakeholder alignment
- keep updates factual, timestamped, and action-oriented
- separate internal technical detail from customer-safe communication

## 2. Communication Principles

- Always include UTC timestamps.
- Lead with impact first, then scope, then current action.
- State known facts clearly; label assumptions as unconfirmed.
- Give a specific next-update time in every active incident message.
- Avoid root-cause claims until technical confirmation is complete.

## 3. Incident Header Block (Use in Every Message)

```md
Incident ID: [FRX-INC-YYYYMMDD-##]
FR Reference: [FR-XX / Feature Name]
Severity: [Sev-1/2/3/4]
Status: [Investigating / Identified / Monitoring / Resolved]
Opened At (UTC): [YYYY-MM-DD HH:MM]
Incident Owner: [Name, Team]
Next Update (UTC): [YYYY-MM-DD HH:MM]
```

## 4. Template A: Internal Alert (First 15 Minutes)

Audience: Support, Product, Engineering on-call

```md
Subject: Incident Opened - [Incident ID] - [Short Impact]

[Incident Header Block]

Impact now:
- [Who is affected]
- [What is failing/degraded]
- [When impact started if known]

Current scope:
- Confirmed: [tenant/region/workflow]
- Unknown: [what still needs validation]

Actions in progress:
1. [Action + owner]
2. [Action + owner]

Immediate asks:
- Support: [ticket tagging / intake instruction]
- Product: [stakeholder routing / client list]
- Engineering: [triage step / rollback check]

War room/channel: [link or channel name]
```

## 5. Template B: Executive Snapshot (30-Second Read)

Audience: Leadership and decision owners

```md
Executive Incident Snapshot - [Incident ID]

Status: [Investigating / Identified / Monitoring / Resolved]
Severity: [Sev-X]
Business impact: [one sentence with KPI/SLA/commitment impact]
Affected scope: [customer count, workflow, geography]
Decision needed: [yes/no]. If yes: [specific decision, owner, due time]
Containment path: [rollback / workaround / hotfix + ETA]
Next update (UTC): [YYYY-MM-DD HH:MM]
```

## 6. Template C: Customer-Facing Initial Notice

Audience: impacted customers or account contacts

```md
Subject: Service Incident Notice - [Service/Workflow Name]

We are currently investigating an issue affecting [workflow/service].

What you may notice:
- [symptom 1]
- [symptom 2]

Start time (UTC): [YYYY-MM-DD HH:MM]
Current status: [Investigating]

Our team is actively working on containment. The next update will be shared by [YYYY-MM-DD HH:MM UTC].

If you need immediate support, contact [support channel].

Reference: [Incident ID]
```

## 7. Template D: Status Update (Active Incident Cadence)

Audience: internal stakeholders and customer-safe channel variant

```md
Incident Update - [Incident ID] - [Timestamp UTC]

Status change: [No change / Identified / Mitigated progress]
Current impact: [unchanged / narrowed / expanded]
What we completed since last update:
1. [completed action]
2. [completed action]

What we are doing now:
1. [active action + owner]
2. [active action + owner]

Risk to timeline/SLA: [none / describe briefly]
Next update (UTC): [YYYY-MM-DD HH:MM]
```

## 8. Template E: Workaround Instructions

Audience: Support and customers needing temporary continuity

```md
Temporary Workaround - [Incident ID]

Until full resolution is deployed, use the following workaround:
1. [step 1]
2. [step 2]
3. [step 3]

Applies to: [who/which workflow]
Does not fix: [known limitations]
Expected validity window: [time/date range]

If workaround fails, capture [required evidence] and route to [support path].
```

## 9. Template F: Resolution Notice

Audience: all previously notified stakeholders

```md
Subject: Incident Resolved - [Incident ID]

[Incident Header Block]

Resolution summary:
- Incident resolved at (UTC): [YYYY-MM-DD HH:MM]
- User impact period: [start -> end UTC]
- Fix/containment applied: [brief description]

Validation completed:
- [health check 1]
- [health check 2]

Follow-up:
- Root cause analysis due by (UTC): [YYYY-MM-DD HH:MM]
- Preventive action issues: [UNI-XXX](/UNI/issues/UNI-XXX)
```

## 10. Template G: Post-Incident RCA Kickoff Note

Audience: Product, Engineering, Support, Ops

```md
RCA Kickoff - [Incident ID]

Objective:
- Confirm root cause with evidence
- Identify prevention actions with owners and due dates

Meeting time (UTC): [YYYY-MM-DD HH:MM]
Facilitator: [Name]
Attendees: [roles]

Pre-read required:
- Timeline log
- Alert/monitor evidence
- Customer impact summary

Expected outputs:
1. Root cause statement
2. Corrective actions (now)
3. Preventive actions (next sprint/month)
4. Comms/process changes
```

## 11. Fill-In Data Checklist

Collect before first external message:
- incident ID and FR reference
- first observed time (UTC) and detection source
- impacted tenants/accounts and estimated count
- known unaffected areas
- incident owner, engineering lead, support lead
- committed next-update timestamp

## 12. Channel Mapping (Recommended)

| Message Type | Primary Channel | Backup Channel | Owner |
| --- | --- | --- | --- |
| Internal Alert | Incident chat channel | Pager / phone bridge | Incident owner |
| Executive Snapshot | Leadership chat / email | Incident review call | Product or CMO delegate |
| Customer Initial Notice | Email or status page | CSM direct outreach | Support lead |
| Active Status Update | Incident channel + status page | Email update | Incident owner |
| Resolution Notice | Same channels used at open | CSM follow-up | Support + Product |
| RCA Kickoff Note | Internal calendar + issue thread | Incident channel | Product/Ops |

## 13. Quality Gate Before Send

1. Impact sentence is specific and measurable.
2. Timestamp and next update are present in UTC.
3. Message contains no unverified root-cause claim.
4. Owner and action are explicit.
5. Customer-safe version removes internal-only technical detail.

---

_UniteCube - Northern Hokkaido Business Automation_
