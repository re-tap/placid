
import React from 'react';
import PlacidLogo from '../PlacidLogo';

const NavLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <PlacidLogo className="h-10 w-10 mr-2" />
      <span className="text-xl font-bold text-white">Placid</span>
    </div>
  );
};

export default NavLogo;
