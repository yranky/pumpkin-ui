<template>
    <cell :title="props.label" :class="[
        bem.b()
    ]" :required="props.required" :border="props.border">
        <div :class="[
            bem.e('content')
        ]">
            <div :class="[
                bem.e('wrapper')
            ]">
                <!-- <div :class="[
                    bem.e('placeholder')
                ]">请输入</div> -->
                <input :placeholder="props.placeholder" :class="[
                    bem.e('input')
                ]" v-model="value" @blur="onBlur" @focus="onFocus" @compositionstart="onCompositionStart"
                    @compositionend="onCompositionEnd" @input="onInput" />
            </div>
        </div>
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
import { inject, onBeforeUnmount, onMounted, ref, computed } from 'vue'
import { formProvideSymbol, IFormProvide, useField } from '@pk-ui/utils'

defineOptions({
    name: 'PkField'
})

const props = defineProps(fieldProps)
const emits = defineEmits<fieldEmits>()

const bem = useBem('field')

const onBlur = (e: FocusEvent) => {
    formProvide?.triggerEmit('onBlur', fieldId)
    emits('onBlur', e)
}

const onFocus = (e: FocusEvent) => {
    emits('onFocus', e)
}

const onInput = (e: Event) => {
    isCompositionEnd && formProvide?.triggerEmit('onChange', fieldId)
    isCompositionEnd && emits('onChange', value.value)
}

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

const validateMessage = ref<string>('')

const { getName, getValue, getRules, fieldId, setValidateMessage, getLabel } = useField<typeof props, typeof value>(props, value, validateMessage)

onMounted(() => {
    formProvide?.addField({
        getName,
        getValue,
        getRules,
        fieldId,
        setValidateMessage,
        getLabel
    })
})

onBeforeUnmount(() => {
    formProvide?.removeField(fieldId)
})

</script>