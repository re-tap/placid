
import React from 'react';
import { Button } from '../ui/button';
import JoinUsButton from '../JoinUsButton';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onSupportClick: () => void;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onSmoothScroll, 
  onSupportClick, 
  onClose 
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden glass-card mt-2 mx-4 py-4 rounded-lg animate-fade-in">
      <div className="flex flex-col space-y-4 px-4">
        <NavLinks 
          onSmoothScroll={onSmoothScroll}
          className="flex flex-col space-y-4"
        />
        
        <Button
          onClick={() => {
            onClose();
            onSupportClick();
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
  );
};

export default MobileMenu;
