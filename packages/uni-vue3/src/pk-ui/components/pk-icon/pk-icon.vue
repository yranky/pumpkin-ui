<template>
    <image :class="[
        bem.e()
    ]" :src="props.name" :style="{
        width: props.size ? props.size + 'px' : '',
        height: props.height ? props.height + 'px' : (props.size ? props.size + 'px' : '')
    }" @click="onClick" v-if="isImage" />

    <text :class="[
        bem.e(),
        props.classPrefix,
        iconClassName
    ]" :style="{
        color: props.color || '',
        fontSize: props.size ? props.size + 'px' : ''
    }" @click="onClick" v-else></text>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { iconProps } from './pk-icon'
import './pk-icon.less'
import { useBem } from '@pk-ui/use'
import './icons/antd-icon.css'

defineOptions({
    name: 'PkIcon',
})

export type iconEmits = {
    (event: 'click', e: MouseEvent): void
}

const props = defineProps(iconProps)
const emits = defineEmits<iconEmits>()

const bem = useBem('icon')

const onClick = (e: MouseEvent) => {
    emits('click', e)
}


const isImage = computed(() => props.name.includes('/'))
const iconClassName = computed(() => `${props.classPrefix}-${props.name}`)

</script>