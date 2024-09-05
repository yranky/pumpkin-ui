import { extend } from "@pk-ui/utils"


export const emptyProps = extend({}, {
    icon: {
        type: String,
        default: "container-filled"
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