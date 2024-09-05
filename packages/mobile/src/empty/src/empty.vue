<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('icon')
        ]" v-if="$slots.icon || !isEmptyValue(props.icon)">
            <slot name="icon">
                <icon :name="props.icon" :size="props.size" :height="props.height" />
            </slot>
        </div>
        <div :class="[
            bem.e('text')
        ]" v-if="$slots.default || !isEmptyValue(props.text)">
            <slot>{{ props.text }}</slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import { emptyProps } from './empty'
import Icon from '../../icon/src/icon.vue'
import './empty.less'
import { useSlots } from 'vue'
import { isEmptyValue } from '@pk-ui/utils'


const bem = useBem('empty')
const props = defineProps(emptyProps)
const $slots = useSlots()

</script>