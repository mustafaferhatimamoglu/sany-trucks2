import araclar from "../../../data/araclarim/data.json";
import { notFound } from "next/navigation";
import Link from 'next/link';
import VehicleGallery from "../../components/VehicleGallery";

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

      {/* Compact Header */}
      <section className="relative w-full pt-32 pb-10 border-b border-[#2a2a2a] bg-[#0A0A0A] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sany-red/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-sany-red/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-2/3 text-left">
            <div className="flex items-center gap-3 mb-6 text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span className="text-[#333]">/</span>
              <Link href="/kamyon-modelleri" className="hover:text-white transition-colors">Araçlar</Link>
              <span className="text-[#333]">/</span>
              <span className="text-sany-red">{arac.name}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white mb-2">{arac.name}</h1>
            <span className="text-sany-red font-black tracking-[0.3em] text-xs uppercase block mb-6">{arac.model}</span>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl">{arac.description}</p>
          </div>
          
          <div className="hidden lg:flex w-1/3 justify-end items-center pointer-events-none">
             <img src={arac.image} alt="Silhouette" className="h-[140px] w-auto object-contain grayscale opacity-20 sepia-[0.3] hue-rotate-[-50deg] mix-blend-screen" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT: Gallery */}
            <VehicleGallery 
              images={arac.gallery || [arac.image]} 
              capacity={arac.capacity} 
              name={arac.name} 
              colors={arac.colors}
              trailers={arac.trailers}
            />

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
