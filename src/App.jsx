import React, { useState, useEffect } from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import EmojiClickLayer from './components/EmojiClickLayer';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import ServicesSection from './components/ServicesSection';
import CrystalsSection from './components/CrystalsSection';
import LoveLifeSection from './components/LoveLifeSection';
import ReconnectingSection from './components/ReconnectingSection';
import ReadingsSection from './components/ReadingsSection';
import ShadowReleaseSection from './components/ShadowReleaseSection';
import ReviewsSection from './components/ReviewsSection';
import LeadCapture from './components/LeadCapture';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = document.getElementById('snap-container');
    const handleScroll = () => {
      if(!container) return;
      const index = Math.round(container.scrollTop / window.innerHeight);
      setActiveSection(index);
    };
    container?.addEventListener('scroll', handleScroll, { passive: true });
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const TOTAL_SECTIONS = 11; // 10 main sections + footer

  return (
    <div className="font-sans antialiased text-white selection:bg-black selection:text-white h-screen w-full overflow-hidden">
      <EmojiClickLayer />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-start pointer-events-none mix-blend-difference">
        <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center pointer-events-auto">
          <img src="/images/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
        </div>
        <div className="flex flex-col items-end pointer-events-auto">
          <div className="flex gap-5 text-white mb-2 drop-shadow-md">
            <a href="#" className="hover:scale-110 transition-transform"><Instagram size={24} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Mail size={24} /></a>
            <a href="tel:+1" className="hover:scale-110 transition-transform"><Phone size={24} /></a>
          </div>
          <span className="font-bold text-sm md:text-base tracking-wide text-white drop-shadow-lg">
            readings with lauren are by appointment only
          </span>
        </div>
      </header>

      {/* Side Dot Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[...Array(TOTAL_SECTIONS)].map((_, i) => (
          <button 
            key={i}
            onClick={() => {
              const el = document.getElementById(`section-${i}`);
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all ${activeSection === i ? 'bg-white scale-125' : 'bg-transparent shadow-sm mix-blend-difference'}`}
            aria-label={`Scroll to section ${i}`}
          />
        ))}
      </div>
      
      <main id="snap-container" className="snap-container">
        <div id="section-0"><HeroSection /></div>
        <div id="section-1"><WelcomeSection /></div>
        <div id="section-2"><ServicesSection /></div>
        <div id="section-3"><CrystalsSection /></div>
        <div id="section-4"><LoveLifeSection /></div>
        <div id="section-5"><ReconnectingSection /></div>
        <div id="section-6"><ReadingsSection /></div>
        <div id="section-7"><ShadowReleaseSection /></div>
        <div id="section-8"><ReviewsSection /></div>
        <div id="section-9"><LeadCapture /></div>
        
        {/* Footer */}
        <footer id="section-10" className="snap-section bg-[#FAFAFA] flex flex-col justify-center items-center px-6 relative z-10 text-center text-[#3F1677]">
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
        </footer>
      </main>
    </div>
  );
}
