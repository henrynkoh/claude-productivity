# Greater Seattle Agent Skills Week

Next.js site for a **one-week, facilitator-ready curriculum** for a small selected cohort of Greater Seattle startups. Content is aligned with the Greg Isenberg / Ross Mike discussion on **AI agents, context management, and skills** (progressive disclosure, recursive skill building, scaling with discipline).

**Source interview (anchor content):** [How AI agents & Claude skills work](https://www.youtube.com/watch?v=S_oN3vlzpMw)

## What’s in the app

| Area | Path |
| --- | --- |
| Landing (overview, concepts, week grid) | `/` |
| Day detail pages | `/days/[daySlug]` (see slugs in `src/lib/curriculum.ts`) |
| Curriculum data | `src/lib/curriculum.ts` |
| Playbook copy (landing sections) | `src/lib/playbook.ts` |
| Operator docs | `docs/` |
| Promo copy (SNS, blogs, email) | `marketing/` |

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Documentation

- **Quick orientation:** [`docs/QUICKSTART.md`](docs/QUICKSTART.md)
- **Operators & editors:** [`docs/MANUAL.md`](docs/MANUAL.md)
- **Step-by-step editing:** [`docs/TUTORIAL.md`](docs/TUTORIAL.md)

## Deploying (e.g. Vercel)

This repo may contain multiple apps. Set the Vercel project **Root Directory** to:

`greater-seattle-agent-skills-week`

### Optional env vars

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GITHUB_REPO_URL` | Root repo URL for footer and file links (default: this monorepo on GitHub). |
| `NEXT_PUBLIC_GITHUB_CURRICULUM_TREE_URL` | Folder URL for the bottom-right GitHub button and the marketing folder link. |

### Landing page

The home page includes a **fixed left sidebar** (scrollable nav to every subsection), **scroll-spy** active states, a **mobile Navigate** control, and a **GitHub** control at the **bottom-right** targeting this app’s directory in the repo.

## Marketing copy (paste-ready)

| Channel | File |
| --- | --- |
| Facebook / Meta ads | [`marketing/facebook.md`](marketing/facebook.md) |
| Instagram | [`marketing/instagram.md`](marketing/instagram.md) |
| Threads (longer posts) | [`marketing/threads.md`](marketing/threads.md) |
| Threads (ultra-short / A–B) | [`marketing/treads.md`](marketing/treads.md) |
| Blogger | [`marketing/blogger.md`](marketing/blogger.md) |
| WordPress | [`marketing/wordpress.md`](marketing/wordpress.md) |
| Naver Blog (KR) | [`marketing/naver-blog.md`](marketing/naver-blog.md) |
| Tistory (KR) | [`marketing/tistory.md`](marketing/tistory.md) |
| Newsletter | [`marketing/newsletter.md`](marketing/newsletter.md) |
| Email (ESP templates) | [`marketing/email.md`](marketing/email.md) |

## Global agent guidance

See [`AGENTS.md`](AGENTS.md) — kept intentionally minimal to match the curriculum’s “lean context” principle.
