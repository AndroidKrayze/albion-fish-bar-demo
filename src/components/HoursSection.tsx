import { site } from "@/lib/site";
import { Reveal } from "./motion";

export function HoursSection() {
  return (
    <section id="hours" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-batter-deep">
            Opening hours
          </p>
          <h2 className="font-display mt-2 text-5xl text-navy md:text-6xl">
            Lunch &amp; evening service
          </h2>
          <p className="mt-4 text-lg text-navy-mid">
            Closed Sundays. Ring before you set off if you&apos;re cutting it
            fine near closing.
          </p>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-navy px-6 py-3 text-base font-semibold text-ink transition hover:bg-navy-lift"
          >
            Call to order · {site.phoneDisplay}
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="divide-y divide-navy/10 border-y border-navy/10">
            {site.hours.map((row) => (
              <li
                key={row.day}
                className="flex items-baseline justify-between gap-6 py-4"
              >
                <span className="font-semibold text-navy">{row.day}</span>
                <span
                  className={`text-right tabular-nums ${
                    row.slots === "Closed" ? "text-batter-deep" : "text-navy-mid"
                  }`}
                >
                  {row.slots}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
