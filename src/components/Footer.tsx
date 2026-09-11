import EmSafetyLogo from './EmSafetyLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegalModal: (title: string, content: string) => void;
}

export default function Footer({ onNavigate, onOpenLegalModal }: FooterProps) {
  const handleLegalClick = (title: string) => {
    let content = '';
    if (title === 'Privacy Policy') {
      content =
        'E.M Safety S.r.l. tutela la riservatezza dei dati personali conferiti ai sensi del Regolamento UE 2016/679 (GDPR). I dati raccolti tramite form o contatto diretto sono trattati unicamente per rispondere alle richieste commerciali e gestire l\'erogazione delle attività formative e consulenziali.';
    } else if (title === 'Cookie Policy') {
      content =
        'Il presente sito utilizza esclusivamente cookie tecnici essenziali per garantire la corretta navigazione e fruizione dei servizi didattici. Non viene effettuata profilazione pubblicitaria senza esplicito consenso preventivo.';
    } else if (title === 'Termini e condizioni') {
      content =
        'Le iscrizioni ai corsi di formazione e gli incarichi professionali sono regolati dalle specifiche condizioni di contratto siglate in sede di preventivo approvato. Gli attestati vengono emessi solo a seguito del superamento dei test e del rispetto della frequenza minima del 90%.';
    } else {
      content =
        'La formazione erogata da E.M Safety è pienamente conforme ai disposti dell\'Accordo Stato-Regioni vigente e del D.Lgs 81/08. I docenti sono formatori qualificati ai sensi del D.I. 06/03/2013 con comprovata esperienza sul campo.';
    }
    onOpenLegalModal(title, content);
  };

  return (
    <footer className="w-full bg-[#0b2545] text-slate-300 border-t-4 border-amber-400 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-blue-900/60">
          {/* Col 1: Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <EmSafetyLogo
              variant="light"
              size="md"
              showTagline={true}
              showSlogan={true}
              sloganPlacement="below"
            />

            <p className="font-sans text-[14px] text-slate-300 max-w-md leading-relaxed mt-1">
              Società accreditata di consulenza strategica e formazione per la salute, sicurezza nei luoghi di lavoro e conformità normativa d'impresa ai sensi del D.Lgs 81/08 e Accordi Stato-Regioni.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-[#07192e] text-amber-300 border border-amber-400/40 font-sans text-[12px] font-bold rounded-lg">
                CERTIFICATO D.LGS 81/08 &amp; 2026 READY
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-900/60 text-white font-sans text-[12px] font-bold rounded-lg border border-blue-700">
                CENTRO FORMAZIONE PARITETICO
              </span>
            </div>
          </div>

          {/* Col 2: Locations & Contacts (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2 select-text">
            <span className="font-sans text-[12px] font-bold text-amber-400 tracking-widest uppercase pb-2">
              SEDI &amp; CONTATTI UFFICIALI
            </span>
            <div className="font-sans text-[14px] text-slate-300 flex flex-col gap-2.5 leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Sede Legale:</strong> 31100 Treviso (TV) Strada di Boiago, 11/b
              </p>
              <p>
                <strong className="text-white font-semibold">Sede Operativa:</strong> 20100 Milano (MI) Piazza Gae Aulenti Torre B
              </p>
              <p className="pt-1">
                <strong className="text-white font-semibold">Tel:</strong>{' '}
                <a className="text-amber-300 hover:text-white hover:underline transition-colors font-semibold" href="tel:+3904221456565">
                  +39 0422/1456565
                </a>{' '}
                | <strong className="text-white font-semibold">Cell:</strong>{' '}
                <a className="text-amber-300 hover:text-white hover:underline transition-colors font-semibold" href="tel:+393791341270">
                  +39 3791341270
                </a>
              </p>
              <p>
                <strong className="text-white font-semibold">E-Mail:</strong>{' '}
                <a className="text-slate-200 hover:text-amber-300 hover:underline transition-colors" href="mailto:info@emsafetygroup.it">
                  info@emsafetygroup.it
                </a>
              </p>
              <p>
                <strong className="text-white font-semibold">PEC:</strong>{' '}
                <a className="text-slate-200 hover:text-amber-300 hover:underline transition-colors" href="mailto:emsafetygroup@pec.emsafetygroup.it">
                  emsafetygroup@pec.emsafetygroup.it
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Navigation (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="font-sans text-[12px] font-bold text-amber-400 tracking-widest uppercase pb-2">
              NAVIGAZIONE
            </span>
            <ul className="font-sans text-[14px] text-slate-300 flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => onNavigate('chi-siamo')}
                  className="hover:text-amber-300 hover:underline transition-colors text-left cursor-pointer font-semibold text-white"
                >
                  Chi Siamo • Profilo Societario
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partner')}
                  className="hover:text-amber-300 hover:underline transition-colors text-left cursor-pointer font-semibold text-amber-300"
                >
                  Diventa Nostro Partner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('metodologia')}
                  className="hover:text-amber-300 hover:underline transition-colors text-left cursor-pointer"
                >
                  Consulenza D.Lgs 81/08
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogo-corsi')}
                  className="hover:text-amber-300 hover:underline transition-colors text-left cursor-pointer"
                >
                  Catalogo Formazione Accreditata
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('simulatore-obblighi')}
                  className="hover:text-amber-300 hover:underline transition-colors text-left cursor-pointer"
                >
                  Simulatore Sanzioni &amp; Sgravio INAIL
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('casi-studio')}
                  className="hover:text-amber-300 hover:underline transition-colors text-left cursor-pointer"
                >
                  Casi Studio &amp; Risultati
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fasi')}
                  className="hover:text-amber-300 hover:underline transition-colors text-left cursor-pointer"
                >
                  Metodologia in 4 Fasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('preventivo-rapido')}
                  className="hover:text-amber-300 hover:underline transition-colors text-left cursor-pointer"
                >
                  Preventivi &amp; Sedi Operative
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[12.5px] text-slate-400 select-text">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center md:text-left">
            <span>© {new Date().getFullYear()} E.M SAFETY S.R.L. — TUTTI I DIRITTI RISERVATI</span>
            <span>•</span>
            <span>P.IVA: 05613690261</span>
            <span>•</span>
            <span>N° REA: TV - 459102</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-sans text-[13px]">
            <button
              onClick={() => handleLegalClick('Privacy Policy')}
              className="hover:text-amber-300 hover:underline transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleLegalClick('Cookie Policy')}
              className="hover:text-amber-300 hover:underline transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => handleLegalClick('Termini e condizioni')}
              className="hover:text-amber-300 hover:underline transition-colors cursor-pointer"
            >
              Termini e Condizioni
            </button>
            <button
              onClick={() => handleLegalClick('Conformità normativa Accordo Stato-Regioni')}
              className="hover:text-amber-300 hover:underline transition-colors cursor-pointer"
            >
              Conformità Accordo Stato-Regioni
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
