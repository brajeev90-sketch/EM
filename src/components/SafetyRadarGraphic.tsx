import { useState } from 'react';
import { ShieldCheck, Leaf, Award, FileCheck2, Activity, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import EmSafetyLogo from './EmSafetyLogo';

interface RadarNode {
  id: string;
  title: string;
  code: string;
  category: string;
  level: number;
  description: string;
  icon: typeof ShieldCheck;
  color: string;
  accentBg: string;
  badge: string;
  requirements: string[];
}

const radarNodes: RadarNode[] = [
  {
    id: 'iso45001',
    title: 'Sicurezza & Salute sul Lavoro',
    code: 'ISO 45001:2018',
    category: 'Safety Management',
    level: 98,
    description:
      'Sistema di Gestione della Salute e Sicurezza sul Lavoro per azzerare gli infortuni, qualificare i fornitori e ridurre i tassi di premio INAIL (Modello OT23).',
    icon: ShieldCheck,
    color: '#0f3e32',
    accentBg: '#d6ede4',
    badge: 'Conformità Totale',
    requirements: ['Valutazione rischi proattiva', 'Partecipazione dei lavoratori', 'Politica zero infortuni', 'Sgravi INAIL fino al 28%'],
  },
  {
    id: 'dlgs8108',
    title: 'Conformità Legislativa Obbligatoria',
    code: 'D.Lgs 81/08 & Accordo 2026',
    category: 'Compliance Normativa',
    level: 100,
    description:
      'Aggiornamento costante del Documento di Valutazione dei Rischi (DVR), nomine RSPP/RLS/Medico, piani di emergenza e verifiche periodiche degli impianti.',
    icon: FileCheck2,
    color: '#00271e',
    accentBg: '#b5ede7',
    badge: 'Obbligo di Legge',
    requirements: ['DVR e Valutazioni Specifiche', 'Nomina RSPP esterno/supporto', 'Piano Emergenza & Antincendio', 'Sanzioni penali azzerate'],
  },
  {
    id: 'iso14001',
    title: 'Sostenibilità & Gestione Ambientale',
    code: 'ISO 14001:2015',
    category: 'Environmental ESG',
    level: 94,
    description:
      'Controllo degli impatti ambientali aziendali: gestione rifiuti speciali, emissioni in atmosfera, consumi energetici e conformità alle direttive ESG europee.',
    icon: Leaf,
    color: '#1b5e4b',
    accentBg: '#e1f5ec',
    badge: 'ESG Rating A+',
    requirements: ['Registro Rifiuti & scarichi', 'Monitoraggio emissioni', 'Conformità direttive UE', 'Punteggi gare d’appalto'],
  },
  {
    id: 'iso9001',
    title: 'Qualità dei Processi Aziendali',
    code: 'ISO 9001:2015',
    category: 'Quality Governance',
    level: 96,
    description:
      'Standardizzazione dei protocolli operativi, audit interni e miglioramento continuo delle prestazioni aziendali con piena soddisfazione del cliente finale.',
    icon: Award,
    color: '#946e19',
    accentBg: '#fbf5e6',
    badge: 'Certificato Accredia',
    requirements: ['Mappatura processi chiave', 'KPI e metriche prestazionali', 'Audit interni di sorveglianza', 'Qualifica albo fornitori'],
  },
];

interface SafetyRadarGraphicProps {
  onOpenAuditModal: () => void;
}

export default function SafetyRadarGraphic({ onOpenAuditModal }: SafetyRadarGraphicProps) {
  const [selectedNode, setSelectedNode] = useState<RadarNode>(radarNodes[0]);
  const [isHoveringRadar, setIsHoveringRadar] = useState(false);

  return (
    <div className="w-full bg-white rounded-2xl border border-[#dce5df] p-6 lg:p-8 shadow-sm relative overflow-hidden">
      {/* Background Decorative Grid and Gradient Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b5ede7]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header bar of graphic */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e5ebe7] relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf] animate-ping"></span>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f3e32]">
              Infografica Interattiva HSE • Sistemi Integrati
            </span>
          </div>
          <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#00271e] tracking-tight">
            Radar di Conformità &amp; Gestione Integrata SGI
          </h3>
          <p className="font-sans text-[13.5px] text-[#556960] mt-0.5 max-w-xl">
            Monitora l'interconnessione tra sicurezza, normativa D.Lgs 81/08, ambiente e governance aziendale. Seleziona uno standard per visualizzare metriche e adempimenti.
          </p>
        </div>

        {/* Live Index Pill */}
        <div className="flex items-center gap-3 bg-[#f0f6f2] border border-[#cde0d5] px-4 py-2.5 rounded-xl self-start sm:self-center">
          <Activity className="w-5 h-5 text-[#0f3e32] animate-pulse" />
          <div className="flex flex-col text-left">
            <span className="font-sans text-[10.5px] font-bold uppercase tracking-wider text-[#556960]">
              Indice di Tenuta Globale
            </span>
            <span className="font-serif text-[18px] font-bold text-[#00271e] leading-tight">
              98.2 / 100 <span className="font-sans text-[11px] text-[#0f3e32] font-semibold">(Ottimale)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Layout: Radar Visualization + Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 relative z-10">
        {/* Left Side: Radar SVG Graphic with Motion Elements */}
        <div
          className="lg:col-span-6 flex flex-col items-center justify-center relative p-4"
          onMouseEnter={() => setIsHoveringRadar(true)}
          onMouseLeave={() => setIsHoveringRadar(false)}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center">
            {/* Concentric Radar Rings */}
            <div className="absolute inset-0 rounded-full border border-[#d2ded6]"></div>
            <div className="absolute inset-8 rounded-full border border-[#dce5df] border-dashed"></div>
            <div className="absolute inset-16 rounded-full border border-[#d2ded6]"></div>
            <div className="absolute inset-24 rounded-full border border-[#dce5df] border-dashed"></div>

            {/* Radar Crosshairs */}
            <div className="absolute w-full h-[1px] bg-[#dce5df]"></div>
            <div className="absolute h-full w-[1px] bg-[#dce5df]"></div>

            {/* Rotating Radar Sweep Graphic */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none animate-radar-sweep">
              <div
                className="w-1/2 h-1/2 origin-bottom-right"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(45, 212, 191, 0.25) 0deg, transparent 60deg)',
                }}
              ></div>
            </div>

            {/* Center Core Badge */}
            <div className="absolute z-20 w-20 h-20 rounded-full bg-[#00271e] text-white flex flex-col items-center justify-center shadow-lg border-2 border-[#b5ede7] p-1">
              <EmSafetyLogo variant="light" markOnly size="sm" className="h-6 mb-0.5" />
              <span className="font-sans text-[8px] font-extrabold uppercase tracking-widest text-[#b5ede7]">SGI HUB</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-0.5 animate-ping"></span>
            </div>

            {/* 4 Interactive Nodes along the periphery */}
            {radarNodes.map((node, index) => {
              const isSelected = selectedNode.id === node.id;
              // Coordinates for Top, Right, Bottom, Left
              const positions = [
                'top-1 left-1/2 -translate-x-1/2', // Top: ISO 45001
                'top-1/2 right-1 -translate-y-1/2', // Right: D.Lgs 81/08
                'bottom-1 left-1/2 -translate-x-1/2', // Bottom: ISO 14001
                'top-1/2 left-1 -translate-y-1/2', // Left: ISO 9001
              ];

              const NodeIcon = node.icon;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`absolute z-30 transition-all duration-300 p-2 sm:p-2.5 rounded-xl flex items-center gap-2 shadow-md ${positions[index]} ${
                    isSelected
                      ? 'bg-[#00271e] text-white scale-110 ring-4 ring-[#b5ede7] shadow-xl'
                      : 'bg-white text-[#00271e] border border-[#cde0d5] hover:scale-105 hover:bg-[#f0f6f2]'
                  }`}
                  aria-label={`Visualizza dettagli ${node.code}`}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: isSelected ? '#1b5e4b' : node.accentBg,
                      color: isSelected ? '#b5ede7' : node.color,
                    }}
                  >
                    <NodeIcon className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:flex flex-col text-left pr-1">
                    <span className="font-sans text-[11px] font-bold leading-none">{node.code}</span>
                    <span
                      className={`text-[9px] font-semibold uppercase tracking-wider mt-0.5 ${
                        isSelected ? 'text-[#b5ede7]' : 'text-[#556960]'
                      }`}
                    >
                      {node.level}% Conforme
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-2 text-[12px] font-sans text-[#556960]">
            <Zap className="w-4 h-4 text-[#d4af37]" />
            <span>Tocca i quattro vertici per esplorare le componenti del Sistema Integrato</span>
          </div>
        </div>

        {/* Right Side: Active Standard Detail Box */}
        <div className="lg:col-span-6 bg-[#fbfcfb] p-6 rounded-xl border border-[#dce5df] shadow-2xs">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider"
              style={{ backgroundColor: selectedNode.accentBg, color: selectedNode.color }}
            >
              {selectedNode.category}
            </span>
            <span className="font-sans text-[12px] font-bold px-2.5 py-1 bg-[#d4af37]/15 text-[#856114] rounded-md border border-[#d4af37]/30">
              {selectedNode.badge}
            </span>
          </div>

          <h4 className="font-serif text-[24px] font-bold text-[#00271e] leading-snug mb-1">
            {selectedNode.code} — {selectedNode.title}
          </h4>

          <p className="font-sans text-[14px] text-[#41534b] leading-relaxed mb-5">
            {selectedNode.description}
          </p>

          {/* Compliance Level Meter */}
          <div className="mb-5 bg-white p-3.5 rounded-lg border border-[#e5ebe7]">
            <div className="flex justify-between items-center text-[12px] font-sans font-semibold mb-1.5">
              <span className="text-[#00271e]">Copertura Audit E.M Safety</span>
              <span className="text-[#0f3e32] font-bold font-serif text-[14px]">{selectedNode.level}% / 100%</span>
            </div>
            <div className="w-full h-2.5 bg-[#eef3f0] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0f3e32] to-[#2dd4bf] rounded-full transition-all duration-700"
                style={{ width: `${selectedNode.level}%` }}
              ></div>
            </div>
          </div>

          {/* Mandatory Checkpoints list */}
          <div className="space-y-2 mb-6">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#556960] block">
              Punti Chiave Garantiti dal Nostro Team:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedNode.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[12.5px] font-sans text-[#00271e]">
                  <CheckCircle2 className="w-4 h-4 text-[#0f3e32] flex-shrink-0 mt-0.5" />
                  <span className="leading-tight">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action to launch Check-up modal */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-[#00271e] text-white font-sans text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#0f3e32] transition-colors"
            >
              <span>Esegui Gap Analysis su {selectedNode.code}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
