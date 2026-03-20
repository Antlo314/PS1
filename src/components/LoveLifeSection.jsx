import React from 'react';

export default function LoveLifeSection() {
  return (
    <section className="snap-section bg-[#e76f51] text-white flex flex-col justify-center px-6 lg:px-24">
      <div className="diamond-star bottom-20 right-20 scale-100 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        <div className="space-y-6 lg:max-w-2xl">
          <h4 className="font-syne tracking-widest text-sm font-bold uppercase drop-shadow-sm opacity-90">Heart Healing</h4>
          <h2 className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] drop-shadow-md">
            CLEANSING YOUR LOVE LIFE
          </h2>
          <p className="text-xl font-bold max-w-md pt-2 drop-shadow-sm">
            Clear heavy, stuck, or painful patterns in your love life so new, healthy connection can flow in.
          </p>
          <p className="text-lg text-white/90 max-w-lg mb-8 pb-4">
            Past romantic trauma leaves energetic scar tissue. This dedicated clearing service actively unblocks your heart chakra to invite beautiful, balanced partnerships.
          </p>
          <button 
            className="outline-button hover:scale-105"
            onClick={() => document.getElementById('section-5')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More <span className="text-[10px] border-[3px] border-white rounded-full w-3 h-3 inline-block ml-2"></span>
          </button>
        </div>

        <div className="w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden bg-white/20 p-2 backdrop-blur-md">
           <img src="/images/business_photos/photo_7.jpg" alt="Love Ritual" className="rounded-2xl w-full aspect-[4/3] object-cover border border-white/30" />
        </div>
      </div>
    </section>
  );
}
