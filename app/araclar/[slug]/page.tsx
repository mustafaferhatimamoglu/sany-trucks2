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
    <div className="w-full bg-[#0A0A0A] min-h-screen text-white selection:bg-sany-red selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sany-red/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>

        {/* Text Behind Image */}
        <div className="absolute top-[40%] left-0 w-full text-center z-0 pointer-events-none transform -translate-y-1/2 flex justify-center">
           <h1 className="text-[15vw] font-black uppercase text-white/5 tracking-tighter leading-none select-none whitespace-nowrap overflow-hidden">{arac.model}</h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 flex flex-col items-center">
           
           <div className="text-center mb-10 w-full">
              <span className="text-gray-400 font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase mb-4 block">MODEL {new Date().getFullYear()}</span>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-widest text-[#f5f5f5] drop-shadow-2xl">{arac.name.replace('SANY ', '')}</h1>
              <p className="mt-6 text-gray-400 font-light text-sm max-w-2xl mx-auto leading-relaxed">{arac.description}</p>
           </div>
           
           <div className="w-full max-w-6xl relative flex justify-center items-center">
              <img src={arac.image} alt={arac.name} className="w-full max-h-[50vh] object-contain mb-8 z-20 relative drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)] filter contrast-125" />
           </div>

           <div className="mt-4 flex gap-6 z-20">
             <Link href="/iletisim" className="group bg-sany-red hover:bg-[#cc0000] text-white px-10 py-5 text-xs font-black tracking-[0.2em] uppercase transition-all shadow-[0_0_40px_rgba(234,0,1,0.3)] flex items-center gap-4 border border-sany-red">
               TEKLİF İSTE 
               <span className="block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
             </Link>
           </div>
        </div>
      </section>

      {/* 2. SUB-NAVIGATION (Sticky) */}
      <div className="sticky top-[80px] md:top-[90px] z-50 w-full border-b border-[#2a2a2a] bg-[#0A0A0A]/95 backdrop-blur-xl">
         <div className="max-w-7xl mx-auto px-6 flex justify-center py-5">
            <nav className="flex items-center gap-8 md:gap-16 overflow-x-auto text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap hide-scrollbar">
              <a href="#donanim" className="text-gray-400 hover:text-white transition-colors">Donanım</a>
              <a href="#ozellikler" className="text-gray-400 hover:text-white transition-colors">Karakteristik</a>
              <a href="#tasarim" className="text-gray-400 hover:text-white transition-colors">Tasarım & Detay</a>
              <a href="#akordeon" className="text-gray-400 hover:text-white transition-colors">Teknik Özellikler</a>
            </nav>
         </div>
      </div>

      {/* 3. DONANIM / ÖZELLİKLER (Features on dark/textured bg) */}
      <section id="donanim" className="relative w-full py-24 lg:py-0 bg-[#0A0A0A] border-b border-[#1a1a1c] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sany-red/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="w-full flex flex-col lg:flex-row items-center relative z-10">
          <div className="w-full lg:w-1/2 px-6 lg:pl-[calc(max(1.5rem,(100vw-80rem)/2))] lg:pr-16 py-12 lg:py-32">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[#f5f5f5] mb-6">Donanım</h2>
            <div className="h-1 w-20 bg-sany-red mb-8"></div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              SANY {arac.name}, sınırları zorlayan teknolojileri ve eşsiz donanımıyla geleceğe yön veriyor. Özenle tasarlanmış iç mekan ve dayanıklı dış bileşenler.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {arac.features.map((feat, i) => (
                 <div key={i} className="flex items-start gap-4 p-6 bg-[#050505] border border-[#1a1a1c] hover:border-[#2a2a2c] transition-colors group">
                   <div className="w-6 h-6 rounded-full bg-sany-red/10 text-sany-red flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-sany-red group-hover:text-white transition-colors">
                     <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                     </svg>
                   </div>
                   <span className="text-sm font-bold tracking-[0.1em] text-gray-300 uppercase leading-snug">{feat}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[800px] flex justify-end">
             {/* Gradient Mask to blend the image into the dark background on the left */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent z-10 pointer-events-none hidden lg:block"></div>
             <img src={(arac.gallery && arac.gallery.length > 1) ? arac.gallery[1] : arac.image} alt={`${arac.name} Donanım`} className="w-full h-full object-cover filter brightness-50 contrast-125 select-none" />
          </div>
        </div>
      </section>

      {/* 4. KEY STATS (Huge Numbers) */}
      <section id="ozellikler" className="w-full py-24 lg:py-0 bg-[#050505] border-b border-[#1a1a1c] overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row items-center relative z-10">
          
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[800px] flex items-center justify-center order-2 lg:order-1 bg-[#0A0A0A]">
             <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-transparent to-transparent z-10 pointer-events-none hidden lg:block"></div>
             <img src={(arac.gallery && arac.gallery.length > 2) ? arac.gallery[2] : arac.image} alt={`${arac.name} Profil`} className="w-[90%] h-auto object-contain filter contrast-125 drop-shadow-[0_20px_40px_rgba(234,0,1,0.1)] select-none" />
          </div>

          <div className="w-full lg:w-1/2 px-6 lg:pr-[calc(max(1.5rem,(100vw-80rem)/2))] lg:pl-16 py-12 lg:py-32 flex flex-col order-1 lg:order-2">
            <div className="flex flex-col mb-16 lg:items-end lg:text-right">
              <h2 className="text-sm text-gray-500 font-bold tracking-[0.3em] uppercase mb-4">Teknik Karakteristikler</h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[#f5f5f5]">{arac.name} GÜCÜ</h3>
              <div className="h-1 w-20 bg-sany-red mt-6"></div>
            </div>

            <div className="flex flex-col gap-12 border-t border-[#1a1a1c] pt-12">
              
              <div className="flex flex-col gap-2 relative group w-full lg:items-end lg:text-right">
                <div className="flex items-baseline gap-2 justify-start lg:justify-end">
                  <span className="text-6xl sm:text-7xl lg:text-8xl leading-none font-black text-sany-red group-hover:text-[#ff1a1a] transition-colors tracking-tighter">
                     {arac.key_stats[0]?.value || '500'}
                  </span>
                  <span className="text-xl lg:text-2xl font-bold text-gray-500 group-hover:text-[#f5f5f5] transition-colors">{arac.key_stats[0]?.unit || 'HP'}</span>
                </div>
                <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mt-2">{arac.key_stats[0]?.label || 'MOTOR GÜCÜ'}</span>
              </div>

              <div className="flex flex-col gap-2 relative group w-full lg:items-end lg:text-right">
                <div className="flex items-baseline gap-2 justify-start lg:justify-end">
                  <span className="text-6xl sm:text-7xl lg:text-8xl leading-none font-black text-sany-red group-hover:text-[#ff1a1a] transition-colors tracking-tighter">
                     {arac.capacity ? arac.capacity.split(' ')[0] : '80'}
                  </span>
                  <span className="text-xl lg:text-2xl font-bold text-gray-500 group-hover:text-[#f5f5f5] transition-colors">
                     {arac.capacity ? arac.capacity.split(' ').slice(1).join(' ') : 'TON'}
                  </span>
                </div>
                <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mt-2">MAKSİMUM KAPASİTE</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. TASARIM / GALLERY */}
      <section id="tasarim" className="w-full py-24 lg:py-0 bg-[#0A0A0A] border-b border-[#1a1a1c]">
        <div className="w-full flex flex-col lg:flex-row items-stretch relative z-10">
          <div className="w-full lg:w-1/3 px-6 lg:pl-[calc(max(1.5rem,(100vw-80rem)/2))] lg:pr-16 py-12 lg:py-32 flex flex-col">
            <span className="text-sm text-gray-500 font-bold tracking-[0.3em] uppercase mb-4 block">Göz Alıcı Çizgiler</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[#f5f5f5] mb-8">Tasarım & Detaylar</h2>
            <div className="h-1 w-20 bg-sany-red mb-8"></div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Geniş duruşu, aerodinamik hatları ve fütüristik çizgileri ile SANY {arac.name}, yoldaki gücü dış tasarıma mükemmel bir şekilde yansıtır.
            </p>
          </div>
          <div className="w-full lg:w-2/3 bg-[#050505]">
            <VehicleGallery 
              images={arac.gallery || [arac.image]} 
              capacity={arac.capacity} 
              name={arac.name} 
              colors={arac.colors}
              trailers={arac.trailers}
            />
          </div>
        </div>
      </section>

      {/* 6. TEKNİK BİLGİLER AKORDEON */}
      <section id="akordeon" className="w-full py-32 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[#f5f5f5]">Tüm Teknik Veriler</h2>
             <div className="h-1 w-20 bg-sany-red mx-auto mt-8"></div>
          </div>

          <div className="flex flex-col divide-y divide-[#1a1a1c] border-y border-[#1a1a1c]">
            {/* Genel Teknik Bilgiler */}
            <details className="group" open>
              <summary className="flex justify-between items-center py-8 cursor-pointer list-none select-none px-4">
                <span className="text-lg md:text-xl font-black tracking-widest uppercase text-gray-400 group-hover:text-[#f5f5f5] transition-colors">
                  Genel Teknik Bilgiler
                </span>
                <span className="text-3xl text-sany-red font-light group-open:rotate-45 transition-transform origin-center leading-none">+</span>
              </summary>
              <div className="pb-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {Object.entries(arac.specs).slice(0, halfSpecs).map(([key, value]) => (
                  <div key={key} className="flex items-start justify-between py-2 border-b border-[#111112]">
                    <span className="text-gray-500 text-xs md:text-sm font-bold tracking-widest uppercase">{key}</span>
                    <span className="text-white text-xs md:text-sm font-medium text-right w-1/2">{value as string}</span>
                  </div>
                ))}
              </div>
            </details>

            {/* Güç Aktarma Sistemi */}
            <details className="group">
              <summary className="flex justify-between items-center py-8 cursor-pointer list-none select-none px-4">
                <span className="text-lg md:text-xl font-black tracking-widest uppercase text-gray-400 group-hover:text-[#f5f5f5] transition-colors">
                  Güç Aktarma Sistemi
                </span>
                <span className="text-3xl text-sany-red font-light group-open:rotate-45 transition-transform origin-center leading-none">+</span>
              </summary>
              <div className="pb-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {Object.entries(arac.specs).slice(halfSpecs).map(([key, value]) => (
                  <div key={key} className="flex items-start justify-between py-2 border-b border-[#111112]">
                    <span className="text-gray-500 text-xs md:text-sm font-bold tracking-widest uppercase">{key}</span>
                    <span className="text-white text-xs md:text-sm font-medium text-right w-1/2">{value as string}</span>
                  </div>
                ))}
              </div>
            </details>
          </div>

        </div>
      </section>

      {/* 7. DİĞER MODELLER & HARİTA/İLETİŞİM (Bottom) */}
      <section className="relative w-full py-24 lg:py-0 bg-[#0A0A0A] overflow-hidden border-t border-[#1a1a1c]">
        {/* Subtle Map dots background overlay */}
        <div className="absolute inset-x-0 bottom-0 h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="w-full flex flex-col lg:flex-row items-center relative z-10 mb-16 lg:mb-0">
          
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[800px] hidden lg:flex items-center justify-start pointer-events-none">
             <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10 pointer-events-none"></div>
             <img src={(arac.gallery && arac.gallery.length > 3) ? arac.gallery[3] : arac.image} alt="İletişim Görsel" className="w-[120%] -ml-[20%] h-auto object-contain filter contrast-125 brightness-50 select-none" />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col px-6 lg:pr-[calc(max(1.5rem,(100vw-80rem)/2))] lg:pl-16 py-12 lg:py-32">
            <span className="text-sany-red tracking-[0.2em] font-bold text-xs uppercase mb-4 block">Merkez</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#f5f5f5] uppercase tracking-widest mb-12">İletişim & Bayiler</h2>
            
            <div className="bg-[#050505] border border-[#1a1a1c] p-8 md:p-12 w-full flex flex-col sm:flex-row items-start justify-between gap-12 relative shadow-2xl">
               <div className="absolute top-0 left-0 w-1 h-full bg-sany-red"></div>
               
               <div className="flex-1 space-y-8 w-full">
                  <div>
                     <h4 className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Merkez Ofis</h4>
                     <p className="text-white text-sm font-bold">İstanbul, Türkiye</p>
                  </div>
                  <div>
                     <h4 className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Çalışma Saatleri</h4>
                     <p className="text-white text-sm font-bold">Pzt - Cuma: 09:00 - 18:00</p>
                  </div>
                  <div>
                     <h4 className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Telefon</h4>
                     <p className="text-sany-red font-black text-xl">+90 850 000 0000</p>
                  </div>
               </div>

               <div className="flex-1 w-full flex flex-col gap-4 mt-8 sm:mt-0">
                  <Link href="/bayilik-basvurusu" className="w-full bg-[#111112] border border-[#1a1a1c] hover:border-white text-white text-center py-5 text-xs lg:text-[10px] font-black tracking-[0.2em] uppercase transition-all">
                    Bayilik Başvurusu
                  </Link>
                  <Link href="/iletisim" className="w-full bg-sany-red hover:bg-[#cc0000] text-white text-center py-5 text-xs lg:text-[10px] font-black tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(234,0,1,0.2)]">
                    Bize Ulaşın
                  </Link>
               </div>
            </div>
          </div>
        </div>

        {/* Other Models Grid Component */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 mt-32 border-t border-[#1a1a1c] pt-24">
          <div className="text-center mb-16">
            <span className="text-sany-red tracking-[0.2em] font-bold text-sm uppercase block mb-4">Ürün Gamı</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#f5f5f5] uppercase tracking-widest">Diğer Modeller</h2>
            <div className="h-1 w-16 bg-sany-red mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherAraclar.slice(0, 3).map((other) => (
              <Link
                 key={other.slug}
                 href={`/araclar/${other.slug}`}
                 className="group bg-[#0A0A0A] border border-[#1a1a1c] hover:border-sany-red transition-all duration-500 flex flex-col p-8 items-center"
              >
                <div className="h-40 w-full flex items-center justify-center mb-6">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="max-h-full max-w-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-500 drop-shadow-xl"
                  />
                </div>
                <h3 className="text-white font-black uppercase tracking-widest text-base mb-2 group-hover:text-sany-red transition-colors text-center">{other.name}</h3>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">{other.capacity}</p>
                <div className="text-sany-red text-[10px] font-black tracking-[0.2em] uppercase inline-flex items-center gap-2 mt-auto">
                  <span className="w-6 h-px bg-sany-red group-hover:w-10 transition-all"></span>
                  İNCELE
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
