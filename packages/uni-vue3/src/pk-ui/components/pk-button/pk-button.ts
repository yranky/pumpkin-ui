import { extend } from '@pk-ui/utils'
import { computed } from 'vue'
import { loadingTypes } from '../pk-loading/types'
import { buttonTypes, buttonNativeTypes, buttonSizeTypes, bem } from './types'


export const buttonProps = extend({}, {
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
    },
    color: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: ''
    },
    borderColor: {
        type: String,
        default: ''
    },
    loading: {
        type: Boolean,
        default: false
    },
    loadingSize: {
        type: Number,
        default: 40
    },
    loadingType: {
        type: String,
        values: loadingTypes,
        default: 'circular'
    }
})

export const useButtonStyleAndClassName = (props: any) => {
    return computed(() => {
        const { color: bgColor, textColor, borderColor, type, loadingSize } = props

        const style: { [key: string]: string } = {}
        const className = []

        if (bgColor) {
            style['background'] = bgColor
            if (bgColor.indexOf('gradient') > -1) {
                style['border'] = "none"
                type === "primary" ? className.push(bem.m('text-color-invert')) : className.push(bem.m('text-color'))
            }
        }
        if (borderColor || bgColor.indexOf('gradient') === -1) {
            style['border-color'] = borderColor || bgColor
        }

        if (textColor) style['color'] = textColor

        return {
            style,
            className
        }
    })
}