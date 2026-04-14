/**
 * Public GitHub links. Defaults target the standalone repo
 * `henrynkoh/claude-productivity` (app at repo root).
 * In a monorepo checkout, set NEXT_PUBLIC_GITHUB_* in `.env.local`.
 */
const repo =
  process.env.NEXT_PUBLIC_GITHUB_REPO_URL ??
  "https://github.com/henrynkoh/claude-productivity";

export const siteConfig = {
  githubRepo: repo,
  /** Folder view on GitHub (e.g. marketing/, docs/) */
  githubCurriculumTree:
    process.env.NEXT_PUBLIC_GITHUB_CURRICULUM_TREE_URL ?? `${repo}/tree/main`,
  /** File view: paths are relative to repo root for claude-productivity */
  githubBlob: (relativePath: string) =>
    `${repo}/blob/main/${relativePath.replace(/^\//, "")}`,
} as const;
