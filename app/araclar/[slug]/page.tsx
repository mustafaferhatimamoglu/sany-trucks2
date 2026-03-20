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

  if (!arac) {
    notFound();
  }

  return (
    <div className="w-full bg-[#141415] min-h-screen text-[#f4f4f5]">
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-16 px-6 overflow-hidden flex flex-col items-center">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sany-red/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center z-10 mb-12">
          <h2 className="text-sm md:text-md text-gray-500 font-bold tracking-[0.3em] uppercase mb-4">
            {arac.model}
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-xl">
            {arac.name}
          </h1>
        </div>

        {/* Large Centered Image area */}
        <div className="relative w-full max-w-5xl h-[40vh] md:h-[60vh] z-10 mx-auto">
          <div 
            className="w-full h-full bg-contain bg-center bg-no-repeat" 
            style={{ backgroundImage: `url('${arac.image}')` }}
          ></div>
        </div>

        {/* Key Stats (BMW/Porsche Style) */}
        <div className="relative z-20 w-full max-w-5xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center bg-[#1a1a1c] border border-[#2a2a2a] rounded-xl p-8 shadow-2xl">
          {arac.key_stats?.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-8 border-b md:border-b-0 md:border-r border-[#2a2a2a] last:border-0 w-full md:w-1/3 py-6 md:py-0">
              <div className="flex items-baseline gap-2">
                <span className="text-sany-red font-black text-6xl tracking-tighter">{stat.value}</span>
                <span className="text-gray-400 font-bold text-xl">{stat.unit}</span>
              </div>
              <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#18181b] border-t border-[#2a2a2a] relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Left Column - Tech Specs */}
          <div className="flex-1">
            <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-10 flex items-center gap-4">
              <span className="w-2 h-8 bg-sany-red inline-block"></span> TEKNİK ÖZELLİKLER
            </h3>
            
            <div className="flex flex-col bg-[#141415] rounded-lg p-8 border border-[#2a2a2a] shadow-lg">
              {Object.entries(arac.specs).map(([key, value], idx) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between py-5 border-b border-[#2a2a2a] group hover:bg-[#1a1a1c] px-4 transition-colors last:border-0">
                  <span className="text-gray-400 font-medium tracking-wide mb-1 md:mb-0 w-full md:w-1/2">{key}</span>
                  <span className="text-white font-semibold w-full md:text-right md:w-1/2">{value as string}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Description & Highlights */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-10 flex items-center gap-4">
               GENEL BAKIŞ
            </h3>
            <p className="text-gray-300 leading-relaxed font-light text-lg mb-12">
              {arac.description}
            </p>
            
            <div className="bg-[#141415] border border-[#2a2a2a] p-8 rounded-xl shadow-lg mb-10">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-6">Öne Çıkanlar</h4>
              <ul className="space-y-4">
                {arac.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-400">
                    <span className="text-sany-red font-bold mr-3 mt-0.5">•</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/iletisim" className="w-full block text-center bg-sany-red hover:bg-[#cc0000] text-white py-4 font-bold uppercase tracking-[0.2em] rounded-sm transition-all shadow-[0_0_20px_rgba(234,0,1,0.2)] hover:shadow-[0_0_30px_rgba(234,0,1,0.5)]">
               SİPARİŞ VE TEKLİF
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}
