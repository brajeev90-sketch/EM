/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import AboutUsPage from './components/AboutUsPage';
import PartnerSection from './components/PartnerSection';
import NeedsSection from './components/NeedsSection';
import ComplianceSimulator from './components/ComplianceSimulator';
import MethodologySection from './components/MethodologySection';
import SanctionsProtectionSection from './components/SanctionsProtectionSection';
import CoursesSection from './components/CoursesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ProcessSection from './components/ProcessSection';
import OfficesAndQuoteSection from './components/OfficesAndQuoteSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import CourseModal from './components/CourseModal';
import ClientPortalModal from './components/ClientPortalModal';
import GapAnalysisModal from './components/GapAnalysisModal';
import CertificateVerifyModal from './components/CertificateVerifyModal';
import QuickActionDock from './components/QuickActionDock';
import LegalModal from './components/LegalModal';
import CyberBackground from './components/CyberBackground';
import AnimatedSafetyInspector from './components/AnimatedSafetyInspector';
import { Course } from './types';
import { CheckCircle2, PhoneCall } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [isGapAnalysisOpen, setIsGapAnalysisOpen] = useState(false);
  const [isCertificateVerifyOpen, setIsCertificateVerifyOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: '',
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [initialServiceInQuote, setInitialServiceInQuote] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    // If currently on the dedicated About page and user wants another section, switch back to home first
    if (currentPage === 'about') {
      setCurrentPage('home');
      if (sectionId === 'chi-siamo') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (defaultService = '') => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setInitialServiceInQuote(defaultService);
    setTimeout(() => {
      scrollToSection('preventivo-rapido');
    }, 50);
  };

  const handleNeedOptionSelect = (type: 'consulting' | 'courses' | 'support') => {
    if (type === 'consulting') {
      scrollToSection('metodologia');
    } else if (type === 'courses') {
      scrollToSection('catalogo-corsi');
    } else {
      scrollToSection('preventivo-rapido');
    }
  };

  const handleBookingSuccess = (courseTitle: string) => {
    setSelectedCourse(null);
    setToastMessage(`Prenotazione per "${courseTitle}" salvata! Verrai ricontattato a breve.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleTransferGapAnalysis = (_summary: string) => {
    setInitialServiceInQuote('audit');
    scrollToSection('preventivo-rapido');
    setToastMessage('Esito autovalutazione pre-compilato nel modulo preventivo.');
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleTransferSimulator = (summary: string) => {
    setInitialServiceInQuote(summary);
    scrollToSection('preventivo-rapido');
    setToastMessage('Parametri simulazione esportati nel modulo preventivo.');
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handlePartnerSubmitted = (name: string) => {
    setToastMessage(`Candidatura di partnership per "${name}" registrata con successo!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  // Observe active section on scroll when on home page
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = [
        'hero',
        'chi-siamo',
        'simulatore-obblighi',
        'metodologia',
        'catalogo-corsi',
        'casi-studio',
        'fasi',
        'partner',
        'preventivo-rapido',
      ];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        if (sectionId === 'hero' && window.scrollY < 200) {
          setActiveSection('hero');
          break;
        }
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 relative">
      {/* High-Tech Animated Ambient Particle & Mesh Layer in Navy & Gold */}
      <CyberBackground />

      {/* Fixed Header */}
      <Header
        activeSection={currentPage === 'about' ? 'chi-siamo' : activeSection}
        onNavigate={(target) => {
          if (target === 'chi-siamo') {
            scrollToSection('chi-siamo');
          } else {
            scrollToSection(target);
          }
        }}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
        onOpenCertificateVerify={() => setIsCertificateVerifyOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Area */}
      {currentPage === 'about' ? (
        <AboutUsPage
          onBackToHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenQuote={handleOpenQuote}
          onExploreCourses={() => {
            setCurrentPage('home');
            setTimeout(() => scrollToSection('catalogo-corsi'), 50);
          }}
          onOpenPartner={() => {
            setCurrentPage('home');
            setTimeout(() => scrollToSection('partner'), 50);
          }}
        />
      ) : (
        <main className="flex-1 pt-20">
          {/* Section 1: Hero */}
          <HeroSection
            onQuoteClick={() => handleOpenQuote()}
            onExploreCoursesClick={() => scrollToSection('catalogo-corsi')}
          />

          {/* Section 2: About Us Section (with shortcut to full About Us page) */}
          <div className="relative">
            <AboutUsSection
              onOpenQuote={handleOpenQuote}
              onExploreCourses={() => scrollToSection('catalogo-corsi')}
              onOpenPartner={() => scrollToSection('partner')}
            />
            {/* Dedicated Page Toggle Bar */}
            <div className="bg-blue-50/70 border-b border-blue-100 py-3 text-center px-4">
              <span className="font-sans text-[13px] text-slate-600 mr-3">
                Vuoi approfondire l'organigramma e la storia aziendale completa?
              </span>
              <button
                type="button"
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-sans text-[13px] font-bold text-[#0b2545] hover:text-blue-700 underline decoration-amber-400 cursor-pointer"
              >
                Apri la Pagina Dedicata "Chi Siamo" →
              </button>
            </div>
          </div>

          {/* Section 3: Needs / Orientation */}
          <NeedsSection
            onSelectOption={handleNeedOptionSelect}
            onSelectSectorQuote={(sectorName) => handleOpenQuote(`Consulenza e Roadmap: ${sectorName}`)}
          />

          {/* Section 3.5: Interactive Visual Safety Inspector & Laser Scanner */}
          <section id="scanner-ispettivo" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <AnimatedSafetyInspector />
          </section>

          {/* Section 4: Interactive Compliance Simulator */}
          <section id="simulatore-obblighi" className="max-w-[1360px] mx-auto px-4 lg:px-8 py-12">
            <ComplianceSimulator onApplyToQuote={handleTransferSimulator} />
          </section>

          {/* Section 5: Methodology & SGI */}
          <MethodologySection onOpenGapAnalysis={() => setIsGapAnalysisOpen(true)} />

          {/* Section 6: Legal Sanctions & Protection D.Lgs 81/08 */}
          <SanctionsProtectionSection
            onOpenConsultingQuote={() => handleOpenQuote('Incarico RSPP & Presidio Legale D.Lgs 81/08')}
          />

          {/* Section 7: Accredited Course Catalog */}
          <CoursesSection
            onSelectCourse={(course) => setSelectedCourse(course)}
            onContactSupport={() => handleOpenQuote('corsi')}
          />

          {/* Section 8: Case Studies & Quantifiable Results */}
          <div id="casi-studio">
            <CaseStudiesSection onSelectCaseQuote={(service) => handleOpenQuote(service)} />
          </div>

          {/* Section 9: Process in 4 phases */}
          <ProcessSection />

          {/* Section 10: Partner with us Section */}
          <PartnerSection onPartnerSubmitted={handlePartnerSubmitted} />

          {/* Section 11: Strategic Offices & Quote Form / Quick Calculator */}
          <OfficesAndQuoteSection initialService={initialServiceInQuote} />

          {/* Section 12: FAQs */}
          <FaqSection />
        </main>
      )}

      {/* Corporate Institutional Footer */}
      <Footer
        onNavigate={(target) => {
          if (target === 'chi-siamo') {
            scrollToSection('chi-siamo');
          } else {
            scrollToSection(target);
          }
        }}
        onOpenLegalModal={(title, content) =>
          setLegalModal({ isOpen: true, title, content })
        }
      />

      {/* Modern Floating Action Dock */}
      <QuickActionDock
        onOpenSimulator={() => scrollToSection('simulatore-obblighi')}
        onOpenCertificateVerify={() => setIsCertificateVerifyOpen(true)}
        onOpenGapAnalysis={() => setIsGapAnalysisOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating Fast Call Button for Mobile */}
      <div className="fixed bottom-20 right-4 z-30 sm:hidden">
        <a
          href="tel:+3904221456565"
          className="flex items-center gap-2 bg-[#0b2545] text-white px-4 py-2.5 rounded-full shadow-lg border border-amber-400/40 font-sans text-[12px] font-bold"
          aria-label="Chiama E.M Safety"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>Chiama Sede</span>
        </a>
      </div>

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0b2545] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-400/50 animate-in fade-in slide-in-from-bottom-3 max-w-md text-center">
          <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <span className="font-sans text-[13px] font-medium text-slate-100">{toastMessage}</span>
        </div>
      )}

      {/* Modal: Course Details & Reservation */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Modal: Client Portal Preview */}
      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />

      {/* Modal: Gap Analysis Checkup */}
      <GapAnalysisModal
        isOpen={isGapAnalysisOpen}
        onClose={() => setIsGapAnalysisOpen(false)}
        onRequestAssistance={handleTransferGapAnalysis}
      />

      {/* Modal: Certificate Verification Tool */}
      <CertificateVerifyModal
        isOpen={isCertificateVerifyOpen}
        onClose={() => setIsCertificateVerifyOpen(false)}
      />

      {/* Modal: Legal Policies */}
      <LegalModal
        isOpen={legalModal.isOpen}
        title={legalModal.title}
        content={legalModal.content}
        onClose={() =>
          setLegalModal({ isOpen: false, title: '', content: '' })
        }
      />
    </div>
  );
}
