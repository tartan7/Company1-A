# URL Redirect Map (Nginx)

Date: 2026-04-26 (UTC)  
Issue: UNI-52

## Hosting Platform Output

Nginx redirect configuration file:

- `infra/nginx/redirect-map.conf`

This file includes:

- `301` 1:1 redirects for moved pages
- `301` pattern redirects for structural route changes
- `410` responses for intentionally removed legacy endpoints

## Included Legacy URL Inventory

Machine-readable legacy source list:

- `infra/nginx/legacy-url-inventory.txt`

Inventory entries are expected to resolve to either:

- `301` (with a concrete destination)
- `410` (intentionally removed)

No inventory URL should remain orphaned.

## Nginx Integration

`infra/nginx/unitecube-local.conf` includes:

```nginx
include /etc/nginx/snippets/unitecube-redirect-map.conf;
```

Deployment step:

1. Copy `infra/nginx/redirect-map.conf` to `/etc/nginx/snippets/unitecube-redirect-map.conf`.
2. Validate syntax: `nginx -t`
3. Reload: `sudo systemctl reload nginx`

## Local Verification

Redirect assertions are covered by automated tests:

```bash
npm test
```

Validation includes:

- Redirect targets exist in `public/`
- 410 endpoints return retired status in mapping logic
- Legacy inventory has zero orphaned URLs
