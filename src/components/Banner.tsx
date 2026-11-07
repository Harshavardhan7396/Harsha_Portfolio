import React from 'react';

export const Banner: React.FC = () => {
  return (
    <section className="hairline-b bg-[#F3EFE7] px-5 sm:px-6 md:px-10 py-8 sm:py-12 w-full max-w-full overflow-hidden" data-purpose="cinematic-photo-interlude">
      <div className="hairline-all bg-[#F3EFE7] p-2 sm:p-3 w-full">
        <div className="relative w-full h-[260px] sm:h-[400px] md:h-[520px] overflow-hidden bg-[#141414]/10">
          <img
            alt="Boddu Harshavardhan sitting with peers in bootcamp classroom at NIAT"
            width={1440}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-[center_35%] filter contrast-[1.03]"
            src="/images/classroom.jpg"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('WhatsApp_Image')) {
                target.src = '/public/assets/aistudio/WhatsApp_Image_2026-11-07_at_4.11.04_PM_9d9e8fd9.jpeg';
              }
            }}
          />
          <div className="absolute inset-0 bg-[#141414]/10 mix-blend-multiply"></div>

          {/* Floating Editorial Pill */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#F3EFE7]/95 backdrop-blur-sm border border-[#141414]/20 px-2 sm:px-3 py-0.5 sm:py-1 font-mono-tag text-[9px] sm:text-[11px] tracking-wider uppercase text-[#141414]">
            Plate 01 // Immersive Session
          </div>
        </div>

        {/* Photographic Citation Label */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-1 sm:px-2 pt-2.5 sm:pt-3 font-mono-tag text-[10px] sm:text-xs uppercase tracking-wider text-[#141414]/75 gap-1 break-words">
          <div className="break-words">
            <span className="text-[#9B1C31] font-medium">FIG. 01</span> — BOOTCAMP 2026, LEARNING IN PUBLIC / NIAT TECH LAB
          </div>
          <div className="text-[#141414]/50 text-[10px] sm:text-[11px] whitespace-nowrap">
            13°00'N 80°15'E • TAMIL NADU, INDIA
          </div>
        </div>
      </div>
    </section>
  );
};
