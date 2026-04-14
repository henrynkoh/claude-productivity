# Deploy on Vercel

Target repository: **`henrynkoh/claude-productivity`** (Next.js app at **repository root** — Root Directory **`/`**).

## Option A — Vercel dashboard (recommended)

1. Sign in at [vercel.com](https://vercel.com).
2. **Add New… → Project → Import** the GitHub repo **`henrynkoh/claude-productivity`**.
3. Vercel should detect **Next.js**. Leave **Root Directory** empty or **`/`**.
4. **Build Command:** `npm run build` (default). **Install Command:** `npm install` (default). **Output:** Next.js default.
5. **Environment variables** (optional — defaults in code already match this repo):

   | Name | Example value |
   | --- | --- |
   | `NEXT_PUBLIC_GITHUB_REPO_URL` | `https://github.com/henrynkoh/claude-productivity` |
   | `NEXT_PUBLIC_GITHUB_CURRICULUM_TREE_URL` | `https://github.com/henrynkoh/claude-productivity/tree/main` |

6. Deploy. Connect a custom domain under **Project → Settings → Domains** if needed.

## Option B — Vercel CLI

From this directory (where `package.json` lives):

```bash
npm install
npx vercel login
npx vercel link    # select team + link to claude-productivity project
npx vercel --prod
```

Requires a Vercel account and GitHub repo access. Do not commit the `.vercel/` folder (it is gitignored).

## After deploy

Open the production URL and confirm `/` and `/days/context-the-moat` load. If GitHub links on the site should point elsewhere (e.g. a monorepo path), set the `NEXT_PUBLIC_*` variables above.
