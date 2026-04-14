"use client";

import { useCallback, useEffect, useState } from "react";

export interface NavItem {
  id: string;
  label: string;
  group?: string;
}

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function LandingSidebar({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = items.map((i) => i.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-12% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  }, []);

  const grouped = items.reduce<Record<string, NavItem[]>>((acc, item) => {
    const g = item.group ?? "General";
    if (!acc[g]) acc[g] = [];
    acc[g].push(item);
    return acc;
  }, {});

  const NavList = (
    <nav className="flex flex-col gap-1 pr-1">
      {Object.entries(grouped).map(([group, groupItems]) => (
        <div key={group}>
          <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
            {group}
          </p>
          <ul className="space-y-0.5">
            {groupItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition",
                    activeId === item.id
                      ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/15 text-emerald-900 shadow-sm ring-1 ring-emerald-500/30 dark:text-emerald-100"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/80",
                  )}
                >
                  <span className="line-clamp-2">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="pointer-events-none fixed bottom-24 left-4 z-40 md:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="pointer-events-auto flex h-12 items-center gap-2 rounded-full border border-white/20 bg-slate-900/90 px-4 text-sm font-semibold text-white shadow-lg backdrop-blur-md"
          aria-expanded={mobileOpen}
          aria-controls="section-nav-panel"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Navigate
        </button>
      </div>

      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <aside
        id="section-nav-panel"
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-72 flex-col border-r border-slate-200/80 bg-white/95 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95",
          "transition-transform duration-300 ease-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="border-b border-slate-200/80 px-4 py-4 dark:border-slate-800">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Curriculum
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
            On this page
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Scroll or tap a section
          </p>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-4">
          {NavList}
        </div>
        <div className="border-t border-slate-200/80 p-3 dark:border-slate-800 md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="w-full rounded-xl bg-slate-100 py-2.5 text-sm font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-100"
          >
            Close
          </button>
        </div>
      </aside>
    </>
  );
}
