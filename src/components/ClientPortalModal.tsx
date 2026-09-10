import { useState, FormEvent } from 'react';
import { X, ShieldAlert, CheckCircle2, FileText, BellRing, Sparkles, Send } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  if (!isOpen) return null;

  const handleWaitlist = (e: FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      setSignedUp(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-[#E5E7EB] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#00271e] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-[#b5ede7] text-[#00201e] font-sans text-[11px] font-bold rounded">
              Nuovo Portale Cloud • In Rilascio
            </span>
          </div>
          <h2 className="font-serif text-[24px] sm:text-[28px] font-medium text-white">
            Area Riservata &amp; Scadenziario E.M Safety
          </h2>
          <p className="font-sans text-[14px] text-[#7ca999] mt-1">
            Il cruscotto digitale per monitorare in tempo reale lo stato di conformità di ogni lavoratore.
          </p>
        </div>

        {/* Portal Feature Preview */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-[#F9FAF8] border border-[#E5E7EB] rounded-lg">
              <BellRing className="w-6 h-6 text-[#5E8276] mb-2" />
              <h4 className="font-sans text-[14px] font-bold text-[#00271e]">
                Alert Scadenze Automatici
              </h4>
              <p className="font-sans text-[12px] text-[#414945] mt-1">
                Avvisi a 90, 60 e 30 giorni prima della scadenza di corsi o visite mediche.
              </p>
            </div>

            <div className="p-4 bg-[#F9FAF8] border border-[#E5E7EB] rounded-lg">
              <FileText className="w-6 h-6 text-[#5E8276] mb-2" />
              <h4 className="font-sans text-[14px] font-bold text-[#00271e]">
                Attestati in Cloud
              </h4>
              <p className="font-sans text-[12px] text-[#414945] mt-1">
                Download immediato in PDF con firma digitale e QR code anti-contraffazione.
              </p>
            </div>

            <div className="p-4 bg-[#F9FAF8] border border-[#E5E7EB] rounded-lg">
              <ShieldAlert className="w-6 h-6 text-[#5E8276] mb-2" />
              <h4 className="font-sans text-[14px] font-bold text-[#00271e]">
                Cruscotto Ispettivo
              </h4>
              <p className="font-sans text-[12px] text-[#414945] mt-1">
                Report istantaneo pronto per l'organo di vigilanza (SPISAL/ATS/INL).
              </p>
            </div>
          </div>

          {/* Interactive Mock Snapshot */}
          <div className="p-4 bg-[#F2F5F2] border border-[#D1E0D7] rounded-lg">
            <div className="flex items-center justify-between mb-3 text-[12px] font-bold text-[#00271e]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#5E8276]" />
                Simulazione Stato Aziendale
              </span>
              <span className="text-[#0f3e32]">Conformità Globale: 94%</span>
            </div>
            <div className="space-y-2 text-[12px] font-sans">
              <div className="bg-white p-2 rounded border border-[#E5E7EB] flex items-center justify-between">
                <span>Aggiornamento Preposti (5 dipendenti)</span>
                <span className="text-[#946E19] font-bold">Scadenza tra 45 gg</span>
              </div>
              <div className="bg-white p-2 rounded border border-[#E5E7EB] flex items-center justify-between">
                <span>Addetti Antincendio Livello 2 (3 dipendenti)</span>
                <span className="text-[#0f3e32] font-bold">In regola (Valido 2028)</span>
              </div>
            </div>
          </div>

          {/* Early Access Signup */}
          <div className="pt-2">
            {signedUp ? (
              <div className="p-4 bg-[#b5ede7]/40 border border-[#5E8276] rounded-lg text-center space-y-1">
                <CheckCircle2 className="w-6 h-6 text-[#0f3e32] mx-auto" />
                <h5 className="font-sans text-[14px] font-bold text-[#00271e]">
                  Grazie! Ti abbiamo inserito tra i primi accessi.
                </h5>
                <p className="font-sans text-[12px] text-[#414945]">
                  Riceverai le credenziali provvisorie appena il portale sarà attivo per la tua matricola.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="space-y-2">
                <label className="block font-sans text-[13px] font-semibold text-[#00271e]">
                  Richiedi abilitazione prioritaria per la tua azienda:
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="nome.cognome@tua-azienda.it"
                    className="flex-1 px-3 py-2 bg-white rounded font-sans text-[13px] text-[#141b2b] border border-[#E5E7EB] focus:outline-none focus:ring-1 focus:ring-[#0f3e32]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#0f3e32] text-white font-sans text-[13px] font-semibold rounded hover:bg-[#00271e] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Invia</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
