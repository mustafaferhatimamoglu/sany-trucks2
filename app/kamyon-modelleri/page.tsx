import Link from 'next/link';
import araclar from '../../data/araclarim/data.json';

export default function KamyonModelleri() {
  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[#0A0A0A]/85 z-10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
        <div className="relative z-20 text-center px-6">
          <span className="text-sany-red tracking-[0.4em] font-bold text-sm uppercase mb-4 block">Geleceğin Filonuzu Kurun</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
            TÜM KAMYON MODELLERİ
          </h1>
          <div className="h-1 w-24 bg-sany-red mx-auto"></div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {araclar.map((arac, index) => (
              <Link href={`/araclar/${arac.slug}`} key={arac.id} className="group bg-[#111112] border border-[#2a2a2a] hover:border-sany-red transition-all duration-500 flex flex-col items-center p-8 relative overflow-hidden h-[600px] cursor-pointer shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sany-red/5 rounded-full blur-3xl group-hover:bg-sany-red/10 transition-all duration-700 pointer-events-none"></div>

                <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2 z-10 text-center mt-4">
                  {arac.name.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? "text-sany-red" : ""}>{word} </span>
                  ))}
                </h3>
                <p className="text-gray-500 text-xs tracking-[0.2em] uppercase font-bold mb-12 z-10">{arac.capacity}</p>
                
                <div className="relative w-full flex-grow flex items-center justify-center -mt-6 z-10 p-4 transition-transform duration-700 group-hover:scale-110">
                  <img src={arac.image} alt={arac.name} className="w-full h-auto object-contain drop-shadow-2xl filter brightness-90 group-hover:brightness-110" />
                </div>
                
                <div className="w-full flex flex-col gap-4 z-10 mt-6 border-t border-[#2a2a2a] pt-6 group-hover:border-sany-red transition-colors duration-500">
                  <div className="flex justify-between items-center w-full">
                      <span className="text-[10px] text-gray-500 tracking-widest uppercase">Motor</span>
                      <span className="text-sm font-black text-white">{arac.key_stats[0].value} {arac.key_stats[0].unit}</span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                      <span className="text-[10px] text-gray-500 tracking-widest uppercase">Kapasite</span>
                      <span className="text-sm font-black text-white">{arac.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center w-full bg-sany-red text-white py-3 px-4 uppercase text-xs font-bold tracking-widest hover:bg-[#cc0000] transition-colors text-center mt-2 group">
                      <span className="mx-auto">İncele</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
