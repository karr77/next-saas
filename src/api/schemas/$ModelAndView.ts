/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ModelAndView = {
    properties: {
        empty: {
            type: 'boolean',
        },
        model: {
            properties: {
            },
        },
        modelMap: {
            type: 'dictionary',
            contains: {
                type: 'dictionary',
                contains: {
                    properties: {
                    },
                },
            },
        },
        reference: {
            type: 'boolean',
        },
        status: {
            type: 'Enum',
        },
        view: {
            type: 'View',
        },
        viewName: {
            type: 'string',
        },
    },
} as const;
