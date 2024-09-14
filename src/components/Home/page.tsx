'use client';

import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Hero from '@/components/Home/Hero';
import MarqueeSection from '@/components/Home/MarqueeSection';
import ScrollTriggeredSection from '@/components/Home/ScrollTriggeredSection';
import CallToAction from '@/components/Home/CallToAction';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <Hero />
            <MarqueeSection />
            <ScrollTriggeredSection />
            <CallToAction />
            <CallToAction />
        </div>
    );
}