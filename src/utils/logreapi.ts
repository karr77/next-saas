import { OpenAPI } from '../api';
import { UserLoginPwdReq } from '../api/models/UserLoginPwdReq';
import { UserLoginVerifyCodeReq } from '../api/models/UserLoginVerifyCodeReq';
import { UserRegisterReq } from '../api/models/UserRegisterReq';
import { UserRestPwdReq } from '../api/models/UserRestPwdReq';

// 使用环境变量设置基本 URL
OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://passport.9000aigc.com/passport/v1';

// 设置默认headers
OpenAPI.HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Origin': 'http://localhost:3002',
  'Referer': 'http://localhost:3002/',
};

// API 响应类型
interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  trace_id: string;
}

// 用户信息类型
interface UserInfo {
  id: string;
  account_name: string;
  role: string;
  email: string;
  mobile: string;
  nickname: string;
  avatar_address: string;
  address: string | null;
  active_status: number;
  create_time: string;
  update_time: string;
  account_num: string | null;
  tenant_id: string;
  create_tenant_account_name: string;
  company_name: string;
  company_address: string;
  logo_address: string;
  tenant_create_time: string;
}

// 登录响应类型
interface LoginResponse {
  token: string;
  user_info: UserInfo;
}

// 验证码响应类型
interface VerifyCodeResponse {
  verify_id: string;
}

// API 封装
export const api = {
  loginWithPassword: async (loginData: UserLoginPwdReq): Promise<ApiResponse<LoginResponse>> => {
    const response = await fetch(`${OpenAPI.BASE}/user/login/by/password`, {
      method: 'POST',
      headers: {
        ...OpenAPI.HEADERS,
      },
      body: JSON.stringify(loginData),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<LoginResponse> = await response.json();

    if (data.code === 0 && data.data.token) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('tenant_id', data.data.user_info.tenant_id);
    }

    return data;
  },

  loginWithVerifyCode: async (loginData: UserLoginVerifyCodeReq): Promise<ApiResponse<LoginResponse>> => {
    const response = await fetch(`${OpenAPI.BASE}/user/login/by/verify-code`, {
      method: 'POST',
      headers: {
        ...OpenAPI.HEADERS,
      },
      body: JSON.stringify(loginData),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<LoginResponse> = await response.json();

    if (data.code === 0 && data.data.token) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('tenant_id', data.data.user_info.tenant_id);
    }

    return data;
  },

  register: async (registerData: UserRegisterReq): Promise<ApiResponse<boolean>> => {
    const response = await fetch(`${OpenAPI.BASE}/user/register`, {
      method: 'POST',
      headers: {
        ...OpenAPI.HEADERS,
      },
      body: JSON.stringify(registerData),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },

  getVerificationCode: async (mobile: string, scene: number): Promise<ApiResponse<VerifyCodeResponse>> => {
    const response = await fetch(`${OpenAPI.BASE}/system/send/verify-code`, {
      method: 'POST',
      headers: {
        ...OpenAPI.HEADERS,
      },
      body: JSON.stringify({
        mobile,
        scene,
        type: 1, // Assuming 1 is for mobile verification
      }),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },

  resettingPassword: async (resetData: UserRestPwdReq): Promise<ApiResponse<boolean>> => {
    const response = await fetch(`${OpenAPI.BASE}/user/resetting/password`, {
      method: 'POST',
      headers: {
        ...OpenAPI.HEADERS,
      },
      body: JSON.stringify(resetData),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },

  getAuthToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  },

  getTenantId: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('tenant_id');
    }
    return null;
  },
};