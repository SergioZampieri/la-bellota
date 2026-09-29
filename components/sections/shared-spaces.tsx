import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoGallery } from "@/components/photo-gallery";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { amenities, asset, sharedSpaces } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SharedSpaces() {
  return (
    <section id="espacios" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 md:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <Eyebrow>Espacios compartidos</Eyebrow>
          <h2 className="text-4xl md:text-5xl">Detalles de época, comodidades de hoy.</h2>
        </Reveal>

        <Stagger step={0.08} className="grid auto-rows-[160px] grid-cols-2 gap-3.5 md:auto-rows-[220px] lg:grid-cols-4">
          {sharedSpaces.map((photo, i) => (
            <StaggerItem key={photo.src} className={cn(photo.tall && "row-span-2")}>
              <PhotoGallery
                title="Espacios compartidos"
                photos={sharedSpaces}
                startIndex={i}
                className="group relative block size-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={asset(photo.src)}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pt-7 pb-3 text-sm font-medium text-white">
                  {photo.caption}
                </span>
              </PhotoGallery>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger step={0.12} className="mt-16 grid gap-10 md:grid-cols-3">
          {amenities.map((group) => (
            <StaggerItem key={group.title}>
              <h3 className="mb-3 text-2xl">{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="relative border-b py-2.5 pl-6 text-[0.95rem] before:absolute before:top-1/2 before:left-1 before:size-2 before:-translate-y-1/2 before:rounded-full before:bg-tile"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
