# Board Escalation Guide for External Design Handoff

## Purpose
This document defines the escalation path for board-owned external design dependencies to prevent blockers from lingering without timely intervention.

## SLA Checkpoints and Escalation Path

### Checkpoint 1: Initial ETA Miss
- **Trigger**: When external agency misses the first committed delivery date
- **Response Time**: 24 hours after missed ETA
- **Escalation Owner**: Design Lead (or assigned project manager)
- **Escalation Channel**: Slack #design-escalations + Email to design@unotecube.com
- **Required Evidence**:
  - Original agreed ETA (with source reference)
  - Actual missed date/time
  - Current status update from external agency
  - Revised ETA request from agency
  - Impact assessment on project timeline

### Checkpoint 2: Second Breach
- **Trigger**: When external agency misses the revised ETA from Checkpoint 1
- **Response Time**: 12 hours after second missed ETA
- **Escalation Owner**: Head of Product
- **Escalation Channel**: Slack #product-escalations + Email to product@unotecube.com + CC to CEO
- **Required Evidence**:
  - All evidence from Checkpoint 1
  - Documentation of first escalation attempt and response
  - Revised ETA from agency (if provided)
  - Detailed impact analysis on dependent tasks
  - Risk mitigation options considered

### Checkpoint 3: Hard Stop
- **Trigger**: When external agency misses the second revised ETA OR no response for 24 hours after Checkpoint 2 escalation
- **Response Time**: Immediate (within 4 hours)
- **Escalation Owner**: CEO
- **Escalation Channel**: Slack #CEO-escalations + Emergency phone call + Email to ceo@unotecube.com
- **Required Evidence**:
  - Complete escalation history (Checkpoints 1 & 2)
  - All communication attempts with timestamps
  - Formal request for emergency intervention
  - Impact on launch timeline and business objectives
  - Proposed alternatives (internal resources, alternative vendors, scope adjustment)

## Evidence Payload Requirements
All escalation comments must include:
1. **Owner**: Person/team responsible for the external relationship
2. **External Reference**: Agency name, contact person, contract/reference number
3. **New ETA**: Revised delivery estimate from external party (if available)
4. **Impact Assessment**: Specific tasks/blockers affected
5. **Mitigation Actions**: Steps already taken to address delay
6. **Decision Required**: Clear ask from escalation target (approval, resources, etc.)

## Linking to UNI-47
This guidance document should be referenced in the UNI-47 issue thread whenever:
- Initial ETA is missed
- Follow-up communication reveals delays
- Escalation is triggered per this guide

**Reference Format**: [Board Escalation Guide](/UNI/issues/UNI-190#document-BOARD-ESCALATION-GUIDE)

## Review and Updates
This guide should be reviewed quarterly or after any external design handoff incident to refine timing, ownership, or communication channels based on lessons learned.