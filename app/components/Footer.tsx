import Link from 'next/link';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-[#2a2a2a] pt-20 pb-12 px-6 lg:px-12 relative overflow-hidden text-[#f4f4f5]">
      {/* Subtle gradient background instead of WordPress image */}
      <div className="absolute inset-0 bg-gradient-to-br from-sany-red/3 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sany-red/30 to-transparent" />

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

        {/* Kategoriler */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-6 border-b border-[#2a2a2a] pb-2 inline-block max-w-max">Kategoriler</h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Ana Sayfa</Link></li>
            <li><Link href="/hakkimizda" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Hakkımızda</Link></li>
            <li><Link href="/sany-kimdir" className="text-gray-400 hover:text-sany-red text-sm transition-colors">SANY Kimdir?</Link></li>
            <li><Link href="/fmt-kimdir" className="text-gray-400 hover:text-sany-red text-sm transition-colors">FMT Kimdir?</Link></li>
            <li><Link href="/kamyon-modelleri" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Kamyon Modelleri</Link></li>
          </ul>
        </div>

        {/* Hizmetler */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-6 border-b border-[#2a2a2a] pb-2 inline-block max-w-max">Hizmetler</h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/yetkili-servisler" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Yetkili Servisler</Link></li>
            <li><Link href="/batarya-teknolojileri" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Batarya Teknolojileri</Link></li>
            <li><Link href="/garanti-ve-bakim" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Garanti ve Bakım</Link></li>
            <li><Link href="/bayilik-basvurusu" className="text-gray-400 hover:text-sany-red text-sm transition-colors">Bayilik Başvurusu</Link></li>
            <li><Link href="/iletisim" className="text-gray-400 hover:text-sany-red text-sm transition-colors">İletişim</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-6 border-b border-[#2a2a2a] pb-2 inline-block max-w-max">Bizi Takip Edin</h4>
          <div className="flex gap-3 mb-8">
            <a href="https://www.instagram.com/sanytrucksturkiye/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-[#1a1a1c] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-sany-red hover:text-white hover:border-sany-red transition-all duration-300" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/sany-trucks-turkiye/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-[#1a1a1c] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-sany-red hover:text-white hover:border-sany-red transition-all duration-300" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61587447096652" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-[#1a1a1c] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-sany-red hover:text-white hover:border-sany-red transition-all duration-300" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-xs tracking-wider">ALCI OSB MAH. 2019 CAD. NO:3</p>
            <p className="text-gray-500 text-xs tracking-wider">SİNCAN/ANKARA</p>
            <a href="tel:44401 38" className="text-gray-300 text-sm font-bold mt-2 hover:text-sany-red transition-colors">444 01 38</a>
            <a href="mailto:info@fmtotomotiv.com" className="text-gray-400 text-xs hover:text-sany-red transition-colors">info@fmtotomotiv.com</a>
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
