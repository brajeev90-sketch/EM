import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/coursesData';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F9FAF8] py-16 lg:py-20 border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-sans text-[11px] font-bold text-[#5E8276] uppercase tracking-widest block mb-2">
            Chiarezza &amp; Trasparenza
          </span>
          <h2 className="font-serif text-[32px] sm:text-[38px] text-[#00271e] font-medium mb-3 tracking-tight">
            Domande frequenti sulla consulenza e formazione
          </h2>
          <p className="font-sans text-[15px] text-[#414945]">
            Le risposte operative alle principali richieste che riceviamo quotidianamente da responsabili HR, RSPP e amministratori delegati.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] overflow-hidden transition-all duration-200 hover:border-[#5E8276]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-sans text-[16px] sm:text-[17px] leading-snug text-[#00271e] font-bold">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F2F5F2] flex items-center justify-center text-[#5E8276] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#b5ede7] text-[#00201e]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#414945] font-sans text-[14px] sm:text-[15px] leading-relaxed border-t border-[#E5E7EB]/50 pt-4 animate-in fade-in-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
