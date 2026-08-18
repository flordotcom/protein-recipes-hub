# Protein Recipes Hub

Actúa como un desarrollador frontend senior especializado en React, Tailwind CSS, Lucide Icons y Framer Motion, con enfoque en UI/UX de páginas de ventas de alta conversión (Direct Response Marketing). Recrea de forma idéntica la landing page de "365 Recetas Proteicas" en español, cuidando cada detalle visual, responsividad mobile-first y componentes interactivos.

---

### 🎨 PALETA DE COLORES Y ESTILOS GLOBALES

- **Fondo Primario:** Blanco puro (`#FFFFFF`) con secciones alternas en gris neutro ultra suave (`#F8FAFC`).

- **Fondo de Contraste (Header/Oferta):** Azul/Gris oscuro profundo (`#0F172A`).

- **Color Principal de Acción (CTA Buttons):** Verde esmeralda conversión (`#22C55E` con hover en `#16A34A`), efecto de brillo sutil (glow) y animación ligera de pulso (`pulse`).

- **Alertas y Urgencia:** Rojo vivo (`#EF4444`) para contadores, badges de oferta y precios tachados; Amarillo dorado (`#F59E0B`) para calificaciones e iconos de destacados.

- **Tipografía:** Sans-serif moderna (Inter o Poppins), con jerarquía clara y negritas marcadas en los títulos principal (H1) y llamadas a la acción.

---

### 📐 ESTRUCTURA Y COMPONENTES DE LA PÁGINA

#### 1. Top Bar de Urgencia (Fija/Sticky Header)

- Fondo rojo o gris oscuro (`#0F172A`) con texto centrado en blanco y rojo destacando:

  "⚡ OFERTA ESPECIAL: 80% DE DESCUENTO DISPONIBLE SOLO HOY — [Reloj Contador 09:59]".

- Implementa un timer dinámico de cuenta regresiva que vuelva a iniciar si llega a cero.

#### 2. Hero Section (Sección Principal de Alto Impacto)

- **Badge superior:** Ovalado con borde Verde/Dorado: "🔥 MÁS DE 15,000 PERSONAS YA LOGRARON SU CAMBIO".

- **Titular Principal (H1):** "365 RECETAS PROTEICAS FÁCILES, DELICIOSAS Y ECONÓMICAS PARA GANAR MASA MUSCULAR Y PERDER GRASA" (Resalta "365 RECETAS PROTEICAS" con color verde o fondo destacado).

- **Subtítulo:** "Transforma tu cuerpo comiendo lo que te gusta: sin pasar hambre, sin pollo seco con brócoli y sin gastar horas en la cocina."

- **Carrusel Automático de Imágenes (Elemento Clave):**

  - Implementa un slider/carrusel de imágenes automático usando `framer-motion` o `swiper` que alterne suavemente fotos reales de los platos (Pancakes de avena proteicos, Pizza Fit, Mousse de chocolate, Hamburguesa magra, etc.) junto con el mockup 3D del Ebook/Tablet.

  - Añade controles sutiles de navegación (puntos/flechas) y cambio automático cada 3 segundos.

- **Botón CTA Principal (Grande):**

  - Texto: "¡QUIERO EL ACCESO INMEDIATO AL RECETARIO!"

  - Subtexto inferior: "🔒 Pago 100% Seguro • Acceso Digital Instantáneo • 7 Días de Garantía"

  - Iconos de tarjetas de crédito y métodos de pago debajo del botón.

#### 3. Prueba Social y Resultados (Transformaciones)

- Título: "Resultados reales de personas reales que ya probaron el recetario".

- Grid/Carrusel de testimonios tipo captura de chat/WhatsApp e Instagram con calificaciones de 5 estrellas (⭐⭐⭐⭐⭐).

- Tarjetas con imágenes de antes/después y testimonios breves resaltando lo fácil que es cocinar.

#### 4. Cuadro Comparativo: El Problema vs. La Solución

- Título: "¿Te identificas con alguno de estos problemas?"

- Dos columnas claras:

  - **Columna ❌ SIN EL RECETARIO (Fondo rojo suave `#FEF2F2`, bordes rojos):**

    - Aburrido de comer la misma comida seca todos los días.

    - No sabes cómo calcular tus proteínas diarias.

    - Gastas mucho dinero en ingredientes raros.

    - Sin tiempo para cocinar recetas complejas.

  - **Columna ✅ CON 365 RECETAS PROTEICAS (Fondo verde suave `#F0FDF4`, bordes verdes):**

    - Una receta diferente y deliciosa para cada día del año.

    - Macronutrientes y calorías calculados paso a paso.

    - Ingredientes sencillos que encuentras en cualquier supermercado.

    - Listas en menos de 20 minutos.

#### 5. Muestra del Contenido (Recipe Preview Cards)

- Título: "Echa un vistazo a lo que cocinarás hoy mismo".

- Grid interactivo de tarjetas de recetas. Cada tarjeta incluye:

  - Foto del plato preparado.

  - Nombre del plato (ej: "Pizza Fit Proteica en 15 min").

  - Badges con datos nutricionales: `35g Proteína` | `380 kcal` | `Rápido y Fácil`.

#### 6. Sección de Bonos Exclusivos (Gratis Hoy)

- Título: "Llevas esto GRATIS si ordenas HOY:"

- Tarjetas de bonos con badge destacado "REGALO 100% GRATIS":

  - **Bono 1:** Guía Paso a Paso para Calcular tus Macronutrientes (Valorado en $27 -> **$0**).

  - **Bono 2:** Lista de Compras Inteligente y Económica (Valorado en $19 -> **$0**).

  - **Bono 3:** Guía de Snack & Postres Proteicos para Ansiosos (Valorado en $25 -> **$0**).

#### 7. Caja de Oferta Irresistible (Pricing Box Central)

- Caja contenedora destacada con borde animado/resplandeciente.

- Encabezado: "CUPÓN DE 80% DE DESCUENTO APLICADO".

- Precio habitual tachado: `~~$97 USD~~`

- **Precio de oferta HOY:** `$19 USD` (En texto grande, negrita, verde).

- Lista de verificación (`CheckCircle2` de Lucide) con todo lo que incluye el paquete.

- Botón CTA de compra gigante y animado: "¡SI! QUIERO MIS 365 RECETAS + BONOS AHORA".

#### 8. Garantía Incondicional de 7 Días

- Fondo gris/azul oscuro con sello/icono de escudo de oro o garantía.

- Título: "Pruébalo por 7 días sin ningún riesgo".

- Copy: "Si preparas las recetas y sientes que no valió la pena, envíanos un correo y te devolvemos el 100% de tu dinero inmediatamente. Sin preguntas."

#### 9. FAQ (Preguntas Frecuentes)

- Componente Accordion de Shadcn/React interactivo:

  - ¿Cómo recibo el recetario?

  - ¿El pago es seguro?

  - ¿Necesito suplementos o proteínas en polvo para todas las recetas?

  - ¿Tengo acceso de por vida?

#### 10. Sticky Bottom Bar (Exclusivo Móvil)

- Barra flotante fija en la parte inferior de la pantalla que aparece al hacer scroll.

- Muestra el precio con descuento `$19 USD` y un botón compacto: "¡COMPRAR AHORA!".

---

### 🚀 REQUISITOS TÉCNICOS

- Código limpio, modularizado por componentes React (Hero, Carousel, Comparison, Pricing, FAQ, StickyFooter).

- Usa `framer-motion` para animaciones de apariciones al hacer scroll (`whileInView`).

- Iconos de `lucide-react` (`Check`, `X`, `Star`, `ShieldCheck`, `Clock`, `Flame`, `Lock`).

- Diseño totalmente responsivo adaptado perfectamente a pantallas móviles, tablets y escritorio.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3735b362-d883-4c36-94d5-85dc13aa8267).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
