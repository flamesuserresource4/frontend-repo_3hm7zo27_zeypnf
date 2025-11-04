import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const collections = [
  {
    id: 'sigma',
    title: 'SIGMA Energy',
    image: 'https://images.unsplash.com/photo-1646122580600-4d6cffc926fe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTSUdNQSUyMEVuZXJneXxlbnwwfDB8fHwxNzYyMjcwNTU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Electric palettes. Bold type. Peak confidence.',
    accent: '#00F0FF',
  },
  {
    id: 'racing',
    title: 'Street Racing',
    image: 'https://images.unsplash.com/photo-1500741236341-1b7a0f91f1f6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJlZXQlMjBSYWNpbmd8ZW58MHwwfHx8MTc2MjI3MDU1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Turbo graphics. Asphalt ready fits.',
    accent: '#39FF14',
  },
  {
    id: 'nature',
    title: 'Nature Loud',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop',
    desc: 'Earth meets neon. Wild silhouettes.',
    accent: '#FF006E',
  },
];

const FeaturedCollections = () => {
  const prefersReduced = useReducedMotion();
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-14">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl font-extrabold text-[#F5F5F5]">Featured Collections</h2>
        <p className="text-sm text-white/50">Parallax scroll</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {collections.map((c, i) => (
          <motion.a
            key={c.id}
            href="#shop"
            initial={prefersReduced ? false : { y: 24, opacity: 0 }}
            whileInView={prefersReduced ? {} : { y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] ${
              i === 0 ? 'md:col-span-7' : i === 1 ? 'md:col-span-5' : 'md:col-span-12'
            }`}
            style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04) inset` }}
          >
            <img src={c.image} alt={c.title} loading="lazy" className="h-72 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 md:h-96" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: `${c.accent}33`, color: c.accent }}>
                New
              </span>
              <p className="mt-2 text-2xl font-black text-white">{c.title}</p>
              <p className="text-sm text-white/70">{c.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
