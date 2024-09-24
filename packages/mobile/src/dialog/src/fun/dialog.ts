import { App, createApp } from "vue"
import PkDialog from "../dialog.vue"
import { extend, usePromiseHooks } from "@pumpkin-ui/utils"
import { DialogOptionsProps, DialogOptions, DialogPromiseHooks, DialogCallbackParams } from "./types"

interface IQueueItem {
    instance: InstanceType<typeof PkDialog>
    app: App,
    el: HTMLDivElement,
    options: DialogOptionsProps
}

const defaultOptions: DialogOptions = {
    overlay: true,
    overlayBackgroundColor: '',
    title: '',
    message: '',
    messageAlign: 'center',
    showClose: false,
    showConfirmButton: true,
    confirmButtonText: '确认',
    confirmButtonColor: '',
    showCancelButton: true,
    cancelButtonText: '取消',
    cancelButtonColor: '',
    buttonReverse: false,
    closeOnPressOverlay: false,
    onClose: () => { },
    onClosed: () => { },
    onOpen: () => { },
    onOpened: () => { },
    onConfirm: () => { },
    onCancel: () => { }
}

let queue: IQueueItem[] = []
let multiple = true

const createDialogInstance = (option: DialogOptions, Hooks: DialogPromiseHooks) => {
    const options: DialogOptionsProps = extend({}, defaultOptions, option, {
        onOnClose: option.onClose || defaultOptions.onClose,
        onOnClosed: option.onClosed || defaultOptions.onClosed,
        onOnOpen: option.onOpen || defaultOptions.onOpen,
        onOnOpened: option.onOpened || defaultOptions.onOpened,
        onOnConfirm: option.onConfirm || defaultOptions.onConfirm,
        onOnCancel: option.onCancel || defaultOptions.onCancel
    })
    delete options.onClose
    delete options.onClosed
    delete options.onOpen
    delete options.onOpened
    delete options.onConfirm
    delete options.onCancel


    const confirmFn = options.onOnConfirm
    options.onOnConfirm = () => {
        confirmFn && confirmFn()
        Hooks.resolve({
            type: 'confirm'
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

    const app = createApp(PkDialog, options)

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

const _showDialog = function (option: DialogOptions): Promise<DialogCallbackParams> {
    const { promise, resolve, reject } = usePromiseHooks()

    if (!multiple) {
        let ins
        while (ins = queue.shift()) {
            ins.app.unmount();
            ins.el.remove();
        }
    }

    const dialogOptions = extend({}, defaultOptions, option)
    const { app, instance, options, el } = createDialogInstance(dialogOptions, {
        resolve: resolve,
        reject
    } as unknown as DialogPromiseHooks);
    (instance as InstanceType<typeof PkDialog>).updateShow(true)
    queue.push({ app, instance, options, el } as IQueueItem)

    return promise as Promise<DialogCallbackParams>
}

const show = function (option: DialogOptions | string) {
    return _showDialog(typeof option === 'string' ? {
        message: option
    } : option)
}

export const Dialog = {
    show
}
