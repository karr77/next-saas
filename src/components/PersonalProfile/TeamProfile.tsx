import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fetchUserInfo, fetchAvatarList, updateTeamProfile, UserInfo } from '../../hooks/useProfileInfo';
import type { TenantUpdateReq } from '@/api/models/TenantUpdateReq';

const TeamProfile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [teamInfo, setTeamInfo] = useState<UserInfo | null>(null);
    const [teamName, setTeamName] = useState('');
    const [teamAddress, setTeamAddress] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarList, setAvatarList] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const token = localStorage.getItem('token') || '';
                const tenantId = localStorage.getItem('tenantId') || '';
                const userInfo = await fetchUserInfo(token, tenantId);
                console.log('Fetched user info:', userInfo);
                setTeamInfo(userInfo);
                setTeamName(userInfo.company_name || '');
                setTeamAddress(userInfo.company_address || '');
                setAvatar(userInfo.avatar_address || '');

                const avatars = await fetchAvatarList(token, tenantId);
                console.log('Fetched avatar list:', avatars);
                setAvatarList(avatars);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = async () => {
        if (!teamInfo) return;

        try {
            const token = localStorage.getItem('token') || '';
            const tenantId = localStorage.getItem('tenantId') || '';
            const updateData: TenantUpdateReq = {
                company_name: teamName,
                company_address: teamAddress,
                logo_address: avatar,
                tenant_id: teamInfo.tenant_id
            };

            const success = await updateTeamProfile(token, tenantId, updateData);
            if (success) {
                setTeamInfo({ ...teamInfo, company_name: teamName, company_address: teamAddress, avatar_address: avatar });
                setIsEditing(false);
            } else {
                setError('Failed to update team profile. Please try again.');
            }
        } catch (error) {
            setError('An error occurred while updating the profile.');
        }
    };

    const handleCancel = () => {
        setTeamName(teamInfo?.company_name || '');
        setTeamAddress(teamInfo?.company_address || '');
        setAvatar(teamInfo?.avatar_address || '');
        setIsEditing(false);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!teamInfo) {
        return <div>No team information available.</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Team Profile</h3>
                {!isEditing && (
                    <Button onClick={handleEdit}>Edit</Button>
                )}
            </div>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={avatar} alt="Team Avatar" />
                        <AvatarFallback>
                            {teamInfo.company_name ? teamInfo.company_name.substring(0, 2).toUpperCase() : 'TM'}
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
                    <Label htmlFor="teamName">团队名称</Label>
                    {isEditing ? (
                        <Input
                            id="teamName"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    ) : (
                        <p className="text-sm text-muted-foreground">{teamInfo.company_name || 'N/A'}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="teamAddress">团队地址</Label>
                    {isEditing ? (
                        <Input
                            id="teamAddress"
                            value={teamAddress}
                            onChange={(e) => setTeamAddress(e.target.value)}
                        />
                    ) : (
                        <p className="text-sm text-muted-foreground">{teamInfo.company_address || 'N/A'}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>创建者</Label>
                    <p className="text-sm text-muted-foreground">{teamInfo.create_tenant_account_name || 'N/A'}</p>
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

export default TeamProfile;