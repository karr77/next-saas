/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TenantApplyPointsReq = {
    properties: {
        points: {
            type: 'number',
            description: `积分消耗值`,
            isRequired: true,
            format: 'double',
        },
        points_consumption_type: {
            type: 'string',
            description: `积分消耗值业务类型`,
            isRequired: true,
        },
    },
} as const;
