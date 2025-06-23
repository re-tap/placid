
import React from 'react';

interface NavLinksProps {
  onSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ onSmoothScroll, className = "" }) => {
  const links = [
    { href: "#manifesto", text: "Manifesto" },
    { href: "#values", text: "Values" },
    { href: "#vision", text: "Vision" },
    { href: "#team", text: "Team" },
    { href: "#community", text: "Community" },
    { href: "#memories", text: "Memories" }
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <a 
          key={link.href}
          href={link.href}
          className="text-white hover:text-cyber transition-colors"
          onClick={(e) => onSmoothScroll(e, link.href.substring(1))}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
