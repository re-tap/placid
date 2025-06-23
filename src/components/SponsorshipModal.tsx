
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface SponsorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: {
    name: string;
    price: string;
    originalPrice: string;
    badgeColor: string;
    features: string[];
  };
}

const SponsorshipModal = ({ isOpen, onClose, tier }: SponsorshipModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      tier: tier.name,
      company: formData.get('company') as string,
      contact: formData.get('contact') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || 'Not provided'
    };

    console.log('Submitting sponsorship application:', data);

    try {
      // Try direct FormSubmit first (more reliable)
      console.log('Sending email via FormSubmit...');
      
      const formSubmitData = new FormData();
      formSubmitData.append('_subject', `New ${tier.name} Sponsorship Application`);
      formSubmitData.append('_template', 'box');
      formSubmitData.append('_captcha', 'false');
      formSubmitData.append('tier', data.tier);
      formSubmitData.append('company', data.company);
      formSubmitData.append('contact', data.contact);
      formSubmitData.append('email', data.email);
      formSubmitData.append('phone', data.phone);
      formSubmitData.append('tier_price', tier.price);
      formSubmitData.append('original_price', tier.originalPrice);
      formSubmitData.append('features', tier.features.join(', '));
      formSubmitData.append('timestamp', new Date().toISOString());

      const response = await fetch('https://formsubmit.co/palcidfurture@gmail.com', {
        method: 'POST',
        body: formSubmitData
      });

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully!",
          description: "We've received your sponsorship application and will get back to you within 24 hours.",
        });
        
        (e.target as HTMLFormElement).reset();
        onClose();
      } else {
        throw new Error('FormSubmit failed');
      }

    } catch (error) {
      console.error('Error sending email:', error);
      
      // Try EmailJS as fallback with corrected service details
      try {
        console.log('Trying EmailJS fallback...');
        
        emailjs.init("nnlt8rgq17xfOUwwQ");
        
        const templateParams = {
          to_email: 'palcidfurture@gmail.com',
          from_name: data.contact,
          from_email: data.email,
          subject: `New ${tier.name} Sponsorship Application`,
          message: `
            Sponsorship Application Details:
            
            Sponsorship Tier: ${data.tier}
            Company Name: ${data.company}
            Contact Person: ${data.contact}
            Email: ${data.email}
            Phone: ${data.phone}
            
            Applied for ${tier.name} sponsorship package at ${tier.price}/year
            Original Price: ${tier.originalPrice}
            
            Package Features:
            ${tier.features.map(feature => `• ${feature}`).join('\n')}
            
            Submitted from: ${window.location.origin}
            Timestamp: ${new Date().toISOString()}
          `,
          tier_name: data.tier,
          company_name: data.company,
          contact_person: data.contact,
          contact_email: data.email,
          phone_number: data.phone,
          tier_price: tier.price,
          original_price: tier.originalPrice
        };

        const emailResponse = await emailjs.send(
          'service_sponsorship',
          'template_sponsorship',
          templateParams
        );

        console.log('EmailJS response:', emailResponse);

        toast({
          title: "Application Submitted!",
          description: "Your application has been sent successfully.",
        });
        
        (e.target as HTMLFormElement).reset();
        onClose();

      } catch (emailError) {
        console.error('EmailJS also failed:', emailError);
        
        // Final fallback - show manual contact info
        toast({
          title: "Please Contact Us Directly",
          description: "There was an issue with our form. Please email us directly at palcidfurture@gmail.com with your sponsorship application.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-0 bg-cyber-dark/95 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Get Started with {tier.name} Sponsorship
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <Badge className={`${tier.badgeColor} text-white px-4 py-2 mb-4`}>
              {tier.name} Tier
            </Badge>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xl text-gray-500 line-through">{tier.originalPrice}</span>
              <span className="text-3xl font-bold text-cyber">{tier.price}</span>
              <span className="text-gray-400">/ year</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Package Includes:</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {tier.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-nature mr-2">•</span>
                    {feature}
                  </li>
                ))}
                {tier.features.length > 4 && (
                  <li className="text-gray-400">+ {tier.features.length - 4} more benefits</li>
                )}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="tier" className="text-white">Sponsorship Tier</Label>
                <Input 
                  id="tier" 
                  name="tier"
                  className="bg-black/50 border-gray-600 text-white" 
                  value={`${tier.name} - ${tier.price}/year`}
                  readOnly
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-white">Company Name *</Label>
                <Input 
                  id="company" 
                  name="company"
                  className="bg-black/50 border-gray-600 text-white" 
                  placeholder="Your company name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact" className="text-white">Contact Person *</Label>
                <Input 
                  id="contact" 
                  name="contact"
                  className="bg-black/50 border-gray-600 text-white" 
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  className="bg-black/50 border-gray-600 text-white" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-white">Phone (Optional)</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  className="bg-black/50 border-gray-600 text-white" 
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </Button>
              
              <p className="text-xs text-gray-400 text-center">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SponsorshipModal;
