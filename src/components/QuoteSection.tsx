
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import SupportModal from './SupportModal';

const QuoteSection: React.FC = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <section id="quote" className="bg-black py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card py-12 px-6 sm:px-10 rounded-2xl">
          <div className="flex justify-center space-x-1 mb-6">
            {['Vision', 'Innovation', 'Sustainability'].map((word, index) => (
              <Badge 
                key={index} 
                className="bg-gradient-to-r from-nature/60 to-nature/60 backdrop-blur-sm border border-white/10 text-white hover:from-nature/70 hover:to-nature/70"
              >
                {word}
              </Badge>
            ))}
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyber to-nature bg-clip-text text-transparent leading-tight">
            "Technology should empower humanity, not overpower it."
          </h2>
          
          <p className="text-gray-300 text-xl mb-10">
            We're building a future where technology and sustainability work in harmony, 
            amplifiying and bringing together people who are creating solutions that benefit both people and the planet.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="outline"
              className="border-nature text-nature bg-nature/10 hover:bg-nature/20 group"
              onClick={() => window.open('https://medium.com/@mearaftadewos/sustainably-thriving-borderless-city-0642fa6f8eca', '_blank')}
            >
              Read Inspiration
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-nature text-nature bg-nature/10 hover:bg-nature/20"
              onClick={() => setIsSupportModalOpen(true)}
            >
              Support this Mission
            </Button>
          </div>
        </div>
      </div>
      
      {/* Support Modal */}
      <SupportModal
        open={isSupportModalOpen}
        onOpenChange={setIsSupportModalOpen}
      />
    </section>
  );
};

export default QuoteSection;
