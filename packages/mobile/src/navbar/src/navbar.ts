import { extend } from "@pumpkin-ui/utils"


export type navbarEmits = {
    leftClick: [MouseEvent]
}

export const navbarProps = extend({}, {
    title: {
        type: String,
        default: ''
    },
    showBackArrow: {
        type: Boolean,
        default: true
    },
    autoBack: {
        type: Boolean,
        default: true
    },
    fixed: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: Boolean,
        default: true
    },
    zIndex: {
        type: Number
    }
})