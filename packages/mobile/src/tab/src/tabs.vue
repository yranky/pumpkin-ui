<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('nav')
        ]" ref="tabsRef">
            <div :class="[
                bem.e('nav-item'),
                index === tabIndex ? bem.m('active') : ''
            ]" v-for="(item, index) in tabExpose" :key="item.tabId" ref="tabRefs" @click="handleTabClick(item)">
                {{ item.getTitle() }}
            </div>

            <div :class="[
                bem.e('nav-line')
            ]" :style="{
                left: `${tabInfo.currentLeft}px`,
                width: `${tabInfo.currentLineWeight}px`
            }"></div>
        </div>
        <div :class="[
            bem.e('content')
        ]">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBem, useVModel } from '@pumpkin-ui/use'
import { tabsProps, type tabsEmits } from './tabs'
import './tabs.less'
import { ITabExposeToTabs, ITabProvide, tabProvideSymbol } from '@pumpkin-ui/utils'
import { computed, provide, ref, useSlots, watch } from 'vue'
defineOptions({
    name: 'PkTabs'
})

const emits = defineEmits<tabsEmits>()
const props = defineProps(tabsProps)
const bem = useBem('tabs')
const value = useVModel(props, 'modelValue', emits)
const tabExpose = ref<ITabExposeToTabs[]>([])
const tabRefs = ref<HTMLElement[]>([])
const tabsRef = ref<HTMLElement>()

const tabIndex = computed(() => {
    const i = tabExpose.value.findIndex((item) => {
        return value.value === item.getName() || value.value === item.tabId
    })

    return i > -1 ? i : 0
})

watch(() => tabIndex.value, () => {
    if (tabsRef.value) {
        const tab = tabRefs.value[tabIndex.value]
        if (tab) {
            tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        }
    }
})

const tabInfo = computed(() => {
    const tab = tabRefs.value[tabIndex.value]
    let currentLeft = 0
    let currentLineWeight = 0
    if (tab) {
        const tabWidth = tab ? tab.offsetWidth : 0
        //计算
        const preTabs = tabRefs.value.slice(0, tabIndex.value)
        preTabs.forEach((item) => {
            currentLeft += (item.offsetWidth || 0)
        })
        currentLeft += tabWidth / 4
        currentLineWeight = tabWidth / 2
    }

    return {
        currentLeft,
        currentLineWeight
    }
})

const handleTabClick = (item: ITabExposeToTabs) => {
    value.value = item.getName() || item.tabId
}

const slots = useSlots()

const addTab: ITabProvide['addTab'] = (tab) => {
    if (slots.default) {
        const index = slots.default().findIndex((item) => {
            return item.key !== null
                && tab.getVNode()?.key !== null
                && item.key === tab.getVNode()?.key
                && item.type === tab.getVNode()?.type
        })
        // 判断当前的tab应该放在哪里
        if (index > -1) return tabExpose.value.splice(index, 0, tab)
    }
    return tabExpose.value.push(tab)
}

const removeTab: ITabProvide['removeTab'] = (tabId) => {
    const index = tabExpose.value.findIndex(tabItem => tabItem.tabId === tabId)
    if (index > -1) tabExpose.value.splice(index, 1)
}

provide<ITabProvide>(tabProvideSymbol, {
    addTab,
    removeTab,
    activeTab: computed(() => tabExpose.value[tabIndex.value].tabId)
})

</script>