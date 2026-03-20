import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#b666d2] overflow-hidden flex flex-col justify-center items-center px-6 pt-24 text-center">
      
      {/* Background Rotating Images (opacity very low) */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-30 mix-blend-overlay">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={IMAGES[index]}
            initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Psychic Background Drift"
          />
        </AnimatePresence>
      </div>

      {/* Decorative Stars */}
      <div className="diamond-star top-1/4 right-1/4 scale-75"></div>
      <div className="diamond-star bottom-1/4 left-1/4 scale-125"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h4 className="font-syne tracking-widest text-sm md:text-base font-bold mb-4">Welcome</h4>
        
        <h1 className="font-syne text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 drop-shadow-md">
          WELCOME TO PSYCHIC OF MACOMB!
        </h1>
        
        <p className="text-xl md:text-2xl font-bold mb-6 text-white/90">
          Pain relief, energy alignment, and spiritual services.
        </p>

        <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-12 leading-relaxed">
          We believe physical discomfort often begins as energetic imbalance. Restore harmony through crystal therapy, psychic insight, and frequency-based care— for you and your best friends.
        </p>

        <a href="#services" className="outline-button hover:scale-105 inline-block">
          Explore More! ✨
        </a>
      </div>
      
      {/* 3D Orb Asset Mimic */}
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute right-[10%] bottom-[20%] text-9xl z-20 pointer-events-none drop-shadow-2xl"
      >
        🔮
      </motion.div>
    </section>
  );
}
