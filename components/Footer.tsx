import React from 'react';
import { Flame, Instagram, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F0D] border-t border-stone-800/80 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Slogan */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-black tracking-wider text-lg text-stone-100"
            >
              <Flame className="w-5 h-5 text-orange-500" />
              <span>
                WILD CLUB<span className="text-orange-500">.TN</span>
              </span>
            </a>
            <p className="text-xs text-stone-500 mt-1.5">
              Camping authentique, aventure & exploration outdoor en Tunisie.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-stone-300">
            <a href="#event" className="hover:text-orange-400 transition">
              Summer in December
            </a>
            <a href="#inscription" className="hover:text-orange-400 transition">
              Inscription
            </a>
            <a href="#communaute" className="hover:text-orange-400 transition">
              Communauté
            </a>
            <a href="#sponsors" className="hover:text-orange-400 transition">
              Sponsors
            </a>
          </div>

          {/* Liens sociaux & Contact */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-200 hover:text-orange-400 transition font-medium"
            >
              <Instagram className="w-4 h-4 text-orange-500" />
              <span>@wildclub.tn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
            </a>

            <a
              href="mailto:wildclub.tn@gmail.com"
              className="inline-flex items-center gap-1.5 text-stone-200 hover:text-orange-400 transition font-medium"
            >
              <Mail className="w-4 h-4 text-orange-500" />
              <span>wildclub.tn@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-8 pt-6 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Wild Club Tunisie. Tous droits réservés.</p>
          <p>Leave No Trace • Respectons la nature tunisienne</p>
        </div>
      </div>
    </footer>
  );
}
