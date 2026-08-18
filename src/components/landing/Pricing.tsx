import { motion } from "framer-motion";
import { CheckCircle2, Tag } from "lucide-react";
import { CtaButton, PaymentBadges } from "./CtaButton";

const includes = [
  "365 recetas proteicas para cada día del año",
  "Macros y calorías calculados en cada receta",
  "Recetas listas en menos de 20 minutos",
  "Bono 1: Guía para calcular tus macronutrientes",
  "Bono 2: Lista de compras inteligente y económica",
  "Bono 3: Guía de snacks y postres proteicos",
  "Acceso digital inmediato y de por vida",
  "Actualizaciones futuras sin costo extra",
];

export function Pricing() {
  return (
    <section id="oferta" className="scroll-mt-20 bg-ink px-4 py-16 text-ink-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="offer-glow mx-auto max-w-2xl rounded-3xl border-2 border-primary bg-card p-6 text-card-foreground sm:p-9"
      >
        <span className="mx-auto flex w-fit items-center gap-2 rounded-full bg-urgent px-4 py-1.5 text-[11px] font-black uppercase tracking-wide text-urgent-foreground sm:text-xs">
          <Tag className="h-4 w-4" />
          Cupón de 80% de descuento aplicado
        </span>

        <div className="mt-6 text-center">
          <p className="text-base text-muted-foreground">
            Precio habitual: <span className="text-urgent line-through">$97 USD</span>
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Precio de oferta hoy
          </p>
          <p className="mt-1 text-5xl font-black tracking-tight text-primary sm:text-6xl">
            $19 <span className="text-2xl sm:text-3xl">USD</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Pago único • Sin suscripciones</p>
        </div>

        <ul className="mx-auto mt-7 max-w-md space-y-2.5">
          {includes.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-foreground sm:text-base">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CtaButton size="xl">¡Sí! Quiero mis 365 recetas + bonos ahora</CtaButton>
          <PaymentBadges />
        </div>
      </motion.div>
    </section>
  );
}
