import { mount } from '@vue/test-utils'
import { PkIcon } from '@pumpkin-ui/mobile'

test('render a icon', () => {
    const wrapper = mount(PkIcon, {

    })

    expect(wrapper).toBeTruthy()
})
