<template>
    <view :class="[
        bem.b(),
        bem.eqm('vertical', props.vertical)
    ]" :style="{
        color: props.textColor || ''
    }">
        <view :class="[
            bem.e('icon')
        ]" :style="{
            color: props.color || ''
        }">
            <slot name="icon">
                <view :class="[
                    bem.e('spinner')
                ]" :style="{
                    width: isEmptyValue(props.size) ? '' : props.size + 'rpx',
                    height: isEmptyValue(props.size) ? '' : props.size + 'rpx'
                }" v-if="props.type === 'spinner'">
                    <view v-for="item in 8" :key="item" :class="[
                        bem.e('line'),
                        bem.em('line', `${item}`)
                    ]"></view>
                </view>

                <view :class="[
                    bem.e('circle')
                ]" :style="{
                    width: isEmptyValue(props.size) ? '' : props.size + 'rpx',
                    height: isEmptyValue(props.size) ? '' : props.size + 'rpx'
                }" v-else-if="props.type === 'circular'">
                    <view :class="[
                        bem.e('circle1')
                    ]"></view>
                    <view :class="[
                        bem.e('circle2')
                    ]"></view>
                </view>
            </slot>
        </view>
        <view :class="[
            bem.e('text')
        ]" :style="{
            fontSize: isEmptyValue(props.textSize) ? '' : props.textSize + 'rpx'
        }">
            <slot>{{ props.text }}</slot>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { isEmptyValue } from '@pk-ui/utils';
import { loadingProps } from './pk-loading';
import './pk-loading.less'
import { useBem } from '@pk-ui/use'

defineOptions({
    name: 'PkLoading',
})

const props = defineProps(loadingProps)

const bem = useBem('loading')

</script>