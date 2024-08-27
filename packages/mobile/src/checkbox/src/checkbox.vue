<template>
    <div :class="[
        bem.b(),
        bem.eqm('active', isChecked),
        bem.eqm('square', props.square)
    ]" @click="isChecked = !isChecked">
        <div :class="[
            bem.e('box')
        ]">
            <slot name="icon" v-if="isChecked">
                <pk-icon name="check-outlined" />
            </slot>
        </div>
        <div :class="[
            bem.e('label')
        ]" v-if="$slots.default || props.label">
            <slot>
                {{ props.label }}
            </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import PkIcon from '../../icon/src/icon.vue'
import './checkbox.less'
import { checkboxProps } from './checkbox'
import { ref, useSlots } from 'vue'
defineOptions({
    name: 'PkCheckbox'
})

const isChecked = ref(false)

const bem = useBem('checkbox')
const props = defineProps(checkboxProps)
const $slots = useSlots()

</script>