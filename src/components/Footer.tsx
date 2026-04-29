import Icon from "@/components/ui/icon";
import Logo from "@/components/Logo";

const socials = [
  { name: "Instagram", icon: "Instagram", url: "https://instagram.com" },
  { name: "YouTube", icon: "Youtube", url: "https://youtube.com" },
  { name: "Telegram", icon: "Send", url: "https://t.me" },
  { name: "VK", icon: "Users", url: "https://vk.com" },
  { name: "TikTok", icon: "Music2", url: "https://tiktok.com" },
];

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-[#0a1628] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-[#ff6b1a] text-xs sm:text-sm tracking-widest font-semibold">Маршруты</h3>
                <a
                  href="#season"
                  className="text-white hover:text-[#ff6b1a] transition-colors duration-300 text-sm sm:text-base"
                >
                  Сезон 3
                </a>
                <a
                  href="#archive"
                  className="text-white hover:text-[#ff6b1a] transition-colors duration-300 text-sm sm:text-base"
                >
                  Архив
                </a>
                <a
                  href="#map"
                  className="text-white hover:text-[#ff6b1a] transition-colors duration-300 text-sm sm:text-base"
                >
                  Карта
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-[#ff6b1a] text-xs sm:text-sm tracking-widest font-semibold">Участники</h3>
                <a
                  href="#artem"
                  className="text-white hover:text-[#ff6b1a] transition-colors duration-300 text-sm sm:text-base"
                >
                  Артём
                </a>
                <a
                  href="#kate"
                  className="text-white hover:text-[#ff6b1a] transition-colors duration-300 text-sm sm:text-base"
                >
                  Катя
                </a>
                <a
                  href="#join"
                  className="text-[#ff6b1a] hover:text-white transition-colors duration-300 text-sm sm:text-base font-bold"
                >
                  Стать участником →
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <div className="mt-4 sm:mt-6 lg:mt-10">
                <Logo variant="light" size="lg" />
              </div>
              <div className="flex flex-col items-start sm:items-end gap-3">
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/50 hover:text-white hover:border-[#ff6b1a] transition-all duration-300"
                    >
                      <Icon name={s.icon as never} size={18} />
                    </a>
                  ))}
                </div>
                <p className="text-white/40 text-sm sm:text-base">{new Date().getFullYear()} DriveRoute Challenge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}