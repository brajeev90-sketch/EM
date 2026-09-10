import { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Building2, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface HeroSectionProps {
  onQuoteClick: () => void;
  onExploreCoursesClick: () => void;
}

const galleryScenes = [
  {
    id: 'dvr_plan',
    title: 'DVR & Ingegneria di Cantiere',
    subtitle: 'Valutazione Rischi D.Lgs 81/08 • Piani POS / PSC',
    badge: 'Conformità Legale',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1Ueb3PdYNONUGgNlDUjpxs1G0Cg3-GKXc3V0agAh_HQE0oLSNpvjcUcESzQq-v-kjtglPi4MXW19fpBCZyDP4rZZxEoAVPaf57ApxmxoF--_G64aZmWv30pojGDfosjG4z4eslY2MFEkWXC9Yf4scjw39YGGk2tmU7Lb9QQwDZrXOZsdFZS_z5DDXW6v_QsX5wVDYs4wxauhiab9CsLYZm-j5FUhNqde3IhEtUuVDc5xenY_HWPcY82pG4',
    alt: 'Piano operativo di sicurezza e casco protettivo di cantiere E.M Safety',
  },
  {
    id: 'academy',
    title: 'Executive Safety Academy',
    subtitle: 'Formazione Manageriale, RSPP, Preposti e Dirigenti',
    badge: 'Aule Milano & Treviso',
    image: '/src/assets/images/safety_training_classroom_1789049617274.jpg',
    alt: 'Aula moderna di formazione aziendale sulla sicurezza sul lavoro E.M Safety',
  },
  {
    id: 'audit_field',
    title: 'Audit HSE & Verifiche Ispettive',
    subtitle: 'Sopralluoghi tecnici in impianto e check-up normativi',
    badge: 'Lead Auditor ISO',
    image: '/src/assets/images/safety_audit_engineer_1789049638858.jpg',
    alt: 'Ingegnere HSE e auditor di sicurezza E.M Safety durante un sopralluogo in impianto',
  },
  {
    id: 'milano_hub',
    title: 'Sede Operativa Milano',
    subtitle: 'Piazza Gae Aulenti Torre B • Desk Istituzionale',
    badge: 'Hub Metropolitano',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1U5rHu6D5JQvInTDgB3Y1u4xBSjK-ZY98RPntlxkbOHz2_AOt7swxiyhTt4ck_iFEEN7M52BbbJ-22VdiSenK2Vd_qKmAundRCIY4X9WTzPT2Gw84GXb-oxW-hm0s4d8WWSbs0w_sH6Kj3C_E7E_9RdnHa2ftizNHaQ0J7o1Fu7zBXWUQotVdBuUdKmSy1hF_bPW0i1Ie4TmCVJZi1E2vd4YjffY9YT7YgTQAZZslFqEo_DRLTvH-_119A',
    alt: 'Hub direzionale E.M Safety presso Torre Gae Aulenti a Milano',
  },
];

export default function HeroSection({ onQuoteClick, onExploreCoursesClick }: HeroSectionProps) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const currentScene = galleryScenes[activeSceneIndex];

  return (
    <section id="hero" className="w-full bg-[#fbfcfb] pt-8 pb-16 lg:pb-20 relative overflow-hidden border-b border-[#dce5df]">
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#b5ede7]/25 via-[#e8f6f0]/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        {/* Top Trust Badges Pill Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#00271e] font-sans text-[11px] font-bold tracking-wider uppercase rounded-full shadow-2xs border border-[#cbe0d5]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0f3e32]" />
            Accordo Stato-Regioni 2026 &amp; D.Lgs 81/08
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#374941] font-sans text-[11px] font-bold tracking-wider uppercase rounded-full shadow-2xs border border-[#cbe0d5]">
            <Building2 className="w-3.5 h-3.5 text-[#0f3e32]" />
            Sedi Operative: Treviso &amp; Milano Gae Aulenti
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fcf8ed] text-[#856114] font-sans text-[11px] font-bold tracking-wider uppercase rounded-full border border-[#e8ce85]">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            Audit HSE &amp; Sistemi SGI Certificati ISO
          </span>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="font-sans text-[11.5px] font-bold text-[#0f3e32] uppercase tracking-[0.24em]">
                Consulenza Strategica • Formazione d'Eccellenza
              </span>
            </div>

            <h1 className="font-serif text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.12] text-[#00271e] tracking-tight font-bold mb-5">
              Sicurezza sul lavoro e formazione aziendale, con un supporto concreto per la tua impresa.
            </h1>

            <p className="font-sans text-[16.5px] sm:text-[18px] leading-[1.65] text-[#3b4e45] mb-8 max-w-2xl">
              Progettiamo <strong>Sistemi di Gestione Integrati (SGI)</strong> e percorsi formativi conformi al nuovo <strong>Accordo Stato-Regioni 2026</strong>. Trasformiamo gli adempimenti normativi in un vantaggio competitivo tangibile per datori di lavoro, RSPP e dipendenti.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00271e] to-[#0f3e32] text-white font-sans text-[14px] font-bold rounded-lg shadow-md hover:from-[#063328] hover:to-[#175243] hover:shadow-lg transition-all duration-200 active:scale-98"
              >
                <span>Richiedi un preventivo rapido</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreCoursesClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#00271e] font-sans text-[14px] font-bold rounded-lg shadow-2xs hover:bg-[#f2f7f4] border border-[#cbe0d5] transition-all duration-200"
              >
                <span>Esplora i corsi accreditati</span>
                <ArrowUpRight className="w-4 h-4 text-[#0f3e32]" />
              </button>
            </div>

            {/* Proof Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-2 w-full bg-white p-4.5 rounded-xl shadow-xs border border-[#dce5df]">
              <div>
                <span className="font-serif text-[28px] sm:text-[32px] leading-tight text-[#00271e] block font-bold">
                  100%
                </span>
                <span className="font-sans text-[12px] sm:text-[13px] text-[#485c52] font-medium">
                  Conformità D.Lgs 81/08
                </span>
              </div>
              <div className="border-x border-[#e5ebe7] px-2 sm:px-4">
                <span className="font-serif text-[28px] sm:text-[32px] leading-tight text-[#00271e] block font-bold">
                  24-48h
                </span>
                <span className="font-sans text-[12px] sm:text-[13px] text-[#485c52] font-medium">
                  Riscontro preventivi
                </span>
              </div>
              <div>
                <span className="font-serif text-[28px] sm:text-[32px] leading-tight text-[#00271e] block font-bold">
                  2 Hub
                </span>
                <span className="font-sans text-[12px] sm:text-[13px] text-[#485c52] font-medium">
                  Treviso • Milano Torre B
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Collage with Interactive Motion Gallery (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Primary Interactive Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#00271e] border border-[#cbe0d5] group">
              {/* Dynamic Image with Cross-fade transition */}
              <img
                key={currentScene.id}
                alt={currentScene.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                src={currentScene.image}
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#00271e]/95 via-[#00271e]/60 to-transparent text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-sans text-[10px] font-bold text-[#b5ede7] uppercase tracking-wider bg-white/15 px-2 py-0.5 rounded backdrop-blur-xs">
                    {currentScene.badge}
                  </span>
                </div>
                <h3 className="font-serif text-[17px] sm:text-[19px] font-bold leading-tight mb-0.5 text-white">
                  {currentScene.title}
                </h3>
                <p className="font-sans text-[12px] text-[#cbe0d5] leading-snug">
                  {currentScene.subtitle}
                </p>
              </div>

              {/* Top Floating Badge with live pulse */}
              <div className="absolute top-3 right-3 bg-[#00271e]/85 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/20 text-[11px] font-sans font-bold flex items-center gap-2 shadow-lg animate-float-subtle">
                <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse"></span>
                <span>Audit Status: Conforme</span>
              </div>
            </div>

            {/* Gallery Navigation Pills below image */}
            <div className="flex items-center justify-between gap-1.5 mt-3 bg-white p-1.5 rounded-xl border border-[#dce5df] shadow-2xs">
              {galleryScenes.map((scene, idx) => {
                const isActive = idx === activeSceneIndex;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setActiveSceneIndex(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-sans font-semibold transition-all text-center truncate ${
                      isActive
                        ? 'bg-[#00271e] text-white shadow-xs font-bold'
                        : 'text-[#485c52] hover:bg-[#f0f6f2] hover:text-[#00271e]'
                    }`}
                  >
                    {idx === 0 && 'DVR & Piani'}
                    {idx === 1 && 'Academy'}
                    {idx === 2 && 'Audit HSE'}
                    {idx === 3 && 'Milano Hub'}
                  </button>
                );
              })}
            </div>

            {/* Floating Secondary Motion Card (Milano Executive Hub) */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white p-3.5 rounded-xl shadow-xl border border-[#dce5df] max-w-[245px] items-center gap-3 animate-float-subtle">
              <div className="w-13 h-13 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-[#cbe0d5]">
                <img
                  alt="Sede Operativa Milano Gae Aulenti"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1U5rHu6D5JQvInTDgB3Y1u4xBSjK-ZY98RPntlxkbOHz2_AOt7swxiyhTt4ck_iFEEN7M52BbbJ-22VdiSenK2Vd_qKmAundRCIY4X9WTzPT2Gw84GXb-oxW-hm0s4d8WWSbs0w_sH6Kj3C_E7E_9RdnHa2ftizNHaQ0J7o1Fu7zBXWUQotVdBuUdKmSy1hF_bPW0i1Ie4TmCVJZi1E2vd4YjffY9YT7YgTQAZZslFqEo_DRLTvH-_119A"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[9.5px] font-bold text-[#0f3e32] uppercase tracking-wider">
                  Milano Direzionale
                </span>
                <span className="font-sans text-[13px] leading-tight text-[#00271e] font-bold">
                  Torre Gae Aulenti B
                </span>
                <span className="font-sans text-[11px] text-[#697d73] mt-0.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  Aule &amp; Executive Desk
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

