"use client";

import * as React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { asset, type Photo } from "@/lib/site";
import { cn } from "@/lib/utils";

type PhotoGalleryProps = {
  title: string;
  photos: Photo[];
  startIndex?: number;
  className?: string;
  children: React.ReactNode;
};

// Wraps any trigger (a photo, a "Ver fotos" link) and opens the set full screen.
export function PhotoGallery({
  title,
  photos,
  startIndex = 0,
  className,
  children,
}: PhotoGalleryProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(startIndex);

  React.useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={cn("cursor-zoom-in text-left", className)}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent
        // Focus opens on the close button, outside the carousel's own key
        // handler; it marks the arrows it handles with preventDefault.
        onKeyDown={(event) => {
          if (event.defaultPrevented) return;
          if (event.key === "ArrowLeft") api?.scrollPrev();
          if (event.key === "ArrowRight") api?.scrollNext();
        }}
        overlayClassName="bg-black/90 supports-backdrop-filter:backdrop-blur-none"
        className="max-w-[min(94vw,1000px)] border-0 bg-transparent p-0 shadow-none ring-0 sm:max-w-[min(94vw,1000px)] [&>[data-slot=dialog-close]]:-top-10 [&>[data-slot=dialog-close]]:right-0 [&>[data-slot=dialog-close]]:text-white [&>[data-slot=dialog-close]]:hover:bg-white/10"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">
          Galería de {photos.length} fotos
        </DialogDescription>
        <Carousel setApi={setApi} opts={{ startIndex, loop: true }}>
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.src}>
                <div className="relative h-[80vh] w-full">
                  <Image
                    src={asset(photo.src)}
                    alt={photo.alt}
                    fill
                    sizes="94vw"
                    className="rounded-lg object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-12" />
          <CarouselNext className="right-2 sm:-right-12" />
        </Carousel>
        <p className="text-center text-sm text-white/70">
          {title} · {current + 1} / {photos.length}
        </p>
      </DialogContent>
    </Dialog>
  );
}
