import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDayPlan, weekCurriculum } from "@/lib/curriculum";

interface DayPageProps {
  params: Promise<{ daySlug: string }>;
}

export async function generateStaticParams() {
  return weekCurriculum.map((day) => ({
    daySlug: day.slug,
  }));
}

export async function generateMetadata({
  params,
}: DayPageProps): Promise<Metadata> {
  const { daySlug } = await params;
  const dayPlan = getDayPlan(daySlug);

  if (!dayPlan) {
    return {
      title: "Curriculum day not found",
    };
  }

  return {
    title: `Day ${dayPlan.day} · ${dayPlan.focus}`,
    description: dayPlan.startupScenario,
  };
}

export default async function DayPage({ params }: DayPageProps) {
  const { daySlug } = await params;
  const dayPlan = getDayPlan(daySlug);

  if (!dayPlan) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10 md:px-10">
      <Link
        href="/"
        className="w-fit rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        ← Back to overview
      </Link>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
          Day {dayPlan.day}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {dayPlan.focus}
        </h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300">
          {dayPlan.startupScenario}
        </p>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Key outcomes
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {dayPlan.keyOutcomes.map((outcome) => (
            <li key={outcome}>— {outcome}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Session plan
        </h2>
        <div className="mt-4 space-y-4">
          {dayPlan.sessions.map((session) => (
            <article
              key={`${session.time}-${session.title}`}
              className="rounded-xl border border-[var(--border)] bg-slate-50 p-4 dark:bg-slate-900/40"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {session.time}
                </p>
                <span className="rounded bg-[var(--accent-muted)] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-900 dark:text-emerald-100">
                  {session.type}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
                {session.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Objective:
                </span>{" "}
                {session.objective}
              </p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Output:
                </span>{" "}
                {session.output}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Homework
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {dayPlan.homework.map((task) => (
            <li key={task}>— {task}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
