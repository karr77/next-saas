/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserLoginVerifyCodeReq = {
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 类型(1:手机 2:邮箱)
     */
    type: number;
    /**
     * 验证码
     */
    verify_code: string;
    /**
     * 校验验证码返回的verifyId
     */
    verify_id: number;
};

