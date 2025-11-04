import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = ({ onTryOn }) => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for vibe */}
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen" aria-hidden>
        <div
          className="absolute -inset-1 blur-3xl"
          style={{
            background:
              'radial-gradient(60% 60% at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, var(--accent) 0%, transparent 60%), radial-gradient(50% 50% at 20% 80%, #22d3ee33 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl"
          style={{ lineHeight: 1.05 }}
        >
          Make It Yours
        </motion.h1>
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-balance text-base sm:text-lg text-white/80"
        >
          Youthful. Energetic. Slightly rebellious. Drop-ready fits for your vibe.
        </motion.p>
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onTryOn}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Try On Now <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
          </button>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Shop Drops
          </a>
        </motion.div>
      </div>

      {/* Parallax stripes */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 grid h-40 grid-cols-6 opacity-30" aria-hidden>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={prefersReduced ? false : { y: 20, opacity: 0 }}
            whileInView={prefersReduced ? {} : { y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="mx-1 rounded-t-3xl bg-gradient-to-t from-black to-transparent"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
