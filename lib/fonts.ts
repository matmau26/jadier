import localFont from "next/font/local";

/**
 * Jadier — brand typography (PP Frama).
 *
 * Font files live in `app/fonts/` as .otf. PP Frama (Extralight / Regular /
 * Black, with italics) powers headings, PP Frama Text (Regular + Italic)
 * powers body copy. CSS variables exposed on <html>:
 *   --font-display → PP Frama      (titles)
 *   --font-sans    → PP Frama Text (body)
 *
 * NB: `next/font/local` requires every argument to be an inline literal,
 * so the fallback array cannot be hoisted to a shared const.
 */

export const ppFramaDisplay = localFont({
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "sans-serif",
  ],
  src: [
    {
      path: "../app/fonts/PPFrama-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../app/fonts/PPFrama-ExtralightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../app/fonts/PPFrama-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/PPFrama-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../app/fonts/PPFrama-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../app/fonts/PPFrama-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
});

export const ppFramaText = localFont({
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "sans-serif",
  ],
  src: [
    {
      path: "../app/fonts/PPFramaText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/PPFramaText-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
});
