import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Leaf, 
  Network, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Cpu,
  TreePine,
  Factory,
  Heart,
  Target,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhatWeBuild = () => {
  const navigate = useNavigate();

  const platformFeatures = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Digital Citadel Infrastructure",
      description: "A decentralized platform that serves as the backbone for sustainable communities to collaborate, share resources, and coordinate initiatives.",
      gradient: "from-cyber to-blue-600"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Organic Producers Partners",
      description: "Connecting and empowering organic producers through collaborative networks and resource sharing platforms.",
      gradient: "from-nature to-green-600"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Organic Production Systems",
      description: "Digital tools for managing regenerative agriculture, permaculture design, and sustainable production workflows.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Human-Centered Governance",
      description: "Democratic decision-making tools that prioritize community wellbeing and participatory governance models.",
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

  const coreTools = [
    {
      category: "Community Coordination",
      tools: [
        "Decentralized project management",
        "Resource sharing networks",
        "Skill-based matching systems",
        "Event coordination platforms"
      ]
    },
    {
      category: "Sustainability Tracking",
      tools: [
        "Carbon footprint calculators",
        "Biodiversity impact metrics",
        "Circular economy trackers",
        "Energy consumption monitors"
      ]
    },
    {
      category: "Production & Logistics",
      tools: [
        "Local food system networks",
        "Maker space coordination",
        "Transportation optimization",
        "Waste reduction systems"
      ]
    },
    {
      category: "Governance & Decision Making",
      tools: [
        "Consensus building platforms",
        "Transparent voting systems",
        "Community feedback loops",
        "Conflict resolution tools"
      ]
    }
  ];

  const impactAreas = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Networks",
      description: "Connecting local communities worldwide"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Regenerative Systems",
      description: "Building systems that heal rather than harm"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Well-being Focused",
      description: "Prioritizing human and planetary health"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation Hub",
      description: "Fostering breakthrough sustainable technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-cyber to-nature text-white px-6 py-2 mb-6 text-lg">
            <Sparkles className="h-4 w-4 mr-2" />
            Digital Citadel Vision
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature">
            What We Will Build
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            A comprehensive digital citadel platform brings together and empowers productive communities who works on lifting human life quality in terms of organic production & life style and human centered governance.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full"></div>
        </div>

        {/* Vision Statement */}
        <Card className="glass-card border-cyber/30 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Building2 className="h-16 w-16 text-cyber mx-auto mb-4 animate-pulse" />
              <h2 className="text-3xl font-bold text-white mb-4">The Digital Citadel</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-5xl mx-auto">
              Our vision is to create a decentralized digital ecosystem that serves as the technological backbone 
              for sustainable communities worldwide. This platform will facilitate collaboration, resource optimization, 
              and democratic governance while prioritizing ecological regeneration and human wellbeing. Through innovative 
              tools and frameworks, we aim to accelerate the transition to a more sustainable, equitable, and resilient world.
            </p>
          </CardContent>
        </Card>

        {/* Core Platform Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Building Focuses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="glass-card border-0 hover:border-cyber/30 transition-all">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} mb-6`}>
                    {React.cloneElement(feature.icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies & Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTools.map((category, index) => (
              <Card key={index} className="glass-card border-0 h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-cyber">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-nature mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Impact Focus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index} className="glass-card border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber to-nature rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.cloneElement(area.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-400 text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="glass-card border-cyber/30 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center flex items-center justify-center gap-2">
              <Cpu className="h-6 w-6 text-cyber" />
              Technology Foundation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Decentralized Infrastructure</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>Blockchain-based governance</li>
                  <li>IPFS for distributed storage</li>
                  <li>Peer-to-peer networking</li>
                  <li>Smart contract automation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Sustainable Computing</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>Energy-efficient algorithms</li>
                  <li>Carbon-neutral hosting</li>
                  <li>Optimized resource usage</li>
                  <li>Green data centers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Open Source Ecosystem</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>Community-driven development</li>
                  <li>Transparent processes</li>
                  <li>Collaborative innovation</li>
                  <li>Knowledge sharing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card border-cyber/30">
            <CardContent className="p-8">
              <Target className="h-16 w-16 text-nature mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl font-bold text-white mb-4">Join the Digital Citadel Movement</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of building the infrastructure for a sustainable future. Whether you're a developer, 
                researcher, organization, or simply passionate about positive change, there's a place for you 
                in our growing community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={() => navigate('/community')}
                  className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white flex items-center gap-2"
                >
                  <Users className="h-4 w-4" />
                  Join Our Community
                </Button>
                <Button 
                  onClick={() => navigate('/sponsorships')}
                  className="bg-gradient-to-r from-nature to-cyber hover:opacity-90 text-white flex items-center gap-2"
                >
                  <Shield className="h-4 w-4" />
                  Support Our Mission
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuild;