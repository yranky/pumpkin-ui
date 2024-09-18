import { messageAlignTypes } from "../dialog"

export type DialogOptions = {
    overlay?: boolean,
    overlayBackgroundColor?: string,
    title?: string,
    message?: string,
    messageAlign?: typeof messageAlignTypes[number],
    showClose?: boolean,
    showConfirmButton?: boolean,
    confirmButtonText?: string,
    confirmButtonColor?: string,
    showCancelButton?: boolean,
    cancelButtonText?: string,
    cancelButtonColor?: string,
    buttonReverse?: boolean,
    closeOnPressOverlay?: boolean,
    onClose?: Function,
    onClosed?: Function,
    onOpen?: Function,
    onOpened?: Function,
    onConfirm?: Function,
    onCancel?: Function
}

export type DialogOptionsProps = DialogOptions & {
    onOnClose?: Function,
    onOnClosed?: Function,
    onOnOpen?: Function,
    onOnOpened?: Function,
    onOnConfirm?: Function,
    onOnCancel?: Function
}


export type DialogCallbackParams = {
    type: 'confirm'
} | {
    type: 'cancel'
}

export type DialogPromiseHooks = {
    resolve: (res: DialogCallbackParams) => void,
    reject: Function
}
