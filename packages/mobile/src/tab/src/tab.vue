<template>
    <div :class="[
        bem.b()
    ]"></div>
</template>
<script lang="ts" setup>
import { useBem } from '@pumpkin-ui/use'
import { tabProps } from './tab'
import { getCurrentInstance } from 'vue'
import './tab.less'

defineOptions({
    name: 'PkTab'
})

const props = defineProps(tabProps)
const bem = useBem('tab')

console.log(getCurrentInstance()?.uid)

</script>