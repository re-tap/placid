
import React from 'react';
import { Heart } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const Memories: React.FC = () => {
  const isMobile = useIsMobile();
  
  const memories = [
    {
      title: "Tech-Nature Workshop",
      description: "Our community learning about sustainable tech solutions in harmony with nature",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"
    },
    {
      title: "Annual Conference",
      description: "ReTap's annual gathering of innovators, thinkers, and builders",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop"
    },
    {
      title: "Community Hangout",
      description: "Building connections and sharing ideas in a relaxed setting",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&auto=format&fit=crop"
    },
    {
      title: "Hackathon for Sustainability",
      description: "Building technological solutions for ecological challenges",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop"
    },
    {
      title: "Ideas Workshop",
      description: "Brainstorming the next generation of sustainable tech solutions",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="memories" className="bg-black py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature">
              Memories
            </h2>
            <Heart className="h-8 w-8 text-nature" />
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Moments of connection, innovation, and inspiration from our growing community.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <Carousel 
            opts={{
              align: isMobile ? "start" : "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {memories.map((memory, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-full" : "md:basis-2/3 lg:basis-1/2"}>
                  <div className="glass-card rounded-lg overflow-hidden backdrop-blur-xl transition-all hover:scale-105 h-full">
                    <div className="h-48 md:h-64 overflow-hidden relative">
                      <img 
                        src={memory.image} 
                        alt={memory.title} 
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-white mb-2">{memory.title}</h3>
                      <p className="text-gray-300">{memory.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0 bg-cyber/20 hover:bg-cyber/30 border-cyber" />
              <CarouselNext className="static translate-y-0 bg-cyber/20 hover:bg-cyber/30 border-cyber" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Memories;
