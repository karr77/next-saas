'use client';

import React from 'react';
import UserProfile from '@/components/PersonalProfile/UserProfile';
import { withAuth } from '@/components/withAuth';

const UserProfilePage = () => {
    return <UserProfile />;
};

export default withAuth(UserProfilePage);