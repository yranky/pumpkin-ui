<template>
    <view :class="[
        bem.b(),
        bem.eqm('link', props.isLink),
        bem.eqm('border', props.border),
        bem.eqm('required', props.required),
        bem.eqm('vertical', props.vertical),
        bem.eqm('disabled', props.disabled)
    ]" @click="onClick" @touchstart="">
        <view :class="[
            bem.e('top')
        ]">
            <view :class="[
                bem.e('required')
            ]" v-if="props.required">*</view>

            <view :class="[
                bem.e('title')
            ]" v-if="$slots.title || props.title">
                <slot name="title">
                    {{ props.title }}
                </slot>
            </view>

            <view :class="[
                bem.e('content')
            ]">
                <view :class="[
                    bem.e('value')
                ]" v-if="$slots.default || props.value">
                    <slot>
                        {{ props.value }}
                    </slot>
                </view>

                <view v-if="props.isLink || $slots['right-icon']" :class="[
                    bem.e('right')
                ]">
                    <slot name="right-icon">
                        <pk-icon name="right-outlined"></pk-icon>
                    </slot>
                </view>
            </view>

        </view>

        <view :class="[
            bem.e('bottom')
        ]">
            <slot name="bottom"></slot>
        </view>
    </view>
</template>
<script setup lang="ts">
import { cellProps } from './pk-cell'
import { cellEmits } from './types'
import { useBem } from '@pk-ui/use'
import "./pk-cell.less"
import { useSlots } from 'vue'
import PkIcon from '../pk-icon/pk-icon.vue'

const bem = useBem('cell')

defineOptions({
    name: 'PkCell',
    options: {
        virtualHost: true
    }
})

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)

const onClick = (event: MouseEvent) => {
    if (props.disabled) return
    emit('click', event);
}

const $slots = useSlots()

</script>