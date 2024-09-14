'use client';

import React from 'react';
import TeamProfile from '@/components/PersonalProfile/TeamProfile';
import { withAuth } from '@/components/withAuth';

const TeamProfilePage = () => {
    return <TeamProfile />;
};

export default withAuth(TeamProfilePage);