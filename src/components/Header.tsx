interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-black">
          Drive<span className="text-[#ff6b1a]">Route</span>
        </div>
        <nav className="flex gap-6 sm:gap-8">
          <a
            href="#challenges"
            className="text-white hover:text-[#ff6b1a] transition-colors duration-300 uppercase text-xs sm:text-sm tracking-wider"
          >
            Челленджи
          </a>
          <a
            href="#vote"
            className="text-white hover:text-[#ff6b1a] transition-colors duration-300 uppercase text-xs sm:text-sm tracking-wider"
          >
            Голосовать
          </a>
          <a
            href="#join"
            className="bg-[#ff6b1a] text-white px-4 py-1.5 uppercase text-xs tracking-widest font-bold hover:bg-[#e55a0a] transition-colors duration-300"
          >
            Участвовать
          </a>
        </nav>
      </div>
    </header>
  );
}