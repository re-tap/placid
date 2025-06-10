import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ReTapLogo from './ReTapLogo';
import JoinUsButton from './JoinUsButton';
import SupportModal from './SupportModal';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Add some offset to account for the navbar
        behavior: 'smooth',
      });
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-dark/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ReTapLogo className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold text-white">Placid</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#manifesto" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "manifesto")}
            >
              Manifesto
            </a>
            <a 
              href="#values" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "values")}
            >
              Values
            </a>
            <a 
              href="#vision" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "vision")}
            >
              Vision
            </a>
            <a 
              href="#team" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "team")}
            >
              Team
            </a>
            <a 
              href="#community" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "community")}
            >
              Community
            </a>
            <a 
              href="#memories" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "memories")}
            >
              Memories
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => setIsSupportModalOpen(true)} 
              className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white"
              variant="ghost"
            >
              Support this Mission
            </Button>
            <JoinUsButton className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white" />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 py-4 rounded-lg animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            <a 
              href="#manifesto" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "manifesto")}
            >
              Manifesto
            </a>
            <a 
              href="#values" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "values")}
            >
              Values
            </a>
            <a 
              href="#vision" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "vision")}
            >
              Vision
            </a>
            <a 
              href="#team" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "team")}
            >
              Team
            </a>
            <a 
              href="#community" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "community")}
            >
              Community
            </a>
            <a 
              href="#memories" 
              className="text-white hover:text-cyber transition-colors"
              onClick={(e) => handleSmoothScroll(e, "memories")}
            >
              Memories
            </a>
            
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSupportModalOpen(true);
              }} 
              className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white w-full"
              variant="ghost"
            >
              Support this Mission
            </Button>
            
            <JoinUsButton className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white w-full">
              Join Us
            </JoinUsButton>
          </div>
        </div>
      )}

      {/* Support Modal */}
      <SupportModal
        open={isSupportModalOpen}
        onOpenChange={setIsSupportModalOpen}
      />
    </nav>
  );
};

export default Navbar;
