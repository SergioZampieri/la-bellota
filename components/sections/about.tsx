import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { asset } from "@/lib/site";

export function About() {
  return (
    <section
      id="la-casa"
      className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:py-28"
    >
      <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <Image
          src={asset("/img/house/fachada.jpg")}
          alt="Fachada blanca de la casona en una esquina de Recoleta"
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
      </Reveal>
      <Reveal delay={0.15} className="space-y-4 text-muted-foreground">
        <Eyebrow>La casa</Eyebrow>
        <h2 className="text-4xl text-foreground md:text-5xl">
          Tu hogar lejos de casa, en el corazón de Recoleta.
        </h2>
        <p>
          La Bellota es una casa de estilo colonial recientemente reciclada. Cada detalle fue
          elegido para que tu estadía sea cómoda: desde las habitaciones hasta los espacios comunes.
        </p>
        <p>
          Entrás por una escalera de mármol que lleva a un recibidor acogedor para descansar, leer
          o planear el día. Un patio de luz conecta las habitaciones con una cocina totalmente
          equipada, y hay un baño completo y un toilette de uso compartido.
        </p>
        <p>
          Al llegar te damos un recorrido por la casa, y durante tu estadía estamos disponibles las
          24 horas por teléfono, la app y nuestras redes.
        </p>
      </Reveal>
    </section>
  );
}
