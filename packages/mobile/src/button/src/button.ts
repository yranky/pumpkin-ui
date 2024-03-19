import { definePropType, extend } from '@pk-ui/utils'
import { ButtonHTMLAttributes, Component } from 'vue'


export const buttonTypes = ['primary', 'hazy', 'outline', 'ghost', 'link'] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const


export const buttonProps = extend({}, {
    tag: {
        type: definePropType<string | Component>([String, Object]),
        default: 'button',
    },
    type: {
        type: String,
        values: buttonTypes,
        default: 'primary'
    },
    nativeType: {
        type: String,
        values: buttonNativeTypes,
        default: 'button'
    },
    text: {
        type: String,
        default: ''
    }
})