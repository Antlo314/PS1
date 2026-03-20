import React from 'react';
import VideoPlaceholder from './VideoPlaceholder';

export default function ShadowReleaseSection() {
  return (
    <section className="snap-section bg-[#264653] text-white flex flex-col justify-center px-6 lg:px-24">
      <div className="diamond-star top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.5] opacity-5"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 md:grid-flow-col-dense md:flex-row-reverse">
        
        <div className="w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-3xl overflow-hidden bg-white/10 p-2 backdrop-blur-md md:col-start-2">
          <div className="rounded-2xl overflow-hidden shadow-inner">
            <VideoPlaceholder />
          </div>
        </div>

        <div className="space-y-6 lg:max-w-2xl md:col-start-1">
          <h4 className="font-syne tracking-widest text-sm font-bold uppercase drop-shadow-sm opacity-90 text-teal-400">Deep Cleansing</h4>
          <h2 className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] drop-shadow-md">
            SHADOW RELEASE CLEARING
          </h2>
          <p className="text-xl font-bold max-w-md pt-2 drop-shadow-sm">
            Trauma-based tension release for shoulders, neck, and joints.
          </p>
          <p className="text-lg text-white/90 max-w-lg mb-8 pb-4">
            The body keeps the score. Our shadow release therapies target the physical manifestation of spiritual blocks, easing chronic joint tension and emotional armor.
          </p>
          <button 
            className="outline-button hover:scale-105 hover:!bg-teal-400 hover:!text-[#264653] !border-teal-400"
            onClick={() => document.getElementById('section-8')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More <span className="text-[10px] border-[3px] border-teal-400 rounded-full w-3 h-3 inline-block ml-2 group-hover:block"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
