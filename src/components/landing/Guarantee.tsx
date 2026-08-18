import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-ink px-4 pb-16 text-ink-foreground">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-3xl gap-6 rounded-3xl border border-primary/30 bg-[color-mix(in_oklab,var(--ink)_80%,white)] p-7 text-center sm:grid-cols-[auto_minmax(0,1fr)] sm:p-9 sm:text-left"
      >
        <div className="mx-auto grid h-24 w-24 shrink-0 place-items-center rounded-full border-4 border-gold">
          <ShieldCheck className="h-12 w-12 text-gold" />
        </div>
        <div className="min-w-0">
          <h2 className="text-xl font-black tracking-tight sm:text-3xl">
            Pruébalo por 7 días sin ningún riesgo
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-foreground/80 sm:text-base">
            Si preparas las recetas y sientes que no valió la pena, envíanos un correo y te
            devolvemos el 100% de tu dinero inmediatamente. Sin preguntas.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
