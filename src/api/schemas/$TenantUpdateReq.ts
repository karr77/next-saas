/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TenantUpdateReq = {
    properties: {
        company_address: {
            type: 'string',
            description: `企业地址`,
        },
        company_name: {
            type: 'string',
            description: `公司名称`,
        },
        logo_address: {
            type: 'string',
            description: `企业logo`,
        },
        tenant_id: {
            type: 'number',
            description: `租户id`,
            format: 'int64',
        },
    },
} as const;
