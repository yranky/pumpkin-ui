<template>
    <div :class="[
        bem.b(),
        bem.eqm('link', props.isLink),
        bem.eqm('border', props.border),
        bem.eqm('required', props.required),
        bem.eqm('vertical', props.vertical),
        bem.eqm('disabled', props.disabled)
    ]" :style="{
        '--pk-cell-background': isEmptyValue(props.background) ? '' : props.background
    }" @click="onClick" @touchstart="">
        <div :class="[
            bem.e('top')
        ]">

            <div :class="[
                bem.e('required')
            ]" v-if="props.required">*</div>

            <div :class="[
                bem.e('title')
            ]" v-if="$slots.title || props.title">
                <slot name="title">
                    {{ props.title }}
                </slot>
            </div>

            <div :class="[
                bem.e('content')
            ]">
                <div :class="[
                    bem.e('value')
                ]" v-if="$slots.default || props.value">
                    <slot>
                        {{ props.value }}
                    </slot>
                </div>

                <div v-if="props.isLink || $slots['right-icon']" :class="[
                    bem.e('right')
                ]">
                    <slot name="right-icon">
                        <icon name="right-outlined" />
                    </slot>
                </div>
            </div>

        </div>

        <div :class="[
            bem.e('bottom')
        ]">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { cellEmits, cellProps } from './cell'
import { useBem } from '@pumpkin-ui/use'
import icon from '../../icon/src/icon.vue'
import "./cell.less"
import { useSlots } from 'vue'
import { isEmptyValue } from '@pumpkin-ui/utils'

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)

const bem = useBem('cell')

const onClick = (event: MouseEvent) => {
    if (props.disabled) return
    emit('click', event);
}

const $slots = useSlots()

</script>