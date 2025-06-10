
import React from 'react';

const Discord = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-cyber">Discord Community</h1>
        <div className="glass-card p-8 backdrop-blur-xl">
          <p className="text-xl text-gray-300 mb-8">
            Join our vibrant Discord community where members collaborate on sustainable technology projects,
            share ideas, and connect with like-minded individuals passionate about bridging technology and ecology.
          </p>
          <a 
            href="https://discord.gg/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white px-8 py-3 rounded-md transition duration-300"
          >
            Join Our Discord Server
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discord;
