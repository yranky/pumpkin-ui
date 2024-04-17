<template>
    <div :class="[
        bem.b()
    ]" :style="{
        '--pk-loading-color': color
    }">
        <div :class="[
            bem.e('spinner')
        ]" v-if="type === 'spinner'">
            <i v-for="item in 8" :key="item" :class="[
                bem.e('line'),
                bem.em('line', item)
            ]"></i>
        </div>

        <div :class="[
            bem.e('circle')
        ]" v-else-if="type === 'circular'">
            <svg viewBox="25 25 50 50">
                <circle :class="[
                    bem.e('circle1')
                ]" cy="50" cx="50" r="22" stroke-linecap="round" fill="none"></circle>
                <circle :class="[
                    bem.e('circle2')
                ]" cy="50" cx="50" r="11" stroke-linecap="round" fill="none"></circle>
            </svg>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { loadingProps } from './loading';
import './loading.less'
import { useBem } from '@pk-ui/use'

defineOptions({
    name: 'PkLoading',
})

const props = defineProps(loadingProps)

const bem = useBem('loading')

</script>