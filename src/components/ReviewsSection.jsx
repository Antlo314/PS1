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
    <section className="relative min-h-screen bg-[#FAFAFA] text-black py-32 px-6 flex flex-col justify-center" id="reviews">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h4 className="font-syne tracking-widest text-sm font-bold uppercase text-gray-400 mb-3">Welcome</h4>
          <h2 className="font-syne text-5xl md:text-7xl font-extrabold text-[#3F1677] mb-6">WHAT OUR CUSTOMERS SAY</h2>
          <p className="text-[#A855F7] text-xl flex justify-center items-center gap-3 font-bold">
            <Star className="fill-[#A855F7] text-[#A855F7]" size={24} /> 5.0 Average rating on Google
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#A855F7] mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} className="fill-[#A855F7] text-[#A855F7] w-6 h-6" />)}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed font-medium text-lg">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-[#3F1677] flex items-center justify-center font-bold text-white text-2xl">
                  {review.name.charAt(0)}
                </div>
                <h4 className="font-bold text-xl">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
