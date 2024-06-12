<template>
    <div :class="[
        bem.b(),
        bem.m(size),
        bem.eqm('active', value)
    ]" @click="value = !value">
        <div :class="[
            bem.e('slide')
        ]">

        </div>
        <div :class="[
            bem.e('wrapper')
        ]">
            <div :class="[
                bem.e('close')
            ]"></div>
            <div :class="[
                bem.e('open')
            ]"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { switchProps } from './switch'
import { useBem } from '@pk-ui/use'
import './switch.less'
import { ref } from 'vue';

defineOptions({
    name: 'PkSwitch'
})

const value = ref(true);

const props = defineProps(switchProps)

const bem = useBem('switch')
</script>