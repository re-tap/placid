
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Cog, Heart, X } from 'lucide-react';

const WhoIsThisFor = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="inline-block glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature animate-pulse">
              Who
            </span>{' '}
            <span className="inline-block glow-text bg-clip-text text-transparent bg-gradient-to-r from-nature to-cyber" style={{ animationDelay: '0.2s' }}>
              Is
            </span>{' '}
            <span className="inline-block glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature" style={{ animationDelay: '0.4s' }}>
              This
            </span>{' '}
            <span className="inline-block glow-text bg-clip-text text-transparent bg-gradient-to-r from-nature to-cyber" style={{ animationDelay: '0.6s' }}>
              For?
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.8s' }}></div>
        </div>

        <Tabs defaultValue="who" className="w-full">
          <TabsList className="grid w-full grid-cols-4 glass-card bg-cyber-dark/50 mb-8">
            <TabsTrigger value="who" className="text-white data-[state=active]:bg-cyber/30 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Who is this for
            </TabsTrigger>
            <TabsTrigger value="how" className="text-white data-[state=active]:bg-cyber/30 flex items-center gap-2">
              <Cog className="h-4 w-4" />
              How it works
            </TabsTrigger>
            <TabsTrigger value="values" className="text-white data-[state=active]:bg-cyber/30 flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Values
            </TabsTrigger>
            <TabsTrigger value="not-want" className="text-white data-[state=active]:bg-cyber/30 flex items-center gap-2">
              <X className="h-4 w-4" />
              What we don't want
            </TabsTrigger>
          </TabsList>

          <TabsContent value="who" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card border-0 hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyber mb-3">Tech Innovators</h3>
                  <p className="text-gray-300">
                    Developers, engineers, and entrepreneurs who want to build technology that serves humanity and the planet.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-nature mb-3">Environmental Advocates</h3>
                  <p className="text-gray-300">
                    Activists, researchers, and organizations working on climate solutions and sustainable living.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyber mb-3">Urban Planners</h3>
                  <p className="text-gray-300">
                    City planners and architects designing the sustainable cities of tomorrow.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-nature mb-3">Students & Researchers</h3>
                  <p className="text-gray-300">
                    Academic researchers and students exploring the intersection of technology and sustainability.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyber mb-3">Policy Makers</h3>
                  <p className="text-gray-300">
                    Government officials and policy experts shaping regulations for sustainable technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-nature mb-3">Community Leaders</h3>
                  <p className="text-gray-300">
                    Local organizers building resilient, technology-enabled communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="how" className="animate-fade-in">
            <div className="space-y-8">
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">How ReTap Works</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-cyber/30 flex items-center justify-center mr-4 mt-1">
                        <span className="text-cyber font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Connect</h4>
                        <p className="text-gray-300">Join our community of innovators, researchers, and changemakers working at the intersection of technology and sustainability.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-nature/30 flex items-center justify-center mr-4 mt-1">
                        <span className="text-nature font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Collaborate</h4>
                        <p className="text-gray-300">Work on real-world projects that demonstrate how advanced technology can regenerate ecosystems and communities.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-cyber/30 flex items-center justify-center mr-4 mt-1">
                        <span className="text-cyber font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Create</h4>
                        <p className="text-gray-300">Build practical solutions, share knowledge, and help create frameworks that others can implement in their communities.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-nature/30 flex items-center justify-center mr-4 mt-1">
                        <span className="text-nature font-medium">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Scale</h4>
                        <p className="text-gray-300">Help scale successful innovations globally while maintaining local adaptation and community ownership.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="values" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyber mb-4">Community-Driven Innovation</h3>
                  <p className="text-gray-300 mb-4">
                    We believe the best solutions come from diverse communities working together, not isolated tech labs.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Open collaboration and knowledge sharing</li>
                    <li>• Inclusive participation from all backgrounds</li>
                    <li>• Local adaptation of global solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-nature mb-4">Regenerative Technology</h3>
                  <p className="text-gray-300 mb-4">
                    Technology should heal and restore, not just extract and consume.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Net-positive environmental impact</li>
                    <li>• Circular design principles</li>
                    <li>• Biomimetic and nature-inspired solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyber mb-4">Practical Idealism</h3>
                  <p className="text-gray-300 mb-4">
                    We dream big but build incrementally, proving concepts through real-world implementation.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Evidence-based approaches</li>
                    <li>• Iterative development and testing</li>
                    <li>• Measurable impact metrics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-nature mb-4">Systems Thinking</h3>
                  <p className="text-gray-300 mb-4">
                    We consider the interconnections between technology, society, and ecology.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Holistic impact assessment</li>
                    <li>• Long-term sustainability planning</li>
                    <li>• Cross-sector collaboration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="not-want" className="animate-fade-in">
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">What Don't Fit</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-red-400 mb-3">Greenwashing</h4>
                    <p className="text-gray-300 mb-4">
                      We reject superficial environmental claims without substantive change. Every project must demonstrate genuine positive impact or efforts.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-red-400 mb-3">Tech Solutionism</h4>
                    <p className="text-gray-300 mb-4">
                      Technology alone cannot solve complex social and environmental problems. We advocate for socio-technical solutions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-red-400 mb-3">Extractive Practices</h4>
                    <p className="text-gray-300 mb-4">
                      We don't appricieate business models or individual traits that extract value from communities and environments without giving back.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-red-400 mb-3">Closed Innovation</h4>
                    <p className="text-gray-300 mb-4">
                      Hoarding knowledge and technology for competitive advantage undermines collective progress toward sustainability.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-red-400 mb-3">Short-term Thinking</h4>
                    <p className="text-gray-300 mb-4">
                      Quick fixes and quarterly profit maximization are incompatible with long-term ecological and social health.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-red-400 mb-3">Digital Colonialism</h4>
                    <p className="text-gray-300 mb-4">
                      Imposing technological solutions without community appreaciation perpetuates inequality and dependence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WhoIsThisFor;
