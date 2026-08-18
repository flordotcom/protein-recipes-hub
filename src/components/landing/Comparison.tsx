import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const problems = [
  "Aburrido de comer la misma comida seca todos los días.",
  "No sabes cómo calcular tus proteínas diarias.",
  "Gastas mucho dinero en ingredientes raros.",
  "Sin tiempo para cocinar recetas complejas.",
];

const solutions = [
  "Una receta diferente y deliciosa para cada día del año.",
  "Macronutrientes y calorías calculados paso a paso.",
  "Ingredientes sencillos que encuentras en cualquier supermercado.",
  "Listas en menos de 20 minutos.",
];

export function Comparison() {
  return (
    <section className="bg-background px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-black tracking-tight text-foreground sm:text-4xl">
          ¿Te identificas con alguno de estos problemas?
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border-2 border-urgent/40 bg-danger-soft p-6"
          >
            <h3 className="text-base font-black uppercase tracking-wide text-urgent sm:text-lg">
              Sin el recetario
            </h3>
            <ul className="mt-4 space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground sm:text-base">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-urgent" />
                  <span className="min-w-0">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border-2 border-primary/50 bg-success-soft p-6"
          >
            <h3 className="text-base font-black uppercase tracking-wide text-primary sm:text-lg">
              Con 365 recetas proteicas
            </h3>
            <ul className="mt-4 space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-foreground sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="min-w-0">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
