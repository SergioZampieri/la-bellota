import { MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/eyebrow";
import { HeroMedia } from "@/components/motion/hero-media";
import { Reveal } from "@/components/motion/reveal";
import BlurText from "@/components/reactbits/blur-text";
import CountUp from "@/components/reactbits/count-up";
import { contact, totalReviews } from "@/lib/site";

const stats = [
  { label: "promedio en Airbnb", value: <>★ <CountUp from={4} to={4.9} duration={1} delay={0.9} /></> },
  { label: "reseñas", value: <CountUp to={totalReviews} duration={1} delay={0.9} /> },
  { label: "atención a huéspedes", value: <><CountUp to={24} duration={1} delay={0.9} /> h</> },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-16 sm:px-8 md:grid-cols-[1.05fr_1fr] md:gap-16 md:pt-16 md:pb-24"
    >
      {/* Centered on phones and tablets, left-aligned beside the photo from md up. */}
      <div className="text-center md:text-left">
        <Reveal>
          <Eyebrow>Bed &amp; Breakfast · Recoleta, Buenos Aires</Eyebrow>
        </Reveal>
        <BlurText
          as="h1"
          text="Una casona colonial con alma de hogar."
          animateBy="words"
          direction="bottom"
          delay={90}
          stepDuration={0.45}
          className="mb-5 justify-center text-[2.5rem] sm:text-5xl md:justify-start lg:text-[4.2rem]"
        />
        <Reveal delay={0.45}>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground md:mx-0">
            Techos altos, pisos de madera, balcones a la ciudad y una escalera de mármol que te
            recibe. La elegancia del pasado, con las comodidades de hoy.
          </p>
        </Reveal>
        <Reveal
          delay={0.6}
          className="mt-7 mb-10 grid grid-cols-2 gap-3 sm:flex sm:justify-center md:justify-start"
        >
          <Button asChild size="pill" className="px-4 sm:px-6">
            <a href="#habitaciones">Ver habitaciones</a>
          </Button>
          <Button
            asChild
            size="pill"
            variant="outline"
            className="border-foreground bg-transparent px-4 sm:px-6"
          >
            <a href={contact.whatsapp} target="_blank" rel="noopener">
              <MessageCircleIcon />
              <span className="sm:hidden">WhatsApp</span>
              <span className="hidden sm:inline">Escribinos por WhatsApp</span>
            </a>
          </Button>
        </Reveal>
        <Reveal delay={0.75}>
          <dl className="grid grid-cols-3 gap-4 border-t pt-6 sm:flex sm:justify-center sm:gap-10 md:justify-start">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-3xl tabular-nums">{s.value}</dd>
                <dd className="text-sm text-muted-foreground" aria-hidden>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <HeroMedia />
    </section>
  );
}
