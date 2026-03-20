export default function BayilikBasvurusu() {
  return (
    <div className="w-full bg-[#141415] min-h-screen text-[#f4f4f5]">
      {/* Upper Cover */}
      <section className="relative w-full h-[40vh] flex flex-col items-center justify-center overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[#0A0A0A]/80 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale" style={{ backgroundImage: "url('/images/kurumsal2.jpg')" }}></div>
        <div className="relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-4">
            BAYİLİK BAŞVURUSU
          </h1>
          <p className="text-sany-red tracking-[0.2em] font-bold text-xs md:text-sm uppercase">Mobilite Devrimine Ortak Olun</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-24 px-6 md:px-12">
        <div className="mb-16 text-center max-w-3xl mx-auto">
           <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
             Elektrikli ticari araçlar ve ağır sanayi taşımacılığı geleceğin en büyük dönüşüm pazarıdır. FMT SANY iş birliğinin büyüme stratejisinin bir parçası olarak, Türkiye'nin farklı bölgelerinde markamızı temsil edecek vizyoner yatırımcılarla tanışmak istiyoruz.
           </p>
        </div>

        {/* Form Container */}
        <div className="w-full bg-[#1a1a1c] border border-[#2a2a2a] rounded-lg p-10 md:p-14 shadow-2xl">
          <form className="flex flex-col gap-6">
            
            <h3 className="text-white font-black tracking-widest uppercase mb-4 border-b border-[#333] pb-2 text-sm">Firma Bilgileri</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Firma / Kurum Adı *</label>
                <input type="text" className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors" placeholder="A.Ş. veya Ltd. Şti." required />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Vergi / Mersis No *</label>
                <input type="text" className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors" placeholder="Zorunlu Alan" required />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Açık Adres / Faaliyet Bölgesi</label>
              <textarea rows={2} className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors resize-none" placeholder="Firma Merkez Adresiniz..."></textarea>
            </div>

            <h3 className="text-white font-black tracking-widest uppercase mb-4 mt-8 border-b border-[#333] pb-2 text-sm">İletişim Sorumlusu</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Ad Soyad Unvan *</label>
                <input type="text" className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors" placeholder="Yetkili Kişi" required/>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">E-Posta Adresi *</label>
                <input type="email" className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors" placeholder="Kurumsal Mail Adresi" required />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
               <div className="w-full md:w-1/2 flex flex-col gap-2">
                <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Cep Telefonu *</label>
                <input type="tel" className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors" placeholder="+90 5..." required />
              </div>
            </div>

            <h3 className="text-white font-black tracking-widest uppercase mb-4 mt-8 border-b border-[#333] pb-2 text-sm">Ek Bilgiler</h3>
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-xs font-bold tracking-widest uppercase">Sektördeki Tecrübeniz ve Alt Yapınız</label>
              <textarea rows={4} className="bg-[#141415] border border-[#333] text-white p-4 focus:outline-none focus:border-sany-red transition-colors resize-none" placeholder="Servis veya bayilik deneyiminden kısaca bahsedin..."></textarea>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <input type="checkbox" id="privacy" className="w-5 h-5 accent-sany-red bg-[#141415] border-[#333]" />
              <label htmlFor="privacy" className="text-gray-400 text-xs cursor-pointer">KVKK Aydınlatma Metnini Okudum ve Ticari İletişim İzni veriyorum.</label>
            </div>

            <button type="button" className="mt-8 bg-sany-red hover:bg-[#cc0000] text-white font-bold tracking-[0.2em] uppercase py-5 rounded-sm transition-all shadow-lg hover:shadow-sany-red/30 focus:outline-none">
              Başvuruyu Gönder
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
