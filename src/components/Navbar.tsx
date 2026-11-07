import React, { useState, useEffect } from 'react';
import { useLocalTime } from '../hooks/useLocalTime';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/fallbackData';

export const Navbar: React.FC = () => {
  const localTime = useLocalTime();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'code', 'about', 'toolkit', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const desktopNavLinks = [
    { label: '01. WORK', href: '#work', id: 'work' },
    { label: '02. REPOSITORIES', href: '#code', id: 'code' },
    { label: '03. ABOUT', href: '#about', id: 'about' },
    { label: '04. TOOLKIT', href: '#toolkit', id: 'toolkit' },
    { label: '05. CONTACT', href: '#contact', id: 'contact' },
  ];

  const mobileNavLinks = [
    { label: 'Work', href: '#work', id: 'work', num: '01' },
    { label: 'Code', href: '#code', id: 'code', num: '02' },
    { label: 'About', href: '#about', id: 'about', num: '03' },
    { label: 'Contact', href: '#contact', id: 'contact', num: '04' },
  ];

  return (
    <>
      {/* Skip to Content for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#9B1C31] focus:text-[#F3EFE7] focus:font-mono-tag focus:text-xs"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-[#F3EFE7]/95 backdrop-blur-sm hairline-b w-full max-w-full">
        <div className="px-5 sm:px-6 md:px-10 h-14 flex items-center justify-between font-mono-tag text-xs tracking-wider w-full">
          {/* Brand / Identity:
              On mobile: smaller font size, tight letter spacing, fits on one line, hides ©2026 */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 pr-2">
            <span className="inline-block w-2 h-2 bg-[#9B1C31] shrink-0"></span>
            <a
              className="font-semibold sm:font-medium hover:text-[#9B1C31] transition-colors uppercase text-[11px] sm:text-xs tracking-tight sm:tracking-widest text-[#141414] whitespace-nowrap overflow-hidden"
              href="#"
            >
              <span>{PERSONAL_INFO.name}</span>
              <span className="hidden sm:inline text-[#141414]/40 font-normal ml-1.5">©2026</span>
            </a>
          </div>

          {/* Navigation items (Desktop - unchanged) */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-6 shrink-0">
            {desktopNavLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <React.Fragment key={link.id}>
                  {idx > 0 && <span className="text-[#141414]/20">/</span>}
                  <a
                    href={link.href}
                    className={`transition-colors whitespace-nowrap ${
                      isActive ? 'text-[#9B1C31] font-semibold' : 'text-[#141414] hover:text-[#9B1C31]'
                    }`}
                  >
                    {link.label}
                  </a>
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right side container:
              Desktop: shows live location and clock.
              Mobile (<640px): hides clock/location and shows only the accessible hamburger button */}
          <div className="flex items-center shrink-0">
            {/* Live Clock & Location - Desktop / Tablet only (>=640px) */}
            <div className="hidden sm:flex items-center space-x-3 text-[#141414]/75 mr-4 md:mr-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B1C31] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9B1C31]"></span>
              </span>
              <span className="uppercase font-mono-tag text-[11px] whitespace-nowrap">
                Tamil Nadu, IN
              </span>
              <span className="text-[#141414]/30">•</span>
              <span className="font-medium text-[#141414] font-mono-tag text-[11px] whitespace-nowrap">
                {localTime || 'Asia/Kolkata'}
              </span>
            </div>

            {/* Mobile Hamburger menu toggle (screens < 768px / mobile < 640px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-[#141414] hover:text-[#9B1C31] hover:bg-[#141414]/5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B1C31]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#9B1C31]" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Slide-down Modal */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-14 z-50 md:hidden bg-[#F3EFE7] px-6 py-8 flex flex-col justify-between overflow-y-auto hairline-b"
        >
          {/* Menu Links: Work, Code, About, Contact */}
          <nav className="flex flex-col space-y-2 font-mono-tag text-base">
            <div className="text-[10px] uppercase text-[#141414]/40 tracking-widest pb-2 mb-2 border-b hairline-b">
              Navigation // Menu
            </div>

            {mobileNavLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3.5 border-b hairline-b flex items-center justify-between text-[#141414] hover:text-[#9B1C31] transition-colors min-h-[44px]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9B1C31] font-semibold">[{link.num}]</span>
                  <span className="serif-display text-2xl font-normal">{link.label}</span>
                </div>
                <span className="text-xs text-[#141414]/40 font-mono-tag">↗</span>
              </a>
            ))}

            {/* Download CV Link */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3.5 border-b hairline-b flex items-center justify-between text-[#141414] hover:text-[#9B1C31] transition-colors min-h-[44px]"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#9B1C31] font-semibold">[05]</span>
                <span className="serif-display text-2xl font-normal">Download CV</span>
              </div>
              <span className="text-xs text-[#9B1C31] font-mono-tag">PDF ↗</span>
            </a>
          </nav>

          {/* Mobile Menu Footer Info: Moved Live Clock & Location Here */}
          <div className="pt-6 border-t hairline-t flex flex-col gap-4 font-mono-tag text-xs">
            {/* Live Clock moved to Mobile Menu Panel */}
            <div className="p-3.5 hairline-all bg-[#141414]/[0.02] flex items-center justify-between text-[#141414]/75">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9B1C31] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9B1C31]"></span>
                </span>
                <span className="uppercase text-[11px]">Tamil Nadu, IN</span>
              </span>
              <span className="font-semibold text-[#141414] text-[11px]">
                {localTime || 'Asia/Kolkata'}
              </span>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 bg-[#9B1C31] text-[#F3EFE7] uppercase tracking-widest font-medium min-h-[44px] flex items-center justify-center transition-colors hover:bg-[#141414]"
            >
              Initialize Transmission
            </a>
          </div>
        </div>
      )}
    </>
  );
};
