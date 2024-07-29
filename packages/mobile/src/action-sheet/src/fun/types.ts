import { ActionSheetItem } from "../action-sheet"

export type ActionSheetOptions = {
    actions: ActionSheetItem[],
    cancel?: boolean,
    cancelText?: string,
    title?: string,
    subTitle?: string,
    overlay?: boolean,
    overlayBackgroundColor?: string,
    closeOnPressOverlay?: boolean,
    closeOnClickAction?: boolean,
    onClose?: Function,
    onClosed?: Function,
    onOpen?: Function,
    onOpened?: Function,
    onCancel?: Function,
    onItemClick?: (item: ActionSheetItem, index: number) => void
}

export type ActionSheetOptionsProps = ActionSheetOptions & {
    onOnClose?: Function,
    onOnClosed?: Function,
    onOnOpen?: Function,
    onOnOpened?: Function,
    onOnCancel?: Function,
    onOnItemClick?: (item: ActionSheetItem, index: number) => void
}

export type ActionSheetCallbackTypes = 'cancel' | 'confirm'


export type ActionSheetCallbackParams = {
    type: 'confirm',
    item: ActionSheetItem,
    index: number
} | {
    type: 'cancel'
}

export type ActionSheetPromiseHooks = {
    resolve: (res: ActionSheetCallbackParams) => void,
    reject: Function
}

