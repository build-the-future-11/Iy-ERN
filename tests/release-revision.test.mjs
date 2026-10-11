import assert from 'node:assert/strict'
import test from 'node:test'
import { resolveRevision, validateReceipt, validateRevision } from '../scripts/release-revision.mjs'

const head = 'a'.repeat(40)
const other = 'b'.repeat(40)
const cleanGit = args => args[0] === 'rev-parse' ? head : ''
test('release uses clean checked-out source, not a pull request merge event', () => {
  assert.equal(resolveRevision({ env: { GITHUB_SHA: other }, git: cleanGit }), head)
})
test('release refuses uncommitted source', () => {
  assert.throws(() => resolveRevision({ env: {}, git: args => args[0] === 'rev-parse' ? head : ' M src/App.jsx' }), /clean committed source/)
})
test('release rejects conflicting declared source identities', () => {
  assert.throws(() => resolveRevision({ env: { SOURCE_SHA: head, VERCEL_GIT_COMMIT_SHA: other }, git: cleanGit }), /disagree/)
})
test('release rejects a declared revision from another checkout', () => {
  assert.throws(() => resolveRevision({ env: { SOURCE_SHA: other }, git: cleanGit }), /differs/)
})
test('source archives require an explicit immutable identity', () => {
  const git = () => { throw new Error('no Git metadata') }
  assert.equal(resolveRevision({ env: { SOURCE_SHA: head }, git }), head)
  assert.throws(() => resolveRevision({ env: { GITHUB_SHA: other }, git }), /No checked-out source/)
})
test('malformed release identities are rejected', () => {
  for (const value of ['', 'main', 'a'.repeat(7), 'A'.repeat(40)]) assert.throws(() => validateRevision(value))
})
test('live verification requires the correct service and exact source', () => {
  assert.equal(validateReceipt({ service: 'iyern-public-site', revision: head }, head).revision, head)
  assert.throws(() => validateReceipt({ service: 'other-site', revision: head }, head))
  assert.throws(() => validateReceipt({ service: 'iyern-public-site', revision: other }, head))
  assert.throws(() => validateReceipt(null, head))
})
