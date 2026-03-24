import araclar from "../../../data/araclarim/data.json";
import { notFound } from "next/navigation";
import Link from 'next/link';

export async function generateStaticParams() {
  return araclar.map((arac) => ({
    slug: arac.slug,
  }));
}

export default async function UrunDetay(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const arac = araclar.find((a) => a.slug === params.slug);
  if (!arac) notFound();

  const otherAraclar = araclar.filter((a) => a.slug !== arac.slug);
  const halfSpecs = Math.ceil(Object.entries(arac.specs).length / 2);

  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen text-white">

      {/* Hero */}
      <section className="relative w-full py-28 flex items-center justify-center overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url('${arac.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6 text-xs text-gray-500 font-bold tracking-widest uppercase">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/kamyon-modelleri" className="hover:text-white transition-colors">Araçlar</Link>
            <span>/</span>
            <span className="text-sany-red">{arac.name}</span>
          </div>
          <span className="text-sany-red font-bold tracking-[0.3em] text-sm uppercase block mb-4">{arac.model}</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-tight mb-6">{arac.name}</h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">{arac.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT: Gallery */}
            <div className="lg:sticky lg:top-24">
              {/* Main Image */}
              <div className="relative bg-[#111112] border border-[#2a2a2a] overflow-hidden mb-4 group">
                <img
                  src={arac.image}
                  alt={arac.name}
                  className="w-full h-auto object-contain p-8 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  style={{ maxHeight: "420px", objectFit: "contain" }}
                />
                <div className="absolute top-4 right-4 bg-sany-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                  {arac.capacity}
                </div>
              </div>

              {/* Thumbnail Row */}
              <div className="grid grid-cols-6 gap-2 mb-4">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`relative border overflow-hidden cursor-pointer transition-all ${
                      i === 0 ? "border-sany-red" : "border-[#2a2a2a] hover:border-[#555]"
                    }`}
                  >
                    <img
                      src={arac.image}
                      alt={`${arac.name} görsel ${i + 1}`}
                      className="w-full h-14 object-cover opacity-70 hover:opacity-100 transition-opacity"
                      style={{ filter: i !== 0 ? "grayscale(60%)" : "none" }}
                    />
                  </div>
                ))}
              </div>

              {/* 360 View Selector */}
              <div className="flex gap-0 border border-[#2a2a2a] bg-[#111112] overflow-hidden">
                {["ÖN", "YAN", "ARKA"].map((view, i) => (
                  <button
                    key={view}
                    className={`flex-1 py-3 text-xs font-black tracking-widest uppercase transition-all border-r border-[#2a2a2a] last:border-r-0 ${
                      i === 1 ? "bg-sany-red text-white" : "text-gray-500 hover:text-white hover:bg-[#1a1a1c]"
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Specs */}
            <div className="flex flex-col gap-8">
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-0 border border-[#2a2a2a] overflow-hidden">
                {arac.key_stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center p-6 text-center border-r border-[#2a2a2a] last:border-r-0 ${
                      i === 0 ? "bg-sany-red/10 border-sany-red/30" : "bg-[#111112]"
                    }`}
                  >
                    <span className="text-2xl md:text-3xl font-black text-white">
                      {stat.value}
                      <span className="text-base ml-1 text-sany-red">{stat.unit}</span>
                    </span>
                    <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase mt-2">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {arac.features.map((feat, i) => (
                  <span key={i} className="bg-[#111112] border border-[#2a2a2a] text-gray-300 text-xs font-bold tracking-widest uppercase px-4 py-2">
                    ✓ {feat}
                  </span>
                ))}
              </div>

              {/* Accordion Specs */}
              <div className="flex flex-col border border-[#2a2a2a] overflow-hidden">
                {/* Genel Teknik Bilgiler */}
                <details className="group" open>
                  <summary className="flex justify-between items-center px-6 py-4 bg-[#111112] cursor-pointer hover:bg-[#1a1a1c] border-b border-[#2a2a2a] transition-colors list-none select-none">
                    <span className="text-sm font-black tracking-widest uppercase flex items-center gap-2">
                      <span className="text-sany-red">▶</span> Genel Teknik Bilgiler
                    </span>
                    <svg className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="bg-[#0d0d0d] border-b border-[#2a2a2a]">
                    {Object.entries(arac.specs).slice(0, halfSpecs).map(([key, value]) => (
                      <div key={key} className="flex items-start justify-between px-6 py-3 gap-4 border-b border-[#1a1a1c] last:border-b-0 hover:bg-[#111112] transition-colors">
                        <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">{key}</span>
                        <span className="text-white text-xs font-medium text-right max-w-[55%]">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </details>

                {/* Güç Aktarma Sistemi */}
                <details className="group">
                  <summary className="flex justify-between items-center px-6 py-4 bg-[#111112] cursor-pointer hover:bg-[#1a1a1c] border-b border-[#2a2a2a] transition-colors list-none select-none">
                    <span className="text-sm font-black tracking-widest uppercase flex items-center gap-2">
                      <span className="text-sany-red">▶</span> Güç Aktarma Sistemi
                    </span>
                    <svg className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="bg-[#0d0d0d] border-b border-[#2a2a2a]">
                    {Object.entries(arac.specs).slice(halfSpecs).map(([key, value]) => (
                      <div key={key} className="flex items-start justify-between px-6 py-3 gap-4 border-b border-[#1a1a1c] last:border-b-0 hover:bg-[#111112] transition-colors">
                        <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">{key}</span>
                        <span className="text-white text-xs font-medium text-right max-w-[55%]">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </details>

                {/* Ağırlık & Kapasite */}
                <details className="group">
                  <summary className="flex justify-between items-center px-6 py-4 bg-[#111112] cursor-pointer hover:bg-[#1a1a1c] transition-colors list-none select-none">
                    <span className="text-sm font-black tracking-widest uppercase flex items-center gap-2">
                      <span className="text-sany-red">▶</span> Ağırlık & Kapasite
                    </span>
                    <svg className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="bg-[#0d0d0d]">
                    <div className="flex items-start justify-between px-6 py-3 gap-4 border-b border-[#1a1a1c] hover:bg-[#111112] transition-colors">
                      <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Azami Ağırlık</span>
                      <span className="text-white text-xs font-medium">{arac.capacity}</span>
                    </div>
                    <div className="flex items-start justify-between px-6 py-3 gap-4 hover:bg-[#111112] transition-colors">
                      <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Emisyon</span>
                      <span className="text-sany-red text-xs font-black">0 CO₂</span>
                    </div>
                  </div>
                </details>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/iletisim"
                  className="flex-1 bg-sany-red hover:bg-[#cc0000] text-white text-center py-4 text-sm font-black tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(234,0,1,0.3)]"
                >
                  Teklif İste
                </Link>
                <Link
                  href="/bayilik-basvurusu"
                  className="flex-1 bg-transparent border border-[#2a2a2a] hover:border-white text-white text-center py-4 text-sm font-black tracking-[0.2em] uppercase transition-all"
                >
                  Bayilik Başvurusu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Models */}
      <section className="w-full py-20 bg-[#111112] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-sany-red tracking-[0.2em] font-bold text-sm uppercase block mb-4">Filomuzdan</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-widest">Diğer Modeller</h2>
            <div className="h-1 w-16 bg-sany-red mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherAraclar.map((other) => (
              <Link
                key={other.slug}
                href={`/araclar/${other.slug}`}
                className="group bg-[#0A0A0A] border border-[#2a2a2a] hover:border-sany-red transition-all duration-500 flex gap-6 p-6 items-center"
              >
                <img
                  src={other.image}
                  alt={other.name}
                  className="w-32 h-24 object-contain flex-shrink-0 filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                />
                <div>
                  <h3 className="text-white font-black uppercase tracking-widest text-sm mb-1 group-hover:text-sany-red transition-colors">{other.name}</h3>
                  <p className="text-gray-500 text-xs mb-3">{other.capacity}</p>
                  <span className="text-sany-red text-xs font-bold tracking-widest uppercase inline-flex items-center gap-1">
                    İncele
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
