import React from 'react';
import { Send } from 'lucide-react';

export default function LeadCapture() {
  return (
    <section className="snap-section bg-[#e5d5c5] text-[#3F1677] flex flex-col justify-center px-6">
       {/* Decorative Stars */}
       <div className="diamond-star top-20 left-20 scale-75 opacity-20 invert"></div>

      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl rounded-[3rem] p-10 md:p-20 text-center shadow-2xl border border-white/50 w-full relative z-10">
        <h4 className="font-syne tracking-widest text-sm font-bold uppercase mb-4 drop-shadow-sm">Connect</h4>
        <h2 className="font-syne text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md">READY FOR GUIDANCE?</h2>
        <p className="text-[#3F1677]/80 text-xl md:text-2xl mb-12 font-medium">Enter your details below to request a session. We'll reach out to schedule a perfect time for your reading.</p>
        
        <form className="flex flex-col gap-6 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-8 py-5 rounded-full bg-white border-2 border-transparent text-black placeholder-gray-400 focus:outline-none focus:border-[#A855F7] transition-all font-bold text-lg shadow-md"
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full px-8 py-5 rounded-full bg-white border-2 border-transparent text-black placeholder-gray-400 focus:outline-none focus:border-[#A855F7] transition-all font-bold text-lg shadow-md"
            required
          />
          <button type="submit" className="w-full flex items-center justify-center gap-3 bg-[#3F1677] hover:bg-[#A855F7] text-white px-8 py-5 rounded-full font-bold text-xl transition-all hover:scale-[1.02] shadow-[0_10px_20px_rgba(63,22,119,0.3)] mt-4 uppercase tracking-widest font-syne">
            Request Session <Send size={24} />
          </button>
        </form>
      </div>
    </section>
  );
}
