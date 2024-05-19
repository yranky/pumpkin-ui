<template>
    <div :class="[
        bem.e('column')
    ]" @touchstart.prevent="onColumnTouchStart" @touchmove.prevent="onColumnTouchMove"
        @touchend.prevent="onColumnTouchEnd">
        <div :class="[
            bem.e('wrapper')
        ]" :style="{
            height: visibleItemCount * itemHeight + 'px',
            transform: `translate3d(0, ${translateY + baseTranslateY}px, 0)`,
            transition: `transform ${duration}ms ease-in-out`
        }">
            <div :class="[
                bem.e('item')
            ]" :style="{
                height: itemHeight + 'px'
            }" v-for="item in 10" :key="item">1212</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { pickerColumnEmits, pickerColumnProps } from './picker-column';
import './picker-view.less'
import { useBem, useTouch } from '@pk-ui/use'

const props = defineProps(pickerColumnProps)

const emits = defineEmits(pickerColumnEmits)

defineOptions({
    name: 'PkPickerViewColumn',
})

const bem = useBem('picker-view')

const translateY = ref(0)
const baseTranslateY = computed(() => {
    return (props.itemHeight * props.visibleItemCount) / 2
})
const touch = useTouch()
const duration = ref(200)
const setDuration = (isEnd: boolean) => {
    if (isEnd) duration.value = 200
    else duration.value = 0
}

const onColumnTouchStart = (event: TouchEvent) => {
    setDuration(false)
    touch.start(event)
}

const onColumnTouchMove = (event: TouchEvent) => {
    touch.move(event)
    translateY.value = translateY.value + touch.data.detalY
}

const onColumnTouchEnd = (event: TouchEvent) => {
    setDuration(true)
    touch.end(event)
}

</script>