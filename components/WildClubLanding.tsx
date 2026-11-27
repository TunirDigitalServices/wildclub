"use client";

import React, { useState } from "react";
import { Flame, Tent, Sparkles, Menu, X } from "lucide-react";
import EventSection from "./EventSection";
import CommunitySection from "./CommunitySection";
import SponsorsSection from "./SponsorsSection";
import Footer from "./Footer";

export default function WildClubLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0F0D]/85 backdrop-blur-md border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-black tracking-wider text-xl  text-stone-300"
          >
            <Flame className="w-6 h-6 text-orange-500" />
            <span>
              WILD CLUB<span className="text-orange-500">.TN</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <a href="#event" className="hover:text-orange-400 transition">
              Summer in December
            </a>
            <a href="#communaute" className="hover:text-orange-400 transition">
              L'Esprit & Médias
            </a>
            <a href="#sponsors" className="hover:text-orange-400 transition">
              Devenir Sponsor
            </a>
            <a
              href="#inscription"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition"
            >
              Rejoindre l'Édition
            </a>
          </div>

          <button
            type="button"
            aria-label="Menu"
            className="md:hidden text-stone-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111714] border-b border-stone-800 px-4 py-4 space-y-3">
            <a
              href="#event"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-200"
            >
              Summer in December
            </a>
            <a
              href="#communaute"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-200"
            >
              L'Esprit & Médias
            </a>
            <a
              href="#sponsors"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-200"
            >
              Devenir Sponsor
            </a>
            <a
              href="#inscription"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-orange-500 text-white py-2.5 rounded-lg font-semibold"
            >
              S'inscrire maintenant
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Remplace par "/cover-wildclub.jpg" une fois ton visuel ajouté dans le dossier /public */}
          <img
            src="/images/hero-cover.jpg"
            alt="Campement nocturne Wild Club Tunisie"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-[#0B0F0D]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            Prochaine Édition • Décembre 2026
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase mb-6 leading-tight">
            L'aventure sauvage.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
              Zéro filtre. 100% Liberté.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
            La communauté tunisienne de camping authentique et d'exploration
            outdoor. Rejoins le crew pour notre édition spéciale{" "}
            <strong className="text-white">« Summer in December »</strong> sur
            la côte sauvage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#inscription"
              className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <Tent className="w-5 h-5" />
              Réserver ma place (Places limitées)
            </a>
            <a
              href="#sponsors"
              className="w-full sm:w-auto px-8 py-4 bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-stone-100 font-semibold rounded-full transition flex items-center justify-center gap-2"
            >
              Espace Sponsors & Partenaires
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1 : ÉVÉNEMENT SUMMER IN DECEMBER */}
      <EventSection />

      {/* SECTION 2 : COMMUNAUTÉ & GALERIE */}
      <CommunitySection />

      {/* SECTION 3 : ESPACE SPONSORS */}
      <SponsorsSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
