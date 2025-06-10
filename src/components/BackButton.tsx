
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Don't show the back button on the main landing page
  if (location.pathname === '/') {
    return null;
  }
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => navigate('/')}
      className="fixed top-4 left-4 z-50 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-black/60 transition-all"
      aria-label="Back to home"
    >
      <ArrowLeft className="h-5 w-5 text-white" />
    </Button>
  );
};

export default BackButton;
