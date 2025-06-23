
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SupportModal from './SupportModal';
import NavLogo from './navbar/NavLogo';
import NavLinks from './navbar/NavLinks';
import NavActions from './navbar/NavActions';
import MobileMenu from './navbar/MobileMenu';
import { useNavbarScroll } from './navbar/useNavbarScroll';

const Navbar: React.FC = () => {
  const isScrolled = useNavbarScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
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
          <NavLogo />
          
          {/* Desktop menu */}
          <NavLinks 
            onSmoothScroll={handleSmoothScroll}
            className="hidden md:flex space-x-8"
          />
          
          <NavActions 
            onSupportClick={() => setIsSupportModalOpen(true)}
            className="hidden md:flex items-center space-x-4"
          />
          
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
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onSmoothScroll={handleSmoothScroll}
        onSupportClick={() => setIsSupportModalOpen(true)}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Support Modal */}
      <SupportModal
        open={isSupportModalOpen}
        onOpenChange={setIsSupportModalOpen}
      />
    </nav>
  );
};

export default Navbar;
