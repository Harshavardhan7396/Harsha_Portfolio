import { useState, useEffect } from 'react';
import { GitHubRepo } from '../types';
import { FALLBACK_REPOS } from '../data/fallbackData';

export function useGithubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFallback, setIsFallback] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchRepos() {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://api.github.com/users/Harshavardhan7396/repos?sort=updated&per_page=100',
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }

        const data: GitHubRepo[] = await response.json();
        // Exclude forks
        const nonForks = Array.isArray(data) ? data.filter((repo) => !repo.fork) : [];

        if (isMounted) {
          if (nonForks.length > 0) {
            setRepos(nonForks);
            setIsFallback(false);
          } else {
            setRepos(FALLBACK_REPOS);
            setIsFallback(true);
          }
        }
      } catch (err) {
        console.warn('GitHub repositories fetch failed, using fallback list:', err);
        if (isMounted) {
          setRepos(FALLBACK_REPOS);
          setIsFallback(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return { repos, isLoading, isFallback };
}
