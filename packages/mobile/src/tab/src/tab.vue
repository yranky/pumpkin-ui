<template>
    <div :class="[
        bem.b()
    ]" v-show="contentShow">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pumpkin-ui/use'
import { tabProps } from './tab'
import { computed, getCurrentInstance, inject, onBeforeUnmount, ref } from 'vue'
import './tab.less'
import { ITabProvide, tabProvideSymbol, useTab } from '@pumpkin-ui/utils'

defineOptions({
    name: 'PkTab'
})

const props = defineProps(tabProps)
const bem = useBem('tab')


const tabProvide = inject<ITabProvide>(tabProvideSymbol, {
    activeTab: ref('')
})
const { getTitle, tabId, getName } = useTab(props)
const contentShow = computed(() => tabProvide.activeTab.value === tabId)

const vnode = getCurrentInstance()?.vnode
tabProvide.addTab && tabProvide.addTab({
    tabId,
    getTitle,
    getName,
    getVNode: () => vnode || null
})

onBeforeUnmount(() => {
    tabProvide.removeTab && tabProvide.removeTab(tabId)
})

</script>