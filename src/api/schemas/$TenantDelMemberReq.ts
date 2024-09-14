/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TenantDelMemberReq = {
    properties: {
        user_ids: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'int64',
            },
            isRequired: true,
        },
    },
} as const;
