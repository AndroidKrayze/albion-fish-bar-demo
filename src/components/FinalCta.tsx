import { site } from "@/lib/site";
import { Reveal } from "./motion";

export function FinalCta() {
  return (
    <section className="bg-navy-deep px-5 py-16 text-ink md:px-8 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">
            Hungry now? Phone the fryer.
          </h2>
          <p className="mt-3 max-w-lg text-foam/80">
            Tell us what you want — we&apos;ll have it ready for collection on
            Albion Street.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-14 items-center justify-center rounded-sm bg-batter px-8 py-4 text-lg font-semibold text-navy-deep transition hover:bg-batter-bright"
          >
            {site.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const SUGGESTED_DOMAINS = [
  "albionchippy.co.uk",
  "albionfishse16.co.uk",
  "rotherhithefishbar.co.uk",
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep px-5 py-10 text-sm text-foam/65 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.06em] text-ink">
            {site.name}
          </p>
          <p className="mt-1">{site.addressLines.join(", ")}</p>
          <p className="mt-1">
            <a href={site.phoneHref} className="hover:text-batter">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-xs uppercase tracking-[0.18em] text-foam/45">
            Suggested domains
          </p>
          <p className="mt-2 text-foam/70">
            {SUGGESTED_DOMAINS.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
