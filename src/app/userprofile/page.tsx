'use client';

import React from 'react';
import ProfileContent from '@/components/PersonalProfile/ProfileContent';
import { withAuth } from '@/components/withAuth';

const ProfilePage = () => {
    return <ProfileContent />;
};

export default withAuth(ProfilePage);