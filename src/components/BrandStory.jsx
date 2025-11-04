import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Feature = ({ title, text, emoji }) => (
  <div className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
    <div className="mb-2 text-2xl">{emoji}</div>
    <p className="font-bold">{title}</p>
    <p className="text-sm text-muted-foreground">{text}</p>
  </div>
);

const BrandStory = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.h3
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-2xl sm:text-3xl font-extrabold"
      >
        Why we’re different
      </motion.h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Feature title="Sustainable" text="Ethical fabrics, low-waste prints, shipped plastic-free." emoji="🌱" />
        <Feature title="Inclusive" text="Sizes that fit real bodies and photography that celebrates you." emoji="🤝" />
        <Feature title="Transparent" text="We show costs, margins, and the makers behind every drop." emoji="🔍" />
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-black/90 p-0 dark:border-white/10">
        <div className="aspect-video w-full">
          <video
            className="h-full w-full object-cover"
            src="https://videos.pexels.com/video-files/7975308/7975308-uhd_2560_1440_24fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="p-5 text-white">
          <p className="text-lg font-bold">Behind the scenes</p>
          <p className="text-sm text-white/70">Meet our makers. See the process. Hold us accountable.</p>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
