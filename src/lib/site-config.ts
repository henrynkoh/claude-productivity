/** Public repo links (override via env for forks). */
const repo =
  process.env.NEXT_PUBLIC_GITHUB_REPO_URL ??
  "https://github.com/henrynkoh/seattle-llm-wiki-bootcamp";

const appPath = "greater-seattle-agent-skills-week";

export const siteConfig = {
  githubRepo: repo,
  /** Folder view on GitHub */
  githubCurriculumTree:
    process.env.NEXT_PUBLIC_GITHUB_CURRICULUM_TREE_URL ??
    `${repo}/tree/main/${appPath}`,
  /** Raw file in app folder (use for docs, marketing files) */
  githubBlob: (relativePath: string) =>
    `${repo}/blob/main/${appPath}/${relativePath.replace(/^\//, "")}`,
} as const;
