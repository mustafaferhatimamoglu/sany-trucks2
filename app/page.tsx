import Link from "next/link";
import sayfalar from "../data/icerik/sayfalar.json";
import araclar from "../data/araclarim/data.json";

export default function Home() {
  const { home } = sayfalar;

  return (
    <div className="w-full bg-[#141415]">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Luxurious gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141415]/80 via-transparent to-[#141415] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141415]/50 via-transparent to-[#141415]/50 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl flex flex-col items-center mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-2xl">
            {home.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mb-12 drop-shadow-md tracking-wide">
            {home.heroSubtitle}
          </p>
          <Link href="#modeller" className="bg-[#141415] border border-sany-red hover:bg-sany-red text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] rounded-sm transition-all shadow-xl hover:shadow-sany-red/40">
            {home.heroCta}
          </Link>
        </div>
      </section>

      {/* 2. Featured Products */}
      <section id="modeller" className="w-full py-32 px-6 md:px-12 bg-[#141415]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">
              {home.featuredProductsTitle}
            </h2>
            <div className="h-1 w-16 bg-sany-red"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {araclar.map((arac) => (
              <div key={arac.id} className="group bg-[#1a1a1c] border border-[#2a2a2a] hover:border-sany-red/50 rounded-lg transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]">
                {/* Image Area */}
                <div className="w-full h-72 bg-[#111] relative overflow-hidden flex items-center justify-center p-6">
                  {/* Subtle radial glow behind the truck */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sany-red/10 blur-[60px] rounded-full group-hover:bg-sany-red/20 transition-all"></div>
                  <img src={arac.image} alt={arac.name} className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                {/* Text Area */}
                <div className="p-8 flex flex-col flex-grow relative z-20">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{arac.name}</h3>
                  </div>
                  <p className="text-sany-red font-bold text-sm tracking-[0.1em] mb-6 uppercase">{arac.model}</p>
                  
                  <div className="flex gap-4 mb-8">
                    {arac.key_stats && arac.key_stats.slice(0,2).map((st, i) => (
                      <div key={i} className="flex flex-col bg-[#141415] border border-[#2a2a2a] px-4 py-2 rounded-md">
                        <span className="text-white font-bold text-xl">{st.value} <span className="text-xs text-gray-500">{st.unit}</span></span>
                        <span className="text-[9px] text-gray-500 tracking-wider uppercase mt-1">{st.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href={`/araclar/${arac.slug}`} className="w-full flex items-center justify-center border border-[#333] hover:border-sany-red hover:bg-sany-red text-gray-300 hover:text-white py-4 px-6 font-bold uppercase tracking-[0.15em] text-xs transition-colors rounded-sm">
                      Daha Fazla Bilgi
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Gelecek Burada Üretiliyor */}
      <section className="relative w-full py-40 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 opacity-30 bg-cover bg-fixed bg-center" style={{ backgroundImage: `url('${home.futureSection.bgImage}')` }}></div>
        <div className="absolute inset-0 bg-[#141415]/70 z-10"></div>
        <div className="relative z-20 text-center max-w-4xl flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest mb-6">
            {home.futureSection.title}
          </h2>
          <div className="h-1 w-16 bg-sany-red mb-8"></div>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide mb-12">
            {home.futureSection.subtitle}
          </p>
          <Link href="/hakkimizda" className="border-2 border-white hover:border-sany-red hover:bg-sany-red text-white px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all">
            {home.futureSection.cta}
          </Link>
        </div>
      </section>

      {/* 4. Elektrikli Performansın Çekirdeği */}
      <section className="w-full py-32 px-6 md:px-12 bg-[#1a1a1c] border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 leading-tight">
              {home.corePerformance.title}
            </h2>
            <div className="h-1 w-16 bg-sany-red mb-8"></div>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-12">
              {home.corePerformance.content}
            </p>
            <Link href="/iletisim" className="bg-white hover:bg-gray-200 text-[#141415] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all shadow-lg">
              {home.corePerformance.cta}
            </Link>
          </div>
          <div className="flex-1 w-full relative">
            <div className="w-full h-80 md:h-[500px] bg-[#141415] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-2xl p-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sany-red/10 blur-[80px] rounded-full"></div>
                <img src={home.corePerformance.image} className="w-full h-full object-contain relative z-10 opacity-90" alt="Core Performance" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. News / Blog */}
      <section className="w-full py-32 px-6 md:px-12 bg-[#141415]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">
              {home.news.title}
            </h2>
            <div className="h-1 w-16 bg-sany-red"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home.news.items.map((item, idx) => (
              <div key={idx} className="bg-[#1a1a1c] border border-[#2a2a2a] rounded-lg overflow-hidden group hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(234,0,1,0.4)] transition-all duration-300 flex flex-col">
                <div className="w-full h-56 bg-[#111] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#141415]/20 z-10 group-hover:bg-transparent transition-all"></div>
                  <img src={item.image} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-sany-red text-xs font-bold tracking-widest uppercase mb-4">{item.date}</span>
                  <h3 className="text-xl font-bold text-white leading-snug mb-6 group-hover:text-sany-red transition-colors">{item.title}</h3>
                  <div className="mt-auto">
                    <span className="text-gray-500 font-medium text-xs tracking-[0.1em] uppercase group-hover:text-white transition-colors">Devamını Oku &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Banner / Fast Info */}
      <section className="w-full py-32 px-6 md:px-12 bg-[#ea0001] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">{home.contact.title}</h2>
            <p className="text-lg font-medium text-red-100 max-w-xl mb-8 leading-relaxed">
              {home.contact.subtitle}
            </p>
          </div>
          <div className="lg:w-1/2 border-l border-white/20 pl-0 lg:pl-12 flex flex-col gap-6 w-full">
            <div>
              <span className="text-red-200 text-xs font-bold tracking-widest uppercase block mb-1">E-Posta</span>
              <a href={`mailto:${home.contact.email}`} className="text-2xl font-bold hover:text-red-200 transition-colors">{home.contact.email}</a>
            </div>
             <div>
              <span className="text-red-200 text-xs font-bold tracking-widest uppercase block mb-1">Telefon</span>
              <a href={`tel:${home.contact.phone}`} className="text-4xl font-black hover:text-red-200 transition-colors drop-shadow-xl">{home.contact.phone}</a>
            </div>
            <div>
              <span className="text-red-200 text-xs font-bold tracking-widest uppercase block mb-1">Adres</span>
              <p className="text-lg font-medium">{home.contact.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
