import { validateReceipt, validateRevision } from './release-revision.mjs'

const expected = validateRevision(process.argv[2])
const origin = 'https://iy-ern.vercel.app'
async function read(path, type) {
  const response = await fetch(`${origin}${path}`, { redirect: 'error', signal: AbortSignal.timeout(15_000), cache: 'no-store' })
  if (!response.ok || !response.headers.get('content-type')?.startsWith(type)) throw new Error(`Unexpected response for ${path}: ${response.status}`)
  return response
}
const revisionResponse = await read('/release-revision.json', 'application/json')
validateReceipt(await revisionResponse.json(), expected)
const page = await read('/', 'text/html')
for (const [header, value] of [['x-content-type-options', 'nosniff'], ['x-frame-options', 'DENY'], ['referrer-policy', 'strict-origin-when-cross-origin'], ['permissions-policy', 'camera=(), microphone=(), geolocation=()']]) {
  if (page.headers.get(header) !== value) throw new Error(`Missing or unexpected ${header}`)
}
if (!page.headers.get('content-security-policy')?.includes("frame-ancestors 'none'")) throw new Error('Missing frame protection')
if (!page.headers.get('strict-transport-security')?.includes('max-age=')) throw new Error('Missing HTTPS transport policy')
const html = await page.text()
if (!html.includes('https://iy-ern.vercel.app/')) throw new Error('Canonical origin missing')
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), origin, service: 'iyern-public-site', revision: expected, result: 'PASS', scope: 'exact revision, public HTML and security headers; no submission was sent' }))
