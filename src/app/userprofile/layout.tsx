import React from 'react';
import Sidebar from '@/components/PersonalProfile/SideBar';

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <div className="flex-grow p-6 overflow-auto">
                <div className="max-w-3xl mx-auto mt-16">
                    {children}
                </div>
            </div>
        </div>
    );
}