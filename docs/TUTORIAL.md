# Step-by-step tutorial

## Goal

Clone the project, customize the **Agent Skills Week** curriculum and landing copy, verify locally, and deploy.

## Step 1 — Install dependencies

```bash
cd greater-seattle-agent-skills-week
npm install
```

## Step 2 — Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). Confirm:

- Hero shows the cohort overview and link to the source interview.
- “Seven-day arc” cards link to day pages.
- Sidebar anchors on desktop scroll to the correct sections.

## Step 3 — Understand the file map

| File | Role |
| --- | --- |
| `src/lib/curriculum.ts` | Cohort profile, interview metadata, seven `DayPlan` objects |
| `src/lib/playbook.ts` | Concept sections and facilitator checklist for `/` |
| `src/app/page.tsx` | Landing UI |
| `src/app/days/[daySlug]/page.tsx` | Day detail template |
| `src/app/layout.tsx` | Global metadata and fonts |
| `src/app/globals.css` | Theme variables and base styles |

## Step 4 — Edit curriculum content

1. Open `src/lib/curriculum.ts`.
2. Modify `weekCurriculum` entries: `focus`, `startupScenario`, `keyOutcomes`, `sessions`, `homework`.
3. If you add a day, assign a new `day` number and a unique `slug`.
4. Visit `/days/<your-slug>` in the browser.

## Step 5 — Edit playbook sections

1. Open `src/lib/playbook.ts`.
2. Add or change items in `conceptSections` or `facilitatorChecklist`.
3. If you add a new concept block with a new `id`, add a matching entry to the `navSections` array in `src/app/page.tsx` so the sidebar stays in sync.

## Step 6 — Validate

```bash
npm run lint
npm run build
```

Read the build log: every curriculum slug should appear under the `/days/[daySlug]` route list.

## Step 7 — Deploy

Connect the repo to your host. If the repository root is **not** this folder, set **Root Directory** to `greater-seattle-agent-skills-week` before building.

## Step 8 — Use marketing assets

Open files under `marketing/` and paste into Facebook Ads Manager, Instagram, Threads, Blogger, Naver Blog, Tistory, WordPress, newsletter tools, or your ESP for email.

## Curriculum spine (reference when editing)

The week is organized around **context hygiene → skills as progressive disclosure → recursive skill building → build from your wins → one strong agent before specialists → capstone → demo and adoption**. Keep session outputs concrete (PRs, skill files, metrics), not abstract advice.
