import React, { useState } from "react";
import poetryBg from "../assets/poetry-bg.png"; // Replace with the correct background image paths
import storiesBg from "../assets/stories-bg.avif";
import musicBg from "../assets/music-bg.jpg";

const RotatingBoxes = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const boxes = [
    { word: "Poetry", letters: ["P", "O", "E", "T", "R", "Y"], bg: poetryBg },
    { word: "Stories", letters: ["S", "T", "O", "R", "I", "E", "S"], bg: storiesBg },
    { word: "Music", letters: ["M", "U", "S", "I", "C"], bg: musicBg },
  ];

  const positions = [
    { top: "20%", left: "30%" },
    { top: "40%", left: "50%" },
    { top: "60%", left: "20%" },
    { top: "30%", left: "70%" },
    { top: "50%", left: "40%" },
    { top: "70%", left: "60%" },
    { top: "10%", left: "50%" },
  ];

  return (
    <div className="flex justify-around items-center h-screen">
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`w-[27rem] h-[27rem] relative flex justify-center items-center transition-transform duration-500 ease-in-out rounded-[2.5rem]`}
          style={{
            backgroundImage: `url(${box.bg})`,
            backgroundSize: "cover",
            transform: hovered === index ? "rotate(0deg)" : "rotate(45deg)",
            marginLeft: index !== 0 ? "-100px" : "0px",
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hovered === index ? (
            <>
              <h1 className="absolute bottom-4 text-4xl font-bold text-white">
                {box.word}
              </h1>
            </>
          ) : (
            <div className="absolute w-full h-full flex justify-center items-center">
              {box.letters.map((letter, i) => (
                <span
                  key={i}
                  className="absolute text-4xl font-bold text-white transition-all duration-700"
                  style={{
                    ...positions[i % positions.length],
                    transitionDelay: `${i * 100}ms`,
                    top: hovered === index ? "50%" : positions[i % positions.length].top,
                    left: hovered === index ? "50%" : positions[i % positions.length].left,
                    transform: hovered === index ? "translate(-50%, -50%)" : "none",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RotatingBoxes;
