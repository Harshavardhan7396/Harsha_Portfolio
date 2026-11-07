import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { projects, isLoading } = useProjects();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = currentIndex !== -1 ? projects[currentIndex] : null;

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex !== -1 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} — Boddu Harshavardhan Editorial Archive`;
    } else if (!isLoading) {
      document.title = 'Project Not Found — Boddu Harshavardhan';
    }
  }, [project, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F3EFE7] flex items-center justify-center text-[#141414] font-mono-tag">
        <div className="animate-spin w-8 h-8 border-2 border-[#9B1C31] border-t-transparent rounded-full mb-3" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F3EFE7] flex flex-col justify-between text-[#141414]">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-40 text-center">
          <h1 className="serif-display text-5xl font-normal text-[#141414] mb-4">Project Not Found</h1>
          <p className="text-[#141414]/70 mb-8 font-light">
            The requested project slug does not match any current portfolio works.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#9B1C31] text-[#F3EFE7] font-mono-tag text-xs uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const isLive = project.status.toUpperCase().includes('LIVE');

  return (
    <div className="bg-[#F3EFE7] min-h-screen text-[#141414]">
      <div className="max-w-[1440px] mx-auto bg-[#F3EFE7] relative hairline-l hairline-r shadow-2xl">
        <Navbar />

        <main id="main-content" className="px-5 sm:px-6 md:px-12 py-12 sm:py-16 min-w-0 max-w-full overflow-hidden">
          {/* Back button */}
          <div className="mb-8 sm:mb-10">
            <Link
              to="/#work"
              className="min-h-[44px] inline-flex items-center gap-2 font-mono-tag text-xs text-[#141414]/60 hover:text-[#9B1C31] uppercase tracking-wider transition-colors"
            >
              <span>← [01] Return to Selected Work</span>
            </Link>
          </div>

          {/* Header Row */}
          <div className="hairline-b pb-8 sm:pb-12 mb-8 sm:mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-tag text-[11px] sm:text-xs tracking-widest uppercase mb-4 text-[#141414]/60">
                <span
                  className={`px-2 py-0.5 border ${
                    isLive
                      ? 'border-[#9B1C31]/40 text-[#9B1C31]'
                      : 'border-[#141414]/30 text-[#141414]/70'
                  }`}
                >
                  {project.status}
                </span>
                <span>/</span>
                <span>Role: {project.role || 'Lead Engineer'}</span>
                <span>/</span>
                <span>Production Spec</span>
              </div>

              <h1 className="serif-display text-4xl sm:text-7xl lg:text-[84px] leading-[0.95] font-normal tracking-tight text-[#141414] break-words">
                {project.title}
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-xl text-[#141414]/80 max-w-2xl font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Actions: Stacked and full width on mobile with >= 44px tap height */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 font-mono-tag text-xs w-full sm:w-auto shrink-0">
              {project.live_url && project.live_url.trim() !== '' ? (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] bg-[#9B1C31] text-[#F3EFE7] px-6 sm:px-8 py-3.5 tracking-widest uppercase hover:bg-[#141414] transition-colors inline-flex items-center justify-center gap-2 text-center"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}

              {project.repo_url && project.repo_url.trim() !== '' ? (
                <a
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] border border-[#141414] px-6 sm:px-8 py-3.5 tracking-widest uppercase hover:bg-[#141414] hover:text-[#F3EFE7] transition-colors inline-flex items-center justify-center gap-2 text-[#141414] text-center"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}
            </div>
          </div>

          {/* Screenshot / Visual Showcase Frame */}
          <div className="hairline-all bg-[#F3EFE7] p-3 mb-16">
            <div className="relative w-full aspect-[16/9] max-h-[520px] overflow-hidden bg-[#141414] text-[#F3EFE7] flex flex-col justify-between p-8 sm:p-12">
              <div className="flex justify-between items-center font-mono-tag text-xs text-[#F3EFE7]/60 uppercase">
                <span>Visual Blueprint // Archive Spec</span>
                <span className="text-[#9B1C31] font-semibold">{project.status}</span>
              </div>

              <div className="my-auto text-center py-6">
                <span className="serif-display text-4xl sm:text-6xl text-[#F3EFE7] block mb-3 font-normal">
                  {project.title}
                </span>
                <p className="font-mono-tag text-xs sm:text-sm text-[#F3EFE7]/60 max-w-md mx-auto">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-between items-center font-mono-tag text-[11px] text-[#F3EFE7]/50 pt-4 border-t border-white/10 uppercase">
                <span>Slug: /projects/{project.slug}</span>
                <span>{project.tech_stack.join(' • ')}</span>
              </div>
            </div>

            <div className="flex justify-between items-center px-2 pt-3 font-mono-tag text-xs uppercase tracking-wider text-[#141414]/75">
              <span>PLATE 02 — ARCHITECTURAL SYSTEM SCHEMATIC</span>
              <span className="text-[#141414]/50 text-[11px]">BODDU HARSHAVARDHAN LABS</span>
            </div>
          </div>

          {/* Technical Details & Full Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="serif-display text-3xl sm:text-4xl font-normal text-[#141414]">
                Technical Blueprint &amp; System Overview
              </h2>
              <p className="text-base text-[#141414]/80 leading-relaxed font-light">
                {project.long_description || project.description}
              </p>

              {project.key_features && project.key_features.length > 0 && (
                <div className="pt-6">
                  <h3 className="font-mono-tag text-xs uppercase tracking-widest text-[#9B1C31] mb-4">
                    Key Engineered Capabilities
                  </h3>
                  <div className="space-y-3 font-mono-tag text-xs">
                    {project.key_features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 hairline-all bg-white/40 flex items-start gap-3 text-[#141414]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#9B1C31] shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-[#141414]/90">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4">
              <div className="hairline-all p-6 bg-white/30 space-y-6">
                <div>
                  <h3 className="font-mono-tag text-xs uppercase tracking-widest text-[#141414]/50 mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 font-mono-tag text-xs">
                    {project.tech_stack.map((t, idx) => (
                      <span key={idx} className="bg-[#141414]/5 px-2.5 py-1 text-[#141414]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hairline-t pt-4">
                  <h3 className="font-mono-tag text-xs uppercase tracking-widest text-[#141414]/50 mb-2">
                    Developer &amp; Lead
                  </h3>
                  <p className="font-sans text-sm font-medium text-[#141414]">
                    Boddu Harshavardhan
                  </p>
                  <p className="font-mono-tag text-xs text-[#141414]/60 mt-1">
                    First-year B.Tech CSE (AI/ML)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next / Previous Project Navigation */}
          <div className="hairline-t pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono-tag text-xs">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="hairline-all p-5 hover:bg-[#141414]/[0.02] transition-colors flex flex-col justify-between"
              >
                <span className="text-[#141414]/50 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ArrowLeft className="w-3.5 h-3.5 text-[#9B1C31]" />
                  <span>Previous Project</span>
                </span>
                <span className="serif-display text-2xl text-[#141414] hover:text-[#9B1C31] transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="hairline-all p-5 hover:bg-[#141414]/[0.02] transition-colors flex flex-col justify-between text-right sm:items-end"
              >
                <span className="text-[#141414]/50 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span>Next Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9B1C31]" />
                </span>
                <span className="serif-display text-2xl text-[#141414] hover:text-[#9B1C31] transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
