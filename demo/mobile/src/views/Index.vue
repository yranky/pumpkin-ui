<template>
    <div class="index-container">
        <template v-for="item in modules" :key="item.text">
            <pk-divider>{{ item.text }}</pk-divider>
            <pk-cell-group>
                <router-link v-for="subItem in item.children" :key="subItem.text" :to="subItem.link">
                    <pk-cell :title="subItem.text" is-link></pk-cell>
                </router-link>
            </pk-cell-group>
        </template>
    </div>
</template>
<script lang="ts" setup>
import { PkCell, PkCellGroup, PkDivider } from '@pk-ui/mobile';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const modules = ref([
    {
        text: '基础组件',
        children: [
            {
                text: 'Button 按钮',
                link: '/button'
            },
            {
                text: 'Cell 单元格',
                link: '/cell'
            },
            {
                text: 'Icon 图标',
                link: '/icon'
            },
            {
                text: 'Popup 弹出层',
                link: '/popup'
            },
            {
                text: 'Toast 轻提示',
                link: '/toast'
            }
        ]
    },
    {
        text: '表单组件',
        children: [
            {
                text: 'PickerView 选择器视图',
                link: '/picker-view'
            }, {
                text: 'Picker 选择器',
                link: '/picker'
            }, {
                text: 'DatePicker 日期时间选择器',
                link: '/date-picker'
            }, {
                text: 'Switch 开关',
                link: '/switch'
            }, {
                text: 'Field 输入项',
                link: '/field'
            }, {
                text: 'Form 表单',
                link: '/form'
            }, {
                text: 'Checkbox 复选框',
                link: '/checkbox'
            }, {
                text: 'Radio 单选框',
                link: '/radio'
            }
        ]
    },
    {
        text: '反馈组件',
        children: [
            {
                text: 'Overlay 遮罩',
                link: '/overlay'
            }, {
                text: 'Loading 加载',
                link: '/loading'
            }, {
                text: 'ActionSheet 动作面板',
                link: '/action-sheet'
            }
        ]
    },
    {
        text: '展示组件',
        children: [
            {
                text: 'Progress 进度条',
                link: '/progress'
            },
            {
                text: 'Divider 分割线',
                link: '/divider'
            }
        ]
    }
])

</script>

<style lang="less">
.index-container {
    a {
        text-decoration: none;
    }
}
</style>