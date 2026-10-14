// Portable local preview only. Production releases use npm run check and its
// immutable source receipt. This export does not stamp or claim a deployment.
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const directory = resolve(process.argv[2] || '../evidence/iyern-page-20261014')
mkdirSync(directory, { recursive: true })
const result = await build({
  entryPoints: ['src/main.jsx'], bundle: true, write: false,
  outdir: directory, format: 'iife', minify: true, jsx: 'automatic', target: 'es2020',
  define: { 'import.meta.env.VITE_FINANCEMETA_URL': 'undefined', 'process.env.NODE_ENV': '"production"' },
})
const javascript = result.outputFiles.find(file => file.path.endsWith('.js')).text
const css = result.outputFiles.find(file => file.path.endsWith('.css')).text
// Callback replacements preserve literal dollar sequences inside the bundle.
const html = readFileSync('index.html', 'utf8')
  .replace(/<script type="module" src="\/src\/main.jsx"><\/script>/, '')
  .replace('</head>', () => `<style>${css}</style></head>`)
  .replace('</body>', () => `<script>${javascript.replace(/<\/script/gi, '<\\/script')}</script></body>`)
writeFileSync(resolve(directory, 'IYERN.html'), html)
console.log(`Portable preview exported to ${resolve(directory, 'IYERN.html')}`)
