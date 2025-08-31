import { mount } from '@vue/test-utils'
import { PkButton } from '@pumpkin-ui/mobile'
import { useBem } from '@pumpkin-ui/use'

test('render a button', () => {
    const wrapper = mount(PkButton, {

    })

    expect(wrapper).toBeTruthy()
    expect(wrapper.find('button')).toBeTruthy()
})

// test props
test('test button type', () => {
    const types = ['primary', 'hazy', 'outline', 'ghost', 'link']
    types.forEach((i) => {
        const wrapper = mount(PkButton, {
            props: {
                type: i
            }
        })

        expect(wrapper.classes()).toContain(useBem('button').m(i))
    })
})

test('test button native-type', () => {
    const types = ['button', 'submit', 'reset']
    types.forEach((i) => {
        const wrapper = mount(PkButton, {
            props: {
                nativeType: i
            }
        })

        expect(wrapper.attributes()['type']).toBe(i)
    })
})

test('test button text', () => {
    const bem = useBem('button')
    const wrapper = mount(PkButton, {
        props: {
            text: '我是按钮文字'
        }
    })

    expect(wrapper.find(`.${bem.e('content')} .${bem.e('text')}`).text()).toBe('我是按钮文字')
})

test('test button sub-text', () => {
    const bem = useBem('button')
    const wrapper = mount(PkButton, {
        props: {
            subText: '我是子文字'
        }
    })

    expect(wrapper.find(`.${bem.be('sub', 'text')}`).text()).toBe('我是子文字')
})

test('test button size', () => {
    const types = ['xl', 'l', 'm', 's', 'xs']
    const bem = useBem('button')
    types.forEach((i) => {
        const wrapper = mount(PkButton, {
            props: {
                size: i
            }
        })

        expect(wrapper.classes()).toContain(bem.m(i))
    })
})


test('test button round', () => {
    const bem = useBem('button')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkButton, {
            props: {
                round: i
            }
        })

        i && expect(wrapper.classes()).toContain(bem.eqm('round', i))
        !i && expect(wrapper.classes().indexOf(bem.eqm('round', true)) > -1).toBe(false)
    })
})


test('test button square', () => {
    const bem = useBem('button')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkButton, {
            props: {
                square: i
            }
        })

        i && expect(wrapper.classes()).toContain(bem.eqm('square', i))
        !i && expect(wrapper.classes().indexOf(bem.eqm('square', true)) > -1).toBe(false)
    })
})


test('test button block', () => {
    const bem = useBem('button')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkButton, {
            props: {
                block: i
            }
        })

        i && expect(wrapper.classes()).toContain(bem.eqm('block', i))
        !i && expect(wrapper.classes().indexOf(bem.eqm('block', true)) > -1).toBe(false)
    })
})


test('test button disabled', () => {
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkButton, {
            props: {
                disabled: i
            }
        })

        i && expect(wrapper.attributes()['disabled']).toBe('')
        !i && expect(wrapper.attributes()['disabled'] === '').toBe(false)
    })
})


test('test button danger', () => {
    const bem = useBem('button')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkButton, {
            props: {
                danger: i
            }
        })

        i && expect(wrapper.classes()).toContain(bem.eqm('danger', i))
        !i && expect(wrapper.classes().indexOf(bem.eqm('danger', true)) > -1).toBe(false)
    })
})

test('test button warning', () => {
    const bem = useBem('button')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkButton, {
            props: {
                warning: i
            }
        })

        i && expect(wrapper.classes()).toContain(bem.eqm('warning', i))
        !i && expect(wrapper.classes().indexOf(bem.eqm('warning', true)) > -1).toBe(false)
    })
})


test('test button loading', () => {
    const bem = useBem('button')
    const values = [true, false]
    values.forEach(i => {
        const wrapper = mount(PkButton, {
            props: {
                loading: i
            }
        })

        i && expect(wrapper.find(`.${bem.e('loading')}`)).toBeTruthy()
        !i && expect(wrapper.find(`.${bem.e('loading')}`).exists()).toBeFalsy()
    })

})

test('test button slot', () => {
    const bem = useBem('button')
    const wrapper = mount(PkButton, {
        slots: {
            default: '我是按钮文字',
            sub: '我是sub',
            loading: '我是loading'
        }
    })

    expect(wrapper.find(`.${bem.e('content')} .${bem.e('text')}`).text()).toBe('我是按钮文字')
    expect(wrapper.find(`.${bem.e('container')}`).text()).toContain('我是loading')
    expect(wrapper.find(`.${bem.be('sub', 'text')}`).text()).toBe('我是sub')
})
