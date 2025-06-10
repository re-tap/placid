import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, Headphones } from 'lucide-react';

const Message = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const authorProfile = {
    name: "Mearaf Tadewos",
    image: "https://avatars.githubusercontent.com/u/44867763?v=4&size=64",
    imageOld: "https://media.licdn.com/dms/image/v2/D4E03AQGzDSXwjSfDUQ/profile-displayphoto-shrink_400_400/B4EZP6sQLcGYAg-/0/1735077726988?e=1755129600&v=beta&t=Bu87_Y6QI1biye1A5FHI9Hccwb1S-ZttG8nLjq4t2_Q",
    title: "Founder & Visionary"
  };

  const messageContent = `Welcome to Placid - a movement that believes technology and nature don't have to be at odds. We're building a future where cyberpunk innovation serves solarpunk ideals, where every digital advancement helps heal our planet rather than harm it.

Our journey began with a simple question: What if we could harness the power of emerging technologies - AI, blockchain, IoT, quantum computing - not just for profit, but for planetary regeneration? What if every smart city could be a green city, every data center could run on renewable energy, and every digital community could foster real-world environmental action?

This isn't just about building sustainable technology - it's about reimagining the relationship between humanity, technology, and nature. We invite you to join us in creating practical solutions that prove a harmonious future is not only possible, but inevitable.`;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleListenToMessage = async () => {
    if (isListening) {
      // Stop current speech
      window.speechSynthesis.cancel();
      setIsListening(false);
      return;
    }

    try {
      setIsListening(true);
      
      // Use Web Speech API as fallback
      const utterance = new SpeechSynthesisUtterance(messageContent);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onend = () => {
        setIsListening(false);
      };
      
      utterance.onerror = () => {
        setIsListening(false);
      };
      
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Text-to-speech error:', error);
      setIsListening(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyber to-nature">
            A Message From Our Team
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber to-nature mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-2 glass-card bg-cyber-dark/50">
            <TabsTrigger value="text" className="text-white data-[state=active]:bg-cyber/30">
              Text Message
            </TabsTrigger>
            <TabsTrigger value="video" className="text-white data-[state=active]:bg-cyber/30">
              Video Message
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="mt-8">
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src={authorProfile.image} alt={authorProfile.name} />
                      <AvatarFallback className="bg-cyber/20 text-cyber">
                        {authorProfile.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{authorProfile.name}</h3>
                      <p className="text-gray-400">{authorProfile.title}</p>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleListenToMessage}
                    className={`${
                      isListening 
                        ? 'bg-cyber/30 hover:bg-cyber/40' 
                        : 'bg-gradient-to-r from-cyber to-nature hover:opacity-90'
                    } text-white transition-all duration-200`}
                    disabled={false}
                  >
                    <Headphones className="h-4 w-4 mr-2" />
                    {isListening ? 'Pause Listening' : 'Listen to Message'}
                  </Button>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Welcome to Placid - a movement that believes technology and nature don't have to be at odds. 
                    We're building a future where cyberpunk innovation serves solarpunk ideals, where every 
                    digital advancement helps heal our planet rather than harm it.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Our journey began with a simple question: What if we could harness the power of emerging 
                    technologies - AI, blockchain, IoT, quantum computing - not just for profit, but for 
                    planetary regeneration? What if every smart city could be a green city, every data center 
                    could run on renewable energy, and every digital community could foster real-world 
                    environmental action?
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    This isn't just about building sustainable technology - it's about reimagining the 
                    relationship between humanity, technology, and nature. We invite you to join us in 
                    creating practical solutions that prove a harmonious future is not only possible, 
                    but inevitable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="video" className="mt-8">
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage src={authorProfile.image} alt={authorProfile.name} />
                    <AvatarFallback className="bg-cyber/20 text-cyber">
                      {authorProfile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{authorProfile.name}</h3>
                    <p className="text-gray-400">{authorProfile.title}</p>
                  </div>
                </div>

                <div className="relative glass-card rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-cyber/20 to-nature/20 flex items-center justify-center">
                    <div className="text-center">
                      <button
                        onClick={togglePlay}
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 hover:bg-white/30 transition-colors mx-auto"
                      >
                        {isPlaying ? (
                          <Pause className="h-8 w-8 text-white" />
                        ) : (
                          <Play className="h-8 w-8 text-white ml-1" />
                        )}
                      </button>
                      <p className="text-white/80">Video message coming soon</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <Volume2 className="h-5 w-5 text-white/80" />
                    <div className="w-24 h-1 bg-white/20 rounded-full">
                      <div className="w-16 h-1 bg-white/60 rounded-full"></div>
                    </div>
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

export default Message;
