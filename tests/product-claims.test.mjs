import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const appSource = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')

test('landing page does not present planned archive capabilities as live', () => {
  assert.match(appSource, /Research archive', value: 'Planned'/)
  assert.match(appSource, /Editorial endorsements', value: 'Planned'/)
  assert.match(appSource, /Planned public research archive/)
  assert.match(appSource, /Planned publishing flow/)

  assert.doesNotMatch(appSource, /Public research access', value: 'Open'/)
  assert.doesNotMatch(appSource, /Endorsement-based quality signal<\/span>/)
  assert.doesNotMatch(appSource, /Approved work is presented publicly in a clean, accessible format\./)
})

test('search affordance is explicitly non-interactive until the archive exists', () => {
  assert.match(appSource, /Search experience planned for the research archive/)
  assert.match(appSource, /<button className="filter-button" type="button" disabled>/)
})
