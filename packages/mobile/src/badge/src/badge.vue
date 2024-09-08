<template>
    <div :class="bem.b()">
        <slot></slot>
        <div :class="[
            bem.e('wrapper'),
            bem.eqm('dot', props.dot),
            bem.eqm('default', !!$slots.default)
        ]" v-if="$slots.content || (!isEmptyValue(props.content) && !(props.content === 0 && !props.showZero)) || props.dot"
            :style="{
                '--pk-badge-background': isEmptyValue(props.background) ? '' : props.background,
                transform: contentTransform
            }">
            <div :class="[
                bem.e('content')
            ]">
                <slot name="content" v-if="!props.dot">
                    {{ content }}
                </slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { badgeProps } from './badge'
import { useBem } from '@pk-ui/use'
import './badge.less'
import { computed, useSlots } from 'vue'
import { isEmptyValue } from '@pk-ui/utils'

defineOptions({
    name: 'PkBadge',
})
const props = defineProps(badgeProps)
const bem = useBem('badge')
const $slots = useSlots()


const content = computed(() => {
    if (typeof props.content === 'number') {
        return props.content > props.max ? `${props.max}+` : props.content
    }
    return props.content
})

const contentTransform = computed(() => {
    let x = props.offset[0]
    let y = props.offset[1]

    if (typeof x !== 'number') x = 0
    if (typeof y !== 'number') y = 0

    return `translate3d(${x}px, ${y}px, 0)`
})

</script>