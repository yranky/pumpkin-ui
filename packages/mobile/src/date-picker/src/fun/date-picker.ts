import { extend, usePromiseHooks } from "@pumpkin-ui/utils"
import { App, createApp } from "vue"
import PkDatePicker from "../date-picker.vue"
import { DatePickerOptionsProps, DatePickerOptions, DatePickerCallbackParams, DatePickerPromiseHooks } from "./types"
import { PickerItem } from "../../../picker-view/src/picker-view"

interface IQueueItem {
    instance: InstanceType<typeof PkDatePicker>
    app: App,
    el: HTMLDivElement,
    options: DatePickerOptions
}

const defaultOption: DatePickerOptions = {
    current: void 0,
    min: void 0,
    max: void 0,
    type: ['year', 'month', 'day'],
    formatter: void 0,
    filter: void 0,
    backgroundColor: void 0,
    visibleItemCount: 5,
    itemHeight: 50,
    round: true,
    overlay: true,
    overlayBackgroundColor: '',
    fade: false,
    closeOnPressOverlay: true,
    zIndex: void 0,
    title: '',
    cancelText: '取消',
    confirmText: '确定',
    onChange: () => { },
    onCancel: () => { },
    onConfirm: () => { },
    onClose: () => { },
    onClosed: () => { },
    onOpen: () => { },
    onOpened: () => { },
}

let queue: IQueueItem[] = []
let multiple = true

const createDatePickerInstance = (option: DatePickerOptions, Hooks: DatePickerPromiseHooks) => {
    const options: DatePickerOptionsProps = extend({}, defaultOption, option, {
        onOnChange: option.onChange || defaultOption.onChange,
        onOnCancel: option.onCancel || defaultOption.onCancel,
        onOnConfirm: option.onConfirm || defaultOption.onConfirm,
        onOnClose: option.onClose || defaultOption.onClose,
        onOnClosed: option.onClosed || defaultOption.onClosed,
        onOnOpen: option.onOpen || defaultOption.onOpen,
        onOnOpened: option.onOpened || defaultOption.onOpened,
    })
    delete options.onChange
    delete options.onCancel
    delete options.onConfirm
    delete options.onClose
    delete options.onClosed
    delete options.onOpen
    delete options.onOpened

    const confirmFn = options.onOnConfirm
    options.onOnConfirm = (items: PickerItem[]) => {
        confirmFn && confirmFn(items)
        Hooks.resolve({
            type: 'confirm',
            items
        })
    }

    const cancelFn = options.onOnCancel
    options.onOnCancel = () => {
        cancelFn && cancelFn()
        Hooks.resolve({
            type: 'cancel'
        })
    }

    const fn = options.onOnClosed
    options.onOnClosed = () => {
        fn && fn()
        const ind = queue.findIndex(item => item.options === options)
        queue[ind]?.app.unmount()
        queue[ind]?.el.remove()
        ind > -1 && queue.splice(ind, 1)
    }

    const app = createApp(PkDatePicker, options)

    const el = document.createElement('div')
    const instance = app.mount(el)
    document.body.appendChild(el)

    return {
        app,
        instance,
        options,
        el
    }
}

const _showDatePicker = function (option: DatePickerOptions): Promise<DatePickerCallbackParams> {
    const { promise, resolve, reject } = usePromiseHooks()

    if (!multiple) {
        let ins
        while (ins = queue.shift()) {
            ins.app.unmount()
            ins.el.remove()
            ins = null
        }
    }

    const datePickerOptions = extend({}, defaultOption, option)
    const { app, instance, options, el } = createDatePickerInstance(datePickerOptions, {
        resolve: resolve,
        reject
    } as unknown as DatePickerPromiseHooks);
    (instance as InstanceType<typeof PkDatePicker>).updateShow(true)
    queue.push({ app, instance, options, el } as IQueueItem)

    return promise as Promise<DatePickerCallbackParams>
}

const showDatePicker = function (option: DatePickerOptions = {}) {
    return _showDatePicker(option)
}


export const DatePicker = {
    showDatePicker
}
