import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="hairline-b px-5 sm:px-6 md:px-10 py-16 sm:py-20 w-full max-w-full overflow-hidden" data-purpose="profile-and-philosophy" id="about">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-baseline gap-3 sm:gap-6">
          <span className="serif-display text-4xl sm:text-6xl text-[#141414]/30 italic">03</span>
          <h2 className="serif-display text-3xl sm:text-5xl font-normal tracking-tight text-[#141414]">
            Profile &amp; Philosophy
          </h2>
          <span className="font-mono-tag text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#141414]/50 ml-1 sm:ml-2">
            / The "Vibe Coding" Reality
          </span>
        </div>
        <div className="font-mono-tag text-[11px] sm:text-xs text-[#141414]/60 uppercase">
          NIAT x JOY UNIVERSITY
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start min-w-0">
        {/* Left 7 Columns: Editorial Narrative */}
        <div className="lg:col-span-7 pr-0 lg:pr-6">
          <div className="space-y-6">
            <p className="serif-display text-3xl sm:text-4xl leading-[1.25] text-[#141414] font-normal">
              I am a first-year Computer Science student at NIAT who refuses to wait four years before releasing software into production.
            </p>

            <p className="text-base text-[#141414]/80 leading-relaxed font-light">
              My methodology pairs rapid AI generation (<span className="font-normal italic">Claude 3.7, Google AI Studio, Gemini 2.0</span>) with disciplined hands-on code inspection. While AI tools synthesize architectures and initial scaffolding in minutes, true software quality happens in the manual verification: inspecting database schema design, hardening Supabase Row Level Security rules, diagnosing edge latency, and polishing interactions.
            </p>

            <blockquote className="hairline-l border-[#9B1C31] pl-6 py-2 my-6">
              <p className="serif-display text-2xl italic text-[#141414]/90">
                "Vibe coding is not reckless pasting; it is steering intelligent models with high domain taste, fast feedback loops, and software engineering rigor."
              </p>
            </blockquote>

            <p className="text-sm text-[#141414]/75 leading-relaxed font-light">
              Currently resident in Tamil Nadu, India, undertaking rigorous foundational coursework while building real-world digital products daily in public view.
            </p>
          </div>

          {/* Structured "Currently" Metadata Box */}
          <div className="mt-10 hairline-all p-6 bg-[#F3EFE7]">
            <div className="font-mono-tag text-xs uppercase tracking-widest text-[#9B1C31] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#9B1C31] inline-block"></span>
              Current Status Log [Realtime]
            </div>

            <dl className="space-y-3 font-mono-tag text-xs divide-y divide-[#141414]/10">
              <div className="pt-2 flex flex-col sm:flex-row justify-between gap-1">
                <dt className="text-[#141414]/50 uppercase">Enrolled Degree</dt>
                <dd className="text-[#141414] font-medium">B.Tech Computer Science (AI &amp; ML) — Class of '30</dd>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row justify-between gap-1">
                <dt className="text-[#141414]/50 uppercase">Active Focus</dt>
                <dd className="text-[#141414] font-medium">Data Structures in Python, SQL RLS Patterns &amp; LLM Tool Calling</dd>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row justify-between gap-1">
                <dt className="text-[#141414]/50 uppercase">Current Build</dt>
                <dd className="text-[#141414] font-medium">Multimodal Campus Transit Engine (Vesper.ai)</dd>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row justify-between gap-1">
                <dt className="text-[#141414]/50 uppercase">Seeking</dt>
                <dd className="text-[#9B1C31] font-medium">AI/ML Engineering or Full-Stack Internship (Summer/Fall 2026)</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right 5 Columns: Secondary Portrait using /images/night.jpg */}
        <div className="lg:col-span-5">
          <div className="hairline-all bg-[#F3EFE7] p-3 max-w-[380px] mx-auto lg:ml-auto">
            <div className="overflow-hidden aspect-[9/14] bg-stone-200">
              <img
                alt="Boddu Harshavardhan after hours portrait under streetlamp in pink shirt"
                width={600}
                height={933}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                style={{ objectPosition: '50% 18%' }}
                src="/images/night.jpg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('WhatsApp_Image')) {
                    target.src = '/public/assets/aistudio/WhatsApp_Image_2026-11-07_at_4.17.57_PM_2c9dfe76.jpeg';
                  }
                }}
              />
            </div>
            <div className="pt-3 flex justify-between items-baseline font-mono-tag text-[11px] uppercase tracking-wider text-[#141414]/75">
              <span><span className="text-[#9B1C31] font-semibold">FIG. 02</span> — After Hours.</span>
              <span className="text-[#141414]/40">Campus Promenade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
