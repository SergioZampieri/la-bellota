"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { asset } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

// Main photo settles in from a slight zoom; the staircase inset rises after it
// and drifts a little faster than the page while scrolling.
export function HeroMedia() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mainY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const insetY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <div ref={ref} className="relative order-first md:order-none">
      <motion.div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-foreground/10 md:aspect-[4/5]"
        initial={{ opacity: 0, clipPath: "inset(8% 8% 8% 8% round 1rem)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 1rem)" }}
        transition={{ duration: 1.1, ease }}
      >
        <motion.div
          className="absolute inset-[-40px_0]"
          style={{ y: mainY }}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
        >
          <Image
            src={asset("/img/rooms/premium-3.jpg")}
            alt="Habitación Premium con balcón abierto hacia la plaza"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -bottom-9 -left-11 hidden w-[38%] md:block"
        style={{ y: insetY }}
      >
        <motion.div
          className="relative aspect-[3/4] overflow-hidden rounded-2xl border-[6px] border-background shadow-xl shadow-foreground/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
        >
          <Image
            src={asset("/img/house/escalera.jpg")}
            alt="Escalera de mármol con azulejos verdes en la entrada"
            fill
            loading="eager"
            sizes="20vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
