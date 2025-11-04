import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Dark brutalist hero with autoplay video, glitch headline, floating badge, and ripple buttons
const Hero = () => {
  const prefersReduced = useReducedMotion();
  const badgeRef = useRef(null);

  // Custom cursor only inside hero
  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] text-[#F5F5F5]">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-90"
          src="https://videos.pexels.com/video-files/4867422/4867422-uhd_2560_1440_30fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            background:
              'radial-gradient(80% 60% at 20% 20%, rgba(0,240,255,0.25) 0%, transparent 60%), radial-gradient(60% 50% at 80% 30%, var(--accent, #00F0FF) 0%, transparent 60%), radial-gradient(60% 50% at 50% 80%, rgba(57,255,20,0.18) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-[92svh] max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.h1
            initial={prefersReduced ? false : { y: 24, opacity: 0 }}
            animate={prefersReduced ? {} : { y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-balance font-extrabold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl"
          >
            <span className="relative inline-block">
              <span className="glitch before:content-['Wear_Your_Attitude'] after:content-['Wear_Your_Attitude']">Wear Your Attitude</span>
            </span>
          </motion.h1>
          <motion.p
            initial={prefersReduced ? false : { y: 16, opacity: 0 }}
            animate={prefersReduced ? {} : { y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-xl text-white/80"
          >
            Velamen: rebellious streetwear with neon energy. Dark-mode first. Built for the culture.
          </motion.p>

          <motion.div
            initial={prefersReduced ? false : { y: 16, opacity: 0 }}
            animate={prefersReduced ? {} : { y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <span className="relative z-10">Shop New Drops</span>
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-active:opacity-100"
                style={{
                  background:
                    'radial-gradient(120px 120px at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.2), transparent 60%)',
                }}
              />
            </button>
            <a
              href="#tryon"
              className="rounded-xl bg-[var(--accent,#00F0FF)] px-6 py-3 font-black text-black transition-transform hover:scale-[1.03] active:scale-95"
            >
              See Yourself →
            </a>
          </motion.div>
        </div>

        {/* Floating badge */}
        <div className="md:col-span-5">
          <div
            ref={badgeRef}
            className="relative rounded-3xl border border-white/15 bg-black/40 p-6 shadow-2xl backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-widest text-white/70">Velamen</p>
              <span className="inline-flex animate-pulse items-center gap-2 rounded-full bg-[var(--accent,#00F0FF)]/20 px-3 py-1 text-xs font-bold text-[var(--accent,#00F0FF)]">
                New Drop
                <span className="h-2 w-2 rounded-full bg-[var(--accent,#00F0FF)]" />
              </span>
            </div>
            <p className="mt-3 text-2xl font-extrabold">SIGMA Energy Capsule</p>
            <p className="text-sm text-white/70">Oversized graphics. Electric hues. Limited units.</p>
            <div className="mt-4 flex gap-3">
              {["https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop"].map((src) => (
                <img key={src} src={src} alt="capsule preview" loading="lazy" className="h-20 w-20 rounded-lg object-cover" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glitch { position: relative; display:inline-block; }
        .glitch:before, .glitch:after { position:absolute; left:0; top:0; color:#00F0FF; clip-path: inset(0 0 0 0); }
        .glitch:after { color:#FF006E; mix-blend: screen; }
        @media (prefers-reduced-motion: no-preference) {
          .glitch:before { transform: translate(1px, -1px); animation: g1 2s infinite linear alternate; }
          .glitch:after { transform: translate(-1px, 1px); animation: g2 2.2s infinite linear alternate; }
          @keyframes g1 { 0%{clip-path: inset(0 0 75% 0)} 50%{clip-path: inset(20% 0 20% 0)} 100%{clip-path: inset(75% 0 0 0)} }
          @keyframes g2 { 0%{clip-path: inset(0 0 70% 0)} 50%{clip-path: inset(30% 0 15% 0)} 100%{clip-path: inset(80% 0 0 0)} }
        }
      `}</style>
    </section>
  );
};

export default Hero;
