import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-peach p-8 rounded-t-3xl pt-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="w-1/2">
            <h3 className="text-4xl font-bold mb-4">
              A PERSONAL ENDEAVOUR BY <br/> ARSH AHMAD
            </h3>
            <div className="flex space-x-4 mt-8">
              <button className="bg-rose-300 text-gray-900 py-3 px-6 rounded-full hover:bg-rose-400 transition duration-300">
                Go Poetry →
              </button>
              <button className="bg-rose-300 text-gray-900 py-3 px-6 rounded-full hover:bg-rose-400 transition duration-300">
                Explore →
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-right w-1/2">
            <p className="text-rose-300 text-lg">Art & Expression • Community • Growth • Creativity</p>
            <p className="text-rose-300 mt-4">arsh199965@gmail.com</p>
            <p className="text-rose-300 mt-4">Project Love </p>
            <p className="text-rose-300">123 Creative Street</p>
            <p className="text-rose-300">Dream City</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center mb-[5rem] mt-16">

          <p className="text-rose-300 text-4xl font-bold">CREATED WITH LOVE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
