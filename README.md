# IYERN public website

The public website for the International Youth Economics Research Network, a FinanceMeta research initiative. It presents an evidence-bound pre-launch archive, a real submission route, public research standards, and links back to the wider FinanceMeta ecosystem.

## Current public status

- The archive contains no verified public papers yet.
- Submission interest routes through the FinanceMeta public application flow.
- Human review is planned, but no paper is described as peer reviewed until that status is recorded.
- DOI assignment is not represented as active.

These boundaries are intentional. Do not add sample papers, authors, review outcomes, affiliations, or DOI records as if they were real.

## Local development

Use Node 20–22:

```bash
npm ci
npm run dev
```

Optional public URLs are documented in `.env.example`. All `VITE_` values are browser-visible and must never contain secrets.

## Verification

```bash
npm run check
```

The check runs the source/deployment contract tests and creates a production Vite build. Vercel uses the same command and serves `dist/` with security headers from `vercel.json`.

## Production

The canonical public origin is `https://iy-ern.vercel.app`. A local build or preview is not deployment evidence. After deployment, verify the canonical origin, submission handoff, FinanceMeta links, response headers, and the exact deployed source revision.
