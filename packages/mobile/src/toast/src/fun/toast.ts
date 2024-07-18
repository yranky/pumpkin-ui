import { extend } from "@pk-ui/utils";
import { ToastOptions, ToastOptionsProps } from "./types";
import { App, createApp, reactive, ref, toRefs } from "vue";
import PkToast from "../toast.vue";

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
        queue.splice(ind, 1)
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


const setMultiple = function (m: boolean) {
    multiple = m
}

const showToast = function (option: ToastOptions) {
    if (!multiple) {
        let ins
        while (ins = queue.shift()) {
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

const showLoading = function (option?: ToastOptions) {
    return showToast(extend({}, option, { type: "loading", overlay: true }))
}

const closeAllToast = function () {
    while (queue.length) {
        queue.shift()?.instance.updateShow(false)
    }
}

export const Toast = {
    showToast,
    showLoading,
    closeAllToast,
    setMultiple
}
