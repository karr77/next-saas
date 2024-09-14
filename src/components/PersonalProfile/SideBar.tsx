'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: '个人信息', path: '/userprofile/user' },
        { name: '团队信息', path: '/userprofile/team' },
    ];

    return (
        <aside className="w-64 bg-gray-100 p-4">
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.name} className="mb-2">
                            <Link
                                href={item.path}
                                className={`block p-2 rounded ${pathname === item.path ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;