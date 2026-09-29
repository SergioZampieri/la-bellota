import { cn } from "@/lib/utils";

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("mb-3 text-xs font-semibold tracking-[0.14em] text-balance text-primary uppercase", className)}>
      {children}
    </p>
  );
}
