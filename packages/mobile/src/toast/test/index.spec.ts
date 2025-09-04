import { mount } from '@vue/test-utils'
import { PkToast } from '@pumpkin-ui/mobile'

test('render toast', () => {
    const wrapper = mount(PkToast, {

    })

    expect(wrapper).toBeTruthy()
})