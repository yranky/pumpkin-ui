<template>
    <div :class="[
        bem.b()
    ]">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pumpkin-ui/use'
import { tabProps } from './tab'
import { getCurrentInstance, inject, onBeforeUnmount } from 'vue'
import './tab.less'
import { ITabProvide, tabProvideSymbol, useTab } from '@pumpkin-ui/utils'

defineOptions({
    name: 'PkTab'
})

const props = defineProps(tabProps)
const bem = useBem('tab')


const tabProvide = inject<ITabProvide>(tabProvideSymbol, {})
const { getTitle, tabId } = useTab(props)

tabProvide.addTab && tabProvide.addTab({
    tabId,
    getTitle,
    getVNode: () => getCurrentInstance()?.vnode || null
})

onBeforeUnmount(() => {
    tabProvide.removeTab && tabProvide.removeTab(tabId)
})

</script>