import React from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import EmojiClickLayer from './components/EmojiClickLayer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import LeadCapture from './components/LeadCapture';

export default function App() {
  return (
    <div className="font-sans antialiased text-white selection:bg-black selection:text-white">
      <EmojiClickLayer />
      
      {/* Transparent Fixed Header matching reference site */}
      <header className="fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-start pointer-events-none">
        
        {/* Placeholder Logo / White Square */}
        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center pointer-events-auto">
          <img src="/images/logo.png" alt="Logo" className="w-14 h-14 object-contain" />
        </div>
        
        <div className="flex flex-col items-end pointer-events-auto">
          <div className="flex gap-5 text-white mb-2 drop-shadow-md">
            <a href="#" className="hover:scale-110 transition-transform"><Instagram size={24} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Mail size={24} /></a>
            <a href="tel:+1" className="hover:scale-110 transition-transform"><Phone size={24} /></a>
          </div>
          <span className="font-bold text-sm md:text-base tracking-wide text-white drop-shadow-lg drop-shadow-black">
            readings with lauren are by appointment only
          </span>
        </div>
      </header>
      
      <main>
        <HeroSection />
        <ServicesSection />
        <ReviewsSection />
        <LeadCapture />
      </main>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] py-20 px-6 relative z-10 text-center text-[#3F1677]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-28 h-28 bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center mb-10">
            <img src="/images/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
          </div>
          
          <div className="flex justify-center gap-10 mb-12">
            <a href="#" className="hover:text-[#A855F7] hover:-translate-y-1 transition-all"><Instagram size={32} /></a>
            <a href="#" className="hover:text-[#A855F7] hover:-translate-y-1 transition-all"><Mail size={32} /></a>
            <a href="tel:+1" className="hover:text-[#A855F7] hover:-translate-y-1 transition-all"><Phone size={32} /></a>
            <a href="#" className="hover:text-[#A855F7] hover:-translate-y-1 transition-all"><MapPin size={32} /></a>
          </div>
          
          <p className="text-gray-500 font-bold tracking-widest uppercase text-sm">© {new Date().getFullYear()} Psychic of Macomb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
