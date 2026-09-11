import { useState } from 'react';
import { Menu, X, ArrowRight, Clock, Sparkles, QrCode } from 'lucide-react';
import EmSafetyLogo from './EmSafetyLogo';
import { soundFX } from '../utils/audio';

interface HeaderProps {
  onOpenClientPortal: () => void;
  onOpenCertificateVerify: () => void;
  onOpenQuote: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({
  onOpenClientPortal,
  onOpenCertificateVerify,
  onOpenQuote,
  onNavigate,
  activeSection,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'chi-siamo-nav', label: 'Chi Siamo', target: 'chi-siamo' },
    { id: 'simulatore', label: 'Simulatore 2026', target: 'simulatore-obblighi' },
    { id: 'consulenza', label: 'Consulenza SGI', target: 'metodologia' },
    { id: 'corsi', label: 'Corsi Accreditati', target: 'catalogo-corsi' },
    { id: 'casi-studio-nav', label: 'Casi Studio', target: 'casi-studio' },
    { id: 'partner-nav', label: 'Diventa Partner', target: 'partner' },
    { id: 'contatti', label: 'Sedi & Preventivo', target: 'preventivo-rapido' },
  ];

  const handleNavClick = (targetId: string) => {
    soundFX.playBeep(920);
    onNavigate(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-[0_2px_12px_rgba(11,37,69,0.06)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[88px] flex items-center justify-between gap-3">
        {/* Brand Logo with EmSafetyLogo + Official Slogan Lockup */}
        <button
          onClick={() => {
            soundFX.playBeep(700);
            onNavigate('hero');
          }}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2545] rounded-xl p-1 transition-opacity hover:opacity-95 flex items-center cursor-pointer group"
          aria-label="E.M Safety Home"
        >
          {/* Slogan with logo for sm and up */}
          <div className="hidden sm:block">
            <EmSafetyLogo
              variant="navy"
              size="sm"
              showTagline={true}
              showSlogan={true}
              sloganPlacement="right"
            />
          </div>
          {/* Compact logo on very small mobile */}
          <div className="sm:hidden">
            <EmSafetyLogo
              variant="navy"
              size="xs"
              showTagline={true}
              showSlogan={false}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Navigazione principale">
          {navItems.map((item) => {
            const isActive = activeSection === item.target;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.target)}
                className={`px-3 py-2 font-sans text-[13px] font-semibold rounded-xl transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-[#0b2545] border border-blue-200/80 shadow-xs font-bold'
                    : 'text-slate-700 hover:text-[#0b2545] hover:bg-slate-100/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Area Clienti Pill */}
          <button
            onClick={() => {
              soundFX.playLaser();
              onOpenClientPortal();
            }}
            className="hidden lg:flex items-center gap-2 font-sans text-[12.5px] font-semibold text-slate-700 bg-slate-100/90 hover:bg-slate-200 hover:text-[#0b2545] px-3.5 py-2 rounded-xl border border-slate-200/80 transition-all group cursor-pointer"
            title="Accedi all'area riservata clienti e scadenziario formativo"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 transition-transform group-hover:rotate-12" />
            <span>Area Clienti</span>
            <span className="text-[9.5px] bg-[#0b2545] text-amber-300 px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
              CLOUD
            </span>
          </button>

          {/* Primary CTA Button: Dark Blue with Warm Amber/Gold Border */}
          <button
            onClick={() => {
              soundFX.playChime();
              onOpenQuote();
            }}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-[#0b2545] hover:bg-[#07192e] text-white font-sans text-[13.5px] font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 border-b-2 border-amber-400 cursor-pointer whitespace-nowrap"
          >
            <span>Richiedi Preventivo</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              soundFX.playBeep();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="xl:hidden p-2 text-[#0b2545] hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 cursor-pointer"
            aria-label="Apri menu di navigazione"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2 backdrop-blur-xl">
          {/* Official Logo with Slogan inside Drawer */}
          <div className="pb-3 mb-2 border-b border-slate-200 flex justify-center text-center">
            <EmSafetyLogo
              variant="navy"
              size="sm"
              showTagline={true}
              showSlogan={true}
              sloganPlacement="centered"
            />
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.target)}
              className="w-full text-left px-3.5 py-2.5 font-sans text-[14.5px] font-semibold text-slate-700 hover:text-[#0b2545] hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 text-amber-500" />
            </button>
          ))}

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                soundFX.playLaser();
                onOpenCertificateVerify();
              }}
              className="w-full py-2.5 px-3 text-left font-sans text-[13px] font-bold text-[#0b2545] bg-blue-50 hover:bg-blue-100/70 rounded-xl flex items-center gap-2 border border-blue-200 cursor-pointer"
            >
              <QrCode className="w-4 h-4 text-amber-500" />
              <span>Verifica Attestato (Registro Nazionale)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                soundFX.playLaser();
                onOpenClientPortal();
              }}
              className="w-full py-2.5 px-3 text-left font-sans text-[13px] font-bold text-[#0b2545] bg-slate-100 rounded-xl flex items-center gap-2 cursor-pointer"
            >
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Area Clienti (Scadenziario Cloud Demo)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
