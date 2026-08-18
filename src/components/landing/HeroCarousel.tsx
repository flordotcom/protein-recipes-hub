import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import ebook from "@/assets/ebook-mockup.jpg";
import pancakes from "@/assets/pancakes.jpg";
import pizza from "@/assets/pizza-fit.jpg";
import mousse from "@/assets/mousse.jpg";
import burger from "@/assets/burger.jpg";

const slides = [
  { src: ebook, alt: "Mockup del ebook 365 Recetas Proteicas en tablet y libro" },
  { src: pancakes, alt: "Pancakes de avena proteicos con frutos rojos" },
  { src: pizza, alt: "Pizza fit proteica con pollo y vegetales" },
  { src: mousse, alt: "Mousse de chocolate proteico con frambuesas" },
  { src: burger, alt: "Hamburguesa magra alta en proteína" },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_25px_60px_-25px_color-mix(in_oklab,var(--ink)_45%,transparent)]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index]!.src}
            alt={slides[index]!.alt}

            width={800}
            height={800}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-card/80 text-foreground shadow-sm backdrop-blur transition hover:bg-card"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Imagen siguiente"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-card/80 text-foreground shadow-sm backdrop-blur transition hover:bg-card"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.alt}
            type="button"
            aria-label={`Ir a la imagen ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === index ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}
