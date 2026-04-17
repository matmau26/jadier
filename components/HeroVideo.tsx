"use client";

/**
 * Full-bleed background video for the hero.
 *
 * - Multi-source (WebM preferred, MP4 fallback)
 * - Poster image prevents a white flash on load
 * - Overlay keeps ink (#1a1a1a) text readable on any frame
 * - `will-change: transform` + `translateZ(0)` promote the layer to its own
 *   compositor layer so the video doesn't repaint on scroll
 */
export default function HeroVideo() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden bg-ivory"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Readability overlay — ivory wash + subtle vertical gradient */}
      <div className="absolute inset-0 bg-ivory/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/20 to-ivory/70" />

      {/* Decorative color glows, kept from the original hero for brand warmth */}
      <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-sage/25 blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-moss/15 blur-3xl" />
    </div>
  );
}
