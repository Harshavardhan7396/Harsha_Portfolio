import React from 'react';
import { useGithubRepos } from '../hooks/useGithubRepos';
import { PERSONAL_INFO } from '../data/fallbackData';

export const Code: React.FC = () => {
  const { repos, isLoading, isFallback } = useGithubRepos();

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'typescript':
        return '#3178c6';
      case 'javascript':
        return '#f1e05a';
      case 'python':
        return '#3572A5';
      case 'html':
        return '#e34c26';
      case 'css':
        return '#563d7c';
      default:
        return '#9B1C31';
    }
  };

  return (
    <section className="hairline-b px-5 sm:px-6 md:px-10 py-16 sm:py-20 w-full max-w-full overflow-hidden" data-purpose="github-repositories" id="code">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-baseline gap-3 sm:gap-6">
          <span className="serif-display text-4xl sm:text-6xl text-[#141414]/30 italic">02</span>
          <h2 className="serif-display text-3xl sm:text-5xl font-normal tracking-tight text-[#141414]">
            Public Repositories
          </h2>
          <span className="font-mono-tag text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#141414]/50 ml-1 sm:ml-2">
            / Codebases &amp; Commits
          </span>
        </div>
        <a
          className="font-mono-tag text-xs uppercase text-[#9B1C31] hover:underline tracking-wider"
          href={PERSONAL_INFO.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/Harshavardhan7396 ↗
        </a>
      </div>

      {/* Hairline Repo Index */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 hairline-all md:divide-x divide-y md:divide-y-0 divide-[#141414]/20">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-5 sm:p-8 space-y-4 animate-pulse">
              <div className="h-4 w-20 bg-[#141414]/10 rounded" />
              <div className="h-8 w-3/4 bg-[#141414]/10 rounded" />
              <div className="h-16 w-full bg-[#141414]/5 rounded" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 hairline-all md:divide-x divide-y md:divide-y-0 divide-[#141414]/20">
          {repos.slice(0, 6).map((repo, idx) => (
            <div
              key={repo.id}
              className="p-5 sm:p-8 flex flex-col justify-between hover:bg-[#141414]/[0.02] transition-colors min-w-0"
            >
              <div className="min-w-0">
                <div className="flex items-center justify-between font-mono-tag text-xs text-[#141414]/50 mb-3">
                  <span>REPO #0{idx + 1}</span>
                  <span className="text-[#9B1C31]">PUBLIC</span>
                </div>
                <h4 className="serif-display text-2xl sm:text-3xl font-medium text-[#141414] hover:text-[#9B1C31] transition-colors break-words">
                  <a href={repo.html_url} rel="noopener noreferrer" target="_blank">
                    {repo.name}
                  </a>
                </h4>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#141414]/70 leading-relaxed font-light break-words">
                  {repo.description || 'Full-stack AI assisted implementation and interactive product codebase.'}
                </p>
              </div>

              <div className="pt-6 sm:pt-8 hairline-t mt-6 sm:mt-8 flex items-center justify-between font-mono-tag text-xs flex-wrap gap-2">
                <span className="flex items-center gap-1.5 text-[#141414]/70">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  ></span>
                  <span className="text-[11px] sm:text-xs">{repo.language || 'TypeScript / Python'}</span>
                </span>
                <a
                  className="text-[#9B1C31] hover:underline whitespace-nowrap min-h-[36px] sm:min-h-0 flex items-center"
                  href={repo.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Callout */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono-tag text-[11px] sm:text-xs text-[#141414]/60 break-words">
        <span className="break-words">Repository cadence: Continuous integration via Git CLI &amp; Vercel CI</span>
        <a
          className="hover:text-[#9B1C31] transition-colors uppercase tracking-wider font-medium whitespace-nowrap"
          href={PERSONAL_INFO.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          View all repositories on GitHub →
        </a>
      </div>
    </section>
  );
};
