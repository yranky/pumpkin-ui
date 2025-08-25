import { VNode } from "vue"

export const tabProvideSymbol = Symbol('tabProvide')


export interface ITabExposeToTabs {
    tabId: string,
    getTitle: () => string,
    getVNode: () => VNode | null
}


export interface ITabProvide {
    addTab?: (tab: ITabExposeToTabs) => void,
    removeTab?: (tabId: Symbol | string) => void
}