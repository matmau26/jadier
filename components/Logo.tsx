import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** `full` = wordmark, `mark` = % monogram only */
  variant?: "full" | "mark";
  /** `dark` = black artwork (on light bg), `light` = white artwork (on dark bg) */
  tone?: "dark" | "light";
  className?: string;
  /** Tailwind height utility applied to the <Image>, width stays auto. */
  heightClassName?: string;
};

export default function Logo({
  variant = "full",
  tone = "dark",
  className = "",
  heightClassName = "h-8 w-auto md:h-10",
}: LogoProps) {
  const asset =
    variant === "mark"
      ? { src: "/logo-jadier-light.svg", width: 288, height: 288 }
      : tone === "light"
      ? { src: "/Jadier-Full-White-Logo.svg", width: 1200, height: 288 }
      : { src: "/logo-Jadier-FULL.svg", width: 1200, height: 378 };

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Jadier — Cabinet d'expertise comptable"
    >
      <Image
        src={asset.src}
        alt="Jadier"
        width={asset.width}
        height={asset.height}
        priority
        className={heightClassName}
      />
    </Link>
  );
}
