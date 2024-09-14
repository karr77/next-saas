// src/hooks/useAuth.ts

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useGlobalStore from './useGlobalStore';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const { store, setGlobalStore, clearGlobalStore } = useGlobalStore();

    useEffect(() => {
        const token = store.token;
        setIsAuthenticated(!!token);
    }, [store.token]);

    const login = (token: string, userData: any) => {
        setGlobalStore({ token, user_info: userData });
        setIsAuthenticated(true);
    };

    const logout = () => {
        clearGlobalStore();
        setIsAuthenticated(false);
        router.push('/login');
    };

    return { isAuthenticated, login, logout };
};