/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { boolean_ } from '../models/boolean_';
import type { List_ } from '../models/List_';
import type { List_string_ } from '../models/List_string_';
import type { long_ } from '../models/long_';
import type { SystemVerifyCodeSendReq } from '../models/SystemVerifyCodeSendReq';
import type { TenantAddMemberReq } from '../models/TenantAddMemberReq';
import type { TenantApplyPointsReq } from '../models/TenantApplyPointsReq';
import type { TenantDelMemberReq } from '../models/TenantDelMemberReq';
import type { TenantUpdateReq } from '../models/TenantUpdateReq';
import type { UserInfoUpdateReq } from '../models/UserInfoUpdateReq';
import type { UserLoginPwdReq } from '../models/UserLoginPwdReq';
import type { UserLoginVerifyCodeReq } from '../models/UserLoginVerifyCodeReq';
import type { UserRegisterReq } from '../models/UserRegisterReq';
import type { UserRestPwdReq } from '../models/UserRestPwdReq';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Service {
    /**
     * 增加账号授权-rpa自动授权测试
     * @param account account
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @returns string
     * @throws ApiError
     */
    public static addUsingGet(
        account?: string,
        authorization?: string,
        xTenantId?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/passport/v1/system/add/auth',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            query: {
                'account': account,
            },
        });
    }
    /**
     * 团队-积分申请使用
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns boolean_
     * @returns any
     * @throws ApiError
     */
    public static getTenantApplyPointsUsingPost(
        authorization?: string,
        xTenantId?: string,
        requestBody?: TenantApplyPointsReq,
    ): CancelablePromise<boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/tenant/internal/app/apply/points',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 个人、所属团队信息
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @returns
     * @throws ApiError
     */
    public static infoUsingGet(
        authorization?: string, xTenantId?: string, p0?: { headers: { Authorization: string; 'X-TENANT-ID': string; }; },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/passport/v1/user/profile/info',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
        });
    }
    /**
     * 团队-子账号添加
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns boolean_
     * @returns any
     * @throws ApiError
     */
    public static addMemberUsingPost(
        authorization?: string,
        xTenantId?: string,
        requestBody?: TenantAddMemberReq,
    ): CancelablePromise<boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/tenant/add/member',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * （内部使用）自定义登录接口
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @returns string
     * @throws ApiError
     */
    public static loginUsingGet(
        authorization?: string,
        xTenantId?: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/passport/v1/user/login',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
        });
    }
    /**
     * 团队-基本信息-内部使用
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @returns long_
     * @throws ApiError
     */
    public static getAccountNumUsingGet(
        authorization?: string,
        xTenantId?: string,
    ): CancelablePromise<long_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/passport/v1/tenant/base/info',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
        });
    }
    /**
     * 团队-基本信息-内部使用
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @returns
     * @throws ApiError
     */
    public static getTenantBaseInfoUsingGet(
        authorization?: string,
        xTenantId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/passport/v1/tenant/internal/base/info',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
        });
    }
    /**
     * 个人信息修改
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns boolean_
     * @returns any
     * @throws ApiError
     */
    public static updateUsingPost(
        authorization?: string,
        xTenantId?: string,
        requestBody?: UserInfoUpdateReq,
    ): CancelablePromise<boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/user/profile/update',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 头像地址
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @returns List_string_
     * @returns any
     * @throws ApiError
     */
    public static headerImagesListUsingPost(
        authorization?: string,
        xTenantId?: string,
    ): CancelablePromise<List_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/system/public/header/list',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
        });
    }
    /**
     * 密码登陆
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns
     * @returns any
     * @throws ApiError
     */
    public static loginPwdUsingPost(
        authorization?: string,
        xTenantId?: string,
        requestBody?: UserLoginPwdReq,
    ): CancelablePromise<| any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/user/login/by/password',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 发送验证码
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns
     * @returns any
     * @throws ApiError
     */
    public static sendSmsVerifyCodeUsingPost(
        authorization?: string,
        xTenantId?: string,
        requestBody?: SystemVerifyCodeSendReq,
    ): CancelablePromise<| any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/system/send/verify-code',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 团队-子账号删除
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns boolean_
     * @returns any
     * @throws ApiError
     */
    public static delMemberUsingPost(
        authorization?: string,
        xTenantId?: string,
        requestBody?: TenantDelMemberReq,
    ): CancelablePromise<boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/tenant/del/member',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 验证码登陆
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns
     * @returns any
     * @throws ApiError
     */
    public static loginVerifyCodeUsingPost(
        authorization?: string,
        xTenantId?: string,
        requestBody?: UserLoginVerifyCodeReq,
    ): CancelablePromise<| any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/user/login/by/verify-code',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 团队-信息修改
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns boolean_
     * @returns any
     * @throws ApiError
     */
    public static updateUsingPost1(
        authorization?: string,
        xTenantId?: string,
        requestBody?: TenantUpdateReq,
    ): CancelablePromise<boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/tenant/update',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 注册
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns boolean_
     * @returns any
     * @throws ApiError
     */
    public static registerUsingPost(
        authorization?: string,
        xTenantId?: string,
        requestBody?: UserRegisterReq,
    ): CancelablePromise<boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/user/register',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 团队-账号列表
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @returns List_
     * @throws ApiError
     */
    public static tenantUserListUsingGet(
        authorization?: string,
        xTenantId?: string,
    ): CancelablePromise<List_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/passport/v1/tenant/user/list',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
        });
    }
    /**
     * 重置密码
     * @param authorization JWT Token
     * @param xTenantId 租户ID
     * @param requestBody
     * @returns boolean_
     * @returns any
     * @throws ApiError
     */
    public static resettingPasswordUsingPost(
        authorization?: string,
        xTenantId?: string,
        requestBody?: UserRestPwdReq,
    ): CancelablePromise<boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/passport/v1/user/resetting/password',
            headers: {
                'Authorization': authorization,
                'X-TENANT-ID': xTenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
