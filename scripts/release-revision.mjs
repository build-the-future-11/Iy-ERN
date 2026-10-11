import { execFileSync } from 'node:child_process'

export function validateRevision(value) {
  const revision = String(value ?? '').trim()
  if (!/^[0-9a-f]{40}$/.test(revision)) throw new Error('Release identity requires a lowercase 40-character Git SHA')
  return revision
}

export function resolveRevision({ env = process.env, git = args => execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim() } = {}) {
  const declared = ['SOURCE_SHA', 'VERCEL_GIT_COMMIT_SHA'].filter(key => env[key]).map(key => validateRevision(env[key]))
  if (new Set(declared).size > 1) throw new Error('Release environment revisions disagree')
  let head
  try { head = git(['rev-parse', 'HEAD']) } catch {
    // Hosted source archives may omit Git metadata. They still need an explicit source identity.
    if (declared.length) return declared[0]
    throw new Error('No checked-out source or declared release revision is available')
  }
  const revision = validateRevision(head)
  if (declared.some(value => value !== revision)) throw new Error('Declared release revision differs from checked-out source')
  if (git(['status', '--porcelain', '--untracked-files=normal'])) throw new Error('Release builds require clean committed source')
  return revision
}

export function validateReceipt(receipt, expected) {
  if (!receipt || receipt.service !== 'iyern-public-site' || receipt.revision !== validateRevision(expected)) {
    throw new Error('Live IYERN release identity does not match the expected source')
  }
  return receipt
}
