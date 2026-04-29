# FR Change-Impact Summary One-Pager Template (v1)

- One-Pager Date (UTC): YYYY-MM-DD
- FR ID / Name: FR-XX - [Feature request title]
- Linked Issue: [UNI-###](/UNI/issues/UNI-###)
- Requestor / Sponsor: [Name / Role]
- Prepared By: [Name / Role]
- Decision Audience: [Product / Engineering / Ops / Client]
- Target Decision Date (UTC): YYYY-MM-DD
- Document Status: Draft / Review / Final

## 1. Executive Summary (5 Sentences Max)

Use this section for fast alignment and go/no-go framing.

- **What changed:** [1 sentence]
- **Why now:** [1 sentence, include trigger or deadline]
- **Primary business impact:** [1 sentence, KPI/cost/time/risk outcome]
- **Primary delivery risk:** [1 sentence]
- **Decision requested:** [1 sentence with owner + date]

## 2. Change Snapshot

| Field | Summary |
| --- | --- |
| Current State | [How work runs today] |
| Proposed Change | [What will be different after FR] |
| In Scope | [Behaviors/processes/surfaces included] |
| Out of Scope | [Explicit exclusions] |
| Affected Users / Teams | [Who changes workflow because of this] |
| Affected Systems | [Apps/services/integrations touched] |
| Rollout Type | Big bang / phased / canary |
| Reversibility | Fully reversible / Partially reversible / Hard to reverse |

## 3. Impact Assessment Scorecard

Score each area 1-5. Use 1 = minimal and 5 = major.

| Impact Area | Score (1-5) | Expected Direction | Evidence / Rationale |
| --- | --- | --- | --- |
| Customer/User Experience |  | Positive / Neutral / Negative | [Observed pain, interview, support signal] |
| Revenue / Pipeline / Retention |  | Positive / Neutral / Negative | [Forecast or historical pattern] |
| Cost / Efficiency |  | Positive / Neutral / Negative | [Time saved, reduced manual work, lower incident load] |
| Delivery Complexity |  | Positive / Neutral / Negative | [Dependencies, architectural depth, unknowns] |
| Operational Risk |  | Positive / Neutral / Negative | [Failure modes, support readiness, rollback confidence] |
| Compliance / Security / Data Risk |  | Positive / Neutral / Negative | [Policy/regulatory/security implications] |

## 4. Baseline vs Expected Outcome

| KPI / Signal | Baseline (Current) | Expected After Change | Time to Observe | Owner | Confidence (High/Medium/Low) |
| --- | --- | --- | --- | --- | --- |
| [KPI-1] | [Value + date range] | [Target value] | [e.g., 2 weeks post-release] | [Name/Team] |  |
| [KPI-2] |  |  |  |  |  |
| [KPI-3] |  |  |  |  |  |

## 5. Risk and Mitigation Summary

| Risk ID | Risk Statement | Likelihood (1-5) | Impact (1-5) | Score (LxI) | Mitigation | Trigger to Escalate | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-001 | [What can go wrong] |  |  |  | [Preventive action] | [Signal requiring escalation] | [Name/Role] |
| R-002 |  |  |  |  |  |  |  |

## 6. Dependency and Readiness Gate

| Dependency | Owner | Needed By (UTC) | Status (Open/At Risk/Closed) | Evidence Link |
| --- | --- | --- | --- | --- |
| [Example: API credential approval] | [Name/Role] | YYYY-MM-DD | Open | [Link] |
|  |  |  |  |  |

Readiness checks:
- [ ] Scope boundaries are explicit and agreed.
- [ ] Baseline metrics are attached with date ranges.
- [ ] Risks include mitigation + escalation trigger.
- [ ] Rollback/containment path is documented.
- [ ] Dependency owners confirmed needed-by dates.

## 7. Decision Options

| Option | Description | Benefit | Tradeoff | Recommended? |
| --- | --- | --- | --- | --- |
| A | [Proceed now] | [Value unlocked] | [Residual risk/cost] | Yes / No |
| B | [Proceed with constraints] | [Risk reduction] | [Slower timeline / reduced scope] | Yes / No |
| C | [Defer] | [Avoid near-term risk] | [Delayed value / continued pain] | Yes / No |

## 8. Final Recommendation

- Recommended Option: [A / B / C]
- Decision Owner: [Name / Role]
- Decision Due (UTC): YYYY-MM-DD
- Required Follow-Up Action: [Action + owner + due date]

## 9. Evidence Links (Required)

| Evidence Type | Link | Notes |
| --- | --- | --- |
| Request intake / problem evidence | [Link] | [Ticket set, call notes, examples] |
| Baseline KPI snapshot | [Link] | [Date range and extraction method] |
| Technical feasibility input | [Link] | [Architecture/engineering note] |
| Rollback or containment plan | [Link] | [Runbook reference] |
| Support/comms readiness | [Link] | [Message template, support briefing] |

## 10. Copy/Paste Issue Comment

`FR change-impact one-pager completed for [FR-XX]. Recommendation: [Option A/B/C]. Decision owner: [name], due [YYYY-MM-DD UTC]. Highest risk: [R-###] with mitigation [summary]. Next action: [specific action + owner + due date].`

## 11. Sample Filled Example (Reference)

- One-Pager Date (UTC): 2026-04-26
- FR ID / Name: FR-12 - Automated Lead Assignment Rules
- Linked Issue: [UNI-164](/UNI/issues/UNI-164)
- Requestor / Sponsor: Sales Operations Lead
- Prepared By: Product Operations
- Decision Audience: Product / Engineering / Sales Ops
- Target Decision Date (UTC): 2026-04-30
- Document Status: Review

### 11.1 Executive Summary

- **What changed:** Add rules-based auto-assignment so inbound leads route to the correct owner without manual triage.
- **Why now:** Manual routing volume increased 38 percent in March-April 2026 and is now breaching first-response SLA.
- **Primary business impact:** Reduce first-touch latency and improve conversion by cutting routing handoff delay.
- **Primary delivery risk:** Rule conflicts may misroute edge-case leads during early rollout.
- **Decision requested:** Approve Option B (phased rollout with guardrails) by 2026-04-30 UTC.

### 11.2 Snapshot and Scorecard Highlights

| Field | Summary |
| --- | --- |
| Current State | SDR manager manually triages each lead from intake sheet every 2-4 hours. |
| Proposed Change | Routing engine auto-assigns by region, segment, and source priority with override queue. |
| In Scope | Rule engine config, assignment audit log, override queue in admin panel. |
| Out of Scope | Territory redesign and compensation logic changes. |
| Affected Users / Teams | Sales Ops, SDRs, RevOps reporting owners. |
| Affected Systems | CRM sync service, intake API, notifications worker. |
| Rollout Type | Phased |
| Reversibility | Fully reversible via feature flag + manual queue fallback. |

| Impact Area | Score (1-5) | Expected Direction | Evidence / Rationale |
| --- | --- | --- | --- |
| Customer/User Experience | 4 | Positive | Faster rep follow-up should reduce lead wait time. |
| Revenue / Pipeline / Retention | 4 | Positive | Quicker routing historically correlates with higher contact rate. |
| Cost / Efficiency | 5 | Positive | Removes ~8 hours/week manual triage effort. |
| Delivery Complexity | 3 | Negative | Moderate integration work across intake + CRM sync. |
| Operational Risk | 3 | Neutral | Misroute risk managed with audit log and override queue. |
| Compliance / Security / Data Risk | 2 | Neutral | No new PII fields; existing controls unchanged. |

### 11.3 KPI, Risk, and Decision Summary

| KPI / Signal | Baseline (Current) | Expected After Change | Time to Observe | Owner | Confidence (High/Medium/Low) |
| --- | --- | --- | --- | --- | --- |
| Median lead routing time | 2h 10m (Mar-Apr 2026) | <20m | 2 weeks post-rollout | Sales Ops | High |
| First-response SLA breach rate | 24% | <10% | 2 weeks post-rollout | SDR Manager | Medium |
| Manual routing effort | 8h/week | <1h/week | 1 week post-rollout | RevOps | High |

| Risk ID | Risk Statement | Likelihood (1-5) | Impact (1-5) | Score (LxI) | Mitigation | Trigger to Escalate | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-001 | Conflicting rules misroute enterprise leads. | 3 | 4 | 12 | Priority order validation + shadow mode for 3 days. | >3 enterprise misroutes/day. | Engineering Lead |
| R-002 | CRM API lag delays assignment confirmations. | 2 | 3 | 6 | Queue retry + alert threshold at 5 minutes. | API lag >10 minutes for 30 minutes. | Platform Ops |

| Option | Description | Benefit | Tradeoff | Recommended? |
| --- | --- | --- | --- | --- |
| A | Proceed now for all leads. | Fastest value capture. | Highest blast radius if rules fail. | No |
| B | Phased rollout by segment with monitoring. | Balances value with controlled risk. | Slower full deployment by ~1 week. | Yes |
| C | Defer to next quarter. | No immediate rollout risk. | Continued SLA breaches and manual effort. | No |

Final recommendation in this sample: **Option B**, with decision due **2026-04-30 UTC** and rollout prep owned by **Engineering Lead + Sales Ops**.

_UniteCube - Feature Request Decision Operations_
