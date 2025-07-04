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

  const messageContent = `Welcome to Placid - a movement that believes technology and nature or human experience don't have to be at odds. We're building a future where cyberpunk innovation serves solarpunk ideals, where every digital advancement helps heal our planet rather than harm it.

Our journey began with a simple question: What if we could harness the power of emerging technologies - AI, blockchain, IoT, quantum computing - not just for profit, but for planetary regeneration? What if every smart city could be a green city, every data center could run on renewable energy, and every digital community could foster real-world environmental action?

This isn't just about building sustainable technology - it's about reimagining the relationship between humanity, technology, and nature. We invite you to join us in creating practical solutions that prove a harmonious future is not only possible, but inevitable.`;


  const messageContentMearaf = `Imagine a child 
            A child of your gender, looking out to the world, what would that child will ever want?
            Peace, stability, safe attachment, unconditional acceptance, adoration, protection from any harm, secure 
            provision, guide to the truth, emotional harmony, gentleness, people they feel safe with and trust to be 
            vulnerable or to be attached with safe relatability...

	    Now, imagine an old person; a grand ma or grand pa, what would they desire form the heart? honor, safety of provision 
            and protection from harm, legacy, happy old age, freedom from health issues, blessed children and grandchildren, 
            happy long meals with family, connections with good spirited ones, playful times

            Imagine a 50 year old parent,
            They may desire, stable life, a big family house free of any debt, happy long breakfast and lunch with friends, 
            families, good neighbors, good schools and good friends for their children, connect, time with family and stress 
            free fulfilling jobs or business, health, financial stability and conveniences, respect, family full of love and 
            joy

            Young people, they desire good job, education that makes a difference, fun with friends, friends to grow more 
            young with :), life partners, financial liberation, learning, reaching their potential, explore the world 
            - see what is their to be seen, build capacity, establishment, to connect with people, respect and alignments, 
            partners they can trust for work or for life, wisdom, to learn the truth about life…

            All of these people they are in our life in one way or the other, moreover they are with in us! reached and 
            experienced through times blessings. They all share the same fundamental elements just in different forms and one 
            common super element that can summaries the desires, truth! and it comes with different variety when 
            coupled with something else; as trust, safety, attachment, acceptance, respect, connection, partner, alignment, 
            happiness, friendship, etc… truths is the less spoken of but the most felt and fundamental anchor of life, that 
            determines the stability of anything of substance.

            Truth is freedom, is a light... like you can choose to pick items you want under a big bright light.

            If we were to create sustainable anything, we must come to terms with the fact that it is the natural call for 
            every one to provide with truth in every exchanges (with out risking privacy or safety in edge cases of course),  
            to seek out the truth in from the infinite wisdom of the nature to land on the efficient remedies in medicine, 
            governance, sociology, psychology, education, interpersonal connections, productions, ecology, agriculture, 
            economics, architectures, 
            transportation, etc.. and to share it with the world.

            There is a proverbs that goes "Its Gods glory in concealing the truth and it’s the king’s honor to seek it out!".

            We will honor our selves by setting out to find the ways, free of a clinch on the old familiar patterns or it 
            has been done since forever, but with reasonings of causes and effects seen or non-seen guided by truth verified 
            by occurrences directly of indirectly indicates
            Within all these Arts and Logies, technology is the aid that facilitates quest in these activities. done and used
            right, it can be most valuable resource to accelerate, arrivals on desired results and sharing the knowledge 
            from anywhere in the world and passing it on to the next generation with access to it. Blockchain started the 
            next cycle in to Neo tech era, by redefining the online human activities by providing the traceability to feed 
            transparency and then the trust. There is more to do with it as with things to improve it and the things around
            it.

            AI shoot up the efficiency with machine understanding of humanly things, The grid of electricity and internet is 
            already powering and connecting the world.
            There are hardwares and wet-wares too, enhancing how we do things. So, let us come together and learn and find ways 
            from the infinite wisdom of nature (the universe) to build our next efficient transportation routes, medicines, 
            ecological architectures, sustainable money and economy, governance models, etc.. and collaborate with technology 
            to smoothen up the path and accelerate progress or effects. Instead of being led astray by any type of extremism, 
            let us sit in the simple truth and retap into the natural state; 
            harmonious existence with coherence, well being, and sustainance.
            
            and I came from this future we just imagined together, and thats where are going to with Placid. 
 `;
  
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
                    Welcome to Placid - a movement that believes technology and nature or human experience don't have to be at odds. 
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
