import { positionTypes, types } from "../toast"

export type LoadingProps = {
    type?: typeof types[keyof typeof types],
    text?: string,
    overlay?: boolean,
    overlayBackgroundColor?: string,
    position?: typeof positionTypes[keyof typeof positionTypes],
    onClose?: Function,
    onClosed?: Function,
    onOpen?: Function,
    onOpened?: Function
}

export type ToastOptions = LoadingProps & {
    duration?: number
}

export type ToastOptionsProps = ToastOptions & {
    onOnClose?: Function,
    onOnClosed?: Function,
    onOnOpen?: Function,
    onOnOpened?: Function
}