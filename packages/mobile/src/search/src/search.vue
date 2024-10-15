<template>
    <pk-form @onSubmit="onSubmit">
        <div :class="[
            bem.b(),
            bem.eqm('has-left', !!$slots.left),
            bem.eqm('has-right', !!$slots.right)
        ]">
            <div :class="[
                bem.e('left')
            ]" v-if="!!$slots.left">
                <slot name="left"></slot>
            </div>
            <div :class="[
                bem.e('content')
            ]">
                <div :class="[
                    bem.e('left-icon')
                ]">
                    <slot name="left-icon"></slot>
                    <pk-icon name="search-outlined" />
                </div>
                <div :class="[
                    bem.e('input')
                ]">
                    <pk-field background="transparent" :style="{
                        padding: 0
                    }" />
                </div>
                <div :class="[
                    bem.e('right-icon')
                ]" v-if="!!$slots['right-icon']">
                    <slot name="right-icon"></slot>
                </div>
            </div>
            <div :class="[
                bem.e('right')
            ]">
                <pk-button size="s" :style="{
                    height: '100%'
                }">搜索</pk-button>
                <slot name="right"></slot>
            </div>
        </div>
    </pk-form>
</template>
<script lang="ts" setup>
import { useBem } from '@pumpkin-ui/use'
import { searchProps } from './search'
import PkForm from '../../form'
import PkField from '../../field'
import PkIcon from '../../icon'
import PkButton from '../../button'
import './search.less'
import { useSlots } from 'vue'

const props = defineProps(searchProps)
const bem = useBem('search')

const $slots = useSlots()

const onSubmit = (values) => {
    console.log(values)
}


</script>