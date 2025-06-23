
import React from 'react';
import { Button } from '../ui/button';
import JoinUsButton from '../JoinUsButton';

interface NavActionsProps {
  onSupportClick: () => void;
  className?: string;
}

const NavActions: React.FC<NavActionsProps> = ({ onSupportClick, className = "" }) => {
  return (
    <div className={className}>
      <Button
        onClick={onSupportClick} 
        className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white"
        variant="ghost"
      >
        Support this Mission
      </Button>
      <JoinUsButton className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white" />
    </div>
  );
};

export default NavActions;
