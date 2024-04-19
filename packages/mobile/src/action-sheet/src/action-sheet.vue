<template>
    <popup v-model="show" position="bottom" backgroundColor="transparent">
        <div :class="[
            bem.b()
        ]">
            <div :class="[
                bem.e('header')
            ]" v-if="!!title || !!subtitle">
                <div :class="[
                    bem.e('title')
                ]" v-if="!!title">
                    {{ title }}
                </div>
                <div :class="[
                    bem.e('subtitle')
                ]" v-if="!!subtitle">
                    {{ subtitle }}
                </div>
            </div>

            <div :class="[
                bem.e('content')
            ]">
                <div :class="[
                    bem.e('item'),
                    bem.eqm('loading', !!item.loading),
                    bem.eqm('disabled', !!item.disabled)
                ]" v-for="(item, index) in actions" :key="item.name">
                    <loading :class="[
                        bem.e('item-icon')
                    ]" color="currentColor" v-if="item.loading" />
                    <span :class="[
                        bem.e('text')
                    ]">
                        {{ item.name }}
                    </span>
                </div>
            </div>


            <div :class="[
                bem.e('footer')
            ]" v-if="cancel">
                <div :class="[
                    bem.e('item')
                ]">
                    {{ cancelText }}
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