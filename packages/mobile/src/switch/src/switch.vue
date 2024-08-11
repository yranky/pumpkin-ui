<template>
    <div :class="[
        bem.b(),
        bem.m(props.size),
        bem.eqm('active', value),
        bem.eqm('disabled', props.disabled)
    ]" @click="onSwitchClick" :style="{
        '--switch-loading-size': props.loadingSize
    }">
        <div :class="[
            bem.e('slide')
        ]">
            <slot name="icon">
                <Loading :class="[
                    bem.e('loading')
                ]" :type="props.loadingType" v-if="props.loading" />
            </slot>
        </div>
        <div :class="[
            bem.e('wrapper')
        ]">
            <div :class="[
                bem.e('close')
            ]">
            </div>
            <div :class="[
                bem.e('open')
            ]">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { switchEmits, switchProps } from './switch'
import { useBem } from '@pk-ui/use'
import './switch.less'
import { computed } from 'vue';
import Loading from '../../loading/src/loading.vue';

defineOptions({
    name: 'PkSwitch'
})

const props = defineProps(switchProps)
const emits = defineEmits(switchEmits)

const bem = useBem('switch')

const onSwitchClick = () => {
    if (!props.disabled) value.value = !value.value
}

const value = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})
</script>