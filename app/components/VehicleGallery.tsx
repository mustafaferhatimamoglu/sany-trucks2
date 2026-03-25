"use client";

import { useState, useEffect } from "react";

type ColorOption = {
  name: string;
  hex: string;
  views: { [key: string]: string };
};

type TrailerOption = {
  name: string;
  image: string;
};

export default function VehicleGallery({ 
  images, 
  capacity, 
  name,
  colors,
  trailers
}: { 
  images: string[], 
  capacity: string, 
  name: string,
  colors?: ColorOption[],
  trailers?: TrailerOption[]
}) {
  const [viewMode, setViewMode] = useState<"gallery" | "customization" | "trailers">("gallery");
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeAngle, setActiveAngle] = useState("Ön");
  const [activeTrailerIndex, setActiveTrailerIndex] = useState(0);

  // If active angle is not available in new color, reset to the first available angle
  useEffect(() => {
    if (colors && colors.length > 0) {
      const availableAngles = Object.keys(colors[activeColorIndex].views);
      if (!availableAngles.includes(activeAngle)) {
        setActiveAngle(availableAngles[0]);
      }
    }
  }, [activeColorIndex, colors]);

  // Determine which image to show based on mode
  let displayImage = images[0];
  if (images && images.length > 0) {
    displayImage = images[activeGalleryIndex];
  }
  
  if (viewMode === "customization" && colors && colors.length > 0) {
    const colorViews = colors[activeColorIndex].views;
    displayImage = colorViews[activeAngle] || Object.values(colorViews)[0];
  } else if (viewMode === "trailers" && trailers && trailers.length > 0) {
    displayImage = trailers[activeTrailerIndex].image;
  }

  return (
    <div className="lg:sticky lg:top-24 flex flex-col gap-4">
      {/* View Mode Tabs */}
      {(colors || trailers) && (
        <div className="flex bg-[#111112] border border-[#2a2a2a] p-1 rounded-sm">
          <button 
            onClick={() => setViewMode("gallery")}
            className={`flex-1 py-2 text-xs font-black tracking-widest uppercase transition-all ${viewMode === "gallery" ? "bg-sany-red text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
          >
            Galeri
          </button>
          {colors && colors.length > 0 && (
            <button 
              onClick={() => setViewMode("customization")}
              className={`flex-1 py-2 text-xs font-black tracking-widest uppercase transition-all ${viewMode === "customization" ? "bg-sany-red text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
            >
              Özelleştirme
            </button>
          )}
          {trailers && trailers.length > 0 && (
            <button 
              onClick={() => setViewMode("trailers")}
              className={`flex-1 py-2 text-xs font-black tracking-widest uppercase transition-all ${viewMode === "trailers" ? "bg-sany-red text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
            >
              Kasa & Dorse Opsiyonları
            </button>
          )}
        </div>
      )}

      {/* Main Image */}
      <div className="relative bg-[#0A0A0A] border border-[#2a2a2a] overflow-hidden group h-[420px] flex items-center justify-center shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111112] to-transparent opacity-50"></div>
        <img
          key={displayImage}
          src={displayImage}
          alt={`${name} Görünüm`}
          className="w-full h-full object-contain p-8 drop-shadow-2xl animate-fade-in relative z-10"
        />
        <div className="absolute top-4 right-4 bg-sany-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 z-20">
          {capacity}
        </div>
      </div>

      {/* Controls based on view mode */}
      <div className="min-h-[120px]">
        {viewMode === "gallery" && images.length > 1 && (
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 overflow-y-auto max-h-[220px] pr-1 pb-2 scrollbar-thin scrollbar-thumb-sany-red scrollbar-track-[#111112]">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveGalleryIndex(i)}
                className={`relative border overflow-hidden cursor-pointer transition-all h-20 bg-[#0A0A0A] flex items-center justify-center ${
                  i === activeGalleryIndex ? "border-sany-red shadow-[0_0_10px_rgba(234,0,1,0.2)]" : "border-[#2a2a2a] hover:border-[#555]"
                }`}
              >
                <img
                  src={img}
                  alt={`${name} galeri ${i + 1}`}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    i === activeGalleryIndex ? "opacity-100" : "opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        {viewMode === "customization" && colors && colors.length > 0 && (
          <div className="flex flex-col gap-5 p-6 border border-[#2a2a2a] bg-[#111112]">
            <div className="flex gap-4 items-center">
              <span className="text-gray-500 text-xs font-bold tracking-widest uppercase w-12">Renk:</span>
              <div className="flex gap-3">
                {colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColorIndex(i)}
                    className={`w-10 h-10 rounded-full border-[3px] transition-all ${
                      i === activeColorIndex ? "border-sany-red scale-110 shadow-[0_0_15px_rgba(234,0,1,0.4)]" : "border-gray-600/50 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
              <span className="text-white text-xs font-bold uppercase tracking-widest ml-2">{colors[activeColorIndex].name}</span>
            </div>

            <div className="h-px w-full bg-[#2a2a2a]"></div>

            <div className="flex gap-4 items-center">
              <span className="text-gray-500 text-xs font-bold tracking-widest uppercase w-12">Açı:</span>
              <div className="flex gap-2">
                {Object.keys(colors[activeColorIndex].views).map((angle) => (
                  <button
                    key={angle}
                    onClick={() => setActiveAngle(angle)}
                    className={`px-5 py-2 text-xs font-black tracking-widest uppercase transition-all border ${
                      angle === activeAngle ? "bg-sany-red text-white border-sany-red shadow-[0_0_10px_rgba(234,0,1,0.2)]" : "border-[#2a2a2a] text-gray-500 hover:text-white hover:border-[#555] bg-[#0A0A0A]"
                    }`}
                  >
                    {angle}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {viewMode === "trailers" && trailers && trailers.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              {trailers.map((trailer, i) => (
                <button
                  key={trailer.name}
                  onClick={() => setActiveTrailerIndex(i)}
                  className={`p-4 text-xs font-black tracking-widest uppercase transition-all border flex flex-col items-center gap-3 ${
                    i === activeTrailerIndex ? "bg-sany-red/10 border-sany-red text-white shadow-[0_0_10px_rgba(234,0,1,0.2)]" : "border-[#2a2a2a] text-gray-500 bg-[#111112] hover:text-white hover:border-[#555]"
                  }`}
                >
                  <img src={trailer.image} alt={trailer.name} className="w-24 h-16 object-contain mb-1" />
                  {trailer.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
