<template>
    <popup v-model="show" position="bottom">
        <div :class="[
            bem.b()
        ]">
            <div :class="[
                bem.e('header')
            ]">
                <div :class="[
                    bem.e('title')
                ]">
                    标题
                </div>
                <div :class="[
                    bem.e('subtitle')
                ]">
                    这是一段描述信息
                </div>
            </div>

            <div :class="[
                bem.e('content')
            ]">
                <div :class="[
                    bem.e('item')
                ]">
                    选项一
                </div>
                <div :class="[
                    bem.e('item')
                ]">
                    选项二
                </div>
            </div>


            <div :class="[
                bem.e('footer')
            ]">
                <div :class="[
                    bem.e('item')
                ]">
                    取消
                </div>
            </div>
        </div>
    </popup>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import Popup from '../../popup/src/popup.vue'
import Loading from '../../loading/src/loading.vue'
import './action-sheet.less'
import { computed } from 'vue'
import { actionSheetProps, actionSheetEmits } from './action-sheet'

defineOptions({
    name: 'PkActionSheet',
})

const bem = useBem('action-sheet')

const props = defineProps(actionSheetProps)

const emits = defineEmits(actionSheetEmits)

const show = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})
</script>