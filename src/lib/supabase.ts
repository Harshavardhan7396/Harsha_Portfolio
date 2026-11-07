import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Project, ContactMessage } from '../types';
import { FALLBACK_PROJECTS } from '../data/fallbackData';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Creates the client from import.meta.env.VITE_SUPABASE_URL and import.meta.env.VITE_SUPABASE_ANON_KEY, and exports null if either is missing
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const isSupabaseConfigured = supabase !== null;

/**
 * Fetch the Work section projects from the Supabase table `projects`
 * Columns: title, slug, description, status, tech_stack, image_url, live_url, repo_url, sort_order
 * Ordered by sort_order.
 * If the fetch fails or returns no rows, silently keep using the existing hardcoded projects.
 */
export async function getProjects(): Promise<Project[]> {
  if (!supabase) {
    return FALLBACK_PROJECTS;
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('title, slug, description, status, tech_stack, image_url, live_url, repo_url, sort_order')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return FALLBACK_PROJECTS;
    }

    return data.map((item: any) => ({
      ...item,
      tech_stack: Array.isArray(item.tech_stack)
        ? item.tech_stack
        : typeof item.tech_stack === 'string'
        ? item.tech_stack.split(',').map((s: string) => s.trim())
        : [],
      long_description:
        item.long_description ||
        FALLBACK_PROJECTS.find((p) => p.slug === item.slug)?.long_description ||
        item.description,
      key_features:
        item.key_features ||
        FALLBACK_PROJECTS.find((p) => p.slug === item.slug)?.key_features ||
        [],
      role:
        item.role ||
        FALLBACK_PROJECTS.find((p) => p.slug === item.slug)?.role ||
        'Lead Developer',
    }));
  } catch {
    // Silently fall back to hardcoded projects without throwing or logging errors to user
    return FALLBACK_PROJECTS;
  }
}

/**
 * Submit a contact message into Supabase table `messages`.
 */
export async function sendContactMessage(payload: ContactMessage): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    return {
      success: false,
      error: 'Supabase is not configured. Please use the direct mailto option.',
    };
  }

  try {
    const { error } = await supabase.from('messages').insert({
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || 'An unexpected error occurred.' };
  }
}

export default supabase;
