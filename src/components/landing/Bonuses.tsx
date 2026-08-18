import { motion } from "framer-motion";
import { Gift, Calculator, ShoppingCart, Cookie } from "lucide-react";

const bonuses = [
  {
    icon: Calculator,
    title: "Guía Paso a Paso para Calcular tus Macronutrientes",
    value: "$27",
  },
  { icon: ShoppingCart, title: "Lista de Compras Inteligente y Económica", value: "$19" },
  { icon: Cookie, title: "Guía de Snacks & Postres Proteicos para Ansiosos", value: "$25" },
];

export function Bonuses() {
  return (
    <section className="bg-background px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-black tracking-tight text-foreground sm:text-4xl">
          Llevas esto <span className="text-primary">GRATIS</span> si ordenas HOY:
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col rounded-2xl border-2 border-primary/30 bg-card p-6 pt-8 text-center shadow-sm"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-urgent px-3 py-1 text-[10px] font-black uppercase tracking-wide text-urgent-foreground">
                Regalo 100% Gratis
              </span>
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-success-soft">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-wide text-muted-foreground">
                Bono {i + 1}
              </p>
              <h3 className="mt-1 flex-1 text-base font-bold leading-snug text-foreground">
                {b.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Valorado en <span className="text-urgent line-through">{b.value}</span>{" "}
                <span className="text-lg font-black text-primary">$0</span>
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-bold text-foreground">
          <Gift className="h-5 w-5 text-gold" />
          Valor total de los bonos: <span className="text-urgent line-through">$71 USD</span> — hoy
          incluidos sin costo
        </p>
      </div>
    </section>
  );
}
