import { useState } from 'react';
import { Menu, X, ArrowRight, Clock, Sparkles } from 'lucide-react';
import EmSafetyLogo from './EmSafetyLogo';

interface HeaderProps {
  onOpenClientPortal: () => void;
  onOpenQuote: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({
  onOpenClientPortal,
  onOpenQuote,
  onNavigate,
  activeSection,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'consulenza', label: 'Consulenza SGI', target: 'metodologia' },
    { id: 'corsi', label: 'Corsi Accreditati', target: 'catalogo-corsi' },
    { id: 'calendario', label: 'Calendario 2026', target: 'catalogo-corsi' },
    { id: 'metodologia-nav', label: 'Metodologia', target: 'metodologia' },
    { id: 'workflow', label: 'Fasi di Lavoro', target: 'fasi' },
    { id: 'contatti', label: 'Sedi & Preventivo', target: 'preventivo-rapido' },
  ];

  const handleNavClick = (targetId: string) => {
    onNavigate(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_10px_rgba(0,39,30,0.06)] border-b border-[#e2e8e4]">
      {/* Micro-bar: Regulatory Status Notification */}
      <div className="bg-[#00271e] text-[#d6ede4] px-4 py-1 text-[11px] font-sans flex items-center justify-between border-b border-[#0f3e32]">
        <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse"></span>
            <span className="font-semibold text-white tracking-wide">Nuovo Accordo Stato-Regioni 2026:</span>
            <span className="hidden sm:inline text-[#b5ede7]">Programmi formativi e piani di adeguamento aggiornati in tempo reale.</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[#a3b8b0]">
            <span>Sedi operative: <strong>Treviso</strong> &amp; <strong>Milano Gae Aulenti</strong></span>
            <span className="text-[#d4af37]">★ Audit ISO 45001 • ISO 14001</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-[74px] flex items-center justify-between gap-4">
        {/* Brand Logo with EmSafetyLogo Component */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f3e32] rounded-lg p-1"
          aria-label="E.M Safety Home"
        >
          <EmSafetyLogo variant="dark" size="md" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Navigazione principale">
          {navItems.map((item) => {
            const isActive = activeSection === item.target;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.target)}
                className={`px-3.5 py-2 font-sans text-[13.5px] font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#eef5f1] text-[#00271e] font-bold shadow-xs'
                    : 'text-[#374941] hover:text-[#00271e] hover:bg-[#f2f7f4]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Area Clienti Pill (Interactive demo modal) */}
          <button
            onClick={onOpenClientPortal}
            className="hidden lg:flex items-center gap-2 font-sans text-[12px] font-bold text-[#0f3e32] bg-[#f0f6f2] hover:bg-[#e4ede7] px-3.5 py-2 rounded-lg border border-[#cbe0d5] transition-all group shadow-2xs"
            title="Accedi all'area riservata clienti e scadenziario formativo"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37] transition-transform group-hover:rotate-12" />
            <span>Area clienti</span>
            <span className="text-[10px] bg-[#dbe8e1] text-[#00271e] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Demo</span>
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center justify-center px-4.5 py-2.5 bg-gradient-to-r from-[#00271e] to-[#0f3e32] text-white font-sans text-[13.5px] font-bold rounded-lg shadow-sm hover:from-[#063328] hover:to-[#175243] hover:shadow-md transition-all duration-200 active:scale-98"
          >
            Richiedi un preventivo
          </button>

          {/* User profile avatar */}
          <div className="relative group hidden sm:block">
            <img
              alt="Profilo Utente E.M Safety"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#cbe0d5] cursor-pointer hover:ring-[#0f3e32] transition-all"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XW688D92v4vnALat_KR2XVKrt750IKhLjf575-f_BrrzZFKlxv2yJL9zwZPHZDe2IznT2hsE3USNejymAXL9xvLrsb8XoGRipKHmzN3jD4pD8dXJw_1_YqKQtD_tLuBVPtzgh4a771GSkDW5BTKK8vYifVFGsGr-mU7gjXCyHST0iWkzswA5U_TipaFtYoJGL_9XgE7ff066geiuOaCoXmQdpEIEotX0VNHyYdhuoaK2cM_IeFHP717g"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#00271e] hover:bg-[#f0f6f2] rounded-lg transition-colors"
            aria-label="Apri menu di navigazione"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E5E7EB] px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.target)}
              className="w-full text-left px-3 py-2.5 font-sans text-[15px] font-semibold text-[#0f3e32] hover:bg-[#f2f7f4] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 text-[#717975]" />
            </button>
          ))}

          <div className="pt-2 border-t border-[#E5E7EB] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClientPortal();
              }}
              className="w-full py-2.5 px-3 text-left font-sans text-[13px] font-semibold text-[#00271e] bg-[#f0f6f2] rounded-lg flex items-center gap-2"
            >
              <Clock className="w-4 h-4 text-[#0f3e32]" />
              <span>Area clienti (Anteprima portale digitale)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
