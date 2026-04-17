/**
 * Jadier — brand typography.
 *
 * The official family is **PP Frama** (Display + Text). Because the licensed
 * woff2 files are not versioned, this module ships with a Plus Jakarta Sans
 * fallback via `next/font/google` so the project always builds.
 *
 * ➜ Migration to PP Frama once the files are placed in `public/fonts/`
 * (see `public/fonts/README.md`):
 *
 *   1. Comment out the `Plus_Jakarta_Sans` lines below.
 *   2. Uncomment the `localFont` blocks.
 *   3. Rebuild — the CSS variables `--font-sans` / `--font-display`
 *      will automatically point to PP Frama.
 */

import { Plus_Jakarta_Sans } from "next/font/google";
// import localFont from "next/font/local";

// ────────────────────────────────────────────────────────────────────────────
// Active fallback — Plus Jakarta Sans (Google Fonts)
// ────────────────────────────────────────────────────────────────────────────
const sansFallback = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const displayFallback = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const ppFramaText = sansFallback;
export const ppFramaDisplay = displayFallback;

// ────────────────────────────────────────────────────────────────────────────
// Target — PP Frama (enable once woff2 files are in public/fonts/)
// ────────────────────────────────────────────────────────────────────────────
// export const ppFramaDisplay = localFont({
//   variable: "--font-display",
//   display: "swap",
//   preload: true,
//   fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
//   src: [
//     { path: "../public/fonts/PPFramaDisplay-Extralight.woff2", weight: "200", style: "normal" },
//     { path: "../public/fonts/PPFramaDisplay-Regular.woff2",    weight: "400", style: "normal" },
//     { path: "../public/fonts/PPFramaDisplay-Black.woff2",      weight: "900", style: "normal" },
//   ],
// });
//
// export const ppFramaText = localFont({
//   variable: "--font-sans",
//   display: "swap",
//   preload: true,
//   fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
//   src: [
//     { path: "../public/fonts/PPFramaText-Light.woff2",   weight: "300", style: "normal" },
//     { path: "../public/fonts/PPFramaText-Regular.woff2", weight: "400", style: "normal" },
//     { path: "../public/fonts/PPFramaText-Medium.woff2",  weight: "500", style: "normal" },
//     { path: "../public/fonts/PPFramaText-Bold.woff2",    weight: "700", style: "normal" },
//   ],
// });
