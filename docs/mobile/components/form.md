---
title: 表单
lang: zh-cn
aside: false
---

# Form 表单

## 基本使用
需要与`Field`等表单组件配合使用。

```vue
<pk-form></pk-form>
```


## 代码示例
### 基础用法
创建一个不带任何校验的表单。

::: code-tabs#default
@tab template

```vue [template]
     <pk-form @on-submit="onSubmit">
        <pk-field label="用户名" name="username" placeholder="请输入用户名"></pk-field>
        <pk-field label="密码" name="password" type="password" placeholder="请输入密码"></pk-field>
        <pk-cell>
            <template #title>
                <pk-button native-type="submit" block>提交</pk-button>
            </template>
        </pk-cell>
    </pk-form>
```

@tab script
```js [script]
import { PkForm, PkField, PkDivider, PkButton, PkCell, Toast } from '@pk-ui/mobile'

const onSubmit = (data) => {
    Toast.show(JSON.stringify(data))
}
```

@tab style
```css [style]

```
:::


### 表单校验
通过配置每一个表单项的`rules`实现表单校验。表单校验`validator`支持异步方法，返回`Promise`即可。

#### 示例
::: code-tabs#validator
@tab template

```vue [template]
<pk-form @on-submit="onSubmit">
    <pk-field label="用户名" name="username" required placeholder="请输入用户名" :rules="[
        { required: true, message: '用户名不能为空' }
    ]"></pk-field>
    <pk-field label="密码" name="password" required type="password" placeholder="请输入密码" :rules="[
        { validator: passwordValidator }
    ]"></pk-field>
    <pk-cell>
        <template #title>
            <pk-button native-type="submit" block>提交</pk-button>
        </template>
    </pk-cell>
</pk-form>
```

@tab script
```js [script]
import { PkForm, PkField, PkDivider, PkButton, PkCell, Toast } from '@pk-ui/mobile'

const passwordValidator = (rule, value) => {
    if (value.length < 6) throw new Error('密码不能少于6位')
    return true
}

const onSubmit = (data) => {
    Toast.show(JSON.stringify(data))
}
```

@tab style
```css [style]

```
:::


#### 异步示例
::: code-tabs#validator-async
@tab template

```vue [template]
<pk-form @on-submit="onSubmit" @on-submit-validate="Toast.showLoading('校验中...')"
    @on-submit-validate-complete="Toast.hideLoading()">
    <pk-field label="用户名" name="username" required placeholder="请输入用户名" :rules="[
        { required: true, message: '用户名不能为空' },
        { validator: usernameValidator }
    ]"></pk-field>
    <pk-field label="密码" name="password" required type="password" placeholder="请输入密码" :rules="[
        { validator: passwordValidator }
    ]"></pk-field>
    <pk-cell>
        <template #title>
            <pk-button block native-type="submit"> 提交</pk-button>
        </template>
    </pk-cell>
</pk-form>
```

@tab script
```js [script]
import { PkForm, PkField, PkDivider, PkButton, PkCell, Toast } from '@pk-ui/mobile'
import { ref } from 'vue'

const usernameValidator = (rule, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value.length < 3) reject(new Error('用户名已经被占用了'))
            resolve(true)
        }, 1000)
    }) as Promise<boolean>
}

const passwordValidator = (rule, value) => {
    if (value.length < 6) throw new Error('密码不能少于6位')
    return true
}

const onSubmit = (data) => {
    Toast.show(JSON.stringify(data))
}

```

@tab style
```css [style]

```
:::


## API

### Props
| 属性名             | 说明                                                          | 类型                 | 默认值         | 可选值 |
| ------------------ | ------------------------------------------------------------- | -------------------- | -------------- | ------ |
| validate-trigger   | 验证的时机(如果表单项的rule没有配置trigger，则默认使用这个值) | `FieldRuleTrigger[]` | `['onSubmit']` |        |
| validate-first     | 第一项校验不通过时停止校验                                    | `boolean`            | `false`        |        |
| show-error-message | 表单项校验不通过时在下方显示错误提示                          | `boolean`            | `true`         |        |


#### FieldRule
| 属性名    | 说明                  | 类型                                                    | 默认值 |
| --------- | --------------------- | ------------------------------------------------------- | ------ |
| pattern   | 正则表达式            | `RegExp`                                                |        |
| trigger   | 触发时机              | `FieldRuleTrigger｜FieldRuleTrigger[]`                  |        |
| message   | 验证不通过时的提示    | `string`                                                |        |
| required  | 是否必填              | `boolean`                                               |        |
| validator | 自定义验证方法        | `(rule:FieldRule,value:any)=>Promise<boolean>｜boolean` |        |
| formatter | 验证前的formatter方法 | `(value:any)=>Promise<any>｜any`                        |        |


### Events

| 事件名                   | 说明                     | 回调参数                                     |
| ------------------------ | ------------------------ | -------------------------------------------- |
| onSubmit                 | 表单提交事件(验证通过)   | `(values: IFormValueItem[])=>void`           |
| onSubmitFailed           | 表单提交事件(验证不通过) | `(values: IFormValidateErrorResult[])=>void` |
| onSubmitValidate         | 表单提交时验证开始事件   | `()=>void`                                   |
| onSubmitValidateComplete | 表单提交时验证完成事件   | `(errors: IFormValidateErrorResult[])=>void` |

#### IFormValueItem
| 属性名 | 说明                | 类型     | 默认值 |
| ------ | ------------------- | -------- | ------ |
| name   | 表单项的`name`属性  | `string` |        |
| label  | 表单项的`label`属性 | `string` |        |
| value  | 表单项的值          | `any`    |        |

#### IFormValidateErrorResult
| 属性名  | 说明                 | 类型     | 默认值 |
| ------- | -------------------- | -------- | ------ |
| name    | 表单项的`name`属性   | `string` |        |
| label   | 表单项的`label`属性  | `string` |        |
| value   | 表单项的值           | `any`    |        |
| message | 验证不通过的提示文字 | `string` |        |


### Slots
| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |


### Exposes
| 名称      | 说明                                                                             | 类型说明                                  |
| --------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| validate  | 表单验证                                                                         | `()=>Promise<IFormValidateErrorResult[]>` |
| submit    | 表单提交(会触发表单验证，并在校验通过或者通过后触发`onSubmit`和`onSubmitFailed`) | `()=>void`                                |
| getValues | 获取表单中所有表单项的值                                                         | `()=>IFormValueItem[]`                    |



## 样式变量

| 名称 | 默认值 | 说明 |
| ---- | ------ | ---- |