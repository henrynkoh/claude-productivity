import Link from "next/link";
import {
  cohortProfile,
  deliveryPrinciples,
  sourceInterview,
  weekCurriculum,
} from "@/lib/curriculum";
import { GitHubFab } from "@/components/github-fab";
import { LandingSidebar, type NavItem } from "@/components/landing-sidebar";
import { conceptSections, facilitatorChecklist, hero } from "@/lib/playbook";
import { siteConfig } from "@/lib/site-config";

function dayTitle(focus: string) {
  return focus.replace(/^Day \d+ — /, "");
}

function buildNavItems(): NavItem[] {
  const days: NavItem[] = weekCurriculum.map((d) => {
    const title = dayTitle(d.focus);
    const short = title.length > 42 ? `${title.slice(0, 40)}…` : title;
    return {
      id: `day-${d.day}`,
      label: `Day ${d.day}: ${short}`,
      group: "7-day arc",
    };
  });

  return [
    { id: "overview", label: "Overview & hero", group: "Start here" },
    { id: "anchor-video", label: "Anchor interview", group: "Start here" },
    { id: "features", label: "Program features", group: "Start here" },
    {
      id: "concepts-intro",
      label: "Core ideas (intro)",
      group: "Core ideas",
    },
    ...conceptSections.map((s) => ({
      id: s.id,
      label: s.title,
      group: "Core ideas",
    })),
    { id: "cohort", label: "Cohort profile", group: "Program" },
    { id: "principles", label: "Delivery principles", group: "Program" },
    { id: "week", label: "Seven-day arc (overview)", group: "7-day arc" },
    ...days,
    {
      id: "facilitators",
      label: "Facilitation checklist",
      group: "Run the week",
    },
    { id: "resources", label: "Docs & repository", group: "Run the week" },
  ];
}

const featureCards = [
  {
    title: "Progressive disclosure",
    body: "Skill titles stay light in the index; full instructions load only when the task matches.",
    accent: "from-violet-500/20 to-fuchsia-500/10 ring-violet-400/30",
  },
  {
    title: "Recursive capture",
    body: "Ship a clean run with the agent, then freeze it as a versioned skill—not a generic download.",
    accent: "from-cyan-500/20 to-emerald-500/10 ring-cyan-400/30",
  },
  {
    title: "Context diet",
    body: "Strip always-on noise so tokens pay for code, logs, and decisions that matter to your repo.",
    accent: "from-amber-500/20 to-orange-500/10 ring-amber-400/30",
  },
  {
    title: "Scale with discipline",
    body: "One strong workflow first; add specialists only when the baseline is measured and boring.",
    accent: "from-rose-500/20 to-pink-500/10 ring-rose-400/30",
  },
];

export default function Home() {
  const navItems = buildNavItems();

  return (
    <div className="min-h-screen md:pl-72">
      <LandingSidebar items={navItems} />

      <div className="relative min-w-0">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-emerald-400/90">
                {hero.eyebrow}
              </p>
              <p className="mt-1 bg-gradient-to-r from-white to-emerald-200/90 bg-clip-text text-xl font-bold tracking-tight text-transparent md:text-2xl">
                {hero.title}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={hero.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-110"
              >
                Watch interview
              </a>
              <a
                href={siteConfig.githubCurriculumTree}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10 sm:inline-flex"
              >
                Repo
              </a>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl space-y-16 px-4 py-10 md:px-8">
          {/* Hero */}
          <section
            id="overview"
            className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-1 shadow-2xl shadow-emerald-500/10"
          >
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-emerald-600 via-teal-600 to-slate-900 p-8 md:p-12">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-violet-500/25 blur-3xl"
                aria-hidden
              />
              <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100/90">
                {hero.videoLabel}
              </p>
              <h1 className="relative mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                {hero.title}
              </h1>
              <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-emerald-50/95 md:text-lg">
                {hero.subtitle}
              </p>
              <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100/80">
                    Cadence
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {cohortProfile.duration}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100/80">
                    Cohort
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {cohortProfile.participantCount}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100/80">
                    Output
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Artifacts daily—skills, PRs, metrics
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video */}
          <section
            id="anchor-video"
            className="scroll-mt-28 rounded-3xl border border-[var(--border)] bg-gradient-to-br from-slate-50 to-emerald-50/50 p-8 shadow-lg dark:from-slate-900 dark:to-emerald-950/40"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Anchor interview
                </h2>
                <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-300">
                  {sourceInterview.speakers}. Same vocabulary the cohort uses all
                  week: context vs slop, skills, progressive disclosure.
                </p>
              </div>
              <a
                href={sourceInterview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500"
              >
                Open on YouTube →
              </a>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="scroll-mt-28 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                What you will practice
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Interactive patterns—hover cards on desktop—mapped to the source
                interview and the day-by-day schedule.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featureCards.map((f) => (
                <div
                  key={f.title}
                  className={`group rounded-2xl border border-white/10 bg-gradient-to-br ${f.accent} p-6 ring-1 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-900/60`}
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Concepts intro + articles */}
          <div className="space-y-6">
            <div
              id="concepts-intro"
              className="scroll-mt-28 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Core ideas from the interview
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Execute these in your own repo during the week—each block below
                is a sidebar anchor for quick navigation.
              </p>
            </div>

            {conceptSections.map((section, idx) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  {section.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h3>
                <ul className="mt-5 grid gap-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className={`rounded-xl px-4 py-3 text-sm leading-relaxed transition ${
                        idx % 2 === 0
                          ? "border border-emerald-200/80 bg-emerald-50/90 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-50"
                          : "border border-slate-200/80 bg-slate-50 text-slate-900 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100"
                      }`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Cohort */}
          <section
            id="cohort"
            className="scroll-mt-28 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Cohort profile
            </h2>
            <dl className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-slate-50/80 p-5 dark:bg-slate-800/40">
                <dt className="text-xs font-bold uppercase text-slate-500">
                  Program
                </dt>
                <dd className="mt-2 font-medium text-slate-900 dark:text-slate-50">
                  {cohortProfile.name}
                </dd>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-slate-50/80 p-5 dark:bg-slate-800/40">
                <dt className="text-xs font-bold uppercase text-slate-500">
                  Location
                </dt>
                <dd className="mt-2 font-medium text-slate-900 dark:text-slate-50">
                  {cohortProfile.location}
                </dd>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-slate-50/80 p-5 dark:bg-slate-800/40">
                <dt className="text-xs font-bold uppercase text-slate-500">
                  Size
                </dt>
                <dd className="mt-2 font-medium text-slate-900 dark:text-slate-50">
                  {cohortProfile.participantCount}
                </dd>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-slate-50/80 p-5 md:col-span-2 dark:bg-slate-800/40">
                <dt className="text-xs font-bold uppercase text-slate-500">
                  Who it fits
                </dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {cohortProfile.targetSegments.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-emerald-100/90 px-3 py-1 text-xs font-medium text-emerald-900 dark:bg-emerald-900/50 dark:text-emerald-100"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </section>

          {/* Principles */}
          <section
            id="principles"
            className="scroll-mt-28 rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 dark:border-emerald-900/50 dark:from-emerald-950/40 dark:to-slate-900"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Delivery principles
            </h2>
            <ul className="mt-5 space-y-3">
              {deliveryPrinciples.map((p, i) => (
                <li
                  key={p}
                  className="flex gap-3 rounded-2xl border border-emerald-200/50 bg-white/70 px-4 py-3 text-sm text-slate-800 dark:border-emerald-800/50 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Week */}
          <section id="week" className="scroll-mt-28 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Seven-day arc
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Each card is a section anchor and links to the full timed
                session plan. Facilitators: every block ships an artifact.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {weekCurriculum.map((day) => (
                <div key={day.slug} id={`day-${day.day}`} className="scroll-mt-28">
                  <Link
                    href={`/days/${day.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400/60 hover:shadow-lg dark:from-slate-900 dark:to-slate-950"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      Day {day.day}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
                      {dayTitle(day.focus)}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {day.startupScenario}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      Full day plan →
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Facilitators */}
          <section
            id="facilitators"
            className="scroll-mt-28 rounded-3xl border border-amber-200/80 bg-gradient-to-r from-amber-50 to-orange-50 p-8 dark:border-amber-900/50 dark:from-amber-950/30 dark:to-slate-900"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Facilitation checklist
            </h2>
            <ul className="mt-5 space-y-3">
              {facilitatorChecklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-amber-200/60 bg-white/80 px-4 py-3 text-sm text-slate-800 dark:border-amber-900/40 dark:bg-slate-900/50 dark:text-slate-200"
                >
                  <span
                    className="text-amber-500"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Resources */}
          <section
            id="resources"
            className="scroll-mt-28 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Docs & repository
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Source files for operators—edit curriculum data in the repo, then
              redeploy.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={siteConfig.githubBlob("docs/QUICKSTART.md")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[var(--border)] bg-slate-50 p-5 transition hover:border-emerald-400/50 hover:bg-white dark:bg-slate-800/50"
              >
                <p className="text-xs font-bold uppercase text-slate-500">
                  Quickstart
                </p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  Install, routes, where to edit
                </p>
              </a>
              <a
                href={siteConfig.githubBlob("docs/MANUAL.md")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[var(--border)] bg-slate-50 p-5 transition hover:border-emerald-400/50 hover:bg-white dark:bg-slate-800/50"
              >
                <p className="text-xs font-bold uppercase text-slate-500">
                  Manual
                </p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  Operations & QA
                </p>
              </a>
              <a
                href={siteConfig.githubBlob("docs/TUTORIAL.md")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[var(--border)] bg-slate-50 p-5 transition hover:border-emerald-400/50 hover:bg-white dark:bg-slate-800/50"
              >
                <p className="text-xs font-bold uppercase text-slate-500">
                  Tutorial
                </p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  Step-by-step editing
                </p>
              </a>
              <a
                href={`${siteConfig.githubCurriculumTree}/marketing`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[var(--border)] bg-slate-50 p-5 transition hover:border-emerald-400/50 hover:bg-white dark:bg-slate-800/50"
              >
                <p className="text-xs font-bold uppercase text-slate-500">
                  Marketing
                </p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  SNS & email copy pack
                </p>
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-[var(--border)] bg-[var(--card)]/80 px-4 py-10 text-center text-xs text-slate-500 dark:text-slate-400 md:px-8">
          <p>
            Curriculum aligned with the Greg Isenberg / Ross Mike discussion on
            agents and skills.{" "}
            <a
              className="font-medium text-emerald-600 underline hover:text-emerald-500 dark:text-emerald-400"
              href={sourceInterview.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </p>
          <p className="mt-2">
            <a
              href={siteConfig.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-600 underline hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            >
              {siteConfig.githubRepo}
            </a>
          </p>
        </footer>
      </div>

      <GitHubFab />
    </div>
  );
}
