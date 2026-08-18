import { motion } from "framer-motion";
import { Star, CheckCheck } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    handle: "@camirfit",
    text: "Bajé 6 kilos en 2 meses sin dejar los postres. El mousse de chocolate proteico me salvó la ansiedad de la noche.",
    initials: "CR",
  },
  {
    name: "Martín G.",
    handle: "@martin.gym",
    text: "Por fin dejé el pollo con arroz todos los días. Subí 4 kg de masa muscular y como comida de verdad.",
    initials: "MG",
  },
  {
    name: "Lucía P.",
    handle: "@luciapaz",
    text: "Cocino para toda la familia con estas recetas. Son rápidas, baratas y nadie nota que son fit.",
    initials: "LP",
  },
  {
    name: "Diego S.",
    handle: "@diegosanz",
    text: "Las macros ya vienen calculadas. Eso solo me ahorra una hora por día. Vale mucho más de lo que pagué.",
    initials: "DS",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
          Resultados reales de personas reales que ya probaron el recetario
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.handle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.handle}</p>
                </div>
              </div>

              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="mt-3 flex-1 rounded-xl bg-success-soft p-3 text-sm leading-relaxed text-foreground">
                {t.text}
              </p>

              <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <CheckCheck className="h-3.5 w-3.5" />
                Compra verificada
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
