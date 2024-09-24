<template>
    <div class="progress-container">
        <pk-divider>基础用法</pk-divider>
        <br />
        <pk-progress :percentage="percent" />
        <br />
        <br />

        <pk-divider>自定义颜色</pk-divider>
        <br />
        <pk-progress :percentage="percent" background="red" />
        <br />
        <br />

        <pk-divider>线条粗细</pk-divider>
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" />
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" background="red" />
        <br />
        <br />

        <pk-divider>显示进度描述</pk-divider>
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" showPivot />
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" background="red" showPivot />
        <br />
        <br />

        <pk-divider>自定义进度描述文字样式</pk-divider>
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" showPivot pivotColor="#34B545" :pivotFontSize="12" />
        <br />
        <br />


        <pk-divider>方形</pk-divider>
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" square />
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" square showPivot />
        <br />
        <br />


        <pk-divider>过渡动画时长</pk-divider>
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" :transitionDuration="1" />
        <br />
        <br />

        <pk-divider>自定义进度描述文字内容</pk-divider>
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" showPivot>
            <template #pivot="info">自定义内容{{ info.percentage }}</template>
        </pk-progress>
        <br />
        <br />


        <pk-divider>自定义轨道背景</pk-divider>
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" trackBackground="#8F9399" />
        <br />
        <br />

        <pk-button @click="add">增加</pk-button>
        <pk-button @click="percent = 100">增加到100</pk-button>
        <pk-button @click="reduce">减少</pk-button>
        <pk-button @click="percent = 0">减少到0</pk-button>
    </div>
</template>
<script lang="ts" setup>
import { PkProgress, PkButton, PkDivider } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

const add = () => {
    const pre = percent.value + 10;
    if (pre > 100) {
        percent.value = 100;
    } else {
        percent.value = pre;
    }
}

const reduce = () => {
    const pre = percent.value - 10;
    if (pre < 0) {
        percent.value = 0;
    } else {
        percent.value = pre;
    }
}
</script>
<style lang="less" scoped>
.progress-container {
    padding: 10px 10px;
}
</style>