import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, Grid3X3, ShoppingBag, User, Palette, Sun, Moon, Instagram, Youtube } from 'lucide-react';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import MasonryGrid from './components/MasonryGrid';
import NewsletterCTA from './components/NewsletterCTA';

const ACCENTS = [
  { name: 'Electric Blue', value: '#00F0FF' },
  { name: 'Neon Green', value: '#39FF14' },
  { name: 'Hot Pink', value: '#FF006E' },
];

function App() {
  const [dark, setDark] = useState(() => true);
  const [accent, setAccent] = useState(() => localStorage.getItem('accent') || ACCENTS[0].value);
  const prefersReduced = useReducedMotion();

  useEffect(() => { localStorage.setItem('accent', accent); }, [accent]);
  const rootStyle = useMemo(() => ({ ['--accent']: accent }), [accent]);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]" style={rootStyle}>
        {/* Navbar */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/85 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#" className="text-xl font-black tracking-tight">
              <span className="mr-2 inline-block h-3 w-3 rounded-sm" style={{ background: 'var(--accent)' }} />
              Velamen
            </a>
            <div className="flex items-center gap-2">
              <div className="relative">
                <details>
                  <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-white/90 hover:bg-white/10">
                    <Palette className="h-4 w-4" /> Accent
                  </summary>
                  <div className="absolute right-0 mt-2 w-52 rounded-xl border border-white/15 bg-[#0A0A0A] p-3 shadow-2xl">
                    <div className="grid grid-cols-3 gap-2">
                      {ACCENTS.map((a) => (
                        <button
                          key={a.value}
                          aria-label={a.name}
                          onClick={() => setAccent(a.value)}
                          style={{ background: a.value }}
                          className={`h-8 rounded-lg ${accent === a.value ? 'ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[#0A0A0A]' : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                </details>
              </div>
              <button
                onClick={() => setDark((d) => !d)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-white/90 hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {dark ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        </header>

        {/* Pages composed */}
        <Hero />
        <FeaturedCollections />
        <MasonryGrid />
        <NewsletterCTA />

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0A0A0A] py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="text-lg font-extrabold tracking-tight">Velamen</p>
                <p className="text-sm text-white/60">Streetwear with attitude.</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
            <motion.p
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={prefersReduced ? {} : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-6 text-center text-xs text-white/50"
            >
              © {new Date().getFullYear()} Velamen. All rights reserved.
            </motion.p>
          </div>
        </footer>

        {/* Sticky bottom nav (mobile) */}
        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0A0A]/90 backdrop-blur sm:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-around px-2 py-2 text-xs">
            <a href="#" className="flex flex-col items-center"><Home className="h-5 w-5" />Home</a>
            <a href="#shop" className="flex flex-col items-center"><Grid3X3 className="h-5 w-5" />Shop</a>
            <a href="#" className="flex flex-col items-center"><ShoppingBag className="h-5 w-5" />Cart</a>
            <a href="#" className="flex flex-col items-center"><User className="h-5 w-5" />Profile</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
