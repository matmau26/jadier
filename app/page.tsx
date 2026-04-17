"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, LineChart, ShieldCheck, Building2, FileDigit } from "lucide-react";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    icon: Sparkles,
    title: "Cabinet moderne & digital",
    desc: "Outils interconnectés et 100% dématérialisés pour un accès en temps réel à vos données.",
  },
  {
    icon: LineChart,
    title: "Pilotage & conseil",
    desc: "Des tableaux de bord clairs pour éclairer vos décisions stratégiques.",
  },
  {
    icon: Building2,
    title: "Expertise immobilière",
    desc: "Maîtrise fine des montages (SCI, LMNP, LMP, marchands de biens).",
  },
  {
    icon: FileDigit,
    title: "Facture électronique",
    desc: "Anticipation et intégration proactive des futurs standards PDP/PPF.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  return (
    <>
      {/* HERO VISUAL — under the header, above the eyebrow text */}
      <section className="pt-24 md:pt-28 container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="overflow-hidden rounded-4xl md:rounded-5xl"
        >
          <Image
            src="/JADIER-wall.png"
            alt="Cabinet Jadier"
            width={3524}
            height={439}
            priority
            sizes="100vw"
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* HERO COPY */}
      <section className="relative">
        <div className="container-px pt-14 md:pt-20 pb-20 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium uppercase tracking-[0.22em] text-moss"
          >
            Expertise comptable — Montélimar
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="mt-6 heading-display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-extralight text-balance"
          >
            L&apos;expertise comptable,
            <br />
            <span className="italic font-light text-moss">réinventée.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-10 max-w-xl text-lg md:text-xl font-light text-ink/70 leading-relaxed"
          >
            Un cabinet nouvelle génération qui allie rigueur, conseil stratégique
            et outils digitaux de pointe pour éclairer vos décisions — en temps
            réel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-moss px-8 py-4 text-base font-medium text-ivory transition-all hover:bg-olive hover:shadow-xl hover:-translate-y-0.5"
            >
              Prendre contact
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/missions"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-8 py-4 text-base font-medium text-ink transition-all hover:border-ink/40 hover:bg-ink/5"
            >
              Découvrir nos missions
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="mt-24 md:mt-32 grid grid-cols-3 gap-6 max-w-3xl"
          >
            {[
              { k: "50+", v: "Créations d'entreprise accompagnées" },
              { k: "100%", v: "Cabinet digital sans papier" },
              { k: "24h", v: "Réactivité garantie" },
            ].map((s, i) => (
              <div key={i} className="border-t border-ink/10 pt-5">
                <p className="heading-display text-4xl md:text-5xl font-light">
                  {s.k}
                </p>
                <p className="mt-2 text-xs md:text-sm text-ink/60 font-light leading-snug">
                  {s.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PILLARS TEASER */}
      <section className="bg-sage/90 py-24 md:py-32 relative overflow-hidden">
        <div className="container-px">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-olive">
              Ce qui nous distingue
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 heading-display text-4xl md:text-6xl lg:text-7xl font-light text-olive max-w-4xl">
              Une approche moderne, humaine et exigeante.
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group h-full rounded-4xl bg-ivory p-8 md:p-10 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-olive/10 text-olive">
                    <p.icon size={20} />
                  </div>
                  <h3 className="mt-6 text-xl md:text-2xl font-medium text-ink tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-ink/60 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-start">
              <Link
                href="/le-cabinet"
                className="inline-flex items-center gap-2 text-olive font-medium link-underline"
              >
                Découvrir le cabinet
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 md:py-32 container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-moss">
                Notre approche
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 heading-display text-4xl md:text-5xl lg:text-6xl font-light">
                L&apos;exigence du
                <br />
                <span className="italic">sur-mesure.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg font-light text-ink/75 leading-relaxed">
            <Reveal delay={0.15}>
              <p>
                Nous réinventons la relation entre le dirigeant et son expert-comptable :
                <span className="text-ink"> un interlocuteur dédié</span>, des outils qui
                parlent entre eux, et des conseils qui vont au-delà de la
                stricte conformité.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                De la création au pilotage, en passant par la fiscalité immobilière
                et la transition vers la facturation électronique, nous structurons
                vos décisions autour d&apos;une vision claire, chiffrée et
                anticipée.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="flex items-center gap-3 pt-4">
                <ShieldCheck className="text-moss" size={20} />
                <span className="text-sm text-ink/60">
                  Membre de l&apos;Ordre des Experts-Comptables
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px pb-24 md:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-olive p-10 md:p-20">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-moss/30 blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage">
                  Parlons de votre projet
                </p>
                <h2 className="mt-5 heading-display text-4xl md:text-5xl lg:text-6xl font-light text-ivory max-w-2xl">
                  Un échange, une ambition,
                  <br />
                  une trajectoire.
                </h2>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-moss px-8 py-4 text-base font-medium text-ivory transition-all hover:bg-olive hover:-translate-y-0.5"
                >
                  Nous contacter
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
