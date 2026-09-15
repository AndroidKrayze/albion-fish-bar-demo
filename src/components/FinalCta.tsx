import { withBase } from "@/lib/paths";
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

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep px-5 py-10 text-sm text-foam/65 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.06em] text-ink">
            {site.name}
          </p>
          <p className="mt-1">Marketing demo · not an official online shop.</p>
        </div>
        <div className="space-y-1 md:text-right">
          <p>
            <a href={site.phoneHref} className="hover:text-batter">
              {site.phoneDisplay}
            </a>
          </p>
          <p>{site.addressLines.join(", ")}</p>
          <p className="pt-2 text-xs text-foam/45">
            Photo credits in{" "}
            <a href={withBase("/SOURCES.md")} className="underline hover:text-batter">
              SOURCES.md
            </a>
            . Never redirects to third-party spam domains.
          </p>
        </div>
      </div>
    </footer>
  );
}
