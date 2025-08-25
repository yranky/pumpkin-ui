import { generateRandomId } from "./utils"

export function useTab<K extends {
    title: string
}>(props: K) {
    const getTitle = () => props.title
    const tabId = generateRandomId()

    return {
        getTitle,
        tabId
    }
}