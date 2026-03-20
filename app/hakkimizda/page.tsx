import Link from "next/link";
import sayfalar from "../../data/icerik/sayfalar.json";

export default function Hakkimizda() {
  const { about } = sayfalar;

  return (
    <div className="w-full bg-[#141415] min-h-screen text-[#f4f4f5]">
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]/80 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale" style={{ backgroundImage: "url('/images/kurumsal1.png')" }}></div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
            {about.title}
          </h1>
          <div className="h-1 w-24 bg-sany-red mx-auto"></div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest mb-6">Vizyonumuz ve Üretim Gücümüz</h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-8 font-light text-justify">
              Türkiye’de kurulan entegre üretim ve operasyon yapısı sayesinde FMT; montaj, satış, satış sonrası hizmetler ve yedek parça süreçlerini tek çatı altında yöneterek müşterilerine kesintisiz bir deneyim sunar. Bu yapı, hem kamu hem de özel sektör projelerinde güvenilir ve sürdürülebilir iş ortaklıkları kurulmasına olanak tanır.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg font-light mb-8 text-justify">
              FMT’nin vizyonu; Türkiye’yi elektrikli ticari araçlar alanında bölgesel bir merkez haline getirmek, misyonu ise iş ortaklarının operasyonlarını daha verimli, daha ekonomik ve çevreyle uyumlu hale getirmektir. FMT, geleceğin taşımacılığını bugünden inşa etmeyi amaçlar.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300"><span className="w-2 h-2 bg-sany-red rounded-full mr-4"></span> Maksimum Enerji Verimliliği</li>
              <li className="flex items-center text-gray-300"><span className="w-2 h-2 bg-sany-red rounded-full mr-4"></span> Sektöre Yön Veren Batarya Teknolojisi</li>
              <li className="flex items-center text-gray-300"><span className="w-2 h-2 bg-sany-red rounded-full mr-4"></span> Çevre Dostu, Sessiz Operasyon</li>
            </ul>
          </div>
          <div className="flex-1 w-full relative">
            <div className="w-full h-[300px] md:h-[500px] border border-[#2a2a2a] rounded-lg overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/kurumsal2.jpg')" }}></div>
            </div>
            {/* Minimalist overlay block */}
            <div className="absolute -bottom-10 -left-10 bg-[#1a1a1c] border border-sany-red p-8 shadow-2xl hidden md:block">
               <span className="text-3xl font-black text-white block">2026</span>
               <span className="text-gray-500 font-bold tracking-widest text-xs uppercase">Teknoloji Liderliği</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
