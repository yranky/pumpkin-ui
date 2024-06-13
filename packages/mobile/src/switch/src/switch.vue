<template>
    <div :class="[
        bem.b(),
        bem.m(size),
        bem.eqm('active', value)
    ]" @click="onSwitchClick">
        <div :class="[
            bem.e('slide')
        ]">

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

defineOptions({
    name: 'PkSwitch'
})

const props = defineProps(switchProps)
const emits = defineEmits(switchEmits)

const bem = useBem('switch')

const onSwitchClick = () => {
    console.log('switch点击')
    value.value = !value.value
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