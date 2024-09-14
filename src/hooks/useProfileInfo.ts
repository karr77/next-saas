// src/services/userApi.ts

import { Service } from '../api/services/Service';
import { OpenAPI } from '../api/core/OpenAPI';
import type { UserInfoUpdateReq } from '../api/models/UserInfoUpdateReq';
import type { TenantUpdateReq } from '../api/models/TenantUpdateReq';
// 设置基础 URL
OpenAPI.BASE = 'http://passport.9000aigc.com';

export interface UserInfo {
    id: string;
    account_name: string;
    role: string;
    email?: string;
    mobile: string;
    nickname: string;
    avatar_address?: string;
    tenant_id: number;
    company_name: string;
    company_address: string;
    create_tenant_account_name: string;
}

export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
}

export interface AvatarListResponse {
    code: number;
    message: string;
    data: string[];
}

export interface TeamInfo {
    id: string;
    team_name: string;
    team_address: string;
    creator: string;
    avatar_address?: string;
}

export const fetchUserInfo = async (token: string, tenantId: string): Promise<UserInfo> => {
    try {
        const response = await Service.infoUsingGet(token, tenantId);
        if (response.code === 0 && response.data) {
            return response.data;
        } else {
            throw new Error(response.message || 'Failed to fetch user info');
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
};

export const fetchAvatarList = async (token: string, tenantId: string): Promise<string[]> => {
    try {
        const response = await Service.headerImagesListUsingPost(token, tenantId);
        if (response.code === 0 && response.data) {
            return response.data;
        } else {
            throw new Error(response.message || 'Failed to fetch avatar list');
        }
    } catch (error) {
        console.error('Error fetching avatar list:', error);
        throw error;
    }
};

export const updateUserProfile = async (token: string, tenantId: string, updateData: UserInfoUpdateReq): Promise<boolean> => {
    try {
        const response = await Service.updateUsingPost(token, tenantId, updateData);
        if (response.code === 0) {
            return true;
        } else {
            throw new Error(response.message || 'Failed to update user profile');
        }
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
};

export const updateTeamProfile = async (token: string, tenantId: string, updateData: TenantUpdateReq): Promise<boolean> => {
    try {
        const response = await Service.updateUsingPost1(token, tenantId, updateData);
        if (response.code === 0) {
            return true;
        } else {
            throw new Error(response.message || 'Failed to update team profile');
        }
    } catch (error) {
        console.error('Error updating team profile:', error);
        throw error;
    }
};



