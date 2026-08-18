import { useEffect, useState } from "react";
import { Clock, Zap } from "lucide-react";

const START = 9 * 60 + 59;

export function CountdownBar() {
  const [seconds, setSeconds] = useState(START);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s <= 1 ? START : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 w-full bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5 text-center sm:flex sm:justify-center">
        <p className="min-w-0 text-[11px] font-bold uppercase leading-tight tracking-wide sm:text-sm">
          <Zap className="mr-1 inline h-4 w-4 shrink-0 text-gold" />
          Oferta especial: <span className="text-urgent">80% de descuento</span> disponible solo hoy
        </p>
        <span className="flex shrink-0 items-center gap-1.5 rounded-lg bg-urgent px-2.5 py-1 font-mono text-sm font-bold text-urgent-foreground tabular-nums sm:text-base">
          <Clock className="h-4 w-4" />
          {mm}:{ss}
        </span>
      </div>
    </div>
  );
}
