import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface AddonsModalProps {
  isOpen: boolean;
  onClose: () => void;
  addon: {
    id: string;
    title: string;
    price: string;
    description: string;
  };
}

const AddonsModal = ({ isOpen, onClose, addon }: AddonsModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      addonTitle: addon.title,
      addonPrice: addon.price,
      company: formData.get('company') as string,
      contact: formData.get('contact') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || 'Not provided',
      timeline: formData.get('timeline') as string,
      budget: formData.get('budget') as string,
      details: formData.get('details') as string
    };

    console.log('Submitting add-on sponsorship application:', data);

    try {
      // Try FormSubmit first (more reliable)
      console.log('Sending add-on email via FormSubmit...');
      
      const formSubmitData = new FormData();
      formSubmitData.append('_subject', `New Add-on Sponsorship Application: ${addon.title}`);
      formSubmitData.append('_template', 'box');
      formSubmitData.append('_captcha', 'false');
      formSubmitData.append('addon_title', data.addonTitle);
      formSubmitData.append('addon_price', data.addonPrice);
      formSubmitData.append('company', data.company);
      formSubmitData.append('contact', data.contact);
      formSubmitData.append('email', data.email);
      formSubmitData.append('phone', data.phone);
      formSubmitData.append('timeline', data.timeline);
      formSubmitData.append('budget', data.budget);
      formSubmitData.append('details', data.details);
      formSubmitData.append('timestamp', new Date().toISOString());

      const response = await fetch('https://formsubmit.co/palcidfurture@gmail.com', {
        method: 'POST',
        body: formSubmitData
      });

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully!",
          description: "We've received your add-on sponsorship application and will get back to you within 24 hours.",
        });
        
        (e.target as HTMLFormElement).reset();
        onClose();
      } else {
        throw new Error('FormSubmit failed');
      }

    } catch (error) {
      console.error('Error sending email:', error);
      
      // Try EmailJS as fallback
      try {
        console.log('Trying EmailJS fallback for add-on...');
        
        emailjs.init("nnlt8rgq17xfOUwwQ");
        
        const templateParams = {
          to_email: 'palcidfurture@gmail.com',
          from_name: data.contact,
          from_email: data.email,
          subject: `New Add-on Sponsorship Application: ${addon.title}`,
          message: `
            Add-on Sponsorship Application Details:
            
            Add-on Selected: ${data.addonTitle}
            Estimated Price: ${data.addonPrice}
            
            Company Information:
            Company Name: ${data.company}
            Contact Person: ${data.contact}
            Email: ${data.email}
            Phone: ${data.phone}
            
            Project Details:
            Timeline: ${data.timeline}
            Budget Range: ${data.budget}
            Additional Details: ${data.details}
            
            Submitted from: ${window.location.origin}
            Timestamp: ${new Date().toISOString()}
          `,
          addon_title: data.addonTitle,
          addon_price: data.addonPrice,
          company_name: data.company,
          contact_person: data.contact,
          contact_email: data.email,
          phone_number: data.phone,
          project_timeline: data.timeline,
          budget_range: data.budget,
          project_details: data.details
        };

        const emailResponse = await emailjs.send(
          'service_addons',
          'template_addons',
          templateParams
        );

        console.log('EmailJS add-on response:', emailResponse);

        toast({
          title: "Application Submitted!",
          description: "Your add-on application has been sent successfully.",
        });
        
        (e.target as HTMLFormElement).reset();
        onClose();

      } catch (emailError) {
        console.error('EmailJS also failed:', emailError);
        
        // Final fallback
        toast({
          title: "Please Contact Us Directly",
          description: "There was an issue with our form. Please email us directly at palcidfurture@gmail.com with your add-on sponsorship application.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-0 bg-cyber-dark/95 text-white max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Get Started with Add-on Sponsorship
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <Badge className="bg-cyber text-white px-4 py-2 mb-4">
              Add-on Sponsorship
            </Badge>
            <div className="glass-card p-4 mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">{addon.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{addon.description}</p>
              <div className="text-xl font-bold text-cyber">{addon.price}</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
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
              <div>
                <Label htmlFor="timeline" className="text-white">Project Timeline *</Label>
                <Input 
                  id="timeline" 
                  name="timeline"
                  className="bg-black/50 border-gray-600 text-white" 
                  placeholder="e.g., Q2 2024, 3-6 months"
                  required
                />
              </div>
              <div>
                <Label htmlFor="budget" className="text-white">Budget Range *</Label>
                <Input 
                  id="budget" 
                  name="budget"
                  className="bg-black/50 border-gray-600 text-white" 
                  placeholder="e.g., $10K-25K"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="details" className="text-white">Additional Details & Goals</Label>
              <Textarea 
                id="details" 
                name="details"
                className="bg-black/50 border-gray-600 text-white min-h-[100px]" 
                placeholder="Tell us more about your vision, specific goals, target audience, or any custom requirements..."
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Add-on Application'}
            </Button>
            
            <p className="text-xs text-gray-400 text-center">
              * Required fields. We'll respond within 24 hours with a custom proposal.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddonsModal;
