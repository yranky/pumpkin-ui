<template>
    <component :is="tag">
        123
    </component>
</template>
<script lang="ts" setup>
import { ButtonTypes, buttonProps } from './button';

defineOptions({
    name: 'PkButton',
})

const props = defineProps(buttonProps)

</script>
