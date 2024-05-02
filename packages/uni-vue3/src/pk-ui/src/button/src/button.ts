import { definePropType, extend } from '@pk-ui/utils'
import {computed } from 'vue'


export const buttonTypes = ['primary', 'hazy', 'outline', 'ghost', 'link'] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const
export const buttonSizeTypes = ['xl', 'l', 'm', 's', 'xs'] as const
export const buttonEmits = ['click']

export const buttonProps = extend({}, {
    type: {
        type: String,
        values: buttonTypes,
        default: 'primary'
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
    }
})

export const useButtonStyle = (props:any) => {
    return computed(() => {
        const { color: bgColor, textColor, borderColor, type } = props

        const color: { [key: string]: string } = {}

        if (bgColor) {
            color['--pk-button-primary-background'] = bgColor
            if (bgColor.indexOf('gradient') > -1) {
                color['--pk-button-primary-border-color'] = "transparent"
                color['--pk-button-primary-text-color'] = type === "primary" ? "var(--pk-text-color-invert)" : "var(--pk-text-color)"
            }
        }
        if (borderColor || bgColor.indexOf('gradient') === -1) {
            color['--pk-button-primary-border-color'] = borderColor || bgColor
        }
        if (textColor || bgColor.indexOf('gradient') === -1) {
            color['--pk-button-primary-text-color'] = textColor || bgColor
        }

        
        Object.keys(color).forEach(key => {
            if (color[key] === '') {
                delete color[key];
            }
        })

        return {
            ...color
        }
    })
}