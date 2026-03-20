import React from 'react';
import { Sparkles, Calendar, MapPin, Instagram, Facebook, Phone } from 'lucide-react';
import EmojiClickLayer from './components/EmojiClickLayer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import LeadCapture from './components/LeadCapture';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-amber-400 selection:text-black">
      <EmojiClickLayer />
      
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 rounded-none bg-opacity-80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="text-amber-400" size={24} />
            <h1 className="text-xl font-bold tracking-widest text-white uppercase">Psychic of Macomb</h1>
          </div>
          <a href="#booking" className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-2 rounded-full font-semibold transition-all">
            <Calendar size={18} /> Book Reading
          </a>
        </div>
      </header>
      
      <main>
        <HeroSection />
        <ServicesSection />
        <ReviewsSection />
        <LeadCapture />
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-purple-900/30 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-amber-400" size={24} />
            <span className="text-xl font-bold tracking-widest uppercase text-white">Psychic of Macomb</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Providing clarity, guidance, and spiritual healing to all who seek truth.</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-colors">
              <Facebook size={20} />
            </a>
            <a href="tel:+1" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-colors">
              <Phone size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-colors">
              <MapPin size={20} />
            </a>
          </div>
          
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Psychic of Macomb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
