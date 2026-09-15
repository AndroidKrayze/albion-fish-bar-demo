"use client";

import { motion, useReducedMotion } from "framer-motion";
import { withBase } from "@/lib/paths";
import { Reveal } from "./motion";

export function Atmosphere() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy text-ink">
      <div className="absolute inset-0">
        <img
          src={withBase("/images/pub-chips.jpg")}
          alt=""
          className="h-full w-full object-cover opacity-35"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/90 to-navy/70" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-batter">
            Neighbourhood chippy
          </p>
          <h2 className="font-display mt-2 text-5xl md:text-6xl">
            Serving SE16 since 2000
          </h2>
          <p className="mt-5 max-w-xl text-lg text-foam/85">
            Albion Fish Bar is a takeaway on Albion Street — minutes from Canada
            Water and the Thames Path. No fuss, no gimmicks: fish in batter,
            chips with salt and vinegar, ready when you call.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-sm border border-white/10">
            <img
              src={withBase("/images/chips.jpg")}
              alt="A generous portion of golden chips"
              className="aspect-[5/4] w-full object-cover"
              loading="lazy"
            />
            {!reduce && (
              <motion.div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1 origin-left bg-batter"
                initial={{ scaleX: 0.2 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
