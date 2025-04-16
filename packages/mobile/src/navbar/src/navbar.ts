import { extend } from "@pumpkin-ui/utils"


export type navbarEmits = {
    click: [MouseEvent]
}

export const navbarProps = extend({}, {
    title: {
        type: String,
        default: ''
    },
    showBackArrow: {
        type: Boolean,
        default: true
    }
})