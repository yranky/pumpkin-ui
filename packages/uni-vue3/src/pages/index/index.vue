<template>
  <view class="index-container">
    <template v-for="item in modules" :key="item.text">
      <pk-divider>{{ item.text }}</pk-divider>
      <pk-cell-group>
        <template v-for="subItem in item.children" :key="subItem.text">
          <pk-cell :title="subItem.text" is-link @click="toPath(subItem.link)"></pk-cell>
        </template>
      </pk-cell-group>
    </template>
  </view>
</template>

<script setup lang="ts">
import PkCell from '@/pk-ui/components/pk-cell/pk-cell.vue'
import PkCellGroup from '@/pk-ui/components/pk-cell/pk-cell-group.vue'
import PkDivider from '@/pk-ui/components/pk-divider/pk-divider.vue'

import { ref } from 'vue'


const modules = ref([
  {
    text: '基础组件',
    children: [
      {
        text: 'Button 按钮',
        link: '/pages/button/index'
      },
      {
        text: 'Cell 单元格',
        link: '/pages/cell/index'
      },
      {
        text: 'Icon 图标',
        link: '/pages/icon/index'
      },
      {
        text: 'Popup 弹出层',
        link: '/pages/popup/index'
      },
      {
        text: 'Toast 轻提示',
        link: '/pages/toast/index'
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
      }
    ]
  },
  {
    text: '反馈组件',
    children: [
      {
        text: 'Overlay 遮罩',
        link: '/pages/overlay/index'
      }, {
        text: 'Loading 加载',
        link: '/pages/loading/index'
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
        link: '/pages/progress/index'
      },
      {
        text: 'Divider 分割线',
        link: '/pages/divider/index'
      }
    ]
  }
])

const toPath = (path: string) => {
  uni.navigateTo({
    url: path
  })
}
</script>

<style></style>
