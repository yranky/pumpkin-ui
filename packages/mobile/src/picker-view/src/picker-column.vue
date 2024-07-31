<template>
    <div :class="[
        bem.b()
    ]" @touchstart.prevent="onColumnTouchStart" @touchmove.prevent="onColumnTouchMove"
        @touchend.prevent="onColumnTouchEnd" @touchcancel.prevent="onColumnTouchEnd">
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
            }" v-for="item in colItems" :key="item.value">
                {{ item.label }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { pickerColumnEmits, pickerColumnProps } from './picker-column';
import './picker-column.less'
import { useBem, useTouch } from '@pk-ui/use'

const props = defineProps(pickerColumnProps)

const emits = defineEmits<pickerColumnEmits>()

defineOptions({
    name: 'PkPickerViewColumn',
})

const bem = useBem('picker-column')

const translateY = ref(0)
const baseTranslateY = computed(() => {
    return (props.itemHeight * (props.visibleItemCount - 1)) / 2
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
    getIndexByOffset();
}

const getIndexByOffset = () => {
    let index = Math.round(translateY.value / props.itemHeight);
    if (index >= 0) index = 0;
    else if (Math.abs(index) <= props.colItems.length - 1) index = Math.abs(index);
    else index = props.colItems.length - 1;

    translateY.value = -index * props.itemHeight;

    emits('change', props.colItems[index]);
}

</script>