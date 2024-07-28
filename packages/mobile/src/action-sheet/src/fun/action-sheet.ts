import { extend } from "@pk-ui/utils";
import { App, createApp, PropType, reactive, ref, toRefs } from "vue";
import PkActionSheet from "../action-sheet.vue";
import { ActionSheetOptions, ActionSheetOptionsProps } from "./types";
import { ActionSheetItem } from "../action-sheet";

interface IQueueItem {
    instance: InstanceType<typeof PkActionSheet>
    app: App,
    el: HTMLDivElement,
    options: ActionSheetOptions
}

const defaultOption: ActionSheetOptions = {
    actions: [],
    cancel: true,
    cancelText: '取消',
    title: '',
    subTitle: '',
    overlay: true,
    overlayBackgroundColor: '',
    closeOnPressOverlay: true,
    onClose: () => { },
    onClosed: () => { },
    onOpen: () => { },
    onOpened: () => { }
}

let queue: IQueueItem[] = []
let multiple = true

const createActionSheetInstance = (option: ActionSheetOptions) => {
    const options: ActionSheetOptionsProps = extend({}, defaultOption, option, {
        onOnClose: option.onClose || defaultOption.onClose,
        onOnClosed: option.onClosed || defaultOption.onClosed,
        onOnOpen: option.onOpen || defaultOption.onOpen,
        onOnOpened: option.onOpened || defaultOption.onOpened
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

    const app = createApp(PkActionSheet, options)

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

const _showActionSheet = function (option: ActionSheetOptions) {
    if (!multiple) {
        let ins
        while (ins = queue.shift()) {
            ins.app.unmount();
            ins.el.remove();
        }
    }

    const ActionSheetOption = extend({}, defaultOption, option)
    const { app, instance, options, el } = createActionSheetInstance(ActionSheetOption);
    (instance as InstanceType<typeof PkActionSheet>).updateShow(true)
    queue.push({ app, instance, options, el } as IQueueItem)
    const close = () => (instance as InstanceType<typeof PkActionSheet>).updateShow(false)
    return {
        close
    }
}

const showActionSheet = function (option: ActionSheetOptions | ActionSheetItem[]) {
    return _showActionSheet(option instanceof Array ? {
        actions: option
    } : option)
}


export const ActionSheet = {
    showActionSheet
}
