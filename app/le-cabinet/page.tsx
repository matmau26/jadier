"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const points = [
  {
    index: "01",
    title: "Cabinet moderne et digital",
    desc: "Utilisation d'outils interconnectés pour un accès en temps réel à vos données financières et une suppression totale du papier.",
  },
  {
    index: "02",
    title: "Accompagnement réactif et personnalisé",
    desc: "Un interlocuteur dédié qui comprend les spécificités de votre secteur et répond rapidement à vos problématiques quotidiennes.",
  },
  {
    index: "03",
    title: "Pilotage et conseil",
    desc: "Au-delà de la stricte conformité, nous fournissons des tableaux de bord et des analyses pointues pour éclairer vos décisions stratégiques.",
  },
  {
    index: "04",
    title: "Expertise immobilière différenciante",
    desc: "Une maîtrise technique approfondie des montages immobiliers (SCI, LMNP, LMP, marchands de biens) pour optimiser votre fiscalité.",
  },
  {
    index: "05",
    title: "Anticipation de la facturation électronique",
    desc: "Préparation et intégration proactive des processus et outils nécessaires pour la transition vers la facture électronique (PDP/PPF).",
  },
];

export default function CabinetPage() {
  return (
    <>
      <PageHero
        eyebrow="Le Cabinet"
        title={
          <>
            Les{" "}
            <span className="italic font-bold text-moss">5 points forts</span>
            <br />
            du cabinet.
          </>
        }
        subtitle="Une signature d'accompagnement construite autour du digital, de l'exigence et de l'expertise sectorielle."
      />

      <section className="container-px pb-24 md:pb-32">
        <div className="grid grid-cols-1 divide-y divide-ink/10 border-t border-ink/10">
          {points.map((p, i) => (
            <Reveal key={p.index} delay={i * 0.08}>
              <div className="group grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 transition-colors hover:bg-sage/10 px-2 md:px-4 -mx-2 md:-mx-4 rounded-3xl">
                <div className="col-span-12 md:col-span-2">
                  <span className="heading-display text-2xl md:text-3xl font-light text-moss">
                    /{p.index}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h3 className="heading-display text-3xl md:text-4xl lg:text-5xl font-light text-ink">
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-base md:text-lg font-light text-ink/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px pb-24 md:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-sage p-10 md:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl font-light text-olive max-w-2xl">
                  Construisons ensemble
                  <br />
                  votre <span className="italic">trajectoire.</span>
                </h2>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-olive px-8 py-4 text-base font-medium text-ivory transition-all hover:-translate-y-0.5"
                >
                  Prendre rendez-vous
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
