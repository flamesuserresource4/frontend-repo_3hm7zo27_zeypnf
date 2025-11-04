import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, Grid3X3, Camera, ShoppingBag, User, Sun, Moon, Palette, Instagram, Youtube, Music2 } from 'lucide-react';
import Hero from './components/Hero';
import CategoryCarousel from './components/CategoryCarousel';
import ProductGrid from './components/ProductGrid';
import BrandStory from './components/BrandStory';

const ACCENTS = [
  { name: 'Neon Pink', value: '#ff1e9c' },
  { name: 'Electric Blue', value: '#3a86ff' },
  { name: 'Lime', value: '#a3e635' },
  { name: 'Cyan', value: '#00f5d4' },
];

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [accent, setAccent] = useState(() => localStorage.getItem('accent') || ACCENTS[0].value);
  const [layout, setLayout] = useState(() => localStorage.getItem('layout') || 'grid');
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  useEffect(() => {
    localStorage.setItem('accent', accent);
  }, [accent]);
  useEffect(() => {
    localStorage.setItem('layout', layout);
  }, [layout]);

  const rootStyle = useMemo(() => ({ ['--accent']: accent }), [accent]);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50" style={rootStyle}>
        {/* Top Bar */}
        <header className="sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <a href="#" className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--accent)' }}>BRV</a>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark((d) => !d)}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs font-semibold hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {dark ? 'Light' : 'Dark'}
              </button>
              <div className="relative">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs font-semibold hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
                    <Palette className="h-4 w-4" /> Accent
                  </summary>
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-black/10 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-zinc-900">
                    <div className="grid grid-cols-4 gap-2">
                      {ACCENTS.map((a) => (
                        <button
                          key={a.value}
                          onClick={() => setAccent(a.value)}
                          style={{ backgroundColor: a.value }}
                          className={`h-8 rounded-lg border ${accent === a.value ? 'ring-2 ring-offset-2 ring-[var(--accent)]' : ''}`}
                          aria-label={a.name}
                        />
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">Pick your pop. It updates the whole vibe.</div>
                  </div>
                </details>
              </div>
              <div className="relative">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs font-semibold hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
                    Layout
                  </summary>
                  <div className="absolute right-0 mt-2 w-48 rounded-xl border border-black/10 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-zinc-900">
                    <button onClick={() => setLayout('grid')} className={`block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-black/5 ${layout === 'grid' ? 'font-bold' : ''}`}>Grid</button>
                    <button onClick={() => setLayout('hero')} className={`mt-1 block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-black/5 ${layout === 'hero' ? 'font-bold' : ''}`}>Full-width hero</button>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className={layout === 'hero' ? '' : ''}>
          <Hero onTryOn={() => window.location.assign('#shop')} />
        </div>

        {/* Categories */}
        <CategoryCarousel />

        {/* Products */}
        <ProductGrid />

        {/* Brand Story */}
        <BrandStory />

        {/* Footer */}
        <footer className="border-t border-black/5 bg-white py-10 dark:border-white/10 dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="text-lg font-extrabold tracking-tight" style={{ color: 'var(--accent)' }}>BRV</p>
                <p className="text-sm text-muted-foreground">Gen Z streetwear. Built with heart.</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="rounded-full border border-black/10 p-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="TikTok" className="rounded-full border border-black/10 p-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"><Music2 className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="rounded-full border border-black/10 p-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>

            {/* Newsletter pop-in */}
            <motion.div
              initial={prefersReduced ? false : { y: 20, opacity: 0 }}
              whileInView={prefersReduced ? {} : { y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-8 max-w-xl rounded-2xl border border-black/10 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-zinc-900"
            >
              <p className="text-center text-sm">Get drops before everyone else. No spam, pinky promise.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Subscribed!');
                }}
                className="mt-3 flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="your@email"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)] dark:border-white/10 dark:bg-zinc-800"
                />
                <button type="submit" className="whitespace-nowrap rounded-xl bg-black px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-black">Join</button>
              </form>
            </motion.div>

            <p className="mt-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} BRV. All rights reserved.</p>
          </div>
        </footer>

        {/* Sticky bottom nav (mobile) */}
        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-zinc-950/80 sm:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-around px-2 py-2">
            <a href="#" className="flex flex-col items-center text-xs"><Home className="h-5 w-5" />Home</a>
            <a href="#categories" className="flex flex-col items-center text-xs"><Grid3X3 className="h-5 w-5" />Categories</a>
            <a href="#shop" className="flex flex-col items-center text-xs"><ShoppingBag className="h-5 w-5" />Cart</a>
            <a href="#shop" className="flex flex-col items-center text-xs"><Camera className="h-5 w-5" />Try-On</a>
            <a href="#" className="flex flex-col items-center text-xs"><User className="h-5 w-5" />Profile</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
