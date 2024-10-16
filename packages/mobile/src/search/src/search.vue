<template>
    <form @submit="emits('onSearch', value)">
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
                    <pk-icon name="search-outlined" @click="(e) => emits('onClickLeftSearchIcon', e)" />
                </div>
                <div :class="[
                    bem.e('input')
                ]">
                    <pk-field background="transparent" :style="{
                        padding: 0
                    }" v-model="value" @onFocus="(e) => emits('onFocus', e)" @onBlur="(e) => emits('onBlur', e)"
                        @onChange="emits('onChange', value)" @onClear="() => emits('onClear')" :border="false"
                        :placeholder="props.placeholder" :name="props.name" :readonly="props.readonly"
                        :disabled="props.disabled" :clear-trigger="props.clearTrigger" :clearable="props.clearable"
                        :maxlength="props.maxlength" :minlength="props.minlength" :autocomplete="props.autocomplete"
                        @click="(e) => emits('click', e)" />
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
                }" nativeType="submit">搜索</pk-button>
                <slot name="right"></slot>
            </div>
        </div>
    </form>
</template>
<script lang="ts" setup>
import { useBem, useVModel } from '@pumpkin-ui/use'
import { searchEmits, searchProps } from './search'
import PkField from '../../field'
import PkIcon from '../../icon'
import PkButton from '../../button'
import './search.less'
import { useAttrs, useSlots } from 'vue'

const props = defineProps(searchProps)
const bem = useBem('search')
const emits = defineEmits<searchEmits>()

const value = useVModel(props, 'modelValue', emits)

const $slots = useSlots()
const $attrs = useAttrs()


</script>