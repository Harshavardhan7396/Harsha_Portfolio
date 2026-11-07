import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section className="hairline-b px-5 sm:px-6 md:px-10 py-16 sm:py-20 w-full max-w-full overflow-hidden" data-purpose="technical-stack" id="toolkit">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-baseline gap-3 sm:gap-6">
          <span className="serif-display text-4xl sm:text-6xl text-[#141414]/30 italic">04</span>
          <h2 className="serif-display text-3xl sm:text-5xl font-normal tracking-tight text-[#141414]">
            Toolkit &amp; Capabilities
          </h2>
          <span className="font-mono-tag text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#141414]/50 ml-1 sm:ml-2">
            / Applied Technologies
          </span>
        </div>
        <div className="font-mono-tag text-[11px] sm:text-xs text-[#141414]/60 uppercase">
          EVALUATED &amp; DEPLOYED
        </div>
      </div>

      {/* Large Typography Slash List */}
      <div className="py-6 sm:py-8 hairline-t hairline-b">
        <p className="serif-display text-2xl sm:text-4xl lg:text-5xl leading-[1.3] text-[#141414]/90 font-normal break-words">
          Python <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          HTML5 <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          CSS3 &amp; Tailwind <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          Supabase Backend <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          Row Level Security (RLS) <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          GitHub Versioning <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          Claude Prompt Workflows <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          Google AI Studio <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          Gemini 2.0 API <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          Antigravity Orchestration <span className="text-[#9B1C31]/50 font-light">/</span>{' '}
          Vercel Deployment
        </p>
      </div>

      {/* Micro Category Groupings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div>
          <div className="font-mono-tag text-xs uppercase text-[#9B1C31] font-medium mb-3">
            [ CODE &amp; RUNTIMES ]
          </div>
          <p className="text-xs font-mono-tag text-[#141414]/80 leading-relaxed">
            Python 3.x fundamentals, Semantic HTML5, CSS3, Visual Studio Code, Git branching workflows, GitHub collaboration, Vercel Edge networks.
          </p>
        </div>

        <div>
          <div className="font-mono-tag text-xs uppercase text-[#9B1C31] font-medium mb-3">
            [ BACKEND &amp; DATA SECURITY ]
          </div>
          <p className="text-xs font-mono-tag text-[#141414]/80 leading-relaxed">
            PostgreSQL on Supabase, Row Level Security authorization matrices, authentication sessions, REST API design, JSON relational mapping.
          </p>
        </div>

        <div>
          <div className="font-mono-tag text-xs uppercase text-[#9B1C31] font-medium mb-3">
            [ AI ENGINES &amp; PROMPT OPS ]
          </div>
          <p className="text-xs font-mono-tag text-[#141414]/80 leading-relaxed">
            Claude 3.7 Sonnet, ChatGPT, Google AI Studio workbench, Gemini API integrations, Antigravity pipelines, multimodal vision ingestion.
          </p>
        </div>
      </div>
    </section>
  );
};
