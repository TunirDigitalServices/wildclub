import React from 'react';
import { ShieldCheck, Users, Compass, Camera, Play } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    img: '/images/summer-in-december.jpg',
    label: 'Édition Summer in December',
  },
  {
    img: '/images/crew-expedition.jpg',
    label: 'Expédition & Logistique Camp',
  },
  {
    img: '/images/crew-sunrise.jpg',
    label: 'Esprit Crew & Côte Sauvage',
  },
  {
    img: '/images/hero-cover.jpg',
    label: 'Nuit étoilée & Feu de camp',
  },
];

export default function CommunitySection() {
  return (
    <section id="communaute" className="py-20 bg-[#0B0F0D] text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#F5C518] font-bold text-sm uppercase tracking-widest">
            Notre ADN
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2">PLUS QU'UN CLUB, UN CREW</h2>
          <p className="text-stone-400 mt-4">
            Wild Club rassemble des jeunes Tunisiens passionnés par la nature brute, l'entraide et
            la création de souvenirs authentiques.
          </p>
        </div>

        {/* Les 3 Règles d'Or */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">1. Leave No Trace</h3>
              <p className="text-stone-400 text-sm">
                Respect absolu de la nature : nous laissons chaque spot encore plus propre que nous
                l'avons trouvé.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-orange-500/10 text-[#F5C518] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">2. Esprit d'Équipe</h3>
              <p className="text-stone-400 text-sm">
                Zéro tourisme passif. Du montage des tentes à la cuisine au feu de bois, tout le
                monde participe.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">3. Hors des Sentiers Battus</h3>
              <p className="text-stone-400 text-sm">
                Découverte de spots sauvages en Tunisie (criques, forêts, montagnes) loin des
                circuits commerciaux.
              </p>
            </div>
          </div>
        </div>

        {/* Galerie Photos / Reels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-900"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#F5C518]" />
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lien Instagram */}
        <div className="text-center mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5C518] hover:text-orange-300 transition"
          >
            <Play className="w-4 h-4" />
            Voir tous nos Reels et éditions sur @wildclub.tn →
          </a>
        </div>
      </div>
    </section>
  );
}
