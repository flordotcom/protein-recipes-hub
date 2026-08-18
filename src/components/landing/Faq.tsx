import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo recibo el recetario?",
    a: "Inmediatamente después del pago recibes un correo con el acceso digital. Puedes descargarlo y verlo en tu celular, tablet o computadora.",
  },
  {
    q: "¿El pago es seguro?",
    a: "Sí. El pago se procesa en una plataforma con cifrado bancario. Nosotros nunca vemos ni almacenamos los datos de tu tarjeta.",
  },
  {
    q: "¿Necesito suplementos o proteínas en polvo para todas las recetas?",
    a: "No. La gran mayoría de las recetas usa alimentos comunes del supermercado. Cuando una receta incluye proteína en polvo, siempre te damos una alternativa sin ella.",
  },
  {
    q: "¿Tengo acceso de por vida?",
    a: "Sí. Es un pago único y el acceso es permanente, incluyendo las actualizaciones futuras del recetario y de los bonos.",
  },
];

export function Faq() {
  return (
    <section className="bg-surface px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-black tracking-tight text-foreground sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="text-left text-base font-bold text-foreground">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
