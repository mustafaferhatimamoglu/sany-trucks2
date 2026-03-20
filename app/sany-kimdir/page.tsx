import Link from "next/link";
import sayfalar from "../../data/icerik/sayfalar.json";

export default function SanyKimdir() {
  const content = sayfalar.sanyKimdir;

  return (
    <div className="w-full bg-[#141415] min-h-screen text-[#f4f4f5]">
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]/80 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
            SANY KİMDİR?
          </h1>
          <div className="h-1 w-24 bg-sany-red mx-auto"></div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 leading-relaxed text-lg mb-8 font-light text-justify">
            {content.text}
          </p>
          <div className="w-full h-[400px] border border-[#2a2a2a] rounded-lg overflow-hidden relative shadow-2xl mt-12 bg-[#1a1a1c]">
             <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/kurumsal1.png')" }}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
