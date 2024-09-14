// // app/RootLayoutContent.tsx
// 'use client';

// import React from 'react';
// import { AuthProvider } from '@/contexts/AuthContext';
// import ProtectedRoute from '@/components/ProtectedRoute';
// import { usePathname } from 'next/navigation';

// export default function RootLayoutContent({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     const pathname = usePathname();
//     const isPublicRoute = pathname === '/';

//     return (
//         <AuthProvider>
//             {isPublicRoute ? children : <ProtectedRoute>{children}</ProtectedRoute>}
//         </AuthProvider>
//     );
// }