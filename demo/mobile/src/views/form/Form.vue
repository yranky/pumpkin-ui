<template>
    <div class="form-container">
        <pk-divider>基础用法</pk-divider>
        <pk-form @on-submit="onSubmit">
            <pk-field label="用户名" name="username" placeholder="请输入用户名"></pk-field>
            <pk-field label="密码" name="password" type="password" placeholder="请输入密码"></pk-field>
            <pk-cell>
                <template #title>
                    <pk-button native-type="submit" block>提交</pk-button>
                </template>
            </pk-cell>
        </pk-form>

        <pk-divider>表单校验</pk-divider>
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

        <pk-divider>表单校验-异步</pk-divider>
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
    </div>
</template>
<script lang="ts" setup>
import { PkForm, PkField, PkDivider, PkButton, PkCell, Toast } from '@pk-ui/mobile'

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

</script>
<style lang="less" scoped>
.form-container {
    min-height: 100vh;
    background-color: #f5f5f5;
}
</style>