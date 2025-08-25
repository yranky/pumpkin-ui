<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('nav')
        ]">
            <div :class="[
                bem.e('nav-item')
            ]" v-for="item in tabExpose" :key="item.tabId">
                {{ item.getTitle() }}
            </div>
        </div>
        <div :class="[
            bem.e('content')
        ]">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pumpkin-ui/use'
import { tabsProps } from './tabs'
import './tabs.less'
import { ITabExposeToTabs, ITabProvide, tabProvideSymbol } from '@pumpkin-ui/utils'
import { onUpdated, provide, ref, useSlots } from 'vue'
defineOptions({
    name: 'PkTabs'
})

const props = defineProps(tabsProps)
const bem = useBem('tabs')

const tabExpose = ref<ITabExposeToTabs[]>([])

const slots = useSlots()

const addTab: ITabProvide['addTab'] = (tab) => {
    let index = tabExpose.value.length - 1
    if (slots.default) {
        index = slots.default().findIndex((item) => {
            return item.key === tab.getVNode()?.key && item.type === tab.getVNode()?.type
        })
    }
    // 判断当前的tab应该放在哪里
    tabExpose.value.splice(index, 0, tab)

}

const removeTab: ITabProvide['removeTab'] = (tabId) => {
    const index = tabExpose.value.findIndex(tabItem => tabItem.tabId === tabId)
    if (index > -1) tabExpose.value.splice(index, 1)
}

provide<ITabProvide>(tabProvideSymbol, {
    addTab,
    removeTab
})

</script>