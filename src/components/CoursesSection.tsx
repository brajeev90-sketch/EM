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
import { Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';

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
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedMode('all');
  };

  const getCourseIcon = (course: Course) => {
    switch (course.category) {
      case 'lavoratori':
        return <Users className="w-6 h-6 text-[#00271e]" />;
      case 'preposti':
        return <HardHat className="w-6 h-6 text-[#946E19]" />;
      case 'rspp':
        return <BadgeCheck className="w-6 h-6 text-[#00271e]" />;
      case 'emergenza':
        return <Flame className="w-6 h-6 text-[#00271e]" />;
      case 'dirigenti':
        return <FileBadge className="w-6 h-6 text-[#00271e]" />;
      default:
        return <Users className="w-6 h-6 text-[#00271e]" />;
    }
  };

  const getIconBg = (course: Course) => {
    switch (course.category) {
      case 'lavoratori':
        return 'bg-[#b5ede7]';
      case 'preposti':
        return 'bg-[#FBF5E6]';
      case 'rspp':
        return 'bg-[#D1E0D7]';
      case 'emergenza':
        return 'bg-[#b5ede7]';
      case 'dirigenti':
        return 'bg-[#F2F5F2]';
      default:
        return 'bg-[#b5ede7]';
    }
  };

  const getBadgeStyle = (type: Course['badgeType']) => {
    switch (type) {
      case 'urgent':
        return 'bg-[#FEE2E2] text-[#991B1B]';
      case 'mandatory':
        return 'bg-[#b5ede7] text-[#00201e]';
      case 'open':
      default:
        return 'bg-[#b5ede7] text-[#00201e]';
    }
  };

  return (
    <section id="catalogo-corsi" className="w-full bg-white py-16 lg:py-20 border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-sans text-[11px] font-bold text-[#5E8276] uppercase tracking-widest block mb-1">
              Catalogo Formativo Accreditato
            </span>
            <h2 className="font-serif text-[32px] sm:text-[38px] text-[#00271e] font-medium tracking-tight">
              Trova il corso adatto alla tua azienda
            </h2>
          </div>
          <p className="font-sans text-[15px] text-[#414945] max-w-md">
            Consulta i percorsi in partenza a Treviso, Milano o in modalità Videoconferenza Sincrona certificata.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="bg-[#F9FAF8] p-4 rounded-lg shadow-sm border border-[#E5E7EB] mb-8 flex flex-col lg:flex-row items-center gap-3">
          {/* Text Input Search */}
          <div className="relative w-full lg:flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717975] w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca corso (es. Lavoratori, Preposti, Primo Soccorso...)"
              className="w-full pl-10 pr-4 py-2 bg-white rounded font-sans text-[14px] text-[#141b2b] placeholder:text-[#717975] focus:outline-none focus:ring-1 focus:ring-[#0f3e32] border border-[#E5E7EB] shadow-sm"
            />
          </div>

          {/* Filter Selects */}
          <div className="w-full lg:w-auto flex flex-wrap sm:flex-nowrap items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 bg-white text-[#141b2b] rounded font-sans text-[13px] border border-[#E5E7EB] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0f3e32] cursor-pointer"
            >
              <option value="all">Tutti i Destinatari</option>
              <option value="lavoratori">Lavoratori Generali/Specifici</option>
              <option value="preposti">Preposti</option>
              <option value="dirigenti">Dirigenti</option>
              <option value="rspp">RSPP / ASPP</option>
              <option value="emergenza">Emergenze (Antincendio / Primo Soccorso)</option>
            </select>

            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 bg-white text-[#141b2b] rounded font-sans text-[13px] border border-[#E5E7EB] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0f3e32] cursor-pointer"
            >
              <option value="all">Tutte le Modalità</option>
              <option value="milano">Aula Milano Gae Aulenti</option>
              <option value="treviso">Aula Treviso</option>
              <option value="fad">Videoconferenza / FAD Sincrona</option>
            </select>

            <button
              onClick={handleReset}
              className="px-3 py-2 text-[#414945] hover:text-[#00271e] hover:bg-white rounded font-sans text-[13px] font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap border border-transparent hover:border-[#E5E7EB]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Results Counter & Indicator */}
        <div className="flex items-center justify-between text-[13px] text-[#717975] mb-4">
          <span>
            Visualizzazione di <strong>{filteredCourses.length}</strong> percorsi formativi accreditati
          </span>
          {(searchQuery || selectedCategory !== 'all' || selectedMode !== 'all') && (
            <span className="text-[#0f3e32] font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#5E8276]" /> Filtri applicati
            </span>
          )}
        </div>

        {/* Interactive Course Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Courses Cards (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {filteredCourses.length === 0 ? (
              <div className="p-12 text-center bg-[#F9FAF8] rounded-lg border border-[#E5E7EB]">
                <Search className="w-10 h-10 text-[#717975] mx-auto mb-3" />
                <h3 className="font-serif text-[20px] text-[#00271e] font-semibold mb-1">
                  Nessun corso corrispondente trovato
                </h3>
                <p className="font-sans text-[14px] text-[#414945] max-w-md mx-auto mb-4">
                  Prova a modificare i termini di ricerca o contattaci direttamente per organizzare una sessione formativa su misura per la tua azienda.
                </p>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-[#0f3e32] text-white font-sans text-[13px] font-semibold rounded shadow-sm hover:bg-[#00271e]"
                >
                  Reimposta tutti i filtri
                </button>
              </div>
            ) : (
              filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[#F9FAF8] hover:bg-[#F2F5F2] border border-[#E5E7EB] transition-all duration-200 p-6 rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Course Category Icon */}
                    <div
                      className={`w-12 h-12 rounded-full ${getIconBg(
                        course
                      )} flex-shrink-0 flex items-center justify-center mt-1 shadow-sm`}
                    >
                      {getCourseIcon(course)}
                    </div>

                    <div>
                      {/* Badge and Legal Ref */}
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 font-sans text-[11px] font-bold rounded ${getBadgeStyle(
                            course.badgeType
                          )}`}
                        >
                          {course.badge}
                        </span>
                        <span className="font-sans text-[12px] text-[#717975]">
                          {course.legalRef}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-sans text-[18px] font-bold text-[#00271e] mb-1.5 leading-snug group-hover:text-[#0f3e32] transition-colors">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-[13px] text-[#414945] mb-3 leading-relaxed max-w-xl">
                        {course.description}
                      </p>

                      {/* Metadata Row */}
                      <div className="flex flex-wrap items-center gap-4 font-sans text-[12px] text-[#414945]">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#5E8276]" />
                          <span>Prossima data: <strong>{course.nextDate}</strong></span>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#5E8276]" />
                          <span>{course.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Column */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 flex-shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E5E7EB]">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="px-4 py-2 bg-[#0f3e32] text-white font-sans text-[13px] font-semibold rounded shadow-sm hover:bg-[#00271e] transition-colors whitespace-nowrap flex items-center gap-1.5"
                    >
                      <span>Vedi scheda</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="font-sans text-[11px] text-[#717975] text-right">
                      {course.category === 'preposti'
                        ? 'Conforme L. 215/2021'
                        : course.category === 'rspp'
                        ? 'Crediti formativi validati'
                        : course.category === 'emergenza'
                        ? 'Prove pratiche certificate'
                        : 'Attestato con codice univoco'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sticky Right Consultation Support Card (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#fbfcfb] border border-[#dce5df] p-6 rounded-2xl shadow-sm flex flex-col justify-between overflow-hidden">
              {/* Classroom Photo Header */}
              <div className="relative -mx-6 -mt-6 mb-5 h-44 overflow-hidden rounded-t-2xl">
                <img
                  src="/src/assets/images/safety_training_classroom_1789049617274.jpg"
                  alt="Aula Formazione Executive E.M Safety a Milano"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00271e] via-[#00271e]/40 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="font-sans text-[10px] font-bold text-[#b5ede7] uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    Aule &amp; FAD Sincrona
                  </span>
                  <div className="font-serif text-[15px] font-bold mt-1 text-white leading-tight">
                    Academy E.M Safety • Milano &amp; Treviso
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[20px] font-bold text-[#00271e] mb-2">
                  Hai bisogno di orientamento sul fabbisogno formativo?
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-[#41534b] mb-5">
                  I requisiti orari dipendono dal codice ATECO, dal DVR e dal nuovo Accordo Stato-Regioni 2026. L'ufficio didattico analizza i fascicoli del tuo personale senza impegno.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 font-sans text-[13px] text-[#00271e]">
                    <CheckCircle2 className="w-4 h-4 text-[#0f3e32] flex-shrink-0 mt-0.5" />
                    <span>Check preventivo dei patentini e delle scadenze pregresse</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-sans text-[13px] text-[#00271e]">
                    <CheckCircle2 className="w-4 h-4 text-[#0f3e32] flex-shrink-0 mt-0.5" />
                    <span>Sessioni in house personalizzate direttamente in azienda</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-sans text-[13px] text-[#00271e]">
                    <CheckCircle2 className="w-4 h-4 text-[#0f3e32] flex-shrink-0 mt-0.5" />
                    <span>Supporto gratuito per corsi finanziati tramite Fondi Paritetici</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={onContactSupport}
                  className="w-full py-3 px-4 bg-[#00271e] text-white font-sans text-[13px] font-bold rounded-lg shadow-sm hover:bg-[#0f3e32] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Parla con un referente didattico</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="mt-3 text-center font-sans text-[11px] text-[#556960] font-medium">
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
