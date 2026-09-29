import Image from "next/image";
import { MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { asset, contact } from "@/lib/site";

export function Location() {
  return (
    <section id="ubicacion" className="border-t">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-8 md:grid-cols-2 md:gap-20 md:py-28">
        <Reveal>
          <Eyebrow>Ubicación</Eyebrow>
          <h2 className="mb-5 text-4xl md:text-5xl">Recoleta, a pie de todo.</h2>
          <p className="mb-4 text-muted-foreground">
            Estamos en uno de los barrios más lindos de Buenos Aires: avenidas arboladas, plazas,
            cafés, museos y arquitectura francesa a cada paso. Ideal para salir a caminar la ciudad
            y volver a descansar.
          </p>
          <p className="mb-6 text-sm text-muted-foreground">
            La dirección exacta se comparte al confirmar la reserva.
          </p>
          <Button asChild size="pill" variant="outline" className="border-foreground bg-transparent">
            <a href={contact.map} target="_blank" rel="noopener">
              <MapPinIcon />
              Ver Recoleta en el mapa
            </a>
          </Button>
        </Reveal>
        <Reveal delay={0.15} className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src={asset("/img/house/vista-avenida.jpg")}
            alt="Vista soleada de la avenida desde el balcón"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
