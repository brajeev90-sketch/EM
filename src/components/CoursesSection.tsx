import { useState, useMemo } from 'react';
import {
  Search,
  RotateCcw,
  Calendar,
  MapPin,
  ArrowRight,
  Headphones,
  CheckCircle2,
  Users,
  HardHat,
  BadgeCheck,
  Flame,
  FileBadge,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { soundFX } from '../utils/audio';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onContactSupport: () => void;
}

export default function CoursesSection({
  onSelectCourse,
  onContactSupport,
}: CoursesSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMode, setSelectedMode] = useState('all');

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.legalRef.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || course.category === selectedCategory;

      const matchesMode =
        selectedMode === 'all' ||
        course.mode.includes(selectedMode as 'milano' | 'treviso' | 'fad');

      return matchesSearch && matchesCategory && matchesMode;
    });
  }, [searchQuery, selectedCategory, selectedMode]);

  const handleReset = () => {
    soundFX.playLaser();
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedMode('all');
  };

  const getCourseIcon = (course: Course) => {
    switch (course.category) {
      case 'lavoratori':
        return <Users className="w-6 h-6 text-[#0b2545]" />;
      case 'preposti':
        return <HardHat className="w-6 h-6 text-amber-600" />;
      case 'rspp':
        return <BadgeCheck className="w-6 h-6 text-blue-700" />;
      case 'emergenza':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'dirigenti':
        return <FileBadge className="w-6 h-6 text-amber-700" />;
      default:
        return <Users className="w-6 h-6 text-[#0b2545]" />;
    }
  };

  const getBadgeStyle = (type: Course['badgeType']) => {
    switch (type) {
      case 'urgent':
        return 'bg-amber-100 text-amber-950 border border-amber-400 font-bold';
      case 'mandatory':
        return 'bg-blue-50 text-[#0b2545] border border-blue-200 font-bold';
      case 'open':
      default:
        return 'bg-amber-50 text-amber-800 border border-amber-200 font-bold';
    }
  };

  return (
    <section id="catalogo-corsi" className="w-full bg-slate-50/60 py-16 lg:py-24 border-b border-slate-200 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-[#0b2545] rounded-full text-[12px] font-sans font-bold uppercase tracking-widest mb-3 border border-blue-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>ACADEMY 2026 • CATALOGO ACCREDITATO</span>
            </div>
            <h2 className="font-serif text-[32px] sm:text-[42px] text-[#0b2545] font-bold tracking-tight">
              Percorsi Formativi &amp; Abilitazioni di Legge
            </h2>
          </div>
          <p className="font-sans text-[15.5px] text-slate-600 max-w-md">
            Consulta i percorsi in partenza a Treviso, Milano o in modalità Videoconferenza Sincrona certificata con emissione attestati validati con QR code.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-8 flex flex-col lg:flex-row items-center gap-3 shadow-sm">
          {/* Text Input Search */}
          <div className="relative w-full lg:flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca corso (es. Lavoratori, Preposti, Primo Soccorso, Antincendio...)"
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 rounded-xl font-sans text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0b2545] focus:ring-1 focus:ring-[#0b2545] border border-slate-200"
            />
          </div>

          {/* Filter Selects */}
          <div className="w-full lg:w-auto flex flex-wrap sm:flex-nowrap items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => {
                soundFX.playBeep(800);
                setSelectedCategory(e.target.value);
              }}
              className="w-full sm:w-auto px-3.5 py-2.5 bg-slate-50 text-slate-700 rounded-xl font-sans text-[13px] font-semibold border border-slate-200 focus:outline-none focus:border-[#0b2545] cursor-pointer"
            >
              <option value="all">Tutti i Destinatari</option>
              <option value="lavoratori">Lavoratori Generali/Specifici</option>
              <option value="preposti">Preposti (Nuovo Accordo 2026)</option>
              <option value="dirigenti">Dirigenti</option>
              <option value="rspp">RSPP / ASPP</option>
              <option value="emergenza">Emergenze (Antincendio / Primo Soccorso)</option>
            </select>

            <select
              value={selectedMode}
              onChange={(e) => {
                soundFX.playBeep(850);
                setSelectedMode(e.target.value);
              }}
              className="w-full sm:w-auto px-3.5 py-2.5 bg-slate-50 text-slate-700 rounded-xl font-sans text-[13px] font-semibold border border-slate-200 focus:outline-none focus:border-[#0b2545] cursor-pointer"
            >
              <option value="all">Tutte le Modalità</option>
              <option value="milano">Aula Milano Gae Aulenti</option>
              <option value="treviso">Aula Treviso</option>
              <option value="fad">Videoconferenza / FAD Sincrona</option>
            </select>

            <button
              onClick={handleReset}
              className="px-3.5 py-2.5 text-slate-600 hover:text-[#0b2545] hover:bg-slate-100 rounded-xl font-sans text-[13px] font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap border border-slate-200 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-[13px] font-sans text-slate-500 mb-4">
          <span>
            Visualizzazione di <strong className="text-[#0b2545] font-bold">{filteredCourses.length}</strong> corsi accreditati
          </span>
          {(searchQuery || selectedCategory !== 'all' || selectedMode !== 'all') && (
            <span className="text-amber-700 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Filtri attivi
            </span>
          )}
        </div>

        {/* Interactive Course Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Courses Cards (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {filteredCourses.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
                <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="font-serif text-[20px] text-[#0b2545] font-bold mb-1">
                  Nessun corso corrispondente trovato
                </h3>
                <p className="font-sans text-[14.5px] text-slate-600 max-w-md mx-auto mb-4">
                  Prova a modificare i termini di ricerca o contattaci direttamente per organizzare una sessione formativa su misura per la tua azienda.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0b2545] text-white font-sans text-[13.5px] font-bold rounded-xl shadow-sm hover:bg-[#07192e] cursor-pointer"
                >
                  Reimposta tutti i filtri
                </button>
              </div>
            ) : (
              filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -3 }}
                  className="bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-blue-300 transition-all duration-200 p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Course Category Icon */}
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-200 flex-shrink-0 flex items-center justify-center mt-1 group-hover:scale-105 transition-all">
                      {getCourseIcon(course)}
                    </div>

                    <div>
                      {/* Badge and Legal Ref */}
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 font-mono text-[10.5px] font-bold rounded-md uppercase tracking-wider ${getBadgeStyle(
                            course.badgeType
                          )}`}
                        >
                          {course.badge}
                        </span>
                        <span className="font-sans text-[12px] text-slate-500 font-semibold">
                          {course.legalRef}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-[19px] font-bold text-[#0b2545] mb-1.5 leading-snug group-hover:text-blue-700 transition-colors">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-[13.5px] text-slate-600 mb-3 leading-relaxed max-w-xl">
                        {course.description}
                      </p>

                      {/* Metadata Row */}
                      <div className="flex flex-wrap items-center gap-4 font-sans text-[12.5px] text-slate-600">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>Prossima data: <strong className="text-[#0b2545]">{course.nextDate}</strong></span>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-amber-600" />
                          <span className="text-slate-700 font-medium">{course.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Column */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 flex-shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <button
                      onClick={() => {
                        soundFX.playLaser();
                        onSelectCourse(course);
                      }}
                      className="px-5 py-2.5 bg-[#0b2545] hover:bg-[#07192e] text-white font-sans text-[13.5px] font-bold rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer border-b-2 border-amber-400"
                    >
                      <span>Vedi scheda</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </button>
                    <span className="font-sans text-[11px] text-slate-500 text-right">
                      {course.category === 'preposti'
                        ? 'Accordo Stato-Regioni 2026'
                        : course.category === 'rspp'
                        ? 'Crediti formativi validati'
                        : course.category === 'emergenza'
                        ? 'Prove pratiche certificate'
                        : 'Attestato con QR univoco'}
                    </span>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Sticky Right Consultation Support Card (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-slate-200 p-6 rounded-3xl shadow-lg flex flex-col justify-between overflow-hidden">
              {/* Classroom Photo Header */}
              <div className="relative -mx-6 -mt-6 mb-5 h-44 overflow-hidden rounded-t-3xl border-b border-slate-200">
                <img
                  src="/src/assets/images/safety_training_classroom_1789049617274.jpg"
                  alt="Aula Formazione Executive E.M Safety a Milano"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545] via-[#0b2545]/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="font-sans text-[10px] font-bold text-amber-300 uppercase tracking-wider bg-[#0b2545]/80 px-2 py-0.5 rounded border border-amber-400/40">
                    AULE EXECUTIVE &amp; FAD SINCRONA
                  </span>
                  <div className="font-serif text-[17px] font-bold mt-1 text-white leading-tight">
                    Academy E.M Safety • Milano &amp; Treviso
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[20px] font-bold text-[#0b2545] mb-2">
                  Hai bisogno di orientamento sul fabbisogno formativo?
                </h3>
                <p className="font-sans text-[14px] leading-relaxed text-slate-600 mb-5">
                  I requisiti orari dipendono dal codice ATECO, dal DVR e dal nuovo Accordo Stato-Regioni 2026. L'ufficio didattico analizza i fascicoli del tuo personale senza impegno.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 font-sans text-[13.5px] text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Check preventivo dei patentini e delle scadenze pregresse</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-sans text-[13.5px] text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Sessioni in house personalizzate direttamente in azienda</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-sans text-[13.5px] text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Supporto gratuito per corsi finanziati tramite Fondi Paritetici</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    soundFX.playLaser();
                    onContactSupport();
                  }}
                  className="w-full py-3.5 px-4 bg-[#0b2545] hover:bg-[#07192e] text-white font-sans text-[14px] font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border-b-2 border-amber-400"
                >
                  <span>Parla con un referente didattico</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
                <div className="mt-3 text-center font-sans text-[11.5px] text-slate-500">
                  Contatto diretto con l'ingegnere formatore • Nessun call center
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
