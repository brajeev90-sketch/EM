import { useState } from 'react';
import { Factory, HardHat, Building, FlaskConical, Truck, AlertTriangle, FileText, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SectorInfo {
  id: string;
  name: string;
  icon: typeof Factory;
  riskLevel: 'Basso' | 'Medio' | 'Alto';
  riskScore: number;
  atecoDescription: string;
  formationHours: string;
  requiredDocuments: string[];
  keyObligations: string[];
  description: string;
}

const sectors: SectorInfo[] = [
  {
    id: 'manifattura',
    name: 'Manifattura & Meccanica',
    icon: Factory,
    riskLevel: 'Alto',
    riskScore: 85,
    atecoDescription: 'Codici ATECO C (Metallurgia, Macchinari, Lavorazioni industriali)',
    formationHours: '16 ore (4h Generale + 12h Specifica)',
    requiredDocuments: ['DVR Completo con Valutazione Macchine (Direttiva Macchine)', 'Valutazione Rischio Rumore & Vibrazioni Meccaniche', 'Piano di Gestione Sostanze Chimiche e Schede SDS', 'Nomina RSPP / Medico Competente con Visite Periodiche'],
    keyObligations: ['Addetti Antincendio Livello 2 o 3 (Alto Rischio)', 'Patentino Carrelli Elevatori & Gru a Ponte', 'Sorveglianza Sanitaria Annuale Obbligatoria', 'Verifiche Impianti Elettrici e di Messa a Terra (DPR 462/01)'],
    description: 'Impianti produttivi caratterizzati da linee meccanizzate, movimentazione carichi e rumore continuo. Richiede audit strumentali e procedure operative LOTO.',
  },
  {
    id: 'edilizia',
    name: 'Cantieri, Edilizia & Impianti',
    icon: HardHat,
    riskLevel: 'Alto',
    riskScore: 95,
    atecoDescription: 'Codici ATECO F (Costruzioni, Ristrutturazioni, Impiantistica)',
    formationHours: '16 ore (Lavoratori) + 40h (Preposti) + Coordinatori CSP/CSE',
    requiredDocuments: ['POS (Piano Operativo di Sicurezza) specifico di cantiere', 'PSC (Piano di Sicurezza e Coordinamento) e Fascicolo dell’Opera', 'Pi.M.U.S. (Piano Montaggio, Uso e Smontaggio Ponteggi)', 'Dichiarazioni di Conformità e Verifiche Attrezzature'],
    keyObligations: ['Lavori in Quota e Formazione DPI di 3° Categoria', 'Abilitazione Piattaforme Aeree (PLE) e Macchine Movimento Terra', 'Coordinamento Sicurezza in fase di Progettazione ed Esecuzione', 'Tesserini di riconoscimento cantiere e verifica idoneità tecnico-professionale'],
    description: 'Ambienti dinamici con rischi di caduta dall’alto, interferenze tra imprese e cantierizzazione stradale. E.M Safety redige POS asseverati e garantisce sopralluoghi continui.',
  },
  {
    id: 'terziario',
    name: 'Uffici, Studi & Servizi',
    icon: Building,
    riskLevel: 'Basso',
    riskScore: 35,
    atecoDescription: 'Codici ATECO J, K, M, N (Servizi, Software, Consulenza, Amministrazione)',
    formationHours: '8 ore (4h Generale + 4h Specifica)',
    requiredDocuments: ['DVR Semplificato per Uffici e Postazioni VDT', 'Valutazione Rischio Stress Lavoro-Correlato', 'Piano di Emergenza ed Evacuazione con Planimetrie', 'Valutazione Ergonomia delle Postazioni e Microclima'],
    keyObligations: ['Formazione Videoterminalisti (pause e postura ergonomica)', 'Addetti Primo Soccorso (Gruppo B/C) e Antincendio Livello 1', 'Nomina RLS o adesione RLST territoriale', 'Corso Aggiornamento quinquennale (6 ore)'],
    description: 'Attività a prevalente lavoro d’ufficio. Gli audit E.M Safety ottimizzano la conformità documentale senza burocrazia superflua, focalizzandosi su ergonomia e benessere.',
  },
  {
    id: 'chimico',
    name: 'Chimico, Pharma & Laboratori',
    icon: FlaskConical,
    riskLevel: 'Alto',
    riskScore: 90,
    atecoDescription: 'Codici ATECO C20, C21, M72 (Produzione chimica, Farmaceutica, R&D)',
    formationHours: '16 ore + Moduli Specifici Agenti Chimici/Cancerogeni',
    requiredDocuments: ['Valutazione Rischio Chimico (Algoritmo MoVaRisCh o equivalente)', 'Valutazione Atmosfere Esplosive ATEX (D.Lgs 81/08 Titolo XI)', 'Registro Esposizione ad Agenti Cancerogeni e Mutageni', 'Piano di Bonifica e Gestione Rifiuti Pericolosi'],
    keyObligations: ['DPI Vie Respiratorie e Tute di Protezione Chimica', 'Cappa aspirazione e monitoraggio ambientale periodico', 'Sorveglianza Sanitaria mirata con esami tossicologici', 'Gestione Emergenze Rilevanti e Sversamenti'],
    description: 'Esposizione a reagenti, polveri e vapori. Richiede campionamenti ambientali certificati, monitoraggio dei valori limite di soglia (TLV) e protocolli igienici rigorosi.',
  },
  {
    id: 'logistica',
    name: 'Logistica, Magazzini & Trasporti',
    icon: Truck,
    riskLevel: 'Medio',
    riskScore: 70,
    atecoDescription: 'Codici ATECO H (Trasporti, Magazzinaggio, Spedizioni)',
    formationHours: '12 ore (4h Generale + 8h Specifica)',
    requiredDocuments: ['DVR con Valutazione Movimentazione Manuale Carichi (NIOSH / Snook)', 'Piano di Circolazione Interna di Mezzi e Pedoni nel Magazzino', 'Verifica Periodica Scaffalature Industriali (UNI EN 15635)', 'Valutazione Rischio Investimento Mezzi in Movimento'],
    keyObligations: ['Abilitazione Conducenti Carrelli Elevatori (Muletti)', 'Segnaletica orizzontale e verticale a norma', 'Procedure per carico/scarico in banchina (DUVRI Autisti)', 'Dispositivi uomo a terra per lavoratori isolati'],
    description: 'Interazione uomo-macchina ad alta intensità nei centri di smistamento. Interveniamo con piani di viabilità sicura e formazione addestrativa pratica.',
  },
];

interface InteractiveRiskRoadmapProps {
  onSelectSectorQuote: (sectorName: string) => void;
}

export default function InteractiveRiskRoadmap({ onSelectSectorQuote }: InteractiveRiskRoadmapProps) {
  const [selectedSector, setSelectedSector] = useState<SectorInfo>(sectors[0]);

  const riskBadgeStyles = {
    Basso: 'bg-[#d6ede4] text-[#00271e] border-[#a9d4c1]',
    Medio: 'bg-[#fbf5e6] text-[#946e19] border-[#e8ce85]',
    Alto: 'bg-[#ffebe8] text-[#b91c1c] border-[#fca5a5]',
  }[selectedSector.riskLevel];

  const riskBarColor = {
    Basso: 'from-[#0f3e32] to-[#2dd4bf]',
    Medio: 'from-[#946e19] to-[#d4af37]',
    Alto: 'from-[#b91c1c] to-[#ef4444]',
  }[selectedSector.riskLevel];

  return (
    <div className="w-full bg-[#fbfcfb] rounded-2xl border border-[#d8e2dc] p-6 lg:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e2eae5]">
        <div>
          <span className="font-sans text-[11px] font-bold text-[#0f3e32] uppercase tracking-[0.22em] block mb-1">
            Navigatore Settoriale di Sicurezza • D.Lgs 81/08
          </span>
          <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#00271e] tracking-tight">
            Seleziona il Tuo Settore Industriale
          </h3>
          <p className="font-sans text-[14px] text-[#41534b] mt-1 max-w-2xl">
            Ogni comparto produttivo presenta matrici di rischio, monte ore formativo e adempimenti documentali specifici. Scopri subito la tua roadmap di conformità.
          </p>
        </div>

        {/* Quick Helper Badge */}
        <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-[#d8e2dc] self-start md:self-center shadow-2xs">
          <AlertTriangle className="w-4 h-4 text-[#d4af37]" />
          <span className="font-sans text-[12px] font-semibold text-[#00271e]">
            Conforme Accordo Stato-Regioni 2026
          </span>
        </div>
      </div>

      {/* Sector Tab Selector (Graphic Buttons) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 py-6">
        {sectors.map((sector) => {
          const isSelected = selectedSector.id === sector.id;
          const SectorIcon = sector.icon;

          return (
            <button
              key={sector.id}
              onClick={() => setSelectedSector(sector)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'bg-[#00271e] text-white border-[#00271e] shadow-md -translate-y-1'
                  : 'bg-white text-[#00271e] border-[#d8e2dc] hover:bg-[#f0f6f2] hover:border-[#b0c8bd]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-[#0f3e32] text-[#b5ede7]' : 'bg-[#eef5f1] text-[#0f3e32]'
                  }`}
                >
                  <SectorIcon className="w-5 h-5" />
                </div>
                <span
                  className={`text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : sector.riskLevel === 'Alto'
                      ? 'bg-red-50 text-red-700'
                      : sector.riskLevel === 'Medio'
                      ? 'bg-amber-50 text-amber-800'
                      : 'bg-emerald-50 text-emerald-800'
                  }`}
                >
                  {sector.riskLevel}
                </span>
              </div>

              <div>
                <span className="font-sans text-[13.5px] font-bold leading-tight block">
                  {sector.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card for the Active Sector */}
      <div className="bg-white rounded-xl border border-[#d8e2dc] p-6 lg:p-7 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Col 1: Overview & Metrics (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#e2eae5] pb-6 lg:pb-0 lg:pr-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${riskBadgeStyles}`}>
                  Fascia Rischio: {selectedSector.riskLevel}
                </span>
                <span className="text-[11px] font-sans text-[#556960] font-medium">
                  Indice di Gravità: {selectedSector.riskScore}/100
                </span>
              </div>

              <h4 className="font-serif text-[24px] font-bold text-[#00271e] mb-2">
                {selectedSector.name}
              </h4>

              <p className="font-sans text-[13px] text-[#556960] mb-4">
                {selectedSector.atecoDescription}
              </p>

              {/* Visual Meter */}
              <div className="mb-4 bg-[#f8faf8] p-3 rounded-lg border border-[#e2eae5]">
                <div className="flex justify-between text-[11px] font-sans font-bold text-[#00271e] mb-1">
                  <span>Intensità Rischio Operativo</span>
                  <span>{selectedSector.riskScore}%</span>
                </div>
                <div className="w-full h-2 bg-[#e2eae5] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${riskBarColor} rounded-full transition-all duration-500`}
                    style={{ width: `${selectedSector.riskScore}%` }}
                  ></div>
                </div>
              </div>

              <p className="font-sans text-[13.5px] text-[#41534b] leading-relaxed mb-4">
                {selectedSector.description}
              </p>

              {/* Formation Hours callout */}
              <div className="bg-[#eef5f1] p-3 rounded-lg border border-[#cde0d5] flex items-center gap-3">
                <Users className="w-5 h-5 text-[#0f3e32] flex-shrink-0" />
                <div className="text-left">
                  <span className="font-sans text-[10.5px] font-bold uppercase tracking-wider text-[#556960] block">
                    Formazione Lavoratori Obbligatoria
                  </span>
                  <span className="font-sans text-[13.5px] font-bold text-[#00271e]">
                    {selectedSector.formationHours}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <button
                onClick={() => onSelectSectorQuote(selectedSector.name)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00271e] hover:bg-[#0f3e32] text-white font-sans text-[13.5px] font-bold rounded-lg shadow-sm transition-colors"
              >
                <span>Richiedi Piano Dedicato per {selectedSector.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Mandatory Documents & Operations (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Box 1: Documenti Obbligatori */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-[#0f3e32]" />
                <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-[#00271e]">
                  Documentazione &amp; Valutazioni Strumentali Richieste
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedSector.requiredDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#f8faf8] border border-[#e2eae5] rounded-lg flex items-start gap-2 text-[12.5px] font-sans text-[#00271e]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0f3e32] flex-shrink-0 mt-0.5" />
                    <span className="font-medium leading-tight">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 2: Obblighi Operativi e Nomine */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#946e19]" />
                <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-[#00271e]">
                  Nomine, Abilitazioni Attrezzature &amp; Sorveglianza
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedSector.keyObligations.map((obl, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#fbfcfb] border border-[#e2eae5] rounded-lg flex items-start gap-2 text-[12.5px] font-sans text-[#00271e]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0 mt-1.5"></span>
                    <span className="font-medium leading-tight">{obl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guaranteed Zero Penalties Seal */}
            <div className="p-3 bg-[#f0f6f2] rounded-lg border border-[#cde0d5] flex items-center justify-between gap-4">
              <span className="font-sans text-[12px] text-[#0f3e32] font-semibold">
                🛡️ Copertura totale: assistenza garantita in caso di verifiche SPISAL / ATS, Ispettorato del Lavoro e Vigili del Fuoco.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
