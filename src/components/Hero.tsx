
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle } from 'lucide-react';
import JoinUsButton from './JoinUsButton';

const Hero: React.FC = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-video-container">
      {/* We'll use a placeholder gradient animation until we get an actual video */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-black to-nature-dark animate-pulse-glow"></div>
      
      <div className="hero-overlay">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature">
            Harmony of Tech & Nature
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Bridging cyber punk innovation and solar punk sustainability to create a tech-enabled future in harmony with our natural world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <JoinUsButton size="lg" className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white text-lg px-8">
              Join Our Mission
            </JoinUsButton>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-nature text-nature bg-nature/10 hover:bg-nature/20 text-lg px-8"
              onClick={scrollToQuote}
            >
              Learn More
            </Button>
          </div>
          
          <a 
            href="#manifesto" 
            className="mt-16 inline-block text-white/80 hover:text-white transition-colors"
            aria-label="Scroll to manifesto"
          >
            <ArrowDownCircle className="h-10 w-10 mx-auto animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
