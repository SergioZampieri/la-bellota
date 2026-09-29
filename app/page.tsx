import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { FeaturesStrip } from "@/components/sections/features-strip";
import { About } from "@/components/sections/about";
import { Rooms } from "@/components/sections/rooms";
import { SharedSpaces } from "@/components/sections/shared-spaces";
import { Location } from "@/components/sections/location";
import { Contact, SiteFooter } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturesStrip />
        <About />
        <Rooms />
        <SharedSpaces />
        <Location />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
