import React, { useState } from 'react';

const testimonials = [
  { id: 1, name: "Ralph Edwards", company: "Big Kahuna Burger Ltd", image: "https://i.pravatar.cc/150?img=1", alt: "Ralph Edwards" },
  { id: 2, name: "Albert Flores", company: "Biffco Enterprises Ltd.", image: "https://i.pravatar.cc/150?img=2", alt: "Albert Flores" },
  { id: 3, name: "Jenny Wilson", company: "Acme Co.", image: "https://i.pravatar.cc/150?img=3", alt: "Jenny Wilson" },
  { id: 4, name: "Esther Howard", company: "Barone LLC.", image: "https://i.pravatar.cc/150?img=4", alt: "Esther Howard" },
  { id: 5, name: "Darlene Robertson", company: "Abstergo Ltd.", image: "https://i.pravatar.cc/150?img=5", alt: "Darlene Robertson" },
  { id: 6, name: "Devon Lane", company: "Binford Ltd.", image: "https://i.pravatar.cc/150?img=6", alt: "Devon Lane" },
];

const additionalTestimonials = [
  { id: 7, name: "Ralph Edwards", company: "Big Kahuna Burger Ltd", image: "https://i.pravatar.cc/150?img=1", alt: "Ralph Edwards" },
  { id: 8, name: "Darlene Robertson", company: "Abstergo Ltd.", image: "https://i.pravatar.cc/150?img=5", alt: "Darlene Robertson" },
  { id: 9, name: "Devon Lane", company: "Binford Ltd.", image: "https://i.pravatar.cc/150?img=6", alt: "Devon Lane" },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="md:py-28 py-14 relative">
      <div className="wrapper">
        <div>
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl md:text-title-lg">
              What our users says
            </h2>
            <p className="max-w-xl mx-auto leading-6 text-gray-500">
              Unlock the Potential of Innovation. Discover the Advanced AI
              Tools Transforming Your Ideas into Reality with Unmatched
              Precision and Intelligence.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {/* Base testimonials */}
            {testimonials.map((t) => (
              <div key={t.id} className="p-2 bg-gray-50 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                <div className="flex items-center p-3 mb-3 bg-white/90 rounded-2xl">
                  <img 
                    src={t.image} 
                    alt={t.alt} 
                    className="w-[52px] h-[52px] ring-2 ring-white mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                  />
                  <div>
                    <h3 className="text-gray-800 font-base">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.company}</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-white/90">
                  <p className="text-base leading-6 text-gray-700">
                    As a Senior Software Developer I found TailAdmin perfect
                    write code that easy can be used in my projects, which
                    some are production already.
                  </p>
                </div>
              </div>
            ))}

            {/* Additional testimonials */}
            {showAll && additionalTestimonials.map((t) => (
              <div key={t.id} className="p-2 bg-gray-50 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                <div className="flex items-center p-3 mb-3 bg-white/90 rounded-2xl">
                  <img 
                    src={t.image} 
                    alt={t.alt} 
                    className="w-[52px] h-[52px] ring-2 ring-white mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                  />
                  <div>
                    <h3 className="text-gray-800 font-base">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.company}</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-white/90">
                  <p className="text-base leading-6 text-gray-700">
                    As a Senior Software Developer I found TailAdmin perfect
                    write code that easy can be used in my projects, which
                    some are production already.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="mt-8 text-center relative z-10">
            <button 
              onClick={() => setShowAll(!showAll)} 
              className="inline-flex items-center px-6 py-3.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-full shadow-theme-xs hover:bg-gray-50 focus:outline-none"
            >
              <span>{showAll ? 'Show less...' : 'Show more...'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      {!showAll && <div className="white-gradient h-[264px] w-full absolute bottom-0"></div>}
    </section>
  );
}