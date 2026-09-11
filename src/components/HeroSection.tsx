import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Award,
  Activity,
  Zap,
  Layers,
  Image as ImageIcon,
} from 'lucide-react';
import EmSafetyLogo from './EmSafetyLogo';
import HolographicSafetyCore from './HolographicSafetyCore';
import { soundFX } from '../utils/audio';

interface HeroSectionProps {
  onQuoteClick: () => void;
  onExploreCoursesClick: () => void;
}

const galleryScenes = [
  {
    id: 'dvr_plan',
    title: 'DVR & Ingegneria di Cantiere',
    subtitle: 'Valutazione Rischi D.Lgs 81/08 • Piani POS / PSC Digitale',
    badge: 'Conformità Legale 100%',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1Ueb3PdYNONUGgNlDUjpxs1G0Cg3-GKXc3V0agAh_HQE0oLSNpvjcUcESzQq-v-kjtglPi4MXW19fpBCZyDP4rZZxEoAVPaf57ApxmxoF--_G64aZmWv30pojGDfosjG4z4eslY2MFEkWXC9Yf4scjw39YGGk2tmU7Lb9QQwDZrXOZsdFZS_z5DDXW6v_QsX5wVDYs4wxauhiab9CsLYZm-j5FUhNqde3IhEtUuVDc5xenY_HWPcY82pG4',
    alt: 'Piano operativo di sicurezza e casco protettivo di cantiere E.M Safety',
    telemetry: 'POS.REV_2026 // SCANSIONE OK',
  },
  {
    id: 'academy',
    title: 'Executive Safety Academy',
    subtitle: 'Formazione Manageriale, RSPP, Preposti e Dirigenti 4.0',
    badge: 'Aule Treviso & Milano',
    image: '/src/assets/images/safety_training_classroom_1789049617274.jpg',
    alt: 'Aula moderna di formazione aziendale sulla sicurezza sul lavoro E.M Safety',
    telemetry: 'ACCORDO_SR_2026 // AULE ATTIVE',
  },
  {
    id: 'audit_field',
    title: 'Audit HSE & Verifiche Ispettive',
    subtitle: 'Sopralluoghi tecnici in impianto e check-up strumentali',
    badge: 'Lead Auditor ISO 45001',
    image: '/src/assets/images/safety_audit_engineer_1789049638858.jpg',
    alt: 'Ingegnere HSE e auditor di sicurezza E.M Safety durante un sopralluogo in impianto',
    telemetry: 'AUDIT_GATEWAY // ZERO NON-CONF.',
  },
  {
    id: 'milano_hub',
    title: 'Hub Strategico Milano Gae Aulenti',
    subtitle: 'Torre B • Desk Istituzionale & Formazione Executive',
    badge: 'Hub Metropolitano',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1U5rHu6D5JQvInTDgB3Y1u4xBSjK-ZY98RPntlxkbOHz2_AOt7swxiyhTt4ck_iFEEN7M52BbbJ-22VdiSenK2Vd_qKmAundRCIY4X9WTzPT2Gw84GXb-oxW-hm0s4d8WWSbs0w_sH6Kj3C_E7E_9RdnHa2ftizNHaQ0J7o1Fu7zBXWUQotVdBuUdKmSy1hF_bPW0i1Ie4TmCVJZi1E2vd4YjffY9YT7YgTQAZZslFqEo_DRLTvH-_119A',
    alt: 'Hub direzionale E.M Safety presso Torre Gae Aulenti a Milano',
    telemetry: 'SEDE MILANO // ATTIVA',
  },
];

export default function HeroSection({ onQuoteClick, onExploreCoursesClick }: HeroSectionProps) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [visualMode, setVisualMode] = useState<'hologram' | 'gallery'>('gallery');
  const currentScene = galleryScenes[activeSceneIndex];

  // Auto-advance scenes with smooth timing
  useEffect(() => {
    if (visualMode !== 'gallery') return;
    const timer = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % galleryScenes.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [visualMode]);

  const handleSceneClick = (idx: number) => {
    soundFX.playLaser();
    setActiveSceneIndex(idx);
  };

  const handleModeSwitch = (mode: 'hologram' | 'gallery') => {
    soundFX.playLaser();
    setVisualMode(mode);
  };

  return (
    <section id="hero" className="w-full pt-6 pb-16 lg:pb-24 relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-200">
      {/* Subtle Background Pattern in strictly Blue & Gold */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(11,37,69,0.06)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-50 text-[#0b2545] font-sans text-[12px] font-bold tracking-tight rounded-full border border-blue-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            Accordo Stato-Regioni 2026 • D.Lgs 81/08
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#0b2545] font-sans text-[12px] font-semibold rounded-full border border-slate-200 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-[#0b2545]" />
            Sedi Operative: Treviso &amp; Milano Gae Aulenti
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-400/15 text-[#0b2545] font-sans text-[12px] font-bold rounded-full border border-amber-400/40 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            Audit HSE &amp; Sistemi Integrati SGI ISO
          </span>
        </motion.div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Copy (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4 z-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="font-mono text-[11.5px] font-bold text-[#0b2545] uppercase tracking-[0.2em]">
                CONSULENZA TECNICA &amp; FORMAZIONE ACCREDITATA
              </span>
            </div>

            {/* Headline with 100% visibility on white background, strictly Dark Navy and Golden Yellow */}
            <h1 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.08] text-[#0b2545] tracking-tight font-extrabold mb-5">
              L'Ingegneria della Sicurezza Aziendale nell'Era{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b2545] via-[#1d4ed8] to-amber-500 underline decoration-amber-400 decoration-wavy decoration-2">
                4.0
              </span>
            </h1>

            <p className="font-sans text-[16.5px] sm:text-[18px] leading-[1.65] text-slate-600 mb-6 max-w-2xl">
              Progettiamo <strong className="text-[#0b2545] font-bold">Sistemi di Gestione Integrati (SGI)</strong>, assumiamo incarichi{' '}
              <strong className="text-[#0b2545] font-bold">RSPP esterni</strong> e abilitiamo il personale secondo il{' '}
              <strong className="text-[#0b2545] font-bold bg-amber-400/20 px-1.5 py-0.5 rounded border border-amber-400/40">Nuovo Accordo Stato-Regioni 2026</strong>.
              Garantiamo scudo penale per il Datore di Lavoro, conformità D.Lgs 81/08 e riduzione del premio INAIL.
            </p>

            {/* Official Brand Lockup: Logo with Slogan */}
            <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-blue-200 shadow-md mb-7 w-full max-w-xl transition-all hover:border-amber-400">
              <EmSafetyLogo
                variant="navy"
                size="md"
                showTagline={true}
                sloganPlacement="below"
              />
            </div>

            {/* High-Contrast CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-9">
              <button
                type="button"
                onClick={() => {
                  soundFX.playLaser();
                  onQuoteClick();
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0b2545] text-white font-sans text-[15px] font-bold shadow-lg hover:bg-[#07192e] transition-all cursor-pointer border-b-2 border-amber-400 group"
              >
                <span>Richiedi Check-up Gratuito 24h</span>
                <ArrowRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => {
                  soundFX.playLaser();
                  onExploreCoursesClick();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-[#0b2545] font-sans text-[15px] font-bold border-2 border-blue-200 hover:border-[#0b2545] hover:bg-blue-50/50 shadow-sm transition-all cursor-pointer"
              >
                <span>Catalogo Corsi 2026</span>
                <ArrowUpRight className="w-4 h-4 text-[#0b2545]" />
              </button>
            </div>

            {/* Trust Metrics Bar with strict Navy and Gold typography */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200 w-full max-w-lg">
              <div>
                <span className="font-mono text-[28px] sm:text-[34px] leading-tight text-[#0b2545] block font-black">
                  98.2%
                </span>
                <span className="font-sans text-[11.5px] text-slate-600 font-bold uppercase tracking-wider block mt-0.5">
                  Conformità Audit
                </span>
              </div>

              <div className="border-x border-slate-200 px-3 sm:px-5">
                <span className="font-mono text-[28px] sm:text-[34px] leading-tight text-amber-500 block font-black">
                  &lt; 24h
                </span>
                <span className="font-sans text-[11.5px] text-slate-600 font-bold uppercase tracking-wider block mt-0.5">
                  Riscontro Tecnico
                </span>
              </div>

              <div>
                <span className="font-mono text-[28px] sm:text-[34px] leading-tight text-[#0b2545] block font-black">
                  -28%
                </span>
                <span className="font-sans text-[11.5px] text-slate-600 font-bold uppercase tracking-wider block mt-0.5">
                  Sgravio INAIL OT23
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Stage (6 cols) with Interactive Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            {/* Visual Mode Selector Tabs (Gallery vs 3D Hologram Simulator) */}
            <div className="flex items-center justify-between mb-3 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleModeSwitch('gallery')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-sans text-[12.5px] font-bold transition-all cursor-pointer ${
                    visualMode === 'gallery'
                      ? 'bg-[#0b2545] text-amber-300 shadow-sm'
                      : 'text-slate-600 hover:text-[#0b2545] hover:bg-slate-100'
                  }`}
                >
                  <ImageIcon className="w-4 h-4 text-amber-400" />
                  <span>Galleria Operativa</span>
                </button>

                <button
                  onClick={() => handleModeSwitch('hologram')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-sans text-[12.5px] font-bold transition-all cursor-pointer ${
                    visualMode === 'hologram'
                      ? 'bg-[#0b2545] text-amber-300 shadow-sm'
                      : 'text-slate-600 hover:text-[#0b2545] hover:bg-slate-100'
                  }`}
                >
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Simulatore 3D Core</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                </button>
              </div>

              <span className="font-mono text-[11px] text-[#0b2545] font-bold pr-2 hidden sm:inline-block">
                E.M SAFETY 4.0
              </span>
            </div>

            {/* Display Either Photographic Animated Carousel OR Full Holographic Safety Core */}
            {visualMode === 'hologram' ? (
              <div className="w-full">
                <HolographicSafetyCore />
              </div>
            ) : (
              <div>
                {/* Primary Image Frame with Navy & Gold Accents */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-900 border-2 border-[#0b2545] group">
                  {/* Dynamic Image with Cross-fade */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentScene.id}
                      alt={currentScene.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      src={currentScene.image}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>

                  {/* Gradient Dark Overlay Details strictly in Navy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545] via-[#0b2545]/40 to-transparent pointer-events-none" />

                  {/* Live Status Badge */}
                  <div className="absolute top-4 left-4 bg-[#0b2545]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full border border-amber-400/40 text-[11px] font-mono font-bold flex items-center gap-2 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span className="text-amber-300">{currentScene.telemetry}</span>
                  </div>

                  {/* Text Overlay Details */}
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[10.5px] font-bold text-amber-300 uppercase tracking-wider bg-[#0b2545]/80 backdrop-blur-sm px-2.5 py-0.5 rounded border border-amber-400/40">
                        {currentScene.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-[19px] sm:text-[22px] font-bold leading-tight mb-1 text-white">
                      {currentScene.title}
                    </h3>
                    <p className="font-sans text-[13px] text-slate-200 leading-snug">
                      {currentScene.subtitle}
                    </p>
                  </div>
                </div>

                {/* Scene Navigation Tabs below image */}
                <div className="grid grid-cols-4 gap-2 mt-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
                  {galleryScenes.map((scene, idx) => {
                    const isActive = idx === activeSceneIndex;
                    return (
                      <button
                        key={scene.id}
                        onClick={() => handleSceneClick(idx)}
                        className={`px-2 py-2 rounded-xl text-center font-mono text-[11.5px] font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#0b2545] text-amber-300 shadow-sm'
                            : 'text-slate-500 hover:text-[#0b2545] hover:bg-slate-100'
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
