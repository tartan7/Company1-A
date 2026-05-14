const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

function readPublicFile(relPath) {
  return fs.readFileSync(path.join(__dirname, '..', 'public', relPath), 'utf8');
}

const coreLayoutPages = ['home.html', 'solutions.html', 'industries.html', 'insights.html'];

test('core layout pages include shared navigation footer and mobile menu hooks', function () {
  coreLayoutPages.forEach(function (page) {
    const html = readPublicFile(page);

    assert.match(html, /class="site-header"/);
    assert.match(html, /class="site-nav"[^>]*data-site-nav/);
    assert.match(html, /data-site-menu-toggle/);
    assert.match(html, /class="site-footer"/);
    assert.match(html, /<span data-current-year><\/span>/);
  });
});

test('core layout pages load shared site stylesheet and script', function () {
  coreLayoutPages.forEach(function (page) {
    const html = readPublicFile(page);

    assert.match(html, /href="css\/site\.css"/);
    assert.match(html, /src="js\/site\.js"/);
  });
});

test('site stylesheet uses design-token variables from base token file', function () {
  const css = readPublicFile(path.join('css', 'site.css'));

  assert.match(css, /var\(--color-brand-primary\)/);
  assert.match(css, /var\(--color-neutral-700\)/);
  assert.match(css, /var\(--spacing-8\)/);
});
