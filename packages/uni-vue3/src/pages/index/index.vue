<template>
  <view class="content">
    <pk-button text="文字" @click="toButton"></pk-button>
  </view>
</template>

<script setup lang="ts">
import PkButton from '@/pk-ui/src/button/src/button.vue'
import { ref } from 'vue'

const toButton = () => {
  uni.navigateTo({
    url: '/pages/button/index'
  })
}
</script>

<style></style>
