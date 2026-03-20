import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const IMAGES_COL_1 = [
  "/images/business_photos/photo_2.jpg",
  "/images/business_photos/photo_3.jpg",
  "/images/business_photos/photo_4.jpg",
  "/images/business_photos/photo_5.jpg",
];
const IMAGES_COL_2 = [
  "/images/business_photos/tarot_reading_target.jpg",
  "/images/business_photos/photo_6.jpg",
  "/images/business_photos/photo_7.jpg",
  "/images/business_photos/photo_8.jpg",
];
const IMAGES_COL_3 = [
  "/images/business_photos/photo_9.jpg",
  "/images/business_photos/photo_10.jpg",
  "/images/business_photos/photo_11.jpg",
  "/images/business_photos/photo_12.jpg",
];

const VerticalMarquee = ({ images, speed, direction = -1, className }) => {
  const loopedImages = [...images, ...images];
  
  return (
    <div className={`flex flex-col gap-6 w-32 md:w-56 lg:w-72 opacity-30 mix-blend-overlay ${className}`}>
      <motion.div
        animate={{ y: direction === -1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        className="flex flex-col gap-6"
      >
        {loopedImages.map((src, idx) => (
          <div key={idx} className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#3F1677]">
            <img src={src} className="w-full h-full object-cover grayscale-[20%] contrast-125" alt="Background Element" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="snap-section bg-[#3F1677] flex flex-col justify-center items-center overflow-hidden relative">
      
      {/* Vertical Floating Background Layout */}
      <div className="absolute inset-0 w-full h-[200vh] -top-[50vh] z-0 flex flex-row justify-center gap-4 md:gap-8 lg:gap-12 rotate-[-] pointer-events-none transform -rotate-6 scale-110 origin-center overflow-hidden">
        <VerticalMarquee images={IMAGES_COL_1} speed={25} direction={-1} className="-translate-y-20 hidden sm:flex" />
        <VerticalMarquee images={IMAGES_COL_2} speed={35} direction={1} className="" />
        <VerticalMarquee images={IMAGES_COL_3} speed={20} direction={-1} className="translate-y-10" />
      </div>

      {/* Center White Square Logo */}
      <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-white rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.7)] flex items-center justify-center p-6 transition-transform hover:scale-105 duration-500 border border-white/20">
        <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Bottom Scroll Prompt */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer text-white" 
        onClick={() => document.getElementById('section-1')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-syne font-bold tracking-widest uppercase text-sm drop-shadow-lg text-white">Scroll to Explore</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={32} className="drop-shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}
