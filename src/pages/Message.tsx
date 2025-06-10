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
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGzDSXwjSfDUQ/profile-displayphoto-shrink_400_400/B4EZP6sQLcGYAg-/0/1735077726988?e=1755129600&v=beta&t=Bu87_Y6QI1biye1A5FHI9Hccwb1S-ZttG8nLjq4t2_Q",
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
    <div className="min-h-screen inset-0 bg-gradient-to-br from-cyber-dark via-black to-nature-dark text-white animate-pulse-glow py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 animate-pulse-glow text-cyber">Message from the Future</h1>
        
        <div className="glass-card p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Hi,</h2>
          <p className="text-gray-300 py-4">
            I’m from the future.  
          </p>
          <p className="text-gray-300 py-4">
            Imagine a child 
            A child of your gender, looking out to the world, what would that child will ever want?
            Peace, stability, safe attachment, unconditional acceptance, adoration, protection from any harm, secure 
            provision, guide to the truth, emotional harmony, gentleness, people they feel safe with and trust to be 
            vulnerable or attach, ...Moreover they need proper guidance to set them well for life.
          </p>
          <p className="text-gray-300 py-4">
            Now, imagine an old person; a grand ma or grand pa, what would they desire form the heart? honor, safety of provision 
            and protection from harm, legacy, happy old age, freedom from health issues, blessed children and grandchildren, 
            happy long meals with family, connections with good spirited ones, playful times
          </p>
          <p className="text-gray-300 py-4">
            Imagine a 50 year old parent,
            They may desire, stable life, a big family house free of any debt, happy long breakfast and lunch with friends, 
            families, good neighbors, good schools and good friends for their children, connect, time with family and stress 
            free fulfilling jobs or business, health, financial stability and conveniences, respect, family full of love and 
            joy.
          </p>
          <p className="text-gray-300 py-4">
            Young people, they desire good job, education that makes a difference, fun with friends, friends to grow more 
            young with :), life partners, financial liberation, learning, reaching their potential, explore the world 
            - see what is their to be seen, build capacity, establishment, to connect with people, respect and alignments, 
            partners they can trust for work or for life, wisdom, to learn the truth about life…
          </p>
          <p className="text-gray-300 py-4">
            All of these people they are in our life in one way or the other, moreover they are with in us! reached and 
            experienced through times blessings. They all share the same fundamental elements just in different forms and one 
            common super element that can summaries the desires, truth! and it comes with different variety when 
            coupled with something else; as trust, safety, attachment, acceptance, respect, connection, partner, alignment, 
            happiness, friendship, etc… truths is the less spoken of but the most felt and fundamental anchor of life, that 
            determines the stability of anything of substance.

            Truth is freedom, a power to choose.
          </p> 
          <p className="text-gray-300 py-4">
            If we were to create sustainable anything, we must come to terms with the fact that it is the natural call for 
            every one to provide with truth in every exchanges (with out risking privacy or safety in edge cases of course),  
            to seek out the truth in from the infinite wisdom of the nature to land on the efficient remedies in medicine, 
            governance, sociology, psychology, education, interpersonal connections, productions, ecology, agriculture, 
            economics, architectures, 
            transportation, etc.. and to share it with the world.
          </p>
          <p className="text-gray-300 py-4">
            Within all these Arts and Logies; technology is the aid that facilitates the quest. Done and used
             right, it can be the most valuable resource to accelerate arrivals on desired results, sharing the knowledge 
             from arround the world and passing it on to the next generation.
          </p> 
          <p className="text-gray-300 py-4">   
             Blockchain; Consunsus based decenralised systems, started the 
             cycle in to neo tech era, 50 years ago, by redefining the traceability in the online activities to feed 
             transparency and then the trust. Satoshi Nakamato made it famous 15 years ago. 
          </p>
          <p className="text-gray-300 py-4">
            AI shot up the efficiency with machine understanding and execution of tasks, 
            <br/>
            The grid of electricity and internet is 
            already powering and connecting the world.
            There are hardwares and wetwares too, enhancing how we do things.  
          </p>
          <p className="text-gray-300 py-4">
            So, let us come together to search, exchange finidings and route ways from the infinite intellignce of nature (the universe) to 
            build our next civilization; 
            <br/> 
            <li>sustainable governance models</li> 
            <li>the next efficient education system</li> 
            <li>sustainable money, and sustainable economy</li>
            <li>sustainable economy and policy</li>
            <li>culture for productivity, social and emotional well being</li>
            <li>architectures that works with natural psychology of human beings</li>
            <li>medicines and health care</li>
            <li>food production and nutrition</li>
            <li>transportation routes and policies</li>
            <li>energy production and consumption</li>
            <li>access and distribution</li>
            <br/>
            bringing varius verticals to collaborate in tech acceleration that is guided by natures insights, to smoothen up the path and accelerate. 
            Instead of being led astray by any type of extremism, 
            <br/>
            let us sit in the simple truth and retap into the natural state; 
            <br/> 
            a state of harmonious existence in coherence, well being, and security - placid.
          </p>
          <p className="text-gray-300 py-4">
            I came from this future we just imagined together, and thats where are going to. 
          </p>
          <h2 className="text-medium font-semibold py-4 my-4">Mearaf T. Tiranchie. 
            <br/> <span className='italic text-gray-300'>free thinker, multivertical weaver, tech things (blockchain)</span> 
          </h2>
        </div>
        <div className="glass-card p-8">
          <p className="text-gray-300 py-3">
              What we do at Placid touchs all the fundumental aspects of life and we navigate how acceleration in 
              technology can be used to enhance the human experience free of biproducts that defeats the purpos. 
            </p>
            <p className="text-gray-300 py-3">
              You are invited to join us in this journey of discovery, exploration and making the needed change.
            </p>
          <h4 className="text-lg font-semibold py-3 mb-2">Where to start?</h4>
          <p className="text-gray-300">
            <Link to={'/the-energy'}  
            target="_blank" rel="noopener noreferrer" 
            className="text-nature hover:text-cyber transition-colors">
              Read our Energy Flavor to see who is this for
            </Link>
            <br /> 
            <Link to={'/'}
            target="_blank" rel="noopener noreferrer" 
            className="text-nature hover:text-cyber transition-colors">
              Join our community and become active contributer
            </Link> 
            <br /> 
            <br /> 
            <p className="text-medium font-semibold py-3">🌱 Help us bring the best</p>
            <Link to={'/'}
              target="_blank" rel="noopener noreferrer" 
              className="text-nature hover:text-cyber transition-colors">
              Subscribe to Placid Newsletter
            </Link>
            <br /> 
            <Link to={'/'}
              target="_blank" rel="noopener noreferrer" 
              className="text-nature hover:text-cyber transition-colors">
              Support us with your resources, by clickingq the support the mission button in the home page
            </Link>
            </p>
            <p className="text-medium font-semibold py-3"/>
              <p className="text-medium font-semibold ">We appreciate the support,</p>
              <p className="text-medium font-semibold ">Thank you!
            </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
