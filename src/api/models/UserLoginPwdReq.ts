/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserLoginPwdReq = {
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 密码
     */
    password: string;
    /**
     * 类型(1:手机 2:邮箱)
     */
    type: number;
};

