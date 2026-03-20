export default function YetkiliServisler() {
  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen text-[#f4f4f5]">
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[#0A0A0A]/90 z-10 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-[url('/images/iletisim-bg.jpeg')] bg-cover bg-center bg-no-repeat opacity-20 grayscale"></div>
        <div className="relative z-20 text-center px-6">
          <span className="text-sany-red tracking-[0.4em] font-bold text-sm uppercase mb-4 block">Geniş Ağ, Anında Müdahale</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
            YETKİLİ SERVİSLER
          </h1>
          <div className="h-1 w-24 bg-sany-red mx-auto"></div>
        </div>
      </section>

      {/* Network List */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#111112]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3 flex flex-col gap-6">
             <h2 className="text-2xl font-black uppercase text-white tracking-widest mb-6 border-b border-[#2a2a2a] pb-4">Servis Merkezlerimiz</h2>
             
             {/* Map Placeholder or List */}
             <div className="bg-[#1a1a1c] border-l-4 border-sany-red p-6 cursor-pointer hover:bg-[#222] transition-colors">
                <h4 className="text-white font-bold uppercase tracking-widest mb-2 text-sm">FMT İç Anadolu Ana Servis</h4>
                <p className="text-gray-500 text-xs mb-4">Ankara, Sincan</p>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest bg-[#111112] p-2 inline-block">Mekanik & Batarya Departmanı</div>
             </div>

             <div className="bg-[#1a1a1c] border-l-4 border-[#333] p-6 cursor-not-allowed opacity-50">
                <h4 className="text-white font-bold uppercase tracking-widest mb-2 text-sm">FMT Marmara Bölgesi</h4>
                <p className="text-gray-500 text-xs mb-4">İstanbul (Planlanıyor)</p>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest bg-[#111112] p-2 inline-block">Çok Yakında Açılacak</div>
             </div>

             <div className="bg-[#1a1a1c] border-l-4 border-[#333] p-6 cursor-not-allowed opacity-50">
                <h4 className="text-white font-bold uppercase tracking-widest mb-2 text-sm">FMT Ege Bölgesi</h4>
                <p className="text-gray-500 text-xs mb-4">İzmir (Planlanıyor)</p>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest bg-[#111112] p-2 inline-block">Çok Yakında Açılacak</div>
             </div>
          </div>

          <div className="flex-1 w-full relative min-h-[500px] border border-[#2a2a2a] bg-[#1a1a1c] flex flex-col items-center justify-center p-12 text-center overflow-hidden">
             {/* Dekoratif Türkiye Haritası simülasyonu / arka plan */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-[#111112] to-[#1a1a1c]"></div>
             
             <svg className="w-24 h-24 text-gray-600 mb-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
             </svg>
             <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-4 relative z-10">444 01 38</h3>
             <p className="text-gray-400 text-sm font-light leading-relaxed max-w-md relative z-10">
               Arıza durumu, kaza, mobil onarım veya uzaktan yazılım güncellemeleri için Türkiye'nin neresinde olursanız olun 7 gün 24 saat tek bir numaradan merkez servis birimimize ulaşabilirsiniz. Sinyal aldığımız her koordinatta yanınızdayız.
             </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}
