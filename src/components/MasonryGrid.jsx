import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

const items = [
  {
    id: 'n1',
    title: 'YES I\'M DIFFERENT',
    price: 39,
    src: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    alt: 'Bold graphic tee',
    tall: true,
    badge: 'Virtual Try-On',
  },
  {
    id: 'n2',
    title: 'STAY REAL',
    price: 42,
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Street look',
    tall: false,
    badge: 'Trending',
  },
  {
    id: 'n3',
    title: 'SIGMA ENERGY',
    price: 49,
    src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop',
    alt: 'Urban portrait',
    tall: true,
    badge: 'New',
  },
  {
    id: 'n4',
    title: 'NATURE LOUD',
    price: 45,
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    alt: 'Green tones',
    tall: false,
    badge: 'Virtual Try-On',
  },
  {
    id: 'n5',
    title: 'STREET RACING',
    price: 44,
    src: 'https://images.unsplash.com/photo-1748465579870-d31c8d5ca7da?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYWNpbmclMjB2aWJlc3xlbnwwfDB8fHwxNzYyMjcwNTU3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Racing vibes',
    tall: false,
    badge: 'Hot',
  },
];

const MasonryCard = ({ item, onAdd, onWish }) => {
  const prefersReduced = useReducedMotion();
  return (
    <motion.article
      initial={prefersReduced ? false : { y: 24, opacity: 0 }}
      whileInView={prefersReduced ? {} : { y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] ${
        item.tall ? 'md:row-span-2' : 'md:row-span-1'
      }`}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
          item.tall ? 'md:h-[520px]' : 'md:h-[250px]'
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur">{item.badge}</span>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <p className="font-black text-white">{item.title}</p>
            <p className="text-sm text-white/70">${item.price}</p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Wishlist"
              onClick={() => onWish(item)}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20"
            >
              <Heart className="h-4 w-4" />
            </button>
            <button
              onClick={() => onAdd(item)}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent,#00F0FF)] px-3 py-2 font-bold text-black transition hover:brightness-110"
            >
              <ShoppingBag className="h-4 w-4" /> Add
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Toast = ({ text, onClose }) => (
  <AnimatePresence>
    {text && (
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        className="fixed bottom-24 left-1/2 z-50 w-[92%] max-w-sm -translate-x-1/2 rounded-2xl border border-white/15 bg-[#0A0A0A] p-4 text-[#F5F5F5] shadow-2xl"
      >
        <p className="text-sm">{text}</p>
        <div className="mt-3 text-right">
          <button onClick={onClose} className="rounded-full px-3 py-1 text-xs underline">Dismiss</button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MasonryGrid = () => {
  const [toast, setToast] = useState('');
  return (
    <section id="shop" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-baseline justify-between">
        <h3 className="text-3xl font-extrabold text-[#F5F5F5]">Instagram Grid</h3>
        <p className="text-sm text-white/50">Masonry · quick add</p>
      </div>
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 [column-fill:_balance]">
        <div className="grid auto-rows-[10px] gap-4 md:[&>*]:break-inside-avoid">
          {items.map((item) => (
            <MasonryCard
              key={item.id}
              item={item}
              onAdd={() => {
                setToast('Added to cart — cart drawer coming next.');
                setTimeout(() => setToast(''), 2600);
              }}
              onWish={() => {
                setToast('Saved to wishlist');
                setTimeout(() => setToast(''), 2000);
              }}
            />
          ))}
        </div>
      </div>
      <Toast text={toast} onClose={() => setToast('')} />
    </section>
  );
};

export default MasonryGrid;
