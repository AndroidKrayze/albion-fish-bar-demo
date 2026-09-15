import { withBase } from "@/lib/paths";
import { site } from "@/lib/site";
import { Reveal } from "./motion";

export function FindUs() {
  return (
    <section id="find-us" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={withBase("/images/neighbourhood.jpg")}
          alt="London skyline along the Thames near Tower Bridge"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/80 to-navy/55" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-batter">
            Find us
          </p>
          <h2 className="font-display mt-2 max-w-2xl text-5xl text-ink md:text-6xl">
            36 Albion Street, SE16 7JQ
          </h2>
          <p className="mt-4 max-w-xl text-lg text-foam/85">
            Walkable from Canada Water station. Look for the takeaway on Albion
            Street — collection only when you call ahead.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-batter px-6 py-3 text-base font-semibold text-navy-deep transition hover:bg-batter-bright"
            >
              Open in Google Maps
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-foam/35 px-6 py-3 text-base font-semibold text-ink transition hover:border-batter hover:text-batter"
            >
              {site.phoneDisplay}
            </a>
          </div>
          <address className="mt-10 not-italic text-foam/75">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </Reveal>
      </div>
    </section>
  );
}
