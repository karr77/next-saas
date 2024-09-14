'use client';

import useGlobalStore from '@/hooks/useGlobalStore';

const SomeComponent = () => {
    const { store } = useGlobalStore();

    return (
        <div>
            <p>Welcome, {store.user_info?.nickname}</p>
            {/* 使用其他存储的数据 */}
        </div>
    );
};

export default SomeComponent;