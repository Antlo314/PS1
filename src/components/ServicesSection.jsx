import React from 'react';
import { Sparkles, Heart, Moon } from 'lucide-react';
import VideoPlaceholder from './VideoPlaceholder';

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen bg-[#8eb8d4] text-white flex flex-col justify-center px-6 py-24" id="services">
      {/* Decorative Stars */}
      <div className="diamond-star top-10 right-10 scale-50"></div>
      <div className="diamond-star bottom-20 left-10 scale-100"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        <div className="space-y-6 lg:max-w-xl">
          <h4 className="font-syne tracking-widest text-sm font-bold uppercase drop-shadow-sm opacity-90">Intuitive Readings</h4>
          <h2 className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] drop-shadow-md">
            TAROT CARD READING SESSION
          </h2>
          <p className="text-xl font-bold max-w-md pt-2">
            Personalized card spreads for clarity, guidance, and insight into life questions and decisions.
          </p>
          <p className="text-lg text-white/90 max-w-lg mb-8 pb-4">
            Gain clarity and guidance through a one-on-one tarot reading tailored to your questions. Let the cards illuminate your path.
          </p>
          <a href="#booking" className="outline-button hover:scale-105">
            Learn More <span className="text-[10px] border-[3px] border-white rounded-full w-3 h-3 inline-block ml-2"></span>
          </a>
        </div>

        <div className="w-full relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white/10 p-2 backdrop-blur-sm">
          <div className="rounded-2xl overflow-hidden">
            <VideoPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
