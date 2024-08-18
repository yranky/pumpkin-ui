import { isRef, Ref } from "vue"
import { FieldRule } from "@pk-ui/mobile"

export function useField<K extends {
    name: string,
    label: string,
    rules?: FieldRule[]
}, T>(props: K, value: T, validateMessage: Ref<string>) {
    const getName = () => (props.name)
    const getValue = () => (isRef(value) ? value.value : value)
    const getRules = () => (props.rules || [])
    const setValidateMessage = (info: string) => validateMessage.value = info
    const getLabel = () => props.label
    const fieldId = Symbol()

    return {
        getName,
        getValue,
        getRules,
        fieldId,
        getLabel,
        setValidateMessage
    }
}