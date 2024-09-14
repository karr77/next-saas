'use client';

import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Hero from '@/components/Home/Hero';
import MarqueeSection from '@/components/Home/MarqueeSection';
import ScrollTriggeredSection from '@/components/Home/ScrollTriggeredSection';
import CallToAction from '@/components/Home/CallToAction';

const HomePage = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <MarqueeSection />
    <ScrollTriggeredSection />
    <CallToAction />
    <CallToAction />
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen">
      <HomePage />
    </div>
  );
}