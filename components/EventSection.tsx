"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function EventSection() {
  const [memberForm, setMemberForm] = useState({
    fullName: "",
    whatsapp: "",
    instagram: "",
    level: "Débutant (1ère expérience)",
    hasTent: "Non, besoin de place en tente",
    city: "",
  });
  const [memberSubmitted, setMemberSubmitted] = useState(false);

  // Remplace par ton numéro WhatsApp (format 216XXXXXXXX sans + ni espaces)
  const WHATSAPP_NUMBER = "21600000000";

  const handleMemberSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMemberSubmitted(true);

    const text = `Salam Wild Club ! Je veux m'inscrire à *Summer in December* :%0A- Nom : ${memberForm.fullName}%0A- Ville : ${memberForm.city}%0A- Instagram : ${memberForm.instagram}%0A- Niveau : ${memberForm.level}%0A- Matériel : ${memberForm.hasTent}`;
    window.open(`https://wa.me{WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section
      id="event"
      className="py-20 bg-[#14100C] text-stone-100 border-y border-stone-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de l'événement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="#F5C518 font-bold text-sm uppercase tracking-widest">
              Édition Spéciale
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2">
              SUMMER IN DECEMBER
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-stone-300">
            <span className="inline-flex items-center gap-2 bg-stone-900 px-4 py-2 rounded-lg border border-stone-800">
              <Calendar className="w-4 h-4 text-[#F5C518]" /> Décembre 2026 (2
              Jours / 1 Nuit)
            </span>
            <span className="inline-flex items-center gap-2 bg-stone-900 px-4 py-2 rounded-lg border border-stone-800">
              <MapPin className="w-4 h-4 text-[#F5C518]" /> Côte Sauvage (Cap
              Serrat / Haouaria)
            </span>
          </div>
        </div>
 {/* Bannière visuelle officielle de l'événement */}
        <div className="relative aspect-video max-h-[480px] w-full rounded-3xl overflow-hidden border border-stone-800 shadow-2xl mb-12">
          <img
            src="/images/summer-in-december.jpg"
            alt="Summer in December by Wild Club Tunisie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14100C]/70 via-transparent to-transparent pointer-events-none" />
        </div>
        {/* Programme en 3 étapes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#1E1812] p-7 rounded-2xl border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-[#F5C518/15] text-[#F5C518] flex items-center justify-center font-black text-lg mb-5">
              01
            </div>
            <h3 className="text-xl font-bold mb-3">
              Jour 1 : Arrivée & Campement
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Départ groupé, installation du camp face à la mer, randonnée
              golden hour sur les falaises et préparation du bois avant la
              tombée de la nuit.
            </p>
          </div>

          <div className="bg-[#1E1812] p-7 rounded-2xl border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-[#F5C518/15] text-[#F5C518] flex items-center justify-center font-black text-lg mb-5">
              02
            </div>
            <h3 className="text-xl font-bold mb-3">La Soirée : Feu & Vibe</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Dîner collectif au feu de bois, musique acoustique, échanges
              autour du feu sous les étoiles et déconnexion totale loin du bruit
              de la ville.
            </p>
          </div>

          <div className="bg-[#1E1812] p-7 rounded-2xl border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-#F5C518/15 text-[#F5C518] flex items-center justify-center font-black text-lg mb-5">
              03
            </div>
            <h3 className="text-xl font-bold mb-3">
              Jour 2 : Sunrise & Leave No Trace
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Café chaud au lever du soleil, exploration côtière, shooting
              photo/vidéo du crew, nettoyage intégral du spot et retour en fin
              d'après-midi.
            </p>
          </div>
        </div>

        {/* Formulaire de pré-inscription membre */}
        <div
          id="inscription"
          className="max-w-3xl mx-auto bg-[#1E1812] border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-black">
              Pré-inscription — Summer in December
            </h3>
            <p className="text-stone-400 text-sm mt-2">
              Remplis ce formulaire rapide pour recevoir les détails logistiques
              et valider ta place dans le crew.
            </p>
          </div>

          {memberSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold">Demande enregistrée !</h4>
              <p className="text-stone-400 text-sm max-w-md mx-auto">
                Ta fiche a été générée vers notre WhatsApp officiel. Nous te
                recontactons très vite pour finaliser l'organisation.
              </p>
              <button
                type="button"
                onClick={() => setMemberSubmitted(false)}
                className="text-[#F5C518] text-sm underline"
              >
                Inscrire une autre personne
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleMemberSubmit}
              className="grid sm:grid-cols-2 gap-5"
            >
              <div>
                <label className="block text-xs font-semibold uppercase text-stone-400 mb-2">
                  Nom & Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Aziz Ben Ali"
                  value={memberForm.fullName}
                  onChange={(e) =>
                    setMemberForm({ ...memberForm, fullName: e.target.value })
                  }
                  className="w-full bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-stone-400 mb-2">
                  Numéro WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: 22 123 456"
                  value={memberForm.whatsapp}
                  onChange={(e) =>
                    setMemberForm({ ...memberForm, whatsapp: e.target.value })
                  }
                  className="w-full bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-stone-400 mb-2">
                  Compte Instagram *
                </label>
                <input
                  type="text"
                  required
                  placeholder="@tonpseudo"
                  value={memberForm.instagram}
                  onChange={(e) =>
                    setMemberForm({ ...memberForm, instagram: e.target.value })
                  }
                  className="w-full bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-stone-400 mb-2">
                  Ville de départ *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Tunis, Sfax, Sousse..."
                  value={memberForm.city}
                  onChange={(e) =>
                    setMemberForm({ ...memberForm, city: e.target.value })
                  }
                  className="w-full bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-stone-400 mb-2">
                  Expérience Camping
                </label>
                <select
                  value={memberForm.level}
                  onChange={(e) =>
                    setMemberForm({ ...memberForm, level: e.target.value })
                  }
                  className="w-full bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
                >
                  <option>Débutant (1ère expérience)</option>
                  <option>Intermédiaire (Quelques sorties)</option>
                  <option>Habitué / Autonome</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-stone-400 mb-2">
                  Matériel (Tente / Sac)
                </label>
                <select
                  value={memberForm.hasTent}
                  onChange={(e) =>
                    setMemberForm({ ...memberForm, hasTent: e.target.value })
                  }
                  className="w-full bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
                >
                  <option>Non, besoin de place en tente</option>
                  <option>Oui, j'ai ma propre tente</option>
                  <option>Oui, et j'ai des places libres</option>
                </select>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#F5C518] hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Envoyer ma demande d'inscription
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
