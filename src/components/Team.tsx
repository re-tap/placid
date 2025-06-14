import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import BlurredNumber from './BlurredNumber';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio }) => {
  return (
    <Card className="glass-card h-full group hover:border-cyber/30 transition-all duration-300">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="aspect-square w-16 h-16 mx-auto rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-cyber/30 to-nature/30 flex items-center justify-center">
          {/* Placeholder for team member image */}
          <div className="text-xl font-bold text-white/30">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <p className="text-xs text-cyber mb-2">{role}</p>
        <p className="text-gray-400 text-xs">{bio}</p>
      </CardContent>
    </Card>
  );
};

const CoreTeam: React.FC = () => {
  return (
    <Card className="glass-card mb-16 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="aspect-video w-full bg-gradient-to-br from-cyber/20 to-nature/20 overflow-hidden">
            {/* You can replace this with an actual image when available */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/50 text-xl">Core Team</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Core Team</h3>
            <p className="text-gray-300">
              The team working together to bridge technology and sustainability and replicate globally.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Team: React.FC = () => {
  const isMobile = useIsMobile();
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Tech Visionary",
      bio: "Combines cyberpunk innovation with deep ecological understanding to forge new paths in sustainable technology."
    },
    {
      name: "Maya Johnson",
      role: "Environmental Scientist",
      bio: "Specializes in biomimicry and nature-based solutions to complex technological challenges."
    },
    {
      name: "Kai Patel",
      role: "Community Builder",
      bio: "Creates frameworks for decentralized governance and inclusive community decision-making processes."
    },
    {
      name: "Zoe Williams",
      role: "Systems Designer",
      bio: "Envisions and implements integrative systems that balance technological efficiency with natural processes."
    }
  ];

  return (
    <section id="team" className="bg-black py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">
            The People
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-nature to-cyber mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Visionaries bringing together diverse expertise to linking technology, ecology, economics, methaphysics, acrchiteture, structural engineering, technopolitics and sociology.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Supporters (<BlurredNumber value={148} />)
        </h3>
        
        {/* Team Members Carousel */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
          <Carousel
            opts={{
              align: isMobile ? "start" : "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-full" : "md:basis-1/2 lg:basis-1/4"}>
                  <div className="p-2">
                    <TeamMember
                      name={member.name}
                      role={member.role}
                      bio={member.bio}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mx-2 bg-cyber-dark/40 hover:bg-cyber/20 border-cyber/30" />
              <CarouselNext className="relative static left-auto right-0 translate-y-0 mx-2 bg-cyber-dark/40 hover:bg-cyber/20 border-cyber/30" />
            </div>
          </Carousel>
        </div>
        
        <CoreTeam />
      </div>
    </section>
  );
};

export default Team;
