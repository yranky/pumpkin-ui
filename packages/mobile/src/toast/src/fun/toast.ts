import { extend } from "@pk-ui/utils";
import { ToastOptions } from "./types";
import { App, createApp, reactive, ref, toRefs } from "vue";
import Toast from "../toast.vue";

interface IQueueItem {
    instance: InstanceType<typeof Toast>
    app: App
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
let multiple = false

const createToastInstance = (option: ToastOptions) => {

    const options = extend({}, defaultOptions, option)

    const app = createApp(Toast, {
        ...options,
        onOnClose: options.onClose,
        onOnClosed: options.onClosed,
        onOnOpen: options.onOpen,
        onOnOpened: options.onOpened
    })

    const el = document.createElement('div')
    const instance = app.mount(el)
    document.body.appendChild(el)

    return {
        app,
        instance
    }
}

export function showToast(option: ToastOptions) {
    if (!multiple) {
        let ins
        while (ins = queue.shift()) {
            ins.app.unmount();
        }
    }

    const toastOption = extend({}, defaultOptions, option)
    const { app, instance } = createToastInstance(toastOption);
    (instance as InstanceType<typeof Toast>).updateShow(true)
    queue.push({ app, instance } as IQueueItem)

}