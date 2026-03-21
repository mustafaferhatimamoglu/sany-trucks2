import Link from "next/link";
import sayfalar from "../data/icerik/sayfalar.json";
import araclar from "../data/araclarim/data.json";

export default function Home() {
  const { futureSection, corePerformance, news, contact } = sayfalar.home;

  // Icons Helper
  const Icons = {
    Shield: () => <svg className="w-10 h-10 text-sany-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    Battery: () => <svg className="w-10 h-10 text-sany-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    Trending: () => <svg className="w-10 h-10 text-sany-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    Zap: () => <svg className="w-10 h-10 text-sany-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  };

  return (
    <div className="w-full flex-col flex items-center bg-[#0A0A0A]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-[#0A0A0A]/20 to-[#0A0A0A]/70 z-10"></div>
        {/* Changed arbitrary bg-[url] to inline style to perfectly fix missing image errors during static export */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl flex flex-col items-center mt-20">
          <span className="text-sany-red tracking-[0.4em] font-bold text-sm md:text-base uppercase mb-6 drop-shadow-lg">Sany Trucks Türkiye</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-2xl leading-none">
            Türkiye'nin Yeni Nesil <br className="hidden md:block"/> Ticari Gücü.
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl font-light max-w-2xl leading-relaxed mb-12 drop-shadow-md">
            Geleceği şekillendiren elektrikli mobilite çözümleriyle lojistiğin kurallarını baştan yazıyoruz. Maksimum güç, sıfır emisyon.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="#modeller" className="bg-sany-red hover:bg-[#cc0000] text-white px-10 py-5 text-sm font-bold tracking-[0.2em] transition-all uppercase shadow-[0_0_20px_rgba(234,0,1,0.4)] hover:shadow-[0_0_30px_rgba(234,0,1,0.6)]">
              Modelleri Keşfedin
            </Link>
            <Link href="/iletisim" className="bg-transparent border border-[#333] hover:border-white hover:bg-white hover:text-black text-white px-10 py-5 text-sm font-bold tracking-[0.2em] transition-all uppercase">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: 1.5. Key Feature Icons Band */}
      <section className="w-full bg-[#111112] border-b border-[#2a2a2a] relative z-30">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            <div className="flex flex-col items-center">
              <Icons.Shield />
              <h4 className="font-bold tracking-widest uppercase mb-2 text-sm">Yaygın Servis Ağı</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Türkiye genelinde anında müdahale ve kesintisiz operasyon güvencesi.</p>
            </div>
            <div className="flex flex-col items-center">
              <Icons.Battery />
              <h4 className="font-bold tracking-widest uppercase mb-2 text-sm">Zirve Teknolojisi</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Gelişmiş batarya yönetimiyle sınıfının en güvenli ve stabil değerleri.</p>
            </div>
            <div className="flex flex-col items-center">
              <Icons.Trending />
              <h4 className="font-bold tracking-widest uppercase mb-2 text-sm">%70'e Varan Tasarruf</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Geleneksel yakıtlara kıyasla devasa oranda düşürülmüş işletme maliyetleri.</p>
            </div>
            <div className="flex flex-col items-center">
              <Icons.Zap />
              <h4 className="font-bold tracking-widest uppercase mb-2 text-sm">40 Dk. Hızlı Şarj</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">%20'den %80'e sadece 40 dakikada şarj olarak yola devam edin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Grid: Araç Modelleri */}
      <section id="modeller" className="w-full py-32 bg-[#0A0A0A] relative text-[#f4f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-sany-red tracking-[0.2em] font-bold text-sm uppercase block mb-4">Sıfır Emisyon</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest leading-tight">
                Araç Modelleri
              </h2>
            </div>
            <Link href="/kamyon-modelleri" className="text-sm font-bold text-gray-400 hover:text-white uppercase tracking-[0.2em] border-b border-sany-red pb-1 transition-colors">
              Tümünü İncele
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {araclar.map((arac, index) => (
              <Link key={arac.id} href={`/araclar/${arac.slug}`} className="group bg-[#111112] border border-[#2a2a2a] hover:border-sany-red transition-all duration-500 flex flex-col items-center p-8 relative overflow-hidden h-[550px] block cursor-pointer">
                {/* Background red glow on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-sany-red/5 rounded-full blur-3xl group-hover:bg-sany-red/10 transition-all duration-700 pointer-events-none"></div>

                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest mb-2 z-10 text-center mt-4 group-hover:text-sany-red transition-colors">
                  {arac.name.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? "text-sany-red group-hover:text-white transition-colors" : ""}>{word} </span>
                  ))}
                </h3>
                <p className="text-gray-500 text-xs tracking-[0.2em] uppercase font-bold mb-12 z-10">{arac.capacity}</p>
                
                <div className="relative w-full flex-grow flex items-center justify-center mt-[-30px] z-10 p-4 transition-transform duration-700 group-hover:scale-110">
                  {/* Changed img tag simply mapped from data.json paths that are now relative ./images/ */}
                  <img src={arac.image} alt={arac.name} className="w-full h-auto object-contain drop-shadow-2xl filter brightness-90 group-hover:brightness-110" />
                </div>
                
                <div className="w-full flex justify-between items-center z-10 mt-6 border-t border-[#2a2a2a] pt-6 group-hover:border-sany-red transition-colors duration-500">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">Max Güç</span>
                    <span className="text-sm font-black text-white">{arac.key_stats[0].value} {arac.key_stats[0].unit}</span>
                  </div>
                  <div className="bg-[#1a1a1c] group-hover:bg-sany-red text-white w-12 h-12 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: 2.5 Interactive Truck Feature (İnteraktif Araç Balonları) */}
      <section className="w-full py-24 bg-[#0A0A0A] relative border-y border-[#2a2a2a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-sany-red tracking-[0.2em] font-bold text-sm uppercase block mb-4">Gelişmiş Donanım</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">Aracı Yakından İnceleyin</h2>
            <div className="h-1 w-24 bg-sany-red mx-auto"></div>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] flex items-center justify-center mt-12">
            {/* Base interactive Truck image */}
            <img src="/images/cekici.png" alt="Sany Truck Features" className="w-[85%] object-contain relative z-10 drop-shadow-[0_0_50px_rgba(234,0,1,0.15)]" />
            
            {/* Hotspot 1: Cabin */}
            <div className="absolute top-[28%] left-[28%] z-20 group">
              <div className="w-10 h-10 rounded-full bg-sany-red border-4 border-[#0A0A0A] shadow-[0_0_15px_rgba(234,0,1,0.8)] flex items-center justify-center text-white font-black text-sm cursor-pointer hover:scale-110 transition-transform">1</div>
              <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 p-5 bg-[#141415] border border-sany-red/50 shadow-2xl z-30 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h4 className="text-white font-black tracking-widest uppercase mb-2 text-sm border-b border-[#333] pb-2">Akıllı Kokpit</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">Yeni nesil çift ekranlı dijital panel, havalı süspansiyonlu koltuklar ve mükemmel ergonomik yapı.</p>
              </div>
            </div>

            {/* Hotspot 2: Chassis / Battery */}
            <div className="absolute top-[65%] left-[45%] z-20 group">
              <div className="w-10 h-10 rounded-full bg-sany-red border-4 border-[#0A0A0A] shadow-[0_0_15px_rgba(234,0,1,0.8)] flex items-center justify-center text-white font-black text-sm cursor-pointer hover:scale-110 transition-transform">2</div>
              <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 p-5 bg-[#141415] border border-sany-red/50 shadow-2xl z-30 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h4 className="text-white font-black tracking-widest uppercase mb-2 text-sm border-b border-[#333] pb-2">Gelişmiş Batarya</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">Dayanıklı çelik gövde içinde korunan, yüksek enerji yoğunluklu ultra güvenli modüler hücreler.</p>
              </div>
            </div>

            {/* Hotspot 3: Motor / Rear Axle */}
            <div className="absolute top-[55%] right-[25%] z-20 group">
              <div className="w-10 h-10 rounded-full bg-sany-red border-4 border-[#0A0A0A] shadow-[0_0_15px_rgba(234,0,1,0.8)] flex items-center justify-center text-white font-black text-sm cursor-pointer hover:scale-110 transition-transform">3</div>
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 p-5 bg-[#141415] border border-sany-red/50 shadow-2xl z-30 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0">
                <h4 className="text-white font-black tracking-widest uppercase mb-2 text-sm border-b border-[#333] pb-2">Elektrik Aksı</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">315 kW ile 739 kW arası tepe güç üreten, yüksek tork ve %97 motor verimliliği sunan şaft entegreli motor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW & CORRECTED PARALLAX SECTION: "Gelecek Burada Üretiliyor" */}
      <section className="relative w-full py-48 flex items-center justify-center bg-fixed bg-cover bg-center border-y border-[#2a2a2a] shadow-inner" style={{ backgroundImage: "url('/images/kurumsal1.png')" }}>
        <div className="absolute inset-0 bg-[#0A0A0A]/85 z-10 backdrop-blur-sm"></div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <span className="text-sany-red tracking-[0.3em] font-bold text-sm uppercase mb-4 block">{futureSection.subtitle}</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase tracking-widest leading-tight">
            {futureSection.title}
          </h2>
          <p className="text-gray-300 text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            {futureSection.content}
          </p>
          <Link href="/hakkimizda" className="bg-white hover:bg-gray-200 text-[#0A0A0A] px-12 py-5 text-sm font-black tracking-[0.2em] transition-all uppercase">
            {futureSection.buttonText}
          </Link>
        </div>
      </section>

      {/* NEW: 3.5 Interior Cabin Gallery */}
      <section className="w-full bg-[#111112] py-24 border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Lüks ve Teknolojik İç Mekan</h2>
            <p className="text-gray-500 font-light text-sm tracking-widest uppercase">Geleceğin kokpiti bugünden kontrolünüzde.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 bg-[#1a1a1c] border border-[#2a2a2a] relative overflow-hidden group">
               <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-luminosity" style={{ backgroundImage: "url('/images/cekici.png')" }}></div>
               <div className="absolute bottom-6 left-6 z-10">
                 <h4 className="text-white font-bold uppercase tracking-widest text-sm">Geniş Hacim</h4>
               </div>
            </div>
            <div className="h-64 bg-[#1a1a1c] border border-sany-red relative overflow-hidden group shadow-[0_0_20px_rgba(234,0,1,0.15)]">
               <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-luminosity" style={{ backgroundImage: "url('/images/damperli.png')" }}></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
               <div className="absolute bottom-6 left-6 z-10">
                 <h4 className="text-white font-bold uppercase tracking-widest text-lg">Dijital Panel</h4>
                 <div className="h-1 w-10 bg-sany-red mt-2"></div>
               </div>
            </div>
            <div className="h-64 bg-[#1a1a1c] border border-[#2a2a2a] relative overflow-hidden group">
               <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-luminosity" style={{ backgroundImage: "url('/images/hafif.png')" }}></div>
               <div className="absolute bottom-6 left-6 z-10">
                 <h4 className="text-white font-bold uppercase tracking-widest text-sm">Premium Konfor</h4>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Performance */}
      <section className="w-full py-32 bg-[#0A0A0A] relative border-b border-[#2a2a2a] overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111112] z-0 hidden lg:block skew-x-12 translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-sany-red/5 rounded-full blur-2xl"></div>
              {/* Dynamic Image mapping */}
              <img src="/images/hafif.png" alt="Core Performance" className="w-full h-auto object-cover border border-[#2a2a2a] shadow-2xl filter grayscale contrast-125" />
              {/* Overlay Stat Block */}
              <div className="absolute -bottom-8 -right-8 bg-sany-red p-8 shadow-2xl border border-white/10 hidden md:block">
                <span className="block text-5xl font-black text-white mb-2 tracking-tighter">460<span className="text-2xl ml-1">kW</span></span>
                <span className="block text-white/80 font-bold tracking-widest text-xs uppercase">Maksimum Motor Gücü</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col items-start lg:pl-10">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest leading-tight mb-8">
                {corePerformance.title}
              </h2>
              <div className="w-full space-y-8">
                {corePerformance.points.map((point, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-[#2a2a2a] hover:border-sany-red pl-6 py-2 transition-colors duration-300">
                    <h4 className="text-white font-bold text-lg tracking-widest uppercase mb-2">
                       {/* Extract title from point via parsing if needed, but since we don't have separate titles in JSON, just styling */}
                       {point.split(' ').slice(0, 2).join(' ')}
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/batarya-teknolojileri" className="mt-12 text-sany-red hover:text-white font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-4 transition-colors">
                <span>Teknolojiyi İncele</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: 4.5 FMT Marka Konumlandırması */}
      <section className="w-full bg-[#sany-red] bg-sany-red text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-[0.3em] uppercase opacity-90">FUTURE MOTION TRUCKS</h2>
        </div>
      </section>

      {/* 5. News Section */}
      <section className="w-full py-32 bg-[#111112]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sany-red tracking-[0.2em] font-bold text-sm uppercase block mb-4">Gelişmeler</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest">Güncel Haberler</h2>
            <div className="h-1 w-24 bg-sany-red mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.items.map((item, index) => (
              <Link key={index} href="/blog" className="block bg-[#0A0A0A] border border-[#2a2a2a] hover:border-[#444] group overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-[#0A0A0A]/20 group-hover:bg-transparent transition-all z-10"></div>
                  {/* Using relative paths for news images too */}
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute top-4 left-4 bg-sany-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 z-20">
                    {item.date}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-bold text-lg leading-snug mb-4 group-hover:text-sany-red transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors inline-flex items-center gap-2">
                    {news.readMoreText}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Banner */}
      <section className="w-full bg-[#141415] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center border-x border-[#2a2a2a] bg-[#0A0A0A] shadow-2xl relative overflow-hidden -mt-16 z-20">
          <div className="absolute inset-0 bg-cover bg-center opacity-5 grayscale" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">{contact.title}</h2>
            <div className="h-1 w-16 bg-sany-red mx-auto mb-8"></div>
            <p className="text-gray-400 font-light text-lg mb-8 max-w-xl mx-auto">{contact.address}</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
              <div className="space-y-2 group cursor-pointer">
                <span className="block text-gray-500 font-bold uppercase tracking-widest text-xs">Telefon Hattı</span>
                <span className="block text-4xl font-black text-white group-hover:text-sany-red transition-colors">{contact.phone}</span>
              </div>
              <div className="w-px h-16 bg-[#2a2a2a] hidden md:block"></div>
              <div className="space-y-2 group cursor-pointer">
                <span className="block text-gray-500 font-bold uppercase tracking-widest text-xs">E-Posta</span>
                <span className="block text-2xl font-black text-white group-hover:text-sany-red transition-colors">{contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
