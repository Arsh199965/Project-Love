import React from "react";
import { useState } from "react";

const PoetrySection = ({
  title,
  poetry,
  poet,
  image,
  explbttn = false,
  direction = "right",
}) => {
  const button = () => {
    if (explbttn) {
      return (
        <button className="mt-8 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
          What to expect when you read →
        </button>
      );
    }
    return null;
  };
  if (direction == "left") {
    return (
      <div className="flex items-center h-[80vh] bg-white mb-8">
        {/* Text Section */}
        <div className="w-[40rem] justify-center absolute left-[7rem] p-10">
          <h1 className="text-[4rem] font-bold text-transparent bg-gradient-to-r from-peach to-red-500 bg-clip-text ">
            {title.toUpperCase()}
          </h1>
          <div className="h-1 w-24 bg-green-400 mb-10"></div>
          <div className="text-gray-600 mb-8 text-xl">
            {poetry.map((line, index) => (
              <p className="mb-2" key={index}>{line}</p>
            ))}
          </div>
          <p className="text-gray-500 italic text-lg">{poet}</p>

          {button()}
        </div>

        {/* Image Section */}
        <div className="absolute right-7 w-[40rem] h-[30rem]">
          <img
            src={image}
            alt="Poetry Section"
            className="object-cover h-full w-full rounded-2xl"
          />
        </div>
      </div>
    );
  }
  else if (direction = "right")
  {
    return (
      <div className="flex items-center h-[80vh] bg-white mb-8">

        {/* Image Section */}
        <div className="absolute left-7 w-[40rem] h-[30rem]">
          <img
            src={image}
            alt="Poetry Section"
            className="object-cover h-full w-full rounded-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-[40rem] justify-center absolute right-[4rem] p-10">
          <h1 className="text-[4rem] font-bold text-transparent bg-gradient-to-l from-peach to-red-500 bg-clip-text ">
            {title.toUpperCase()}
          </h1>
          <div className="h-1 w-24 bg-green-400 mb-10"></div>
          <div className="text-gray-600 mb-8 text-xl">
            {poetry.map((line, index) => (
              <p className="mb-2 " key={index}>{line}</p>
            ))}
          </div>
          <p className="text-gray-500 italic text-lg">{poet}</p>

          {button()}
        </div>

        
      </div>
    );
  }
};

export default PoetrySection;
