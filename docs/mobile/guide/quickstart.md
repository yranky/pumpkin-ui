---
title: 快速开始
lang: zh-cn
---

## 介绍
pumpkin-ui是一个移动端组件库。目前包含vue3移动端版本。

本章节讲介绍如何快速在项目中使用 `pumpkin-ui`

::: tip 提示
您当前浏览的是pumpkin-ui的移动端vue3版本文档
:::

## 安装

### 通过NPM安装

```
    npm install @pumpkin-ui/mobile
```

## 快速上手
### 引入样式文件
使用组件前，需要在项目的main.js中引入全局样式文件
```
import "@pumpkin-ui/mobile/lib/style.css"
```
### 引入组件
我们推荐使用局部引入组件，通过import引入组件，即可使用组件。
```
import { PkButton } from '@pumpkin-ui/mobile'
```
### 使用组件
在模板中使用相应标签。

如下示例代码：
```
<template>
    <div class="button-container">
        <pk-button text="primary 主按钮"></pk-button>
    </div>
</template>
<script lang="ts" setup>
import { PkButton } from '@pumpkin-ui/mobile'

</script>
<style lang="less" scoped>

</style>
```
如上，即可展示：
<pk-button text="primary 主按钮"></pk-button>