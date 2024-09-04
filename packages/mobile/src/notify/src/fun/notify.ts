import { App, createApp } from "vue"
import PkNotify from "../notify.vue"
import { NotifyOptions, NotifyOptionsProps } from "./types"
import { extend } from "@pk-ui/utils"
import { notifyTypes } from "../notify"

interface IQueueItem {
    instance: InstanceType<typeof PkNotify>
    app: App,
    el: HTMLDivElement,
    options: NotifyOptionsProps
}

const defaultOptions: NotifyOptions = {
    position: 'top',
    duration: 2000,
    message: '',
    type: 'primary',
    background: '',
    color: '',
    onClose: () => { },
    onClosed: () => { },
    onOpen: () => { },
    onOpened: () => { }
}

let queue: IQueueItem[] = []
let multiple = true

const createNotifyInstance = (option: NotifyOptions) => {
    const options: NotifyOptionsProps = extend({}, defaultOptions, option, {
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

    const app = createApp(PkNotify, options)

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

const _showNotify = function (option: NotifyOptions) {
    if (!multiple) {
        let ins
        while (ins = queue.shift()) {
            ins.app.unmount();
            ins.el.remove();
        }
    }

    const notifyOptions = extend({}, defaultOptions, option)
    const { app, instance, options, el } = createNotifyInstance(notifyOptions);
    (instance as InstanceType<typeof PkNotify>).updateShow(true)
    queue.push({ app, instance, options, el } as IQueueItem)
    const close = () => (instance as InstanceType<typeof PkNotify>).updateShow(false)
    return {
        close
    }
}

const show = function (option: NotifyOptions | string, type: typeof notifyTypes[number] = 'primary') {
    return _showNotify(typeof option === 'string' ? {
        message: option,
        type
    } : option)
}

const success = function (option: NotifyOptions | string) {
    return show(option, 'success')
}

const error = function (option: NotifyOptions | string) {
    return show(option, 'error')
}

const warning = function (option: NotifyOptions | string) {
    return show(option, 'warning')
}

const closeAllNotify = () => {
    for (let i = 0; i < queue.length; i++) {
        queue[i].instance.updateShow(false)
    }
}

export const Notify = {
    setMultiple,
    show,
    success,
    error,
    warning,
    closeAllNotify
}
