import { extend } from "@pk-ui/utils"
import { LoadingOptions, ToastOptions, ToastOptionsProps } from "./types"
import { App, createApp, PropType, reactive, ref, toRefs } from "vue"
import PkToast from "../toast.vue"
import { types } from "../toast"

interface IQueueItem {
    instance: InstanceType<typeof PkToast>
    app: App,
    el: HTMLDivElement,
    options: ToastOptionsProps
}

const defaultOptions: ToastOptions = {
    type: 'text',
    text: "",
    overlay: false,
    overlayBackgroundColor: "transparent",
    position: "center",
    duration: 2000,
    onClose: () => { },
    onClosed: () => { },
    onOpen: () => { },
    onOpened: () => { }
}

let queue: IQueueItem[] = []
let multiple = true

const createToastInstance = (option: ToastOptions) => {
    const options: ToastOptionsProps = extend({}, defaultOptions, option, {
        onOnClose: option.onClose || defaultOptions.onClose,
        onOnClosed: option.onClosed || defaultOptions.onClosed,
        onOnOpen: option.onOpen || defaultOptions.onOpen,
        onOnOpened: option.onOpened || defaultOptions.onOpened
    })
    delete options.onClose
    delete options.onClosed
    delete options.onOpen
    delete options.onOpened

    const fn = options.onOnClosed
    options.onOnClosed = () => {
        fn && fn()
        const ind = queue.findIndex(item => item.options === options)
        queue[ind]?.app.unmount()
        queue[ind]?.el.remove()
        ind > -1 && queue.splice(ind, 1)
    }

    const app = createApp(PkToast, options)

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


const setMultiple = function (m: boolean = true) {
    multiple = m
}

const _showToast = function (option: ToastOptions) {
    if (!multiple) {
        let ins
        while (ins = queue.shift()) {
            if (ins.options.type === 'loading') {
                queue.unshift(ins)
                continue
            }
            ins.app.unmount();
            ins.el.remove();
        }
    }

    const toastOption = extend({}, defaultOptions, option)
    const { app, instance, options, el } = createToastInstance(toastOption);
    (instance as InstanceType<typeof PkToast>).updateShow(true)
    queue.push({ app, instance, options, el } as IQueueItem)
    const close = () => (instance as InstanceType<typeof PkToast>).updateShow(false)
    return {
        close
    }
}

const show = function (option: ToastOptions | string) {
    return _showToast(typeof option === 'string' ? {
        text: option
    } : option)
}

const showLoading = function (option?: LoadingOptions | string) {
    hideLoading()

    return _showToast(extend({}, typeof option === 'string' ? {
        text: option
    } : option, { type: "loading", overlay: typeof option === 'string' ? true : option?.overlay }))
}

const hideLoading = () => closeToastByType('loading')

const closeAllToast = () => closeToastByType('loading', true)

const closeToastByType = function (type: typeof types[number], except: boolean = false) {
    for (let i = 0; i < queue.length; i++) {
        const item = queue[i]
        if (except && item?.options.type !== type) queue[i].instance.updateShow(false)
        else if (item.options.type === type) queue[i].instance.updateShow(false)
    }
}

export const Toast = {
    show,
    showLoading,
    closeAllToast,
    setMultiple,
    hideLoading
}
