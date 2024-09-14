// src/components/withAuth.tsx

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export const withAuth = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const { isAuthenticated } = useAuth();
        const router = useRouter();
        const [isChecking, setIsChecking] = useState(true);

        useEffect(() => {
            if (!isAuthenticated && !isChecking) {
                router.push('/login?redirect=' + encodeURIComponent(router.pathname));
            }
            setIsChecking(false);
        }, [isAuthenticated, isChecking, router]);

        if (isChecking) {
            return <div>Loading...</div>; // 或者返回一个加载指示器
        }

        if (!isAuthenticated) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};