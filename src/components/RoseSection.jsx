import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import lrose from "../assets/rose.png";
import rrose from "../assets/rose2.png";
const RoseSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Animation will trigger only once
    threshold: 0.7,     // Trigger when 10% of the section is visible
  });

  useEffect(() => {
    console.log('Section is in view:', inView);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-r from-red-50 to-red-100 bg-opacity-10 mx-6 rounded-3xl shadow-lg mt-8 text-gray-900 py-16 px-8"
    >
      <div className="flex justify-between items-center relative">
        {/* Left Rose */}
        <div
          className={`absolute left-0 top-0 transform rotate-[145deg] -translate-y-[18rem] -translate-x-[12rem] transition-transform duration-1000 ease-out ${
            inView ? '-translate-x-[12rem]' : '-translate-x-[32rem]'
          }`}
        >
          <img src={lrose} alt="Left Rose" className="w-[32rem] h-auto opacity-90" />
        </div>

        {/* Quote */}
        <div className="w-[30rem] mx-auto text-center z-10">
          <blockquote className="text-[53px] font-caveat leading-relaxed tracking-tight">
            “Dil na-ummeed to nahi, nakaam hi to hai <br />
            Lambi hai gham ki shaam, magar shaam hi to hai”
            <footer className="mt-4 text-right text-2xl text-gray-800">
              - Faiz Ahmed Faiz
            </footer>
          </blockquote>
        </div>

        {/* Right Rose */}
        <div
          className={`absolute right-0 top-0 transform transition-transform translate-x-36 -translate-y-[0.72rem] duration-1000 ease-out ${
            inView ? 'translate-y-0 scale-100' : '-translate-y-[2.5rem] scale-75'
          }`}
        >
          <img src={rrose} alt="Right Rose" className="w-[44rem] h-auto opacity-90" />
        </div>
      </div>
    </section>
  );
};

export default RoseSection;
