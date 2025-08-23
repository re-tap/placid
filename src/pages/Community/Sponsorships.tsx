
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Zap, Shield, Satellite } from 'lucide-react';
import SponsorshipModal from '@/components/SponsorshipModal';
import AddonsModal from '@/components/AddonsModal';
import ContactInfo from '@/components/ContactInfo';

const Sponsorships = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedAddon, setSelectedAddon] = useState<any>(null);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const sponsorshipPackages = {
    bronze: {
      name: "Bronze",
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      originalPrice: "$8,000",
      price: "$5,000",
      color: "from-orange-600 to-orange-800",
      badgeColor: "bg-orange-600",
      features: [
        "Logo placement on website footer",
        "Social media mentions (1 per month)",
        "Newsletter inclusion",
        "Community forum sponsor badge",
        "Event program listing"
      ]
    },
    silver: {
      name: "Silver", 
      icon: <Star className="h-6 w-6 text-gray-400" />,
      originalPrice: "$12,000",
      price: "$8,000",
      color: "from-gray-400 to-gray-600",
      badgeColor: "bg-gray-500",
      features: [
        "All Bronze benefits",
        "Logo on event banners",
        "Dedicated blog post feature",
        "Social media mentions (3 per month)",
        "Speaking opportunity at events",
        "Priority community support"
      ]
    },
    gold: {
      name: "Gold",
      icon: <Crown className="h-6 w-6 text-yellow-500" />,
      originalPrice: "$25,000",
      price: "$18,000", 
      color: "from-yellow-400 to-yellow-600",
      badgeColor: "bg-yellow-500",
      features: [
        "All Silver benefits",
        "Homepage logo placement",
        "Keynote speaking opportunity",
        "Co-branded content creation",
        "Social media mentions (5 per month)",
        "Direct access to community leadership",
        "Custom integration opportunities"
      ]
    },
    platinum: {
      name: "Platinum",
      icon: <Zap className="h-6 w-6 text-purple-300" />,
      originalPrice: "$50,000",
      price: "$40,000",
      color: "from-purple-500 to-purple-700", 
      badgeColor: "bg-purple-600",
      features: [
        "All Gold benefits",
        "Title sponsorship opportunities",
        "Exclusive partnership announcements",
        "Custom community initiatives",
        "Quarterly strategy sessions",
        "White-label collaboration options",
        "Priority feature development input",
        "Social media mentions (12 per month)",
        "Monthly article/blog posts",
        "Executive networking events"
      ]
    }
  };

  const addonOptions = [
    {
      id: 'hacker-house',
      title: 'Sponsor a hacker house for one week',
      price: '$15K–30K',
      description: 'Fund a week-long intensive development experience for selected developers'
    },
    {
      id: 'solarpunk-prize',
      title: 'Fund a Solarpunk Prize for innovation',
      price: '$10K+',
      description: 'Create an innovation prize focused on sustainable design or technology solutions'
    },
    {
      id: 'future-city-track',
      title: 'Design your "Future City Track" for a hackathon',
      price: 'Custom pricing',
      description: 'Sponsor and design a specialized hackathon track focused on urban innovation'
    },
    {
      id: 'documentary',
      title: 'Support creation of a short documentary',
      price: 'Custom pricing',
      description: 'Fund the production of educational content about sustainable technology'
    },
    {
      id: 'custom-track',
      title: 'Create your own track and Sponsor it',
      price: 'Custom pricing',
      description: 'Design and sponsor a completely custom initiative aligned with your goals'
    }
  ];

  const handleGetStarted = (tierKey: string) => {
    setSelectedTier(tierKey);
  };

  const handleAddonGetStarted = (addon: any) => {
    setSelectedAddon(addon);
  };

  const handleCloseModal = () => {
    setSelectedTier(null);
  };

  const handleCloseAddonModal = () => {
    setSelectedAddon(null);
  };

  const handleContactToggle = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature">
            Sponsorship Packages
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Partner with Placid to support innovation that impack generation for the better and to work with our engaged community of sustainability-conscious developers and innovators.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="bronze" className="w-full">
          <TabsList className="grid w-full grid-cols-5 glass-card bg-cyber-dark/50 mb-8">
            {Object.entries(sponsorshipPackages).map(([key, pkg]) => (
              <TabsTrigger 
                key={key}
                value={key} 
                className="text-white data-[state=active]:bg-cyber/30 flex items-center gap-2"
              >
                {key === 'silver' ? (
                  <Star className="h-6 w-6 text-gray-300" />
                ) : (
                  React.cloneElement(pkg.icon, { className: pkg.icon.props.className })
                )}
                {pkg.name}
              </TabsTrigger>
            ))}
            <TabsTrigger 
              value="addons" 
              className="text-white data-[state=active]:bg-cyber/30 flex items-center gap-2"
            >
              <Satellite className="h-6 w-6 text-cyber" />
              Add-ons
            </TabsTrigger>
          </TabsList>

          {Object.entries(sponsorshipPackages).map(([key, pkg]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <Card className="glass-card border-0 max-w-4xl mx-auto">
                <CardHeader className="text-center pb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${pkg.color} mb-4 mx-auto animate-float`} style={{
                    animation: 'float 3s ease-in-out infinite',
                    filter: key === 'silver' ? 'brightness(1.8) drop-shadow(0 0 15px rgba(255, 255, 255, 0.9))' : undefined
                  }}>
                    {key === 'silver' ? (
                      <Star className="h-6 w-6 text-white animate-pulse" style={{ 
                        filter: 'brightness(2) drop-shadow(0 0 20px rgba(255, 255, 255, 1))' 
                      }} />
                    ) : (
                      React.cloneElement(pkg.icon, { className: "h-6 w-6 text-white" })
                    )}
                  </div>
                  <CardTitle className="text-3xl font-bold text-white mb-2">
                    {pkg.name} Sponsorship
                  </CardTitle>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Badge className={`${pkg.badgeColor} text-white px-4 py-1`}>
                      {pkg.name} Tier
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-gray-500 line-through">{pkg.originalPrice}</span>
                      <span className="text-4xl font-bold text-cyber">{pkg.price}</span>
                    </div>
                    <span className="text-gray-400">/ year</span>
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Package Includes:</h3>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-nature mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="glass-card p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-4">
                          Ready to Partner With Us?
                        </h4>
                        <p className="text-gray-400 mb-6">
                          Join global forward-thinking organizations supporting sustainable technology innovation.
                        </p>
                        <Button 
                          onClick={() => handleGetStarted(key)}
                          className="w-full bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white"
                        >
                          Get Started with {pkg.name}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}

          <TabsContent value="addons" className="mt-8">
            <Card className="glass-card border-0 max-w-6xl mx-auto">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyber to-nature mb-4 mx-auto animate-float">
                  <Satellite className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  🛰️ Add-ons and Customization
                </CardTitle>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Create custom sponsorship experiences tailored to your organization's unique goals and vision.
                </p>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {addonOptions.map((addon) => (
                    <div key={addon.id} className="glass-card p-6 h-full flex flex-col">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {addon.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 flex-grow">
                        {addon.description}
                      </p>
                      <div className="mb-4">
                        <span className="text-xl font-bold text-cyber">{addon.price}</span>
                      </div>
                      <Button 
                        onClick={() => handleAddonGetStarted(addon)}
                        className="w-full bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white"
                      >
                        Get Started
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Custom Sponsorship Options</h2>
            <p className="text-gray-300 mb-6">
              Don't see a package that fits your needs? We're happy to create a custom sponsorship 
              arrangement that aligns with your organization's goals and our community's mission.
            </p>
            <Button 
              onClick={handleContactToggle}
              className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white"
            >
              Contact Us for Custom Options
            </Button>
            <ContactInfo isVisible={showContactInfo} />
          </div>
        </div>
      </div>

      {selectedTier && (
        <SponsorshipModal
          isOpen={!!selectedTier}
          onClose={handleCloseModal}
          tier={sponsorshipPackages[selectedTier as keyof typeof sponsorshipPackages]}
        />
      )}

      {selectedAddon && (
        <AddonsModal
          isOpen={!!selectedAddon}
          onClose={handleCloseAddonModal}
          addon={selectedAddon}
        />
      )}
    </div>
  );
};

export default Sponsorships;
