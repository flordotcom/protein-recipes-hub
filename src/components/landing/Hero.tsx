import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-14 pt-12 sm:pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px] bg-gradient-to-r from-primary via-[#8A9A40] to-gold bg-clip-text text-transparent">
            365 recetas económicas con proteínas para ahorrar dinero
          </h1>

          <h2 className="mt-6 text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Sin sacrificar el sabor.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
            Recetas prácticas ricas en proteínas para una alimentación saludable diaria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
