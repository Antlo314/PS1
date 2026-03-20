import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const IMAGES = [
  "/images/business_photos/tarot_reading_target.jpg",
  "/images/business_photos/photo_2.jpg",
  "/images/business_photos/photo_3.jpg"
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="snap-section bg-[#3F1677] flex flex-col justify-center items-center">
      {/* Background Rotating Images */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-overlay">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={IMAGES[index]}
            initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Psychic Background"
          />
        </AnimatePresence>
      </div>

      {/* Center White Square Logo */}
      <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center p-6 transition-transform hover:scale-105 duration-500">
        <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Bottom Scroll Prompt */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer text-white" 
        onClick={() => document.getElementById('section-1')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-syne font-bold tracking-widest uppercase text-sm drop-shadow-md">Scroll to Explore</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}
