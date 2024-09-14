// src/hooks/useGlobalStore.ts

import { useState, useEffect } from 'react';

interface UserInfo {
    id: string;
    account_name: string;
    role: string;
    email: string;
    mobile: string;
    nickname: string;
    avatar_address: string;
    // ... 其他 user_info 字段
}

interface GlobalStore {
    token: string | null;
    tenant_id: string | null;
    user_info: UserInfo | null;
}

const useGlobalStore = () => {
    const [store, setStore] = useState<GlobalStore>(() => {
        if (typeof window !== 'undefined') {
            const storedData = localStorage.getItem('globalStore');
            return storedData ? JSON.parse(storedData) : { token: null, tenant_id: null, user_info: null };
        }
        return { token: null, tenant_id: null, user_info: null };
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('globalStore', JSON.stringify(store));
        }
    }, [store]);

    const setGlobalStore = (data: Partial<GlobalStore>) => {
        setStore(prevStore => ({ ...prevStore, ...data }));
    };

    const clearGlobalStore = () => {
        setStore({ token: null, tenant_id: null, user_info: null });
        if (typeof window !== 'undefined') {
            localStorage.removeItem('globalStore');
        }
    };

    return { store, setGlobalStore, clearGlobalStore };
};

export default useGlobalStore;