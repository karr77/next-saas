'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/FortuneMatrix/SideBar';
import AccountAuth from '@/components/FortuneMatrix/AccountAuth';

const MainLayout = () => {
    const [activeItem, setActiveItem] = useState('账号授权管理');

    useEffect(() => {
        console.log('Active item changed:', activeItem);
    }, [activeItem]);

    const renderContent = () => {
        console.log('Rendering content for:', activeItem);
        switch (activeItem) {
            case '账号授权管理':
                return <AccountAuth />;
            // Add other cases for different sidebar items here
            default:
                return <div>Select an item from the sidebar</div>;
        }
    };

    return (
        <div className="flex h-screen bg-background">
            <Sidebar
                activeItem={activeItem}
                setActiveItem={(item) => {
                    console.log('Setting active item to:', item);
                    setActiveItem(item);
                }}
            />
            <main className="flex-1 overflow-y-auto p-4">
                {renderContent()}
            </main>
        </div>
    );
};

export default MainLayout;