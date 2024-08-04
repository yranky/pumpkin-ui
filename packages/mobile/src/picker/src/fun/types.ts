import { PickerItem } from '../../../picker-view/src/picker-view'

export type PickerOptions = {
    current?: PickerItem['value'][],
    backgroundColor?: string,
    round?: boolean,
    closeOnPressOverlay?: boolean,
    // extends picker-view
    items: PickerItem[],
    visibleItemCount?: number,
    itemHeight?: number,
    // extends popup
    overlay?: boolean,
    overlayBackgroundColor?: string,
    fade?: boolean,
    // extends overlay
    zIndex?: number,
    //extends picker-toolbar
    title?: string,
    cancelText?: string,
    confirmText?: string,
    onChange?: (values: PickerItem[]) => void,
    onCancel?: Function,
    onConfirm?: (values: PickerItem[]) => void,
    onClose?: Function,
    onClosed?: Function,
    onOpen?: Function,
    onOpened?: Function
}


export type PickerOptionsProps = PickerOptions & {
    onOnChange?: (values: PickerItem[]) => void,
    onOnCancel?: Function,
    onOnConfirm?: (values: PickerItem[]) => void,
    onOnClose?: Function,
    onOnClosed?: Function,
    onOnOpen?: Function,
    onOnOpened?: Function
}

export type PickerCallbackTypes = 'cancel' | 'confirm'


export type PickerCallbackParams = {
    type: 'confirm',
    items: PickerItem[]
} | {
    type: 'cancel'
}

export type PickerPromiseHooks = {
    resolve: (res: PickerCallbackParams) => void,
    reject: Function
}
