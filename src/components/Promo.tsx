import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  const cities = ["Тбилиси", "Алматы", "Ереван", "Баку", "Бишкек"];
  const [cityVotes, setCityVotes] = useState([3241, 2187, 1954, 1102, 876]);
  const [voted, setVoted] = useState<number | null>(null);
  const total = cityVotes.reduce((a, b) => a + b, 0);

  const handleVote = (idx: number) => {
    if (voted !== null) return;
    setVoted(idx);
    setCityVotes((v) => v.map((val, i) => (i === idx ? val + 1 : val)));
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden py-20"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Карта маршрутов"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1628]/75" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center">
        <p className="text-[#ff6b1a] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
          Голосование
        </p>
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
          В КАКОЙ ГОРОД<br />ЕДЕМ ДАЛЬШЕ?
        </h2>
        <p className="text-white/60 text-sm mb-10">
          Следующий сезон DriveRoute Challenge стартует туда, куда скажешь ты
        </p>

        <div className="space-y-3">
          {cities.map((city, idx) => {
            const pct = Math.round((cityVotes[idx] / total) * 100);
            const isWinning = cityVotes[idx] === Math.max(...cityVotes);
            return (
              <button
                key={city}
                onClick={() => handleVote(idx)}
                disabled={voted !== null}
                className={`w-full text-left relative overflow-hidden border transition-all duration-300 group ${
                  voted === idx
                    ? "border-[#ff6b1a]"
                    : voted !== null
                    ? "border-white/10 cursor-default"
                    : "border-white/20 hover:border-[#ff6b1a] cursor-pointer"
                }`}
              >
                {voted !== null && (
                  <div
                    className={`absolute inset-y-0 left-0 ${isWinning ? "bg-[#ff6b1a]/20" : "bg-white/5"} transition-all duration-700`}
                    style={{ width: `${pct}%` }}
                  />
                )}
                <div className="relative flex items-center justify-between px-5 py-4">
                  <span className={`font-bold uppercase tracking-wide text-sm ${voted === idx ? "text-[#ff6b1a]" : "text-white"}`}>
                    {city}
                    {isWinning && voted !== null && (
                      <span className="ml-2 text-[10px] bg-[#ff6b1a] text-white px-2 py-0.5 tracking-widest">Лидер</span>
                    )}
                  </span>
                  {voted !== null && (
                    <span className="text-white/60 text-sm font-bold">{pct}%</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {voted !== null && (
          <p className="text-white/50 text-xs mt-6 uppercase tracking-widest">
            Всего голосов: {total.toLocaleString("ru")}
          </p>
        )}
      </div>
    </div>
  );
}
