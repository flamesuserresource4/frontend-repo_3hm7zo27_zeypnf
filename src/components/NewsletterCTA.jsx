import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const NewsletterCTA = () => {
  const prefersReduced = useReducedMotion();
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={prefersReduced ? false : { y: 20, opacity: 0 }}
        whileInView={prefersReduced ? {} : { y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 text-[#F5F5F5] shadow-2xl"
      >
        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-[1] rotate-6 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.15),_transparent_60%)]" />
          <h4 className="text-2xl font-black">Get early access to drops</h4>
          <p className="mt-1 text-sm text-white/70">No spam. Only heat. Unsubscribe anytime.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed to Velamen!');
            }}
            className="mt-5 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@velamen.com"
              className="w-full rounded-xl border border-white/15 bg-[#0A0A0A] px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[var(--accent,#00F0FF)]"
            />
            <button
              type="submit"
              className="rounded-xl bg-[var(--accent,#00F0FF)] px-6 py-3 font-black text-black shadow-2xl transition-transform hover:scale-[1.02] active:scale-95"
            >
              Join the list
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsletterCTA;
