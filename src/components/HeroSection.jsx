import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const IMAGES = [
  "https://lh3.googleusercontent.com/p/AF1QipMoqIL6ffLw_y5FwSuDam39HdVlmKV8spcZq_WC=s0",
  "https://lh3.googleusercontent.com/p/AF1QipN_8RKDgAW50T03UVesHbqvKx1uoHOB-pWgYTdy=s0",
  "https://lh3.googleusercontent.com/p/AF1QipM4e_lwZHMgnD_ECWx65SwitXcCZ98KeM_9GNH3=s0"
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Area */}
        <div className="z-10 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Find Clarity.<br/>
            <span className="gold-gradient-text">Embrace Your Path.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-lg"
          >
            Psychic of Macomb offers deeply intuitive tarot readings, crystal healing, and energy clearing to help you navigate life's toughest questions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#booking" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
              Schedule Your Session <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>

        {/* Rotating Images */}
        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden glass-panel">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={IMAGES[index]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Psychic of Macomb Reading"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a14] via-transparent to-transparent opacity-90" />
        </div>
      </div>
    </section>
  );
}
