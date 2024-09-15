import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-peach p-8 rounded-t-3xl pt-24 overflow-hidden mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <h3 className="text-4xl font-bold mb-4">
              A PERSONAL ENDEAVOUR BY <br /> ARSH AHMAD
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
          <div className="md:w-1/2 w-full text-left md:text-right">
            <p className="text-rose-300 text-lg">Art & Expression • Community • Growth • Creativity</p>
            <p className="text-rose-300 mt-4">arsh199965@gmail.com</p>
            <p className="text-rose-300 mt-4">Project Love</p>
            <p className="text-rose-300">123 Creative Street</p>
            <p className="text-rose-300">Dream City</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center mt-16">
          <p className="text-rose-300 text-4xl font-pacifico">CREATED WITH LOVE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
