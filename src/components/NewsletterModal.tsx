
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

interface NewsletterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterModal = ({ open, onOpenChange }: NewsletterModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-cyber to-nature bg-clip-text text-transparent">
            Subscribe to Our Newsletter
          </DialogTitle>
          <DialogDescription>
            Stay refreshed with our latest developments, inspiring and informative articles. 
            Don't worry, we won't overwhelm you. 
            Its only once a month.
          </DialogDescription>
        </DialogHeader>
        
        {/* Newsletter subscription form */}
        <div className="mt-6 glass-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Send Newsletters</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-black/30 border-white/20 placeholder:text-white/60"
            />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            By subscribing, you agree to our{' '}
            <Link to="/privacy" className="text-cyber hover:underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" className="text-cyber hover:underline">
              Terms of Service
            </Link>.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
