import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
    return (
        <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="relative z-10 p-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg max-w-2xl w-full mx-4">
                <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Service</h1>
                <p className="text-white text-lg mb-6">
                    Experience the power of our innovative solutions. We're here to help you achieve your goals with cutting-edge technology and expert support.
                </p>
                <div className="flex space-x-4">
                    <Input type="email" placeholder="Enter your email" className="bg-white bg-opacity-20 text-white placeholder-gray-200" />
                    <Button className="bg-white text-black hover:bg-opacity-90 transition-colors">
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;