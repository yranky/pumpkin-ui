import { definePropType, extend } from '@pk-ui/utils';
import { Component } from 'vue';


export const ButtonTypes = ['primary', 'hazy', 'outline', 'ghost', 'link'] as const;


export const buttonProps = extend({}, {
    tag: {
        type: definePropType<string | Component>([String, Object]),
        default: 'button',
    },
})