import React, { useState } from 'react';
import PlacidLogo from './PlacidLogo';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SupportModal from './SupportModal';
import NewsletterModal from './NewsletterModal';

const Footer: React.FC = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <PlacidLogo className="h-6 w-6 mr-2" />
              <span className="text-lg font-bold text-white">Placid</span>
            </div>
            <p className="text-gray-400 text-sm">
              Retaping cyberpunk innovation with solarpunk sustainability for a harmonious future.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#manifesto" className="text-gray-400 hover:text-cyber transition-colors">Manifesto</a>
              </li>
              <li>
                <a href="#values" className="text-gray-400 hover:text-cyber transition-colors">Values</a>
              </li>
              <li>
                <a href="#vision" className="text-gray-400 hover:text-cyber transition-colors">Vision</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-cyber transition-colors">Team</a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-cyber transition-colors">Community</a>
              </li>
              <li>
                <a href="#memories" className="text-gray-400 hover:text-cyber transition-colors">Memories</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/message" className="text-cyber hover:text-cyber transition-colors">Message</Link>
              </li>
              <li>
                <Link to="/who-is-this-for" className="text-nature hover:text-cyber transition-colors">Who is this for</Link>
              </li>
              
              <li>
                <Link to="/sponsorships" className="text-nature hover:text-cyber transition-colors">Sponsorships</Link>
              </li>
              <li>
                <Link to="/twitter" className="text-gray-400 hover:text-cyber transition-colors">Twitter</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-cyber transition-colors">Events</Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-cyber transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-cyber transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/code-of-conduct" className="text-gray-400 hover:text-cyber transition-colors">Code of Conduct</Link>
              </li>
              <li className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsNewsletterModalOpen(true)}
                  className="text-cyber border-cyber/30 hover:bg-cyber/10"
                >
                  Subscribe to Newsletter
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Placid. All rights reserved.
          </p>
        </div>
      </div>

      {/* Support Modal */}
      <SupportModal
        open={isSupportModalOpen}
        onOpenChange={setIsSupportModalOpen}
      />
      
      {/* Newsletter Modal */}
      <NewsletterModal
        open={isNewsletterModalOpen}
        onOpenChange={setIsNewsletterModalOpen}
      />
    </footer>
  );
};

export default Footer;
