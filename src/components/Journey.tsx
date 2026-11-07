import React from 'react';

export const Journey: React.FC = () => {
  return (
    <section className="hairline-b px-5 sm:px-6 md:px-10 py-16 sm:py-20" data-purpose="chronology" id="journey">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 sm:mb-12">
        <div className="flex items-baseline gap-3 sm:gap-6">
          <span className="serif-display text-4xl sm:text-6xl text-[#141414]/30 italic">05</span>
          <h2 className="serif-display text-3xl sm:text-5xl font-normal tracking-tight text-[#141414]">
            Chronology
          </h2>
          <span className="font-mono-tag text-xs uppercase tracking-widest text-[#141414]/50 hidden sm:inline ml-2">
            / Milestones
          </span>
        </div>
        <div className="font-mono-tag text-[11px] sm:text-xs text-[#141414]/60 uppercase tracking-wider">
          TIMELINE RECORD
        </div>
      </div>

      {/* Hairline Table Format */}
      <div className="hairline-all bg-[#F3EFE7] overflow-hidden">
        <div className="hidden sm:grid grid-cols-12 px-6 py-3 bg-[#141414]/[0.03] hairline-b font-mono-tag text-xs uppercase tracking-wider text-[#141414]/50">
          <div className="col-span-2">Epoch</div>
          <div className="col-span-6">Engagement &amp; Focus</div>
          <div className="col-span-4 text-right">Institution / Venue</div>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-12 p-4 sm:px-6 sm:py-5 hairline-b sm:items-center font-mono-tag text-xs hover:bg-[#141414]/[0.015] gap-1.5 sm:gap-4">
          <div className="sm:col-span-2 text-[#9B1C31] font-medium text-xs">2026 — Present</div>
          <div className="sm:col-span-6 font-sans text-sm font-medium text-[#141414]">
            B.Tech in Computer Science &amp; Engineering (Artificial Intelligence &amp; Machine Learning)
            <div className="sm:hidden text-xs text-[#141414]/50 font-mono-tag mt-1">
              NIAT with Joy University, Tamil Nadu
            </div>
          </div>
          <div className="hidden sm:block sm:col-span-4 text-right text-[#141414]/60">
            NIAT with Joy University, Tamil Nadu
          </div>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-12 p-4 sm:px-6 sm:py-5 hairline-b sm:items-center font-mono-tag text-xs hover:bg-[#141414]/[0.015] gap-1.5 sm:gap-4">
          <div className="sm:col-span-2 text-[#141414]/70 text-xs">2026</div>
          <div className="sm:col-span-6 font-sans text-sm font-medium text-[#141414]">
            Intensive Engineering Bootcamp 2026 — Advanced Product Incubation Track
            <div className="sm:hidden text-xs text-[#141414]/50 font-mono-tag mt-1">
              NIAT Advanced Tech Labs
            </div>
          </div>
          <div className="hidden sm:block sm:col-span-4 text-right text-[#141414]/60">
            NIAT Advanced Tech Labs
          </div>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-12 p-4 sm:px-6 sm:py-5 sm:items-center font-mono-tag text-xs hover:bg-[#141414]/[0.015] gap-1.5 sm:gap-4">
          <div className="sm:col-span-2 text-[#141414]/70 text-xs">2026</div>
          <div className="sm:col-span-6 font-sans text-sm font-medium text-[#141414]">
            Campus Innovation Hackathon — CareerPilot AI Conceptualizer
            <div className="sm:hidden text-xs text-[#141414]/50 font-mono-tag mt-1">
              Joy University Innovation Hub
            </div>
          </div>
          <div className="hidden sm:block sm:col-span-4 text-right text-[#141414]/60">
            Joy University Innovation Hub
          </div>
        </div>
      </div>
    </section>
  );
};
