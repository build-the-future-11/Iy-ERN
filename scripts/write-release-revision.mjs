import { writeFileSync } from 'node:fs'
import { resolveRevision } from './release-revision.mjs'

const receipt = { service: 'iyern-public-site', revision: resolveRevision() }
writeFileSync('dist/release-revision.json', JSON.stringify(receipt) + '\n')
console.log(`Stamped IYERN source ${receipt.revision}`)
