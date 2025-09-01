import { mount } from '@vue/test-utils'
import { PkCell, PkCellGroup } from '@pumpkin-ui/mobile'
import { useBem } from '@pumpkin-ui/use'

test('render cell', () => {
    const wrapper = mount(PkCellGroup, {
        slots: {
            default: PkCell
        }
    })

    expect(wrapper).toBeTruthy()
})

test('test cell group title', () => {
    const cellGroupBem = useBem('cell-group')

    const wrapper = mount(PkCellGroup, {
        slots: {
            default: PkCell
        },
        props: {
            title: '我是标题'
        }
    })

    expect(wrapper.find(`.${cellGroupBem.e('title')}`).text()).toBe('我是标题')
})

test('test cell group slots', () => {
    const bem = useBem('cell-group')
    const wrapper = mount(PkCellGroup, {
        slots: {
            default: 'default',
            title: 'title',
            extra: 'extra'
        }
    })

    expect(wrapper.find(`.${bem.e('title')}`).text()).toBe('title')
    expect(wrapper.find(`.${bem.e('extra')}`).text()).toBe('extra')
    expect(wrapper.find(`.${bem.e('content')}`).text()).toBe('default')
})

test('test cell title', () => {
    const bem = useBem('cell')

    const wrapper = mount(PkCell, {
        props: {
            title: '我是cell标题'
        }
    })

    expect(wrapper.find(`.${bem.e('title')}`).text()).toBe('我是cell标题')
})


test('test cell value', () => {
    const bem = useBem('cell')

    const wrapper = mount(PkCell, {
        props: {
            value: '我是cell值'
        }
    })

    expect(wrapper.find(`.${bem.e('value')}`).text()).toBe('我是cell值')
})

test('test cell is-link', () => {
    const bem = useBem('cell')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkCell, {
            props: {
                isLink: i
            }
        })

        i && expect(wrapper.find(`.${bem.e('right')}`).exists()).toBeTruthy()
        !i && expect(wrapper.find(`.${bem.e('right')}`).exists()).toBeFalsy()
    })
})


test('test cell border', () => {
    const bem = useBem('cell')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkCell, {
            props: {
                border: i
            }
        })

        i && expect(wrapper.find(`.${bem.eqm('border', i)}`).exists()).toBeTruthy()
        !i && expect(wrapper.classes().find((i) => i === `${bem.eqm('border', true)}`)).toBeFalsy()
    })
})


test('test cell required', () => {
    const bem = useBem('cell')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkCell, {
            props: {
                required: i
            }
        })
        i && expect(wrapper.find(`.${bem.e('required')}`).exists()).toBeTruthy()
        !i && expect(wrapper.find(`.${bem.e('required')}`).exists()).toBeFalsy()
    })
})


test('test cell disabled', () => {
    const bem = useBem('cell')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkCell, {
            props: {
                disabled: i
            }
        })
        i && expect(wrapper.classes().find((i) => i === `${bem.eqm('disabled', true)}`)).toBeTruthy()
        !i && expect(wrapper.classes().find((i) => i === `${bem.eqm('disabled', true)}`)).toBeFalsy()
    })
})


test('test cell slots', () => {
    const bem = useBem('cell')
    const wrapper = mount(PkCell, {
        slots: {
            default: 'default',
            title: 'title',
            "right-icon": 'right-icon',
            bottom: 'bottom'
        }
    })

    expect(wrapper.find(`.${bem.e('value')}`).text()).toBe('default')
    expect(wrapper.find(`.${bem.e('title')}`).text()).toBe('title')
    expect(wrapper.find(`.${bem.e('right')}`).text()).toBe('right-icon')
    expect(wrapper.find(`.${bem.e('bottom')}`).text()).toBe('bottom')
})