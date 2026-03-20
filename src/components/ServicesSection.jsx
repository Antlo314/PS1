import React from 'react';
import { Sparkles, Heart, Moon } from 'lucide-react';
import VideoPlaceholder from './VideoPlaceholder';

const SERVICES = [
  { icon: <Sparkles className="text-amber-400" size={32} />, title: "Tarot Card Reading", desc: "Personalized card spreads for clarity, guidance, and insight into life's questions." },
  { icon: <Heart className="text-pink-400" size={32} />, title: "Love Life Cleansing", desc: "Clear heavy or painful patterns so new, healthy connections can flow in." },
  { icon: <Moon className="text-purple-400" size={32} />, title: "Energy Alignment", desc: "Restore authentic healing with people-first energy to align your mind, body, and spirit." },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-black/40 relative z-10" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient-text">Our Mystical Services</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Authentic healing and spiritual services by appointment. We focus on people-first energy and profound, genuine guidance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((s, i) => (
            <div key={i} className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(88,28,135,0.6)]">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass-panel p-8 md:p-12 overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Experience the Healing</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Whether you need shoulder and tension relief, migraine support, or a deep shadow release clearing, our spaces are designed to facilitate profound healing. Watch how we transform energy.
            </p>
          </div>
          <div className="w-full relative z-10">
            <VideoPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
