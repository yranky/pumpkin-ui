# Pumpkin-UI

#### 基于Vue3的移动端UI组件库

## 快速开始
### 1. 安装依赖
#### 使用`npm`
```bash
npm i @pumpkin-ui/mobile
```
也可使用`yarn`、`pnpm`等工具安装

```bash
#使用yarn

yarn add @pumpkin-ui/mobile


#使用pnpm

pnpm add @pumpkin-ui/mobile
```

### 2. 引入样式
在`main.js`中引入样式
```js
import "@pumpkin-ui/mobile/lib/style.css"
```


### 3.引入组件
我们推荐使用局部引入组件，通过import引入组件，即可使用组件。

```js
import { PkButton } from '@pumpkin-ui/mobile'
```

### 4.使用组件
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
```

## 项目地址
[https://github.com/yranky/pumpkin-ui](https://github.com/yranky/pumpkin-ui)

## 开源协议
[MIT License](./LICENSE)
