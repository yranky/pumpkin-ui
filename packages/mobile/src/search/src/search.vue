<template>
    <pk-form @onSubmit="onSubmit">
        <div :class="[
            bem.b()
        ]">
            <div :class="[
                bem.e('content')
            ]">
                <div :class="[
                    bem.e('left')
                ]">
                    <pk-icon name="search-outlined" />
                </div>
                <div :class="[
                    bem.e('input')
                ]">
                    <pk-field background="transparent" :style="{
                        padding: 0
                    }" />
                </div>
            </div>
        </div>
    </pk-form>
</template>
<script lang="ts" setup>
import { useBem } from '@pumpkin-ui/use'
import { searchProps } from './search'
import PkForm from '../../form'
import PkField from '../../field'
import PkIcon from '../../icon'
import './search.less'


const props = defineProps(searchProps)
const bem = useBem('search')

const onSubmit = (values) => {
    console.log(values)
}


</script>