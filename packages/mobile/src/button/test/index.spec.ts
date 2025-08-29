import { mount } from '@vue/test-utils'
import { PkButton } from '@pumpkin-ui/mobile'
import { useBem } from '@pumpkin-ui/use'

test('render a button', () => {
    const wrapper = mount(PkButton, {

    })

    expect(wrapper).toBeTruthy()
})


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

test('test button slot', () => {
    const wrapper = mount(PkButton, {
        slots: {
            default: '我是按钮文字'
        }
    })

    expect(wrapper.text()).toBe('我是按钮文字')
})