
import React from 'react';
import { Button } from '@/components/ui/button';
import { FlaskConical, Cpu, Globe, Network } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BlurredNumber from './BlurredNumber';

const Community: React.FC = () => {
  const communityStats = [
    { 
      icon: <Globe className="h-8 w-8 text-cyber" />, 
      value: "35+", 
      label: "Countries",
      link: "/global-impact"
    },
    { 
      icon: <Network className="h-8 w-8 text-cyber" />, 
      value: "12K+", 
      label: "Community Members",
      link: "/members" 
    },
    { 
      icon: <Cpu className="h-8 w-8 text-cyber" />, 
      value: "120+", 
      label: "Active Projects",
      link: "/projects" 
    },
    { 
      icon: <FlaskConical className="h-8 w-8 text-cyber" />, 
      value: "78%", 
      label: "Experiments and Researches",
      link: "/energy-impact" 
    },
  ];

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="community" className="bg-cyber-dark py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature">
            Join Our Community
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with like-minded individuals and organizations dedicated to creating a sustainable, tech-enabled future in harmony with nature.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Link to={stat.link} key={index} className="transform transition-transform hover:scale-105">
              <Card className="glass-card border-0 overflow-hidden h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    <BlurredNumber value={stat.value} />
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="glass-card rounded-xl p-8 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                How to Get Involved
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/30 flex items-center justify-center mr-3 mt-1">
                    <span className="text-cyber font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Start Here</h4>
                    <p className="text-gray-400">Begin your journey by exploring our mission and vision from the top <button onClick={scrollToHero} className="text-cyber hover:underline">the top</button></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/30 flex items-center justify-center mr-3 mt-1">
                    <span className="text-cyber font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Join our Telegram community</h4>
                    <p className="text-gray-400">Connect with other members, participate in discussions, and stay updated on events</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/30 flex items-center justify-center mr-3 mt-1">
                    <span className="text-cyber font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Contribute to projects</h4>
                    <p className="text-gray-400">Share your expertise in one or more of key categories</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/30 flex items-center justify-center mr-3 mt-1">
                    <span className="text-cyber font-medium">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Attend virtual or local meetups</h4>
                    <p className="text-gray-400">Participate in workshops, hackathons, and knowledge sharing sessions</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-lg backdrop-blur-md bg-gradient-to-br from-cyber/20 to-nature/20">
              <h3 className="text-xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h3>
              <p className="text-white-300 mb-4">
                Stay refreshed with our latest developments, inspiring and informative articles. 
              </p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full p-3 rounded-lg glass-card bg-white/5 text-white placeholder:text-cyber-100 focus:outline-none focus:ring-2 focus:ring-cyber"
                />
                <Button className="w-full bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white">
                  Subscribe
                </Button>
                 <p className="text-xs text-white-400 mt-2">
                  By subscribing, you agree to our{' '}
                  <Link to="/privacy" className="text-cyber hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link to="/terms" className="text-cyber hover:underline">
                    Terms of Service
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
