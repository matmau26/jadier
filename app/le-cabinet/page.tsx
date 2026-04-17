"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

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
      {/* HERO VISUAL — under the header, above the title */}
      <section className="pt-24 md:pt-28 container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="relative aspect-[16/7] md:aspect-[21/9] w-full overflow-hidden rounded-4xl md:rounded-5xl"
        >
          <Image
            src="/JADIER-marbre.png"
            alt="Cabinet Jadier — Le cabinet"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* HERO COPY */}
      <section className="container-px pt-14 md:pt-20 pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.22em] text-moss mb-6"
        >
          Le Cabinet
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.05 }}
          className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-balance max-w-5xl"
        >
          Les{" "}
          <span className="italic font-bold text-moss">5 points forts</span>
          <br />
          du cabinet.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg md:text-xl font-light text-ink/70 leading-relaxed"
        >
          Une signature d&apos;accompagnement construite autour du digital,
          de l&apos;exigence et de l&apos;expertise sectorielle.
        </motion.p>
      </section>

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
