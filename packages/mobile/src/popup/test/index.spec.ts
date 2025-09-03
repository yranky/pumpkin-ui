import { mount } from '@vue/test-utils'
import { PkPopup } from '@pumpkin-ui/mobile'

test('render popup', () => {
    const wrapper = mount(PkPopup, {

    })

    expect(wrapper).toBeTruthy()
})