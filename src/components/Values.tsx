
import React from 'react';
import { Hexagon } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  color: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, color }) => {
  return (
    <div className="glass-card rounded-xl p-6 h-full hover:border-opacity-100 transition-all duration-300 group">
      <div className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center ${color === 'cyber' ? 'bg-cyber/20' : color === 'nature' ? 'bg-nature/20' : 'bg-highlight/20'}`}>
        <Hexagon className={`h-6 w-6 ${color === 'cyber' ? 'text-cyber' : color === 'nature' ? 'text-nature' : 'text-highlight'}`} />
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${color === 'cyber' ? 'text-cyber' : color === 'nature' ? 'text-nature' : 'text-highlight'}`}>
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

const Values: React.FC = () => {
  const valuesList = [
    {
      title: "Responsible Innovation",
      description: "We develop technology with careful consideration of its impacts on society and the environment.",
      color: "cyber"
    },
    {
      title: "Ecological Stewardship",
      description: "We honor our responsibility to protect and restore the natural systems that sustain all life.",
      color: "nature"
    },
    {
      title: "Collaborative Knowledge",
      description: "We believe in the power of open source, shared knowledge, and collaborative problem-solving.",
      color: "highlight"
    },
    {
      title: "Decentralized Autonomy",
      description: "We support systems that distribute power and enable communities to determine their own futures.",
      color: "cyber"
    },
    {
      title: "Biomimicry & Integration",
      description: "We look to natural systems for inspiration in designing technological solutions.",
      color: "nature"
    },
    {
      title: "Inclusive Prosperity",
      description: "We strive to ensure that technological progress benefits all of humanity, not just the privileged few.",
      color: "highlight"
    },
    {
      title: "Humane Governance",
      description: "Rethinking of governance models attuned with human nature, optimized with tech without destructive side effects.",
      color: "cyber"
    },
  ];

  return (
    <section id="values" className="bg-black bg-glow-gradient py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text bg-clip-text text-transparent bg-gradient-to-r from-nature to-cyber">
            Our Core Values
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-nature to-cyber mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            These principles guide our approach to creating a world where technology and nature thrive together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesList.map((value, index) => (
            <ValueCard 
              key={index} 
              title={value.title} 
              description={value.description} 
              color={value.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
