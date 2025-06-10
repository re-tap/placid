
import React from 'react';
import { Sprout } from 'lucide-react';

interface ReTapLogoProps {
  className?: string;
}

const ReTapLogo: React.FC<ReTapLogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyber to-nature rounded-full opacity-30 animate-pulse"></div>
      <div className="relative flex items-center justify-center w-full h-full bg-cyber-dark/80 rounded-full border border-cyber/30 backdrop-blur-sm">
        <Sprout className="w-5 h-5 text-nature" />
        <div className="absolute w-2 h-2 bg-cyber rounded-full top-1/3 right-1/3 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ReTapLogo;
