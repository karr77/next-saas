/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $List_string_ = {
    properties: {
        code: {
            type: 'number',
            format: 'int32',
        },
        data: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        message: {
            type: 'string',
        },
        trace_id: {
            type: 'string',
        },
    },
} as const;
