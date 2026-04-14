export type SessionType = "lecture" | "workshop" | "lab" | "review";

export interface Session {
  time: string;
  title: string;
  type: SessionType;
  objective: string;
  output: string;
}

export interface DayPlan {
  day: number;
  slug: string;
  focus: string;
  startupScenario: string;
  keyOutcomes: string[];
  sessions: Session[];
  homework: string[];
}

export interface CohortProfile {
  name: string;
  location: string;
  duration: string;
  participantCount: string;
  targetSegments: string[];
}

export const sourceInterview = {
  title: "How AI agents & Claude skills work (Clearly Explained)",
  speakers: "Greg Isenberg interviews Ross Mike",
  url: "https://www.youtube.com/watch?v=S_oN3vlzpMw",
  themes: [
    "Context management beats raw model capability for quality.",
    "Skills use progressive disclosure: title + description first; full body loads on demand.",
    "Recursive skill building: teach the workflow, fix failures, then codify the successful run.",
    "Prefer one strong agent until workflows are proven; add specialization for productivity, not novelty.",
  ],
};

export const cohortProfile: CohortProfile = {
  name: "Greater Seattle Agent Skills Week",
  location: "Greater Seattle Area (in-person or hybrid cohort)",
  duration: "1 week (Mon–Sun) with daily working sessions",
  participantCount: "Small selected startups (≈6–10 companies, 2–3 people each)",
  targetSegments: [
    "Seed–Series A product teams shipping software weekly",
    "Technical founders pairing with a lead engineer or ops lead",
    "Teams already experimenting with Claude Code, Cursor, or similar agent tools",
  ],
};

export const deliveryPrinciples = [
  "Optimize for context hygiene: every exercise produces a smaller, higher-signal instruction surface.",
  "Teach workflows manually first, then encode the successful run as a skill—never the reverse.",
  "When something breaks, debug with evidence (logs, traces, repro steps) before rewriting prompts.",
  "Add breadth (sub-agents, plugins) only after a baseline workflow is repeatable and measured.",
  "Measure outcomes (time-to-merge, rework rate) rather than demo theatrics.",
];

export const weekCurriculum: DayPlan[] = [
  {
    day: 1,
    slug: "context-the-moat",
    focus:
      "Day 1 — Context is the product: trim global rules and stop paying for noise every turn",
    startupScenario:
      "Each team audits its repo for bloated agent instruction files and replaces them with lean, high-signal guidance tied to real decisions.",
    keyOutcomes: [
      "Explain why oversized AGENTS.md / CLAUDE.md-style files tax every turn and crowd out useful context.",
      "Produce a token-aware rule set: defaults everyone already knows are removed; only proprietary taste, policy, and repo facts remain.",
      "Establish a baseline quality bar so later skills plug into a clean context budget.",
    ],
    sessions: [
      {
        time: "09:00–10:00",
        title: "Kickoff: models are strong—context management is the moat",
        type: "lecture",
        objective:
          "Frame the week using the interview thesis: quality comes from what you load, when, and why—not from longer prompts.",
        output:
          "Team charter: one sentence on the single workflow you will optimize this week (e.g., sponsor research, weekly investor update, onboarding PR).",
      },
      {
        time: "10:15–12:30",
        title: "Workshop: forensic audit of global instruction files",
        type: "workshop",
        objective:
          "Open every global rules file (agent configs, root markdown guides, duplicated README snippets). Tag lines as (a) generic industry knowledge, (b) repo-specific fact, (c) taste or policy. Delete or relocate (a).",
        output:
          "Redlined AGENTS/CLAUDE-style doc ≤ ~200 lines OR split into topic files that are not auto-loaded every turn.",
      },
      {
        time: "13:30–15:30",
        title:
          "Lab: rewrite the global layer as “defaults + pointers,” not a textbook",
        type: "lab",
        objective:
          "Recreate guidance using: short principles, links to /docs paths, and explicit “do not repeat” list (e.g., do not restate React basics). Pair-review for duplication.",
        output:
          "Merged PR titled `chore: slim global agent context` with before/after summary in the description.",
      },
      {
        time: "15:45–17:00",
        title: "Review: context budget scorecard",
        type: "review",
        objective:
          "Estimate relative noise removed (lines deleted, repeated facts deduped). Agree on one metric to track all week (e.g., minutes from issue → passing CI).",
        output:
          "Scorecard snapshot + shared tracking spreadsheet row per startup.",
      },
    ],
    homework: [
      "List three recurring tasks you perform manually that are candidates for a skill later in the week (be specific: inputs, tools, success criteria).",
      "Watch or re-watch the source interview segment on bloated system files and progressive disclosure (≈03:00–06:00) and note one quote you will hold the team accountable to.",
    ],
  },
  {
    day: 2,
    slug: "skills-progressive-disclosure",
    focus:
      "Day 2 — Skills as progressive disclosure: titles in index, bodies on demand",
    startupScenario:
      "Teams design a skills directory where only short metadata is visible until a task triggers the full procedure—mirroring how skills load in Claude-style tooling.",
    keyOutcomes: [
      "Author skill front-matter with title + description that is safe to keep “always on.”",
      "Structure longer instructions so the agent loads them only when the task matches.",
      "Connect skills to repo paths, scripts, and secrets boundaries without dumping secrets into prompts.",
    ],
    sessions: [
      {
        time: "09:00–10:15",
        title: "Lecture: anatomy of a skill versus a global system prompt",
        type: "lecture",
        objective:
          "Contrast always-on prompts with on-demand skills. Map to your tool (Claude Code skills, Cursor rules packs, custom slash flows).",
        output:
          "Decision tree: when something belongs in global rules vs a named skill vs a one-off task prompt.",
      },
      {
        time: "10:30–12:30",
        title: "Workshop: draft the skill index and three skeleton skills",
        type: "workshop",
        objective:
          "Create `skills/` (or your tool’s equivalent). For each candidate task from homework day 1, add: id, title, one-sentence description, triggers/keywords, linked inputs, and “read full skill when…” conditions.",
        output:
          "Index file reviewed by another team: can they tell what each skill does without opening the body?",
      },
      {
        time: "13:30–16:00",
        title: "Lab: write one full skill body for the highest-frequency workflow",
        type: "lab",
        objective:
          "Complete the long-form instructions with numbered steps, failure modes, and links to scripts/docs. Explicitly say what NOT to load (API keys, prod URLs) and how to fetch them safely.",
        output:
          "One merged skill file + a dry-run checklist used by a teammate who did not author it.",
      },
      {
        time: "16:15–17:00",
        title: "Review: progressive disclosure drill",
        type: "review",
        objective:
          "Rotate facilitators: given a fake user request, participants point to which skill title/description should fire and justify why others stay closed.",
        output:
          "Short retro doc listing any ambiguous titles—rename before day 3.",
      },
    ],
    homework: [
      "Rename any vague skill titles so the index reads like a catalog, not jargon.",
      "Prepare a real repo task for tomorrow: you will walk the agent through it live, expecting at least one controlled failure to learn from.",
    ],
  },
  {
    day: 3,
    slug: "recursive-skill-building",
    focus:
      "Day 3 — Recursive skill building: teach, fail intelligently, codify the win",
    startupScenario:
      "Teams run a real workflow manually with the agent, debug failures with evidence, then freeze the successful path as an updated skill.",
    keyOutcomes: [
      "Use human-in-the-loop stepping: smallest next action, verify, then continue.",
      "When the agent fails, ask why (HTTP codes, missing guardrails, wrong file) before prompt thrash.",
      "Capture the successful run as a skill update with version notes for future edge cases.",
    ],
    sessions: [
      {
        time: "09:00–10:00",
        title: "Lecture: the loop—identify → pair-run → interrogate failure → codify",
        type: "lecture",
        objective:
          "Operationalize the interview recipe: start from a manual task, iterate with the agent, and only encode after a clean pass.",
        output:
          "Printed runbook template: inputs, tools, verification commands, rollback, and definition of done.",
      },
      {
        time: "10:15–12:30",
        title: "Workshop: paired execution with forced failure journaling",
        type: "workshop",
        objective:
          "Each startup executes their real task with a facilitator. On any failure, log: symptom, suspected layer (tooling vs logic vs data), next experiment. No prompt rewrites without a hypothesis.",
        output:
          "Failure journal with at least one resolved thread per team.",
      },
      {
        time: "13:30–16:00",
        title:
          "Lab: “review what you just did and write the skill” (success capture)",
        type: "lab",
        objective:
          "After a green run, run the exact reflection prompt from the interview: have the agent summarize steps taken, checks used, and edge cases, then merge that into the skill file with human edits for clarity.",
        output:
          "Skill file v2 with changelog entry dated today.",
      },
      {
        time: "16:15–17:00",
        title: "Review: edge-case backlog",
        type: "review",
        objective:
          "List known edge cases not covered yet. Prioritize one to fix in day 4.",
        output:
          "Shared backlog tagged `skill-debt` with owners.",
      },
    ],
    homework: [
      "Run the same workflow once solo using only the skill text—note drift gaps.",
      "Collect telemetry: time on task, number of retries, lines changed in repo.",
    ],
  },
  {
    day: 4,
    slug: "build-dont-download",
    focus:
      "Day 4 — Build skills from your wins; reject generic marketplace copy-paste",
    startupScenario:
      "Teams compare a downloaded/generic skill against their captured workflow and rebuild using their own evidence, scripts, and naming.",
    keyOutcomes: [
      "Articulate why imported skills miss local invariants (billing rules, data residency, brand voice).",
      "Convert at least one “imported” idea into a native skill grounded in a past successful run.",
      "Establish review criteria for future third-party skills before adoption.",
    ],
    sessions: [
      {
        time: "09:00–10:15",
        title: "Lecture: marketplace skills vs skills born from a successful run",
        type: "lecture",
        objective:
          "Discuss the interview warning: generic packs lack your telemetry, secrets handling, and failure history.",
        output:
          "Adoption checklist: prerequisites, data sensitivity, maintenance owner, deprecation plan.",
      },
      {
        time: "10:30–12:30",
        title: "Workshop: diff a marketplace skill against your local run log",
        type: "workshop",
        objective:
          "Bring one external sample. Line-by-line, mark harmful, neutral, or useful. Rewrite useful parts with your repo’s nouns and commands.",
        output:
          "Annotated diff saved in `docs/skills-import-review.md`.",
      },
      {
        time: "13:30–15:45",
        title: "Lab: native skill rewrite + automated check",
        type: "lab",
        objective:
          "Add a minimal script or CI check that validates assumptions the skill relies on (lint rule, schema check, curl to staging health). Wire the skill to call that check before declaring success.",
        output:
          "Green CI + updated skill that references the check explicitly.",
      },
      {
        time: "16:00–17:00",
        title: "Review: maintenance and ownership",
        type: "review",
        objective:
          "Assign skill owners, review cadence, and how to retire skills that rot.",
        output:
          "RACI table for skills maintained by the startup.",
      },
    ],
    homework: [
      "Delete or archive any unused downloaded skill copies to avoid drift.",
      "Open one issue per skill describing the next edge case to cover after the cohort.",
    ],
  },
  {
    day: 5,
    slug: "scale-with-one-strong-agent",
    focus:
      "Day 5 — Scale for productivity: one main agent path before spawning specialists",
    startupScenario:
      "Teams map their proven workflows and only then design optional sub-agents (e.g., GTM vs engineering) with crisp handoffs—not parallel chaos.",
    keyOutcomes: [
      "Defend a single primary agent loop with measured throughput before adding roles.",
      "Draft specialist prompts only where repetitive, bounded contexts exist.",
      "Create guardrails against duplicate work and conflicting edits.",
    ],
    sessions: [
      {
        time: "09:00–10:15",
        title: "Lecture: when specialization helps vs when it’s cosplay",
        type: "lecture",
        objective:
          "Use the interview framing: add marketing/sales/engineering sub-agents only after the parent workflow is stable; otherwise you amplify noise.",
        output:
          "Decision worksheet scoring frequency, risk, and clarity of inputs for each hypothetical sub-agent.",
      },
      {
        time: "10:30–12:30",
        title: "Workshop: design one optional sub-agent with contracts",
        type: "workshop",
        objective:
          "If (and only if) criteria pass, define a sub-agent charter: inputs, forbidden actions, required artifacts, merge-back protocol. If criteria fail, reinforce the main agent skill instead.",
        output:
          "Either a sub-agent spec OR a strengthened main skill—document the reason publicly in README fragment.",
      },
      {
        time: "13:30–16:00",
        title: "Lab: dry-run parallel tasks safely",
        type: "lab",
        objective:
          "Simulate two concurrent agent tasks with non-overlapping files or branches. Practice conflict detection and rollback.",
        output:
          "Branch strategy diagram + evidence of a clean merge.",
      },
      {
        time: "16:15–17:00",
        title: "Review: less-is-more pass",
        type: "review",
        objective:
          "Remove instructions that duplicate model priors; keep only proprietary process, data locations, and taste.",
        output:
          "Second context diet PR with measurable line reduction.",
      },
    ],
    homework: [
      "Pick capstone scope for day 6: one end-to-end workflow using ≥2 skills you authored.",
      "Draft demo storyline: problem → before metrics → after metrics → what you will measure next month.",
    ],
  },
  {
    day: 6,
    slug: "capstone-pipeline",
    focus:
      "Day 6 — Capstone: run the full pipeline on a live startup task with evidence",
    startupScenario:
      "Each startup executes the end-to-end loop: intake → plan → agent-assisted execution → verification → skill update if new edges appear.",
    keyOutcomes: [
      "Ship a tangible artifact (PR, report, dataset extract) with traceable steps.",
      "Capture failures with evidence and merge at least one post-mortem skill update.",
      "Produce a short metrics snapshot suitable for board or investor update.",
    ],
    sessions: [
      {
        time: "09:00–10:00",
        title: "Capstone briefings and risk check",
        type: "lecture",
        objective:
          "Final scope lock: success criteria, time box, and rollback. Confirm which skills load for which sub-steps.",
        output:
          "Signed brief in shared doc with explicit out-of-scope items.",
      },
      {
        time: "10:15–12:30",
        title: "Build block I: planning and tool prep",
        type: "workshop",
        objective:
          "Write the plan in the agent, attach links, and validate environment (tokens, staging URLs).",
        output:
          "Approved plan artifact checked into repo or ticket.",
      },
      {
        time: "13:30–16:30",
        title: "Build block II: execution, verification, documentation",
        type: "lab",
        objective:
          "Run the workflow, collect logs/screenshots, run tests, update skills if new edge discovered.",
        output:
          "Merged PR or equivalent deliverable + updated skill changelog entries.",
      },
      {
        time: "16:30–17:00",
        title: "Demo rehearsal with timing",
        type: "review",
        objective:
          "Five-minute demo per startup with Q&A buffer; tighten narrative.",
        output:
          "Demo checklist and backup slides if live network fails.",
      },
    ],
    homework: [
      "Sleep on metrics: refine numbers for day 7 leadership conversation.",
      "Prepare one honest failure story and how your skill now prevents recurrence.",
    ],
  },
  {
    day: 7,
    slug: "demo-adoption",
    focus:
      "Day 7 — Demo day + adoption: prove ROI and lock a 30-day operating system",
    startupScenario:
      "Teams present evidence-backed outcomes, compare notes on governance, and leave with a 30-day rollout plan—not just slides.",
    keyOutcomes: [
      "Show before/after metrics tied to real work, not vanity demos.",
      "Agree on owners for skills, reviews, and incident response when agents misfire.",
      "Publish a 30-day adoption plan with weekly checkpoints.",
    ],
    sessions: [
      {
        time: "09:30–11:30",
        title: "Startup demos (metrics-forward)",
        type: "review",
        objective:
          "Each team: problem, baseline, intervention (skills + context diet), result, next experiment. Judges ask about failure modes and maintenance.",
        output:
          "Recording + written scoreboard notes for optional follow-on mentorship.",
      },
      {
        time: "12:30–14:00",
        title: "Leadership roundtable: ROI, risk, compliance",
        type: "workshop",
        objective:
          "Discuss data handling, customer trust, and when NOT to use agents. Align on review gates before production merges.",
        output:
          "Risk register with mitigations per startup.",
      },
      {
        time: "14:15–16:00",
        title: "Working session: 30-day adoption plan",
        type: "lab",
        objective:
          "Fill week-by-week milestones: skill reviews, metric tracking, training new hires, and budget for tooling.",
        output:
          "Committed roadmap doc with named owners and calendar invites for checkpoints.",
      },
      {
        time: "16:00–17:00",
        title: "Closing commitments",
        type: "review",
        objective:
          "Public commitments: what you will stop doing (context bloat), what you will keep doing (recursive skill updates), and how you will measure success.",
        output:
          "Signed adoption charter snapshot shared with the cohort.",
      },
    ],
    homework: [
      "Run week-1 post cohort retro internally; file issues for skill debt uncovered during demos.",
      "Optional: present learnings at a Seattle founder meetup or blog within 14 days to reinforce habits.",
    ],
  },
];

export function getDayPlan(slug: string): DayPlan | undefined {
  return weekCurriculum.find((plan) => plan.slug === slug);
}
