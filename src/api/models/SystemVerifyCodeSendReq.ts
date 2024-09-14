/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SystemVerifyCodeSendReq = {
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 场景：1：注册 2：快捷登录 3:忘记密码 。。。。。其他的业务场景往上推
     */
    scene: number;
    /**
     * 类型(1:手机 2:邮箱)
     */
    type: number;
};

