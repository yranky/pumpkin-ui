import { mount } from '@vue/test-utils'
import { PkButton } from '@pumpkin-ui/mobile'

test('render a button', () => {
    const wrapper = mount(PkButton, {

    })

    expect(wrapper).toBeTruthy()
})