
import React from 'react';
import { ArrowRight, Globe, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Import the specific icons explicitly
import { Leaf } from 'lucide-react';
import { PalmtreeIcon } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="bg-cyber-dark py-20 relative">
      <div className="absolute inset-0 bg-cyber-dark" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">
            Our Vision
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
              Building a future where humanity thrives <span className="text-cyber">with</span> technology <span className="text-nature">and</span> nature
            </h3>
            
            <div className="space-y-6 mb-8">
              <p className="text-gray-300">
                We envision communities where advanced technology enables sustainable living, where digital innovations help regenerate ecosystems, and where human connection to nature is strengthened, not diminished.
              </p>
              <p className="text-gray-300">
                Our goal is to create practical frameworks, tools, and systems that bridge the gap between cyberpunk innovation and solarpunk ideals, proving that technology and ecology can be synergistic forces.
              </p>
            </div>
            
            <Button className="bg-nature hover:bg-nature/90 text-black flex items-center gap-2 group">
              Explore Our Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="glass-card rounded-xl p-6 backdrop-blur-xl grid grid-cols-2 gap-4">
            <div className="col-span-2 mb-2">
              <h4 className="text-xl font-semibold text-white mb-2">Key Sections</h4>
            </div>
            
            <div className="glass-card p-4 rounded-lg backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-cyber/20 flex items-center justify-center mb-3">
                <Server className="h-5 w-5 text-cyber" />
              </div>
              <h5 className="font-medium text-white mb-2">DePins Clean Energy, Internet</h5>
              <p className="text-sm text-gray-300">
                Community-owned microgrids that integrate renewable energy with adaptive AI management
              </p>
            </div>
            
            <div className="glass-card p-4 rounded-lg backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-nature/20 flex items-center justify-center mb-3">
                <Leaf className="h-5 w-5 text-nature" />
              </div>
              <h5 className="font-medium text-white mb-2">Regenerative Agriculture</h5>
              <p className="text-sm text-gray-300">
                Precision farming systems using IoT and AI to maximize yields while restoring soil health
              </p>
            </div>
            
            <div className="glass-card p-4 rounded-lg backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center mb-3">
                <PalmtreeIcon className="h-5 w-5 text-highlight" />
              </div>
              <h5 className="font-medium text-white mb-2">Living Architecture</h5>
              <p className="text-sm text-gray-300">
                Biophilic urban design that integrates buildings with natural ecosystems
              </p>
            </div>
            
            <div className="glass-card p-4 rounded-lg backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-cyber/20 flex items-center justify-center mb-3">
                <Globe className="h-5 w-5 text-cyber" />
              </div>
              <h5 className="font-medium text-white mb-2">Sustainable Computing</h5>
              <p className="text-sm text-gray-300">
                Energy-efficient blockchain systems, AI, data centers  
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-cyber/20 flex items-center justify-center mb-3">
                <Globe className="h-5 w-5 text-cyber" />
              </div>
              <h5 className="font-medium text-white mb-2">Sustainable Governace</h5>
              <p className="text-sm text-gray-300">
                Nature oriented, sustainable governance models, new models or rethingin of the existing
              </p>
            </div>

            <div className="glass-card p-4 rounded-lg backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-cyber/20 flex items-center justify-center mb-3">
                <Globe className="h-5 w-5 text-cyber" />
              </div>
              <h5 className="font-medium text-white mb-2">Quantum Computing in Security and Efficiency</h5>
              <p className="text-sm text-gray-300">
                Quantum readiness, the expenses, the current development, implimentations in servers services are running on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;