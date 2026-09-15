import { withBase } from "@/lib/paths";
import { site } from "@/lib/site";
import { Reveal } from "./motion";

export function MenuSection() {
  return (
    <section id="menu" className="relative px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-batter-deep">
            From the fryer
          </p>
          <h2 className="font-display mt-2 text-5xl text-navy md:text-6xl">
            Hot, crisp, unfussy
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-navy-mid">
            Classic chippy favourites for Rotherhithe — battered fish, proper
            chips, and whatever else is coming out golden.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {site.menu.map((item, index) => (
            <Reveal key={item.name} delay={0.08 * index}>
              <article className="group">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={withBase(item.image)}
                    alt={item.alt}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <h3 className="font-display text-3xl text-navy">{item.name}</h3>
                  <span className="menu-rule h-px flex-1" aria-hidden />
                </div>
                <p className="mt-2 text-navy-mid">{item.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
