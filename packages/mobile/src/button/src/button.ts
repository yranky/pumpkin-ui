import { definePropType, extend } from '@pk-ui/utils'
import { ButtonHTMLAttributes, Component } from 'vue'


export const buttonTypes = ['primary', 'hazy', 'outline', 'ghost', 'link'] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const
export const buttonSizeTypes = ['xl', 'l', 'm', 's', 'xs'] as const


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
    },
    subText: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        values: buttonSizeTypes,
        default: 'm'
    },
    round: {
        type: Boolean,
        default: false
    },
    square: {
        type: Boolean,
        default: false
    },
    block: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    danger: {
        type: Boolean,
        default: false
    },
    warning: {
        type: Boolean,
        default: false
    }
})