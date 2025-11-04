import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'graphic', label: 'Graphic Tees', color: '#22d3ee', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop' },
  { id: 'oversize', label: 'Oversize Shirts', color: '#a78bfa', image: 'https://images.unsplash.com/photo-1621446511130-0ed6519bfeb6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmFwaGljJTIwVGVlc3xlbnwwfDB8fHwxNzYyMjY5OTc0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'custom', label: 'Custom Prints', color: '#fb7185', image: 'https://images.unsplash.com/photo-1621446511130-0ed6519bfeb6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmFwaGljJTIwVGVlc3xlbnwwfDB8fHwxNzYyMjY5OTc0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'limited', label: 'Limited Drops', color: '#34d399', image: 'https://images.unsplash.com/photo-1621446511130-0ed6519bfeb6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmFwaGljJTIwVGVlc3xlbnwwfDB8fHwxNzYyMjY5OTc0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const CategoryCarousel = () => {
  return (
    <section id="categories" className="relative mx-auto max-w-7xl px-6 py-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Shop by Vibe</h2>
        <p className="text-sm text-muted-foreground">Swipe →</p>
      </div>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {categories.map((cat, idx) => (
          <motion.a
            key={cat.id}
            href={`#shop`}
            className="group relative aspect-[4/3] w-72 shrink-0 snap-start overflow-hidden rounded-2xl bg-black"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="text-lg font-bold text-white">{cat.label}</span>
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: cat.color }} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CategoryCarousel;
