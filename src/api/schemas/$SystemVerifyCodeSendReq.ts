/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SystemVerifyCodeSendReq = {
    properties: {
        email: {
            type: 'string',
            description: `邮箱`,
        },
        mobile: {
            type: 'string',
            description: `手机号`,
        },
        scene: {
            type: 'number',
            description: `场景：1：注册 2：快捷登录 3:忘记密码 。。。。。其他的业务场景往上推`,
            isRequired: true,
            format: 'int32',
        },
        type: {
            type: 'number',
            description: `类型(1:手机 2:邮箱)`,
            isRequired: true,
            format: 'int32',
        },
    },
} as const;
