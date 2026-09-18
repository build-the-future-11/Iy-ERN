# IYERN — International Youth Economics Research Network

IYERN is currently a small Vite/React public-facing prototype for an economics and financial-literacy research network.

## Implemented today

- static public landing page;
- about/process sections;
- a submission CTA that is **disabled unless a real HTTPS form URL is configured**;
- responsive styling.

The repository does not currently implement a publication database, authentication, paper search, endorsement backend, or automated editorial workflow.

## Local development

```bash
npm ci
npm run dev
```

A reviewed npm lockfile is committed. GitHub Actions now verifies the exact PR/source SHA on Node 22.23.2, installs with `npm ci`, fails on high-severity production dependency advisories, enforces the submission-config boundary, and builds the production bundle.

## Submission configuration

```bash
cp .env.example .env
```

Set:

```text
VITE_SUBMISSION_FORM_URL=https://...
```

Only configure a reviewed real HTTPS destination. When the value is absent or invalid, submission actions fail closed and display as unavailable instead of sending users to a placeholder URL.

## Evidence boundary

The current site is a UI prototype. Text describing review, publication, endorsements, or public research access is product intent unless corresponding operational/backend evidence is separately established.
