import React, { useState, useEffect, useRef } from 'react';
import WordFadeIn from "@/components/magicui/word-fade-in";
import { BentoDemo } from '@/components/BentoDemo/BentoDemo';

const ScrollTriggeredSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8">
            {isVisible && <WordFadeIn words="为什么选择招财进宝？" className="!text-white !text-4xl !font-bold tracking-[0.3em] py-20" />}
            <BentoDemo />
        </div>
    );
};

export default ScrollTriggeredSection;