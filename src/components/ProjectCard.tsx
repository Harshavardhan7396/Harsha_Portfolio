import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getStatusStyle = (status: string) => {
    switch (status.toUpperCase()) {
      case 'LIVE':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'LIVE BETA':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'CONCEPT':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  // Aesthetic project graphic background generator
  const getProjectGraphic = (slug: string) => {
    switch (slug) {
      case 'wilddex':
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 flex flex-col justify-between p-6 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400/80">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>AI Vision Classifier</span>
              </span>
              <span>v1.2.0</span>
            </div>
            <div className="my-auto text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mb-3 shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-zinc-200">Field Specimen Scanner</p>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Taxonomy Dex · Naturalist Network</p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-400 border-t border-white/[0.06] pt-3 font-mono">
              <span>99.4% Species Match</span>
              <span>Geospatial Logs</span>
            </div>
          </div>
        );
      case 'vesper-ai':
        return (
          <div className="w-full h-full bg-gradient-to-br from-cyan-950/40 via-zinc-900 to-zinc-950 flex flex-col justify-between p-6 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400/80">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>TN State & Transit Core</span>
              </span>
              <span>Supabase RLS</span>
            </div>
            <div className="my-auto text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 mb-3 shadow-inner">
                <Layers className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-zinc-200">Multi-Modal Student Transit</p>
              <p className="text-xs text-zinc-400 mt-1 font-mono">University · Regional · Railways</p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-400 border-t border-white/[0.06] pt-3 font-mono">
              <span>Predictive Delay Planner</span>
              <span>Admin & Student Auth</span>
            </div>
          </div>
        );
      case 'crimson-ai':
        return (
          <div className="w-full h-full bg-gradient-to-br from-rose-950/40 via-zinc-900 to-zinc-950 flex flex-col justify-between p-6 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-rose-400/80">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>Aether Crimson Logistics</span>
              </span>
              <span>Gemini Vision</span>
            </div>
            <div className="my-auto text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 mb-3 shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-zinc-200">Import & Export AI Portal</p>
              <p className="text-xs text-zinc-400 mt-1 font-mono">3D Telemetry · Tariff Clearance</p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-400 border-t border-white/[0.06] pt-3 font-mono">
              <span>Automated Bill of Lading</span>
              <span>Supplier Rewards</span>
            </div>
          </div>
        );
      case 'careerpilot-ai':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-950/40 via-zinc-900 to-zinc-950 flex flex-col justify-between p-6 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-amber-400/80">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Hackathon Concept</span>
              </span>
              <span>Curriculum AI</span>
            </div>
            <div className="my-auto text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 mb-3 shadow-inner">
                <Layers className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-zinc-200">Personalized Career Engine</p>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Skill Matrix · AI Tutoring</p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-400 border-t border-white/[0.06] pt-3 font-mono">
              <span>Adaptive Pathways</span>
              <span>Student Milestone Sync</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article
      data-cursor="view"
      className="group flex flex-col rounded-2xl border border-white/[0.1] bg-[#11141c] hover:border-white/[0.2] transition-all duration-300 overflow-hidden shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Top Media / Visual Frame */}
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View details for ${project.title}`}
        className="block relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] group/img focus:outline-none"
      >
        {getProjectGraphic(project.slug)}

        {/* Hover overlay hint */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <span className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Header row: Index & Status badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono text-zinc-400">
              0{index + 1}
            </span>
            <span
              className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${getStatusStyle(
                project.status
              )}`}
            >
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors font-display">
            <Link to={`/projects/${project.slug}`} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            {project.tech_stack.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
          >
            <span>Project details</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-2">
            {project.repo_url && (
              <a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.1] transition-colors focus:outline-none focus:ring-1 focus:ring-rose-500"
                aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
            )}

            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-rose-600/90 hover:bg-rose-500 transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-rose-500"
                aria-label={`Launch ${project.title} live app (opens in new tab)`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
