/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TenantAddMemberReq = {
    properties: {
        email: {
            type: 'string',
            description: `邮箱`,
        },
        mobile: {
            type: 'string',
            description: `手机号`,
        },
        nickname: {
            type: 'string',
            description: `昵称`,
        },
        password: {
            type: 'string',
            description: `密码`,
            isRequired: true,
        },
        type: {
            type: 'number',
            description: `类型(1:手机 2:邮箱)`,
            isRequired: true,
            format: 'int32',
        },
    },
} as const;
