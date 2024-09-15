import React, { useState } from "react";

const PoetryCarousel = ({ titles, poetries, poets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === titles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? titles.length - 1 : prevIndex - 1
    );
  };

  // Function to get indices around the currentIndex and simulate a rolling effect
  const getDisplayedIndices = () => {
    const totalItems = titles.length;
    const displayedCount = 3; // Number of items to display (including the center one)
    let indices = [];

    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalItems) % totalItems; // Handling circular index
      indices.push(index);
    }

    return indices;
  };

  return (
    <section className=" bg-gradient-to-b from-[#fca8c5] via-red-300 to-rose-300 text-gray-700 pt-8 pb-[7rem] mb-10 px-8 mx-12 rounded-[3.2rem]">
      <header className="flex justify-center items-center text-gray-700 py-8 text-6xl font-pacifico font-bold">
        Poetry
      </header>
      <div className="container mx-auto flex justify-between">
        <div className="translate-x-40">
          {/* Poetry Title */}
          <h2 className="text-4xl font-bold mb-8 text-gray-700">
            {titles[currentIndex]}
          </h2>

          {/* Poetry Content */}
          <div className="text-2xl mb-8 text-gray-700 leading-relaxed ">
            {poetries[currentIndex].map((line, index) => (
              <p key={index} className="mb-2">
                "{line}"
              </p>
            ))}
          </div>

          {/* Poet Name */}
          <p className="text-lg font-semibold text-gray-700 italic ">
            {poets[currentIndex]}
          </p>
        </div>
        {/* Navigation Section */}
        <div className="flex justify-end items-center mt-8 scale-125 -translate-x-40 space-x-8">
          <button
            onClick={handlePrev}
            className="bg-gray-800 text-peach p-4 rounded-full hover:bg-gray-700 transition duration-300"
          >
            ←
          </button>
          <div className="flex flex-col items-center text-rose-300">
            {getDisplayedIndices().map((index) => (
              <span
                key={index}
                className={`cursor-pointer my-1 text-lg ${
                  index === currentIndex ? "text-peach font-bold text-2xl" : "text-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-gray-800 text-peach p-4 rounded-full hover:bg-gray-700 transition duration-300"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PoetryCarousel;
