import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ppFramaDisplay, ppFramaText } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Jadier — Cabinet d'expertise comptable",
  description:
    "Cabinet d'expertise comptable moderne et digital à Montélimar. Accompagnement personnalisé, expertise immobilière, facturation électronique.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${ppFramaText.variable} ${ppFramaDisplay.variable}`}
    >
      <body className="bg-ivory text-ink antialiased font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
