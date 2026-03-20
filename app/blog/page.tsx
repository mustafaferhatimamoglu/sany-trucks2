import Link from 'next/link';
import sayfalar from '../../data/icerik/sayfalar.json';

export const metadata = {
  title: 'Blog & Haberler | Sany Trucks Türkiye',
  description: 'SANY Trucks Türkiye güncel haberler, sektör gelişmeleri ve elektrikli kamyon dünyasından son bilgiler.',
};

const { news } = sayfalar.home;

export default function BlogPage() {
  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[45vh] flex flex-col items-center justify-center overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[#0A0A0A]/85 z-10" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30 grayscale" style={{ backgroundImage: "url('/images/hero-bg.png')" }} />
        <div className="relative z-20 text-center px-6">
          <span className="text-sany-red tracking-[0.4em] font-bold text-sm uppercase mb-4 block">Güncel</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
            Haberler & Blog
          </h1>
          <div className="h-1 w-24 bg-sany-red mx-auto" />
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.items.map((item, index) => (
            <article key={index} className="bg-[#111112] border border-[#2a2a2a] hover:border-[#444] group overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#0A0A0A]/20 group-hover:bg-transparent transition-all z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-sany-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 z-20">
                  {item.date}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-white font-bold text-lg leading-snug mb-4 group-hover:text-sany-red transition-colors">
                  {item.title}
                </h2>
                <span className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] hover:text-white transition-colors inline-flex items-center gap-2 cursor-pointer">
                  {news.readMoreText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 border border-[#2a2a2a] bg-[#111112] p-12 text-center">
          <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-4">Yeniliklerden Haberdar Olun</h3>
          <p className="text-gray-400 mb-8 font-light">Elektrikli ticari araç dünyasındaki son gelişmeleri yakından takip edin.</p>
          <Link href="/iletisim" className="inline-block bg-sany-red hover:bg-[#cc0000] text-white px-10 py-4 font-bold tracking-[0.2em] uppercase text-sm transition-all shadow-[0_0_20px_rgba(234,0,1,0.3)]">
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </div>
  );
}
