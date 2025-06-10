
import React from 'react';

const Forums = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-cyber">Community Forums</h1>
        <div className="glass-card p-8 backdrop-blur-xl">
          <p className="text-xl text-gray-300 mb-8">
            Join our forums to engage in deep discussions about sustainable technology, share your expertise,
            ask questions, and collaborate with other members of the Placid community on solving ecological challenges through innovation.
          </p>
          <a 
            href="#"
            className="inline-block bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white px-8 py-3 rounded-md transition duration-300"
          >
            Explore Our Forums
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forums;
