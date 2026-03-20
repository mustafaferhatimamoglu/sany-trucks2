import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111112] border-t border-[#2a2a2a] pt-20 pb-12 px-6 lg:px-12 relative overflow-hidden text-[#f4f4f5]">
      {/* Subtle Background pattern if needed */}
      <div className="absolute inset-0 bg-[url('https://www.sanytrucksturkiye.com/wp-content/uploads/2020/07/footer-bg.jpg')] bg-cover bg-center opacity-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand / Logo */}
        <div className="flex flex-col">
          <Link href="/" className="w-max mb-6 flex items-center">
            <img src="/images/logo.png" alt="Sany Trucks Logo" className="h-[50px] object-contain drop-shadow-xl" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 lg:pe-4">
            İşinizin Geleceği İçin %100 Elektrikli Kamyon. Sıfır emisyon. Yüksek performans. Türkiye için tasarlanan yeni nesil ağır ticari mobilite.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-6 border-b border-[#2a2a2a] pb-2 inline-block max-w-max">Kategoriler</h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Ana Sayfa</Link></li>
            <li><Link href="/hakkimizda" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Hakkımızda</Link></li>
            <li><Link href="/#modeller" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Araçlar</Link></li>
            <li><Link href="/iletisim" className="text-gray-400 hover:text-sany-red text-sm transition-colors">İletişim</Link></li>
          </ul>
        </div>

        {/* Hizmetler */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-6 border-b border-[#2a2a2a] pb-2 inline-block max-w-max">Hizmetler</h4>
          <ul className="flex flex-col gap-3">
            <li><span className="text-gray-400 hover:text-sany-red text-sm transition-colors cursor-pointer">Yetkili Servisler</span></li>
            <li><span className="text-gray-400 hover:text-sany-red text-sm transition-colors cursor-pointer">Yedek Parça</span></li>
            <li><span className="text-gray-400 hover:text-sany-red text-sm transition-colors cursor-pointer">Müşteri Destek</span></li>
            <li><span className="text-gray-400 hover:text-sany-red text-sm transition-colors cursor-pointer">Garanti Seçenekleri</span></li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-6 border-b border-[#2a2a2a] pb-2 inline-block max-w-max">Sany Trucks Sosyal</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/sanytrucksturkiye/" target="_blank" className="w-10 h-10 rounded-sm bg-[#1a1a1c] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-sany-red hover:text-white transition-all duration-300">
                IN
            </a>
            <a href="https://www.linkedin.com/company/sany-trucks-turkiye/" target="_blank" className="w-10 h-10 rounded-sm bg-[#1a1a1c] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-sany-red hover:text-white transition-all duration-300">
                LI
            </a>
            <a href="https://www.facebook.com/profile.php?id=61587447096652" target="_blank" className="w-10 h-10 rounded-sm bg-[#1a1a1c] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-sany-red hover:text-white transition-all duration-300">
                FB
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#1a1a1c] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-gray-600 text-xs tracking-wider">
          © {new Date().getFullYear()} FMT / Sany Trucks Türkiye. Tüm Hakları Saklıdır.
        </p>
        <div className="flex gap-6">
          <span className="text-gray-500 hover:text-gray-300 text-xs transition-colors cursor-pointer">Gizlilik Politikası</span>
          <span className="text-gray-500 hover:text-gray-300 text-xs transition-colors cursor-pointer">Çerez Aydınlatması</span>
        </div>
      </div>
    </footer>
  );
}
