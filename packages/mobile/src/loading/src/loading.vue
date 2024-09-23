<template>
    <div :class="[
        bem.b(),
        bem.eqm('vertical', props.vertical)
    ]" :style="{
        '--pk-loading-color': props.color,
        '--pk-loading-text-color': props.textColor,
        '--pk-loading-size': props.size,
        '--pk-loading-text-size': props.textSize
    }">
        <div :class="[
            bem.e('icon')
        ]">
            <slot name="icon">
                <div :class="[
                    bem.e('spinner')
                ]" v-if="props.type === 'spinner'">
                    <i v-for="item in 8" :key="item" :class="[
                        bem.e('line'),
                        bem.em('line', `${item}`)
                    ]"></i>
                </div>

                <div :class="[
                    bem.e('circle')
                ]" v-else-if="props.type === 'circular'">
                    <svg viewBox="25 25 50 50">
                        <circle :class="[
                            bem.e('circle1')
                        ]" cy="50" cx="50" r="22" stroke-linecap="round" fill="none"></circle>
                        <circle :class="[
                            bem.e('circle2')
                        ]" cy="50" cx="50" r="11" stroke-linecap="round" fill="none"></circle>
                    </svg>
                </div>
            </slot>
        </div>
        <div :class="[
            bem.e('text')
        ]">
            <slot>{{ props.text }}</slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { loadingProps } from './loading'
import './loading.less'
import { useBem } from '@pk-ui/use'

const props = defineProps(loadingProps)

const bem = useBem('loading')

</script>