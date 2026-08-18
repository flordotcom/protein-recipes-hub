import { motion } from "framer-motion";
import { Zap } from "lucide-react";

import pancakes from "@/assets/pancakes.jpg";
import pizza from "@/assets/pizza-fit.jpg";
import mousse from "@/assets/mousse.jpg";
import burger from "@/assets/burger.jpg";
import bowl from "@/assets/bowl.jpg";
import cheesecake from "@/assets/cheesecake.jpg";

const recipes = [
  { img: pizza, name: "Pizza Fit Proteica en 15 min", protein: "35g Proteína", kcal: "380 kcal" },
  { img: pancakes, name: "Pancakes de Avena Proteicos", protein: "28g Proteína", kcal: "310 kcal" },
  { img: burger, name: "Hamburguesa Magra Casera", protein: "42g Proteína", kcal: "450 kcal" },
  { img: mousse, name: "Mousse de Chocolate Proteico", protein: "22g Proteína", kcal: "190 kcal" },
  { img: bowl, name: "Bowl de Pollo y Arroz Cremoso", protein: "45g Proteína", kcal: "520 kcal" },
  { img: cheesecake, name: "Cheesecake Proteico de Frutilla", protein: "24g Proteína", kcal: "240 kcal" },
];

export function Recipes() {
  return (
    <section className="bg-surface px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-black tracking-tight text-foreground sm:text-4xl">
          Echa un vistazo a lo que cocinarás hoy mismo
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold leading-snug text-foreground">{r.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-success-soft px-2.5 py-1 text-xs font-bold text-primary">
                    {r.protein}
                  </span>
                  <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">
                    {r.kcal}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-xs font-bold text-gold-foreground">
                    <Zap className="h-3 w-3" /> Rápido y Fácil
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
