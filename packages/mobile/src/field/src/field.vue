<template>
    <cell :class="[
        bem.b(),
        bem.eqm('vertical', props.vertical),
        bem.m(props.labelAlign)
    ]" :required="props.required" :border="props.border" :is-link="props.isLink" :disabled="props.disabled"
        :vertical="props.vertical" @click="onClick">
        <template #title v-if="props.label || $slots.label">
            <slot name="label">
                <label :for="fieldId">{{ props.label }}</label>
            </slot>
        </template>
        <div :class="[
            bem.e('content')
        ]">
            <div :class="[
                bem.e('wrapper')
            ]">
                <!-- input container -->
                <div :class="[
                    bem.e('input__container'),
                    bem.eqm('margin', !$slots.button),
                    bem.m(props.inputAlign)
                ]">
                    <!-- input -->
                    <slot name="input">
                        <!-- <div :class="[
                    bem.e('placeholder')
                ]">请输入</div> -->
                        <textarea v-if="(props.rows > 1 || props.autosize) && props.type === 'text'" :id="fieldId"
                            :rows="props.rows" :placeholder="props.placeholder" :class="[
                                bem.e('input'),
                                bem.e('textarea')
                            ]" v-model="value" ref="textareaRef" @blur="onBlur" @input="onInput" @focus="onFocus"
                            :readonly="props.readonly" :disabled="props.disabled" :maxlength="props.maxlength"
                            :minlength="props.minlength" :autocomplete="props.autocomplete"
                            @compositionstart="onCompositionStart" @compositionend="onCompositionEnd"></textarea>
                        <input v-else :id="fieldId" ref="inputRef" :placeholder="props.placeholder" :class="[
                            bem.e('input')
                        ]" v-model="value" :type="props.type" @blur="onBlur" @focus="onFocus"
                            @compositionstart="onCompositionStart" @compositionend="onCompositionEnd" @input="onInput"
                            :readonly="props.readonly" :disabled="props.disabled" :min="props.min" :max="props.max"
                            :maxlength="props.maxlength" :minlength="props.minlength"
                            :autocomplete="props.autocomplete" />
                    </slot>
                </div>
                <!-- right eg:button -->
                <div :class="[
                    bem.e('button')
                ]" v-if="$slots.button">
                    <slot name="button"></slot>
                </div>
            </div>
        </div>
        <template #right-icon v-if="showClear || $slots['right-icon']">
            <slot name="right-icon" :showClear="showClear">
                <icon name="close-circle-filled" @click="onClear" />
            </slot>
        </template>
        <template #bottom v-if="validateMessage">
            <slot name="tip" :tip="validateMessage">
                <div :class="[
                    bem.e('tip')
                ]">
                    {{ validateMessage }}
                </div>
            </slot>
        </template>
    </cell>
</template>
<script setup lang="ts">
import { fieldEmits, fieldProps } from './field'
import { useBem, useVModel } from '@pk-ui/use'
import Cell from '../../cell/src/cell.vue'
import './field.less'
import { inject, ref, computed, useSlots, nextTick, watch, onBeforeUnmount } from 'vue'
import { formProvideSymbol, IFormProvide, useField } from '@pk-ui/utils'
import Icon from '../../icon/src/icon.vue'

const props = defineProps(fieldProps)
const emits = defineEmits<fieldEmits>()
const $slots = useSlots()
const isFocus = ref(false)

const bem = useBem('field')

const onBlur = (e: FocusEvent) => {
    if (props.disabled || props.readonly) return
    setTimeout(() => isFocus.value = false)
    formProvide.triggerEmit && formProvide.triggerEmit('onBlur', fieldId)
    emits('onBlur', e)

    //wait for the close icon to be rerender and next wait for the input to be rerender
    setTimeout(() => nextTick(updateTextareaHeight))
}

const onFocus = (e: FocusEvent) => {
    if (props.disabled || props.readonly) return
    isFocus.value = true
    emits('onFocus', e)
    nextTick(updateTextareaHeight)
}

const onInput = () => {
    updateTextareaHeight()
    isCompositionEnd && formProvide.triggerEmit && formProvide.triggerEmit('onChange', fieldId)
    isCompositionEnd && emits('onChange', value.value)
}

const onClear = () => {
    value.value = ''
    emits('onClear')
}

const onClick = (event: MouseEvent) => {
    emits('click', event)
}

const showClear = computed(() => {
    switch (props.clearTrigger) {
        case 'always':
            return props.clearable && true
        case 'auto':
            return props.clearable && value.value && isFocus.value
    }
    return false
})

let isCompositionEnd = true
const onCompositionStart = () => isCompositionEnd = false
const onCompositionEnd = () => {
    formProvide.triggerEmit && formProvide.triggerEmit('onChange', fieldId)
    emits('onChange', value.value)
    isCompositionEnd = true
}


const formProvide = inject<IFormProvide>(formProvideSymbol, {})


const value = useVModel(props, 'modelValue', emits)

watch(() => value.value, () => {
    if (!isFocus.value) nextTick(updateTextareaHeight)
})

const textareaRef = ref<HTMLTextAreaElement>()
const inputRef = ref<HTMLInputElement>()
const updateTextareaHeight = () => {
    if (!props.autosize || !textareaRef.value) return
    textareaRef.value.style.height = 'auto'
    let height = textareaRef.value.scrollHeight
    console.log(textareaRef.value.scrollHeight)
    textareaRef.value.style.height = height + 'px'
}
nextTick(updateTextareaHeight)

const validateMessage = ref<string>('')

const { getName, getValue, getRules, fieldId, setValidateMessage, getLabel, getValidateAutoTrim } = useField<typeof props, typeof value>(props, value, validateMessage)

formProvide.addField && formProvide.addField({
    getName,
    getValue,
    getRules,
    fieldId,
    setValidateMessage,
    getLabel,
    getValidateAutoTrim
})

onBeforeUnmount(() => {
    formProvide.removeField && formProvide.removeField(fieldId)
})

const focus = () => {
    if (textareaRef.value || inputRef.value) (textareaRef.value || inputRef.value)?.focus()
}

const blur = () => {
    if (textareaRef.value || inputRef.value) (textareaRef.value || inputRef.value)?.blur()
}

defineExpose({
    focus,
    blur
})

</script>