import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { asset, contact } from "@/lib/site";

const links = [
  { href: contact.airbnb, label: "Airbnb", primary: true },
  { href: contact.whatsapp, label: "WhatsApp" },
  { href: contact.instagram, label: "Instagram" },
  { href: contact.facebook, label: "Facebook" },
];

export function Contact() {
  return (
    <section id="contacto" className="bg-tile text-tile-foreground">
      <Reveal className="mx-auto max-w-xl px-4 py-20 text-center sm:px-8 md:py-28">
        <Image
          src={asset("/img/logo.png")}
          alt=""
          width={72}
          height={72}
          style={{ height: "auto" }}
          className="mx-auto mb-5 opacity-90 invert"
        />
        <h2 className="mb-4 text-4xl md:text-5xl">¿Venís a Buenos Aires?</h2>
        <p className="text-tile-foreground/80">
          Reservá tu habitación en Airbnb o escribinos directo; te respondemos a la brevedad.
        </p>
        {/* Even 2×2 grid on phones; one centered row from sm up. */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center">
          {links.map((link) => (
            <Button
              key={link.label}
              asChild
              size="pill"
              variant="outline"
              className={
                link.primary
                  ? "border-tile-foreground bg-tile-foreground text-tile hover:bg-tile-foreground/90 hover:text-tile"
                  : "border-tile-foreground/70 bg-transparent text-tile-foreground hover:bg-tile-foreground hover:text-tile"
              }
            >
              <a href={link.href} target="_blank" rel="noopener">
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:px-8">
      <p>La Bellota B&amp;B · Recoleta, Buenos Aires</p>
      <div className="flex gap-4">
        <a href={contact.airbnb} target="_blank" rel="noopener" className="underline underline-offset-4">
          Airbnb
        </a>
        <a href={contact.linktree} target="_blank" rel="noopener" className="underline underline-offset-4">
          linktr.ee/labellotaba
        </a>
      </div>
    </footer>
  );
}
