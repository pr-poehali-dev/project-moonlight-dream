import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  {
    src: "/images/mountain-landscape.jpg",
    author: "Артём",
    location: "Казбеги, Грузия",
    km: 2840,
    caption: "Рассвет на перевале. DriveRoute привёл сюда в 5:47 утра",
  },
  {
    src: "/images/woman-horse.jpg",
    author: "Катя",
    location: "Военно-Грузинская дорога",
    km: 2210,
    caption: "Случайная остановка по заданию — и вот это",
  },
  {
    src: "/images/spiral-circles.jpg",
    author: "Артём",
    location: "Тбилиси, старый город",
    km: 3100,
    caption: "Ночная навигация по лабиринту — без интернета",
  },
  {
    src: "/images/mountain-landscape.jpg",
    author: "Катя",
    location: "Степанцминда",
    km: 2950,
    caption: "Финальный рывок. Впереди 268 км и финиш",
  },
  {
    src: "/images/woman-horse.jpg",
    author: "Артём",
    location: "Владикавказ",
    km: 1540,
    caption: "Первый ночлег. Местные показали маршрут лучше любой карты",
  },
  {
    src: "/images/mountain-landscape.jpg",
    author: "Катя",
    location: "Крестовый перевал",
    km: 2600,
    caption: "−2°C и туман. DriveRoute предложил объезд — я отказалась. Зря",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "artem" | "kate">("all");

  const filtered = photos.filter((p) => {
    if (filter === "all") return true;
    if (filter === "artem") return p.author === "Артём";
    return p.author === "Катя";
  });

  return (
    <section id="gallery" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-[#ff6b1a] uppercase tracking-[0.3em] text-xs font-semibold mb-2">
              Фотоотчёт
            </p>
            <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-black leading-tight">
              847 кадров.<br />Лучшие — здесь.
            </h2>
          </div>
          <div className="flex gap-2">
            {(["all", "artem", "kate"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 uppercase text-xs tracking-widest font-bold border transition-all duration-200 ${
                  filter === f
                    ? "bg-[#0a1628] text-white border-[#0a1628]"
                    : "bg-transparent text-[#0a1628] border-[#0a1628]/30 hover:border-[#0a1628]"
                }`}
              >
                {f === "all" ? "Все" : f === "artem" ? "Артём" : "Катя"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map((photo, idx) => (
            <motion.div
              key={idx}
              layout
              onClick={() => setActive(photos.indexOf(photo))}
              className="relative overflow-hidden cursor-pointer group aspect-square"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0a1628]/0 group-hover:bg-[#0a1628]/60 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                <p className="text-white text-xs font-bold uppercase tracking-widest text-[#ff6b1a]">
                  {photo.author} · {photo.km} км
                </p>
                <p className="text-white text-sm mt-1 leading-snug">{photo.caption}</p>
              </div>
              <div className="absolute top-3 left-3 bg-[#0a1628]/70 px-2 py-1">
                <p className="text-[10px] uppercase tracking-widest text-[#ff6b1a] font-bold">
                  {photo.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-[#0a1628]/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full bg-white"
            >
              <img
                src={photos[active].src}
                alt={photos[active].caption}
                className="w-full max-h-[60vh] object-cover"
              />
              <div className="p-6 flex justify-between items-start">
                <div>
                  <p className="text-[#ff6b1a] text-xs uppercase tracking-widest font-bold mb-1">
                    {photos[active].author} · {photos[active].location} · {photos[active].km} км
                  </p>
                  <p className="text-[#0a1628] text-lg font-bold">{photos[active].caption}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="text-[#0a1628]/40 hover:text-[#0a1628] text-2xl ml-6 shrink-0"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
