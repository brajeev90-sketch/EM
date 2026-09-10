/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NeedsSection from './components/NeedsSection';
import MethodologySection from './components/MethodologySection';
import CoursesSection from './components/CoursesSection';
import ProcessSection from './components/ProcessSection';
import OfficesAndQuoteSection from './components/OfficesAndQuoteSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import CourseModal from './components/CourseModal';
import ClientPortalModal from './components/ClientPortalModal';
import GapAnalysisModal from './components/GapAnalysisModal';
import LegalModal from './components/LegalModal';
import { Course } from './types';
import { CheckCircle2, PhoneCall } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [isGapAnalysisOpen, setIsGapAnalysisOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: '',
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [initialServiceInQuote, setInitialServiceInQuote] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -76;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (defaultService = '') => {
    setInitialServiceInQuote(defaultService);
    scrollToSection('preventivo-rapido');
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

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'metodologia', 'catalogo-corsi', 'fasi', 'preventivo-rapido'];
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF8] text-[#141b2b]">
      {/* Fixed Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pt-20">
        {/* Section 1: Hero */}
        <HeroSection
          onQuoteClick={() => handleOpenQuote()}
          onExploreCoursesClick={() => scrollToSection('catalogo-corsi')}
        />

        {/* Section 2: Needs / Orientation */}
        <NeedsSection
          onSelectOption={handleNeedOptionSelect}
          onSelectSectorQuote={(sectorName) => handleOpenQuote(`Consulenza e Roadmap: ${sectorName}`)}
        />

        {/* Section 3: Methodology & SGI */}
        <MethodologySection onOpenGapAnalysis={() => setIsGapAnalysisOpen(true)} />

        {/* Section 4: Accredited Course Catalog */}
        <CoursesSection
          onSelectCourse={(course) => setSelectedCourse(course)}
          onContactSupport={() => handleOpenQuote('corsi')}
        />

        {/* Section 5: Process in 4 phases */}
        <ProcessSection />

        {/* Section 6: Strategic Offices & Quote Form / Quick Calculator */}
        <OfficesAndQuoteSection initialService={initialServiceInQuote} />

        {/* Section 7: FAQs */}
        <FaqSection />
      </main>

      {/* Corporate Institutional Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenLegalModal={(title, content) =>
          setLegalModal({ isOpen: true, title, content })
        }
      />

      {/* Floating Fast Call Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <a
          href="tel:+3904221456565"
          className="flex items-center gap-2 bg-[#0f3e32] text-white px-4 py-3 rounded-full shadow-lg font-sans text-[13px] font-bold"
          aria-label="Chiama E.M Safety"
        >
          <PhoneCall className="w-4 h-4 text-[#b5ede7]" />
          <span>Chiama Sede</span>
        </a>
      </div>

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#00271e] text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-3 border border-[#5E8276] animate-in fade-in slide-in-from-bottom-3 max-w-md text-center">
          <CheckCircle2 className="w-5 h-5 text-[#b5ede7] flex-shrink-0" />
          <span className="font-sans text-[13px] font-medium">{toastMessage}</span>
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

