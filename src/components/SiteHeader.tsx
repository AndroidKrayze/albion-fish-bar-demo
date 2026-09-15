"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-deep/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.08em] text-ink md:text-[1.7rem]">
            {site.name}
          </span>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-batter">
            SE16 · Rotherhithe
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-foam/90 md:flex">
          <a href="#menu" className="transition hover:text-batter">
            Menu
          </a>
          <a href="#hours" className="transition hover:text-batter">
            Hours
          </a>
          <a href="#find-us" className="transition hover:text-batter">
            Find us
          </a>
        </nav>
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center rounded-sm bg-batter px-4 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-batter-bright"
        >
          Call {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
