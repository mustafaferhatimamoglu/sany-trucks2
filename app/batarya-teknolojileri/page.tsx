export default function BataryaTeknolojileri() {
  return (
    <div className="w-full bg-[#141415] min-h-screen text-[#f4f4f5]">
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[#0A0A0A]/80 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale" style={{ backgroundImage: "url('/images/kurumsal1.png')" }}></div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <span className="text-sany-red tracking-[0.4em] font-bold text-sm uppercase mb-4 block">Kesintisiz Enerji, Yüksek Performans</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
            BATARYA TEKNOLOJİLERİ
          </h1>
          <div className="h-1 w-24 bg-sany-red mx-auto"></div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest mb-6">Dünyanın Zirvesindeki Güvenlik</h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-8 font-light text-justify">
              SANY elektrikli ağır ticari serisi, küresel olarak rüştünü ispatlamış gelişmiş LFP (Lityum Demir Fosfat) batarya hücrelerini kullanır. 106 kWh’dan 636 kWh kapasiteye kadar ölçeklendirilen bu modüller, yangın ve aşırı ısınmaya karşı dünyadaki en sert laboratuvar testlerini başarıyla geçmiştir.
            </p>
            <ul className="space-y-6 mb-8 mt-12 bg-[#111112] border border-[#2a2a2a] p-8">
              <li className="flex items-center text-gray-300 border-b border-[#2a2a2a] pb-4">
                 <span className="text-sany-red font-black text-3xl mr-6">01</span>
                 <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Gelişmiş Isı Yönetimi (TMS)</h4>
                    <p className="text-xs text-gray-500">-30°C ile +50°C arasında stabil enerji akışı ve menzil koruma teknolojisi.</p>
                 </div>
              </li>
              <li className="flex items-center text-gray-300 border-b border-[#2a2a2a] pb-4">
                 <span className="text-sany-red font-black text-3xl mr-6">02</span>
                 <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">40 Dakikada %80 Şarj</h4>
                    <p className="text-xs text-gray-500">Sektör lideri çift soketli ultra hızlı şarj desteği DC 300kW+ alt yapısı.</p>
                 </div>
              </li>
              <li className="flex items-center text-gray-300">
                 <span className="text-sany-red font-black text-3xl mr-6">03</span>
                 <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Paslanmaz Koruma Zırhı</h4>
                    <p className="text-xs text-gray-500">Tüm saha koşullarına uygun, şasiye entegre sarsıntı ve darbe emici zırh.</p>
                 </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full relative">
            <div className="w-full h-[500px] bg-[#111112] border border-sany-red rounded-lg overflow-hidden relative shadow-[0_0_30px_rgba(234,0,1,0.15)] flex items-center justify-center p-8 group">
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
               {/* Mavi batarya aydınlatma illüzyonu */}
               <div className="absolute inset-0 bg-blue-500/5 z-0 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-1000"></div>
               <img src="/images/cekici.png" alt="Sany Battery Architecture" className="w-full object-contain relative z-20 group-hover:scale-105 transition-transform duration-1000" />
            </div>
            {/* Minimalist overlay block */}
            <div className="absolute -bottom-10 -left-10 bg-[#1a1a1c] border border-[#2a2a2a] p-8 shadow-2xl hidden md:block z-30">
               <span className="text-4xl font-black text-white block -mb-2">636<span className="text-xl ml-1 text-sany-red">kWh</span></span>
               <span className="text-gray-500 font-bold tracking-widest text-[10px] uppercase">Maksimum Batarya Opsiyonu</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
