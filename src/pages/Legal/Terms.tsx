
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-cyber">Terms of Service</h1>
        
        <div className="glass-card p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p className="text-gray-300 mb-4">
            By accessing or using Placid services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </div>
        
        <div className="glass-card p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="text-gray-300 mb-4">
            Permission is granted to temporarily access the materials on Placid's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on Placid's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </div>
        
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300">
            If you have questions or concerns about these Terms of Service, please contact us at legal@placid.org.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
