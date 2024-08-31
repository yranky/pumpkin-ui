<template>
    <div class="radio-container">
        <pk-radio-group :square="square" :disabled="square" v-model="value">
            <pk-radio>圆形</pk-radio>
            <pk-radio :square="false" :value="2">方形</pk-radio>
            <pk-radio :disabled="false" :value="1">方形方形方形</pk-radio>
            <pk-radio :disabled="false">方形</pk-radio>
            <pk-radio :disabled="false">方形方形方形方形方形方形方形</pk-radio>
            <pk-radio :disabled="false">方形</pk-radio>
            <pk-radio :disabled="false" :size="100">方形</pk-radio>
            <pk-radio :size="60" :group="false">
                方形
                <template #icon="{ checked }">
                    <pk-icon name="android-outlined" :color="checked ? 'red' : 'black'" />
                </template>
            </pk-radio>
        </pk-radio-group>
    </div>
</template>
<script lang="ts" setup>
import { PkRadio, PkRadioGroup, PkIcon } from '@pk-ui/mobile'
import { ref } from 'vue';

const square = ref(false)
const value = ref(1)

setTimeout(() => {
    value.value = 2

    console.log('触发了')
}, 5000)
</script>
<style lang="less" scoped>
.radio-container {
    padding: 10px 0;
}
</style>