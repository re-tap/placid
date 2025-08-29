import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  User, 
  Linkedin, 
  Phone, 
  Target, 
  Heart, 
  Globe, 
  ExternalLink,
  BookOpen,
  Lightbulb
} from 'lucide-react';

const Founder = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-cyber to-nature text-white px-6 py-2 mb-6 text-lg">
            <User className="h-4 w-4 mr-2" />
            Founder Profile
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature">
            Mearaf Tadewos Tiranchie
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Visionary founder dedicated to creating sustainable, human-centered communities through innovative technology and regenerative practices.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full"></div>
        </div>

        {/* Vision Section */}
        <Card className="glass-card border-cyber/30 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center flex items-center justify-center gap-2">
              <Target className="h-6 w-6 text-cyber" />
              Vision & Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center">
              <Lightbulb className="h-16 w-16 text-nature mx-auto mb-6 animate-pulse" />
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                To build a comprehensive digital citadel platform that brings together and empowers productive communities 
                focused on lifting human life quality through organic production, sustainable lifestyles, and human-centered governance. 
                Our mission is to create technology that facilitates and optimizes these essential aspects of life, 
                fostering resilient communities worldwide.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Motivation & Dream */}
        <Card className="glass-card border-cyber/30 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center flex items-center justify-center gap-2">
              <Heart className="h-6 w-6 text-nature" />
              Motivation & Dream
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Globe className="h-16 w-16 text-cyber mx-auto mb-6 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-4">The Final Dream</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                The ultimate motivation behind Placid World stems from a vision of creating sustainably thriving, 
                borderless cities where technology serves humanity and the planet. This dream encompasses building 
                communities that prioritize human wellbeing, environmental regeneration, and collaborative governance.
              </p>
              <Button 
                asChild
                className="bg-gradient-to-r from-nature to-cyber hover:opacity-90 text-white"
              >
                <a 
                  href="https://medium.com/@mearaftadewos/sustainably-thriving-borderless-city-0642fa6f8eca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Read the Full Vision
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="text-xl text-white text-center">
                Profile Photo
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Avatar className="h-32 w-32">
                <AvatarImage 
                  src="/public/mearaf.png" 
                  alt="Mearaf Tadewos Tiranchie" 
                  className="object-cover object-center"
                />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-cyber to-nature text-white">MT</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-gray-300 mb-4">
                <Phone className="h-5 w-5 text-cyber mr-3" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-sm">+6(620)569-283</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-cyber" />
                Professional Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                asChild
                className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white w-full"
              >
                <a 
                  href="https://www.linkedin.com/in/mearaf-tadewos-634228174/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Founder;