// 'use client';
// import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// export default function UserProfile() {
//     const [avatar, setAvatar] = useState('/placeholder.jpg')
//     const [nickname, setNickname] = useState('用户昵称')

//     const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             const reader = new FileReader()
//             reader.onloadend = () => {
//                 setAvatar(reader.result as string || '/placeholder.jpg')
//             }
//             reader.readAsDataURL(file)
//         }
//     }

//     return (
//         <div className="space-y-6">
//             <form className="space-y-6">
//                 <div className="space-y-2">
//                     <Label htmlFor="avatar">头像</Label>
//                     <div className="flex items-center space-x-4">
//                         <Avatar className="w-20 h-20">
//                             <AvatarImage src={avatar} alt="Avatar" />
//                             <AvatarFallback>CN</AvatarFallback>
//                         </Avatar>
//                         <Input id="avatar" type="file" accept="image/*" onChange={handleAvatarChange} className="w-auto" />
//                     </div>
//                 </div>

//                 <div className="space-y-2">
//                     <Label htmlFor="nickname">昵称</Label>
//                     <Input id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
//                 </div>

//                 <div className="space-y-2">
//                     <Label>手机号</Label>
//                     <p className="text-sm text-muted-foreground">138****5678</p>
//                 </div>

//                 <div className="space-y-2">
//                     <Label>角色</Label>
//                     <p className="text-sm text-muted-foreground">管理员</p>
//                 </div>

//                 <div className="space-y-2">
//                     <Label>所在团队</Label>
//                     <p className="text-sm text-muted-foreground">技术部</p>
//                 </div>

//                 <Button type="submit">保存更改</Button>
//             </form>
//         </div>
//     )
// }
// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { getUserProfile, updateUserProfile, getAvatarList } from '../../utils/accountapi';
// import { isAuthenticated } from '../auth';

// export default function UserProfile() {
//     const [avatar, setAvatar] = useState('/placeholder.jpg');
//     const [nickname, setNickname] = useState('用户昵称');
//     const [mobile, setMobile] = useState('');
//     const [role, setRole] = useState('');
//     const [team, setTeam] = useState('');
//     const [avatarList, setAvatarList] = useState<string[]>([]);

//     useEffect(() => {
//         if (isAuthenticated()) {
//             fetchUserProfile();
//             fetchAvatarList();
//         } else {
//             // 处理未登录状态，比如重定向到登录页面
//             console.error('User is not authenticated');
//             // router.push('/login');
//         }
//     }, []);

//     const fetchUserProfile = async () => {
//         try {
//             const data = await getUserProfile();
//             setNickname(data.nickname);
//             setAvatar(data.avatar_address);
//             setMobile(data.mobile);
//             setRole(data.role);
//             setTeam(data.company_name);
//         } catch (error) {
//             console.error('Failed to fetch user profile:', error);
//         }
//     };

//     const fetchAvatarList = async () => {
//         try {
//             const data = await getAvatarList();
//             setAvatarList(data);
//         } catch (error) {
//             console.error('Failed to fetch avatar list:', error);
//         }
//     };

//     const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             const reader = new FileReader()
//             reader.onloadend = () => {
//                 setAvatar(reader.result as string || '/placeholder.jpg')
//             }
//             reader.readAsDataURL(file)
//         }
//     }

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await updateUserProfile({ nickname, avatar_address: avatar });
//             alert('Profile updated successfully');
//         } catch (error) {
//             console.error('Failed to update profile:', error);
//             alert('Failed to update profile');
//         }
//     };

//     return (
//         <div className="space-y-6">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div className="space-y-2">
//                     <Label htmlFor="avatar">头像</Label>
//                     <div className="flex items-center space-x-4">
//                         <Avatar className="w-20 h-20">
//                             <AvatarImage src={avatar} alt="Avatar" />
//                             <AvatarFallback>CN</AvatarFallback>
//                         </Avatar>
//                         <Input id="avatar" type="file" accept="image/*" onChange={handleAvatarChange} className="w-auto" />
//                     </div>
//                     <div className="flex space-x-2 mt-2">
//                         {avatarList.map((avatarUrl, index) => (
//                             <Avatar key={index} className="w-10 h-10 cursor-pointer" onClick={() => setAvatar(avatarUrl)}>
//                                 <AvatarImage src={avatarUrl} alt={`Avatar ${index + 1}`} />
//                             </Avatar>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="space-y-2">
//                     <Label htmlFor="nickname">昵称</Label>
//                     <Input id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
//                 </div>

//                 <div className="space-y-2">
//                     <Label>手机号</Label>
//                     <p className="text-sm text-muted-foreground">{mobile}</p>
//                 </div>

//                 <div className="space-y-2">
//                     <Label>角色</Label>
//                     <p className="text-sm text-muted-foreground">{role}</p>
//                 </div>

//                 <div className="space-y-2">
//                     <Label>所在团队</Label>
//                     <p className="text-sm text-muted-foreground">{team}</p>
//                 </div>

//                 <Button type="submit">保存更改</Button>
//             </form>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useGlobalStore from '../../hooks/useGlobalStore';
import { fetchUserInfo, UserInfo, fetchAvatarList, updateUserProfile } from '../../hooks/useProfileInfo';
import { useToast } from "@/components/ui/use-toast"

const UserProfile = () => {
    const { toast } = useToast();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { store: globalStore } = useGlobalStore();

    const [avatar, setAvatar] = useState('/placeholder.jpg');
    const [nickname, setNickname] = useState('');
    const [avatarList, setAvatarList] = useState<string[]>([]);
    const [isEditing, setIsEditing] = useState(false);

    const fetchUserData = async () => {
        if (!globalStore.token || !globalStore.tenant_id) {
            setError('Authentication information is missing. Please log in.');
            return;
        }

        try {
            const info = await fetchUserInfo(globalStore.token, globalStore.tenant_id.toString());
            setUserInfo(info);
            setNickname(info.nickname);
            setAvatar(info.avatar_address || '/placeholder.jpg');
        } catch (err: any) {
            setError(err.message || 'An error occurred while fetching user info');
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [globalStore.token, globalStore.tenant_id]);

    const handleEdit = async () => {
        setIsEditing(true);
        if (avatarList.length === 0) {
            try {
                const avatars = await fetchAvatarList(globalStore.token ?? '', globalStore.tenant_id?.toString() ?? '');
                setAvatarList(avatars);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching avatar list');
            }
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setNickname(userInfo?.nickname || '');
        setAvatar(userInfo?.avatar_address || '/placeholder.jpg');
    };

    const handleSubmit = async () => {
        try {
            const success = await updateUserProfile(globalStore.token ?? '', globalStore.tenant_id?.toString() ?? '', {
                nickname,
                avatar_address: avatar
            });
            if (success) {
                await fetchUserData(); // Fetch the latest user info
                setIsEditing(false);
                toast({
                    title: "Profile updated",
                    description: "Your profile has been successfully updated.",
                });
            }
        } catch (error: any) {
            toast({
                title: "Update failed",
                description: error.message || "Failed to update profile. Please try again.",
                variant: "destructive",
            });
        }
    };

    if (error) {
        return <div className="p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>;
    }

    if (!userInfo) {
        return <div className="p-4 bg-gray-100 text-gray-700 rounded-lg">Loading...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">User Profile</h2>
                {!isEditing && (
                    <Button onClick={handleEdit}>Edit</Button>
                )}
            </div>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={avatar} alt="Avatar" />
                        <AvatarFallback>
                            {userInfo.nickname.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                        <div className="flex flex-wrap gap-2">
                            {avatarList.map((avatarUrl, index) => (
                                <Avatar
                                    key={index}
                                    className="w-10 h-10 cursor-pointer"
                                    onClick={() => setAvatar(avatarUrl)}
                                >
                                    <AvatarImage src={avatarUrl} alt={`Avatar ${index + 1}`} />
                                </Avatar>
                            ))}
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="nickname">昵称</Label>
                    {isEditing ? (
                        <Input
                            id="nickname"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                        />
                    ) : (
                        <p className="text-sm text-muted-foreground">{userInfo.nickname}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>手机号</Label>
                    <p className="text-sm text-muted-foreground">{userInfo.mobile}</p>
                </div>

                <div className="space-y-2">
                    <Label>角色</Label>
                    <p className="text-sm text-muted-foreground">{userInfo.role}</p>
                </div>

                <div className="space-y-2">
                    <Label>所在团队</Label>
                    <p className="text-sm text-muted-foreground">{userInfo.account_name}</p>
                </div>

                {isEditing && (
                    <div className="flex space-x-4">
                        <Button onClick={handleSubmit}>确定</Button>
                        <Button variant="outline" onClick={handleCancel}>取消</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;