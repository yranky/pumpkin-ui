import { extend } from "@pk-ui/utils"


export type iconEmits = {
    (event: 'click', e: MouseEvent): void
}

export const iconProps = extend({}, {
    name: {
        type: String,
        default: ''
    },
    classPrefix: {
        type: String,
        default: 'antd-icon'
    },
    size: {
        type: Number
    },
    height: {
        type: Number
    },
    color: {
        type: String
    }
})