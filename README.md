# Boddu Harshavardhan – Personal Portfolio

Production-quality personal portfolio website for **Boddu Harshavardhan**, First-year B.Tech Computer Science (AI/ML) student at NIAT in collaboration with Joy University, Tamil Nadu, India, and AI-assisted product developer.

Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, **Lenis**, and **Supabase**.

---

## ⚠️ Security & Privacy Note (Before Deploying)

> **Important**: In `public/images/portrait.jpg` (or your uploaded badge photo), please **crop or blur the college ID/registration number** on your lanyard badge before deploying to public production hosting to prevent personal student identity exposure.

---

## 🚀 Quick Start (Local Setup)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🗄️ Supabase Setup

The website works seamlessly offline with hardcoded fallback data. To connect your live Supabase database for dynamic project updates and real contact form message storage:

1. Create a project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase dashboard and run the schema file located at:
   ```
   /supabase/schema.sql
   ```
   This creates:
   - `projects` table (with public read access via Row Level Security)
   - `messages` table (with public insert access and length validations)
   - Seed data for WildDex, Vesper.ai, Crimson AI, and CareerPilot AI.
3. Copy your project URL and public Anon Key from **Project Settings > API**.
4. Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL="https://your-project-id.supabase.co"
   VITE_SUPABASE_ANON_KEY="your-anon-public-key"
   ```

---

## 📸 Photos & Resume / CV

Place your personal assets in the `/public` directory:

- **Vertical Portrait**: `/public/images/portrait.jpg` (used in Hero with calibrated face framing)
- **Night Photo**: `/public/images/night.jpg` (used in About section)
- **Classroom Banner**: `/public/images/classroom.jpg` (used in Campus Cohort banner)
- **Resume / CV**: Hosted in Supabase storage bucket (`documents/Harsha Resume (1).pdf`), opened in a new tab via the "Download CV" / "Resume" buttons.

All image elements include explicit width/height, lazy loading (eager on hero), responsive `object-fit: cover`, and calibrated `object-position`.

---

## ☁️ Deploying to Vercel (SPA)

This project is pre-configured for instant zero-config deployment on Vercel:

1. Push your repository to GitHub (`https://github.com/Harshavardhan7396/portfolio`).
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Set Framework Preset to **Vite**.
5. In **Environment Variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Click **Deploy**.

The included `vercel.json` automatically rewrites all single-page client routes (like `/projects/:slug`) to `/index.html`.

---

## 🛠️ Stack & Features

- **Smooth Scrolling**: Lenis with `prefers-reduced-motion` compliance.
- **Custom Interactive Cursor**: Smooth cursor dot that expands to "View" over interactive work cards (automatically disabled on touch screens).
- **Live Local-Time Clock**: Displayed in Asia/Kolkata (IST) in the top bar.
- **GitHub API Integration**: Real-time repository showcase fetched directly with fork filtering, stars, languages, and rate-limit fallbacks.
- **Accessible & SEO Ready**: Semantic HTML, skip-to-content anchor, OpenGraph, Twitter cards, and JSON-LD Person schema.
