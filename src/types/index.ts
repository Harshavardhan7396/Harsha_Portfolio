export interface Project {
  id?: string;
  title: string;
  slug: string;
  description: string;
  tech_stack: string[];
  status: 'LIVE' | 'LIVE BETA' | 'CONCEPT' | string;
  image_url?: string | null;
  live_url?: string | null;
  repo_url?: string | null;
  featured?: boolean;
  sort_order: number;
  created_at?: string;
  long_description?: string;
  key_features?: string[];
  role?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
  fork: boolean;
  stargazers_count?: number;
  homepage?: string | null;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}
