# UniteCube - Business Automation Dashboard

UniteCube provides business process automation services for SMBs in Hokkaido.
This repository contains the documentation and public dashboard assets.

## Documentation

- [Getting Started](docs/getting-started.md)
- [Production Deployment Runbook (Local Host)](docs/PRODUCTION-DEPLOYMENT.md)
- [Production DNS and TLS Runbook (Local Host)](docs/PRODUCTION-DNS-TLS.md)
- [Production Monitoring and Alerting Runbook](docs/PRODUCTION-MONITORING.md)
- [Design Specification](docs/DESIGN-SPEC.md)
- [Design Asset Intake Checklist](docs/DESIGN-ASSET-INTAKE-CHECKLIST.md) (v1)
- [Design Asset Intake Checklist and Handoff Package Spec](docs/DESIGN-ASSET-INTAKE-AND-HANDOFF-SPEC.md)
  (v1)
- [Technology Stack](docs/TECH-STACK.md)
- [Performance Testing](docs/PERFORMANCE-TESTING.md)
- [Initial Feedback Adoption Metrics](docs/INITIAL-FEEDBACK-ADOPTION-METRICS.md)
- [FR-01 / FR-02 Operational Alert Thresholds](docs/FR-01-FR-02-OPS-ALERT-THRESHOLDS.md)
  (v1)
- [Monthly FR Impact Summary Template](docs/FR-MONTHLY-IMPACT-SUMMARY-TEMPLATE.md)
  (v1)
- [FR Feature Ownership Matrix (Product / Support / Engineering)](docs/FR-FEATURE-OWNERSHIP-MATRIX.md)
  (v1)
- [FR Evidence Attachment Standards](docs/FR-EVIDENCE-ATTACHMENT-STANDARDS.md)
  (v1)
- [FR Reviewer Handoff Note Template](docs/FR-REVIEWER-HANDOFF-NOTE-TEMPLATE.md)
  (v1)
- [FR Post-Launch Validation Sample Size Guideline](docs/FR-POST-LAUNCH-VALIDATION-SAMPLE-SIZE-GUIDELINE.md)
  (v1)
- [Lead Qualification Scoring Rubric](docs/LEAD-QUALIFICATION-RUBRIC.md) (v1)
- [Pilot Risk Register Template](docs/PILOT-RISK-REGISTER-TEMPLATE.md) (v1)
- [Pilot Risk-Escalation Matrix Template](docs/PILOT-RISK-ESCALATION-MATRIX-TEMPLATE.md)
  (v1)
- [Pilot Onboarding Timeline Template](docs/PILOT-ONBOARDING-TIMELINE.md) (v1)
- [Pilot Retrospective Template (30-Day Review)](docs/PILOT-RETROSPECTIVE-TEMPLATE.md)
  (v1)
- [Pilot Lessons-Learned Log Template](docs/PILOT-LESSONS-LEARNED-LOG-TEMPLATE.md)
  (v1)
- [Pilot Post-Mortem Template](docs/PILOT-POSTMORTEM-TEMPLATE.md) (v2)
- [Pilot Decision Log Template](docs/PILOT-DECISION-LOG-TEMPLATE.md) (v1)
- [Pilot Change Log Template](docs/PILOT-CHANGE-LOG-TEMPLATE.md) (v1)
- [Pilot Assumptions Log Template](docs/PILOT-ASSUMPTIONS-LOG-TEMPLATE.md) (v1)
- [Pilot Communication-Plan Template](docs/PILOT-COMMUNICATION-PLAN-TEMPLATE.md)
  (v1)
- [Pilot Communication Cadence](docs/PILOT-COMMUNICATION-CADENCE.md) (v1)
- [Pilot Scope-Change Request Template](docs/PILOT-SCOPE-CHANGE-TEMPLATE.md)
  (v1)
- [Pilot Success-Criteria Revision Template](docs/PILOT-SUCCESS-CRITERIA-REVISION-TEMPLATE.md)
  (v1)
- [Pilot Handoff Checklist](docs/PILOT-HANDOFF-CHECKLIST.md) (v1)
- [Pilot KPI Anomaly Response Template](docs/PILOT-KPI-ANOMALY-RESPONSE-TEMPLATE.md)
  (v1)
- [Pilot KPI-Review Template](docs/PILOT-KPI-REVIEW-TEMPLATE.md) (v1)
- [Pilot Health-Score Template](docs/PILOT-HEALTH-SCORE-TEMPLATE.md) (v1)
- [Pilot Dependency Map Template](docs/PILOT-DEPENDENCY-MAP-TEMPLATE.md) (v1)
- [Pilot Stakeholder Update Template](docs/PILOT-STAKEHOLDER-UPDATE-TEMPLATE.md)
  (v1)
- [Pilot Status-Summary Template](docs/PILOT-STATUS-SUMMARY-TEMPLATE.md) (v1)
- [Pilot Review-Notes Template](docs/PILOT-REVIEW-NOTES-TEMPLATE.md) (v1)
- [Pilot Executive Summary Template](docs/PILOT-EXECUTIVE-SUMMARY-TEMPLATE.md)
  (v1)
- [Pilot Governance Checkpoint Template](docs/PILOT-GOVERNANCE-CHECKPOINT-TEMPLATE.md)
  (v1)
- [Pilot Checkpoint-Brief Template](docs/PILOT-CHECKPOINT-BRIEF-TEMPLATE.md)
  (v1)
- [Pilot Governance Checklist Template](docs/PILOT-GOVERNANCE-CHECKLIST-TEMPLATE.md)
  (v1)
- [Pilot Status-Review Deck Template](docs/PILOT-STATUS-REVIEW-DECK-TEMPLATE.md)
  (v1)
- [Pilot Control Plan Template](docs/PILOT-CONTROL-PLAN-TEMPLATE.md) (v1)
- [Pilot Quality-Gate Checklist](docs/PILOT-QUALITY-GATE-CHECKLIST.md) (v1)
- [Pilot Quality-Gate Checklist Template](docs/PILOT-QUALITY-GATE-CHECKLIST-TEMPLATE.md)
  (v1)
- [Pilot Milestone-Gate Template](docs/PILOT-MILESTONE-GATE-TEMPLATE.md) (v1)
- [Pilot Action-Items Tracker Template](docs/PILOT-ACTION-ITEMS-TRACKER-TEMPLATE.md)
  (v2)
- [Pilot Mitigation Tracker Template](docs/PILOT-MITIGATION-TRACKER-TEMPLATE.md)
  (v1)
- [Pilot Remediation Plan Template](docs/PILOT-REMEDIATION-PLAN-TEMPLATE.md)
  (v1)
- [Pilot Continuity-Plan Template](docs/PILOT-CONTINUITY-PLAN-TEMPLATE.md) (v1)
- [Pilot Risk-Escalation Message Template](docs/PILOT-RISK-ESCALATION-MESSAGE-TEMPLATE.md)
  (v1)
- [Pilot Escalation-Playbook Template](docs/PILOT-ESCALATION-PLAYBOOK-TEMPLATE.md)
  (v1)
- [Pilot Execution-Readiness Checklist](docs/PILOT-EXECUTION-READINESS-CHECKLIST.md)
  (v1)
- [Pilot Operations-Readiness Template](docs/PILOT-OPERATIONS-READINESS-TEMPLATE.md)
  (v1)
- [Pilot Success-Story Template](docs/PILOT-SUCCESS-STORY-TEMPLATE.md) (v1)
- [Monthly Client Performance Summary Template](docs/CLIENT-PERFORMANCE-SUMMARY-TEMPLATE.md)
  (v1)
- [FR-01 / FR-02 Rollout Note and Support Playbook](docs/FR-01-FR-02-ROLLOUT-NOTE-AND-SUPPORT-PLAYBOOK.md)
  (v1)

## Directory Structure

- `docs/`: Project documentation.
- `public/`: Frontend assets for the client dashboard.
- `scripts/`: Deployment and maintenance scripts.

## Core Page Layout Routes

- `/home.html`: Public homepage layout
- `/solutions.html`: Key landing page (implementation plans)
- `/industries.html`: Key landing page (industry use cases)
- `/insights.html`: Standard content page layout
- `/dashboard.html`: Authenticated client dashboard layout

---

UniteCube — Northern Hokkaido Business Automation
