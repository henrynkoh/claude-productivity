import { sourceInterview } from "./curriculum";

export const hero = {
  eyebrow: "Greater Seattle cohort · 1 week · hands-on",
  title: "Agent Skills Week",
  subtitle:
    "A practical curriculum for small startup teams: manage context like a product, encode winning runs as skills, and scale agent usage with discipline—not noise.",
  videoUrl: sourceInterview.url,
  videoLabel: sourceInterview.title,
};

export const conceptSections: {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
}[] = [
  {
    id: "problem-global-files",
    title: "Why giant agent.md files backfire",
    subtitle: "Always-on cost",
    points: [
      "Oversized system files inject thousands of tokens every turn—you pay money and burn context that should hold code, logs, and decisions.",
      "As the window fills, the model behaves as if it were “dumber”: less room for the facts that actually matter for your repo.",
      "Most teams do not need a novel-length global prompt; they need tight defaults and on-demand depth.",
    ],
  },
  {
    id: "skills-disclosure",
    title: "Skills and progressive disclosure",
    subtitle: "Load the right depth at the right time",
    points: [
      "A skill’s title and short description can stay visible in the index without loading the full instructions.",
      "The agent pulls the full skill body only when the task matches—preserving budget for execution evidence.",
      "Treat skills like a catalog: clear names, explicit triggers, and linked scripts—not mystery meat prompts.",
    ],
  },
  {
    id: "recursive-build",
    title: "Recursive skill building (human-in-the-loop)",
    subtitle: "Codify the win, not the fantasy",
    points: [
      "Start from a real manual workflow you already run (research, reporting, release checks).",
      "Pair-step with the agent; when it fails, ask why—HTTP codes, missing guardrails, wrong assumptions—before rewriting prose.",
      "After a clean run: “Review what you just did and create a skill so we can repeat this next time.”",
      "When a new edge case appears, fix the workflow and update the skill—versioned, owned, maintained.",
    ],
  },
  {
    id: "build-not-download",
    title: "Build skills from your successful runs",
    subtitle: "Marketplace packs are a starting point at best",
    points: [
      "Generic downloads lack your data boundaries, brand voice, billing rules, and incident history.",
      "Import ideas, then rewrite with your nouns, commands, and verification steps from a real pass.",
      "Prefer evidence in your logs and PRs over aspirational instructions nobody has executed yet.",
    ],
  },
  {
    id: "scale-discipline",
    title: "Scale for productivity, not novelty",
    subtitle: "One strong agent loop first",
    points: [
      "Keep a single primary workflow reliable before spawning marketing/sales/engineering sub-agents.",
      "Add specialization only where the context is bounded, repetitive, and measured—otherwise you duplicate mistakes faster.",
      "Apply “less is more”: delete instructions that restate what frontier models already know; keep taste, policy, and proprietary facts.",
    ],
  },
];

export const facilitatorChecklist: string[] = [
  "Open with the source interview clip (context vs slop, progressive disclosure, recursive capture).",
  "Force each team to pick one real workflow before day 3—no abstract exercises.",
  "Require failure logs with evidence, not vibes, before prompt edits.",
  "End every day with an artifact: PR, doc, metric, or skill changelog entry.",
  "On day 7, score demos on metrics and maintainability, not flash.",
];
