<template>
    <div class="switch-container">
        <pk-cell-group>
            <pk-cell title="小号">
                <pk-switch v-model="value" />
            </pk-cell>
            <pk-cell title="大号">
                <pk-switch v-model="value" size="l" />
            </pk-cell>
            <pk-cell title="中号">
                <pk-switch v-model="value" size="m" />
            </pk-cell>
            <pk-cell title="禁用">
                <pk-switch v-model="value" :disabled="true" />
            </pk-cell>
            <pk-cell title="显示加载">
                <pk-switch v-model="value" :loading="true" />
            </pk-cell>
            <pk-cell title="onChange事件">
                <pk-switch v-model="value" @onChange="onChange" />
            </pk-cell>
            <pk-cell title="异步修改">
                <pk-switch v-model="value" :before-change="beforeChange" :loading="loading" />
            </pk-cell>
            <pk-cell title="自定义颜色">
                <pk-switch v-model="value" background="red" inactive-background="#37373d" />
            </pk-cell>
            <pk-cell title="slide插槽">
                <pk-switch v-model="value">
                    <template #slide>
                        <template v-if="value">✅</template>
                        <template v-else>❎</template>
                    </template>
                </pk-switch>
            </pk-cell>
        </pk-cell-group>
    </div>
</template>
<script lang="ts" setup>
import { PkSwitch, PkCell, PkCellGroup, Toast } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)

const onChange = (val) => {
    Toast.show(`当前状态：${val}`)
}

const loading = ref(false)
const beforeChange = (): Promise<boolean> => {
    return new Promise((resolve) => {
        loading.value = true
        setTimeout(() => {
            resolve(true)
            loading.value = false
        }, 3000)
    })
}
</script>
<style lang="less" scoped>
.switch-container {
    padding: 10px 0;
}
</style>