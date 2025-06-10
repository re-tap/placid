
import React from 'react';

interface BlurredNumberProps {
  value: string | number;
}

const BlurredNumber: React.FC<BlurredNumberProps> = ({ value }) => {
  return (
    <div className="relative inline-block">
      <span className="blur-[6px] opacity-81">{value}</span>
      <span className="absolute -top-1 -right-4 text-[9px] bg-gradient-to-r from-cyber to-nature text-white px-1.5 py-0 my-0.5 rounded text-center font-medium tracking-tight shadow-sm">soon</span>
    </div>
  );
};

export default BlurredNumber;
