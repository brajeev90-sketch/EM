import { ArrowRight, ShieldAlert, GraduationCap, Headphones, CheckCircle2, Sparkles } from 'lucide-react';
import InteractiveRiskRoadmap from './InteractiveRiskRoadmap';

interface NeedsSectionProps {
  onSelectOption: (type: 'consulting' | 'courses' | 'support') => void;
  onSelectSectorQuote?: (sectorName: string) => void;
}

export default function NeedsSection({ onSelectOption, onSelectSectorQuote }: NeedsSectionProps) {
  const handleSectorQuote = (sectorName: string) => {
    if (onSelectSectorQuote) {
      onSelectSectorQuote(sectorName);
    } else {
      onSelectOption('consulting');
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#dce5df] relative">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="font-sans text-[11px] font-bold text-[#0f3e32] uppercase tracking-[0.22em] block">
                Orientamento Immediato &amp; Settoriale
              </span>
            </div>
            <h2 className="font-serif text-[32px] sm:text-[42px] text-[#00271e] font-bold tracking-tight">
              Come possiamo supportare la tua impresa?
            </h2>
          </div>
          <p className="font-sans text-[15px] text-[#41534b] max-w-md">
            Individua il percorso di conformità più idoneo: soluzioni specialistiche per Datori di Lavoro, RSPP, responsabili QHSE e direzioni HR con assistenza continuativa.
          </p>
        </div>

        {/* 3 Needs Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Option A: Consulenza & SGI */}
          <div
            onClick={() => onSelectOption('consulting')}
            className="group cursor-pointer bg-[#fbfcfb] hover:bg-[#f0f6f2] border border-[#dce5df] hover:border-[#0f3e32] transition-all duration-300 p-8 rounded-2xl flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1"
          >
            <div>
              <div className="w-13 h-13 rounded-xl bg-white border border-[#dce5df] text-[#00271e] flex items-center justify-center mb-6 shadow-2xs group-hover:bg-[#00271e] group-hover:text-[#b5ede7] group-hover:scale-105 transition-all">
                <ShieldAlert className="w-6 h-6 text-[#0f3e32] group-hover:text-[#b5ede7] transition-colors" />
              </div>
              <span className="font-sans text-[11px] font-bold text-[#0f3e32] uppercase tracking-wider block mb-1">
                Consulenza Direzionale &amp; DVR
              </span>
              <h3 className="font-serif text-[22px] font-bold text-[#00271e] mb-3 leading-snug">
                Consulenza aziendale &amp; Sistemi HSE
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-[#41534b] mb-6">
                Progettazione e mantenimento di Sistemi Qualità, Ambiente, Sicurezza (SGI). Audit ispettivi, DVR specialistici, Valutazione Rischi strumentale e assunzione incarico RSPP esterno qualificato.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e2eae5] flex items-center justify-between text-[#00271e] font-sans text-[13.5px] font-bold">
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5 text-[#0f3e32]">
                <span>Esplora la consulenza</span>
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="font-sans text-[10.5px] font-bold px-2 py-0.5 rounded bg-[#eef5f1] text-[#0f3e32] uppercase tracking-wider">
                D.Lgs 81/08
              </span>
            </div>
          </div>

          {/* Option B: Formazione & Corsi Obbligatori */}
          <div
            onClick={() => onSelectOption('courses')}
            className="group cursor-pointer bg-[#fbfcfb] hover:bg-[#f0f6f2] border border-[#dce5df] hover:border-[#0f3e32] transition-all duration-300 p-8 rounded-2xl flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1"
          >
            <div>
              <div className="w-13 h-13 rounded-xl bg-white border border-[#dce5df] text-[#00271e] flex items-center justify-center mb-6 shadow-2xs group-hover:bg-[#00271e] group-hover:text-[#b5ede7] group-hover:scale-105 transition-all">
                <GraduationCap className="w-6 h-6 text-[#0f3e32] group-hover:text-[#b5ede7] transition-colors" />
              </div>
              <span className="font-sans text-[11px] font-bold text-[#0f3e32] uppercase tracking-wider block mb-1">
                Centro Accreditato • Aula &amp; FAD
              </span>
              <h3 className="font-serif text-[22px] font-bold text-[#00271e] mb-3 leading-snug">
                Formazione &amp; Corsi Obbligatori
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-[#41534b] mb-6">
                Catalogo completo conforme al nuovo Accordo Stato-Regioni 2026: Formazione Lavoratori (Basso, Medio, Alto rischio), Preposti, Dirigenti, RLS, Antincendio e Primo Soccorso con rilascio attestati immediato.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e2eae5] flex items-center justify-between text-[#00271e] font-sans text-[13.5px] font-bold">
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5 text-[#0f3e32]">
                <span>Vedi catalogo corsi</span>
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="font-sans text-[10.5px] font-bold px-2 py-0.5 rounded bg-[#fcf8ed] text-[#856114] border border-[#e8ce85] uppercase tracking-wider">
                Attestati Validi
              </span>
            </div>
          </div>

          {/* Option C: Supporto & Monitoraggio Continuo */}
          <div
            onClick={() => onSelectOption('support')}
            className="group cursor-pointer bg-[#fbfcfb] hover:bg-[#f0f6f2] border border-[#dce5df] hover:border-[#0f3e32] transition-all duration-300 p-8 rounded-2xl flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1"
          >
            <div>
              <div className="w-13 h-13 rounded-xl bg-white border border-[#dce5df] text-[#00271e] flex items-center justify-center mb-6 shadow-2xs group-hover:bg-[#00271e] group-hover:text-[#b5ede7] group-hover:scale-105 transition-all">
                <Headphones className="w-6 h-6 text-[#0f3e32] group-hover:text-[#b5ede7] transition-colors" />
              </div>
              <span className="font-sans text-[11px] font-bold text-[#0f3e32] uppercase tracking-wider block mb-1">
                Scadenziario &amp; Tutela Legale
              </span>
              <h3 className="font-serif text-[22px] font-bold text-[#00271e] mb-3 leading-snug">
                Supporto &amp; Monitoraggio Continuo
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-[#414945] mb-6">
                Un affiancamento costante per non perdere mai una scadenza formativa o di rinnovo documentale. Monitoraggio legislativo attivo con alert preventivi e supporto in caso di ispezione SPISAL / ATS.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e2eae5] flex items-center justify-between text-[#00271e] font-sans text-[13.5px] font-bold">
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5 text-[#0f3e32]">
                <span>Contatta un referente</span>
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="font-sans text-[10.5px] font-bold px-2 py-0.5 rounded bg-[#eef5f1] text-[#0f3e32] uppercase tracking-wider">
                Helpdesk H24/48
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Risk Roadmap Graphic */}
        <div className="pt-4">
          <InteractiveRiskRoadmap onSelectSectorQuote={handleSectorQuote} />
        </div>
      </div>
    </section>
  );
}

