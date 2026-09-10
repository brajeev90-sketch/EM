import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export default function LegalModal({ isOpen, title, content, onClose }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full border border-[#E5E7EB] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between bg-[#F9FAF8]">
          <div className="flex items-center gap-2 text-[#00271e]">
            <ShieldCheck className="w-5 h-5 text-[#5E8276]" />
            <h3 className="font-sans text-[16px] font-bold">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#717975] hover:text-[#00271e] hover:bg-[#E5E7EB] rounded-lg transition-colors cursor-pointer"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-[#414945] font-sans text-[14px] leading-relaxed space-y-3 max-h-[70vh] overflow-y-auto">
          <p>{content}</p>
          <div className="pt-3 border-t border-[#E5E7EB] text-[12px] text-[#717975]">
            Per ulteriori informazioni o richieste sui propri dati, è sempre possibile contattare il Responsabile della Protezione Dati (DPO) all'indirizzo e-mail: <strong className="text-[#00271e]">privacy@emsafetygroup.it</strong>.
          </div>
        </div>

        <div className="px-6 py-3 bg-[#F9FAF8] border-t border-[#E5E7EB] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0f3e32] text-white font-sans text-[13px] font-semibold rounded hover:bg-[#00271e] transition-colors cursor-pointer"
          >
            Ho compreso
          </button>
        </div>
      </div>
    </div>
  );
}
