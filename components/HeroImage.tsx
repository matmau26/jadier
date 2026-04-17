import Image from "next/image";

/**
 * Full-bleed hero background image.
 *
 * Uses next/image with `fill` + `priority` so it's optimized, served as AVIF/
 * WebP where supported, and eagerly fetched since it sits above the fold.
 * An ivory overlay + soft gradient keep the ink (#1a1a1a) text readable.
 */
export default function HeroImage() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden bg-ivory"
    >
      <Image
        src="/JADIER-wall.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Readability overlay — ivory wash + subtle vertical gradient */}
      <div className="absolute inset-0 bg-ivory/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/20 to-ivory/70" />

      {/* Brand color glows layered on top of the image */}
      <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-sage/25 blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-moss/15 blur-3xl" />
    </div>
  );
}
