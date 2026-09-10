import { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface GapAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAssistance: (summary: string) => void;
}

export default function GapAnalysisModal({
  isOpen,
  onClose,
  onRequestAssistance,
}: GapAnalysisModalProps) {
  const [dvrStatus, setDvrStatus] = useState<'updated' | 'expired' | 'missing'>('updated');
  const [trainingStatus, setTrainingStatus] = useState<'all' | 'partial' | 'unknown'>('partial');
  const [prepostiStatus, setPrepostiStatus] = useState<'appointed' | 'toUpdate' | 'none'>('toUpdate');
  const [emergencyTeam, setEmergencyTeam] = useState<'trained' | 'toRenew' | 'none'>('trained');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const calculateRiskIndex = () => {
    let score = 100;
    if (dvrStatus === 'expired') score -= 30;
    if (dvrStatus === 'missing') score -= 50;

    if (trainingStatus === 'partial') score -= 20;
    if (trainingStatus === 'unknown') score -= 35;

    if (prepostiStatus === 'toUpdate') score -= 15;
    if (prepostiStatus === 'none') score -= 25;

    if (emergencyTeam === 'toRenew') score -= 15;
    if (emergencyTeam === 'none') score -= 30;

    return Math.max(10, score);
  };

  const score = calculateRiskIndex();

  const handleComplete = () => {
    setSubmitted(true);
  };

  const handleTransferToQuote = () => {
    const summary = `Esito autovalutazione Gap Analysis: Conformità stimata al ${score}%. DVR: ${dvrStatus}, Formazione: ${trainingStatus}, Preposti: ${prepostiStatus}, Emergenze: ${emergencyTeam}.`;
    onRequestAssistance(summary);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-[#E5E7EB] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#00271e] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="px-2.5 py-0.5 bg-[#b5ede7] text-[#00201e] font-sans text-[11px] font-bold rounded inline-block mb-2">
            Check-up Veloce di Conformità D.Lgs 81/08
          </span>
          <h2 className="font-serif text-[24px] sm:text-[28px] font-medium text-white">
            Gap Analysis di Sicurezza Aziendale
          </h2>
          <p className="font-sans text-[14px] text-[#7ca999] mt-1">
            Rispondi a 4 semplici quesiti per una valutazione istantanea dei punti critici del tuo sistema HSE.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {!submitted ? (
            <div className="space-y-6">
              {/* Question 1: DVR */}
              <div>
                <label className="block font-sans text-[14px] font-bold text-[#00271e] mb-2">
                  1. Stato del Documento di Valutazione dei Rischi (DVR):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setDvrStatus('updated')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      dvrStatus === 'updated'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Aggiornato di recente (&lt; 1 anno)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDvrStatus('expired')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      dvrStatus === 'expired'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Non aggiornato / Modifiche recenti
                  </button>
                  <button
                    type="button"
                    onClick={() => setDvrStatus('missing')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      dvrStatus === 'missing'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Da redigere / Non reperibile
                  </button>
                </div>
              </div>

              {/* Question 2: Training */}
              <div>
                <label className="block font-sans text-[14px] font-bold text-[#00271e] mb-2">
                  2. Formazione Generale e Specifica Lavoratori:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTrainingStatus('all')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      trainingStatus === 'all'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    100% dipendenti formati e in regola
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrainingStatus('partial')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      trainingStatus === 'partial'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Neoassunti o scadenze da regolarizzare
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrainingStatus('unknown')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      trainingStatus === 'unknown'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Situazione non monitorata
                  </button>
                </div>
              </div>

              {/* Question 3: Preposti */}
              <div>
                <label className="block font-sans text-[14px] font-bold text-[#00271e] mb-2">
                  3. Figura del Preposto (Legge 215/2021):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPrepostiStatus('appointed')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      prepostiStatus === 'appointed'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Nomine formali e formazione biennale attive
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrepostiStatus('toUpdate')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      prepostiStatus === 'toUpdate'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Preposti di fatto senza nomina scritta
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrepostiStatus('none')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      prepostiStatus === 'none'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Nessuna figura individuata
                  </button>
                </div>
              </div>

              {/* Question 4: Emergenza */}
              <div>
                <label className="block font-sans text-[14px] font-bold text-[#00271e] mb-2">
                  4. Squadra Primo Soccorso &amp; Antincendio (D.M. 02/09/2021):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setEmergencyTeam('trained')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      emergencyTeam === 'trained'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Addetti sufficienti con attestati validi
                  </button>
                  <button
                    type="button"
                    onClick={() => setEmergencyTeam('toRenew')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      emergencyTeam === 'toRenew'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Triennio scaduto o numero addetti ridotto
                  </button>
                  <button
                    type="button"
                    onClick={() => setEmergencyTeam('none')}
                    className={`p-3 rounded-lg border text-left font-sans text-[12px] transition-colors ${
                      emergencyTeam === 'none'
                        ? 'border-[#0f3e32] bg-[#F2F5F2] font-semibold text-[#00271e]'
                        : 'border-[#E5E7EB] hover:bg-[#F9FAF8] text-[#414945]'
                    }`}
                  >
                    Nessun addetto nominato
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleComplete}
                className="w-full py-3 bg-[#0f3e32] text-white font-sans text-[14px] font-semibold rounded hover:bg-[#00271e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calcola Esito e Priorità di Intervento</span>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-[#E5E7EB] bg-[#F9FAF8] text-center">
                <span className="font-sans text-[12px] font-bold text-[#5E8276] uppercase tracking-wider block mb-1">
                  Indice di Conformità Stimato
                </span>
                <div className="font-serif text-[48px] font-bold text-[#00271e] leading-tight">
                  {score}%
                </div>
                <div className="flex items-center justify-center gap-2 mt-1">
                  {score >= 80 ? (
                    <span className="inline-flex items-center gap-1 text-[#0f3e32] text-[13px] font-semibold">
                      <CheckCircle2 className="w-4 h-4" /> Rischio Basso - Buona tutela complessiva
                    </span>
                  ) : score >= 55 ? (
                    <span className="inline-flex items-center gap-1 text-[#946E19] text-[13px] font-semibold">
                      <AlertTriangle className="w-4 h-4" /> Rischio Moderato - Vulnerabilità sanzionabili
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[#991B1B] text-[13px] font-semibold">
                      <ShieldAlert className="w-4 h-4" /> Rischio Elevato - Elevata esposizione sanzionatoria
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-sans text-[14px] font-bold text-[#00271e]">
                  Azioni raccomandate dai tecnici E.M Safety:
                </h4>
                <ul className="space-y-1.5 font-sans text-[13px] text-[#414945]">
                  {dvrStatus !== 'updated' && (
                    <li className="flex items-start gap-2">
                      <span className="text-[#991B1B] font-bold">•</span>
                      <span>Revisione prioritaria del Documento di Valutazione dei Rischi con sopralluogo tecnico.</span>
                    </li>
                  )}
                  {trainingStatus !== 'all' && (
                    <li className="flex items-start gap-2">
                      <span className="text-[#991B1B] font-bold">•</span>
                      <span>Iscrizione immediata dei lavoratori privi di attestato al corso Generale + Specifica.</span>
                    </li>
                  )}
                  {prepostiStatus !== 'appointed' && (
                    <li className="flex items-start gap-2">
                      <span className="text-[#946E19] font-bold">•</span>
                      <span>Formalizzazione dell'incarico preposti con corso dedicato 8 ore conforme L. 215/2021.</span>
                    </li>
                  )}
                  {emergencyTeam !== 'trained' && (
                    <li className="flex items-start gap-2">
                      <span className="text-[#946E19] font-bold">•</span>
                      <span>Sessione pratica antincendio e primo soccorso per gli incaricati d'emergenza.</span>
                    </li>
                  )}
                  {score === 100 && (
                    <li className="flex items-start gap-2 text-[#0f3e32]">
                      <span>Ottima gestione! Si raccomanda di mantenere attivo il monitoraggio delle scadenze periodiche.</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleTransferToQuote}
                  className="flex-1 py-2.5 bg-[#0f3e32] text-white font-sans text-[13px] font-semibold rounded hover:bg-[#00271e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Richiedi proposta correttiva su misura</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2.5 bg-white text-[#414945] font-sans text-[13px] rounded border border-[#E5E7EB] hover:bg-[#F2F5F2] transition-colors cursor-pointer"
                >
                  Ricalcola
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
