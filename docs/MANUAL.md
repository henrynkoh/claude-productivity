# Operations manual

## Purpose

This app serves two audiences:

1. **Cohort participants and facilitators** — public pages at `/` and `/days/...` describe the week, concepts, and timed sessions.
2. **Operators** — maintain copy, ship updates, and run quality gates before deploy.

## Audience for this document

- Program lead and logistics
- Facilitators and coaches
- Content editors updating curriculum or marketing text

## Requirements

- Node.js 20.x (LTS) recommended
- npm 10+

## Architecture

- **App Router:** `src/app/`
- **Curriculum & cohort data:** `src/lib/curriculum.ts` → consumed by `/` and `/days/[daySlug]`
- **Playbook (landing-only copy):** `src/lib/playbook.ts`
- **Static day routes:** `generateStaticParams` in `src/app/days/[daySlug]/page.tsx` builds one page per `weekCurriculum[].slug`

## Operating procedures

### A. Local dev server

```bash
npm install
npm run dev
```

### B. Edit the 7-day curriculum

1. Open `src/lib/curriculum.ts`.
2. Adjust `cohortProfile`, `sourceInterview`, `deliveryPrinciples`, or items in `weekCurriculum`.
3. Keep each `slug` **unique** and URL-safe (lowercase, hyphens). URLs are `/days/<slug>`.
4. Run `npm run lint` and `npm run build`.
5. Confirm the build log lists every `/days/...` path you expect.

### C. Edit the landing page narrative only

1. Update `src/lib/playbook.ts` for concept sections and facilitator checklist.
2. Adjust `src/app/page.tsx` if you add/remove sections or change layout and anchors (`id` attributes must match sidebar links).

### D. Change day page layout

Edit `src/app/days/[daySlug]/page.tsx`, then run lint and build.

## Quality gate checklist

- No TypeScript errors
- ESLint clean
- `npm run build` succeeds
- Home page: internal links to `/days/...` resolve
- Build output: all day slugs appear under `/days/[daySlug]`

## Incident triage

- **404 on a day:** `slug` in `curriculum.ts` does not match the URL, or build cache stale — rebuild.
- **Wrong video or title:** update `sourceInterview` in `curriculum.ts` (single source of truth for metadata and hero link).

## Maintenance cadence (suggested)

- After each cohort: refresh dates, cohort size, and homework examples in `curriculum.ts`.
- Quarterly: review `marketing/` for platform limits (character counts, ad policies).
- When the anchor interview or product names change: update `sourceInterview` and affected playbook bullets.
