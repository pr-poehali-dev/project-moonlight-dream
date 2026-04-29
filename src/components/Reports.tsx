import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const reports = [
  {
    season: "Сезон 3",
    title: "Москва → Тбилиси",
    author: "Артём",
    distance: "3 218 км",
    days: 12,
    cover: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/f0ec4a90-1191-404b-8fe9-4372817dd6d2.png",
    description: "Военно-Грузинская дорога, перевалы, хинкали в 3 ночи и сломанный кондиционер на 40-градусной жаре.",
    url: "#",
    tags: ["Грузия", "Горы", "12 дней"],
  },
  {
    season: "Сезон 3",
    title: "Москва → Алматы",
    author: "Катя",
    distance: "4 120 км",
    days: 15,
    cover: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/9ae06471-25e1-4b54-bed1-dbc9fe3b471e.png",
    description: "Степи, горы Тянь-Шаня и Алматы с высоты 2 200 метров. Каждый день — новый вид из окна.",
    url: "#",
    tags: ["Казахстан", "Горы", "15 дней"],
  },
  {
    season: "Сезон 2",
    title: "Ереван → Тбилиси",
    author: "Артём",
    distance: "2 870 км",
    days: 10,
    cover: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/2a9e006a-9f4d-42d6-87e8-c2c6dc279476.png",
    description: "Арарат на горизонте весь маршрут. Армянский коньяк, монастыри и серпантины без отбойников.",
    url: "#",
    tags: ["Армения", "Грузия", "10 дней"],
  },
  {
    season: "Сезон 2",
    title: "Ош → Бишкек",
    author: "Катя",
    distance: "1 540 км",
    days: 7,
    cover: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/beb4d627-7851-4d6f-a702-5c730053efe1.png",
    description: "Памирский тракт, облака под ногами и чай у пастухов. Самый сложный и самый красивый маршрут.",
    url: "#",
    tags: ["Кыргызстан", "Памир", "7 дней"],
  },
];

export default function Reports() {
  return (
    <section id="reports" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#ff6b1a] uppercase tracking-[0.3em] text-xs font-semibold mb-2">
          Отчёты
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-black leading-tight">
            Все маршруты.<br />Читай, вдохновляйся.
          </h2>
          <a
            href="#archive"
            className="text-[#ff6b1a] text-sm font-bold uppercase tracking-widest hover:underline shrink-0"
          >
            Весь архив →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reports.map((r, idx) => (
            <motion.a
              key={idx}
              href={r.url}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group block border border-[#0a1628]/10 hover:border-[#ff6b1a] transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={r.cover}
                  alt={r.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#ff6b1a] text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1">
                    {r.season}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                  {r.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[#0a1628]/50 text-xs uppercase tracking-widest">
                    {r.author} · {r.distance} · {r.days} дней
                  </p>
                </div>
                <h3 className="text-[#0a1628] text-xl font-black mb-2 group-hover:text-[#ff6b1a] transition-colors">
                  {r.title}
                </h3>
                <p className="text-[#0a1628]/60 text-sm leading-relaxed mb-4">
                  {r.description}
                </p>
                <div className="flex items-center gap-2 text-[#ff6b1a] text-sm font-bold">
                  <span>Читать отчёт</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
