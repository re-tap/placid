
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MessageSquare, Calendar } from 'lucide-react';

interface ContactInfoProps {
  isVisible: boolean;
}

const ContactInfo = ({ isVisible }: ContactInfoProps) => {
  if (!isVisible) return null;

  return (
    <Card className="glass-card border-0 mt-6 animate-in slide-in-from-top-2 duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          Contact Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center text-gray-300">
              <Mail className="h-5 w-5 text-cyber mr-3" />
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="text-sm">partnerships@placid.org</p>
              </div>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="h-5 w-5 text-cyber mr-3" />
              <div>
                <p className="font-medium text-white">Phone</p>
                <p className="text-sm">+1 (555) 123-PLACID</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center text-gray-300">
              <MessageSquare className="h-5 w-5 text-cyber mr-3" />
              <div>
                <p className="font-medium text-white">Discord</p>
                <p className="text-sm">@PlacidPartnerships</p>
              </div>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="h-5 w-5 text-cyber mr-3" />
              <div>
                <p className="font-medium text-white">Schedule Meeting</p>
                <p className="text-sm">calendly.com/placid-partnerships</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 glass-card rounded-lg">
          <p className="text-gray-300 text-sm text-center">
            <strong className="text-white">Business Hours:</strong> Monday - Friday, 9 AM - 6 PM PST<br />
            <strong className="text-white">Response Time:</strong> Within 24 hours for partnership inquiries
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
