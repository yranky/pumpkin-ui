import { generateRandomId } from "./utils"

export function useTab<K extends {
    title: string,
    name?: string | number
}>(props: K) {
    const getTitle = () => props.title
    const tabId = generateRandomId()
    const getName = () => props.name

    return {
        getTitle,
        tabId,
        getName
    }
}