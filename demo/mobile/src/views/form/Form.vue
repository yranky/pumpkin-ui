<template>
    <div class="form-container">
        <pk-form>
            <pk-field label="姓名" name="username" :rules="[
                {
                    required: true,
                    message: '请输入姓名',
                    trigger: ['onBlur', 'onSubmit']
                }
            ]" @on-change="onChange" required></pk-field>
            <pk-field :rows="3" autosize label="姓名" name="username" :rules="[
                {
                    required: true,
                    message: '请输入姓名',
                    trigger: ['onBlur', 'onSubmit']
                }
            ]" @on-change="onChange" required v-model="value"></pk-field>
            <pk-field placeholder="请输入"></pk-field>
            <pk-field :rows="3" autosize label="姓名" name="username" :rules="[
                {
                    required: true,
                    message: '请输入姓名',
                    trigger: ['onBlur', 'onSubmit']
                }
            ]" @on-change="onChange" required></pk-field>


            <pk-field placeholder="color" type='color'></pk-field>
            <pk-field placeholder="date" type='date'></pk-field>
            <pk-field placeholder="datetime-local" type='datetime-local'></pk-field>
            <pk-field placeholder="email" type='email'></pk-field>
            <pk-field placeholder="hidden" type='hidden'></pk-field>
            <pk-field placeholder="month" type='month'></pk-field>
            <pk-field placeholder="number" type='number' :rules="[{
                required: true,
                message: '请输入姓名',
                trigger: ['onBlur', 'onSubmit']
            }]"></pk-field>
            <pk-field placeholder="password" type='password'></pk-field>
            <pk-field placeholder="tel" type='tel'></pk-field>
            <pk-field placeholder="time" type='time'></pk-field>
            <pk-field placeholder="url" type='url'></pk-field>
            <pk-field placeholder="week" type='week'></pk-field>


            <pk-field label="12321212" placeholder="请输入" label-align="right"></pk-field>
            <pk-field required label="12321212" placeholder="请输入" label-align="center"></pk-field>
            <pk-field placeholder="只读" readonly></pk-field>
            <pk-field placeholder="禁用" disabled></pk-field>
            <pk-field placeholder="禁用" is-link disabled></pk-field>
            <pk-field label="开关" placeholder="禁用">
                <template #input>
                    <pk-switch></pk-switch>
                </template>
            </pk-field>
            <pk-field label="开关" placeholder="禁用" vertical>
                <template #input>
                    <pk-switch></pk-switch>
                </template>
                <template #button>
                    <pk-button>123</pk-button>
                </template>
            </pk-field>
            <pk-field placeholder="测试测试测试测试" label="姓名" name="username" :rules="[
                {
                    required: true,
                    message: '请输入姓名',
                    trigger: ['onBlur', 'onSubmit']
                }
            ]" @on-change="onChange" required vertical>
                <template #button>
                    <pk-button>123</pk-button>
                </template>
            </pk-field>

            <pk-cell>
                <template #title>
                    <pk-button native-type="submit" block>提交</pk-button>
                </template>
            </pk-cell>
        </pk-form>
    </div>
</template>
<script lang="ts" setup>
import { PkForm, PkField, PkButton, PkCell, PkSwitch } from '@pk-ui/mobile';
import { ref } from 'vue';

const onChange = (e: any) => {
    console.log(e)
}
const value = ref('121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212')
</script>
<style lang="less" scoped>
.form-container {
    padding: 10px 0;
}
</style>