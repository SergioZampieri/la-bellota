import { ScrollVelocity } from "@/components/reactbits/scroll-velocity";

const features = [
  "Recoleta",
  "Casona colonial",
  "Escalera de mármol",
  "Techos altos",
  "Balcones a la ciudad",
  "Patio de luz",
  "Cama Queen",
];

// Slow strip that speeds up with scrolling and reverses when scrolling back.
export function FeaturesStrip() {
  return (
    <div className="border-y bg-secondary/60 py-5">
      <ScrollVelocity
        velocity={30}
        numCopies={4}
        texts={[
          <span key="features" className="inline-flex items-center">
            {features.map((f) => (
              <span key={f} className="inline-flex items-center">
                <span className="px-6 italic">{f}</span>
                <span className="text-[0.6em] text-primary">✦</span>
              </span>
            ))}
          </span>,
        ]}
        className="font-heading text-3xl md:text-4xl"
      />
    </div>
  );
}
