import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://passport.9000aigc.com';

const api = axios.create({
    baseURL: BASE_URL,
});

// 拦截器添加认证信息
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    const tenantId = localStorage.getItem('tenant_id');

    if (token && tenantId) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['tenantId'] = tenantId;
        config.headers['Accept'] = '*/*';
        config.headers['Accept-Encoding'] = 'gzip, deflate, br';
        config.headers['Connection'] = 'keep-alive';
    }
    console.log('Request Headers:', config.headers);
    console.log('Request URL:', config.url);
    console.log('Request Method:', config.method);

    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    console.log('Response Status:', response.status);
    console.log('Response Data:', response.data);
    return response;
}, (error) => {
    console.error('Response Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
});

// 类型定义
interface UserProfile {
    nickname: string;
    avatar_address: string;
    mobile: string;
    role: string;
    company_name: string;
}

interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
}

// API 函数
export const getUserProfile = async (): Promise<UserProfile> => {
    try {
        const response = await api.get('/passport/v1/user/profile/info');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

export const updateUserProfile = async (data: Partial<UserProfile>): Promise<void> => {
    try {
        await api.post('/passport/v1/user/profile/update', data);
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
};

export const getAvatarList = async (): Promise<string[]> => {
    try {
        const response: AxiosResponse<ApiResponse<string[]>> = await api.post('/passport/v1/user/header/images/list');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching avatar list:', error);
        throw error;
    }
};