import { useState, useEffect, FormEvent } from 'react';
import {
  Building2,
  Building,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Calculator,
  FileCheck2,
} from 'lucide-react';
import { QuoteFormData } from '../types';

interface OfficesAndQuoteSectionProps {
  initialService?: string;
}

export default function OfficesAndQuoteSection({
  initialService = '',
}: OfficesAndQuoteSectionProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService,
    location: 'milano',
    notes: '',
    privacy: false,
    estimatedStaff: '10-50',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        service: initialService,
      }));
    }
  }, [initialService]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedReference, setSubmittedReference] = useState('');
  const [activeTab, setActiveTab] = useState<'quote' | 'calculator'>('quote');

  // Quick estimator state
  const [calcEmployees, setCalcEmployees] = useState(15);
  const [calcRisk, setCalcRisk] = useState<'basso' | 'medio' | 'alto'>('medio');
  const [calcNeedDVR, setCalcNeedDVR] = useState(true);
  const [calcNeedRSPP, setCalcNeedRSPP] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert('È necessario acconsentire al trattamento dei dati personali.');
      return;
    }

    setIsSubmitting(true);
    const refCode = `EMS-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedReference(refCode);
    }, 900);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      location: 'milano',
      notes: '',
      privacy: false,
      estimatedStaff: '10-50',
    });
    setIsSubmitted(false);
  };

  // Estimate calculations
  const calculateEstimate = () => {
    const hoursPerWorker = calcRisk === 'basso' ? 8 : calcRisk === 'medio' ? 12 : 16;
    const estimatedPreposti = Math.max(1, Math.ceil(calcEmployees / 10));
    const estimatedAntincendio = Math.max(2, Math.ceil(calcEmployees / 15));
    const estimatedPrimoSoccorso = Math.max(2, Math.ceil(calcEmployees / 15));

    return {
      workerHours: hoursPerWorker,
      preposti: estimatedPreposti,
      antincendio: estimatedAntincendio,
      primoSoccorso: estimatedPrimoSoccorso,
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="preventivo-rapido" className="w-full bg-white py-16 lg:py-20 border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Official Offices Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-sans text-[11px] font-bold text-[#5E8276] uppercase tracking-widest block mb-1">
                Presidio Territoriale
              </span>
              <h2 className="font-serif text-[32px] sm:text-[38px] text-[#00271e] font-medium leading-[1.2] mb-4">
                Due poli strategici a servizio del tuo business.
              </h2>
              <p className="font-sans text-[15px] text-[#414945] mb-8 leading-relaxed">
                Operiamo attivamente nel Triveneto e in Lombardia con aule dedicate, desk consulenziali e disponibilità per sopralluoghi diretti in azienda in tutto il territorio nazionale.
              </p>

              {/* Location Cards */}
              <div className="space-y-4 mb-8">
                {/* Treviso */}
                <div className="p-5 bg-[#F9FAF8] border border-[#E5E7EB] rounded-lg shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-[#E5E7EB] text-[#0f3e32] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold text-[#5E8276] uppercase tracking-wider block">
                      Sede Legale &amp; Aule Didattiche
                    </span>
                    <h4 className="font-sans text-[16px] text-[#00271e] font-bold mt-0.5">
                      Treviso (TV)
                    </h4>
                    <p className="font-sans text-[13px] text-[#414945] mt-1 leading-relaxed">
                      Strada di Boiago, 11/b • 31100 Treviso<br />
                      Tel:{' '}
                      <a
                        className="text-[#00271e] font-semibold hover:underline"
                        href="tel:+3904221456565"
                      >
                        +39 0422/1456565
                      </a>
                    </p>
                  </div>
                </div>

                {/* Milano */}
                <div className="p-5 bg-[#F9FAF8] border border-[#E5E7EB] rounded-lg shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-[#E5E7EB] text-[#0f3e32] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold text-[#5E8276] uppercase tracking-wider block">
                      Sede Operativa • Business Hub
                    </span>
                    <h4 className="font-sans text-[16px] text-[#00271e] font-bold mt-0.5">
                      Milano (MI)
                    </h4>
                    <p className="font-sans text-[13px] text-[#414945] mt-1 leading-relaxed">
                      Piazza Gae Aulenti Torre B • 20100 Milano<br />
                      Cell:{' '}
                      <a
                        className="text-[#00271e] font-semibold hover:underline"
                        href="tel:+393791341270"
                      >
                        +39 3791341270
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Auditor Field Operations Visual Card */}
              <div className="mb-8 rounded-2xl overflow-hidden border border-[#dce5df] bg-white shadow-sm relative group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/src/assets/images/safety_audit_engineer_1789049638858.jpg"
                    alt="Ingegnere HSE E.M Safety durante un audit in stabilimento"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00271e] via-[#00271e]/30 to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-[#00271e]/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-full text-[10.5px] font-sans font-bold flex items-center gap-1.5 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-ping"></span>
                    <span>Audit Tecnici in Tutta Italia</span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="font-serif text-[15px] font-bold block leading-tight">
                      Sopralluoghi Tecnici &amp; Rilievi Strumentali
                    </span>
                    <span className="font-sans text-[11px] text-[#cbe0d5]">
                      Ingegneri qualificati e RSPP abilitati direttamente nei vostri impianti.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast Contact Info Badge */}
            <div className="p-5 bg-[#F2F5F2] rounded-lg border border-[#D1E0D7] text-[#414945] font-sans text-[13px]">
              <div className="flex items-center gap-2 text-[#00271e] font-bold mb-2">
                <Clock className="w-4 h-4 text-[#5E8276]" />
                <span>Risposta garantita entro 24-48 ore lavorative</span>
              </div>
              <p className="leading-relaxed">
                E-mail:{' '}
                <a
                  href="mailto:info@emsafetygroup.it"
                  className="font-semibold text-[#141b2b] hover:underline"
                >
                  info@emsafetygroup.it
                </a>{' '}
                |<br className="sm:hidden" /> PEC:{' '}
                <a
                  href="mailto:emsafetygroup@pec.emsafetygroup.it"
                  className="font-semibold text-[#141b2b] hover:underline"
                >
                  emsafetygroup@pec.emsafetygroup.it
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Form or Quick Calculator */}
          <div className="lg:col-span-7">
            <div className="bg-[#F9FAF8] border border-[#E5E7EB] p-6 sm:p-8 rounded-lg shadow-md">
              {/* Tabs Switcher */}
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-6">
                <div>
                  <span className="font-sans text-[10px] font-bold text-[#5E8276] uppercase tracking-wider block">
                    Richiesta Preventivo • Senza Impegno
                  </span>
                  <h3 className="font-serif text-[22px] sm:text-[26px] text-[#00271e] font-medium">
                    {activeTab === 'quote'
                      ? 'Parlaci delle esigenze della tua impresa'
                      : 'Simulatore rapido fabbisogno formativo'}
                  </h3>
                </div>

                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#E5E7EB]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('quote')}
                    className={`px-3 py-1.5 rounded font-sans text-[12px] font-semibold transition-all ${
                      activeTab === 'quote'
                        ? 'bg-[#0f3e32] text-white'
                        : 'text-[#717975] hover:text-[#00271e]'
                    }`}
                  >
                    Modulo
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('calculator')}
                    className={`px-3 py-1.5 rounded font-sans text-[12px] font-semibold flex items-center gap-1 transition-all ${
                      activeTab === 'calculator'
                        ? 'bg-[#0f3e32] text-white'
                        : 'text-[#717975] hover:text-[#00271e]'
                    }`}
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Calcola</span>
                  </button>
                </div>
              </div>

              {activeTab === 'quote' ? (
                isSubmitted ? (
                  <div className="p-8 bg-white border border-[#b5ede7] rounded-lg text-center space-y-4 animate-in fade-in-50">
                    <div className="w-14 h-14 rounded-full bg-[#b5ede7] text-[#00201e] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-[#0f3e32]" />
                    </div>
                    <h4 className="font-serif text-[22px] text-[#00271e] font-bold">
                      Richiesta inoltrata con successo!
                    </h4>
                    <p className="font-sans text-[14px] text-[#414945] max-w-md mx-auto leading-relaxed">
                      Grazie, <strong>{formData.name}</strong>. Un nostro consulente QHSE prenderà in carico la pratica per{' '}
                      <strong>{formData.company}</strong> e ti contatterà entro 24-48 ore lavorative.
                    </p>
                    <div className="inline-block bg-[#F2F5F2] px-4 py-2 rounded font-mono text-[12px] text-[#00271e] border border-[#E5E7EB]">
                      Codice Protocollo: <strong>{submittedReference}</strong>
                    </div>
                    <div>
                      <button
                        onClick={handleResetForm}
                        className="mt-2 px-5 py-2 bg-[#0f3e32] text-white font-sans text-[13px] font-semibold rounded hover:bg-[#00271e] transition-colors"
                      >
                        Invia un'altra richiesta
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block font-sans text-[13px] font-semibold text-[#00271e] mb-1.5"
                          htmlFor="form-name"
                        >
                          Nome e Cognome *
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Mario Rossi"
                          className="w-full px-3 py-2 bg-white rounded font-sans text-[14px] text-[#141b2b] border border-[#E5E7EB] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0f3e32]"
                        />
                      </div>
                      <div>
                        <label
                          className="block font-sans text-[13px] font-semibold text-[#00271e] mb-1.5"
                          htmlFor="form-company"
                        >
                          Ragione Sociale / Azienda *
                        </label>
                        <input
                          id="form-company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="Azienda S.p.A."
                          className="w-full px-3 py-2 bg-white rounded font-sans text-[14px] text-[#141b2b] border border-[#E5E7EB] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0f3e32]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block font-sans text-[13px] font-semibold text-[#00271e] mb-1.5"
                          htmlFor="form-email"
                        >
                          E-Mail Aziendale *
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="m.rossi@azienda.it"
                          className="w-full px-3 py-2 bg-white rounded font-sans text-[14px] text-[#141b2b] border border-[#E5E7EB] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0f3e32]"
                        />
                      </div>
                      <div>
                        <label
                          className="block font-sans text-[13px] font-semibold text-[#00271e] mb-1.5"
                          htmlFor="form-phone"
                        >
                          Telefono Diretto *
                        </label>
                        <input
                          id="form-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+39 02 1234567"
                          className="w-full px-3 py-2 bg-white rounded font-sans text-[14px] text-[#141b2b] border border-[#E5E7EB] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0f3e32]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block font-sans text-[13px] font-semibold text-[#00271e] mb-1.5"
                          htmlFor="form-service"
                        >
                          Tipologia di Interesse *
                        </label>
                        <select
                          id="form-service"
                          required
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-white rounded font-sans text-[13px] text-[#141b2b] border border-[#E5E7EB] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0f3e32] cursor-pointer"
                        >
                          <option value="">Seleziona ambito...</option>
                          <option value="sgi">
                            Sistemi di Gestione Integrati (ISO 9001/14001/45001)
                          </option>
                          <option value="corsi">
                            Formazione del Personale (Accordo Stato-Regioni)
                          </option>
                          <option value="audit">
                            Audit Ispettivo &amp; Verifica Gap Analysis
                          </option>
                          <option value="rspp">
                            Incarico RSPP Esterno &amp; Valutazione Rischi (DVR)
                          </option>
                          <option value="altro">Altro / Consulenza Specifica</option>
                        </select>
                      </div>

                      <div>
                        <label
                          className="block font-sans text-[13px] font-semibold text-[#00271e] mb-1.5"
                          htmlFor="form-location"
                        >
                          Sede di Riferimento Prevalente
                        </label>
                        <select
                          id="form-location"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-white rounded font-sans text-[13px] text-[#141b2b] border border-[#E5E7EB] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0f3e32] cursor-pointer"
                        >
                          <option value="milano">Milano &amp; Lombardia</option>
                          <option value="treviso">Treviso &amp; Triveneto</option>
                          <option value="online">FAD / Videoconferenza Sincrona</option>
                          <option value="italia">Intervento In Loco (Tutta Italia)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block font-sans text-[13px] font-semibold text-[#00271e] mb-1.5"
                        htmlFor="form-notes"
                      >
                        Dettagli della richiesta o numero stimato di dipendenti
                      </label>
                      <textarea
                        id="form-notes"
                        rows={3}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        placeholder="Es. Abbiamo necessità di aggiornare 15 preposti e rinnovare il DVR aziendale..."
                        className="w-full px-3 py-2 bg-white rounded font-sans text-[14px] text-[#141b2b] border border-[#E5E7EB] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0f3e32] resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        id="form-privacy"
                        type="checkbox"
                        required
                        checked={formData.privacy}
                        onChange={(e) =>
                          setFormData({ ...formData, privacy: e.target.checked })
                        }
                        className="mt-1 rounded text-[#0f3e32] focus:ring-[#0f3e32]"
                      />
                      <label
                        htmlFor="form-privacy"
                        className="font-sans text-[12px] text-[#414945] leading-relaxed select-none"
                      >
                        Dichiaro di aver letto l'informativa sulla privacy e acconsento al trattamento dei dati personali per la gestione della richiesta commerciale ai sensi del Regolamento UE 2016/679 (GDPR).
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#0f3e32] text-white font-sans text-[14px] rounded shadow-md hover:bg-[#00271e] transition-all duration-200 flex items-center justify-center gap-2 font-semibold disabled:opacity-75 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Inoltro in corso...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Invia Richiesta Preventivo Gratuito</span>
                        </>
                      )}
                    </button>
                  </form>
                )
              ) : (
                /* Fast Interactive Calculator */
                <div className="space-y-5 bg-white p-5 rounded-lg border border-[#E5E7EB]">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="font-sans text-[13px] font-semibold text-[#00271e]">
                        Numero di lavoratori in organico:
                      </label>
                      <span className="font-sans text-[15px] font-bold text-[#0f3e32]">
                        {calcEmployees} dipendenti
                      </span>
                    </div>
                    <input
                      type="range"
                      min={3}
                      max={200}
                      value={calcEmployees}
                      onChange={(e) => setCalcEmployees(Number(e.target.value))}
                      className="w-full accent-[#0f3e32] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[13px] font-semibold text-[#00271e] mb-2">
                      Classe di Rischio ATECO dell'azienda:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['basso', 'medio', 'alto'] as const).map((risk) => (
                        <button
                          key={risk}
                          type="button"
                          onClick={() => setCalcRisk(risk)}
                          className={`py-2 px-3 rounded font-sans text-[12px] font-bold uppercase transition-all ${
                            calcRisk === risk
                              ? 'bg-[#0f3e32] text-white shadow-sm'
                              : 'bg-[#F2F5F2] text-[#414945] hover:bg-[#E5E7EB]'
                          }`}
                        >
                          Rischio {risk}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={calcNeedDVR}
                        onChange={(e) => setCalcNeedDVR(e.target.checked)}
                        className="rounded text-[#0f3e32]"
                      />
                      <span className="font-sans text-[13px] text-[#141b2b]">
                        Revisione / Redazione Documento Valutazione Rischi (DVR)
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={calcNeedRSPP}
                        onChange={(e) => setCalcNeedRSPP(e.target.checked)}
                        className="rounded text-[#0f3e32]"
                      />
                      <span className="font-sans text-[13px] text-[#141b2b]">
                        Assunzione Incarico RSPP Esterno certificato
                      </span>
                    </label>
                  </div>

                  {/* Calculated summary card */}
                  <div className="p-4 bg-[#FBF5E6] border border-[#D1A751]/40 rounded-lg">
                    <span className="font-sans text-[11px] font-bold text-[#946E19] uppercase tracking-wider block mb-1">
                      Quadro Didattico di Massima (D.Lgs 81/08)
                    </span>
                    <ul className="font-sans text-[13px] text-[#261900] space-y-1.5">
                      <li>
                        • Formazione Lavoratori: <strong>{estimate.workerHours} ore / dipendente</strong>
                      </li>
                      <li>
                        • Preposti da nominare/aggiornare: <strong>ca. {estimate.preposti} figure</strong> (8 ore)
                      </li>
                      <li>
                        • Squadra Antincendio minima: <strong>{estimate.antincendio} addetti</strong>
                      </li>
                      <li>
                        • Squadra Primo Soccorso minima: <strong>{estimate.primoSoccorso} addetti</strong>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        notes: `Stima per azienda di ${calcEmployees} dipendenti con rischio ${calcRisk}. Servizi: ${
                          calcNeedDVR ? 'DVR ' : ''
                        }${calcNeedRSPP ? 'RSPP Esterno' : ''}`,
                      });
                      setActiveTab('quote');
                    }}
                    className="w-full py-2.5 bg-[#0f3e32] text-white font-sans text-[13px] font-semibold rounded hover:bg-[#00271e] transition-colors flex items-center justify-center gap-2"
                  >
                    <FileCheck2 className="w-4 h-4" />
                    <span>Compila il preventivo con questi dati</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
