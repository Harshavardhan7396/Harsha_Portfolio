import { Project, GitHubRepo } from '../types';

export const PERSONAL_INFO = {
  name: 'Boddu Harshavardhan',
  role: 'First-year B.Tech Computer Science (AI/ML) Student',
  subRole: 'AI-Assisted Product Developer & Vibe Coder',
  university: 'NIAT in collaboration with Joy University',
  location: 'Tamil Nadu, India',
  graduation: 'Expected August 2030',
  summary:
    'Builds AI-assisted web applications and digital product prototypes. Uses Claude, ChatGPT, Google AI Studio, Gemini and Antigravity to turn product ideas into working features, then reviews, debugs and refines the output. Passionate about Vibe Coding and modern human-AI product development. Seeking an AI/ML or web development internship.',
  email: 'bodduharshavardhan41@gmail.com',
  github: 'https://github.com/Harshavardhan7396',
  linkedin: 'https://linkedin.com/in/harshavardhan-boddu-633b08432',
  resumeUrl: 'https://edsisoyiiksspkboypuq.supabase.co/storage/v1/object/public/documents/Harsha%20Resume%20(1).pdf',
  timezone: 'Asia/Kolkata',
};

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'WildDex',
    slug: 'wilddex',
    description:
      'Species encyclopedia with an instant AI specimen scanner, field collection dex and naturalist network.',
    long_description:
      'WildDex is an AI-powered naturalist companion and wildlife identification platform. Designed to bridge field exploration with computational taxonomy, users can scan botanical and zoological specimens using camera inputs or photo uploads. The system instantly classifies species, renders morphological breakdowns, provides ecological context, and stores logged observations into a personal digital Field Dex.',
    tech_stack: ['AI Scanner', 'Web App', 'Vercel'],
    status: 'LIVE',
    image_url: '/images/projects/wilddex.jpg',
    live_url: 'https://wild-dex-pearl.vercel.app',
    repo_url: 'https://github.com/Harshavardhan7396/Wild-Dex',
    featured: true,
    sort_order: 1,
    role: 'Creator & Lead Developer',
    key_features: [
      'Instant specimen vision recognition with multi-class taxonomy',
      'Field collection dex with geospatial observation logs',
      'Naturalist social network for community validation and species threads',
      'Offline-tolerant collection journaling and fast search indexing',
    ],
  },
  {
    id: '2',
    title: 'Vesper.ai',
    slug: 'vesper-ai',
    description:
      'AI-powered student transportation platform covering university, regional, Tamil Nadu state transport and railways, with a journey planner, AI assistant, favorites, notifications, and separate user/admin access using Supabase Row Level Security.',
    long_description:
      'Vesper.ai ("Your Journey. Connected.") solves student transit friction across Tamil Nadu by unifying multi-modal transit timetables. It combines university bus fleets, regional transit, Tamil Nadu State Transport (TNSTC), and southern railway schedules into a predictive journey planner. Integrated with a conversational AI travel assistant and secured with Supabase Auth & RLS policies for student and transit admin tiers.',
    tech_stack: ['HTML', 'CSS', 'Supabase', 'RLS'],
    status: 'LIVE BETA',
    image_url: '/images/projects/vesper.jpg',
    live_url: 'https://versai-ai.vercel.app',
    repo_url: 'https://github.com/Harshavardhan7396/Versai_ai',
    featured: true,
    sort_order: 2,
    role: 'Lead Architect & Full-Stack Developer',
    key_features: [
      'Multi-modal transit engine covering University, TNSTC, and Indian Railways',
      'Intelligent journey planner with schedule delay estimations',
      'Conversational AI assistant for route suggestions and stop lookups',
      'Supabase Row Level Security (RLS) separating student travelers and fleet managers',
      'Live favorite routes, bookmarking, and push transit alerts',
    ],
  },
  {
    id: '3',
    title: 'Crimson AI',
    slug: 'crimson-ai',
    description:
      'AI-powered import and export platform with orders, shipments, deliveries, rewards, recommendations, an AI chatbot and a unified dashboard with 3D-style visuals.',
    long_description:
      'Crimson AI (Aether Crimson) is a trade logistics and shipment orchestration portal engineered to simplify international cross-border cargo management. Leveraging Google AI Studio and Gemini multimodal models for customs document parsing and automated tariff classification, it features a glassmorphic command center with cargo telemetry, milestone tracker, supplier rewards, and real-time shipping negotiation bot.',
    tech_stack: ['Supabase', 'Google AI Studio'],
    status: 'LIVE',
    image_url: '/images/projects/crimson.jpg',
    live_url: 'https://crimson-iota.vercel.app',
    repo_url: 'https://github.com/Harshavardhan7396/Crimson',
    featured: true,
    sort_order: 3,
    role: 'Product Engineer & UI Designer',
    key_features: [
      'Unified supply-chain console with 3D-style logistics indicators',
      'AI document parser for bill of lading and customs clearances',
      'Milestone tracking with predicted port dwell times',
      'Interactive AI chatbot for instant tariff lookups and status queries',
      'Customer loyalty reward tier computation and automated alerts',
    ],
  },
  {
    id: '4',
    title: 'CareerPilot AI',
    slug: 'careerpilot-ai',
    description:
      'Hackathon concept that analyses a student\'s skills against a target career, plans personalized learning paths and adds an AI tutor.',
    long_description:
      'CareerPilot AI is an educational guidance concept built during a competitive university hackathon. By comparing student academic profiles and GitHub repositories against real-time industry job specifications, it builds structured skill gap matrices, weekly learning syllabi, and contextual AI coaching prompts that help undergraduates bridge into emerging tech roles.',
    tech_stack: ['Concept', 'Hackathon'],
    status: 'CONCEPT',
    image_url: '/images/projects/careerpilot.jpg',
    live_url: null,
    repo_url: null,
    featured: true,
    sort_order: 4,
    role: 'Concept Designer & Prompt Architect',
    key_features: [
      'Skill gap benchmark graph against target engineering profiles',
      'Adaptive milestone curriculum tailored to student weekly capacity',
      'Embedded AI mentor answering technical domain questions with code snippets',
      'Hackathon sprint prototype emphasizing rapid student onboarding',
    ],
  },
];

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: 'Wild-Dex',
    html_url: 'https://github.com/Harshavardhan7396/Wild-Dex',
    description: 'Species encyclopedia with an instant AI specimen scanner and field collection dex.',
    language: 'TypeScript',
    updated_at: '2026-03-24T10:00:00Z',
    fork: false,
    stargazers_count: 5,
    homepage: 'https://wild-dex-pearl.vercel.app',
  },
  {
    id: 102,
    name: 'Versai_ai',
    html_url: 'https://github.com/Harshavardhan7396/Versai_ai',
    description: 'AI-powered student transportation platform with journey planning and Supabase RLS.',
    language: 'JavaScript',
    updated_at: '2026-03-18T14:30:00Z',
    fork: false,
    stargazers_count: 4,
    homepage: 'https://versai-ai.vercel.app',
  },
  {
    id: 103,
    name: 'Crimson',
    html_url: 'https://github.com/Harshavardhan7396/Crimson',
    description: 'AI-powered import & export logistics platform with 3D visuals and Gemini assistance.',
    language: 'TypeScript',
    updated_at: '2026-03-12T09:15:00Z',
    fork: false,
    stargazers_count: 6,
    homepage: 'https://crimson-iota.vercel.app',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Programming & Web Fundamentals',
    skills: [
      { name: 'Python (fundamentals)', description: 'Data structures, algorithm basics, automation scripts' },
      { name: 'HTML5', description: 'Semantic markup, SEO architecture, accessibility' },
      { name: 'CSS3', description: 'Tailwind CSS, responsive layouts, motion design' },
      { name: 'JavaScript & TypeScript', description: 'Modern ESNext, strict type safety, asynchronous APIs' },
    ],
  },
  {
    category: 'Backend, Database & Dev Tools',
    skills: [
      { name: 'Supabase', description: 'Auth, Row Level Security (RLS), Postgres relations' },
      { name: 'Git', description: 'Version control, branch workflows, stash & rebasing' },
      { name: 'GitHub', description: 'Open-source collaboration, repo management, Pages & actions' },
      { name: 'Visual Studio Code', description: 'Custom extension stacks, dev containers, debugging' },
    ],
  },
  {
    category: 'AI-Assisted Engineering & Workflows',
    skills: [
      { name: 'Claude', description: 'Architectural reasoning, complex refactors, test design' },
      { name: 'ChatGPT', description: 'Ideation, algorithmic logic synthesis, rapid documentation' },
      { name: 'Google AI Studio', description: 'Multimodal prototyping, prompt caching, system instructions' },
      { name: 'Gemini', description: 'Vision models, structured output generation, speed benchmarks' },
      { name: 'Antigravity', description: 'Autonomous agent pipelines, rapid prototype execution' },
    ],
  },
];

export const JOURNEY_MILESTONES = [
  {
    year: '2026',
    title: 'B.Tech in Computer Science & Engineering (AI/ML)',
    organization: 'NIAT in collaboration with Joy University',
    location: 'Tamil Nadu, India',
    period: '2026 – 2030 (Expected August 2030)',
    description:
      'Pursuing an intensive undergraduate degree specialized in Artificial Intelligence and Machine Learning. Building strong computational foundations in algorithms, mathematical modeling, and distributed systems while spearheading AI-assisted application development.',
    badge: 'Academics',
    highlights: ['AI/ML Specialization', 'Core CS Fundamentals', 'Collaborative Innovation'],
  },
  {
    year: '2026',
    title: 'Bootcamp 2026',
    organization: 'National Institute of Advanced Technologies (NIAT)',
    location: 'Tamil Nadu, India',
    period: 'Intensive Immersive Training',
    description:
      'Selected for the rigorous NIAT engineering bootcamp. Accelerated full-stack web development practices, modern agile methodologies, peer code reviews, and enterprise toolchains.',
    badge: 'Immersion',
    highlights: ['Hands-on Product Sprints', 'Architecture & Team Coding', 'Code Review Rigor'],
  },
  {
    year: '2026',
    title: 'College Hackathon – CareerPilot AI',
    organization: 'University Innovation Sprint',
    location: 'Tamil Nadu, India',
    period: 'Competition Finalist',
    description:
      'Conceived, architected, and pitched CareerPilot AI under 36 hours. Solved undergraduate curriculum alignment issues by utilizing prompt-engineered learning pathways and automated skill evaluation.',
    badge: 'Hackathon',
    highlights: ['Prototype in 36 Hours', 'Skill Mapping Engine', 'Award Finalist'],
  },
];
