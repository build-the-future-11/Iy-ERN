import test from 'node:test'
import assert from 'node:assert/strict'

import { normalizeSubmissionUrl } from '../src/submissionConfig.js'

test('accepts a valid HTTPS submission destination', () => {
  assert.equal(
    normalizeSubmissionUrl(' https://forms.example.org/submit?id=123 '),
    'https://forms.example.org/submit?id=123',
  )
})

test('rejects empty, malformed, or non-HTTPS values', () => {
  for (const value of ['', '   ', 'https://', 'not-a-url', 'http://forms.example.org/submit']) {
    assert.equal(normalizeSubmissionUrl(value), null)
  }
})

test('rejects URLs containing embedded credentials', () => {
  assert.equal(normalizeSubmissionUrl('https://user:pass@forms.example.org/submit'), null)
})
