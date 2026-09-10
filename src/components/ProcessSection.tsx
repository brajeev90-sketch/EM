import { PhoneCall, CalendarDays, Award, ShieldCheck } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '1',
      phase: 'Fase Preliminare',
      title: 'Confronto iniziale & analisi del fabbisogno',
      description:
        'Analizziamo l\'assetto societario, i DVR vigenti, le matricole e le mansioni per identificare le priorità di conformità o certificazione.',
      icon: <PhoneCall className="w-5 h-5 text-[#5E8276]" />,
    },
    {
      num: '2',
      phase: 'Pianificazione',
      title: 'Piano concordato & calendarizzazione flessibile',
      description:
        'Definiamo un cronoprogramma sostenibile per la produzione aziendale: sessioni frazionate, date dedicate in loco o aule virtuali.',
      icon: <CalendarDays className="w-5 h-5 text-[#5E8276]" />,
    },
    {
      num: '3',
      phase: 'Esecuzione',
      title: 'Esecuzione qualificata con docenti ed esperti',
      description:
        'Interventi guidati esclusivamente da tecnici qualificati con oltre 5 anni di esperienza di cantiere e docenti con abilitazione ministeriale.',
      icon: <Award className="w-5 h-5 text-[#5E8276]" />,
    },
    {
      num: '4',
      phase: 'Chiusura & Tutela Continua',
      title: 'Rilascio documentale & promemoria scadenze',
      description:
        'Invio rapido di attestati conformi e verbali di prova. Inserimento nel registro scadenze E.M Safety con avviso per futuri aggiornamenti.',
      icon: <ShieldCheck className="w-5 h-5 text-[#5E8276]" />,
    },
  ];

  return (
    <section id="fasi" className="w-full bg-[#fbfcfb] py-16 lg:py-24 border-b border-[#dce5df] relative">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
            <span className="font-sans text-[11px] font-bold text-[#0f3e32] uppercase tracking-[0.22em] block">
              Processo Operativo Certificato
            </span>
          </div>
          <h2 className="font-serif text-[32px] sm:text-[42px] text-[#00271e] font-bold mb-3 tracking-tight">
            Il nostro metodo di lavoro in 4 fasi
          </h2>
          <p className="font-sans text-[15px] text-[#41534b] leading-relaxed">
            Dalla prima presa in carico al rilascio della documentazione asseverata: linearità metodologica, zero burocrazia inutile e certezza della tutela legale.
          </p>
        </div>

        {/* 4 Stepper Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-6 sm:p-7 rounded-2xl shadow-2xs border border-[#dce5df] flex flex-col justify-between hover:border-[#0f3e32] hover:shadow-lg transition-all duration-300 relative group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-9 h-9 rounded-xl bg-[#00271e] text-white font-sans text-[14px] flex items-center justify-center font-bold shadow-xs group-hover:bg-[#0f3e32] transition-colors">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#eef5f1] text-[#0f3e32] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-serif text-[18px] font-bold leading-snug text-[#00271e] mb-2.5">
                  {step.title}
                </h3>
                <p className="font-sans text-[13.5px] text-[#41534b] leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-3.5 border-t border-[#e5ebe7] text-[#0f3e32] font-sans text-[11px] font-bold tracking-wider uppercase flex items-center justify-between">
                <span>{step.phase}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
