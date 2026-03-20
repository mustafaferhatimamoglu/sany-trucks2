export default function GarantiVeBakim() {
  return (
    <div className="w-full bg-[#141415] min-h-screen text-[#f4f4f5]">
      {/* Hero Header */}
      <section className="relative w-full h-[40vh] flex flex-col items-center justify-center overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[#0A0A0A]/80 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
            GARANTİ VE BAKIM
          </h1>
          <div className="h-1 w-24 bg-sany-red mx-auto"></div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center mb-16">
           <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-widest mb-6">Yatırımınız FMT Güvencesiyle Koruma Altında</h2>
           <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
             FMT SANY Türkiye olarak satış sonrası süreçleri, operasyonunuzun kesintisiz devam edebilmesi için birinci önceliğimiz sayıyoruz. Minimum arıza oranı ve maksimum operasyon süresi hedefiyle, ağır endüstriyel koşullara uygun garanti ve periyodik bakım hizmetleri tasarladık.
           </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111112] border-t-4 border-sany-red p-10 flex flex-col h-full shadow-2xl">
               <h3 className="text-white font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-sany-red flex items-center justify-center text-xs">1</span> 
                 Batarya Garantisi
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">Elektrifikasyon sürecindeki en büyük gider kalemi olan batarya üniteleri, zorlu kullanım testlerinden başarıyla geçmiştir. 5 Yıl veya 500.000 KM (hangisi önce dolarsa) kapasite düşüşüne karşı endüstrinin tartışmasız en iddialı garanti paketini sunuyoruz.</p>
               <ul className="mt-auto space-y-3">
                 <li className="text-gray-500 text-xs font-bold uppercase tracking-widest flex justify-between border-b border-[#2a2a2a] pb-2"><span>Süre</span><span className="text-white">5 YIL</span></li>
                 <li className="text-gray-500 text-xs font-bold uppercase tracking-widest flex justify-between border-b border-[#2a2a2a] pb-2"><span>Menzil / KM</span><span className="text-white">500.000 KM</span></li>
               </ul>
            </div>

            <div className="bg-[#111112] border-t-4 border-[#333] hover:border-sany-red transition-colors p-10 flex flex-col h-full shadow-2xl">
               <h3 className="text-white font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-[#1a1a1c] border border-[#333] flex items-center justify-center text-xs text-gray-500">2</span> 
                 Periyodik Bakım
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">Elektrikli motorlar parçalara sürtünmez. Dizel bir araçta yer alan triger kayışları, yağ filtreleri veya debriyaj balataları gibi yüzlerce yıpranan parça sökülüp atılmıştır. Bu da size inanılmaz hızda ve %80 daha uygun maliyetli bir mekanik bakım süreci sağlar.</p>
               <ul className="mt-auto space-y-3">
                 <li className="text-gray-500 text-xs font-bold uppercase tracking-widest flex justify-between border-b border-[#2a2a2a] pb-2"><span>Mobil Servis</span><span className="text-sany-red">VAR</span></li>
                 <li className="text-gray-500 text-xs font-bold uppercase tracking-widest flex justify-between border-b border-[#2a2a2a] pb-2"><span>Arıza Müdahalesi</span><span className="text-white">7/24 Kesintisiz</span></li>
               </ul>
            </div>
        </div>
      </section>
    </div>
  );
}
