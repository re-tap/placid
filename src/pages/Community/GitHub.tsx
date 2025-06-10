
import React from 'react';

const GitHub = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-cyber">GitHub Repository</h1>
        <div className="glass-card p-8 backdrop-blur-xl">
          <p className="text-xl text-gray-300 mb-8">
            Explore our open-source projects on GitHub. Contribute to sustainable technology solutions,
            review code, raise issues, and participate in building a more harmonious digital future.
          </p>
          <a 
            href="https://github.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white px-8 py-3 rounded-md transition duration-300"
          >
            View Our GitHub Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
