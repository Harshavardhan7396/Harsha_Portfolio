-- Supabase SQL Schema for Boddu Harshavardhan Portfolio
-- Run this in the Supabase SQL Editor to set up tables, security policies, and initial seed data.

-- 1. Create table `projects`
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  tech_stack TEXT[] NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'LIVE',
  image_url TEXT,
  live_url TEXT,
  repo_url TEXT,
  featured BOOLEAN DEFAULT true,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable RLS on `projects`
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to `projects`
CREATE POLICY "Allow public read access to projects"
  ON public.projects
  FOR SELECT
  TO public
  USING (true);

-- 2. Create table `messages`
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) > 0 AND char_length(name) <= 100),
  email TEXT NOT NULL CHECK (char_length(email) > 0 AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  message TEXT NOT NULL CHECK (char_length(message) > 0 AND char_length(message) <= 2000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable RLS on `messages`
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Allow public insert only on `messages`
CREATE POLICY "Allow public insert on messages"
  ON public.messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 3. Seed initial projects
INSERT INTO public.projects (title, slug, description, tech_stack, status, live_url, repo_url, featured, sort_order)
VALUES
  (
    'WildDex',
    'wilddex',
    'Species encyclopedia with an instant AI specimen scanner, field collection dex and naturalist network.',
    ARRAY['AI Scanner', 'Web App', 'Vercel'],
    'LIVE',
    'https://wild-dex-pearl.vercel.app',
    'https://github.com/Harshavardhan7396/Wild-Dex',
    true,
    1
  ),
  (
    'Vesper.ai',
    'vesper-ai',
    'Your Journey. Connected. AI-powered student transportation platform covering university, regional, Tamil Nadu state transport and railways, with a journey planner, AI assistant, favorites, notifications, and separate user/admin access using Supabase Row Level Security.',
    ARRAY['HTML', 'CSS', 'Supabase', 'RLS'],
    'LIVE BETA',
    'https://versai-ai.vercel.app',
    'https://github.com/Harshavardhan7396/Versai_ai',
    true,
    2
  ),
  (
    'Crimson AI',
    'crimson-ai',
    'Aether Crimson. AI-powered import and export platform with orders, shipments, deliveries, rewards, recommendations, an AI chatbot and a unified dashboard with 3D-style visuals.',
    ARRAY['Supabase', 'Google AI Studio'],
    'LIVE',
    'https://crimson-iota.vercel.app',
    'https://github.com/Harshavardhan7396/Crimson',
    true,
    3
  ),
  (
    'CareerPilot AI',
    'careerpilot-ai',
    'Hackathon concept that analyses a student''s skills against a target career, plans personalized learning paths and adds an AI tutor.',
    ARRAY['Concept', 'Hackathon'],
    'CONCEPT',
    NULL,
    NULL,
    true,
    4
  )
ON CONFLICT (slug) DO UPDATE
SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  tech_stack = EXCLUDED.tech_stack,
  status = EXCLUDED.status,
  live_url = EXCLUDED.live_url,
  repo_url = EXCLUDED.repo_url,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order;
