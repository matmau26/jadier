import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-olive text-ivory">
      <div className="container-px py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5">
            <Logo
              variant="full"
              tone="light"
              heightClassName="h-7 w-auto md:h-8"
            />
            <p className="mt-4 max-w-sm text-sm text-ivory/70 font-light leading-relaxed">
              Cabinet d&apos;expertise comptable moderne, digital et
              réactif, engagé au service de votre performance.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50 mb-3">
              Navigation
            </p>
            <ul className="space-y-1.5 text-sm font-light">
              <li>
                <Link href="/le-cabinet" className="hover:text-sage transition-colors">
                  Le Cabinet
                </Link>
              </li>
              <li>
                <Link href="/missions" className="hover:text-sage transition-colors">
                  Missions
                </Link>
              </li>
              <li>
                <Link href="/outils" className="hover:text-sage transition-colors">
                  Outils
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sage transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50 mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="mt-1 flex-shrink-0 text-sage" />
                <a
                  href="mailto:contact@jadier.fr"
                  className="hover:text-sage transition-colors"
                >
                  contact@jadier.fr
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="mt-1 flex-shrink-0 text-sage" />
                <a
                  href="tel:+33475012298"
                  className="hover:text-sage transition-colors"
                >
                  +33 4 75 01 22 98
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-1 flex-shrink-0 text-sage" />
                <span>
                  43 Bd du Président René Coty, 26200 Montélimar
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-ivory/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-ivory/50 font-light">
            © {new Date().getFullYear()} Jadier — Tous droits réservés.
          </p>

          {/* Bottom right — % monogram */}
          <Logo
            variant="mark"
            heightClassName="h-7 w-auto md:h-8"
          />
        </div>
      </div>
    </footer>
  );
}
