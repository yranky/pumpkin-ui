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
    onClose?: Function,
    onClosed?: Function,
    onOpen?: Function,
    onOpened?: Function
}

export type ActionSheetOptionsProps = ActionSheetOptions & {
    onOnClose?: Function,
    onOnClosed?: Function,
    onOnOpen?: Function,
    onOnOpened?: Function
}