import Image from "next/image";
import { StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Eyebrow } from "@/components/eyebrow";
import { PhotoGallery } from "@/components/photo-gallery";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { asset, rooms, type Room } from "@/lib/site";

function RoomCard({ room }: { room: Room }) {
  const title = `Habitación ${room.name}`;
  return (
    <Card className="h-full gap-0 overflow-hidden rounded-2xl border-0 py-0 shadow-lg shadow-foreground/5 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/10">
      <PhotoGallery title={title} photos={room.photos} className="group relative block">
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[4/5]">
          <Image
            src={asset(room.photos[0].src)}
            alt={room.photos[0].alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        {room.badge && (
          <Badge className="absolute top-3.5 left-3.5 bg-card text-primary">{room.badge}</Badge>
        )}
      </PhotoGallery>

      <CardContent className="flex flex-1 flex-col px-6 pt-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[1.7rem]">{room.name}</h3>
          <span className="flex items-center gap-1 text-sm font-semibold whitespace-nowrap">
            <StarIcon className="size-3.5 fill-current" />
            {room.rating}
            <span className="font-normal text-muted-foreground">· {room.reviews} reseñas</span>
          </span>
        </div>
        <p className="mt-2 mb-4 text-muted-foreground">{room.description}</p>
        <ul className="flex flex-wrap gap-2">
          {room.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline" className="font-normal">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3 border-0 bg-transparent px-6 pt-6 pb-6">
        <Button asChild size="pill">
          <a href={room.airbnb} target="_blank" rel="noopener">
            Reservar en Airbnb
          </a>
        </Button>
        <PhotoGallery
          title={title}
          photos={room.photos}
          className="text-sm font-medium underline underline-offset-4"
        >
          Ver fotos ({room.photos.length})
        </PhotoGallery>
      </CardFooter>
    </Card>
  );
}

export function Rooms() {
  return (
    <section id="habitaciones" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 md:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <Eyebrow>Habitaciones</Eyebrow>
          <h2 className="mb-4 text-4xl md:text-5xl">
            Tres habitaciones coloniales, cada una con su carácter.
          </h2>
          <p className="text-muted-foreground">
            Todas privadas, para 2 huéspedes, con cama Queen, armario, escritorio, televisión y WiFi
            de alta velocidad.
          </p>
        </Reveal>
        <Stagger step={0.15} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <StaggerItem key={room.id}>
              <RoomCard room={room} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
