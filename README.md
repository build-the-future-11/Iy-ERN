# IYERN public website

The public website for the International Youth Economics Research Network, a FinanceMeta research initiative. It presents an evidence-bound pre-launch archive, a real submission route, public research standards, and links back to the wider FinanceMeta ecosystem.

## Current public status

- The archive contains no verified public papers yet.
- Submission interest routes through the FinanceMeta public application flow.
- Human review is planned, but no paper is described as peer reviewed until that status is recorded.
- DOI assignment is not represented as active.

These boundaries are intentional. Do not add sample papers, authors, review outcomes, affiliations, or DOI records as if they were real.

## Local development

Use Node 22.12 or later (CI pins Node 22.23.2):

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

The canonical public origin is `https://iy-ern.vercel.app`. Release builds require clean committed source and emit `/release-revision.json`. Hosted source archives without Git metadata must receive `SOURCE_SHA` or `VERCEL_GIT_COMMIT_SHA` for the uploaded source; conflicting identities fail the build. A pull-request event SHA is not accepted as a substitute for checked-out source.

After deployment, run `npm run live:verify -- <expected-40-character-commit-sha>` to verify the exact deployed revision, canonical origin and security headers. Separately inspect the submission handoff and FinanceMeta links. Neither a local build nor this read-only health check proves submission delivery.
