"use client";

import React, { useState } from "react";
import { Tent, Menu, X } from "lucide-react";
import EventSection from "./EventSection";
import CommunitySection from "./CommunitySection";
import SponsorsSection from "./SponsorsSection";
import Footer from "./Footer";

export default function WildClubLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#14100C] text-[#FFFDF7]">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#14100C]/85 backdrop-blur-md border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Signature Logo style affiche */}
          <a href="#" className="flex flex-col leading-none group">
            {/* <span className="font-script text-[#F5C518] text-lg sm:text-xl -mb-1">
              Life Hits Different With
            </span> */}
            <span className="font-display tracking-wider text-2xl sm:text-3xl text-[#FFFDF7]">
              WILD CLUB
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#D6CFC2]">
            <a href="#event" className="hover:text-[#F5C518] transition">
              Summer in December
            </a>
            <a href="#communaute" className="hover:text-[#F5C518] transition">
              L'Esprit & Médias
            </a>
            <a href="#sponsors" className="hover:text-[#F5C518] transition">
              Partenaires
            </a>
            <a
              href="#inscription"
              className="bg-[#F5C518] hover:bg-[#E0B10B] text-[#14100C] px-5 py-2.5 rounded-full font-bold transition"
            >
              Rejoindre l'Édition
            </a>
          </div>

          <button
            type="button"
            aria-label="Menu"
            className="md:hidden text-[#FFFDF7]"
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
          <div className="md:hidden bg-[#1E1812] border-b border-amber-500/20 px-4 py-4 space-y-3">
            <a
              href="#event"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#FFFDF7]"
            >
              Summer in December
            </a>
            <a
              href="#communaute"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#FFFDF7]"
            >
              L'Esprit & Médias
            </a>
            <a
              href="#sponsors"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#FFFDF7]"
            >
              Partenaires
            </a>
            <a
              href="#inscription"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#F5C518] text-[#14100C] py-2.5 rounded-lg font-bold"
            >
              S'inscrire maintenant
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION — GOLDEN HOUR */}
      <header className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-cover.jpg"
            alt="Wild Club Golden Hour Tunisie"
            className="w-full h-full object-cover opacity-45 sepia-[.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#14100C]/60 via-amber-950/35 to-[#14100C]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-3xl sm:text-4xl text-[#F5C518] mb-2">
            Life Hits Different With{"   "}
            <span className="font-display tracking-wider text-2xl sm:text-3xl text-[#FFFDF7]">
              WILD CLUB
            </span>
          </p>

          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl tracking-tight mb-6 leading-[1.08] text-[#FFFDF7]">
            Enjoy the{" "}
            <span className="font-script font-normal text-6xl sm:text-8xl md:text-9xl text-[#F5C518] px-1">
              Summer
            </span>
            <br />
            In December
          </h1>

          <p className="max-w-2xl mx-auto text-[#E6DFD3] text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
            La communauté tunisienne de camping authentique, de couchers de
            soleil face à la mer et d'aventures humaines hors des sentiers
            battus.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#inscription"
              className="w-full sm:w-auto px-8 py-4 bg-[#F5C518] hover:bg-[#E0B10B] text-[#14100C] font-bold rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Tent className="w-5 h-5" />
              Réserver ma place
            </a>
            <a
              href="#sponsors"
              className="w-full sm:w-auto px-8 py-4 bg-[#1E1812]/90 hover:bg-[#2A221A] border border-amber-500/30 text-[#FFFDF7] font-semibold rounded-full transition flex items-center justify-center gap-2"
            >
              Devenir Partenaire
            </a>
          </div>
        </div>
      </header>

      <EventSection />
      <CommunitySection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}
