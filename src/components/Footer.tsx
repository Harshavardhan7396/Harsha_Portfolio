import React from 'react';
import { PERSONAL_INFO } from '../data/fallbackData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Ticker Marquee */}
      <div
        className="bg-[#141414] text-[#F3EFE7] py-3.5 overflow-hidden whitespace-nowrap hairline-b select-none"
        data-purpose="marquee-ticker"
      >
        <div className="animate-marquee font-mono-tag text-xs tracking-widest uppercase">
          <span className="mx-6">
            OPEN TO INTERNSHIPS <span className="text-[#9B1C31] font-bold">✦</span> SUMMER &amp; FALL 2026
          </span>
          <span className="mx-6">
            VIBE CODING SPECIALIST <span className="text-[#9B1C31] font-bold">✦</span> PROTOTYPE TO PRODUCTION
          </span>
          <span className="mx-6">
            B.TECH CSE (AI/ML) <span className="text-[#9B1C31] font-bold">✦</span> NIAT x JOY UNIVERSITY
          </span>
          <span className="mx-6">
            SUPABASE + CLAUDE + GEMINI <span className="text-[#9B1C31] font-bold">✦</span> BENGALURU &amp; CHENNAI COMMUTE READY
          </span>
          <span className="mx-6">
            OPEN TO INTERNSHIPS <span className="text-[#9B1C31] font-bold">✦</span> SUMMER &amp; FALL 2026
          </span>
          <span className="mx-6">
            VIBE CODING SPECIALIST <span className="text-[#9B1C31] font-bold">✦</span> PROTOTYPE TO PRODUCTION
          </span>
          <span className="mx-6">
            B.TECH CSE (AI/ML) <span className="text-[#9B1C31] font-bold">✦</span> NIAT x JOY UNIVERSITY
          </span>
          <span className="mx-6">
            SUPABASE + CLAUDE + GEMINI <span className="text-[#9B1C31] font-bold">✦</span> BENGALURU &amp; CHENNAI COMMUTE READY
          </span>
        </div>
      </div>

      {/* Colophon Footer */}
      <footer className="px-5 sm:px-6 md:px-10 py-10 sm:py-12 bg-[#F3EFE7] w-full max-w-full" data-purpose="colophon">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-mono-tag text-xs text-[#141414]/70 gap-6">
          <div>
            <div className="font-medium text-[#141414] uppercase tracking-wider mb-1">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-[#141414]/50 max-w-sm leading-relaxed">
              AI-Assisted Product Developer &amp; Computer Science Scholar. Based in {PERSONAL_INFO.location}.
            </div>
          </div>

          <div className="text-left md:text-center text-[11px] text-[#141414]/50">
            <div>EDITORIAL DESIGN SPECIFICATION // ISSUE NO. 01</div>
            <div className="mt-1">
              TYPESET IN <span className="text-[#141414] font-medium">INSTRUMENT SERIF</span> &amp;{' '}
              <span className="text-[#141414] font-medium">JETBRAINS MONO</span>
            </div>
          </div>

          <div className="text-left md:text-right">
            <div className="uppercase tracking-widest text-[#141414] font-medium text-[11px] sm:text-xs">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </div>
            <div className="text-[11px] text-[#141414]/50 mt-1">
              <button
                type="button"
                onClick={scrollToTop}
                className="min-h-[44px] inline-flex items-center hover:text-[#9B1C31] transition-colors uppercase tracking-wider cursor-pointer"
              >
                BACK TO APEX [↑]
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
