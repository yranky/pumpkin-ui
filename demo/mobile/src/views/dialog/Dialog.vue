<template>
    <div class="dialog-container">
        <pk-dialog v-model="show" showClose showCancelButton buttonReverse>
            ces1
        </pk-dialog>
    </div>
</template>
<script lang="ts" setup>
import { PkDialog } from '@pk-ui/mobile'
import { ref } from 'vue'

const show = ref(false)

setTimeout(() => {
    show.value = true
}, 500)

</script>
<style lang="less" scoped>
.dialog-container {
    padding: 0;
}
</style>