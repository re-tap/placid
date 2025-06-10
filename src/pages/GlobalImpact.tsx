
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe } from 'lucide-react';

const GlobalImpact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Globe className="h-12 w-12 mx-auto text-cyber mb-4" />
            <h1 className="text-4xl font-bold mb-4">Global Impact</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              How Placid is making a difference across 35+ countries worldwide
            </p>
          </div>
          
          <div className="mt-12 glass-card p-8 rounded-xl">
            <p className="text-gray-300 text-center">Detailed content coming soon...</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GlobalImpact;
