import Link from "next/link";
import sayfalar from "../../data/icerik/sayfalar.json";

export default function FmtKimdir() {
  const content = sayfalar.fmtKimdir;

  return (
    <div className="w-full bg-[#141415] min-h-screen text-[#f4f4f5]">
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]/80 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-2xl">
            FMT KİMDİR?
          </h1>
          <div className="h-1 w-24 bg-sany-red mx-auto"></div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="p-8 bg-[#1a1a1c] border-l-4 border-sany-red text-gray-300 font-light leading-relaxed">
            {content.text1}
          </div>
          <div className="p-8 bg-[#18181b] border-l-4 border-[#333] text-gray-400 font-light leading-relaxed">
            {content.text2}
          </div>
          <div className="p-8 bg-[#141415] border border-sany-red/30 shadow-[0_0_20px_rgba(234,0,1,0.1)] text-white font-medium leading-relaxed">
            {content.text3}
          </div>
        </div>
      </section>
    </div>
  );
}
