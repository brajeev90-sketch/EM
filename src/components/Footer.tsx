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
    <footer className="w-full bg-[#f4f7f4] text-[#0d2119] border-t border-[#d8e2dc]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-16 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#d8e2dc]">
          {/* Col 1: Brand & Accreditation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <EmSafetyLogo variant="dark" size="lg" />
            <p className="font-sans text-[14px] text-[#41534b] max-w-md pt-2 leading-relaxed">
              Società accreditata di consulenza strategica e formazione per la salute, sicurezza nei luoghi di lavoro e conformità normativa d'impresa ai sensi del D.Lgs 81/08 e Accordi Stato-Regioni.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 bg-[#FBF5E6] text-[#946E19] border border-[#D1A751]/30 font-sans text-[11px] font-bold rounded-md">
                Certificato D.Lgs 81/08 &amp; 2026 Ready
              </span>
              <span className="inline-flex items-center px-2.5 py-1 bg-[#d6ede4] text-[#00271e] font-sans text-[11px] font-bold rounded-md border border-[#b0d8c9]">
                Centro Formazione Paritetico
              </span>
            </div>
          </div>

          {/* Col 2: Locations & Contacts (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2 select-text">
            <span className="font-sans text-[11px] font-bold text-[#00271e] tracking-widest uppercase pb-2">
              Sedi &amp; Contatti Ufficiali
            </span>
            <div className="font-sans text-[13px] text-[#414945] flex flex-col gap-2 leading-relaxed">
              <p>
                <strong className="text-[#141b2b] font-semibold">Sede Legale:</strong> 31100 Treviso (TV) Strada di Boiago, 11/b
              </p>
              <p>
                <strong className="text-[#141b2b] font-semibold">Sede Operativa:</strong> 20100 Milano (MI) Piazza Gae Aulenti Torre B
              </p>
              <p className="pt-1">
                <strong className="text-[#141b2b] font-semibold">Tel:</strong>{' '}
                <a className="hover:text-[#00271e] hover:underline transition-colors" href="tel:+3904221456565">
                  +39 0422/1456565
                </a>{' '}
                | <strong className="text-[#141b2b] font-semibold">Cell:</strong>{' '}
                <a className="hover:text-[#00271e] hover:underline transition-colors" href="tel:+393791341270">
                  +39 3791341270
                </a>
              </p>
              <p>
                <strong className="text-[#141b2b] font-semibold">E-Mail:</strong>{' '}
                <a className="hover:text-[#00271e] hover:underline transition-colors" href="mailto:info@emsafetygroup.it">
                  info@emsafetygroup.it
                </a>
              </p>
              <p>
                <strong className="text-[#141b2b] font-semibold">PEC:</strong>{' '}
                <a className="hover:text-[#00271e] hover:underline transition-colors" href="mailto:emsafetygroup@pec.emsafetygroup.it">
                  emsafetygroup@pec.emsafetygroup.it
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Navigation (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="font-sans text-[11px] font-bold text-[#00271e] tracking-widest uppercase pb-2">
              Navigazione Istituzionale
            </span>
            <ul className="font-sans text-[13px] text-[#414945] flex flex-col gap-2">
              <li>
                <button
                  onClick={() => onNavigate('metodologia')}
                  className="hover:text-[#00271e] hover:underline transition-colors text-left"
                >
                  Consulenza D.Lgs 81/08
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogo-corsi')}
                  className="hover:text-[#00271e] hover:underline transition-colors text-left"
                >
                  Catalogo Formazione Accreditata
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogo-corsi')}
                  className="hover:text-[#00271e] hover:underline transition-colors text-left"
                >
                  Sessioni d'Aula e FAD
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('metodologia')}
                  className="hover:text-[#00271e] hover:underline transition-colors text-left"
                >
                  Governance e Formatori
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fasi')}
                  className="hover:text-[#00271e] hover:underline transition-colors text-left"
                >
                  Archivio Tecnico e Normativo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('preventivo-rapido')}
                  className="hover:text-[#00271e] hover:underline transition-colors text-left"
                >
                  Preventivi &amp; Convenzioni
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[12px] text-[#414945] select-text">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center md:text-left">
            <span>© E.M Safety S.r.l. - Tutti i diritti riservati</span>
            <span>•</span>
            <span>P.Iva: 05613690261</span>
            <span>•</span>
            <span>N° REA: TV - 459102</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-sans text-[13px]">
            <button
              onClick={() => handleLegalClick('Privacy Policy')}
              className="hover:text-[#00271e] hover:underline transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleLegalClick('Cookie Policy')}
              className="hover:text-[#00271e] hover:underline transition-colors"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => handleLegalClick('Termini e condizioni')}
              className="hover:text-[#00271e] hover:underline transition-colors"
            >
              Termini e condizioni
            </button>
            <button
              onClick={() => handleLegalClick('Conformità normativa Accordo Stato-Regioni')}
              className="hover:text-[#00271e] hover:underline transition-colors"
            >
              Conformità normativa Accordo Stato-Regioni
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
