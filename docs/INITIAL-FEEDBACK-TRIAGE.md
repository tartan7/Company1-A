# Initial Feedback Triage

- Date: 2026-04-26 (UTC)
- Source batch: support ticket sample data (`public/support.html`), technical audit (`docs/SITE-AUDIT.md`), visual/UX audit (`docs/DESIGN-AUDIT.md`)
- Scope: first actionable user-facing feedback set after production dependency resolution

## Triage Summary

| Bucket | Count | Priority Rule |
| --- | ---: | --- |
| Critical bugs | 2 | Immediate engineering fix path via [UNI-20](/UNI/issues/UNI-20) |
| UX issues | 3 | Queue into near-term UX/accessibility remediation |
| Feature requests | 2 | Validate demand and schedule after critical stability fixes |

## Critical Bugs (Immediate)

| ID | Feedback Signal | Evidence | Severity | Action | Owner |
| --- | --- | --- | --- | --- | --- |
| CB-01 | Root URL does not resolve to product surface | `docs/SITE-AUDIT.md`: `/` expected 404 in production due to missing `index.html`/rewrite | Critical | Add root routing (`/` -> `/dashboard.html`) and verify production response code | Engineering ([UNI-20](/UNI/issues/UNI-20)) |
| CB-02 | Integration failure: Google Spreadsheet linkage error | Support ticket item: `Googleスプレッドシート連携でエラーが発生しています` in `public/support.html` | High | Reproduce integration failure, patch, and add regression test | Engineering ([UNI-20](/UNI/issues/UNI-20)) |

## UX Issues

| ID | Feedback Signal | Evidence | Impact | Recommended Follow-up |
| --- | --- | --- | --- | --- |
| UX-01 | Ticket rows are not reliably keyboard-operable | `docs/DESIGN-AUDIT.md` P0 finding on `role="button"` rows without Enter/Space handling | Accessibility and task completion risk | Fix semantics/keyboard handlers in support list interactions |
| UX-02 | Placeholder links behave like dead controls (`href="#"`) | `docs/DESIGN-AUDIT.md` P0 finding across dashboard/support | Trust and navigation quality risk | Replace with real routes or proper button actions |
| UX-03 | Modal and sidebar focus handling is incomplete on assistive flows | `docs/DESIGN-AUDIT.md` P0/P1 findings | Accessibility regression risk | Implement focus return/trap hardening and reduced-motion support |

## Feature Requests

| ID | Request | Evidence | Priority | Recommended Follow-up |
| --- | --- | --- | --- | --- |
| FR-01 | Edit LINE auto-reply wording | Support ticket item: `LINE返信のメッセージ文言を変更したい` in `public/support.html` | Medium | Define workflow-level copy customization requirements |
| FR-02 | Add monthly report recipients | Support ticket item: `月次レポートの送信先メールアドレスを追加したい` in `public/support.html` | Medium | Add configurable recipient list and validation constraints |

## Feature Scope Definition (Initial Cut)

### FR-01: LINE Auto-Reply Wording Edits

In scope (V1):
- Single active reply template editable by authorized admins.
- Basic variable interpolation limited to known placeholders (for example: customer name, reservation date).
- Preview before save and immediate application to new outbound replies.

Out of scope (V1):
- Multi-template routing by segment or keyword.
- A/B testing or scheduled template versioning.
- Per-agent personalized variants.

### FR-02: Monthly Report Recipient Management

In scope (V1):
- Admin-managed recipient list with add/remove actions.
- Email format validation and duplicate prevention.
- Max-recipient cap to limit accidental blast expansion.

Out of scope (V1):
- Per-report-type recipient policies.
- Approval workflows for recipient changes.
- External directory sync (Google Workspace/LDAP).

## Feature Prioritization Framework

Scoring model (1-5 each): `User Impact`, `Frequency Signal`, `Delivery Effort`, `Operational Risk`.

- `Weighted Score = (User Impact * 0.35) + (Frequency Signal * 0.25) + ((6 - Delivery Effort) * 0.20) + ((6 - Operational Risk) * 0.20)`
- Higher score means earlier scheduling after critical bug remediation.

| ID | User Impact | Frequency Signal | Delivery Effort | Operational Risk | Weighted Score | Recommendation |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| FR-02 | 4 | 3 | 2 | 2 | 3.80 | Build first in feature window |
| FR-01 | 3 | 3 | 3 | 3 | 3.00 | Build second after FR-02 |

## Scheduling Recommendation

1. Deliver FR-02 first as the lower-risk operational improvement with straightforward constraints.
2. Deliver FR-01 second after confirming copy-governance rules for editable outbound messaging.
3. Re-score both requests after 2-4 weeks of live support volume data and onboarding cohort feedback.

## Decision Gates Before Implementation

- Product: confirm admin role boundary and audit expectations for outbound copy edits (FR-01).
- Engineering: confirm recipient cap default and error messaging behaviors (FR-02).
- Support: validate whether either request is coming from multiple customers or only one account.

## Priority Order

1. Resolve critical bugs (CB-01, CB-02) via [UNI-20](/UNI/issues/UNI-20).
2. Implement UX/accessibility remediation from UX-01 through UX-03.
3. Evaluate and schedule feature requests FR-01 and FR-02 after stability patch window.

## Notes

- This triage intentionally prioritizes reliability and access first to protect early-user trust.
- As live production telemetry/support data grows, update this doc with observed frequency and customer segment impact.
