import { useState, useEffect } from 'react';
import { Project } from '../types';
import { getProjects } from '../lib/supabase';
import { FALLBACK_PROJECTS } from '../data/fallbackData';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const data = await getProjects();
        if (isMounted) {
          setProjects(data);
        }
      } catch (err) {
        if (isMounted) {
          setProjects(FALLBACK_PROJECTS);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, isLoading };
}
