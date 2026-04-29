import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 34290, suffix: "", label: "километров", sublabel: "пройдено вместе", color: "#ff6b1a", icon: "road" },
  { value: 9513, suffix: "", label: "фотографий", sublabel: "сделано в пути", color: "#3b82f6", icon: "camera" },
  { value: 5, suffix: "", label: "сезонов", sublabel: "приключений", color: "#10b981", icon: "star" },
  { value: 11, suffix: "", label: "стран", sublabel: "на двоих", color: "#f59e0b", icon: "globe" },
  { value: 847, suffix: "", label: "кадров", sublabel: "лучших за сезон 3", color: "#a855f7", icon: "film" },
];

const seasonData = [
  { season: "Сезон 1", artem: 4200, kate: 0, year: "2021" },
  { season: "Сезон 2", artem: 5870, kate: 4540, year: "2022" },
  { season: "Сезон 3", artem: 8350, kate: 11330, year: "2023–24" },
];

const maxKm = Math.max(...seasonData.flatMap((s) => [s.artem, s.kate]));

function RoadIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 24 L14 4 L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="7" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="9" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="17" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M10 9 L12 5 L16 5 L18 9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="22" cy="13" r="1.5" fill="currentColor" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <polygon points="14,3 17,11 26,11 19,16 21,25 14,20 7,25 9,16 2,11 11,11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="14" cy="14" rx="5" ry="11" stroke="currentColor" strokeWidth="2" />
      <line x1="3" y1="14" x2="25" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="5" y1="8" x2="23" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="5" y1="20" x2="23" y2="20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function FilmIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="6" x2="8" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="6" x2="20" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="9" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="5" y="16" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="20" y="9" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="20" y="16" width="3" height="3" rx="0.5" fill="currentColor" />
      <polygon points="12,12 18,14 12,16" fill="currentColor" />
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  road: <RoadIcon />,
  camera: <CameraIcon />,
  star: <StarIcon />,
  globe: <GlobeIcon />,
  film: <FilmIcon />,
};

export default function Infographic() {
  const barRef = useRef(null);
  const barsInView = useInView(barRef, { once: true });

  return (
    <section id="stats" className="bg-[#f5f3ef] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#ff6b1a] uppercase tracking-[0.3em] text-xs font-semibold mb-2">
          Статистика
        </p>
        <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-black leading-tight mb-14">
          Цифры не врут.
        </h2>

        {/* Main stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white p-5 flex flex-col gap-3 border border-transparent hover:border-[#ff6b1a]/30 transition-all duration-300"
            >
              <div style={{ color: s.color }}>{icons[s.icon]}</div>
              <div>
                <p className="text-[#0a1628] text-2xl sm:text-3xl font-black leading-none">
                  <AnimatedNumber target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[#0a1628] font-bold text-sm mt-1">{s.label}</p>
                <p className="text-[#0a1628]/40 text-xs mt-0.5">{s.sublabel}</p>
              </div>
              <div className="h-1 w-full rounded-full" style={{ background: `${s.color}30` }}>
                <div className="h-1 rounded-full" style={{ width: "100%", background: s.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bar chart: km by season */}
        <div ref={barRef} className="bg-white p-6 sm:p-8">
          <h3 className="text-[#0a1628] font-black text-xl mb-6">Километры по сезонам</h3>
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff6b1a]" />
              <span className="text-xs text-[#0a1628]/60 uppercase tracking-widest">Артём</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
              <span className="text-xs text-[#0a1628]/60 uppercase tracking-widest">Катя</span>
            </div>
          </div>

          <div className="space-y-6">
            {seasonData.map((s, idx) => (
              <div key={s.season}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[#0a1628] font-bold text-sm">{s.season}</p>
                  <p className="text-[#0a1628]/40 text-xs">{s.year}</p>
                </div>
                <div className="space-y-1.5">
                  {/* Artem bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[#0a1628]/40 w-10 text-right">А</span>
                    <div className="flex-1 h-6 bg-[#0a1628]/5 relative overflow-hidden">
                      <motion.div
                        className="h-full flex items-center justify-end pr-2"
                        style={{ background: "#ff6b1a" }}
                        initial={{ width: 0 }}
                        animate={barsInView ? { width: `${(s.artem / maxKm) * 100}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
                      >
                        {s.artem > 0 && (
                          <span className="text-white text-[10px] font-bold whitespace-nowrap">
                            {s.artem.toLocaleString("ru-RU")} км
                          </span>
                        )}
                      </motion.div>
                    </div>
                  </div>
                  {/* Kate bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[#0a1628]/40 w-10 text-right">К</span>
                    <div className="flex-1 h-6 bg-[#0a1628]/5 relative overflow-hidden">
                      <motion.div
                        className="h-full flex items-center justify-end pr-2"
                        style={{ background: "#3b82f6" }}
                        initial={{ width: 0 }}
                        animate={barsInView ? { width: `${(s.kate / maxKm) * 100}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: idx * 0.15 + 0.1, ease: "easeOut" }}
                      >
                        {s.kate > 0 && (
                          <span className="text-white text-[10px] font-bold whitespace-nowrap">
                            {s.kate.toLocaleString("ru-RU")} км
                          </span>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
