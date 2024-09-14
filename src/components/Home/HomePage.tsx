import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Hero from '@/components/Home/Hero';
import MarqueeSection from '@/components/Home/MarqueeSection';
import ScrollTriggeredSection from '@/components/Home/ScrollTriggeredSection';
import CallToAction from '@/components/Home/CallToAction';

export default function HomePage() {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 确保内容可滚动
        if (contentRef.current) {
            contentRef.current.style.height = 'auto';
            contentRef.current.style.overflow = 'visible';
        }
    }, []);

    return (
        <div className="min-h-screen bg-cover bg-center" ref={contentRef}>
            <Navbar />
            <div className="space-y-16 pb-16">  {/* 增加间距和底部填充 */}
                <Hero />
                <MarqueeSection />
                <ScrollTriggeredSection />
                <CallToAction />
                <CallToAction />
                <CallToAction />
            </div>
        </div>
    );
}