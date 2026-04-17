import localFont from "next/font/local";

/**
 * Jadier — brand typography (PP Frama).
 *
 * Font files are loaded from `app/fonts/` in .otf format.
 * Variables exposed on <html>:
 *   --font-display  → PP Frama Display (Extralight / Regular / Black)
 *   --font-sans     → PP Frama Text (Regular)
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
      path: "../app/fonts/PPFramaDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../app/fonts/PPFramaDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/PPFramaDisplay-Black.otf",
      weight: "900",
      style: "normal",
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
  ],
});
