import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { Project } from '../types';

export const Work: React.FC = () => {
  const { projects, isLoading } = useProjects();

  const getTechnicalBlueprint = (slug: string) => {
    switch (slug) {
      case 'wilddex':
        return {
          blueprint:
            'Fine-tuned prompt workflows with image categorization models to parse taxonomy, conservation status, and geographical habitats directly inside browser camera streams.',
          host: 'wild-dex-pearl.vercel.app',
          version: 'PROD v1.4',
        };
      case 'vesper-ai':
        return {
          blueprint:
            'Architected with Supabase Row Level Security (RLS) ensuring strict role separation between student travelers and university transit dispatchers. Integrated with route reasoning LLM prompts.',
          host: 'versai-ai.vercel.app',
          version: 'PILOT ENGINE',
        };
      case 'crimson-ai':
        return {
          blueprint:
            'Engineered Gemini prompt-chains for invoice item classification and logistics anomaly detection. Connects real-time shipment events with customer chatbot copilot.',
          host: 'crimson-iota.vercel.app',
          version: 'TRADE OPS v2',
        };
      case 'careerpilot-ai':
      default:
        return {
          blueprint:
            'Curriculum graph models combined with dynamic tutor prompts that calibrate difficulty based on repo commit frequency and problem solving speed.',
          host: 'STATUS: ARCHIVED RESEARCH / ALPHA SPEC',
          version: 'NIAT HACKATHON',
        };
    }
  };

  return (
    <section className="hairline-b px-5 sm:px-6 md:px-10 py-16 sm:py-20 w-full max-w-full" data-purpose="selected-projects" id="work">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-baseline gap-3 sm:gap-6">
          <span className="serif-display text-4xl sm:text-6xl text-[#141414]/30 italic">01</span>
          <h2 className="serif-display text-3xl sm:text-5xl font-normal tracking-tight text-[#141414]">
            Selected Work
          </h2>
          <span className="font-mono-tag text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#141414]/50 ml-1 sm:ml-2">
            / Product Inventions 2025–2026
          </span>
        </div>
        <div className="font-mono-tag text-[11px] sm:text-xs text-[#141414]/60 uppercase">
          [ 03 Shipped Deployments / 01 R&amp;D Spec ]
        </div>
      </div>

      {/* Hairline Project Index Table (Editorial Format) */}
      <div className="hairline-t">
        {isLoading ? (
          <div className="py-12 space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse hairline-b pb-8 space-y-3">
                <div className="h-6 w-1/4 bg-[#141414]/10 rounded" />
                <div className="h-4 w-3/4 bg-[#141414]/5 rounded" />
                <div className="h-4 w-1/2 bg-[#141414]/5 rounded" />
              </div>
            ))}
          </div>
        ) : (
          projects.map((project, index) => {
            const { blueprint, host, version } = getTechnicalBlueprint(project.slug);
            const isLive = project.status.toUpperCase().includes('LIVE');

            return (
              <article
                key={project.slug || index}
                data-cursor="view"
                className="group relative hairline-b py-6 sm:py-8 transition-colors duration-300 hover:bg-[#141414]/[0.02]"
                data-purpose="project-row"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start min-w-0">
                  {/* Column 1: Index */}
                  <div className="md:col-span-1 font-mono-tag text-xs sm:text-sm text-[#141414]/40 group-hover:text-[#9B1C31] transition-colors pt-1">
                    [0{index + 1}]
                  </div>

                  {/* Column 2: Title, Description, Tags */}
                  <div className="md:col-span-4 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                      <Link to={`/projects/${project.slug}`}>
                        <h3 className="serif-display text-2xl sm:text-4xl group-hover:text-[#9B1C31] transition-colors text-[#141414] break-words">
                          {project.title}
                        </h3>
                      </Link>
                      <span
                        className={`font-mono-tag text-[9px] sm:text-[10px] px-2 py-0.5 border uppercase tracking-wider shrink-0 ${
                          isLive
                            ? 'border-[#9B1C31]/40 text-[#9B1C31]'
                            : 'border-[#141414]/20 text-[#141414]/60'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#141414]/70 leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 font-mono-tag text-[10px] sm:text-[11px] text-[#141414]/60">
                      {project.tech_stack.map((tech, tIdx) => (
                        <span key={tIdx} className="bg-[#141414]/5 px-2 py-0.5 sm:py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Technical Blueprint */}
                  <div className="md:col-span-4 pl-0 md:pl-4 border-l-0 md:border-l border-[#141414]/10 min-w-0">
                    <div className="font-mono-tag text-[10px] sm:text-[11px] uppercase text-[#141414]/50 mb-1.5 sm:mb-2">
                      Technical Blueprint
                    </div>
                    <p className="text-xs text-[#141414]/80 leading-normal font-sans">
                      {blueprint}
                    </p>
                    <div className="mt-2.5 sm:mt-3 font-mono-tag text-[10px] text-[#141414]/50 break-all">
                      {host.startsWith('STATUS') ? host : `HOST: ${host}`}
                    </div>
                  </div>

                  {/* Column 4: Links & Actions */}
                  <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end h-full pt-1">
                    <div className="flex flex-wrap items-center gap-3 font-mono-tag text-xs">
                      {project.live_url && project.live_url.trim() !== '' ? (
                        <a
                          className="inline-flex items-center gap-1 text-[#9B1C31] font-medium hover:underline tracking-wider"
                          href={project.live_url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          LAUNCH LIVE ↗
                        </a>
                      ) : null}

                      {project.repo_url && project.repo_url.trim() !== '' ? (
                        <>
                          {Boolean(project.live_url && project.live_url.trim() !== '') && (
                            <span className="text-[#141414]/20">|</span>
                          )}
                          <a
                            className="text-[#141414]/60 hover:text-[#141414] transition-colors tracking-wider"
                            href={project.repo_url}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            SOURCE ↗
                          </a>
                        </>
                      ) : null}

                      {Boolean(
                        (project.live_url && project.live_url.trim() !== '') ||
                        (project.repo_url && project.repo_url.trim() !== '')
                      ) && <span className="text-[#141414]/20">|</span>}

                      <Link
                        className="text-[#141414]/60 hover:text-[#9B1C31] transition-colors tracking-wider font-medium"
                        to={`/projects/${project.slug}`}
                      >
                        DETAILS ↗
                      </Link>
                    </div>

                    <span className="font-mono-tag text-[10px] text-[#141414]/40 tracking-widest uppercase mt-4 md:mt-8">
                      {version}
                    </span>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
};
