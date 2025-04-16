<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('left')
        ]">
            <icon v-if="showBackArrow" name="left-outlined" @click="(e: MouseEvent) => emits('click', e)" />
            <slot name="left"></slot>
        </div>
        <div :class="[
            bem.e('center')
        ]">
            <slot>
                {{ props.title }}
            </slot>
        </div>
        <div :class="[
            bem.e('right')
        ]">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useBem } from '@pumpkin-ui/use'
import './navbar.less'
import { navbarEmits, navbarProps } from './navbar'
import Icon from '../../icon/src/icon.vue'

defineOptions({
    name: 'PkNavbar'
})

const props = defineProps(navbarProps)

const emits = defineEmits<navbarEmits>()

const bem = useBem('navbar')

</script>