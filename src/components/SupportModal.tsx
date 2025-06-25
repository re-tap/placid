
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, Wallet, FileText, Users } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface SupportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const walletAccounts = [
  { name: 'Bitcoin', address: 'coming soon', network: 'BTC' },
  { name: 'Ethereum & all L2s', address: '0xFF66d3fcBa8EF0c5DC5CF2d2c889abEEbAad37be', network: 'ETH' },
  { name: 'Solana', address: 'Fn1ibMkM5KL8oBGmD7k3TM5WvfFdWXVqEqeXaDmyU6hJ', network: 'SOL' },
];

const SupportModal: React.FC<SupportModalProps> = ({ open, onOpenChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [knowledgeTitle, setKnowledgeTitle] = useState('');
  const [knowledgeLink, setKnowledgeLink] = useState('');
  const [networkContact, setNetworkContact] = useState('');
  const [networkReason, setNetworkReason] = useState('');

  const handleAnonymousToggle = () => {
    setIsAnonymous(!isAnonymous);
    if (!isAnonymous) {
      setName('');
      setEmail('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] bg-black border-cyber/30">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white text-center">
            Support Our Mission
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Input 
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isAnonymous}
                className="bg-cyber-dark/20 border-cyber/30 text-white"
              />
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleAnonymousToggle}
                className={`border-cyber/30 ${isAnonymous ? 'bg-cyber/20 text-white' : 'text-white'}`}
              >
                {isAnonymous ? 'Anonymous' : 'Named'}
              </Button>
            </div>
            
            <Input 
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isAnonymous}
              className="bg-cyber-dark/20 border-cyber/30 text-white"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            {/* Financial Support Option */}
            <AccordionItem value="financial" className="border-cyber/30">
              <AccordionTrigger className="text-white hover:text-cyber">
                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  <span>Financial Support (Raising for €56,302)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-2">
                  <div className="space-y-3">
                    {walletAccounts.map((wallet, index) => (
                      <div key={index} className="bg-cyber-dark/30 p-3 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-white">{wallet.name}</span>
                          <span className="text-xs text-gray-300">{wallet.network}</span>
                        </div>
                        <div className="mt-1 font-mono text-xs text-gray-300 break-all">
                          {wallet.address}
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-2">
                      <Label htmlFor="transactionId" className="text-sm text-white">
                        Transaction ID (for tracking purposes)
                      </Label>
                      <Input
                        id="transactionId"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Enter transaction ID"
                        className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Knowledge Base Option */}
            <AccordionItem value="knowledge" className="border-cyber/30">
              <AccordionTrigger className="text-white hover:text-cyber">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Knowledge Base Contribution</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-2">
                  <div>
                    <Label htmlFor="knowledgeTitle" className="text-sm text-white">
                      Title of the knowledge
                    </Label>
                    <Input
                      id="knowledgeTitle"
                      value={knowledgeTitle}
                      onChange={(e) => setKnowledgeTitle(e.target.value)}
                      placeholder="Your thoughts"
                      className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="knowledgeLink" className="text-sm text-white">
                      Link (website, LinkedIn post, Twitter thread, or research)
                    </Label>
                    <Input
                      id="knowledgeLink"
                      value={knowledgeLink}
                      onChange={(e) => setKnowledgeLink(e.target.value)}
                      placeholder="https://"
                      className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Network Recommendation Option */}
            <AccordionItem value="network" className="border-cyber/30">
              <AccordionTrigger className="text-white hover:text-cyber">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Network Recommendation (47)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-2">
                  <div>
                    <Label htmlFor="networkContact" className="text-sm text-white">
                      Who do you recommend join us or for us to contact?
                    </Label>
                    <Input
                      id="networkContact"
                      value={networkContact}
                      onChange={(e) => setNetworkContact(e.target.value)}
                      placeholder="Name or contact information"
                      className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="networkReason" className="text-sm text-white">
                      Tell us why (280 characters max)
                    </Label>
                    <Textarea
                      id="networkReason"
                      value={networkReason}
                      onChange={(e) => {
                        if (e.target.value.length <= 280) {
                          setNetworkReason(e.target.value);
                        }
                      }}
                      placeholder="Why should we connect?"
                      className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                      maxLength={280}
                    />
                    <div className="text-xs text-right mt-1 text-gray-400">
                      {networkReason.length}/280
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="pt-4 text-center">
            <p className="text-nature text-sm mb-4 font-medium">
              Thank you for your support! 🙏
            </p>
            <Button 
              className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white w-full"
              onClick={() => onOpenChange(false)}
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportModal;
