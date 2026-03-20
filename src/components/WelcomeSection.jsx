import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomeSection() {
  return (
    <section className="snap-section bg-[#B87EE4] flex flex-col justify-center items-center px-6 text-center text-white">
      
      {/* Decorative Stars */}
      <div className="diamond-star top-[20%] right-[15%] scale-75"></div>
      <div className="diamond-star bottom-[20%] left-[20%] scale-100"></div>
      
      {/* 3D Orb Asset Mimic */}
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute right-[10%] top-[40%] text-8xl md:text-9xl z-20 pointer-events-none drop-shadow-2xl"
      >
        🔮
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <h4 className="font-syne tracking-widest text-sm md:text-base font-bold mb-4 drop-shadow-sm uppercase">Welcome</h4>
        
        <h1 className="font-syne text-5xl md:text-8xl font-extrabold leading-[1.05] mb-6 drop-shadow-md text-white">
          WELCOME TO PSYCHIC & CRYSTAL BOOKSHOP!
        </h1>
        
        <p className="text-xl md:text-3xl font-bold mb-8 text-white/95">
          Pain relief, energy alignment, and spiritual services.
        </p>

        <p className="text-lg md:text-2xl text-white/80 max-w-4xl mb-12 leading-relaxed">
          We believe physical discomfort often begins as energetic imbalance. Restore harmony through crystal therapy, psychic insight, and frequency-based care— for you and your best friends.
        </p>

        <button 
          className="outline-button"
          onClick={() => document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore More! ✨
        </button>
      </div>
    </section>
  );
}
