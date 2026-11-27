"use client";

import React, { useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";

export default function SponsorsSection() {
  const [sponsorForm, setSponsorForm] = useState({
    company: "",
    contactName: "",
    phone: "",
    pack: "Pack Camp Partner (1 200 DT)",
    message: "",
  });
  const [sponsorSubmitted, setSponsorSubmitted] = useState(false);

  // Remplace par ton numéro WhatsApp (format 216XXXXXXXX sans + ni espaces)
  const WHATSAPP_NUMBER = "21600000000";

  const handleSponsorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSponsorSubmitted(true);

    const text = `Bonjour Wild Club, demande de partenariat pour *Summer in December* :%0A- Marque : ${sponsorForm.company}%0A- Contact : ${sponsorForm.contactName}%0A- Téléphone : ${sponsorForm.phone}%0A- Pack : ${sponsorForm.pack}%0A- Note : ${sponsorForm.message}`;
    window.open(`https://wa.me{WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section
      id="sponsors"
      className="py-20 bg-[#14100C] text-stone-100 border-t border-stone-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête + Téléchargement PDF */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-#F5C518 font-bold text-sm uppercase tracking-widest">
              Partenariats & Marques
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2">
              SPONSORISEZ L'AVENTURE
            </h2>
            <p className="text-stone-400 mt-3">
              Touchez une audience jeune (18–30 ans), active et engagée, tout en
              obtenant du contenu vidéo et photo professionnel tourné en
              conditions réelles.
            </p>
          </div>

          {/* Place 'dossier-sponsoring-wildclub.pdf' dans ton dossier /public */}
          {/* <a
            href="/dossier-sponsoring-wildclub.pdf"
            download
            className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-white text-stone-950 font-bold px-6 py-4 rounded-xl transition shrink-0"
          >
            <Download className="w-5 h-5 text-orange-600" />
            Télécharger le Dossier Sponsoring (PDF)
          </a> */}
        </div>

        {/* Les 3 Packs en DT */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Pack 1 */}
          {/* <div className="bg-[#1E1812] border border-stone-800 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Dotation Produit
              </span>
              <h3 className="text-2xl font-black mt-1">Pack Nature</h3>
              <div className="text-2xl font-bold text-orange-400 mt-3">
                Équivalent 500 – 800 DT
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Food, café, boissons, matériel outdoor ou bons carburant
              </p>

              <ul className="mt-6 space-y-3 text-sm text-stone-300">
                <li>✓ Testing & placement produit sur le camp</li>
                <li>✓ Apparition dans le Reel récapitulatif</li>
                <li>✓ 5 photos HD produits en extérieur</li>
                <li>✓ Tags stories & post récap @wildclub.tn</li>
              </ul>
            </div>

            <a
              href="#contact-sponsor"
              onClick={() =>
                setSponsorForm({
                  ...sponsorForm,
                  pack: "Pack Nature (Dotation)",
                })
              }
              className="mt-8 block text-center py-3 rounded-xl border border-stone-700 hover:border-#F5C518 text-sm font-semibold transition"
            >
              Choisir ce pack
            </a>
          </div> */}

          {/* Pack 2 */}
          {/* <div className="bg-[#18221D] border-2 border-#F5C518 rounded-2xl p-7 flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 bg-#F5C518 text-white text-xs font-bold px-3 py-1 rounded-full">
              Le plus demandé
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Sponsor d'Édition
              </span>
              <h3 className="text-2xl font-black mt-1">Pack Camp Partner</h3>
              <div className="text-3xl font-black text-white mt-3">
                1 200 DT
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Cash ou mix cash + dotation transport/logistique
              </p>

              <ul className="mt-6 space-y-3 text-sm text-stone-200">
                <li>
                  ✓ <strong>1 Reel dédié</strong> (30–45s) en conditions réelles
                </li>
                <li>
                  ✓ <strong>12 photos HD</strong> libres de droits (produits &
                  lifestyle)
                </li>
                <li>✓ Zone dédiée + drapeaux / roll-up sur le camp</li>
                <li>✓ Stories live + post dédié + lien en bio</li>
              </ul>
            </div>

            <a
              href="#contact-sponsor"
              onClick={() =>
                setSponsorForm({
                  ...sponsorForm,
                  pack: "Pack Camp Partner (1 200 DT)",
                })
              }
              className="mt-8 block text-center py-3 rounded-xl bg-#F5C518 hover:bg-orange-600 text-white text-sm font-bold transition"
            >
              Devenir Camp Partner
            </a>
          </div> */}

          {/* Pack 3 */}
          {/* <div className="bg-[#1E1812] border border-stone-800 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Exclusivité Édition
              </span>
              <h3 className="text-2xl font-black mt-1">Pack Wild Title</h3>
              <div className="text-3xl font-black text-amber-300 mt-3">
                2 500 DT
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Sponsor Principal — Naming officiel de l'événement
              </p>

              <ul className="mt-6 space-y-3 text-sm text-stone-300">
                <li>
                  ✓ Co-branding : <strong>Summer in December x [Marque]</strong>
                </li>
                <li>
                  ✓ <strong>Aftermovie officiel</strong> +{" "}
                  <strong>2 Reels dédiés</strong>
                </li>
                <li>
                  ✓ <strong>25 photos HD</strong> shooting complet marque & crew
                </li>
                <li>✓ Exclusivité sectorielle & campagne complète</li>
              </ul>
            </div>

            <a
              href="#contact-sponsor"
              onClick={() =>
                setSponsorForm({
                  ...sponsorForm,
                  pack: "Pack Wild Title (2 500 DT)",
                })
              }
              className="mt-8 block text-center py-3 rounded-xl border border-stone-700 hover:border-amber-400 text-sm font-semibold transition"
            >
              Réserver l'exclusivité
            </a>
          </div> */}
        </div>

        {/* Formulaire rapide marque */}
        <div
          id="contact-sponsor"
          className="max-w-3xl mx-auto bg-[#1E1812] border border-stone-800 rounded-3xl p-6 sm:p-10"
        >
          <h3 className="text-2xl font-black mb-2">
            Discutons d'un partenariat
          </h3>
          <p className="text-stone-400 text-sm mb-6">
            Laissez vos coordonnées ou sélectionnez une formule pour recevoir
            une proposition adaptée à votre marque.
          </p>

          {sponsorSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <p className="font-bold">
                Merci ! Votre demande de sponsoring est prête sur WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setSponsorSubmitted(false)}
                className="text-orange-400 text-sm underline"
              >
                Modifier ma demande
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSponsorSubmit}
              className="grid sm:grid-cols-2 gap-4"
            >
              <input
                type="text"
                required
                placeholder="Nom de l'entreprise / Marque *"
                value={sponsorForm.company}
                onChange={(e) =>
                  setSponsorForm({ ...sponsorForm, company: e.target.value })
                }
                className="bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
              />
              <input
                type="text"
                required
                placeholder="Votre nom & fonction *"
                value={sponsorForm.contactName}
                onChange={(e) =>
                  setSponsorForm({
                    ...sponsorForm,
                    contactName: e.target.value,
                  })
                }
                className="bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
              />
              <input
                type="tel"
                required
                placeholder="Téléphone / WhatsApp *"
                value={sponsorForm.phone}
                onChange={(e) =>
                  setSponsorForm({ ...sponsorForm, phone: e.target.value })
                }
                className="bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
              />
              {/* <select
                value={sponsorForm.pack}
                onChange={(e) =>
                  setSponsorForm({ ...sponsorForm, pack: e.target.value })
                }
                className="bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
              >
                <option>Pack Nature (Dotation)</option>
                <option>Pack Camp Partner (1 200 DT)</option>
                <option>Pack Wild Title (2 500 DT)</option>
                <option>Partenariat sur mesure</option>
              </select> */}
              <textarea
                rows={3}
                placeholder="Type de collaboration souhaitée (Transport, Food/Café, Matériel, Cash...)"
                value={sponsorForm.message}
                onChange={(e) =>
                  setSponsorForm({ ...sponsorForm, message: e.target.value })
                }
                className="sm:col-span-2 bg-[#0B0F0D] border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-#F5C518"
              />
              <button>Contacter l'équipe Partenariats</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
