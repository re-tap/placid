
import React from 'react';

const Meetups = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-cyber">Community Meetups</h1>
        <div className="glass-card p-8 backdrop-blur-xl">
          <p className="text-xl text-gray-300 mb-8">
            Connect with the Placid community in person at our regular meetups around the world.
            Share knowledge, build connections, and participate in workshops focused on sustainable technology solutions.
          </p>
          <a 
            href="#"
            className="inline-block bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white px-8 py-3 rounded-md transition duration-300"
          >
            Find a Meetup Near You
          </a>
        </div>
      </div>
    </div>
  );
};

export default Meetups;
