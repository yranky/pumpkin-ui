import { extend } from "@pk-ui/utils"
import { PropType } from "vue"
import { transitionNames } from "./types"


export type transitionEmits = {
    (event: 'onBeforeEnter'): void,
    (event: 'onEnter'): void,
    (event: 'onAfterEnter'): void,
    (event: 'onEnterCancelled'): void,
    (event: 'onBeforeLeave'): void,
    (event: 'onLeave'): void,
    (event: 'onAfterLeave'): void,
    (event: 'onLeaveCancelled'): void
}

export const transitionProps = extend({}, {
    name: {
        type: String as PropType<typeof transitionNames[number]>,
        default: 'fade'
    },
    appear: {
        type: Boolean,
        default: true
    },
    duration: {
        type: Number
    }
})