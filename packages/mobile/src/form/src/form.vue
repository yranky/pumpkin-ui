<template>
    <form :class="[
        bem.b()
    ]" @submit.prevent="onSubmit">
        <cell-group>
            <slot></slot>
        </cell-group>
    </form>
</template>
<script lang="ts" setup>
import { formEmits, formProps } from './form'
import { useBem } from '@pk-ui/use'
import cellGroup from '../../cell/src/cell-group.vue'
import './form.less'
import { provide, ref } from 'vue'
import { formFieldValidate, formProvideSymbol, IFieldExposeToForm, IFormProvide } from '@pk-ui/utils'
import { FieldRuleTrigger, IFormValidateErrorResult, IFormValueItem } from './types'

const emits = defineEmits<formEmits>()
const props = defineProps(formProps)

const bem = useBem('form')

const fieldExpose = ref<IFieldExposeToForm[]>([])

const onSubmit = async () => {
    emits('onSubmitValidate')
    const errorResult = await checkFields('onSubmit')
    emits('onSubmitValidateComplete', errorResult)
    if (errorResult.length === 0) emits('onSubmit', getValues())
    else emits('onSubmitFailed', errorResult)
}


let validateId
const checkFields = async (trigger: FieldRuleTrigger | 'force', fieldId?: string): Promise<IFormValidateErrorResult[]> => {
    const validateErrorResults: IFormValidateErrorResult[] = []
    let validateIdTemp = validateId = Symbol()

    let needCheckFields = fieldExpose.value;
    if (fieldId) needCheckFields = fieldExpose.value.filter((i) => i.fieldId === fieldId)

    for (let i = 0; i < needCheckFields.length; i++) {
        const name: string = needCheckFields[i].getName()
        const label: string = needCheckFields[i].getLabel()
        const value: any = needCheckFields[i].getValue()
        //reset message
        needCheckFields[i].setValidateMessage('')

        try {
            await formFieldValidate(needCheckFields[i].getRules() || [], needCheckFields[i].getValue(), props.validateTrigger, trigger, needCheckFields[i].getValidateAutoTrim())
        } catch (err: any) {
            validateErrorResults.push({
                name,
                label,
                message: err.message,
                value
            })
            //set validate message(because maybe async)
            validateIdTemp === validateId && props.showErrorMessage && needCheckFields[i].setValidateMessage(err.message)
            if (props.validateFirst) return validateErrorResults
        }
    }
    return validateErrorResults
}


const validate = async () => {
    const validateErrorResults = await checkFields('force')
    if (validateErrorResults.length > 0) return Promise.reject(validateErrorResults)

    return Promise.resolve([])
}

const getValues = () => {
    const values: IFormValueItem[] = []
    for (let i = 0; i < fieldExpose.value.length; i++) {
        const name: string = fieldExpose.value[i].getName()
        const label: string = fieldExpose.value[i].getLabel()
        const value: any = fieldExpose.value[i].getValue()

        values.push({
            name,
            label,
            value
        })
    }

    return values
}

defineExpose({
    validate,
    submit: onSubmit,
    getValues
})

const addField = (field: IFieldExposeToForm) => {
    fieldExpose.value.push(field)
}

const removeField = (fieldId: string) => {
    const index = fieldExpose.value.findIndex(field => field.fieldId === fieldId)
    if (index > -1) fieldExpose.value.splice(index, 1)
}

const triggerEmit = (trigger: FieldRuleTrigger, fieldId: string) => {
    checkFields(trigger, fieldId)
}

provide<IFormProvide>(formProvideSymbol, {
    addField,
    removeField,
    triggerEmit
})
</script>