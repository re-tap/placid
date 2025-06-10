
import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-cyber">Privacy Policy</h1>
        
        <div className="glass-card p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            At Placid, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="text-gray-300">
            Please read this privacy policy carefully. By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy.
          </p>
        </div>
        
        <div className="glass-card p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We may collect personal information that you voluntarily provide when interacting with our website, including but not limited to your name, email address, and any other information you choose to provide.
          </p>
          <p className="text-gray-300">
            We may also automatically collect certain information about your device, including your IP address, browser type, referring/exit pages, and operating system.
          </p>
        </div>
        
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300">
            If you have questions or concerns about this Privacy Policy, please contact us at privacy@placid.org.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
