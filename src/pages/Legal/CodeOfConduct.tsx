
import React from 'react';

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-cyber">Code of Conduct</h1>
        
        <div className="glass-card p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Pledge</h2>
          <p className="text-gray-300">
            In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
          </p>
        </div>
        
        <div className="glass-card p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Standards</h2>
          <p className="text-gray-300 mb-4">Examples of behavior that contributes to creating a positive environment include:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
            <li>Using welcoming and inclusive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>Focusing on what is best for the community</li>
            <li>Showing empathy towards other community members</li>
          </ul>
          
          <p className="text-gray-300 mb-4">Examples of unacceptable behavior include:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
            <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
            <li>Public or private harassment</li>
            <li>Publishing others' private information without explicit permission</li>
            <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
          </ul>
        </div>
        
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300">
            If you have questions or concerns about our Code of Conduct, please contact us at conduct@placid.org.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
