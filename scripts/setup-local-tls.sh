#!/usr/bin/env bash
set -euo pipefail

# Configure Nginx + Let's Encrypt on the same host running Paperclip.
DOMAIN="${DOMAIN:-unitecube.jp}"
ALT_DOMAIN="${ALT_DOMAIN:-www.unitecube.jp}"
EMAIL="${EMAIL:?EMAIL is required (Lets Encrypt registration)}"
WEB_ROOT="${WEB_ROOT:-/home/tartan/workspace/www/unitecube}"
NGINX_TEMPLATE="${NGINX_TEMPLATE:-infra/nginx/unitecube-local.conf}"
NGINX_DEST="${NGINX_DEST:-/etc/nginx/sites-available/unitecube.conf}"

if ! command -v nginx >/dev/null 2>&1; then
  echo "nginx command not found" >&2
  exit 1
fi

if ! command -v certbot >/dev/null 2>&1; then
  echo "certbot command not found; install with your distro package manager" >&2
  exit 1
fi

if [[ ! -f "$NGINX_TEMPLATE" ]]; then
  echo "Nginx template not found: $NGINX_TEMPLATE" >&2
  exit 1
fi

sudo mkdir -p "$WEB_ROOT" /var/www/certbot
sudo cp "$NGINX_TEMPLATE" "$NGINX_DEST"
sudo ln -sfn "$NGINX_DEST" /etc/nginx/sites-enabled/unitecube.conf

# Align template with runtime domain and web root if overrides are supplied.
sudo sed -i "s|server_name unitecube.jp www.unitecube.jp;|server_name ${DOMAIN} ${ALT_DOMAIN};|g" "$NGINX_DEST"
sudo sed -i "s|root /home/tartan/workspace/www/unitecube;|root ${WEB_ROOT};|g" "$NGINX_DEST"
sudo sed -i "s|/etc/letsencrypt/live/unitecube.jp|/etc/letsencrypt/live/${DOMAIN}|g" "$NGINX_DEST"

sudo nginx -t
sudo systemctl reload nginx

sudo certbot --nginx \
  -d "$DOMAIN" -d "$ALT_DOMAIN" \
  --agree-tos \
  --email "$EMAIL" \
  --redirect \
  --non-interactive

HOOK_FILE="/etc/letsencrypt/renewal-hooks/deploy/nginx-reload.sh"
sudo mkdir -p "$(dirname "$HOOK_FILE")"
cat <<'HOOK' | sudo tee "$HOOK_FILE" >/dev/null
#!/usr/bin/env bash
set -euo pipefail
systemctl reload nginx
HOOK
sudo chmod +x "$HOOK_FILE"

sudo systemctl enable --now certbot.timer
sudo certbot renew --dry-run

echo "Local TLS setup completed for ${DOMAIN} and ${ALT_DOMAIN}."
