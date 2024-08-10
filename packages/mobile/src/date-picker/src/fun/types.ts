import { PickerItem } from '../../../picker-view/src/picker-view'
import { DatePickerType } from '../date-picker'

export type DatePickerOptions = {
    current?: Date | string,
    min?: Date | string,
    max?: Date | string,
    type?: DatePickerType[]
    formatter?: (type: DatePickerType, item: PickerItem) => PickerItem,
    filter?: (type: DatePickerType, item: PickerItem[]) => PickerItem[],
    backgroundColor?: string,
    round?: boolean,
    closeOnPressOverlay?: boolean,
    // extends picker-view
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


export type DatePickerOptionsProps = DatePickerOptions & {
    onOnChange?: (values: PickerItem[]) => void,
    onOnCancel?: Function,
    onOnConfirm?: (values: PickerItem[]) => void,
    onOnClose?: Function,
    onOnClosed?: Function,
    onOnOpen?: Function,
    onOnOpened?: Function
}

export type DatePickerCallbackTypes = 'cancel' | 'confirm'


export type DatePickerCallbackParams = {
    type: 'confirm',
    items: PickerItem[]
} | {
    type: 'cancel'
}

export type DatePickerPromiseHooks = {
    resolve: (res: DatePickerCallbackParams) => void,
    reject: Function
}
