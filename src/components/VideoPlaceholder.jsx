import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function VideoPlaceholder() {
  return (
    <div className="w-full aspect-video bg-black/60 rounded-2xl border border-gray-700/50 flex flex-col items-center justify-center hover:bg-black/40 transition-colors cursor-pointer group shadow-xl">
      <PlayCircle size={64} className="text-gray-500 group-hover:text-amber-400 mb-4 transition-colors" />
      <span className="text-gray-400 font-semibold tracking-widest uppercase text-sm">Video Content Placeholder</span>
    </div>
  );
}
