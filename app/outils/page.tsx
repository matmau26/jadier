"use client";

import Link from "next/link";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

type Tool = {
  name: string;
  tagline: string;
  desc: string;
  accent: string;
};

const tools: Tool[] = [
  {
    name: "Pennylane",
    tagline: "Gestion financière & comptable",
    desc: "Plateforme française de gestion financière et comptable qui centralise facturation, comptabilité et pilotage financier pour entreprises et experts-comptables.",
    accent: "from-[#eef2e6] to-[#cbd5b3]",
  },
  {
    name: "Silae",
    tagline: "Paie & déclarations sociales",
    desc: "Logiciel de paie en ligne utilisé par cabinets comptables et entreprises pour automatiser la gestion de la paie et des déclarations sociales.",
    accent: "from-[#f0ece4] to-[#d8cfbc]",
  },
  {
    name: "RCA",
    tagline: "Conseil, prévisionnel & pilotage",
    desc: "Éditeur de logiciels pour experts-comptables proposant des outils de conseil, prévisionnel et pilotage afin d'accompagner les dirigeants.",
    accent: "from-[#e7ecdf] to-[#b8c29d]",
  },
];

export default function OutilsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos outils"
        title={
          <>
            Une stack digitale
            <br />
            <span className="italic text-moss">au service</span> de votre activité.
          </>
        }
        subtitle="Notre cabinet s'appuie sur des solutions digitales performantes pour sécuriser vos données, automatiser vos processus et vous offrir une gestion claire et réactive."
      />

      {/* TOOLS GRID */}
      <section className="container-px pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.1}>
              <article className="group h-full flex flex-col rounded-4xl bg-ivory border border-ink/10 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-ink/20">
                {/* Logo placeholder area */}
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${tool.accent} flex items-center justify-center`}
                  aria-label={`Emplacement logo ${tool.name}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 text-olive/40">
                      <ImageIcon size={36} strokeWidth={1} />
                      <span className="text-[0.65rem] uppercase tracking-[0.18em]">
                        Logo {tool.name}
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-5 left-5 text-xs font-medium text-olive/60 uppercase tracking-[0.18em]">
                    /0{i + 1}
                  </span>
                </div>

                <div className="flex-1 p-8 md:p-10 flex flex-col">
                  <h3 className="heading-display text-3xl md:text-4xl font-light text-ink">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm text-moss font-medium uppercase tracking-[0.12em]">
                    {tool.tagline}
                  </p>
                  <p className="mt-6 text-base font-light text-ink/70 leading-relaxed flex-1">
                    {tool.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUE PROP */}
      <section className="bg-sage/80 py-24 md:py-32">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-olive">
                  Pourquoi le digital ?
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 heading-display text-4xl md:text-5xl lg:text-6xl font-light text-olive">
                  Moins de papier.
                  <br />
                  <span className="italic">Plus de clarté.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl font-light text-olive/80 leading-relaxed">
                  Nos outils s&apos;interconnectent pour faire circuler
                  l&apos;information sans friction : vos factures remontent
                  automatiquement, votre trésorerie s&apos;actualise en temps
                  réel, vos indicateurs se mettent à jour chaque jour. Vous
                  reprenez la main sur votre pilotage.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-olive px-8 py-4 text-base font-medium text-ivory transition-all hover:-translate-y-0.5"
                  >
                    Demander une démo
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
