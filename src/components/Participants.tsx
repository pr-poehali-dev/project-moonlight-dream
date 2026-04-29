import { motion } from "framer-motion";

const participants = [
  {
    name: "Артём",
    city: "Москва",
    age: 28,
    km: 18420,
    photos: 4312,
    seasons: 3,
    avatar: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/f0ec4a90-1191-404b-8fe9-4372817dd6d2.png",
    tagline: "Едет быстро, снимает чётко",
    color: "#ff6b1a",
  },
  {
    name: "Катя",
    city: "Санкт-Петербург",
    age: 26,
    km: 15870,
    photos: 5201,
    seasons: 2,
    avatar: "https://cdn.poehali.dev/projects/81e7de98-a561-4796-8802-e5bddaa91a28/bucket/2a9e006a-9f4d-42d6-87e8-c2c6dc279476.png",
    tagline: "Навигатор сломан. Едем по звёздам",
    color: "#3b82f6",
  },
];

const statLabel: Record<string, string> = {
  km: "км пройдено",
  photos: "фото сделано",
  seasons: "сезонов",
};

export default function Participants() {
  return (
    <section id="participants" className="bg-[#f5f3ef] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#ff6b1a] uppercase tracking-[0.3em] text-xs font-semibold mb-2">
          Участники
        </p>
        <h2 className="text-[#0a1628] text-4xl sm:text-5xl font-black leading-tight mb-14">
          Кто за рулём.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {participants.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                    {p.city} · {p.age} лет
                  </p>
                  <h3 className="text-white text-3xl font-black">{p.name}</h3>
                  <p className="text-white/80 text-sm mt-1 italic">«{p.tagline}»</p>
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-[#0a1628]/10 border-t border-[#0a1628]/10">
                {(["km", "photos", "seasons"] as const).map((key) => (
                  <div key={key} className="p-5 text-center">
                    <p
                      className="text-2xl font-black"
                      style={{ color: p.color }}
                    >
                      {p[key].toLocaleString("ru-RU")}
                    </p>
                    <p className="text-[#0a1628]/50 text-xs uppercase tracking-widest mt-1">
                      {statLabel[key]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "34 290", label: "км вместе" },
            { value: "9 513", label: "фото всего" },
            { value: "5", label: "сезонов" },
            { value: "11", label: "стран" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0a1628] p-6 text-center">
              <p className="text-[#ff6b1a] text-3xl font-black">{stat.value}</p>
              <p className="text-white/50 text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
