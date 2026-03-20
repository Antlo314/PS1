import React from 'react';

export default function ReadingsSection() {
  return (
    <section className="snap-section bg-[#e9c46a] text-[#3F1677] flex flex-col justify-center px-6 lg:px-24">
      <div className="diamond-star top-10 right-10 scale-50 invert opacity-20"></div>
      <div className="diamond-star bottom-20 left-10 scale-100 invert opacity-20"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        <div className="space-y-6 lg:max-w-2xl">
          <h4 className="font-syne tracking-widest text-sm font-bold uppercase drop-shadow-sm opacity-90">Deep Insight</h4>
          <h2 className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] drop-shadow-md">
            READINGS WITH LAUREN
          </h2>
          <p className="text-xl font-bold max-w-md pt-2">
            Palm readings, astrology chart readings, and psychic readings to illuminate your precise path and relationships.
          </p>
          <p className="text-lg text-[#3F1677]/90 max-w-lg mb-8 pb-4">
            Lauren has spent over a decade honing her intuitive skills to provide the Macomb community with startling, genuine truths. Her readings cut through the noise.
          </p>
          <button 
            className="outline-button !border-[#3F1677] !text-[#3F1677] hover:!bg-[#3F1677] hover:!text-white"
            onClick={() => document.getElementById('section-7')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More <span className="text-[10px] border-[3px] border-[#3F1677] rounded-full w-3 h-3 inline-block ml-2"></span>
          </button>
        </div>

        <div className="w-full relative shadow-[0_20px_50px_rgba(63,22,119,0.3)] rounded-3xl overflow-hidden bg-white/40 p-2 backdrop-blur-md">
           <img src="/images/business_photos/photo_8.jpg" alt="Lauren Reading" className="rounded-2xl w-full aspect-square object-cover border border-[#3F1677]/20" />
        </div>
      </div>
    </section>
  );
}
