import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyFooter() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-ink px-4 py-3 text-ink-foreground shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.5)] md:hidden"
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <div className="min-w-0">
              <p className="truncate text-[11px] text-ink-foreground/70 line-through">$97 USD</p>
              <p className="truncate text-xl font-black leading-none text-primary">$19 USD</p>
            </div>
            <a
              href="#oferta"
              className="cta-glow shrink-0 rounded-xl bg-primary px-4 py-3 text-sm font-black uppercase text-primary-foreground"
            >
              ¡Comprar ahora!
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
