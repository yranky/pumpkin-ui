import { definePropType, extend } from '@pk-ui/utils'
import { ButtonHTMLAttributes, Component, computed, ExtractPropTypes } from 'vue'
import { loadingTypes } from '../../loading/src/loading'


export const buttonTypes = ['primary', 'hazy', 'outline', 'ghost', 'link'] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const
export const buttonSizeTypes = ['xl', 'l', 'm', 's', 'xs'] as const
export const buttonEmits = ['click']


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
        type: String,
        default: '20px'
    },
    loadingType: {
        type: String,
        values: loadingTypes,
        default: 'circular'
    }
})

export const useButtonStyle = (props: ExtractPropTypes<typeof buttonProps>) => {
    return computed(() => {
        const { color: bgColor, textColor, borderColor, type, loadingSize } = props

        const style: { [key: string]: string } = {}

        if (bgColor) {
            style['--pk-button-primary-background'] = bgColor
            if (bgColor.indexOf('gradient') > -1) {
                style['--pk-button-primary-border-color'] = "transparent"
                style['--pk-button-primary-text-color'] = type === "primary" ? "var(--pk-text-color-invert)" : "var(--pk-text-color)"
            }
        }
        if (borderColor || bgColor.indexOf('gradient') === -1) {
            style['--pk-button-primary-border-color'] = borderColor || bgColor
        }
        // if (textColor || bgColor.indexOf('gradient') === -1) {
        //     color['--pk-button-primary-text-color'] = textColor || bgColor
        // }
        if (textColor) style['color'] = textColor
        style['--pk-loading-size'] = loadingSize

        return {
            ...style
        }
    })
}