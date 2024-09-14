// app/(public)/HomeLayoutContent.tsx
'use client';

import React from 'react';
import { AuthProvider } from '@/contexts/AuthContext';

export default function HomeLayoutContent({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthProvider>{children}</AuthProvider>;
}