import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const videos = [
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Тбилиси: финальный день",
    author: "Артём",
    duration: "8:42",
  },
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Алматы с высоты птичьего полёта",
    author: "Катя",
    duration: "5:17",
  },
];

const photos = [
  {
    src: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/f0ec4a90-1191-404b-8fe9-4372817dd6d2.png",
    author: "Артём",
    location: "Тбилиси, Грузия",
    km: 2840,
    caption: "Рассвет на перевале. DriveRoute привёл сюда в 5:47 утра",
  },
  {
    src: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/9ae06471-25e1-4b54-bed1-dbc9fe3b471e.png",
    author: "Катя",
    location: "Алматы, Казахстан",
    km: 2210,
    caption: "Случайная остановка по заданию — и вот это",
  },
  {
    src: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/2a9e006a-9f4d-42d6-87e8-c2c6dc279476.png",
    author: "Артём",
    location: "Ереван, Армения",
    km: 3100,
    caption: "Арарат с высоты — без слов",
  },
  {
    src: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/beb4d627-7851-4d6f-a702-5c730053efe1.png",
    author: "Катя",
    location: "Ош, Кыргызстан",
    km: 2950,
    caption: "Финальный рывок. Впереди 268 км и финиш",
  },
  {
    src: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/f0ec4a90-1191-404b-8fe9-4372817dd6d2.png",
    author: "Артём",
    location: "Тбилиси, старый город",
    km: 1540,
    caption: "Первый ночлег. Местные показали маршрут лучше любой карты",
  },
  {
    src: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/9ae06471-25e1-4b54-bed1-dbc9fe3b471e.png",
    author: "Катя",
    location: "Крестовый перевал",
    km: 2600,
    caption: "−2°C и туман. DriveRoute предложил объезд — я отказалась. Зря",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "artem" | "kate">("all");
  const [tab, setTab] = useState<"photo" | "video">("photo");

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
              Галерея
            </p>
            <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-black leading-tight">
              847 кадров.<br />Лучшие — здесь.
            </h2>
          </div>
          <div className="flex flex-col gap-3 items-end">
            <div className="flex gap-2">
              <button
                onClick={() => setTab("photo")}
                className={`px-4 py-2 uppercase text-xs tracking-widest font-bold border transition-all duration-200 flex items-center gap-2 ${
                  tab === "photo"
                    ? "bg-[#0a1628] text-white border-[#0a1628]"
                    : "bg-transparent text-[#0a1628] border-[#0a1628]/30 hover:border-[#0a1628]"
                }`}
              >
                <Icon name="Image" size={13} /> Фото
              </button>
              <button
                onClick={() => setTab("video")}
                className={`px-4 py-2 uppercase text-xs tracking-widest font-bold border transition-all duration-200 flex items-center gap-2 ${
                  tab === "video"
                    ? "bg-[#0a1628] text-white border-[#0a1628]"
                    : "bg-transparent text-[#0a1628] border-[#0a1628]/30 hover:border-[#0a1628]"
                }`}
              >
                <Icon name="Play" size={13} /> Видео
              </button>
            </div>
            {tab === "photo" && (
              <div className="flex gap-2">
                {(["all", "artem", "kate"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 uppercase text-xs tracking-widest font-bold border transition-all duration-200 ${
                      filter === f
                        ? "bg-[#ff6b1a] text-white border-[#ff6b1a]"
                        : "bg-transparent text-[#0a1628] border-[#0a1628]/30 hover:border-[#0a1628]"
                    }`}
                  >
                    {f === "all" ? "Все" : f === "artem" ? "Артём" : "Катя"}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {tab === "video" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {videos.map((v, idx) => (
              <div key={idx} className="overflow-hidden">
                <div className="relative aspect-video bg-[#0a1628]">
                  <iframe
                    src={v.src}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 border border-t-0 border-[#0a1628]/10">
                  <p className="text-[#ff6b1a] text-xs uppercase tracking-widest font-bold mb-1">
                    {v.author} · {v.duration}
                  </p>
                  <p className="text-[#0a1628] font-bold">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "photo" && (
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
        )}
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