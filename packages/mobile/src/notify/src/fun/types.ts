import { notifyTypes, positionTypes } from "../notify"


export type NotifyOptions = {
    position?: typeof positionTypes[keyof typeof positionTypes]
    duration?: number
    message?: string
    type?: typeof notifyTypes[keyof typeof notifyTypes],
    background?: string,
    color?: string,
    onClose?: Function,
    onClosed?: Function,
    onOpen?: Function,
    onOpened?: Function
}

export type NotifyOptionsProps = NotifyOptions & {
    onOnClose?: Function,
    onOnClosed?: Function,
    onOnOpen?: Function,
    onOnOpened?: Function
}