import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-olive text-ivory">
      <div className="container-px py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo variant="full" color="ivory" />
            <p className="mt-6 max-w-sm text-ivory/70 font-light leading-relaxed">
              Cabinet d&apos;expertise comptable moderne, digital et
              réactif, engagé au service de votre performance.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-ivory/50 mb-4">
              Navigation
            </p>
            <ul className="space-y-2 font-light">
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
            <p className="text-xs uppercase tracking-[0.18em] text-ivory/50 mb-4">
              Contact
            </p>
            <ul className="space-y-3 font-light">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 flex-shrink-0 text-sage" />
                <a
                  href="mailto:contact@jadier.fr"
                  className="hover:text-sage transition-colors"
                >
                  contact@jadier.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 flex-shrink-0 text-sage" />
                <a
                  href="tel:+33475012298"
                  className="hover:text-sage transition-colors"
                >
                  +33 4 75 01 22 98
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-sage" />
                <span>
                  43 Bd du Président René Coty
                  <br />
                  26200 Montélimar
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/50 font-light">
          <p>© {new Date().getFullYear()} Jadier — Tous droits réservés.</p>
          <p>Cabinet d&apos;expertise comptable inscrit à l&apos;Ordre.</p>
        </div>
      </div>
    </footer>
  );
}
