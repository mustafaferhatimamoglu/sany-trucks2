import Link from "next/link";
import sayfalar from "../../data/icerik/sayfalar.json";

export const metadata = {
  title: "İletişim | Sany Trucks Türkiye",
  description: "Sany Trucks Türkiye ile iletişime geçin. ALCI OSB MAH. 2019 CAD. NO:3 SİNCAN/ANKARA. Tel: 444 01 38",
};

export default function Iletisim() {
  const { contact } = sayfalar;

  return (
    <div className="w-full bg-[#141415] min-h-screen">
      {/* Upper Cover */}
      <section className="relative w-full h-[40vh] flex flex-col items-center justify-center overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[#141415]/80 z-10"></div>
        <div className="absolute inset-0 bg-[url(/images/iletisim-bg.jpeg)] bg-cover bg-center opacity-40 grayscale"></div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-black text-white uppercase tracking-widest mb-4">
            BİZE ULAŞIN
          </h1>
          <p className="text-sany-red tracking-[0.2em] font-bold text-sm uppercase">İşinizin Geleceği İçin İlk Adım</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 flex flex-col lg:flex-row gap-20">
        
        {/* Contact Info blocks */}
        <div className="lg:w-1/3 flex flex-col gap-12">
           <div>
             <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-[#2a2a2a] pb-2 inline-block">ADRES / FABRİKA</h3>
             <p className="text-xl font-medium text-white leading-relaxed">{contact.address}</p>
           </div>
           <div>
             <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-[#2a2a2a] pb-2 inline-block">TELEFON</h3>
             <a href={`tel:${contact.phone}`} className="text-4xl font-black text-white hover:text-sany-red transition-colors">{contact.phone}</a>
           </div>
           <div>
             <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-[#2a2a2a] pb-2 inline-block">E-POSTA</h3>
             <a href={`mailto:${contact.email}`} className="text-xl font-medium text-white hover:text-sany-red transition-colors">{contact.email}</a>
           </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-[#1a1a1c] border border-[#2a2a2a] rounded-lg p-10 md:p-14 shadow-2xl">
          <h2 className="text-3xl font-black text-white uppercase mb-8">İLETİŞİM FORMU</h2>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Ad Soyad</label>
                <input type="text" className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors" placeholder="Adınız Soyadınız" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">E-Posta</label>
                <input type="email" className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors" placeholder="E-Posta Adresiniz" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Telefon</label>
                <input type="tel" className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors" placeholder="Telefon Numaranız" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Konu</label>
                <input type="text" className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors" placeholder="İletişim Konusu" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Size Nasıl Yardımcı Olabiliriz?</label>
              <textarea rows={5} className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors resize-none" placeholder="Mesajınızı buraya yazın..."></textarea>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <input type="checkbox" id="privacy" className="w-5 h-5 accent-sany-red bg-[#141415] border-[#333]" />
              <label htmlFor="privacy" className="text-gray-400 text-sm cursor-pointer">Gizlilik Politikası'nı okudum ve kabul ediyorum.</label>
            </div>

            <button type="button" className="mt-6 bg-sany-red hover:bg-[#cc0000] text-white font-bold tracking-[0.2em] uppercase py-5 rounded-sm transition-all shadow-lg hover:shadow-sany-red/30">
              İletişime Geç
            </button>
          </form>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full border-t border-[#2a2a2a]">
        <div className="w-full h-[450px] relative">
          <div className="absolute top-4 left-4 z-10 bg-[#0d0d0d]/90 border border-[#2a2a2a] px-4 py-2">
            <p className="text-white font-bold text-xs tracking-widest uppercase">ALCI OSB MAH. 2019 CAD. NO:3 SİNCAN/ANKARA</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.867!2d32.5838!3d39.9752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33b99b7e2f5a5%3A0x4f1234567890abcd!2sALCI%20OSB%20MAH.%202019%20CAD.%20NO%3A3%2C%20Sincan%2C%20Ankara!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sany Trucks Türkiye Konum"
          />
        </div>
      </section>
    </div>
  );
}

