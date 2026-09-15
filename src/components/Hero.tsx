"use client";

import { motion, useReducedMotion } from "framer-motion";
import { withBase } from "@/lib/paths";
import { site } from "@/lib/site";
import { RiseIn } from "./motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-ink"
    >
      <img
        src={withBase("/images/hero-fish-chips.jpg")}
        alt="Fresh battered fish and chips in a takeaway box"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="opacity-wash absolute inset-0" aria-hidden />
      <div className="grain absolute inset-0" aria-hidden />

      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full bg-batter/25 blur-3xl"
          animate={{ y: [0, 18, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <RiseIn>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-batter">
            Albion Street · Canada Water
          </p>
        </RiseIn>
        <RiseIn delay={0.08}>
          <h1 className="font-display max-w-3xl text-[clamp(3.4rem,12vw,7.5rem)] leading-[0.9] text-ink">
            {site.name}
          </h1>
        </RiseIn>
        <RiseIn delay={0.16}>
          <p className="mt-5 max-w-xl text-lg text-foam/90 md:text-xl">
            {site.tagline}. Fresh from the fryer — call ahead and collect hot.
          </p>
        </RiseIn>
        <RiseIn delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-batter px-6 py-3 text-base font-semibold text-navy-deep transition hover:bg-batter-bright"
            >
              Call {site.phoneDisplay}
            </a>
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-foam/35 bg-navy/30 px-6 py-3 text-base font-semibold text-ink backdrop-blur-sm transition hover:border-batter hover:text-batter"
            >
              See what&apos;s frying
            </a>
          </div>
        </RiseIn>
      </div>
    </section>
  );
}
