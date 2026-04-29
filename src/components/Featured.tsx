export default function Featured() {
  const challenges = [
    {
      icon: "🏔️",
      title: "Горный перевал",
      desc: "Подняться на высоту 2400м без предварительного планирования маршрута",
      done: true,
    },
    {
      icon: "🍽️",
      title: "Местная кухня",
      desc: "Поесть в 5 заведениях без вывески — только по рекомендации местных",
      done: true,
    },
    {
      icon: "🌅",
      title: "Рассветный кадр",
      desc: "Поймать рассвет в точке, которую укажет DriveRoute — сюрпризом",
      done: false,
    },
    {
      icon: "🎲",
      title: "Случайный съезд",
      desc: "Свернуть с маршрута по первому знаку и провести там минимум 2 часа",
      done: false,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-[#0a1628]">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 relative overflow-hidden">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Живой маршрут DriveRoute"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a1628]/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 bg-[#0a1628]/80 backdrop-blur-sm p-4 border-l-4 border-[#ff6b1a]">
          <p className="text-[#ff6b1a] text-xs uppercase tracking-widest font-semibold mb-1">Сейчас в пути</p>
          <p className="text-white text-sm font-bold">Артём — Владикавказ → Казбеги</p>
          <p className="text-white/60 text-xs mt-1">осталось 87 км · прибытие в 18:42</p>
        </div>
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-xs tracking-widest text-[#ff6b1a] font-semibold">
          Челленджи маршрута
        </h3>
        <p className="text-2xl lg:text-4xl mb-8 text-white leading-tight font-black">
          Каждый километр —<br />новое задание.
        </p>
        <div className="space-y-3 mb-8">
          {challenges.map((c, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-4 border ${
                c.done
                  ? "border-[#ff6b1a]/40 bg-[#ff6b1a]/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <span className="text-xl shrink-0 mt-0.5">{c.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className={`text-sm font-bold ${c.done ? "text-[#ff6b1a]" : "text-white"}`}>
                    {c.title}
                  </p>
                  {c.done && (
                    <span className="text-[10px] uppercase tracking-widest bg-[#ff6b1a] text-white px-2 py-0.5 font-bold">
                      Выполнено
                    </span>
                  )}
                </div>
                <p className="text-white/60 text-xs leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#ff6b1a] text-white px-6 py-3 text-sm transition-all duration-300 hover:bg-[#e55a0a] cursor-pointer w-fit uppercase tracking-widest font-bold">
          Повтори сам →
        </button>
      </div>
    </div>
  );
}
