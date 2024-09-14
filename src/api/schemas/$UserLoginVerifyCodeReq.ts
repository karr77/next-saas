/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserLoginVerifyCodeReq = {
    properties: {
        email: {
            type: 'string',
            description: `邮箱`,
        },
        mobile: {
            type: 'string',
            description: `手机号`,
        },
        type: {
            type: 'number',
            description: `类型(1:手机 2:邮箱)`,
            isRequired: true,
            format: 'int32',
        },
        verify_code: {
            type: 'string',
            description: `验证码`,
            isRequired: true,
        },
        verify_id: {
            type: 'number',
            description: `校验验证码返回的verifyId`,
            isRequired: true,
            format: 'int64',
        },
    },
} as const;
