
import React from 'react';
import { Code, Leaf, Zap } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="bg-cyber-dark py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature">
            Our Manifesto
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-xl">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We believe in a future where technology and nature aren't opposing forces, but collaborators in human progress. The cyberpunk ethos of innovation and the solarpunk vision of sustainability aren't mutually exclusive – they're complementary paths toward the same goal.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our community exists at the intersection of d/acc and e/acc philosophies, acknowledging that responsible technological acceleration can solve environmental challenges while irresponsible development can exacerbate them.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We reject the false choice between technological stagnation and environmental destruction. Instead, we champion a synthesis: technological innovation guided by ecological wisdom and human values.
            </p>
            <p className="text-lg text-gray-300 mb-6  leading-relaxed">
              We believe nature is the ultimate best and that technology has to be (& can be) designed to assist learning and attaining maximum natural capacities enhanced by combined guidance of vairous natural and social expertise/researches.
            </p>
          </div>

          <div className="space-y-8">
            {/* Manifesto points with icons */}
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-cyber/20 border border-cyber">
                  <Code className="h-6 w-6 text-cyber" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Technological Innovation</h3>
                <p className="text-gray-300">
                  We embrace technological advancement as a tool for solving humanity's greatest challenges, not as an end in itself.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-nature/20 border border-nature">
                  <Leaf className="h-6 w-6 text-nature" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Ecological Harmony</h3>
                <p className="text-gray-300">
                  We recognize that human flourishing depends on the health of our planet's ecosystems and biodiversity.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-highlight/20 border border-highlight">
                  <Zap className="h-6 w-6 text-highlight" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Community</h3>
                <p className="text-gray-300">
                  We believe that democratized technology and knowledge can induce more equitable and resilient communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
