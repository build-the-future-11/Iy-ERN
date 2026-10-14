# IYERN public website

The public website for the International Youth Economics Research Network, a FinanceMeta research initiative. It presents the network, Finance Meta Research Cohort, FinanceMeta Labs, chapter partnerships, member affiliations, summer programs, journal and preprint forum.

## Current public status

- The archive contains no verified public papers yet.
- Separate Tally applications: journal https://tally.so/r/b5BBko and preprint forum https://tally.so/r/RGXXLJ.
- The organization supplied the researcher/country totals, individual member affiliations, chapter partnership scope and summer program participation figures on 14 October 2026.
- The journal uses peer review and offers mentorship for every submitted paper; no individual paper is described as reviewed before its review is recorded.
- DOI registration is being set up, as confirmed by the organization on 14 October 2026. Assignment will be confirmed for individual published articles once operational.

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

## Portable page preview

Run `node --max-old-space-size=128 scripts/export-preview.mjs` from this checkout to create the standalone `../evidence/iyern-page-20261014/IYERN.html` preview. This includes the page code and styles, works locally, and does not stamp a production release identity. The production build and deployment remain separate.
