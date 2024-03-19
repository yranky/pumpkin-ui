
export const defaultNamespace = 'pk'

const _bem = (
    namespace: string,
    block: string,
    blockSuffix?: string,
    element?: string,
    modifier?: string
) => {
    let cls = `${namespace}-${block}`
    if (blockSuffix) cls += `-${blockSuffix}`
    if (element) cls += `__${element}`
    if (modifier) cls += `--${modifier}`
    return cls
}

export const useBem = (block: string) => {
    // namespace-block-blockSuffix
    const b = (blockSuffix?: string) => _bem(defaultNamespace, block, blockSuffix || '')
    // namespace-block__element
    const e = (element?: string) => element ? _bem(defaultNamespace, block, '', element) : ''
    // namespace-block--modifier
    const m = (modifier?: string) => modifier ? _bem(defaultNamespace, block, '', '', modifier) : ''
    // namespace-block-blockSuffix__element
    const be = (blockSuffix?: string, element?: string) => blockSuffix && element ? _bem(defaultNamespace, block, blockSuffix, element) : ''
    // namespace-block-blockSuffix--modifier
    const bm = (blockSuffix: string, modifier: string) => blockSuffix && modifier ? _bem(defaultNamespace, block, blockSuffix, '', modifier) : ''
    // namespace-block__element--modifier
    const em = (element: string, modifier: string) => element && modifier ? _bem(defaultNamespace, block, '', element, modifier) : ''
    // namespace-block-blockSuffix__element--modifier
    const bem = (blockSuffix: string, element: string, modifier: string) => blockSuffix && element && modifier ? _bem(defaultNamespace, block, blockSuffix, element, modifier) : ''

    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem
    }
}