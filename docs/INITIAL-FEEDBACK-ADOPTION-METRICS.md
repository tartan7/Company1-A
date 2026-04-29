# Initial Feedback Feature Adoption Metrics

- Date: 2026-04-26 (UTC)
- Scope: FR-01 (LINE auto-reply wording edits), FR-02 (monthly report recipient management)
- Telemetry sink: browser localStorage (`unitecube_adoption_metrics_v1`) and browser console (`[UniteCube Metrics] ...`)

## Metric Dictionary

| Event Name | Feature | Trigger | Why It Matters |
| --- | --- | --- | --- |
| `feedback_features_workflows_page_viewed` | FR-01 / FR-02 | `workflows.html` opens | Baseline feature-surface reach. |
| `fr01_template_editor_opened` | FR-01 | User opens LINE template editor | Indicates intent to update outbound copy. |
| `fr01_template_updated` | FR-01 | User saves valid LINE template | Primary admin update event for FR-01 adoption. |
| `fr01_template_save_validation_failed` | FR-01 | User attempts invalid LINE template save | Captures friction in template editing UX/constraints. |
| `fr02_recipient_added` | FR-02 | User adds valid monthly report recipient | Primary admin update event for FR-02 adoption. |
| `fr02_recipient_removed` | FR-02 | User removes monthly report recipient | Measures list maintenance behavior. |
| `fr02_recipient_add_validation_failed` | FR-02 | User attempts invalid recipient add | Captures validation friction (format/duplicate/cap). |
| `feedback_features_dashboard_page_viewed` | FR-02 (dispatch visibility) | `dashboard.html` opens | Baseline visibility into operational outcomes. |
| `fr02_monthly_report_dispatch_success_observed` | FR-02 | Dashboard detects successful monthly report log row | Proxy for successful monthly report dispatches from visible run history. |

## Derived Weekly Metrics

1. `FR-01 admin update frequency` = weekly count of `fr01_template_updated`
2. `FR-02 admin update frequency` = weekly count of (`fr02_recipient_added` + `fr02_recipient_removed`)
3. `Validation failure rate`:
   - FR-01 = `fr01_template_save_validation_failed / max(fr01_template_updated + fr01_template_save_validation_failed, 1)`
   - FR-02 = `fr02_recipient_add_validation_failed / max(fr02_recipient_added + fr02_recipient_add_validation_failed, 1)`
4. `Observed successful monthly report dispatches` = weekly count of `fr02_monthly_report_dispatch_success_observed`

## Verification and Weekly Review Checklist

1. Open `workflows.html` and `dashboard.html` in a browser.
2. In browser devtools console, run:
   ```js
   const metrics = JSON.parse(localStorage.getItem('unitecube_adoption_metrics_v1') || '{}');
   console.log(metrics.counters || {}, metrics.events || []);
   ```
3. Confirm counters exist for at least:
   - `fr01_template_updated`
   - `fr02_recipient_added` or `fr02_recipient_removed`
   - `fr02_monthly_report_dispatch_success_observed`
4. Confirm validation counters increase when intentionally submitting invalid values.
5. Record weekly totals for derived metrics above in ops review notes.
6. If counters are missing or flat for 2+ weeks, investigate:
   - user discoverability (feature placement)
   - validation rule strictness
   - dashboard log coverage for monthly report runs
