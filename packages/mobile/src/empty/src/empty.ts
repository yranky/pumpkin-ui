import { extend } from "@pumpkin-ui/utils"

export type emptyEmits = {
    (event: 'click', e: MouseEvent): void
}

export const emptyProps = extend({}, {
    icon: {
        type: String,
        default: "container-filled"
    },
    classPrefix: {
        type: String
    },
    text: {
        type: String,
        default: '暂无数据'
    },
    size: {
        type: Number
    },
    height: {
        type: Number
    }
})