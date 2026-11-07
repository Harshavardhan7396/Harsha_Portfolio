import React, { useState } from 'react';
import { isSupabaseConfigured, sendContactMessage } from '../lib/supabase';
import { PERSONAL_INFO } from '../data/fallbackData';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Hidden honeypot field for anti-spam
  const [honeypot, setHoneypot] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setToast(null);

    // 1. Honeypot check: silently pretend success if bot filled it
    if (honeypot) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setToast({
          type: 'success',
          message: 'Transmission logged. Thank you for connecting with Boddu Harshavardhan.',
        });
        setName('');
        setEmail('');
        setMessage('');
      }, 400);
      return;
    }

    // 2. Cooldown check (30 seconds)
    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 30000) {
      const remainingSec = Math.ceil((30000 - (now - lastSubmissionTime)) / 1000);
      setToast({
        type: 'error',
        message: `Please wait ${remainingSec} seconds before sending another message.`,
      });
      return;
    }

    // 3. Client-side validations
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 1 || trimmedName.length > 100) {
      setToast({
        type: 'error',
        message: 'Name must be between 1 and 100 characters.',
      });
      return;
    }

    if (!trimmedEmail || !validateEmail(trimmedEmail)) {
      setToast({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    if (trimmedMessage.length < 1 || trimmedMessage.length > 2000) {
      setToast({
        type: 'error',
        message: 'Message must be between 1 and 2000 characters.',
      });
      return;
    }

    // 4. Fallback if Supabase is not configured
    if (!isSupabaseConfigured) {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${trimmedName}`
      )}&body=${encodeURIComponent(trimmedMessage)}`;
      setToast({
        type: 'success',
        message: `Opening your email client to transmit directly to ${PERSONAL_INFO.email}`,
      });
      return;
    }

    // 5. Send message to Supabase table `messages`
    setIsLoading(true);
    try {
      const result = await sendContactMessage({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      });

      if (result.success) {
        setToast({
          type: 'success',
          message: 'Transmission logged. Thank you for connecting with Boddu Harshavardhan.',
        });
        setName('');
        setEmail('');
        setMessage('');
        setLastSubmissionTime(now);

        // Initiate 30-second cooldown timer
        let remaining = 30;
        setCooldownRemaining(remaining);
        const timer = setInterval(() => {
          remaining -= 1;
          setCooldownRemaining(remaining);
          if (remaining <= 0) {
            clearInterval(timer);
          }
        }, 1000);
      } else {
        setToast({
          type: 'error',
          message: result.error || 'Submission failed. Please transmit via direct email.',
        });
      }
    } catch (err: any) {
      setToast({
        type: 'error',
        message: err.message || 'An unexpected error occurred. Please use direct email.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="hairline-b px-5 sm:px-6 md:px-10 py-16 sm:py-20" data-purpose="contact-portal" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left 6 Columns: Giant Contact Display */}
        <div className="lg:col-span-6 flex flex-col justify-between pr-0 lg:pr-4">
          <div>
            <div className="flex items-baseline gap-4 sm:gap-6 mb-6 sm:mb-8">
              <span className="serif-display text-4xl sm:text-6xl text-[#141414]/30 italic">06</span>
              <span className="font-mono-tag text-[11px] sm:text-xs uppercase tracking-widest text-[#9B1C31] font-medium">
                Available for Internships
              </span>
            </div>

            <h2 className="serif-display text-6xl sm:text-8xl lg:text-[96px] leading-[0.9] font-normal tracking-tight text-[#141414]">
              Let's talk.
            </h2>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-[#141414]/75 max-w-md font-light leading-relaxed">
              Seeking early-stage AI engineering, full-stack product development, or software apprenticeships where speed, curiosity, and rapid execution are prized.
            </p>

            <div className="mt-6 sm:mt-8">
              <span className="font-mono-tag text-[11px] sm:text-xs text-[#141414]/40 uppercase block mb-1">
                Direct Electronic Mail
              </span>
              <a
                className="serif-display text-xl sm:text-3xl font-medium text-[#141414] hover:text-[#9B1C31] transition-colors underline decoration-1 underline-offset-8 break-all inline-block py-1"
                href={`mailto:${PERSONAL_INFO.email}`}
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Socials Strip */}
          <div className="pt-8 sm:pt-12 hairline-t mt-8 sm:mt-12">
            <div className="font-mono-tag text-[11px] sm:text-xs uppercase tracking-wider text-[#141414]/40 mb-3">
              Network Presences
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono-tag text-xs">
              <a
                className="hover:text-[#9B1C31] transition-colors min-h-[44px] inline-flex items-center"
                href={PERSONAL_INFO.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                GITHUB ↗
              </a>
              <span className="text-[#141414]/20">•</span>
              <a
                className="hover:text-[#9B1C31] transition-colors min-h-[44px] inline-flex items-center"
                href={PERSONAL_INFO.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                LINKEDIN ↗
              </a>
              <span className="text-[#141414]/20">•</span>
              <a
                className="hover:text-[#9B1C31] transition-colors min-h-[44px] inline-flex items-center"
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME [PDF] ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right 6 Columns: Minimal Underline Inquiry Form */}
        <div className="lg:col-span-6 pl-0 lg:pl-6 border-l-0 lg:border-l border-[#141414]/20">
          {/* Unconfigured Supabase Fallback Banner */}
          {!isSupabaseConfigured && (
            <div className="p-4 mb-6 hairline-all bg-[#141414]/[0.03] font-mono-tag text-xs text-[#141414]/80">
              <span className="text-[#9B1C31] font-semibold uppercase">[Notice]</span> Supabase database is not configured in this environment. Send your message directly via{' '}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#9B1C31] underline font-semibold hover:text-[#141414] transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
              .
            </div>
          )}

          {/* Toast Notification */}
          {toast && (
            <div
              role="alert"
              aria-live="polite"
              className={`p-4 mb-6 font-mono-tag text-xs border ${
                toast.type === 'success'
                  ? 'bg-[#141414]/5 border-[#9B1C31] text-[#9B1C31]'
                  : 'bg-red-50 border-red-500 text-red-700'
              }`}
            >
              {toast.message}
            </div>
          )}

          <form className="space-y-8" data-purpose="minimal-contact-form" onSubmit={handleSubmit}>
            {/* Hidden honeypot field for anti-bot mitigation */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website-hp">Website</label>
              <input
                id="website-hp"
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name Field */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="block font-mono-tag text-xs uppercase text-[#141414]/70" htmlFor="name">
                  01 // Full Name or Organization *
                </label>
                <span className="font-mono-tag text-[10px] text-[#141414]/40">
                  {name.length}/100
                </span>
              </div>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Elena Rostova / Acme AI Labs"
                className="w-full bg-transparent border-0 border-b border-[#141414]/30 px-0 py-3 text-base sm:text-sm min-h-[44px] focus:border-[#9B1C31] focus:ring-0 placeholder:text-[#141414]/30 font-sans text-[#141414]"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block font-mono-tag text-xs uppercase text-[#141414]/70 mb-2" htmlFor="email">
                02 // Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="elena@acme.org"
                className="w-full bg-transparent border-0 border-b border-[#141414]/30 px-0 py-3 text-base sm:text-sm min-h-[44px] focus:border-[#9B1C31] focus:ring-0 placeholder:text-[#141414]/30 font-sans text-[#141414]"
              />
            </div>

            {/* Message Field */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="block font-mono-tag text-xs uppercase text-[#141414]/70" htmlFor="message">
                  03 // Brief Transmission *
                </label>
                <span className="font-mono-tag text-[10px] text-[#141414]/40">
                  {message.length}/2000
                </span>
              </div>
              <textarea
                id="message"
                required
                rows={4}
                maxLength={2000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline your project scope or team requirements..."
                className="w-full bg-transparent border-0 border-b border-[#141414]/30 px-0 py-3 text-base sm:text-sm focus:border-[#9B1C31] focus:ring-0 placeholder:text-[#141414]/30 font-sans resize-none text-[#141414]"
              ></textarea>
            </div>

            {/* Actions Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="font-mono-tag text-[11px] text-[#141414]/50 uppercase">
                {cooldownRemaining > 0
                  ? `Cooldown Active: ${cooldownRemaining}s`
                  : 'Encrypted via Client Transport'}
              </span>

              <button
                type="submit"
                disabled={isLoading || cooldownRemaining > 0}
                className="w-full sm:w-auto min-h-[44px] flex items-center justify-center bg-[#9B1C31] text-[#F3EFE7] px-8 py-3.5 font-mono-tag text-xs uppercase tracking-widest hover:bg-[#141414] transition-colors duration-200 disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? 'TRANSMITTING...' : 'SEND TRANSMISSION ↗'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
