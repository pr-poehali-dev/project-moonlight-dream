import { useState } from "react";
import { motion } from "framer-motion";

const routes = [
  {
    id: "s3a",
    author: "Артём",
    season: "Сезон 3",
    from: "Москва",
    to: "Тбилиси",
    km: 3218,
    days: 12,
    color: "#ff6b1a",
    // SVG path coordinates (simplified map of CIS region)
    points: [
      { x: 310, y: 110, city: "Москва" },
      { x: 290, y: 145, city: "Воронеж" },
      { x: 280, y: 175, city: "Ростов-на-Дону" },
      { x: 268, y: 210, city: "Владикавказ" },
      { x: 255, y: 235, city: "Тбилиси" },
    ],
  },
  {
    id: "s3k",
    author: "Катя",
    season: "Сезон 3",
    from: "Москва",
    to: "Алматы",
    km: 4120,
    days: 15,
    color: "#3b82f6",
    points: [
      { x: 310, y: 110, city: "Москва" },
      { x: 355, y: 120, city: "Казань" },
      { x: 400, y: 130, city: "Уфа" },
      { x: 445, y: 150, city: "Оренбург" },
      { x: 480, y: 185, city: "Актобе" },
      { x: 510, y: 220, city: "Алматы" },
    ],
  },
  {
    id: "s2a",
    author: "Артём",
    season: "Сезон 2",
    from: "Ереван",
    to: "Тбилиси",
    km: 2870,
    days: 10,
    color: "#f59e0b",
    points: [
      { x: 310, y: 110, city: "Москва" },
      { x: 285, y: 150, city: "Ростов-на-Дону" },
      { x: 262, y: 245, city: "Ереван" },
      { x: 255, y: 235, city: "Тбилиси" },
    ],
  },
  {
    id: "s2k",
    author: "Катя",
    season: "Сезон 2",
    from: "Ош",
    to: "Бишкек",
    km: 1540,
    days: 7,
    color: "#10b981",
    points: [
      { x: 310, y: 110, city: "Москва" },
      { x: 440, y: 148, city: "Уфа" },
      { x: 490, y: 210, city: "Алматы" },
      { x: 495, y: 230, city: "Бишкек" },
      { x: 478, y: 258, city: "Ош" },
    ],
  },
];

function pointsToPath(points: { x: number; y: number }[]) {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
}

export default function RouteMap() {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<{ x: number; y: number; name: string } | null>(null);

  const active = routes.find((r) => r.id === activeRoute);

  return (
    <section id="map" className="bg-[#0a1628] py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#ff6b1a] uppercase tracking-[0.3em] text-xs font-semibold mb-2">
          Маршруты
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <h2 className="text-white text-4xl sm:text-5xl font-black leading-tight">
            Где мы были.<br />Куда едем дальше.
          </h2>
          <p className="text-white/40 text-sm max-w-xs">
            Выбери маршрут, чтобы увидеть детали путешествия
          </p>
        </div>

        {/* Route selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveRoute(null)}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-bold border transition-all duration-200 ${
              activeRoute === null
                ? "bg-white text-[#0a1628] border-white"
                : "bg-transparent text-white/60 border-white/20 hover:border-white/60"
            }`}
          >
            Все маршруты
          </button>
          {routes.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveRoute(activeRoute === r.id ? null : r.id)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-bold border transition-all duration-200`}
              style={{
                backgroundColor: activeRoute === r.id ? r.color : "transparent",
                borderColor: activeRoute === r.id ? r.color : "rgba(255,255,255,0.2)",
                color: activeRoute === r.id ? "#fff" : "rgba(255,255,255,0.6)",
              }}
            >
              {r.author} · {r.from} → {r.to}
            </button>
          ))}
        </div>

        <div className="relative">
          {/* Map SVG */}
          <div className="relative w-full overflow-hidden border border-white/10" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #0a1628 50%, #071020 100%)" }}>
            <svg
              viewBox="0 0 700 320"
              className="w-full"
              style={{ minHeight: 220 }}
            >
              {/* Grid lines */}
              {[...Array(8)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 45} x2="700" y2={i * 45} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}
              {[...Array(12)].map((_, i) => (
                <line key={`v${i}`} x1={i * 65} y1="0" x2={i * 65} y2="320" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}

              {/* Country shapes (simplified blobs) */}
              {/* Russia */}
              <path d="M 80 20 L 580 20 L 600 80 L 500 140 L 420 120 L 350 130 L 280 160 L 200 140 L 100 120 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              {/* Kazakhstan */}
              <path d="M 360 130 L 580 140 L 560 240 L 440 260 L 380 220 L 350 170 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              {/* Georgia/Armenia */}
              <path d="M 230 210 L 290 200 L 300 250 L 240 260 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              {/* Kyrgyzstan */}
              <path d="M 460 220 L 530 210 L 530 270 L 460 280 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

              {/* Routes */}
              {routes.map((r) => {
                const isActive = activeRoute === null || activeRoute === r.id;
                return (
                  <g key={r.id}>
                    {/* Route path */}
                    <path
                      d={pointsToPath(r.points)}
                      stroke={r.color}
                      strokeWidth={activeRoute === r.id ? 3 : 1.5}
                      strokeDasharray={activeRoute === r.id ? "none" : "6 4"}
                      fill="none"
                      opacity={isActive ? 1 : 0.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Animated dot on active route */}
                    {activeRoute === r.id && (
                      <circle r="4" fill={r.color}>
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path={pointsToPath(r.points)}
                        />
                      </circle>
                    )}
                    {/* City dots */}
                    {r.points.map((p, pi) => (
                      <g key={pi}>
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={pi === 0 || pi === r.points.length - 1 ? 5 : 3}
                          fill={pi === 0 || pi === r.points.length - 1 ? r.color : "#fff"}
                          opacity={isActive ? 1 : 0.2}
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredCity({ x: p.x, y: p.y, name: p.city })}
                          onMouseLeave={() => setHoveredCity(null)}
                        />
                        {(pi === 0 || pi === r.points.length - 1) && isActive && (
                          <text
                            x={p.x + 8}
                            y={p.y + 4}
                            fontSize="9"
                            fill={r.color}
                            fontFamily="Montserrat, sans-serif"
                            fontWeight="700"
                            letterSpacing="0.5"
                          >
                            {p.city.toUpperCase()}
                          </text>
                        )}
                      </g>
                    ))}
                  </g>
                );
              })}

              {/* Hovered city tooltip */}
              {hoveredCity && (
                <g>
                  <rect
                    x={hoveredCity.x + 10}
                    y={hoveredCity.y - 14}
                    width={hoveredCity.name.length * 7 + 12}
                    height={20}
                    fill="#0a1628"
                    stroke="#ff6b1a"
                    strokeWidth="1"
                    rx="2"
                  />
                  <text
                    x={hoveredCity.x + 16}
                    y={hoveredCity.y + 1}
                    fontSize="9"
                    fill="#fff"
                    fontFamily="Montserrat, sans-serif"
                    fontWeight="600"
                  >
                    {hoveredCity.name}
                  </text>
                </g>
              )}

              {/* Compass */}
              <g transform="translate(650, 40)">
                <circle cx="0" cy="0" r="18" fill="rgba(10,22,40,0.8)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <text x="0" y="-6" textAnchor="middle" fontSize="8" fill="#ff6b1a" fontFamily="Montserrat" fontWeight="900">N</text>
                <line x1="0" y1="-14" x2="0" y2="14" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                <line x1="-14" y1="0" x2="14" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                <polygon points="0,-14 3,-4 -3,-4" fill="#ff6b1a" />
                <polygon points="0,14 3,4 -3,4" fill="rgba(255,255,255,0.3)" />
              </g>
            </svg>
          </div>

          {/* Active route info card */}
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 border border-white/10 p-5 grid grid-cols-2 sm:grid-cols-4 gap-4"
              style={{ borderLeftColor: active.color, borderLeftWidth: 3 }}
            >
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Маршрут</p>
                <p className="text-white font-black">{active.from} → {active.to}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Участник</p>
                <p className="font-black" style={{ color: active.color }}>{active.author}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Расстояние</p>
                <p className="text-white font-black">{active.km.toLocaleString("ru-RU")} км</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Длительность</p>
                <p className="text-white font-black">{active.days} дней</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
