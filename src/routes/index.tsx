import { createFileRoute } from "@tanstack/react-router";

import { CountdownBar } from "@/components/landing/CountdownBar";
import { Hero } from "@/components/landing/Hero";
import { Testimonials } from "@/components/landing/Testimonials";
import { Comparison } from "@/components/landing/Comparison";
import { Recipes } from "@/components/landing/Recipes";
import { Bonuses } from "@/components/landing/Bonuses";
import { Pricing } from "@/components/landing/Pricing";
import { Guarantee } from "@/components/landing/Guarantee";
import { Faq } from "@/components/landing/Faq";
import { StickyFooter } from "@/components/landing/StickyFooter";

const title = "365 Recetas Proteicas | 80% OFF solo hoy";
const description =
  "365 recetas proteicas fáciles, económicas y deliciosas para ganar masa muscular y perder grasa. Macros calculados, listas en 20 minutos. Hoy $19 USD.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <CountdownBar />
      <Hero />
      <Testimonials />
      <Comparison />
      <Recipes />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <Faq />
      <footer className="bg-ink px-4 py-8 text-center text-xs text-ink-foreground/60">
        <p>© {new Date().getFullYear()} 365 Recetas Proteicas. Todos los derechos reservados.</p>
        <p className="mx-auto mt-2 max-w-2xl">
          Este producto no sustituye la orientación de un profesional de la salud. Los resultados
          pueden variar de una persona a otra.
        </p>
      </footer>
      <StickyFooter />
    </main>
  );
}
