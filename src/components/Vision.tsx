
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-cyber">Our Vision</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full mb-6"></div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-200">
            Building a future where humanity thrives with technology and nature
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We envision communities where advanced technology enables sustainable living, where digital innovations help regenerate ecosystems, and where human connection to nature is strengthened, not diminished.
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Our goal is to create practical frameworks, tools, and systems that bridge the gap between cyberpunk innovation and solarpunk ideals, proving that technology and ecology can be synergistic forces.
          </p>
          <Button className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white mb-12">
            Explore Our Projects
          </Button>
        </div>
        <div className="mb-12">
          <h4 className="text-2xl font-semibold mb-8 text-center text-gray-200">Key Sections</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-lg">
              <Server className="h-12 w-12 text-cyber mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyber">DePins Clean Energy, Internet</h3>
              <p className="text-gray-300">
                Community-owned microgrids that integrate renewable energy with adaptive AI management
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <Leaf className="h-12 w-12 text-nature mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyber">Regenerative Agriculture</h3>
              <p className="text-gray-300">
                Precision farming systems using IoT and AI to maximize yields while restoring soil health
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <PalmtreeIcon className="h-12 w-12 text-nature mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyber">Living Architecture</h3>
              <p className="text-gray-300">
                Biophilic urban design that integrates buildings with natural ecosystems
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <Globe className="h-12 w-12 text-cyber mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyber">Sustainable Computing</h3>
              <p className="text-gray-300">
                Energy-efficient blockchain systems, AI, data centers
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <Globe className="h-12 w-12 text-nature mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyber">Sustainable Governace</h3>
              <p className="text-gray-300">
                Nature oriented, sustainable governance models, new models or rethingin of the existing
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <Globe className="h-12 w-12 text-cyber mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyber">Quantum Computing in Security and Efficiency</h3>
              <p className="text-gray-300">
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
