
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400 tracking-wider">
          CYBER BOTS
        </h1>
        <a
          href="#pricing"
          className="bg-green-500 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-green-400 transition-colors duration-300"
        >
          Get Access Now
        </a>
      </div>
    </header>
  );
};

export default Header;
    