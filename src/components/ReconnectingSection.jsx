import React from 'react';

export default function ReconnectingSection() {
  return (
    <section className="snap-section bg-[#2a9d8f] text-white flex flex-col justify-center px-6 lg:px-24 text-center">
      <div className="diamond-star top-1/4 left-10 scale-75 opacity-10"></div>
      <div className="diamond-star bottom-1/4 right-10 scale-[1.5] opacity-10"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">
        <h4 className="font-syne tracking-widest text-sm font-bold uppercase drop-shadow-sm opacity-90 mb-4">Reunion Rituals</h4>
        <h2 className="font-syne text-5xl md:text-6xl lg:text-8xl font-extrabold leading-[1.05] drop-shadow-md mb-8">
          RECONNECTING WITH A LOVED ONE
        </h2>
        
        <p className="text-2xl md:text-3xl font-bold max-w-3xl drop-shadow-sm mb-6">
          A focused ritual to help reopen the path to a past lover or missed connection that is still meant to be in your life.
        </p>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-12">
          When timing, circumstance, or unsaid words break a bond, this profound ritual creates active spiritual channels to safely invite them back into your space, guided by high truth.
        </p>

        <button 
          className="outline-button hover:scale-105"
          onClick={() => document.getElementById('section-6')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Rituals <span className="text-[10px] border-[3px] border-white rounded-full w-3 h-3 inline-block ml-2"></span>
        </button>
      </div>
    </section>
  );
}
