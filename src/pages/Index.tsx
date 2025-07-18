
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CorePhilosophy from '@/components/CorePhilosophy';
import FundraisingBanner from '@/components/FundraisingBanner';
import ThankYou from '@/components/ThankYou';
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
      <CorePhilosophy />
      <div className="section-container">
        <FundraisingBanner />
      </div>
      <ThankYou />
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
