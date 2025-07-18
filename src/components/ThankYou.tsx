import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Sparkles } from 'lucide-react';

const ThankYou = () => {
  const supporters = [
    { name: "TechCorp", initial: "TC" },
    { name: "Innovation Labs", initial: "IL" },
    { name: "Future Systems", initial: "FS" },
    { name: "Green Tech Co", initial: "GT" },
    { name: "Digital Pioneers", initial: "DP" },
    { name: "Sustainable Solutions", initial: "SS" },
    { name: "Research Institute", initial: "RI" },
    { name: "Community Fund", initial: "CF" },
  ];

  return (
    <section className="bg-black py-16">
      <div className="section-container">
        <Card className="glass-card border-nature/30">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center items-center gap-2 mb-6">
                <Heart className="h-6 w-6 text-nature animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Thank You</h2>
                <Sparkles className="h-6 w-6 text-cyber animate-pulse" />
              </div>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                We are deeply grateful for the incredible support from our community of visionaries, 
                organizations, and partners who believe in our mission. Your contributions, whether through 
                financial support, expertise, or advocacy, are making it possible to build decentralized 
                spaces that serve humanity's greatest potential. Together, we're creating a future where 
                technology and sustainability work in harmony.
              </p>

              <div className="pt-8">
                <div className="flex justify-center items-center gap-2 mb-6">
                  <Users className="h-5 w-5 text-cyber" />
                  <h3 className="text-xl font-semibold text-white">Our Supporters</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto">
                  {supporters.map((supporter, index) => (
                    <div 
                      key={index}
                      className="group relative aspect-square bg-gradient-to-br from-cyber/20 to-nature/20 rounded-lg border border-cyber/30 hover:border-nature/50 transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105"
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">
                          {supporter.initial}
                        </div>
                        <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity absolute inset-x-0 bottom-2">
                          {supporter.name}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyber/10 to-nature/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-gray-400 mt-6">
                  And many more individual contributors making this vision possible
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ThankYou;