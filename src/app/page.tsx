import { Atmosphere } from "@/components/Atmosphere";
import { FinalCta, SiteFooter } from "@/components/FinalCta";
import { FindUs } from "@/components/FindUs";
import { Hero } from "@/components/Hero";
import { HoursSection } from "@/components/HoursSection";
import { MenuSection } from "@/components/MenuSection";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MenuSection />
        <Atmosphere />
        <HoursSection />
        <FindUs />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
