"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Nous <span className="italic text-moss">contacter.</span>
          </>
        }
        subtitle="Le Cabinet est ouvert du lundi au vendredi, de 8h30 à 12h et de 13h30 à 17h30. N'hésitez pas à nous contacter par email ou par téléphone."
      />

      <section className="container-px pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT: INFO + MAP */}
          <div className="lg:col-span-5 space-y-10">
            <Reveal>
              <div className="rounded-4xl bg-olive p-8 md:p-10 text-ivory">
                <p className="text-xs uppercase tracking-[0.22em] text-sage mb-8">
                  Coordonnées
                </p>
                <ul className="space-y-6">
                  <InfoRow
                    icon={<Mail size={18} />}
                    title="Email"
                    value={
                      <a
                        href="mailto:contact@jadier.fr"
                        className="hover:text-sage transition-colors"
                      >
                        contact@jadier.fr
                      </a>
                    }
                  />
                  <InfoRow
                    icon={<Phone size={18} />}
                    title="Téléphone"
                    value={
                      <a
                        href="tel:+33475012298"
                        className="hover:text-sage transition-colors"
                      >
                        +33 4 75 01 22 98
                      </a>
                    }
                  />
                  <InfoRow
                    icon={<MapPin size={18} />}
                    title="Adresse"
                    value={
                      <>
                        43 Bd du Président René Coty
                        <br />
                        26200 Montélimar
                      </>
                    }
                  />
                  <InfoRow
                    icon={<Clock size={18} />}
                    title="Horaires"
                    value={
                      <>
                        Lundi – Vendredi
                        <br />
                        8h30 – 12h / 13h30 – 17h30
                      </>
                    }
                  />
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-4xl overflow-hidden border border-ink/10 bg-sage/30">
                <iframe
                  title="Localisation Jadier Expertise"
                  src="https://www.google.com/maps?q=43+Bd+du+Pr%C3%A9sident+Ren%C3%A9+Coty,+26200+Mont%C3%A9limar&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-4xl bg-ivory border border-ink/10 p-8 md:p-12">
                <h2 className="heading-display text-3xl md:text-4xl font-light mb-2">
                  Parlons de votre projet.
                </h2>
                <p className="text-ink/60 font-light mb-10">
                  Remplissez le formulaire, nous vous répondons sous 24h
                  ouvrées.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-ivory/50 mb-1">
          {title}
        </p>
        <p className="text-lg font-light text-ivory">{value}</p>
      </div>
    </li>
  );
}
