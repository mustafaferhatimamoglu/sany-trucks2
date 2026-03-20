import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#141415]/95 backdrop-blur-md border-b border-[#2a2a2a] px-8 py-5 flex items-center justify-between sticky top-0 z-50">
      {/* Left side: Navigation */}
      <div className="hidden md:flex gap-8 text-gray-400 font-medium text-xs tracking-[0.2em] flex-1">
        <Link href="/" className="hover:text-white transition-colors">ANA SAYFA</Link>
        <Link href="/hakkimizda" className="hover:text-white transition-colors">HAKKIMIZDA</Link>
      </div>
      
      {/* Center: Logo */}
      <div className="flex-1 flex justify-center">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Sany Trucks Logo" className="h-[40px] md:h-[50px] object-contain" />
        </Link>
      </div>

      {/* Right side: Button/Contact */}
      <div className="flex-1 flex justify-end gap-8 items-center">
        <Link href="/iletisim" className="hidden md:inline hover:text-white text-gray-400 font-medium text-xs tracking-[0.2em] transition-colors">İLETİŞİM</Link>
        <Link href="/iletisim" className="bg-sany-red hover:bg-[#cc0000] text-white px-8 py-3 rounded-sm text-xs font-bold tracking-[0.15em] uppercase transition-all shadow-lg hover:shadow-sany-red/30">
          TEKLİF ALIN
        </Link>
      </div>
    </nav>
  );
}
