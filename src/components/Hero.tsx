import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const [voted, setVoted] = useState<string | null>(null);
  const [votes, setVotes] = useState({ artem: 1842, kate: 2317 });

  const handleVote = (who: "artem" | "kate") => {
    if (voted) return;
    setVoted(who);
    setVotes((v) => ({ ...v, [who]: v[who] + 1 }));
  };

  const total = votes.artem + votes.kate;

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Горный маршрут"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/30 to-[#0a1628]/70" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4 w-full max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-[#ff6b1a] text-xs sm:text-sm mb-4 font-semibold">
          DriveRoute Challenge — Сезон 3
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none">
          КТО КРУЧЕ?
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-10">
          Артём и Катя едут из Москвы в Тбилиси без навигатора — только DriveRoute и интуиция. Кто доберётся быстрее?
        </p>

        {!voted ? (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => handleVote("artem")}
              className="px-8 py-3 bg-[#ff6b1a] text-white uppercase text-sm tracking-widest font-bold hover:bg-[#e55a0a] transition-colors duration-300"
            >
              За Артёма
            </button>
            <button
              onClick={() => handleVote("kate")}
              className="px-8 py-3 bg-transparent border-2 border-white text-white uppercase text-sm tracking-widest font-bold hover:bg-white hover:text-[#0a1628] transition-colors duration-300"
            >
              За Катю
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-[#ff6b1a] font-bold uppercase tracking-widest text-sm">
              Твой голос учтён!
            </p>
            <div className="max-w-sm mx-auto space-y-2">
              <div className="flex justify-between text-sm">
                <span>Артём</span>
                <span>{Math.round((votes.artem / total) * 100)}%</span>
              </div>
              <div className="w-full bg-white/20 h-2">
                <div
                  className="bg-[#ff6b1a] h-2 transition-all duration-700"
                  style={{ width: `${(votes.artem / total) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span>Катя</span>
                <span>{Math.round((votes.kate / total) * 100)}%</span>
              </div>
              <div className="w-full bg-white/20 h-2">
                <div
                  className="bg-white h-2 transition-all duration-700"
                  style={{ width: `${(votes.kate / total) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 flex justify-center gap-8 sm:gap-16 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#ff6b1a]">3 218</p>
            <p className="text-xs uppercase tracking-widest opacity-70 mt-1">км маршрута</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#ff6b1a]">847</p>
            <p className="text-xs uppercase tracking-widest opacity-70 mt-1">фото в пути</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#ff6b1a]">4 159</p>
            <p className="text-xs uppercase tracking-widest opacity-70 mt-1">голосов сегодня</p>
          </div>
        </div>
      </div>
    </div>
  );
}
