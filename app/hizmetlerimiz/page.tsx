import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Satış Sonrası Servis",
    subtitle: "7/24 teknik destek hattı",
    description: "Yüksek voltajlı elektrikli araç teknolojilerine uygun yetkinlikte eğitim almış sertifikalı teknisyenlerimiz, Türkiye genelinde sahaya çıkmaya her an hazır.",
    link: "/yetkili-servisler",
    linkText: "Servis Ağını Gör",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Şarj Altyapısı Danışmanlığı",
    subtitle: "DC hızlı şarj çözümleri",
    description: "40 dakikada %80 şarj kapasitesi sunan DC hızlı şarj sistemleri kurulum danışmanlığı. Deponuza ve güzergahlarınıza özel şarj altyapısı planlaması.",
    link: "/iletisim",
    linkText: "Analiz İste",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Yedek Parça & Lojistik",
    subtitle: "Hızlı temin garantisi",
    description: "SANY'nin global tedarik zinciri sayesinde kritik parçalar için ekspres temin güvencesi. Merkezi depo sistemi ile Türkiye genelinde hızlı dağıtım ağı.",
    link: "/iletisim",
    linkText: "Parça Sorgula",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Bayilik & İş Ortaklığı",
    subtitle: "Türkiye geneli büyüme ağı",
    description: "Elektrikli ticari araç pazarının büyüyen dönüşümüne ortak olun. Bölgenizde FMT-SANY'yi temsil edin, markamızın büyüme stratejisinden pay alın.",
    link: "/bayilik-basvurusu",
    linkText: "Başvuru Yap",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Sahanıza Özel Tasarruf Analizi",
    subtitle: "Km başına maliyet hesaplama",
    description: "Mevcut araç filonuzla kıyaslamalı elektrikli geçiş ROI analizi. Km başına yakıt, servis ve bakım maliyetlerini hesaplayan özel raporlama hizmeti.",
    link: "/iletisim",
    linkText: "Analiz Talep Et",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Garanti & Bakım Programları",
    subtitle: "Kapsamlı koruma planları",
    description: "Uzun vadeli garanti kapsamı ve periyodik bakım programlarıyla aracınızın ömrünü ve performansını maksimize edin. Bakım süreçlerini bize bırakın.",
    link: "/garanti-ve-bakim",
    linkText: "Garanti Detayları",
  },
];

export default function HizmetlerimizPage() {
  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen text-white">
      {/* Hero */}
      <section
        className="relative w-full py-36 flex items-center justify-center overflow-hidden border-b border-[#2a2a2a]"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-sm" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-sany-red tracking-[0.4em] font-bold text-sm uppercase block mb-6">
            FMT - SANY Türkiye
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest leading-tight mb-8">
            Hizmetlerimiz
          </h1>
          <div className="h-1 w-20 bg-sany-red mx-auto mb-8" />
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            FMT Elektrikli Kamyonlar olarak; satıştan satış sonrasına, operasyonel 
            sürdürülebilirlikten iş ortaklığı modellerine kadar uzanan{" "}
            <span className="text-white font-bold">uçtan uca bir hizmet ekosistemi</span> sunuyoruz.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-[#111112] border border-[#2a2a2a] hover:border-sany-red transition-all duration-500 p-8 flex flex-col relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-sany-red/5 rounded-full blur-2xl group-hover:bg-sany-red/10 transition-all duration-700 pointer-events-none" />

                <div className="text-sany-red mb-6 relative z-10">{service.icon}</div>
                <h3 className="text-white font-black text-xl uppercase tracking-widest mb-2 relative z-10">
                  {service.title}
                </h3>
                <p className="text-sany-red text-xs font-bold tracking-widest uppercase mb-4 relative z-10">
                  {service.subtitle}
                </p>
                <p className="text-gray-400 text-sm font-light leading-relaxed flex-grow relative z-10">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-sany-red group-hover:text-white transition-colors relative z-10"
                >
                  {service.linkText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="w-full py-20 bg-[#111112] border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-xs tracking-widest uppercase font-bold mb-4">Kalite Güvencemiz</p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">
            Tüm Hizmet Yapımız
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Türkiye genelinde kurulan yetkili servis yapılanmamız, güçlü yedek parça ve lojistik 
            altyapımız ve uzun vadeli büyümeyi hedefleyen bayilik modelimiz ile müşterilerimize 
            yalnızca bir araç değil;{" "}
            <span className="text-white font-bold">kesintisiz operasyon, teknik güvence ve sürdürülebilir bir iş ortaklığı</span> vadediyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold tracking-widest uppercase text-gray-500">
            {[
              "Yüksek Voltajlı Araç Sertifikası",
              "SANY Global Garanti",
              "Merkezi Kalite Kontrol",
              "Geleceğe Dönük Altyapı",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-sany-red text-lg">✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest mb-6">
            Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-gray-400 font-light text-lg mb-10">
            İhtiyacınıza özel hizmet çözümü için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-sany-red hover:bg-[#cc0000] text-white px-10 py-4 text-sm font-black tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(234,0,1,0.3)]"
            >
              İletişime Geçin
            </Link>
            <Link
              href="/bayilik-basvurusu"
              className="bg-transparent border border-[#2a2a2a] hover:border-white text-white px-10 py-4 text-sm font-black tracking-[0.2em] uppercase transition-all"
            >
              Bayilik Başvurusu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
