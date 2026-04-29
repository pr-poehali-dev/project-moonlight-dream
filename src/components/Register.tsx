import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cities = ["Москва", "Санкт-Петербург", "Екатеринбург", "Казань", "Новосибирск", "Другой"];

export default function Register() {
  const [form, setForm] = useState({ name: "", city: "", why: "", social: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="join" className="bg-[#0a1628] py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-[#ff6b1a] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Сезон 4 · Набор открыт
          </p>
          <h2 className="text-white text-4xl sm:text-5xl font-black leading-tight mb-6">
            ГОТОВ<br />ПРОВЕРИТЬ<br />СЕБЯ?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            В следующем сезоне DriveRoute Challenge едут 2 новых участника. Маршрут, задания и соперник — сюрприз. Только DriveRoute и твои нервы.
          </p>
          <div className="space-y-4">
            {[
              { num: "01", text: "Заполни заявку — отбор по анкете" },
              { num: "02", text: "Получи маршрут за 24 часа до старта" },
              { num: "03", text: "Едешь, снимаешь, побеждаешь" },
            ].map((step) => (
              <div key={step.num} className="flex items-center gap-4">
                <span className="text-[#ff6b1a] text-2xl font-black w-10 shrink-0">{step.num}</span>
                <p className="text-white/80 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[#ff6b1a] text-xs uppercase tracking-widest font-semibold mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Как тебя зовут?"
                    className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#ff6b1a] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[#ff6b1a] text-xs uppercase tracking-widest font-semibold mb-2">
                    Откуда стартуешь
                  </label>
                  <select
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-[#0a1628] border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#ff6b1a] transition-colors duration-200"
                  >
                    <option value="" disabled>Выбери город</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#ff6b1a] text-xs uppercase tracking-widest font-semibold mb-2">
                    Почему именно ты?
                  </label>
                  <textarea
                    required
                    value={form.why}
                    onChange={(e) => setForm({ ...form, why: e.target.value })}
                    placeholder="3–5 предложений. Убеди нас."
                    rows={3}
                    className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#ff6b1a] transition-colors duration-200 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-[#ff6b1a] text-xs uppercase tracking-widest font-semibold mb-2">
                    Инстаграм или Телеграм
                  </label>
                  <input
                    type="text"
                    value={form.social}
                    onChange={(e) => setForm({ ...form, social: e.target.value })}
                    placeholder="@username"
                    className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#ff6b1a] transition-colors duration-200"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#ff6b1a] text-white py-4 uppercase tracking-widest text-sm font-black hover:bg-[#e55a0a] transition-colors duration-300 disabled:opacity-60"
                >
                  {loading ? "Отправляем..." : "Подать заявку →"}
                </button>
                <p className="text-white/30 text-xs text-center">
                  Нажимая кнопку, ты соглашаешься на публикацию своих фото и видео
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-[#ff6b1a]/30 bg-[#ff6b1a]/5 p-10 text-center"
              >
                <p className="text-[#ff6b1a] text-5xl font-black mb-4">🚀</p>
                <h3 className="text-white text-2xl font-black mb-3">
                  Заявка принята!
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {form.name}, ты в очереди на отбор. Напишем в течение 3 дней — следи за сообщениями.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-widest">
                    Пока ждёшь — голосуй за следующий город ↑
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
