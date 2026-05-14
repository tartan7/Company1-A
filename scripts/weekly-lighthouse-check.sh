#!/usr/bin/env bash
set -euo pipefail

# Weekly Lighthouse check script for UniteCube
# This script runs Lighthouse against key pages and tracks Core Web Vitals over time

TARGET="${1:-http://127.0.0.1:8080}"
REPORT_DIR="${2:-./lighthouse-reports}"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
REPORT_FILE="${REPORT_DIR}/lighthouse-check-${TIMESTAMP}.json"

# Create report directory
mkdir -p "${REPORT_DIR}"

echo "Starting weekly Lighthouse check for ${TARGET}"

# Start HTTP server if needed (similar to performance-check.sh)
if [[ "${TARGET}" == *"127.0.0.1"* ]] || [[ "${TARGET}" == *"localhost"* ]]; then
    # Check if server is already running on port 8080
    if ! curl -s "http://127.0.0.1:8080" > /dev/null 2>&1; then
        echo "Starting HTTP server on port 8080 serving from public directory..."
        cd public && npx http-server . -p 8080 -a 127.0.0.1 > /dev/null 2>&1 &
        SERVER_PID=$!
        cd ..
        
        # Wait for server to be ready
        echo "Waiting for server to start..."
        for i in {1..30}; do
            if curl -s "http://127.0.0.1:8080" > /dev/null 2>&1; then
                echo "Server is ready!"
                break
            fi
            sleep 1
            if [ $i -eq 30 ]; then
                echo "Timeout waiting for server to start"
                kill $SERVER_PID 2>/dev/null || true
                exit 1
            fi
        done
    else
        echo "HTTP server already running on port 8080"
        SERVER_PID=""
    fi
else
    SERVER_PID=""
fi

# Run Lighthouse on key pages
PAGES=(
    ""  # Home page
    "dashboard.html"
    "workflows.html"
    "support.html"
    "industries.html"
    "insights.html"
    "solutions.html"
)

# Initialize Lighthouse report
cat > "$REPORT_FILE" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "target": "$TARGET",
  "pages": {}
}
EOF

# Test each page with Lighthouse
for page in "${PAGES[@]}"; do
    url="${TARGET%/}/${page}"
    page_label="${page:-home}"
    echo "Running Lighthouse on $url"
    
    # Run Lighthouse and save output
    PAGE_REPORT_FILE="${REPORT_DIR}/lighthouse-${page_label}-${TIMESTAMP}.json"
    
    # Run Lighthouse in CI mode (headless)
    npx lighthouse "$url" --preset=desktop --output=json --output-path="$PAGE_REPORT_FILE" --quiet
    
    # Extract Core Web Vitals from Lighthouse report
    if [ -f "$PAGE_REPORT_FILE" ]; then
        LCP=$(jq '.categories.performance.audit-ref-lcp.numericValue' "$PAGE_REPORT_FILE")
        CLS=$(jq '.categories.performance.audit-ref-cls.numericValue' "$PAGE_REPORT_FILE")
        INP=$(jq '.categories.performance.audit-ref-inp.numericValue' "$PAGE_REPORT_FILE")
        
        # Add to main report
        jq --arg page_label "$page_label" \
           --argjson lcp "$LCP" \
           --argjson cls "$CLS" \
           --argjson inp "$INP" \
           '.pages[$page_label] = {lcp: $lcp, cls: $cls, inp: $inp, url: $url}' \
           "$REPORT_FILE" > "${REPORT_FILE}.tmp" && mv "${REPORT_FILE}.tmp" "$REPORT_FILE"
    else
        echo "Warning: Lighthouse report not generated for $url"
    fi
done

# Add overall assessment based on thresholds from PERFORMANCE-TESTING.md
jq '.assessment = {
    "lcp_threshold": 2500,
    "cls_threshold": 0.1,
    "inp_threshold": 200,
    "pages_passing": {
      "lcp": (.pages[] | select(.lcp < .assessment.lcp_threshold) | length),
      "cls": (.pages[] | select(.cls < .assessment.cls_threshold) | length),
      "inp": (.pages[] | select(.inp < .assessment.inp_threshold) | length)
    },
    "total_pages": (.pages | length)
  }' "$REPORT_FILE" > "${REPORT_FILE}.tmp" && mv "${REPORT_FILE}.tmp" "$REPORT_FILE"

echo "Weekly Lighthouse check completed. Report saved to: $REPORT_FILE"
echo "Summary:"
jq '.pages | to_entries[] | "\(.key): LCP=\(.value.lcp|round)ms, CLS=\(.value.cls|round), INP=\(.value.inp|round)ms"' "$REPORT_FILE"

# Clean up server if we started it
if [ -n "${SERVER_PID:-}" ]; then
    echo "Stopping HTTP server..."
    kill $SERVER_PID 2>/dev/null || true
fi

# Output report location
echo "Full report available at: $REPORT_FILE"
echo "Individual page reports available in: $REPORT_DIR"