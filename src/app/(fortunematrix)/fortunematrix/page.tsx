'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/FortuneMatrix/SideBar';
import WorkRelease from '@/components/FortuneMatrix/WorkRelease';
import AccountAuth from '@/components/FortuneMatrix/AccountAuth';

const MainLayout = () => {
    const [activeItem, setActiveItem] = useState('作品发布记录');

    const renderContent = () => {
        switch (activeItem) {
            case '作品发布记录':
                return <WorkRelease />;
            case '账号授权管理':
                return <AccountAuth />
            default:
                return <div>Select an item from the sidebar</div>;
        }
    };

    return (
        <div className="flex h-screen bg-background">
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
            <main className="flex-1 overflow-y-auto p-4">
                {renderContent()}
            </main>
        </div>
    );
};

export default MainLayout;