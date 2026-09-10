import { ArrowRight, Layers, ClipboardCheck, Users, BarChart3, CheckCircle2, Sparkles } from 'lucide-react';
import SafetyRadarGraphic from './SafetyRadarGraphic';

interface MethodologySectionProps {
  onOpenGapAnalysis: () => void;
}

export default function MethodologySection({ onOpenGapAnalysis }: MethodologySectionProps) {
  return (
    <section id="metodologia" className="w-full bg-[#fbfcfb] py-16 lg:py-24 border-b border-[#dce5df] relative">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
            <span className="font-sans text-[11.5px] font-bold text-[#0f3e32] uppercase tracking-[0.22em]">
              Metodologia E.M Safety &amp; Ingegneria HSE
            </span>
          </div>
          <h2 className="font-serif text-[32px] sm:text-[42px] text-[#00271e] font-bold leading-[1.18] mb-4">
            Sistemi di gestione integrati per generare valore reale, non burocrazia sterile.
          </h2>
          <p className="font-sans text-[16.5px] text-[#41534b] leading-relaxed">
            I nostri auditor e RSPP qualificati affiancano il top management nella strutturazione di protocolli certificati ISO 45001, 14001 e 9001, progettati per ridurre i tassi di infortunio e azzerare i rischi di responsabilità penale e amministrativa d'impresa (D.Lgs. 231/01).
          </p>
        </div>

        {/* 4 Core Pillars Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-xs border border-[#dce5df] flex flex-col justify-between hover:border-[#0f3e32] hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[28px] font-serif font-bold text-[#0f3e32]">01</span>
                <div className="w-11 h-11 rounded-xl bg-[#eef5f1] flex items-center justify-center text-[#0f3e32] group-hover:bg-[#00271e] group-hover:text-[#b5ede7] transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-[20px] font-bold text-[#00271e] mb-2">
                Sistemi di Gestione Integrati (SGI)
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-[#41534b]">
                Progettiamo e implementiamo sistemi integrati Qualità (ISO 9001), Ambiente (ISO 14001), Energia (ISO 50001) e Sicurezza (ISO 45001) — costruiti per essere effettivamente usati dall'organico operativo e superare a pieni voti ogni verifica degli enti accreditati.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#e5ebe7] flex items-center gap-2 text-[#0f3e32] font-sans text-[13px] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#0f3e32]" />
              <span>Riduzione dei costi di non-conformità e sgravi INAIL OT23</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-xs border border-[#dce5df] flex flex-col justify-between hover:border-[#0f3e32] hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[28px] font-serif font-bold text-[#0f3e32]">02</span>
                <div className="w-11 h-11 rounded-xl bg-[#eef5f1] flex items-center justify-center text-[#0f3e32] group-hover:bg-[#00271e] group-hover:text-[#b5ede7] transition-colors">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-[20px] font-bold text-[#00271e] mb-2">
                Audit &amp; Verifiche Ispettive in Campo
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-[#41534b]">
                Conduciamo audit interni e di seconda parte (su fornitori critici e cantieri) per misurare l'efficacia reale del sistema di gestione, identificare tempestivamente le aree di miglioramento e prevenire ogni prescrizione degli organi di vigilanza (SPISAL, ATS, ITL).
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#e5ebe7] flex items-center gap-2 text-[#0f3e32] font-sans text-[13px] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#0f3e32]" />
              <span>Checklist di verifica conformi ai più severi protocolli Accredia</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-xs border border-[#dce5df] flex flex-col justify-between hover:border-[#0f3e32] hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[28px] font-serif font-bold text-[#0f3e32]">03</span>
                <div className="w-11 h-11 rounded-xl bg-[#eef5f1] flex items-center justify-center text-[#0f3e32] group-hover:bg-[#00271e] group-hover:text-[#b5ede7] transition-colors">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-[20px] font-bold text-[#00271e] mb-2">
                Cultura Organizzativa e Formazione Continua
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-[#41534b]">
                Un sistema funziona quando le persone lo capiscono e lo condividono. Supportiamo le organizzazioni nel trasformare la compliance da adempimento burocratico passivo a comportamento consapevole e responsabile dei preposti, dirigenti e operatori.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#e5ebe7] flex items-center gap-2 text-[#0f3e32] font-sans text-[13px] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#0f3e32]" />
              <span>Coinvolgimento attivo e addestramento pratico esperienziale</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-xs border border-[#dce5df] flex flex-col justify-between hover:border-[#0f3e32] hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[28px] font-serif font-bold text-[#0f3e32]">04</span>
                <div className="w-11 h-11 rounded-xl bg-[#eef5f1] flex items-center justify-center text-[#0f3e32] group-hover:bg-[#00271e] group-hover:text-[#b5ede7] transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-[20px] font-bold text-[#00271e] mb-2">
                Monitoraggio Normativo &amp; KPI di Performance
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-[#41534b]">
                Definiamo cruscotti di indicatori HSE per rendere visibile il valore economico e operativo generato: zero infortuni, efficienza energetica, rispetto delle scadenze e piena tracciabilità dei patentini del personale in un unico scadenziario.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#e5ebe7] flex items-center gap-2 text-[#0f3e32] font-sans text-[13px] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#0f3e32]" />
              <span>Dashboard direzionali personalizzate per CdA e Datori di Lavoro</span>
            </div>
          </div>
        </div>

        {/* Dynamic Graphic Radar: Interactive HSE & SGI Infographic */}
        <div className="mb-12">
          <SafetyRadarGraphic onOpenAuditModal={onOpenGapAnalysis} />
        </div>

        {/* Action Callout Banner */}
        <div className="bg-gradient-to-r from-[#00271e] via-[#083327] to-[#0f3e32] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-[#2dd4bf]/20">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="font-sans text-[11px] font-bold text-[#b5ede7] uppercase tracking-wider">
                Audit Preliminare • Gap Analysis Normativa
              </span>
            </div>
            <h3 className="font-serif text-[24px] sm:text-[28px] text-white font-bold mb-1.5">
              Vuoi verificare lo stato del tuo attuale sistema di sicurezza?
            </h3>
            <p className="font-sans text-[14px] text-[#cbe0d5] max-w-xl">
              I nostri tecnici qualificati eseguono un check-up immediato per mappare le scadenze imminenti e le aree di potenziale non conformità D.Lgs 81/08.
            </p>
          </div>
          <button
            onClick={onOpenGapAnalysis}
            className="px-6 py-3.5 bg-[#b5ede7] text-[#00201e] font-sans text-[14px] rounded-xl font-bold hover:bg-white transition-all duration-200 flex-shrink-0 flex items-center gap-2 shadow-md active:scale-98"
          >
            <span>Avvia Check-up di Conformità</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

