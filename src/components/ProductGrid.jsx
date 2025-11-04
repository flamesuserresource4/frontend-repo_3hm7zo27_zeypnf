import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 'tee-1',
    title: 'Neon Flux Tee',
    price: 38,
    imageFront: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1520975518943-01daca6e71f3?q=80&w=1200&auto=format&fit=crop',
    colors: ['#00f5d4', '#b5179e', '#3a86ff'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'tee-2',
    title: 'Retro Pixel Tee',
    price: 42,
    imageFront: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1520975900022-c1401e57c01a?q=80&w=1200&auto=format&fit=crop',
    colors: ['#ff006e', '#ffd166', '#06d6a0'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'tee-3',
    title: 'Oversize Cloud Tee',
    price: 45,
    imageFront: 'https://images.unsplash.com/photo-1520975961162-71b2bce38da6?q=80&w=1200&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1520975927605-77b2c1f49fae?q=80&w=1200&auto=format&fit=crop',
    colors: ['#a78bfa', '#22d3ee', '#94a3b8'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'tee-4',
    title: 'Glitch Core Tee',
    price: 40,
    imageFront: 'https://images.unsplash.com/photo-1520975711477-6b9f06e63d85?q=80&w=1200&auto=format&fit=crop',
    imageBack: 'https://images.unsplash.com/photo-1520975951221-9416b6e15161?q=80&w=1200&auto=format&fit=crop',
    colors: ['#00f5d4', '#ffbe0b', '#8338ec'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

const ProductCard = ({ p, onAdd, onTry }) => {
  const [hover, setHover] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition dark:border-white/10 dark:bg-zinc-900"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={prefersReduced ? false : { y: 24, opacity: 0 }}
      whileInView={prefersReduced ? {} : { y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={hover ? p.imageBack : p.imageFront}
          alt={p.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
          <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur dark:bg-white/20">
            {p.title}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-black shadow-sm dark:bg-black/60 dark:text-white">
            ${p.price}
          </span>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <div className="flex items-center gap-1">
          {p.colors.map((c) => (
            <span key={c} className="h-4 w-4 rounded-full border border-black/10 dark:border-white/20" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onTry(p)}
            className="rounded-full border border-black/10 px-3 py-2 text-xs font-semibold transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            Try On
          </button>
          <button
            onClick={() => onAdd(p)}
            className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:brightness-110 dark:bg-white dark:text-black"
          >
            <ShoppingBag className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CartFlyout = ({ item, onClose }) => (
  <AnimatePresence>
    {item && (
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 400, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="fixed right-4 top-4 z-50 w-72 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-zinc-900"
      >
        <div className="flex items-center gap-3">
          <img src={item.imageFront} alt={item.title} className="h-16 w-16 rounded-lg object-cover" />
          <div>
            <p className="font-bold">Added to cart</p>
            <p className="text-sm text-muted-foreground">{item.title}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold">Subtotal</span>
          <span className="text-sm font-bold">${item.price}</span>
        </div>
        <div className="mt-3 flex gap-2">
          <a href="#" className="flex-1 rounded-full bg-black px-3 py-2 text-center text-sm font-bold text-white dark:bg-white dark:text-black">Checkout</a>
          <button onClick={onClose} className="rounded-full px-3 py-2 text-sm">Close</button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const TryOnToast = ({ product, onDismiss }) => (
  <AnimatePresence>
    {product && (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="fixed bottom-24 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-zinc-900"
      >
        <p className="text-sm">
          Instant preview queued. Upload your photo in Profile to personalize your try-on. ✨
        </p>
        <div className="mt-3 flex items-center gap-3">
          <img src={product.imageFront} alt={product.title} className="h-14 w-14 rounded-lg object-cover" />
          <div className="text-sm">
            <p className="font-semibold">{product.title}</p>
            <p className="text-muted-foreground">We’ll swap the model with your pic.</p>
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <button onClick={onDismiss} className="rounded-full px-3 py-1 text-sm underline">Dismiss</button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ProductGrid = () => {
  const [added, setAdded] = useState(null);
  const [tryOn, setTryOn] = useState(null);

  return (
    <section id="shop" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold">Fresh Picks</h2>
          <p className="text-sm text-muted-foreground">Slide up, fade in — optimized for your scroll.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            p={p}
            onAdd={(item) => {
              setAdded(item);
              setTimeout(() => setAdded(null), 3000);
            }}
            onTry={(item) => {
              setTryOn(item);
              setTimeout(() => setTryOn(null), 3000);
            }}
          />
        ))}
      </div>

      <CartFlyout item={added} onClose={() => setAdded(null)} />
      <TryOnToast product={tryOn} onDismiss={() => setTryOn(null)} />
    </section>
  );
};

export default ProductGrid;
