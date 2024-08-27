<template>
    <img :class="[
        bem.b()
    ]" :src="props.name" :style="{
        width: props.size ? props.size + 'px' : '',
        height: props.height ? props.height + 'px' : (props.size ? props.size + 'px' : '')
    }" @click="onClick" v-if="isImage" />

    <i :class="[
        bem.b(),
        props.classPrefix,
        iconClassName
    ]" :style="{
        color: props.color || '',
        fontSize: props.size ? props.size + 'px' : ''
    }" @click="onClick" v-else></i>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { iconEmits, iconProps } from './icon'
import './icon.less'
import { useBem } from '@pk-ui/use'
import './icons/antd-icon.css'

defineOptions({
    name: 'PkIcon',
})

const props = defineProps(iconProps)
const emits = defineEmits<iconEmits>()

const bem = useBem('icon')

const onClick = (e: MouseEvent) => {
    emits('click', e)
}


const isImage = computed(() => props.name.includes('/'))
const iconClassName = computed(() => `${props.classPrefix}-${props.name}`)

</script>