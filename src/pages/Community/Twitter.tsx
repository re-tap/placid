
import React from 'react';

const Twitter = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-cyber">Twitter Community</h1>
        <div className="glass-card p-8 backdrop-blur-xl">
          <p className="text-xl text-gray-300 mb-8">
            Follow us on Twitter for the latest updates, thought leadership in sustainable tech,
            community highlights, and conversations about the intersection of cyberpunk innovation and solarpunk sustainability.
          </p>
          <a 
            href="https://twitter.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white px-8 py-3 rounded-md transition duration-300"
          >
            Follow Us on Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
