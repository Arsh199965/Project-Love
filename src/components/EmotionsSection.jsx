import React, { useRef, useEffect, useState } from "react";

const EmotionsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false); // Reset when out of view
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
    
    const button = () => {
        return (
            <button className="mt-6 p-2 px-4 rounded-3xl bg-gray-800 text-white hover:scale-110 cursor-pointer">
              →
            </button>
        )
    }

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 bg-gradient-to-r from-[#fca8c5] via-red-300 to-rose-300 rounded-[100px] mb-20 overflow-hidden duration-[1s] ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Paint drop animation */}
      {inView && (
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 rounded-full drop-animation"
          style={{
            width: "100px",
            height: "100px",
            animation: "paint-drop 2s forwards",
          }}
        ></div>
      )}

      <div
        className={`container mx-auto text-center transition-opacity duration-[4s] ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-6xl font-bold text-gray-900 mb-12">
          Emotions that'll sweep you away
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poetry Column */}
          <div>
            <div className="text-5xl text-gray-800 mb-4">Poetry</div>
            <div className="flex items-center justify-center text-center">
              <div className="space-y-2 text-xl ">
                <div className="text-gray-600 ">
                  English <div className="bg-gray-700 h-[0.1rem] w-[8rem] self-center"></div>
                </div>
                <div className="text-gray-600">
                  Hindi <div className="bg-gray-700 h-[0.1rem] w-[8rem] self-center"></div>
                </div>
                <div className="text-gray-600">
                  Urdu <div className="bg-gray-700 h-[0.1rem] w-[8rem] self-center"></div>
                </div>
              </div>
            </div>
            {button()}
          </div>

          {/* Stories Column */}
          <div className="flex flex-col items-center">
            <div className="text-5xl text-gray-800 mb-4">Stories</div>
            <div className="space-y-2 text-xl">
              <div className="text-gray-600">
                Inspiring <div className="bg-gray-700 h-[0.1rem] w-[8rem] self-center"></div>
              </div>
              <div className="text-gray-600">
                Romantic <div className="bg-gray-700 h-[0.1rem] w-[8rem] self-center"></div>
              </div>
              <div className="text-gray-600">
                Eye Watering <div className="bg-gray-700 h-[0.1rem] w-[8rem] self-center"></div>
              </div>
            </div>
            {button()}
          </div>

          {/* Music Column */}
          <div className="flex flex-col items-center">
            <div className="text-5xl text-gray-800 mb-4">Music</div>
            <div className="space-y-2 text-xl">
              <div className="text-gray-600">
                Indian <div className="bg-gray-700 h-[0.1rem] w-[8rem] self-center"></div>
              </div>
              <div className="text-gray-600">
                Western <div className="bg-gray-700 h-[0.1rem] w-[8rem] self-center"></div>
              </div>
              <div className="text-gray-600">
                Eastern <div className="bg-gray-700 h-[0.1rem] w-[8rem] self-center"></div>
              </div>
            </div>
            {button()}
          </div>
        </div>
        <button className="mt-10 px-6 py-3 bg-gray-800 text-white rounded-full hover:scale-105 hover:bg-black">
          Explore All →
        </button>
      </div>

      <style jsx>{`
        @keyframes paint-drop {
          0% {
            top: 0;
            transform: translateX(-50%) scale(1);
          }
          50% {
            top: 50%;
            transform: translateX(-50%) scale(10);
          }
          100% {
            top: 100%;
            transform: translateX(-50%) scale(20);
            opacity: 0;
          }
        }

        .animate-paint-reveal {
          animation: paint-spread 2s forwards;
        }

        @keyframes paint-spread {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default EmotionsSection;
