import { isRef, Ref } from "vue"
import { FieldRule } from "@pumpkin-ui/mobile"
import { generateRandomId } from "./utils"

export function useField<K extends {
    name: string,
    label: string,
    rules?: FieldRule[],
    validateAutoTrim: boolean
}, T>(props: K, value: T, validateMessage: Ref<string>) {
    const getName = () => (props.name)
    const getValue = () => (isRef(value) ? value.value : value)
    const getRules = () => (props.rules || [])
    const setValidateMessage = (info: string) => validateMessage.value = info
    const getLabel = () => props.label
    const getValidateAutoTrim = () => props.validateAutoTrim
    const fieldId = generateRandomId()

    return {
        getName,
        getValue,
        getRules,
        fieldId,
        getLabel,
        setValidateMessage,
        getValidateAutoTrim
    }
}