<template>
    <cell :class="[
        bem.b(),
        bem.eqm('vertical', props.vertical),
        bem.m(props.labelAlign)
    ]" :required="props.required" :border="props.border" :is-link="props.isLink" :disabled="props.disabled"
        :vertical="props.vertical">
        <template #title v-if="props.label">
            <label :for="fieldId">{{ props.label }}</label>
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
                        <input v-if="props.rows === 1 && !props.autosize" :id="fieldId" :placeholder="props.placeholder"
                            :class="[
                                bem.e('input')
                            ]" v-model="value" :type="props.type" @blur="onBlur" @focus="onFocus"
                            @compositionstart="onCompositionStart" @compositionend="onCompositionEnd" @input="onInput"
                            :readonly="props.readonly" :disabled="props.disabled" :min="props.min" :max="props.max"
                            :maxlength="props.maxlength" :minlength="props.minlength"
                            :autocomplete="props.autocomplete" />

                        <textarea v-else :id="fieldId" :rows="props.rows" :placeholder="props.placeholder" :class="[
                            bem.e('input'),
                            bem.e('textarea')
                        ]" v-model="value" ref="textareaRef" @blur="onBlur" @input="onInput" @focus="onFocus"
                            :readonly="props.readonly" :disabled="props.disabled" :maxlength="props.maxlength"
                            :minlength="props.minlength" :autocomplete="props.autocomplete"
                            @compositionstart="onCompositionStart" @compositionend="onCompositionEnd"></textarea>
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
        <template #right-icon v-if="showClear">
            <close-circle-filled @click="onClear" />
        </template>
        <template #bottom v-if="validateMessage">
            <div :class="[
                bem.e('tip')
            ]">
                {{ validateMessage }}
            </div>
        </template>
    </cell>
</template>
<script setup lang="ts">
import { fieldEmits, fieldProps } from './field'
import { useBem } from '@pk-ui/use'
import Cell from '../../cell/src/cell.vue'
import './field.less'
import { inject, onBeforeUnmount, onMounted, ref, computed, useSlots, readonly, nextTick } from 'vue'
import { formProvideSymbol, IFormProvide, useField } from '@pk-ui/utils'
import { CloseCircleFilled } from '@ant-design/icons-vue'

defineOptions({
    name: 'PkField'
})

const props = defineProps(fieldProps)
const emits = defineEmits<fieldEmits>()
const $slots = useSlots()
const isFocus = ref(false)

const bem = useBem('field')

const onBlur = (e: FocusEvent) => {
    setTimeout(() => isFocus.value = false)
    formProvide?.triggerEmit('onBlur', fieldId)
    emits('onBlur', e)

    //wait for the close icon to be rerender and next wait for the input to be rerender
    setTimeout(() => nextTick(updateTextareaHeight))
}

const onFocus = (e: FocusEvent) => {
    isFocus.value = true
    emits('onFocus', e)
    nextTick(updateTextareaHeight)
}

const onInput = (e: Event) => {
    updateTextareaHeight()
    isCompositionEnd && formProvide?.triggerEmit('onChange', fieldId)
    isCompositionEnd && emits('onChange', value.value)
}

const onClear = () => {
    value.value = ''
    emits('onClear')
}

const showClear = computed(() => {
    let flag
    switch (props.clearTrigger) {
        case 'always':
            flag = true
            break
        case 'auto':
            flag = isFocus.value
    }
    return props.clearable && value.value && flag
})

let isCompositionEnd = true
const onCompositionStart = (e: CompositionEvent) => isCompositionEnd = false
const onCompositionEnd = (e: CompositionEvent) => {
    formProvide?.triggerEmit('onChange', fieldId)
    emits('onChange', value.value)
    isCompositionEnd = true
}


const formProvide = inject<IFormProvide>(formProvideSymbol)

const _value = ref<string>('')
const value = computed({
    get() {
        if (props.modelValue === void 0) return _value.value
        return props.modelValue
    },
    set(val) {
        if (props.modelValue === void 0) _value.value = val
        emits('update:modelValue', val)
    }
})

const textareaRef = ref<HTMLTextAreaElement>()
const updateTextareaHeight = () => {
    if (!props.autosize || !textareaRef.value) return
    textareaRef.value.style.height = 'auto'
    let height = textareaRef.value.scrollHeight
    textareaRef.value.style.height = height + 'px'
}
nextTick(updateTextareaHeight)

const validateMessage = ref<string>('')

const { getName, getValue, getRules, fieldId, setValidateMessage, getLabel, getValidateAutoTrim } = useField<typeof props, typeof value>(props, value, validateMessage)

onMounted(() => {
    formProvide?.addField({
        getName,
        getValue,
        getRules,
        fieldId,
        setValidateMessage,
        getLabel,
        getValidateAutoTrim
    })
})

onBeforeUnmount(() => {
    formProvide?.removeField(fieldId)
})

</script>