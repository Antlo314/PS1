import React from 'react';

export default function CrystalsSection() {
  return (
    <section className="snap-section bg-[#f4a261] text-white flex flex-col justify-center px-6 lg:px-24">
      {/* Decorative Elements */}
      <div className="diamond-star top-12 left-12 scale-50"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 md:grid-flow-col-dense md:flex-row-reverse">
        
        {/* Swapped order for visual variation */}
        <div className="w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden bg-white/20 p-2 backdrop-blur-md md:col-start-2">
           <img src="/images/business_photos/photo_4.jpg" alt="Crystals" className="rounded-2xl w-full aspect-square object-cover border border-white/30" />
        </div>

        <div className="space-y-6 lg:max-w-2xl md:col-start-1">
          <h4 className="font-syne tracking-widest text-sm font-bold uppercase drop-shadow-sm opacity-90">Spiritual Tools</h4>
          <h2 className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] drop-shadow-md">
            CRYSTALS AND MORE
          </h2>
          <p className="text-xl font-bold max-w-md pt-2 drop-shadow-sm">
            Small crystal bundles for daily stress reduction and numbness support.
          </p>
          <p className="text-lg text-white/90 max-w-lg mb-8 pb-4">
            Our curated crystal packages are designed specifically to ground your energy and provide relief through ancient vibrational frequencies.
          </p>
          <button 
            className="outline-button hover:scale-105"
            onClick={() => document.getElementById('section-4')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More <span className="text-[10px] border-[3px] border-white rounded-full w-3 h-3 inline-block ml-2"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
