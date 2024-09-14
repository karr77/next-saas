'use client';

import React, { useState } from 'react';
import UserProfile from './UserProfile';
import TeamProfile from './TeamProfile';

const ProfileContent = () => {
    const [activeItem, setActiveItem] = useState('个人信息');

    const renderContent = () => {
        switch (activeItem) {
            case '个人信息':
                return <UserProfile />;
            case '团队信息':
                return <TeamProfile />;
            default:
                return null;
        }
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-2">{activeItem}</h1>
            <p className="text-muted-foreground mb-6">管理您的账户设置和个人信息。</p>
            {renderContent()}
        </>
    );
};

export default ProfileContent;