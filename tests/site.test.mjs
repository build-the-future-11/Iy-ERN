import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const story = readFileSync(new URL('../src/network-story.jsx', import.meta.url), 'utf8')
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const vercel = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'))

test('submission and ecosystem links use the verified public FinanceMeta origin', () => {
  assert.match(app, /https:\/\/finance-meta-landing\.vercel\.app/)
  assert.match(app, /https:\/\/finance4all-global-reach\.vercel\.app/)
  assert.match(app, /https:\/\/thebu1ld\.com\/network/)
  assert.match(app, /PROJECT_DIRECTORY_URL = `\$\{FINANCEMETA_URL\}\/projects`/)
  assert.match(story, /all 48 project webpages/i)
  assert.match(app, /https:\/\/tally\.so\/r\/b5BBko/)
  assert.match(app, /https:\/\/tally\.so\/r\/RGXXLJ/)
  assert.doesNotMatch(app, /your-google-form-link/)
})

test('pre-launch archive does not manufacture papers or DOI availability', () => {
  assert.match(app, /const publications = \[\]/)
  assert.match(app, /public archive is awaiting its first papers/)
  assert.match(app, /DOI registration is being set up/)
})

test('the UI exposes a keyboard-accessible four-step platform index', () => {
  assert.match(app, /className="section-index" aria-label="Explore IYERN"/)
  for (const label of ['Research cohort', 'FinanceMeta Labs', 'Our community', 'Summer programs']) {
    assert.match(app, new RegExp(label))
  }
})

test('page metadata exposes the canonical production URL', () => {
  assert.match(html, /<link rel="canonical" href="https:\/\/iy-ern\.vercel\.app\/">/)
  assert.match(html, /<meta property="og:title"/)
  assert.match(html, /<meta\s+name="description"/)
})

test('deployment serves the built site with baseline security headers', () => {
  assert.equal(vercel.framework, 'vite')
  assert.equal(vercel.outputDirectory, 'dist')
  assert.equal(vercel.buildCommand, 'npm run check')
  const headers = JSON.stringify(vercel.headers)
  assert.match(headers, /Content-Security-Policy/)
  assert.match(headers, /frame-ancestors 'none'/)
  assert.match(headers, /X-Content-Type-Options/)
})
