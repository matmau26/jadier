"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-40 md:pt-48 pb-16 md:pb-24 container-px">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.22em] text-moss mb-6"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-balance max-w-5xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg md:text-xl font-light text-ink/70 leading-relaxed"
        >
          {subtitle}
        </motion.div>
      )}
      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}
