import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  subtext?: boolean;
  size?: "lg" | "xl";
};

export function CtaButton({ children, className, subtext = true, size = "lg" }: Props) {
  return (
    <div className="w-full">
      <a
        href="#oferta"
        className={cn(
          "cta-glow flex w-full items-center justify-center rounded-2xl bg-primary text-center font-extrabold uppercase leading-tight tracking-tight text-primary-foreground transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_85%,black)]",
          size === "lg" ? "px-6 py-4 text-base sm:text-lg" : "px-6 py-5 text-lg sm:text-2xl",
          className,
        )}
      >
        {children}
      </a>
      {subtext && (
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground sm:text-sm">
          <Lock className="h-3.5 w-3.5 shrink-0" />
          Pago 100% Seguro • Acceso Digital Instantáneo • 7 Días de Garantía
        </p>
      )}
    </div>
  );
}

export function PaymentBadges() {
  const methods = ["VISA", "MASTERCARD", "AMEX", "PIX", "PAYPAL"];
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
      {methods.map((m) => (
        <span
          key={m}
          className="rounded-md border border-border bg-card px-2.5 py-1 text-[10px] font-bold tracking-wider text-muted-foreground"
        >
          {m}
        </span>
      ))}
    </div>
  );
}
