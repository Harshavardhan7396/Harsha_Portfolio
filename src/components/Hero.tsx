import React from 'react';
import { PERSONAL_INFO } from '../data/fallbackData';

export const Hero: React.FC = () => {
  return (
    <section className="hairline-b px-5 sm:px-6 md:px-10 pt-12 sm:pt-16 pb-16 sm:pb-20 relative overflow-hidden w-full max-w-full" data-purpose="hero-editorial">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch min-w-0">
        {/* Left 7 Columns: Editorial Headline and Introduction */}
        <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-4 min-w-0">
          <div>
            {/* Monospace Metadata Header - wraps smoothly on 360px without overflow */}
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-tag text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-[#141414]/70 mb-6 sm:mb-8 border border-[#141414]/20 px-2.5 sm:px-3 py-1.5 bg-[#F3EFE7] max-w-full">
              <span>B.Tech CSE (AI/ML)</span>
              <span className="text-[#9B1C31]">/</span>
              <span>NIAT x Joy University</span>
              <span className="text-[#9B1C31]">/</span>
              <span className="text-[#9B1C31] font-semibold">Vibe Coding</span>
            </div>

            {/* Giant Serif Statement - balanced and breakable for 360px, 390px, 430px */}
            <h1 className="serif-display text-4xl sm:text-6xl lg:text-[92px] leading-[1.0] sm:leading-[0.93] font-normal tracking-tight text-[#141414] break-words">
              I turn product ideas into <span className="italic text-[#9B1C31] font-normal">working</span> AI apps.
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#141414]/80 max-w-xl font-light leading-relaxed">
              First-year engineer leveraging Claude, Gemini, Google AI Studio, and Supabase to conceive, assemble, and deploy full-stack systems at prototype velocity.
            </p>
          </div>

          {/* Actions & Meta Strip: stacked & full-width on mobile with min 44px tap target */}
          <div className="pt-8 sm:pt-12">
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center bg-[#9B1C31] hover:bg-[#141414] text-[#F3EFE7] px-6 sm:px-8 py-3.5 text-xs font-mono-tag tracking-widest uppercase transition-colors duration-200 text-center"
                href="#work"
              >
                Explore Work [01]
              </a>

              <a
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center border border-[#141414] px-6 sm:px-8 py-3.5 text-xs font-mono-tag tracking-widest uppercase hover:bg-[#141414] hover:text-[#F3EFE7] transition-colors duration-200 text-center"
                href="#contact"
              >
                Initialize Transmission
              </a>

              <a
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-mono-tag tracking-wider text-[#141414]/70 hover:text-[#9B1C31] border sm:border-0 border-[#141414]/15 transition-colors text-center"
                href={PERSONAL_INFO.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>GH/Harshavardhan7396</span>
                <span className="text-xs">↗</span>
              </a>

              <a
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-mono-tag tracking-wider text-[#141414]/70 hover:text-[#9B1C31] border sm:border-0 border-[#141414]/15 transition-colors text-center"
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
                <span className="text-xs">↗</span>
              </a>
            </div>

            {/* Monospace status bar - wraps on mobile onto two lines */}
            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 hairline-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono-tag uppercase tracking-wider sm:tracking-widest text-[#141414]/60">
              <span className="break-words">Status: Active for Summer/Fall 2026 Internships</span>
              <span className="break-words">Stack: Python • Supabase • Claude • Gemini</span>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Hero Portrait & Rotating Badge */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end min-w-0 mt-6 lg:mt-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[430px] hairline-all bg-[#F3EFE7] p-2">
            {/* Image Frame */}
            <div className="overflow-hidden relative bg-stone-200 aspect-[3/4] w-full">
              <img
                alt="Boddu Harshavardhan portrait with Bootcamp 2026 lanyard at NIAT"
                width={600}
                height={800}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                style={{ objectPosition: '50% 20%' }}
                src="/images/portrait.jpg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('WhatsApp_Image')) {
                    target.src = '/public/assets/aistudio/WhatsApp_Image_2026-11-07_at_4.11.04_PM__2__610c17d0.jpeg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/30 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Micro Caption below image - wraps on mobile */}
            <div className="flex flex-wrap justify-between items-center px-1 pt-2.5 pb-0.5 font-mono-tag text-[9px] sm:text-[10px] uppercase text-[#141414]/70 gap-1">
              <span className="break-words">ID: HARSHAVARDHAN // NB26100018</span>
              <span className="text-[#9B1C31] font-medium whitespace-nowrap">NIAT BOOTCAMP '26</span>
            </div>

            {/* Circular Rotating Badge Stamp - positioned safely on tablet/desktop */}
            <div className="hidden sm:block absolute -top-7 -left-7 w-24 sm:w-28 h-24 sm:h-28 pointer-events-none select-none z-10">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="w-full h-full animate-spin-slow origin-center" viewBox="0 0 100 100">
                  <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="circlePath"></path>
                  <text fill="#141414" fontFamily="'JetBrains Mono', monospace" fontSize="8.8" fontWeight="600" letterSpacing="2.2px">
                    <textPath xlinkHref="#circlePath">
                      OPEN TO INTERNSHIPS • 2026 •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-6 sm:w-7 h-6 sm:h-7 bg-[#9B1C31] rounded-full flex items-center justify-center text-[#F3EFE7] text-xs shadow-md">
                  ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
