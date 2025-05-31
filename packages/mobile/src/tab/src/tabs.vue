<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('nav')
        ]">
            <div :class="[
                bem.e('nav-item')
            ]">
                第一页
            </div>
            <div :class="[
                bem.e('nav-item')
            ]">
                第一页
            </div>
            <div :class="[
                bem.e('nav-item')
            ]">
                第一页
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
import { onMounted, useSlots } from 'vue'
import './tabs.less'
defineOptions({
    name: 'PkTabs'
})


const props = defineProps(tabsProps)
const bem = useBem('tabs')
const slots = useSlots()

onMounted(() => {
    slots.default && slots.default().forEach((item) => {
        console.log(item)
    })
})


</script>