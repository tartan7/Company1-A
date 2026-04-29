const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const publicDir = path.join(__dirname, '..', 'public');
const inventoryPath = path.join(__dirname, '..', 'infra', 'nginx', 'legacy-url-inventory.txt');

const exactRedirects = new Map([
  ['/index.html', '/dashboard.html'],
  ['/dashboard/index.html', '/dashboard.html'],
  ['/workflows/index.html', '/workflows.html'],
  ['/support/index.html', '/support.html']
]);

const regexRedirects = [
  { pattern: /^\/(dashboard|workflows|support)\/?$/i, to: (m) => `/${m[1].toLowerCase()}.html` },
  { pattern: /^\/(?:app|portal)\/(dashboard|workflows|support)\/?$/i, to: (m) => `/${m[1].toLowerCase()}.html` }
];

const gonePatterns = [
  /^\/index\.php$/i,
  /^\/home\.php$/i,
  /^\/wp-login\.php$/i,
  /^\/xmlrpc\.php$/i,
  /^\/(?:wp-admin|wp-content|wp-includes)(?:\/.*)?$/i,
  /^\/(?:feed|rss|atom)(?:\/.*)?$/i
];

function resolveLegacyPath(urlPath) {
  const exact = exactRedirects.get(urlPath);
  if (exact) {
    return { type: 'redirect', status: 301, location: exact };
  }

  for (const rule of regexRedirects) {
    const match = urlPath.match(rule.pattern);
    if (match) {
      return { type: 'redirect', status: 301, location: rule.to(match) };
    }
  }

  for (const pattern of gonePatterns) {
    if (pattern.test(urlPath)) {
      return { type: 'gone', status: 410 };
    }
  }

  return { type: 'orphan', status: 404 };
}

function routeToPublicFile(routePath) {
  return path.join(publicDir, routePath.replace(/^\//, ''));
}

test('redirected targets resolve to existing public files', function () {
  const seenTargets = new Set();

  for (const source of exactRedirects.keys()) {
    const result = resolveLegacyPath(source);
    assert.equal(result.status, 301);
    seenTargets.add(result.location);
  }

  for (const candidate of ['/dashboard', '/workflows', '/support', '/app/dashboard', '/portal/workflows']) {
    const result = resolveLegacyPath(candidate);
    assert.equal(result.status, 301);
    seenTargets.add(result.location);
  }

  for (const target of seenTargets) {
    const filePath = routeToPublicFile(target);
    assert.equal(fs.existsSync(filePath), true, `missing redirect target file for ${target}`);
  }
});

test('intentionally retired legacy endpoints return 410', function () {
  const retired = [
    '/index.php',
    '/home.php',
    '/wp-login.php',
    '/xmlrpc.php',
    '/wp-admin',
    '/wp-admin/install.php',
    '/wp-content/uploads/legacy.png',
    '/wp-includes/js/jquery.js',
    '/feed',
    '/rss',
    '/atom'
  ];

  for (const source of retired) {
    const result = resolveLegacyPath(source);
    assert.equal(result.status, 410, `expected 410 for ${source}`);
  }
});

test('legacy URL inventory has no orphaned paths', function () {
  const inventory = fs
    .readFileSync(inventoryPath, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  assert.notEqual(inventory.length, 0, 'legacy inventory must not be empty');

  const orphans = [];
  for (const source of inventory) {
    const result = resolveLegacyPath(source);
    if (result.type === 'orphan') {
      orphans.push(source);
    }
  }

  assert.deepEqual(orphans, []);
});
