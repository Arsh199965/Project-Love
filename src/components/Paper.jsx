import React, { useRef, useState, useEffect } from 'react';

const ExploreMorePoetry = () => {
  const paperRef = useRef(null);
  const envelopeLidRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 1 } // Increased threshold for more natural triggering
    );

    if (paperRef.current) {
      observer.observe(paperRef.current);
    }

    return () => {
      if (paperRef.current) {
        observer.unobserve(paperRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-20 mb-8"> {/* Increased space between sections */}
      {/* Envelope */}
      <div className="relative w-80 h-40">
        {/* Envelope Base */}
        <div className="absolute bottom-0 w-full h-20 bg-[#f4a6a6] rounded-b-lg z-10"></div>

        {/* Envelope Lid */}
        <div
          ref={envelopeLidRef}
          className={`absolute bottom-20 w-full h-20 bg-[#f28282] rounded-b-lg z-20 transition-transform duration-[3s] ease-in-out origin-bottom transform ${
            isVisible ? 'rotate-x-180' : 'rotate-x-0'
          }`}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        ></div>

        {/* Paper sliding out */}
        <div
          ref={paperRef}
          className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-32 cursor-pointer bg-[#fbe8e8] rounded-lg shadow-md flex justify-center items-center transition-opacity duration-[1s] ease-in-out z-30 ${
            isVisible ? 'opacity-100 ' : 'opacity-0' } }`} href="/poetry"
        >
          <h2 className="text-xl text-[#c96060] font-bold">Explore More Poetry</h2>
        </div>
      </div>
    </div>
  );
};

export default ExploreMorePoetry;
