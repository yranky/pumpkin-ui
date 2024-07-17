import { positionTypes, types } from "../toast"

export type ToastOptions = {
    type?: typeof types[keyof typeof types],
    text?: string,
    overlay?: boolean,
    overlayBackgroundColor?: string,
    position?: typeof positionTypes[keyof typeof positionTypes],
    duration?: number,
    onClose?: Function,
    onClosed?: Function,
    onOpen?: Function,
    onOpened?: Function
}
