import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { HeroCarousel } from "./HeroCarousel";
import { CtaButton, PaymentBadges } from "./CtaButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-14 pt-8 sm:pt-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-success-soft px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-foreground sm:text-xs">
            <Flame className="h-4 w-4 text-gold" />
            Más de 15.000 personas ya lograron su cambio
          </span>

          <h1 className="mt-5 text-3xl font-black uppercase leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="rounded-lg bg-primary px-2 py-0.5 text-primary-foreground">
              365 recetas proteicas
            </span>{" "}
            fáciles, deliciosas y económicas para ganar masa muscular y perder grasa
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Transforma tu cuerpo comiendo lo que te gusta: sin pasar hambre, sin pollo seco con
            brócoli y sin gastar horas en la cocina.
          </p>

          <div className="mx-auto mt-7 max-w-md lg:mx-0">
            <CtaButton>QUIERO EMPEZAR AHORA</CtaButton>
            <PaymentBadges />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <HeroCarousel />
        </motion.div>
      </div>
    </section>
  );
}
