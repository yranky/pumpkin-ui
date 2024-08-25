<template>
    <view class="progress-container">
        <pk-divider>基础用法</pk-divider>
        <pk-progress :percentage="percent" />
        <view class="gap-row"></view>
        <view class="gap-row"></view>

        <pk-divider>自定义颜色</pk-divider>
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" background="red" />
        <view class="gap-row"></view>
        <view class="gap-row"></view>

        <pk-divider>线条粗细</pk-divider>
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" />
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" background="red" />
        <view class="gap-row"></view>
        <view class="gap-row"></view>

        <pk-divider>显示进度描述</pk-divider>
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" showPivot />
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" background="red" showPivot />
        <view class="gap-row"></view>
        <view class="gap-row"></view>

        <pk-divider>自定义进度描述文字样式</pk-divider>
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" showPivot pivotColor="#34B545" :pivotFontSize="24" />
        <view class="gap-row"></view>
        <view class="gap-row"></view>


        <pk-divider>方形</pk-divider>
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" square />
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" square showPivot />
        <view class="gap-row"></view>
        <view class="gap-row"></view>


        <pk-divider>过渡动画时长</pk-divider>
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" :transitionDuration="1" />
        <view class="gap-row"></view>
        <view class="gap-row"></view>

        <pk-divider>自定义进度描述文字内容</pk-divider>
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" showPivot>
            <template #pivot="info">自定义内容{{ info.percentage }}</template>
        </pk-progress>
        <view class="gap-row"></view>
        <view class="gap-row"></view>


        <pk-divider>自定义轨道背景</pk-divider>
        <view class="gap-row"></view>
        <pk-progress :percentage="percent" :strokeHeight="12" trackBackground="#8F9399" />
        <view class="gap-row"></view>
        <view class="gap-row"></view>

        <view class="actions">
            <pk-button @click="add">增加</pk-button>
            <pk-button @click="percent = 100">增加到100</pk-button>
            <pk-button @click="reduce">减少</pk-button>
            <pk-button @click="percent = 0">减少到0</pk-button>
        </view>
    </view>
</template>
<script lang="ts" setup>
import PkProgress from '@/pk-ui/components/pk-progress/pk-progress.vue'
import PkButton from '@/pk-ui/components/pk-button/pk-button.vue'
import PkDivider from '@/pk-ui/components/pk-divider/pk-divider.vue'
import { ref } from 'vue'

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
    padding: 20rpx 20rpx;
    display: flex;
    flex-direction: column;

    .gap-row {
        width: 100%;
        height: 30rpx;
    }

    .actions {
        display: flex;
    }
}
</style>