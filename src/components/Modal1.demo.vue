<demo>
基础用法
</demo>
<template>
<div>
    <div class="demo-desc">Modal 弹出一个对话框</div>
    <Button @click="toggle">点击打开 Modal</Button>
    <Modal
        v-model:visible="ifVisible" 
        :closeOnClickOverlay="false"
        :confirm="confirm"
        :cancel="cancel">
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
        <template v-slot:content>
            <strong>1</strong>
            <div>2</div>
            <div>3</div>
        </template>
    </Modal>
</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Modal from '../lib/Modal.vue'
import Button from '../lib/Button.vue'
import {openModal} from '../lib/openModal'
export default {
    components: {Modal, Button},
    setup() {
        const ifVisible = ref(false)
        const toggle = () => {
            ifVisible.value = !ifVisible.value
        }        
        const confirm = () => {
            // 点击成功后的逻辑
            // return false
        }        
        const cancel = () => {
            // 点击取消后的逻辑
        }
        return {ifVisible, toggle, confirm, cancel}
    }
}
</script>