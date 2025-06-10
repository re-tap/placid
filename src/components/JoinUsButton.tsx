
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SignUpForm from './SignUpForm';

interface JoinUsButtonProps {
  className?: string;
  children?: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon"; // Add size prop matching Button's size prop types
}

const JoinUsButton: React.FC<JoinUsButtonProps> = ({ className, children, size = "default" }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Button 
        className={className} 
        size={size}
        onClick={() => setIsFormOpen(true)}
      >
        {children || 'Join Us'}
      </Button>
      <SignUpForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default JoinUsButton;
