"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { missionCategories } from "@/lib/missions";

export default function MissionsPage() {
  const [open, setOpen] = useState<string | null>(missionCategories[0].id);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 md:pt-48 pb-16 md:pb-24 container-px">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.22em] text-moss mb-6"
        >
          Missions
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-balance max-w-5xl"
        >
          <span className="text-moss">“</span>Nous avons accompagné plus de{" "}
          <span className="italic">50 créations</span> d&apos;entreprise.
          <span className="text-moss">”</span>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 text-sm uppercase tracking-[0.16em] text-ink/50 font-medium"
        >
          — Jadier Expertise
        </motion.p>
      </section>

      {/* INTRO */}
      <section className="container-px py-16 md:py-24 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl font-light">
                Les services
                <br />
                <span className="italic">que nous offrons.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl font-light text-ink/70 leading-relaxed">
                Nous proposons tout un éventail de services pour répondre aux
                besoins de chaque client. Vous avez une autre idée en tête ?
                Nous serons heureux de travailler avec vous à
                l&apos;élaboration d&apos;un devis personnalisé.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="container-px pb-24 md:pb-32">
        <div className="border-t border-ink/15">
          {missionCategories.map((cat, idx) => {
            const isOpen = open === cat.id;
            return (
              <div key={cat.id} className="border-b border-ink/15">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  className="group w-full flex items-center justify-between gap-6 py-8 md:py-10 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="heading-display text-sm md:text-base font-medium text-moss">
                      /{String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="heading-display text-2xl md:text-4xl lg:text-5xl font-light text-ink">
                      {cat.title}
                    </span>
                  </div>
                  <span
                    className={`flex-shrink-0 inline-flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full border border-ink/20 transition-all ${
                      isOpen
                        ? "bg-ink text-ivory border-ink rotate-45"
                        : "bg-transparent text-ink group-hover:bg-ink group-hover:text-ivory"
                    }`}
                  >
                    <Plus size={20} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 md:pb-14 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:pl-20">
                          {cat.items.map((item, i) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.45,
                                delay: 0.1 + i * 0.04,
                              }}
                            >
                              <h4 className="font-medium text-ink">
                                {item.label}
                              </h4>
                              <p className="mt-2 text-ink/65 font-light leading-relaxed">
                                {item.desc}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        {cat.cta && (
                          <div className="mt-10 md:pl-20">
                            <Link
                              href={cat.cta.href}
                              className="group inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 text-sm font-medium text-ivory transition-all hover:bg-olive hover:-translate-y-0.5"
                            >
                              {cat.cta.label}
                              <ArrowUpRight
                                size={16}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px pb-24 md:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-olive p-10 md:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage">
                  Une autre idée ?
                </p>
                <h2 className="mt-5 heading-display text-4xl md:text-5xl lg:text-6xl font-light text-ivory max-w-2xl">
                  Discutons de votre projet
                  <br />
                  sur-mesure.
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
