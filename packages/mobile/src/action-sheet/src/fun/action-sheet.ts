import { extend, usePromiseHooks } from "@pumpkin-ui/utils"
import { App, createApp } from "vue"
import PkActionSheet from "../action-sheet.vue"
import { ActionSheetCallbackParams, ActionSheetOptions, ActionSheetOptionsProps, ActionSheetPromiseHooks } from "./types"
import { ActionSheetItem } from "../action-sheet"

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
    closeOnClickAction: true,
    onClose: () => { },
    onClosed: () => { },
    onOpen: () => { },
    onOpened: () => { },
    onCancel: () => { },
    onItemClick: () => { }
}

let queue: IQueueItem[] = []
let multiple = true

const createActionSheetInstance = (option: ActionSheetOptions, Hooks: ActionSheetPromiseHooks) => {
    const options: ActionSheetOptionsProps = extend({}, defaultOption, option, {
        onOnClose: option.onClose || defaultOption.onClose,
        onOnClosed: option.onClosed || defaultOption.onClosed,
        onOnOpen: option.onOpen || defaultOption.onOpen,
        onOnOpened: option.onOpened || defaultOption.onOpened,
        onOnCancel: option.onCancel || defaultOption.onCancel,
        onOnItemClick: option.onItemClick || defaultOption.onItemClick
    })
    delete options.onClose
    delete options.onClosed
    delete options.onOpen
    delete options.onOpened
    delete options.onCancel
    delete options.onItemClick


    const clickFn = options.onOnItemClick
    options.onOnItemClick = (item: ActionSheetItem, index: number) => {
        clickFn && clickFn(item, index)
        Hooks.resolve({
            type: 'confirm',
            item,
            index
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

const _showActionSheet = function (option: ActionSheetOptions): Promise<ActionSheetCallbackParams> {
    const { promise, resolve, reject } = usePromiseHooks()

    if (!multiple) {
        let ins
        while (ins = queue.shift()) {
            ins.app.unmount()
            ins.el.remove()
        }
    }

    const actionSheetOption = extend({}, defaultOption, option)
    const { app, instance, options, el } = createActionSheetInstance(actionSheetOption, {
        resolve: resolve,
        reject
    } as unknown as ActionSheetPromiseHooks);
    (instance as InstanceType<typeof PkActionSheet>).updateShow(true)
    queue.push({ app, instance, options, el } as IQueueItem)

    return promise as Promise<ActionSheetCallbackParams>
}

const showActionSheet = function (option: ActionSheetOptions | ActionSheetItem[]) {
    return _showActionSheet(option instanceof Array ? {
        actions: option
    } : option)
}


export const ActionSheet = {
    showActionSheet
}
