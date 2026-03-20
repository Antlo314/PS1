import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: "Jennifer Smalenberg", text: "Lauren was amazing. I was honestly surprised by how intuitively accurate she was about what I’ve been feeling lately. She didn’t ask leading questions or try pull information out of me — she spoke very directly and confidently, and what she said truly resonated. The reading felt very genuine." },
  { name: "Amanda Davis", text: "Psychic of Macomb was invited to read tarot cards for all my friends at a Halloween gathering I hosted. I went last as I was very skeptical about her, but she completely changed my mind. The reading was so accurate it was scary!" },
  { name: "Karl", text: "Lauren was very helpful and informative. She's a very kind soul and very spot on. I'll definitely be back!" },
  { name: "Brianna", text: "Lauren is amazing! She’s very accurate and she really helps you understand everything. She’s definitely the real deal!" },
  { name: "D", text: "Lauren is amazing great energy she's great at what she do thank you!!" },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 px-6 relative" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-amber-400 text-lg flex justify-center items-center gap-2">
            <Star className="fill-amber-400" size={20} /> 5.0 Average rating on Google
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="glass-panel p-8 text-left hover:scale-[1.02] transition-transform duration-300">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="fill-amber-400 w-5 h-5" />)}
              </div>
              <p className="text-gray-200 mb-6 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-purple-800 flex items-center justify-center font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <h4 className="font-semibold">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
