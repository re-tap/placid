
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SupportModal from './SupportModal';

const FundraisingBanner = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSponsorshipClick = () => {
    navigate('/sponsorships');
  };

  const handleSupportClick = () => {
    setIsSupportModalOpen(true);
  };

  return (
    <>
      <Card className="glass-card border-cyber/30 mb-8">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Target className="h-6 w-6 text-cyber animate-pulse" />
              <h3 className="text-xl font-bold text-white">Support Our Mission</h3>
              <Heart className="h-6 w-6 text-nature animate-pulse" />
            </div>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
              We are raising <span className="text-cyber font-bold">€56,302</span> for the establishment of decentralized virtual community space, 1st Hacker House and Conference, for scientific researchers, protocol and framework designers, system builders from across thematics with the goal of serving humanity the best way possible aided with tech and sustainalbly designed framewords.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button 
                onClick={handleSponsorshipClick}
                className="bg-gradient-to-r from-cyber to-purple-600 hover:opacity-90 text-white flex items-center gap-2"
              >
                <Users className="h-4 w-4" />
                View Sponsorship Packages
              </Button>
              <Button 
                onClick={handleSupportClick}
                className="bg-gradient-to-r from-nature to-green-600 hover:opacity-90 text-white flex items-center gap-2"
              >
                <Heart className="h-4 w-4" />
                Support This Mission (Any amount/kind is super valued!)
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <SupportModal 
        open={isSupportModalOpen}
        onOpenChange={setIsSupportModalOpen}
      />
    </>
  );
};

export default FundraisingBanner;
