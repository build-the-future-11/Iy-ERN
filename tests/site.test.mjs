import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const vercel = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'))

test('submission and ecosystem links use the verified public FinanceMeta origin', () => {
  assert.match(app, /https:\/\/finance-meta-landing\.vercel\.app/)
  assert.match(app, /https:\/\/finance4all-global-reach\.vercel\.app/)
  assert.match(app, /https:\/\/thebu1ld\.com\/network/)
  assert.match(app, /call=research-submission/)
  assert.doesNotMatch(app, /your-google-form-link/)
})

test('pre-launch archive does not manufacture papers or DOI availability', () => {
  assert.match(app, /const publications = \[\]/)
  assert.match(app, /Verified public papers[\s\S]*?<dd>0<\/dd>/)
  assert.match(app, /DOI service[\s\S]*?<dd>Not active<\/dd>/)
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
