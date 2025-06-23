
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FundraisingBanner from '@/components/FundraisingBanner';
import Manifesto from '@/components/Manifesto';
import Values from '@/components/Values';
import Vision from '@/components/Vision';
import Team from '@/components/Team';
import Community from '@/components/Community';
import Memories from '@/components/Memories';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <div className="section-container">
        <FundraisingBanner />
      </div>
      <Manifesto />
      <Values />
      <Vision />
      <Team />
      <Memories />
      <Community />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default Index;
