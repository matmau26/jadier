import Link from "next/link";

type LogoProps = {
  variant?: "full" | "mark";
  color?: "ink" | "ivory";
  className?: string;
};

export default function Logo({
  variant = "full",
  color = "ink",
  className = "",
}: LogoProps) {
  const textColor = color === "ink" ? "text-ink" : "text-ivory";

  if (variant === "mark") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <LogoMark color={color} />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 ${textColor} ${className}`}
      aria-label="Jadier - Cabinet d'expertise comptable"
    >
      <LogoMark color={color} />
      <span className="flex flex-col leading-none">
        <span className="font-display font-semibold text-xl md:text-[1.35rem] tracking-tight">
          Jadier
        </span>
        <span className="font-display text-[0.62rem] md:text-[0.68rem] font-light tracking-[0.14em] uppercase opacity-70">
          Cabinet d&apos;expertise comptable
        </span>
      </span>
    </Link>
  );
}

function LogoMark({ color = "ink" }: { color?: "ink" | "ivory" }) {
  const bg = color === "ink" ? "#2a3124" : "#f6f6f4";
  const fg = color === "ink" ? "#f6f6f4" : "#2a3124";
  return (
    <span
      className="inline-flex items-center justify-center h-10 w-10 rounded-full"
      style={{ background: bg }}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke={fg}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="7" r="2.5" />
        <circle cx="17" cy="17" r="2.5" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </svg>
    </span>
  );
}
