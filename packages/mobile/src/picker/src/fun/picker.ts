import { extend, usePromiseHooks } from "@pumpkin-ui/utils"
import { App, createApp } from "vue"
import PkPicker from "../picker.vue"
import { PickerOptionsProps, PickerOptions, PickerCallbackParams, PickerPromiseHooks } from "./types"
import { PickerItem } from "../../../picker-view/src/picker-view"

interface IQueueItem {
    instance: InstanceType<typeof PkPicker>
    app: App,
    el: HTMLDivElement,
    options: PickerOptions
}

const defaultOption: PickerOptions = {
    current: void 0,
    backgroundColor: void 0,
    items: [],
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

const createPickerInstance = (option: PickerOptions, Hooks: PickerPromiseHooks) => {
    const options: PickerOptionsProps = extend({}, defaultOption, option, {
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

    const app = createApp(PkPicker, options)

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

const _showPicker = function (option: PickerOptions): Promise<PickerCallbackParams> {
    const { promise, resolve, reject } = usePromiseHooks()

    if (!multiple) {
        let ins
        while (ins = queue.shift()) {
            ins.app.unmount()
            ins.el.remove()
        }
    }

    const pickerOptions = extend({}, defaultOption, option)
    const { app, instance, options, el } = createPickerInstance(pickerOptions, {
        resolve: resolve,
        reject
    } as unknown as PickerPromiseHooks);
    (instance as InstanceType<typeof PkPicker>).updateShow(true)
    queue.push({ app, instance, options, el } as IQueueItem)

    return promise as Promise<PickerCallbackParams>
}

const showPicker = function (option: PickerOptions | PickerItem[]) {
    return _showPicker(option instanceof Array ? {
        items: option
    } : option)
}


export const Picker = {
    showPicker
}
