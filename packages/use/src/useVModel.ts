import { nextTick, ref, UnwrapRef, watch } from 'vue'


export function useVModel<P extends Object, K extends keyof P, Name extends string>(
    props: P,
    propName: K,
    emits: (name: Name, ...args: any[]) => void,
    options: { deep?: boolean } = {}
) {
    const eventName = `update:${propName as string}`

    const proxy = ref<P[K]>(props[propName])
    let isUpdating = false

    watch(() => props[propName], (val) => {
        if (!isUpdating) {
            isUpdating = true
            proxy.value = val as UnwrapRef<P[K]>
            nextTick(() => isUpdating = false)
        }
    })

    watch(proxy, (val) => {
        if (!isUpdating && (val !== props[propName] || options.deep)) {
            emits(eventName as Name, val)
        }
    }, {
        deep: options.deep
    })

    return proxy
}