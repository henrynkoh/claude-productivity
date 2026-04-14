# Quickstart

## 1) Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 2) Verify the build

```bash
npm run lint
npm run build
```

## 3) Where to edit content

| Goal | File |
| --- | --- |
| Cohort profile, 7-day schedule, session text | `src/lib/curriculum.ts` |
| Landing “core ideas,” facilitator checklist | `src/lib/playbook.ts` |
| Landing layout, navigation, week cards | `src/app/page.tsx` |
| Day page template | `src/app/days/[daySlug]/page.tsx` |
| Site title / metadata | `src/app/layout.tsx` |

## 4) Routes to spot-check

- Overview: `/`
- Example day: `/days/context-the-moat` (replace `slug` with any entry in `weekCurriculum`)

## 5) Promo copy

Copy from `marketing/` into Facebook, Instagram, Threads, blogs, newsletter, or email tools.

## 6) Deploy

Push to your host (e.g. Vercel) with **Root Directory** = `greater-seattle-agent-skills-week` if this folder lives inside a monorepo.
