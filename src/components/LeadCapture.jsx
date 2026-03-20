import React from 'react';
import { Send } from 'lucide-react';

export default function LeadCapture() {
  return (
    <section className="py-24 px-6 relative" id="booking">
      <div className="max-w-3xl mx-auto glass-panel p-8 md:p-16 text-center shadow-[0_0_50px_rgba(59,7,100,0.5)]">
        <h2 className="text-4xl font-bold mb-4 gold-gradient-text">Ready for Guidance?</h2>
        <p className="text-gray-300 text-lg mb-10">Enter your details below to request a session. We'll reach out to schedule a perfect time for your reading.</p>
        
        <form className="flex flex-col gap-5 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-6 py-4 rounded-xl bg-purple-900/20 border border-amber-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-medium"
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full px-6 py-4 rounded-xl bg-purple-900/20 border border-amber-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-medium"
            required
          />
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] mt-2">
            Request Session <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}
