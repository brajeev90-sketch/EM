import { useState, FormEvent } from 'react';
import { X, Calendar, MapPin, CheckCircle2, ShieldCheck, Clock, Send, Award } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onBookingSuccess: (courseTitle: string) => void;
}

export default function CourseModal({
  course,
  onClose,
  onBookingSuccess,
}: CourseModalProps) {
  const [attendees, setAttendees] = useState(1);
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  if (!course) return null;

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmed(true);
      setTimeout(() => {
        onBookingSuccess(course.title);
      }, 1500);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E5E7EB] flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#b5ede7] text-[#00201e] font-sans text-[11px] font-bold rounded">
              {course.badge}
            </span>
            <span className="font-sans text-[12px] text-[#717975]">
              {course.legalRef}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#717975] hover:text-[#00271e] hover:bg-[#F2F5F2] rounded-lg transition-colors cursor-pointer"
            aria-label="Chiudi scheda corso"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="font-sans text-[11px] font-bold text-[#5E8276] uppercase tracking-wider block mb-1">
              {course.categoryLabel}
            </span>
            <h2 className="font-serif text-[26px] sm:text-[32px] text-[#00271e] font-semibold leading-tight">
              {course.title}
            </h2>
            <p className="font-sans text-[15px] text-[#414945] mt-2 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Key Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#F9FAF8] rounded-lg border border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#5E8276]" />
              <div>
                <span className="font-sans text-[11px] text-[#717975] block">Durata Totale</span>
                <span className="font-sans text-[13px] font-bold text-[#00271e]">{course.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#5E8276]" />
              <div>
                <span className="font-sans text-[11px] text-[#717975] block">Prossima Sessione</span>
                <span className="font-sans text-[13px] font-bold text-[#00271e]">{course.nextDate}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#5E8276]" />
              <div>
                <span className="font-sans text-[11px] text-[#717975] block">Sede / Modalità</span>
                <span className="font-sans text-[13px] font-bold text-[#00271e]">{course.location}</span>
              </div>
            </div>
          </div>

          {/* Program Syllabus */}
          <div>
            <h3 className="font-sans text-[16px] font-bold text-[#00271e] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#5E8276]" />
              <span>Programma Didattico Ministeriale</span>
            </h3>
            <ul className="space-y-2">
              {course.program.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-sans text-[13px] text-[#414945]">
                  <CheckCircle2 className="w-4 h-4 text-[#5E8276] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prerequisites and Accreditation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#F2F5F2] rounded-lg border border-[#D1E0D7]">
              <span className="font-sans text-[11px] font-bold text-[#0f3e32] uppercase tracking-wider block mb-1">
                Destinatari &amp; Prerequisiti
              </span>
              <p className="font-sans text-[13px] text-[#414945] leading-relaxed">
                {course.prerequisites}
              </p>
            </div>
            <div className="p-4 bg-[#FBF5E6] rounded-lg border border-[#D1A751]/30">
              <span className="font-sans text-[11px] font-bold text-[#946E19] uppercase tracking-wider block mb-1">
                Certificazione &amp; Attestato
              </span>
              <p className="font-sans text-[13px] text-[#414945] leading-relaxed">
                {course.certification}
              </p>
            </div>
          </div>

          {/* Quick Seat Reservation Form */}
          <div className="p-6 bg-[#F9FAF8] rounded-xl border border-[#E5E7EB]">
            {confirmed ? (
              <div className="text-center py-4 space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#0f3e32] mx-auto" />
                <h4 className="font-sans text-[18px] font-bold text-[#00271e]">
                  Iscrizione preliminare registrata!
                </h4>
                <p className="font-sans text-[13px] text-[#414945]">
                  La segreteria didattica ti contatterà per l'invio dei moduli anagrafici dei partecipanti.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-[16px] font-bold text-[#00271e]">
                      Prenota posti per questa sessione
                    </h4>
                    <span className="font-sans text-[12px] text-[#717975]">
                      Nessun pagamento anticipato richiesto adesso
                    </span>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-[#5E8276]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-sans text-[12px] font-semibold text-[#00271e] mb-1">
                      Ragione Sociale Azienda *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Es. Officine Meccaniche Srl"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded font-sans text-[13px] text-[#141b2b] border border-[#E5E7EB] focus:outline-none focus:ring-1 focus:ring-[#0f3e32]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[12px] font-semibold text-[#00271e] mb-1">
                      Numero Partecipanti
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={attendees}
                      onChange={(e) => setAttendees(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white rounded font-sans text-[13px] text-[#141b2b] border border-[#E5E7EB] focus:outline-none focus:ring-1 focus:ring-[#0f3e32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-sans text-[12px] font-semibold text-[#00271e] mb-1">
                      Email di Contatto *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="segreteria@azienda.it"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded font-sans text-[13px] text-[#141b2b] border border-[#E5E7EB] focus:outline-none focus:ring-1 focus:ring-[#0f3e32]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[12px] font-semibold text-[#00271e] mb-1">
                      Telefono Diretto *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+39 345 0000000"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded font-sans text-[13px] text-[#141b2b] border border-[#E5E7EB] focus:outline-none focus:ring-1 focus:ring-[#0f3e32]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-[#0f3e32] text-white font-sans text-[13px] font-semibold rounded hover:bg-[#00271e] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Registrazione in corso...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Blocca {attendees} Posti per la data del {course.nextDate}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
