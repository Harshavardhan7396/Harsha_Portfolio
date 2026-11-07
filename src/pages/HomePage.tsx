import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Work } from '../components/Work';
import { Banner } from '../components/Banner';
import { Code } from '../components/Code';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Journey } from '../components/Journey';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.title = 'Boddu Harshavardhan — AI Product Developer & B.Tech CSE (AI/ML)';

    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return (
    <div id="top" className="bg-[#F3EFE7] min-h-screen text-[#141414] w-full max-w-[100vw] overflow-x-hidden">
      {/* Desktop Presentation Outer Wrapper (Enforces 1440px desktop baseline with hairline borders) */}
      <div className="w-full max-w-[1440px] mx-auto bg-[#F3EFE7] relative hairline-l hairline-r shadow-2xl overflow-x-hidden min-w-0">
        <Navbar />

        <main id="main-content" className="w-full max-w-full overflow-x-hidden min-w-0">
          <Hero />
          <Work />
          <Banner />
          <Code />
          <About />
          <Skills />
          <Journey />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};
